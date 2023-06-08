import React from "react";
import Hostel from "./Hostel";

const hostel = [
  {
    id: 1,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },

  {
    id: 2,
    Name: "Holiday Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },

  {
    id: 3,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },

  {
    id: 4,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },
  {
    id: 4,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },
  {
    id: 4,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },
];

const Section7 = () => {
  return (
    <div className="customer-info px-4 2xl:px-16">
      <div class="relative py-16">
        <div class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 z-0 bg-white dark:bg-black dark:bg-opacity-20 "></div>
        <div class="relative">
          <div class="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div class="text-center w-full max-w-2xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-semibold">
                Explore Nearby Hostels
              </h2>
              <span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Discover great places near where you live
              </span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {hostel.map((row, index) => (
              <Hostel row={row} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
