import React from "react";
import { motion } from "framer-motion";
import { cardVariants } from "../common/animationData";

const BannerMarketing = (props) => {
  return (
    <div className="OurFeatures relative flex flex-col items-center lg:flex-row lg:py-14 px-4 2xl:px-16">
      <div className="flex-grow">
        <div className="fimage">
          <img
            src="images/our-features.png"
            className="object-cover w-full h-full"
            alt="imgs"
          />
        </div>
      </div>
      <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16">
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Benefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Happening cities </h2>
        <motion.ul
          className="space-y-10 mt-16"
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.1,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.li variants={cardVariants} className="space-y-4">
            <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-blue-800 bg-blue-100  ">
              Advertising
            </span>
            <span className="block text-xl font-semibold">
              Cost-effective advertising
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              With a free listing, you can advertise your rental with no upfront
              costs
            </span>
          </motion.li>
          <motion.li variants={cardVariants} className="space-y-4">
            <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-green-800 bg-green-100  ">
              Exposure{" "}
            </span>
            <span className="block text-xl font-semibold">
              Reach millions with Chisfis
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Millions of people are searching for unique places to stay around
              the world
            </span>
          </motion.li>
          <motion.li variants={cardVariants} className="space-y-4">
            <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-red-800 bg-red-100 ">
              Secure
            </span>
            <span className="block text-xl font-semibold">
              Secure and simple
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              A Holiday Lettings listing gives you a secure and easy way to take
              bookings and payments online
            </span>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default BannerMarketing;
