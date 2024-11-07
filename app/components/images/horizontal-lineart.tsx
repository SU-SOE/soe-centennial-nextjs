"use client";

import { cnb } from "cnbuilder";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HorizontalLineartProps {
  className?: string;
  isLeft?: boolean;
}

export const HorizontalLineart = ({
  className,
  isLeft = true,
  ...props
}: HorizontalLineartProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      {...props}
      ref={ref}
      className={cnb("flex justify-end rs-py-3", className)}
    >
      {isLeft ? (
        <motion.svg
          width="1638"
          height="50"
          viewBox="0 0 1638 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2.5 2C2.5 30.4723 31 30.4723 58.9691 30.4723C94.6491 30.4723 147.324 30.4723 162.662 30.4723C178 30.4723 178.5 47.5 162.662 47.5C146.824 47.5 124.631 47.5 91.5 47.5C58.9691 47.5 62 11.0278 91.5 11.0278C147.569 11.0278 1589.63 11.0278 1635.5 11.0278"
            stroke="#F83535"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={isInView && { pathLength: 1, pathOffset: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      ) : (
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
            animate={isInView && { pathLength: 1, pathOffset: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      )}
    </div>
  );
};
