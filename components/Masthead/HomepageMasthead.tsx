"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ShapeAnimation } from "../ShapeAnimation";
import { AnimateInView } from "../Animate";

export default function HomepageMasthead() {
  const [bgColor, setBgColor] = useState("bg-digital-red");
  const [svgVisible, setSvgVisible] = useState(false);

  useEffect(() => {
    // Trigger SVG fade-in after background animation
    const timeout = setTimeout(() => {
      setSvgVisible(true);
    }, 500); // Adjust timing as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`w-screen h-screen ${bgColor} transition-colors duration-[3000ms]`}
    >
      {/* Animate background color */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-10"
        animate={{ backgroundColor: ["#B1040E", "#7A0000"] }} // DIGITAL-RED to CARDINAL-RED
        transition={{ duration: 3 }}
        onAnimationComplete={() => setBgColor("bg-cardinal-red-dark")}
      />

      {/* SVG animation */}
      {svgVisible && (
        <div className="absolute top-1/2 left-1/2 z-50">
          <AnimateInView animation="fadeIn" duration={1} delay={2}>
            <ShapeAnimation />
          </AnimateInView>
        </div>
      )}
    </div>
  );
}
