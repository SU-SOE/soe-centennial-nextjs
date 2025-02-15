"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShapeAnimation } from "./ShapeAnimation";

const words = ["lead,", "discover,", "inspire,", "educate,"];

export const Hero1 = () => {
  const [showSvg, setShowSvg] = useState(false);
  const [showText, setShowText] = useState(false);
  return (
    <motion.div
      className="bg-digital-red relative w-screen h-screen transition-colors duration-[3000ms]"
      animate={{ backgroundColor: ["#B1040E", "#7A0000"] }} // Digital Red → Cardinal Red Dark
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setShowSvg(true)}
    >
      <motion.div
        className="w-full h-full flex flex-row items-center cc"
        style={{ justifyContent: showText ? "start" : "center" }}
      >
        <div className="w-1/3">
          {showSvg && <ShapeAnimation onComplete={() => setShowText(true)} />}
        </div>
        {showText && (
          <motion.div
            className="w-full font-dm-sans text-white leading-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="font-bold fluid-type-6">
              STANFORD
              <br />
              ENGINEERING
            </div>
            <div className="fluid-type-5">1925-2025</div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
