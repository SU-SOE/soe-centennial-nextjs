"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { AnimateInView } from "../Animate/AnimateInView";
import { MaskAnimation } from "./MaskAnimation";

const AnimatedHero = () => {
  const [lineArtSetOne, setLineArtSetOne] = useState(false);
  const [lineArtSetTwo, setlineArtSetTwo] = useState(false);

  return (
    <div className="relative bg-cardinal-red-x-dark w-screen h-screen rs-mb-7">
      <AnimateInView animation="fadeIn" duration={0.8}>
        <div className=" w-screen h-screen flex flex-row gap-200 items-center justify-center cc">
          <div className="relative w-full max-w-[33.3%]">
            {lineArtSetOne && !lineArtSetTwo && (
              // <motion.div
              //   initial={{ opacity: 1 }}
              //   animate={
              //     lineArtSetTwo
              //       ? { opacity: 0, display: "none" }
              //       : { opacity: 1 }
              //   }
              //   transition={{
              //     duration: 0.3,
              //     delay: 0,
              //     ease: "easeInOut",
              //   }}
              // >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 530 517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M415.972 97.3926L63.7948 356.652C-23.845 421.467 3.93408 508.5 63.7961 508.5L453.861 506.514C502.084 506.514 521.991 494.616 521.991 446.467V214.985C521.991 172.71 484.491 153.874 444.248 184.747L349.306 261.271C299.306 299.245 262.526 270.297 262.526 203.784V52.0222C262.526 25.1703 275.913 8.5 304.861 8.5H410.417C421.272 8.5 453.861 8.5 453.861 41.2724C453.861 68.6889 426.325 88.5514 415.972 97.3926Z"
                  stroke="#F83535"
                  strokeWidth="20"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 0,
                    ease: "easeInOut",
                  }}
                  onAnimationComplete={() => setlineArtSetTwo(true)}
                />
              </svg>
              // </motion.div>
            )}
          </div>
          <motion.div
            className="w-full max-h-600"
            initial={{ maxWidth: "33.3%", flexShrink: 1 }}
            animate={lineArtSetTwo && { maxWidth: "800px", flexShrink: 0 }}
            transition={{ delay: 0 }}
          >
            {/* <motion.div
              initial={{ opacity: 1 }}
              animate={
                lineArtSetOne ? { opacity: 0, display: "none" } : { opacity: 1 }
              }
              transition={{
                duration: 0.3,
                delay: 0,
                ease: "easeInOut",
              }}
            > */}
            {!lineArtSetOne && (
              <svg
                width="100%"
                height="100%"
                viewBox="200 0 500 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M528.585 192.653c0-110.635-108.632-119.462-138.742-119.462-98.006 0-152.324 61.791-152.324 128.877 0 77.68 67.307 112.375 152.324 149.475S545.83 410.98 536.848 521.614c-5.064 62.38-72.616 113.577-142.284 113.577s-157.045-28.835-162.947-128.289"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 0,
                    ease: "easeInOut",
                  }}
                  onAnimationComplete={() => setLineArtSetOne(true)}
                />
              </svg>
            )}
            {/* </motion.div> */}
            {lineArtSetOne && !lineArtSetTwo && (
              // <motion.div
              //   initial={{ opacity: 1 }}
              //   animate={
              //     lineArtSetTwo
              //       ? { opacity: 0, display: "none" }
              //       : { opacity: 1 }
              //   }
              //   transition={{
              //     duration: 0.3,
              //     delay: 0,
              //     ease: "easeInOut",
              //   }}
              // >
              <svg
                width="100%"
                height="100%"
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
                    delay: 0,
                    ease: "easeInOut",
                  }}
                  onAnimationComplete={() => setlineArtSetTwo(true)}
                />
              </svg>
              // </motion.div>
            )}
            {lineArtSetTwo && <MaskAnimation />}
          </motion.div>
          <div className="relative w-full max-w-[33.3%]">
            {lineArtSetOne && !lineArtSetTwo && (
              // <motion.div
              //   initial={{ opacity: 1 }}
              //   animate={
              //     lineArtSetTwo
              //       ? { opacity: 0, display: "none" }
              //       : { opacity: 1 }
              //   }
              //   transition={{
              //     duration: 0.3,
              //     delay: 0,
              //     ease: "easeInOut",
              //   }}
              // >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 479 517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M8.01521 108.104L8.0152 205.986C8.01519 250.459 37.5044 289.551 80.2557 301.757L332.975 373.955C346.7 377.874 356.158 390.413 356.158 404.688C356.158 422.346 341.84 436.65 324.196 436.65L41.4526 436.65C22.9839 436.65 8.0007 421.681 8.0007 403.212C8.0007 384.744 22.9695 369.761 41.4526 369.761L149.994 369.761C188.306 369.761 219.357 400.812 219.357 439.123C219.357 477.434 250.422 508.5 288.719 508.5L370.823 508.5C425.839 508.5 470.441 463.897 470.441 408.882L470.441 108.104C470.441 53.0881 425.839 8.49998 370.838 8.49998L107.633 8.49996C52.6178 8.49995 8.01521 53.1026 8.01521 108.104Z"
                  stroke="#F83535"
                  strokeWidth="20"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 0,
                    ease: "easeInOut",
                  }}
                  onAnimationComplete={() => setlineArtSetTwo(true)}
                />
              </svg>
              // </motion.div>
            )}
          </div>
        </div>
      </AnimateInView>
    </div>
  );
};

export default AnimatedHero;
