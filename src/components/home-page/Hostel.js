import React from "react";

export default function Hostel({ row, index }) {
  return (
    <div
      key={index}
      class="relative flex items-center p-3 sm:p-6 hover:shadow-xl hover:bg-[#F3F1F0] dark:hover:bg-neutral-700 dark:border-neutral-700 border-[1px] border-[#eaeaea] rounded-[24px]"
      href="/"
    >
      <span class="inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute right-2 top-2 text-gray-800 bg-gray-100">
        {row.Rating}
      </span>
      <div class="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
        <div class="absolute inset-0">
          <img src={row.Photo} class="object-cover w-full h-full" alt="imgs" />
        </div>
      </div>
      <div class="ml-4 flex-grow overflow-hidden">
        <h2 class="text-base font-medium">
          <span class="line-clamp-1">{row.Name}</span>
        </h2>
        <span class="block mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {row.Location}
        </span>
      </div>
    </div>
  );
}
