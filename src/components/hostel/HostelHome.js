import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import HostelProduct from "./HostelProduct";
import { motion } from "framer-motion";
import { container_stagger, content_variants } from "../common/animationData";

const swiperCarousel = [
  {
    id: 1,
    Feature: "Single Room - 3 beds",
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.9,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "girls hostel",
    Location: "New Baneshwor",
    Price: "$36",
    Rating: 4.9,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
];

const HostelHome = () => {
  const AnimateHostelProduct = motion(HostelProduct);
  return (
    <div className="pt-14">
      <Swiper
        modules={[Pagination, EffectFade]}
        pagination
        effect
        speed={800}
        slidesPerView={1}
        className="mycardsswiper"
        loop
      ></Swiper>
      <div>
        <div className="SectionSliderNewCategories px-12 py-8 mx-4 my-8">
          <div className="SectionSliderNewCategories__PageHome_s1nc__rq_ flow-root glide--ltr glide--slider glide--swipeable">
            <div className="Section-Heading  flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Boys Hostel
                </h2>
                <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                  Popular places to stay that Chisfis recommends for you
                </span>
              </div>
              <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
                <div
                  className="NextPrev  flex items-center text-neutral-900 dark:text-neutral-300 "
                  data-id="NextPrev"
                  data-glide-el="controls"
                ></div>
              </div>
            </div>

            <div className="Tabs">
              <motion.div
                variants={container_stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {swiperCarousel.map((row, index) => (
                  <motion.div variants={content_variants} key={index}>
                    <HostelProduct row={row} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelHome;
