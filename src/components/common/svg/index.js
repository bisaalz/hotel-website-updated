import React from "react";
import { motion } from "framer-motion";

export default function Svg({ children, ...rest }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...rest}
    >
      {children}
    </motion.svg>
  );
}
