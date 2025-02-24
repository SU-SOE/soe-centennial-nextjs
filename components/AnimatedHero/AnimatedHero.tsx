"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { AnimateInView } from "../Animate/AnimateInView";

const AnimatedHero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative bg-cardinal-red-x-dark w-screen h-screen rs-mb-7">
      <AnimateInView animation="fadeIn" duration={0.8}>
        <div className=" w-screen h-screen flex flex-row gap-10 items-center justify-center cc">
          {/* <div className="relative w-1/3 h-600">
            {animationComplete && (
              <svg
                width="530"
                height="517"
                viewBox="0 0 530 517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M415.972 97.3926L63.7948 356.652C-23.845 421.467 3.93408 508.5 63.7961 508.5L453.861 506.514C502.084 506.514 521.991 494.616 521.991 446.467V214.985C521.991 172.71 484.491 153.874 444.248 184.747L349.306 261.271C299.306 299.245 262.526 270.297 262.526 203.784V52.0222C262.526 25.1703 275.913 8.5 304.861 8.5H410.417C421.272 8.5 453.861 8.5 453.861 41.2724C453.861 68.6889 426.325 88.5514 415.972 97.3926Z"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            )}
          </div> */}
          <div className="relative w-1/3 h-600">
            {/* <svg
              width="100%"
              height="100%"
              viewBox="0 0 2000 1125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M1146.97 413.462C1146.97 302.827 1038.34 294 1008.23 294C910.22 294 855.902 355.791 855.902 422.877C855.902 500.557 923.209 535.252 1008.23 572.352C1093.24 609.453 1164.21 631.789 1155.23 742.423C1150.17 804.803 1082.61 856 1012.95 856C943.278 856 855.902 827.165 850 727.711"
                stroke="#F83535"
                strokeWidth="16"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => setAnimationComplete(true)}
              />
            </svg> */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 768 682"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M528.585 192.653C528.585 82.0182 419.953 73.1909 389.843 73.1909C291.837 73.1909 237.519 134.982 237.519 202.068C237.519 279.748 304.826 314.443 389.843 351.543C474.859 388.644 545.83 410.98 536.848 521.614C531.784 583.994 464.232 635.191 394.564 635.191C324.895 635.191 237.519 606.356 231.617 506.902"
                stroke="#F83535"
                strokeWidth="16"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => setAnimationComplete(true)}
              />
            </svg>
          </div>
          {/* <div className="relative w-1/3 h-600">
            {animationComplete && (
              <svg
                width="479"
                height="517"
                viewBox="0 0 479 517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M8.01521 108.104L8.0152 205.986C8.01519 250.459 37.5044 289.551 80.2557 301.757L332.975 373.955C346.7 377.874 356.158 390.413 356.158 404.688C356.158 422.346 341.84 436.65 324.196 436.65L41.4526 436.65C22.9839 436.65 8.0007 421.681 8.0007 403.212C8.0007 384.744 22.9695 369.761 41.4526 369.761L149.994 369.761C188.306 369.761 219.357 400.812 219.357 439.123C219.357 477.434 250.422 508.5 288.719 508.5L370.823 508.5C425.839 508.5 470.441 463.897 470.441 408.882L470.441 108.104C470.441 53.0881 425.839 8.49998 370.838 8.49998L107.633 8.49996C52.6178 8.49995 8.01521 53.1026 8.01521 108.104Z"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{
                    duration: 3,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            )}
          </div> */}
        </div>
      </AnimateInView>
    </div>
  );
};

export default AnimatedHero;
