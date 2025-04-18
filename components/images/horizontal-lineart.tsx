"use client";

import { cnb } from "cnbuilder";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

export interface HorizontalLineartProps {
  className?: string;
  stroke?: string;
  isLeft?: boolean;
  lineartType?: "A" | "B" | "C" | "D" | "timeline" | "events";
}

export const HorizontalLineart = ({
  className,
  stroke = "#F83535",
  lineartType,
  ...props
}: HorizontalLineartProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  let lineartSvg = (
    <>
      {/* 2XL SVG */}
      <svg
        aria-hidden="true"
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
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={isInView && { pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 3,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* XL SVG */}
      <svg
        aria-hidden="true"
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
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={isInView && { pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 3,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* LG SVG */}
      <svg
        aria-hidden="true"
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
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={isInView && { pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 3,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* MD SVG */}
      <svg
        aria-hidden="true"
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
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={isInView && { pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 3,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* SM SVG */}
      <svg
        aria-hidden="true"
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
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={isInView && { pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 3,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* XS SVG */}
      <svg
        aria-hidden="true"
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
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </>
  );

  switch (lineartType) {
    case "A":
      lineartSvg = (
        <>
          <svg
            aria-hidden="true"
            width="1359"
            height="60"
            viewBox="0 0 1359 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden 2xl:block"
          >
            <motion.path
              d="M0 38.4272C147.642 38.4272 1318.94 38.4272 1337.32 38.4272C1364.66 38.4272 1362.47 2 1337.32 2C1299.04 2 1213.73 2 1189.67 2C1147.02 2 1149.21 58 1189.67 58"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="745"
            height="35"
            viewBox="0 0 745 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden lg:block 2xl:hidden"
          >
            <motion.path
              d="M0 22.165C80.8379 22.165 722.157 22.165 732.217 22.165C747.187 22.165 745.989 2 732.217 2C711.259 2 664.553 2 651.379 2C628.026 2 629.224 33 651.379 33"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>

          <svg
            aria-hidden="true"
            width="478"
            height="32"
            viewBox="0 0 478 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden md:block lg:hidden"
          >
            <motion.path
              d="M0 20.2136C74.3099 20.2136 456.753 20.2136 466 20.2136C479.761 20.2136 478.66 2 466 2C446.735 2 403.8 2 391.69 2C370.223 2 371.324 30 391.69 30"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="327"
            height="26"
            viewBox="0 0 327 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="block md:hidden"
          >
            <motion.path
              d="M0 16.3107C59.9585 16.3107 309.416 16.3107 316.877 16.3107C327.981 16.3107 327.092 2 316.877 2C301.332 2 266.69 2 256.919 2C239.597 2 240.486 24 256.919 24"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </>
      );
      break;
    case "B":
      lineartSvg = (
        <>
          <svg
            aria-hidden="true"
            width="1538"
            height="60"
            viewBox="0 0 1538 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden 2xl:block"
          >
            <motion.path
              d="M-0.00195312 30C27.998 30 842.2 30 880 30C905.2 30 908 58 880 58C861.8 58 825.4 58 801.6 58C758.2 58 752.6 2 801.6 2C822.88 2 1317.27 2 1538 2"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="724"
            height="45"
            viewBox="0 0 724 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden lg:block 2xl:hidden"
          >
            <motion.path
              d="M0 22.5C20.7364 22.5 395.287 22.5 423.281 22.5C441.944 22.5 444.017 43 423.281 43C409.802 43 382.845 43 365.219 43C333.078 43 328.93 2 365.219 2C380.979 2 560.028 2 723.5 2"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="547"
            height="35"
            viewBox="0 0 547 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden md:block lg:hidden"
          >
            <motion.path
              d="M0 17.5C15.6777 17.5 298.855 17.5 320.02 17.5C334.13 17.5 335.698 33 320.02 33C309.83 33 289.449 33 276.123 33C251.822 33 248.687 2 276.123 2C288.038 2 423.407 2 547 2"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="334"
            height="28"
            viewBox="0 0 334 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="block md:hidden"
          >
            <motion.path
              d="M0 14C12.3817 14 217.525 14 234.24 14C245.384 14 246.622 26 234.24 26C226.192 26 210.096 26 199.571 26C180.38 26 177.903 2 199.571 2C208.981 2 235.891 2 333.5 2"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </>
      );
      break;
    case "C":
      lineartSvg = (
        <>
          <svg
            aria-hidden="true"
            width="1224"
            height="60"
            viewBox="0 0 1224 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden 2xl:block"
          >
            <motion.path
              d="M1224 58C1184.71 58 334.658 58 277.512 58C220.365 58 216.796 2 277.512 2C309.657 2 354.305 2 377.52 2C415.023 2 411.451 45.3548 377.52 45.3548C350.376 45.3548 115.004 45.3548 0.710938 45.3548"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="718"
            height="41"
            viewBox="0 0 718 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden lg:block 2xl:hidden"
          >
            <motion.path
              d="M717.158 39C691.047 39 221.942 39 183.962 39C145.983 39 143.61 2 183.962 2C205.326 2 234.999 2 250.428 2C275.352 2 272.979 30.6452 250.428 30.6452C232.388 30.6452 75.9593 30.6452 0 30.6452"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="518"
            height="33"
            viewBox="0 0 518 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden md:block lg:hidden"
          >
            <motion.path
              d="M518 31C497.247 31 176.4 31 146.214 31C116.028 31 114.142 2 146.214 2C163.194 2 186.778 2 199.041 2C218.851 2 216.964 24.4516 199.041 24.4516C184.703 24.4516 60.3727 24.4516 0 24.4516"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>

          <svg
            aria-hidden="true"
            width="320"
            height="22"
            viewBox="0 0 320 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="block md:hidden"
          >
            <motion.path
              d="M320 20C307.18 20 108.973 20 90.3252 20C71.6773 20 70.5125 2 90.3252 2C100.815 2 115.384 2 122.96 2C135.198 2 134.032 15.9355 122.96 15.9355C114.102 15.9355 37.2959 15.9355 0 15.9355"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </>
      );
      break;
    case "D":
      lineartSvg = (
        <>
          <svg
            aria-hidden="true"
            width="1665"
            height="60"
            viewBox="0 0 1665 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden 2xl:block"
          >
            <motion.path
              d="M0 34C23.0972 34 195.59 34 222.241 34C255 34 251 2 222.241 2C183.598 2 190.26 2 162.277 2C116 2 117 58 162.277 58C183.598 58 1520.64 58 1665 58"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="707"
            height="38"
            viewBox="0 0 707 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden lg:block 2xl:hidden"
          >
            <motion.path
              d="M0 21.4286C14.0757 21.4286 119.195 21.4286 135.437 21.4286C155.4 21.4286 152.963 2 135.437 2C111.887 2 115.947 2 98.8939 2C70.692 2 71.3014 36 98.8939 36C111.887 36 619.027 36 707 36"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>

          <svg
            aria-hidden="true"
            width="520"
            height="38"
            viewBox="0 0 520 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="hidden md:block lg:hidden"
          >
            <motion.path
              d="M0 21.4286C14.0757 21.4286 119.195 21.4286 135.437 21.4286C155.4 21.4286 152.963 2 135.437 2C111.887 2 115.947 2 98.8939 2C70.692 2 71.3014 36 98.8939 36C111.887 36 432.027 36 520 36"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <svg
            aria-hidden="true"
            width="330"
            height="34"
            viewBox="0 0 330 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
            className="block md:hidden"
          >
            <motion.path
              d="M0 19.1429C12.4516 19.1429 105.442 19.1429 119.809 19.1429C137.47 19.1429 135.313 2 119.809 2C98.9769 2 102.569 2 87.483 2C62.5352 2 63.0743 32 87.483 32C98.9768 32 252.134 32 329.957 32"
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </>
      );
      break;
    case "timeline":
      lineartSvg = (
        <svg
          aria-hidden="true"
          width="1764"
          height="84"
          viewBox="0 0 1764 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 42C40 42 838 42 892 42C928 42 932 82 892 82C866 82 814 82 780 82C718 82 710 2 780 2C810.4 2 1516.67 2 1832 2"
            stroke={stroke}
            strokeWidth="3"
            initial={{ pathLength: 1, pathOffset: 1 }}
            animate={isInView && { pathLength: 1, pathOffset: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 3,
              ease: "easeInOut",
            }}
          />
        </svg>
      );
      break;
    case "events":
      lineartSvg = (
        <>
          {/* 2XL SVG */}
          <svg
            aria-hidden="true"
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
              stroke={stroke}
              strokeWidth="4"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          {/* XL SVG */}
          <svg
            aria-hidden="true"
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
              stroke={stroke}
              strokeWidth="4"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          {/* LG SVG */}
          <svg
            aria-hidden="true"
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
              stroke={stroke}
              strokeWidth="4"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          {/* MD SVG */}
          <svg
            aria-hidden="true"
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
              stroke={stroke}
              strokeWidth="4"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          {/* SM SVG */}
          <svg
            aria-hidden="true"
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
              stroke={stroke}
              strokeWidth="4"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          {/* XS SVG */}
          <svg
            aria-hidden="true"
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
              stroke={stroke}
              strokeWidth="3"
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={isInView && { pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <div
      {...props}
      ref={ref}
      className={cnb("flex justify-end rs-py-3", className)}
    >
      {lineartSvg}
    </div>
  );
};
