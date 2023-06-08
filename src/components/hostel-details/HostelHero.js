import React from "react";
import { FaStar, FaMedal } from "react-icons/fa";
import Lightbox from "../common/lightbox";

const HostelHero = () => {
  const images = [
    "/images/blogs/slider/1a.jpeg",
    "/images/blogs/slider/2.webp",
    "/images/blogs/slider/3.jpeg",
    "/images/blogs/slider/1.jpeg",
    "/images/blogs/slider/1.jpeg",
  ];

  return (
    <div>
      <div class="px-4">
        <div className="Title-Head pb-4">
          <h1 className="text-[24px] font-semibold pb-4">
            Baneshwor Boys Hostel
          </h1>
          <span className="reviews inline-flex items-center">
            <FaStar /> <p className="pl-2">5.0</p>.
            <p className="underline pl-2">5 reviews</p>
          </span>

          <span className="reviews inline-flex items-center pl-4">
            <FaMedal />.<p className="underline pl-2">Superhost</p>
            <p className="underline pl-2">Baneshwor, kathmandu, Nepal</p>
          </span>
        </div>
        <Lightbox images={images} />
      </div>
    </div>
  );
};

export default HostelHero;
