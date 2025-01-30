"use client";

import { cnb } from "cnbuilder";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export interface HorizontalLineartProps {
  className?: string;
  isLeft?: boolean;
}

export const HorizontalLineart = ({
  className,
  isLeft = false,
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
        <>
          {/* 2XL SVG */}
          <motion.svg
            width="1638"
            height="50"
            viewBox="0 0 1638 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden 2xl:block"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
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
          {/* XL SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1102"
            height="50"
            viewBox="0 0 1102 50"
            fill="none"
            className="hidden xl:block 2xl:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 2.25C2 30.7223 30.5 30.7223 58.4691 30.7223C94.1491 30.7223 146.824 30.7223 162.162 30.7223C177.5 30.7223 178 47.75 162.162 47.75C146.324 47.75 124.131 47.75 91 47.75C58.4691 47.75 61.5 11.2778 91 11.2778C147.069 11.2778 1065.13 11.2778 1111 11.2778"
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
          {/* LG SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="914"
            height="50"
            viewBox="0 0 914 50"
            fill="none"
            className="hidden lg:block xl:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 2.25C2 30.7223 30.5 30.7223 58.4691 30.7223C94.1491 30.7223 146.824 30.7223 162.162 30.7223C177.5 30.7223 178 47.75 162.162 47.75C146.324 47.75 124.131 47.75 91 47.75C58.4691 47.75 61.5 11.2778 91 11.2778C147.069 11.2778 1065.13 11.2778 1111 11.2778"
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
          {/* MD SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="720"
            height="51"
            viewBox="0 0 720 51"
            fill="none"
            className="hidden md:block lg:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 2.75C2 31.2223 30.5 31.2223 58.4691 31.2223C94.1491 31.2223 146.824 31.2223 162.162 31.2223C177.5 31.2223 178 48.25 162.162 48.25C146.324 48.25 124.131 48.25 91 48.25C58.4691 48.25 61.5 11.7778 91 11.7778C147.069 11.7778 1065.13 11.7778 1111 11.7778"
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
          {/* SM SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="540"
            height="38"
            viewBox="0 0 540 38"
            fill="none"
            className="hidden sm:block md:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 2C2 23.276 23.3043 23.276 44.2118 23.276C70.8833 23.276 110.259 23.276 121.724 23.276C133.19 23.276 133.564 36 121.724 36C109.885 36 93.2958 36 68.5293 36C44.2118 36 46.4775 8.74604 68.5293 8.74604C110.442 8.74604 796.708 8.74605 831 8.74604"
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
          {/* XS SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="332"
            height="38"
            viewBox="0 0 332 38"
            fill="none"
            className="block sm:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 2.80469C2 23.4549 22.6619 23.4549 42.9388 23.4549C68.806 23.4549 106.994 23.4549 118.114 23.4549C129.234 23.4549 129.596 35.8047 118.114 35.8047C106.632 35.8047 90.5426 35.8047 66.523 35.8047C42.9388 35.8047 45.1362 9.35232 66.523 9.35232C107.172 9.35232 772.742 9.35232 806 9.35232"
              stroke="#F83535"
              strokeWidth="4"
              stroke-linecap="round"
            />
          </motion.svg>
        </>
      ) : (
        <>
          {/* 2XL SVG */}
          <motion.svg
            width="1538"
            height="82"
            viewBox="0 0 1538 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden 2xl:block"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
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
          {/* XL SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1029"
            height="82"
            viewBox="0 0 1029 82"
            fill="none"
            className="hidden xl:block 2xl:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M1124 43.0024C912.667 43.0024 646.8 43.0024 610 43.0024C573.2 43.0024 571.5 80.0025 610 80.0024C668 80.0024 571 80.0025 650.5 80.0024C730 80.0024 729 2.00241 650.5 2.00242C589.7 2.00242 208 2.00008 0 2.0001"
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
          {/* LG SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="912"
            height="82"
            viewBox="0 0 912 82"
            fill="none"
            className="hidden lg:block xl:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M1124 43.0024C912.667 43.0024 646.8 43.0024 610 43.0024C573.2 43.0024 571.5 80.0025 610 80.0024C668 80.0024 571 80.0025 650.5 80.0024C730 80.0024 729 2.00241 650.5 2.00242C589.7 2.00242 208 2.00008 0 2.0001"
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
          {/* MD SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="718"
            height="59"
            viewBox="0 0 718 59"
            fill="none"
            className="hidden md:block lg:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M793 30.911C643.901 30.911 456.328 30.911 430.365 30.911C404.402 30.911 403.202 57 430.365 57C471.285 57 402.85 57 458.938 57C515.027 57 514.321 2.0017 458.938 2.0017C416.043 2.00171 146.747 2.00006 -2.93255e-05 2.00007"
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
          {/* SM SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="538"
            height="42"
            viewBox="0 0 538 42"
            fill="none"
            className="hidden sm:block md:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M548 21.9749C444.966 21.9749 315.344 21.9749 297.402 21.9749C279.461 21.9749 278.632 40 297.402 40C325.68 40 278.388 40 317.148 40C355.907 40 355.42 2.00117 317.148 2.00118C287.505 2.00118 101.409 2.00004 7.86781e-06 2.00005"
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
          {/* XS SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="340"
            height="32"
            viewBox="0 0 340 32"
            fill="none"
            className="block sm:hidden"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M393 16.9974C319.109 16.9974 226.15 16.9974 213.283 16.9974C200.416 16.9974 199.822 29.8047 213.283 29.8047C233.562 29.8047 199.647 29.8047 227.444 29.8047C255.24 29.8047 254.891 2.80552 227.444 2.80552C206.185 2.80553 72.726 2.80472 4.05312e-06 2.80472"
              stroke="#F83535"
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </>
      )}
    </div>
  );
};
