import React from "react";
import { motion } from "framer-motion";
import { container_stagger, content_variants } from "../animationData";
type TypographyType = {
  title: String;
  description: String;
};

export default function Typography({ title, description }: TypographyType) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      variants={container_stagger}
      className="max-w-2xl"
    >
      <motion.h2
        variants={content_variants}
        className="text-3xl md:text-4xl font-semibold"
      >
        {title}
      </motion.h2>
      <motion.span
        variants={content_variants}
        className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400"
      >
        {description}
      </motion.span>
    </motion.div>
  );
}
