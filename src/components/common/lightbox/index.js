import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

export default function LightBox({ images }) {
  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  const { photoIndex, isOpen } = state;

  return (
    <div>
      {/* image gallery */}
      <div class="Top-Gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images?.map((row, index) => (
          <div
            key={index}
            onClick={() =>
              setState({ ...state, isOpen: true, photoIndex: index })
            }
            className={`${
              index == 0 ? "md:col-span-2 row-span-2 " : ""
            } hover:brightness-50`}
          >
            <img className="rounded-[24px]" src={row} alt="img" />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setState({ ...state, isOpen: false })}
          onMovePrevRequest={() =>
            setState({
              ...state,
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            setState({ ...state, photoIndex: (photoIndex + 1) % images.length })
          }
        />
      )}
    </div>
  );
}
