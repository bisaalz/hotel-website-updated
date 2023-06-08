import React from "react";
import { motion } from "framer-motion";
import { container_stagger, content_variants } from "../common/animationData";
const review = [
  {
    id: 1,
    Name: "Ashley",
    City: "New York",
    Rating: 4.9,
    Photo: "images/girl.png",
  },

  {
    id: 2,
    Name: "Amanda",
    City: "New York",
    Rating: 4.9,
    Photo: "images/girl.png",
  },

  {
    id: 3,
    Name: "Jennifer",
    City: "New York",
    Rating: 4.9,
    Photo: "images/girl.png",
  },

  {
    id: 4,
    Name: "Laura",
    City: "New York",
    Rating: 4.9,
    Photo: "images/girl.png",
  },
  {
    id: 4,
    Name: "Laura",
    City: "New York",
    Rating: 4.9,
    Photo: "images/girl.png",
  },
  {
    id: 4,
    Name: "Laura",
    City: "New York",
    Rating: 4.9,
    Photo: "images/girl.png",
  },
];

const ReviewsSection = () => {
  return (
    <div className="customer-info px-4 2xl:px-16">
      <div class="relative py-16">
        <div class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-orange-50 dark:bg-black dark:bg-opacity-20 "></div>
        <div class="relative">
          <div class="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div class="text-center w-full max-w-2xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-semibold">Our Reviews</h2>
              <span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Rating based on customer reviews
              </span>
            </div>
          </div>
          <motion.div
            variants={container_stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            class="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "
          >
            {review.map((row, index) => (
              <motion.div
                key={index}
                variants={content_variants}
                class="cards  dark:hover:bg-neutral-700 dark:border-neutral-700 bg-white dark:bg-[#262626] relative flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7 rounded-[24px] hover:shadow-xl hover:bg-gray-200 transition delay-75"
                // href="/"
              >
                <div class="relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-20 h-20 text-2xl ring-1 ring-white dark:ring-neutral-900">
                  <img
                    class="absolute inset-0 w-full h-full object-cover rounded-full"
                    src={row.Photo}
                    alt="Truelock Alric"
                  />
                  <span class="wil-avatar__name">T</span>
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-medium">
                    <span class="line-clamp-1">{row.Name}</span>
                  </h2>
                  <span class="block mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                    {row.City}
                  </span>
                </div>
                <div class="py-2 px-5 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ">
                  <span class="text-xs font-medium pt-[1px]">{row.Rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="w-5 h-5 text-amber-500 ml-2 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div class="mt-16 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5">
            <button class="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
              Show me more{" "}
            </button>
            <button class="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
              Become a host
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
