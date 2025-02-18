"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimateInView } from "../Animate/AnimateInView";
import { ShapeAnimation } from "./ShapeAnimation";

const AnimatedHero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative bg-cardinal-red-dark w-screen h-screen rs-mb-7">
      {animationComplete && (
        <motion.div
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 4,
            delay: 3,
            ease: "easeInOut",
          }}
        >
          <div className="h-full w-full absolute top-0 z-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481950/Ryan-High-Voltage-Laboratory_rinsml.png"
              alt=""
              fill
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
      <AnimateInView animation="fadeIn" duration={0.8}>
        <div className=" w-screen h-screen flex flex-row items-center justify-center cc">
          <div className="relative w-1/3 h-600">
            <motion.div
              key="william-hewlett"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 2,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481953/williamHewlett_yezmww.png"
                width="586"
                height="420"
                className="absolute top-0 z-50"
              />
            </motion.div>
            <motion.div
              key="robot"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 5,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481945/robotFlipped_e0kkk6.png"
                width="645"
                height="406"
                className="absolute top-0 z-50"
              />
            </motion.div>
            <motion.div
              key="ship"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 7.5,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481946/130704-9205_silhouette_j9uj3j.png"
                width="686"
                height="210"
                className="absolute top-0 z-50"
              />
            </motion.div>
            {!animationComplete && (
              <svg
                width="432"
                height="507"
                viewBox="0 0 432 507"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M121 322L300.136 377.409C312.453 380.937 320.941 392.222 320.941 405.069C320.941 420.962 308.092 433.835 292.257 433.835L38.5202 433.835C21.9461 433.835 8.50001 420.363 8.50001 403.741C8.50001 387.119 21.9332 373.634 38.5202 373.634L135.927 373.634C170.308 373.634 198.174 401.581 198.173 436.061C198.173 470.541 226.052 498.5 260.42 498.5L334.101 498.5C383.473 498.5 423.5 458.358 423.5 408.844L423.5 98.1434C423.5 48.6293 383.473 8.5 334.114 8.49999C213.146 8.49998 -30 273 121 322Z"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 3,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            )}
          </div>
          <div className="relative w-1/3 h-600">
            <motion.div
              key="irmgard"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 6,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481951/irmgardFluggeLotz_silhouette_gfjjgm.png"
                width="538"
                height="624"
                className="absolute top-0 z-50"
              />
            </motion.div>
            <motion.div
              key="mae"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 7.5,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481947/maeJemison_crwmks.png"
                width="538"
                height="624"
                className="absolute top-0 z-50"
              />
            </motion.div>
            {!animationComplete && (
              <svg
                width="402"
                height="517"
                viewBox="0 0 402 517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-10"
              >
                <motion.path
                  d="M8.8424 441.169C8.84239 467.353 3.94519 508.5 57.8143 508.5C111.683 508.5 291.655 508.5 313.693 508.5C373.683 508.5 393.272 492.29 393.272 451.144C393.272 421.219 393.272 178.077 393.272 156.88C393.272 116.98 370.961 92.7327 307.571 116.98C244.181 141.227 229.964 154.796 176.571 184.629C118.727 216.95 83.5247 190.318 83.5247 159.691C83.5247 117.279 83.5247 73.3376 83.5247 59.6219C83.5247 20.9687 119.029 8.50015 137.394 8.50009C188.829 8.49994 302.674 8.50012 319.814 8.50012C362.665 8.50013 360.216 64.6095 319.814 65.8563C279.412 67.1032 125.151 65.8563 72.506 65.8563C19.8612 65.8563 8.84246 65.8563 8.84245 121.966C8.84245 150.644 8.8424 421.34 8.8424 441.169Z"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            )}
            {animationComplete && (
              <div className="z-50">
                <ShapeAnimation />
              </div>
            )}
          </div>
          <div className="relative w-1/3 h-600">
            <motion.div
              key="william-hewlett"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 2.5,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481946/packardBell_rgwp2j.png"
                width="586"
                height="420"
                className="absolute top-0 z-50"
              />
            </motion.div>
            <motion.div
              key="machine"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 5.5,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481947/machineSilhouette_xnmpup.png"
                width="280"
                height="760"
                className="absolute top-0 z-50"
              />
            </motion.div>
            <motion.div
              key="group"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 7.4,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
              className="flex justify-center items-center"
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481944/group_silhouette_wmmyl3.png"
                width="280"
                height="760"
                className="absolute top-0 z-50"
              />
            </motion.div>
            {/* <LineAnimation order={[0, 0, 0, 0, 1, 2, 8, 0]} /> */}
            {!animationComplete && (
              <svg
                width="402"
                height="517"
                viewBox="0 0 402 517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M8.8424 441.169C8.84239 467.353 3.94519 508.5 57.8143 508.5C111.683 508.5 291.655 508.5 313.693 508.5C373.683 508.5 393.272 492.29 393.272 451.144C393.272 421.219 393.272 178.077 393.272 156.88C393.272 116.98 370.961 92.7327 307.571 116.98C244.181 141.227 229.964 154.796 176.571 184.629C118.727 216.95 83.5247 190.318 83.5247 159.691C83.5247 117.279 83.5247 73.3376 83.5247 59.6219C83.5247 20.9687 119.029 8.50015 137.394 8.50009C188.829 8.49994 302.674 8.50012 319.814 8.50012C362.665 8.50013 360.216 64.6095 319.814 65.8563C279.412 67.1032 125.151 65.8563 72.506 65.8563C19.8612 65.8563 8.84246 65.8563 8.84245 121.966C8.84245 150.644 8.8424 421.34 8.8424 441.169Z"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 7,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            )}
          </div>
        </div>
      </AnimateInView>
    </div>
  );
};

export default AnimatedHero;
