import React from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper";
import Place from "../../product/place";
import Image from "../Image";
import {
  container_stagger,
  cardVariants,
  content_variants,
} from "../animationData";
import { motion } from "framer-motion";

const SwiperButtons = () => {
  const swiper = useSwiper();

  const swiperSlide = useSwiperSlide();

  return (
    <div className="mb-8 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
      <div
        className="NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 "
        data-id="NextPrev"
      >
        <button
          className="w-10 h-10 mr-[6px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
          title="Prev"
          onClick={() => swiper?.slidePrev()}
          data-glide-dir="<"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
          title="Next"
          onClick={() => swiper?.slideNext()}
          data-glide-dir=">"
          disabled={swiperSlide?.isPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function SwiperCarousel({ swiperData, PlaceComponent }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[EffectFade]}
        effect
        speed={800}
        className="mySwiper"
      >
        <span slot="container-start" className="relative">
          <SwiperButtons />
        </span>
        <motion.div
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.1,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          {swiperData?.map((row, index) => {
            return (
              <motion.div variants={content_variants} key={index}>
                <SwiperSlide>
                  {PlaceComponent ? (
                    Place({ row })
                  ) : (
                    <motion.div
                      initial="initial"
                      whileInView="animate"
                      transition={{
                        delayChildren: 0.2,
                        staggerChildren: 0.1,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      variants={container_stagger}
                    >
                      <motion.div
                        variants={cardVariants}
                        className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4 relative "
                      >
                        <Image
                          src={row.image}
                          class="object-cover w-full h-full rounded-2xl"
                          alt="imgs"
                        />
                      </motion.div>
                      <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                      <motion.div variants={cardVariants} class="mt-4 truncate">
                        <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                          {row.name}
                        </h2>
                        <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                          {row.caption}
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </SwiperSlide>
              </motion.div>
            );
          })}
        </motion.div>
      </Swiper>
    </>
  );
}
