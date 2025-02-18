"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LineAnimation } from "./LineAnimation";
import { AnimateInView } from "../Animate/AnimateInView";

const AnimatedHero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative bg-cardinal-red-dark w-screen h-screen">
      {animationComplete && (
        <AnimateInView animation="fadeIn">
          <div className="h-full w-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481950/Ryan-High-Voltage-Laboratory_rinsml.png"
              alt=""
              fill
              sizes="100vw"
            />
          </div>
        </AnimateInView>
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
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481953/williamHewlett_yezmww.png"
                width="586"
                height="420"
                className="absolute top-0"
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
                className="absolute top-0"
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
                className="absolute top-0"
              />
            </motion.div>
            {/* <LineAnimation order={[0, 0, 0, 0, 1, 7, 3, 0]} /> */}
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
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481951/irmgardFluggeLotz_silhouette_gfjjgm.png"
                width="538"
                height="624"
                className="absolute top-0"
              />
            </motion.div>
            <motion.div
              key="mae"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 7,
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
              }}
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481947/maeJemison_crwmks.png"
                width="538"
                height="624"
                className="absolute top-0"
              />
            </motion.div>
            {/* <LineAnimation
              order={[1, 3, 2, 6, 7, 1, 8, "mask", 1]}
              onComplete={() => {
                setAnimationComplete(true);
              }}
            /> */}
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
            >
              <Image
                alt=""
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481946/packardBell_rgwp2j.png"
                width="586"
                height="420"
                className="absolute top-0"
              />
            </motion.div>
            <motion.div
              key="machine"
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
                src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481947/machineSilhouette_xnmpup.png"
                width="280"
                height="760"
                className="absolute top-0"
              />
            </motion.div>
            <motion.div
              key="group"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 8,
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
                className="absolute top-0"
              />
            </motion.div>
            {/* <LineAnimation order={[0, 0, 0, 0, 1, 2, 8, 0]} /> */}
          </div>
        </div>
      </AnimateInView>
    </div>
  );
};

export default AnimatedHero;
