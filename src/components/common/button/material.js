import React from "react";
import { motion } from "framer-motion";

export default function MaterialButton({
  className,
  noWidth,
  children,
  ...rest
}) {
  return (
    <motion.button
      className={`${
        className || ""
      } text-2xl transition delay-150 duration-300 ease-in-out md:text-3xl  rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${
        noWidth ? "" : "w-12 h-12"
      }`}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
