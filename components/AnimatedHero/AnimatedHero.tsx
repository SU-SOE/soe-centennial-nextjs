"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
// import { motion } from "motion/react";
import { ShapeAnimation } from "./ShapeAnimation";
import { AnimateInView } from "../Animate/AnimateInView";

const LeftCol = () => {
  return (
    <div className="relative">
      {/* <motion.div
        key="robot"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          delay: 2.25,
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
          delay: 8,
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
      </motion.div> */}
      <ShapeAnimation
        order={[0, 2, 1, 1, 6, 8, 1, 7, 7, 3, 9, 10, 2, 5, 5, 0]}
      />
    </div>
  );
};

type MidColProps = {
  onComplete: () => void;
};

const MidCol = ({ onComplete }: MidColProps) => {
  return (
    <div className="relative">
      {/* <motion.div
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
      </motion.div> */}
      <ShapeAnimation
        order={[1, 3, 2, 6, 7, 9, 9, 3, 1, 8, 2, 5, 4, 6, "mask"]}
        onComplete={onComplete}
      />
    </div>
  );
};

const RightCol = () => {
  return (
    <div className="relative">
      {/* <motion.div
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
        key="irmgard"
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
          src="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481947/machineSilhouette_xnmpup.png"
          width="280"
          height="760"
          className="absolute top-0"
        />
      </motion.div> */}
      <ShapeAnimation
        order={[0, 4, 5, 9, 4, 4, 2, 2, 10, 4, 4, 4, 9, 8, 8, 0]}
      />
    </div>
  );
};

const AnimatedHero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationsCompleted = useRef(0); // Track number of finished animations
  const totalAnimations = 3; // Number of ShapeAnimation components

  const handleAnimationComplete = () => {
    animationsCompleted.current += 1;
    if (animationsCompleted.current === totalAnimations) {
      setAnimationComplete(true);
    }
  };
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
      {/* <AnimateInView animation="fadeIn" duration={0.8}> */}
      <div className="relative w-screen h-screen flex flex-row items-center justify-center cc">
        <div className="w-1/3 h-fit">{/* <LeftCol /> */}</div>
        <div className="relative w-1/3 h-fit">
          <MidCol onComplete={handleAnimationComplete} />
        </div>
        <div className="w-1/3 h-fit">{/* <RightCol /> */}</div>
      </div>
      {/* </AnimateInView> */}
    </div>
  );
};

export default AnimatedHero;
