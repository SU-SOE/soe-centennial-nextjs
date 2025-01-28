"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShapeAnimation } from "../ShapeAnimation";
// import { EngLogoLockup } from "../Logo/EngLogoLockup";

const words = ["lead", "discover", "inspire", "educate"];

export default function HomepageMasthead() {
  const [bgColor, setBgColor] = useState("bg-digital-red");
  const [svgVisible, setSvgVisible] = useState(false);
  const [svgShifted, setSvgShifted] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [textFadedOut, setTextFadedOut] = useState(false);

  useEffect(() => {
    // Step 2: Show SVG after background animation
    const timeout = setTimeout(() => {
      setSvgVisible(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (textVisible) {
      let cycleIndex = 0;
      const interval = setInterval(() => {
        if (cycleIndex < words.length - 1) {
          setWordIndex((prev) => prev + 1);
          cycleIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setTextFadedOut(true), 2000); // Step 6: Fade out text
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [textVisible]);

  return (
    <div
      className={`relative w-screen h-screen flex items-center justify-center ${bgColor} transition-colors duration-[3000ms]`}
    >
      {/* Step 1: Background color animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-10"
        animate={{ backgroundColor: ["#B1040E", "#7A0000"] }} // Digital Red → Cardinal Red Dark
        transition={{ duration: 1 }}
        onAnimationComplete={() => setBgColor("bg-cardinal-red-dark")}
      />

      {/* Step 2 & 3: SVG Animation + Shift Left */}
      {svgVisible && !textFadedOut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            // Step 3: Shift SVG after morphing completes
            setTimeout(() => setSvgShifted(true), 6000); // Delay for morphing
          }}
          className="absolute top-1/2 left-1/2 z-50"
        >
          <motion.div
            animate={svgShifted ? { x: "-40%" } : {}}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setTextVisible(true)} // Step 4: Show text after shift
          >
            <ShapeAnimation />
          </motion.div>
        </motion.div>
      )}

      {/* Step 4 & 5: Hero Text + Word Cycling */}
      {!textFadedOut && textVisible && (
        <motion.div
          className="absolute right-1/4 top-1/2 -translate-y-1/2 font-dm-mono type-4 font-bold leading-tight z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-fog-light">
            When we{" "}
            <motion.span
              className="text-white"
              key={words[wordIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {words[wordIndex]}
            </motion.span>
            ,
          </div>
          <div className="text-white">the world moves.</div>
        </motion.div>
      )}

      {/* Step 6: Hero Text Fades Out & New SVG Appears */}
      {/* {textFadedOut && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <EngLogoLockup />
        </motion.div>
      )} */}
    </div>
  );
}
