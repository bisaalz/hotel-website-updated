import React from "react";
import Link from "next/link";
import Image from "../common/Image";
import { motion, useMotionValue } from "framer-motion";

const Hero = () => {
  const container_stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  const content_variants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      ease: [0.5, 0.71, 1, 1.5],
    },
  };
  const MotionImage = motion(Image);

  return (
    <div>
      <div class=" flex flex-col-reverse lg:flex-col relative sm:mt-24 md:mt-0 lg:pb-16 2xl:px-16">
        <div class="flex flex-col lg:flex-row lg:items-center px-4">
          <motion.div
            variants={container_stagger}
            initial="initial"
            animate="animate"
            exit="exit"
            class="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0"
          >
            <motion.h2
              variants={content_variants}
              class="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] "
            >
              Hotel, car &amp; experiences
            </motion.h2>
            <motion.span
              variants={content_variants}
              class="text-base md:text-lg text-neutral-500 dark:text-neutral-400"
            >
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels
            </motion.span>
            <motion.button
              variants={content_variants}
              class="button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0  bg-[#4340ca]"
            >
              Start your search
            </motion.button>
          </motion.div>
          <div class="flex-grow">
            <MotionImage
              variants={content_variants}
              class="w-full"
              src="/images/hero-right.png"
              alt="hero"
              width="100"
              unoptimized
            />
          </div>
        </div>
        <motion.div
          variants={content_variants}
          class="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full"
        >
          <div class="HeroSearchForm w-full max-w-6xl py-5 lg:py-0">
            <ul class="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
              <li class="flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium  ">
                <span class="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2"></span>
                <span>Stays</span>
              </li>
              <li class="flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400 ">
                <span>Experiences</span>
              </li>
              <li class="flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400 ">
                <span>Cars</span>
              </li>
              <li class="flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400 ">
                <span>Flights</span>
              </li>
            </ul>
            <form class="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
              <div class="relative flex flex-[1.5]">
                <div class="flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ">
                  <div class="text-neutral-300 dark:text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="nc-icon-field"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <input
                      class="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                      placeholder="Location"
                      value=""
                    />
                    <span class="block mt-0.5 text-sm text-neutral-400 font-light ">
                      <span class="line-clamp-1">Where are you going?</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="StayDatesRangeInput relative flex z-10 flex-[2] nc-date-not-focusedInput">
                <div class="flex-1 grid grid-cols-2 relative ">
                  <div class="relative flex [ nc-hero-field-padding ] items-center space-x-3 cursor-pointer  ">
                    <div class="text-neutral-300 dark:text-neutral-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="nc-icon-field"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <span class="block xl:text-lg font-semibold">
                        Check in
                      </span>
                      <span class="block mt-1 text-sm text-neutral-400 leading-none font-light">
                        Add date
                      </span>
                    </div>
                  </div>
                  <div class="relative flex [ nc-hero-field-padding ] items-center space-x-3 cursor-pointer  ">
                    <div class="text-neutral-300 dark:text-neutral-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="nc-icon-field"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <span class="block xl:text-lg font-semibold">
                        Check out
                      </span>
                      <span class="block mt-1 text-sm text-neutral-400 leading-none font-light">
                        Add date
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex relative flex-[1.2]">
                <div class="flex-1 flex items-center focus:outline-none cursor-pointer ">
                  <button
                    class="flex-1 flex text-left items-center space-x-3 "
                    id="headlessui-popover-button-:rn:"
                    type="button"
                    aria-expanded="false"
                  >
                    <div class="text-neutral-300 dark:text-neutral-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon-field"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <span class="block xl:text-lg font-semibold">
                        {" "}
                        Guests
                      </span>
                      <span class="block mt-1 text-sm text-neutral-400 leading-none font-light">
                        Add guests
                      </span>
                    </div>
                  </button>
                  <div class="relative"></div>
                  <div class="pr-2 xl:pr-4">
                    <Link
                      type="button"
                      class="h-14 md:h-16 w-full md:w-16 rounded-full bg-[#4340CA] hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
                      href="/"
                    >
                      <span class="mr-3 md:hidden">Search</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
