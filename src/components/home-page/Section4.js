import React from "react";
import { motion } from "framer-motion";

const Section4 = (props) => {
  const data = [
    {
      image: "images/img1.png",
      title: "Book & relax",
      description:
        " Let each trip be an inspirational journey, each room a peaceful space",
    },
    {
      image: "images/img2.png",
      title: "Book & relax",
      description:
        " Let each trip be an inspirational journey, each room a peaceful space",
    },
    {
      image: "images/img3.png",
      title: "Book & relax",
      description:
        " Let each trip be an inspirational journey, each room a peaceful space",
    },
  ];

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
  return (
    <div className="SectionWork py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900  dark:text-neutral-50">
        <div className="text-center w-full max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">How it work</h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            Keep calm &amp; travel on
          </span>
        </div>
      </div>

      <motion.div
        variants={container_stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.4 }}
        className="mt-20 relative grid md:grid-cols-3 gap-20"
      >
        {data?.map((row, index) => (
          <motion.div
            key={index}
            variants={content_variants}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <div className="Imagew mb-8 max-w-[200px] mx-auto">
              <img
                src={row.image}
                className="object-cover w-full h-full"
                alt="image"
              />
            </div>
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{row.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {row.description}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div className="image2 mb-8 max-w-[200px] mx-auto">
            <img
              src="images/img2.png"
              className="object-cover w-full h-full"
              alt="imgs"
            />
          </div>
          <div className="text-center mt-auto">
            <h3 className="text-xl font-semibold">Smart checklist</h3>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Let each trip be an inspirational journey, each room a peaceful
              space
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div className="imagew mb-8 max-w-[200px] mx-auto">
            <img
              src="images/img3.png"
              className="object-cover w-full h-full"
              alt="img"
            />
          </div>
          <div className="text-center mt-auto">
            <h3 className="text-xl font-semibold">Save more</h3>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Let each trip be an inspirational journey, each room a peaceful
              space
            </span>
          </div> 
        </div>
      </div>
        */}
    </div>
  );
};

export default Section4;
