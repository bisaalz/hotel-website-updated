import React from "react";

const Place = ({ row }) => {
  const { image, name, caption } = row;

  return (
    <div>
      <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4 relative ">
        <img src={image} />
      </div>
      <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      <div class="mt-4 truncate">
        <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
          {name}
        </h2>
        <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
          {caption}
        </span>
      </div>
    </div>
  );
};

export default Place;
