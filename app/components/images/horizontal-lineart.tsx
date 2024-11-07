"use client";

import { cnb } from "cnbuilder";
import { motion } from "framer-motion";

interface HorizontalLineartProps {
  className?: string;
}

export const HorizontalLineart = ({
  className,
  ...props
}: HorizontalLineartProps) => {
  return (
    <div {...props} className={cnb("flex justify-end rs-py-3", className)}>
      <motion.svg
        width="1538"
        height="82"
        viewBox="0 0 1538 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2520 43.0024C2308.67 43.0024 1226.8 43.0025 1190 43.0025C1153.2 43.0025 1151.5 80.0025 1190 80.0025C1248 80.0025 1151 80.0025 1230.5 80.0025C1310 80.0025 1309 2.00248 1230.5 2.00249C1169.7 2.00249 208.5 2.00016 0.5 2.00018"
          stroke="#F83535"
          strokeWidth="4"
          initial={{ pathLength: 1, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};
