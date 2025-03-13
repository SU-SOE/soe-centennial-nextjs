"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnimateInView } from "../Animate/AnimateInView";
import { MaskAnimation } from "./MaskAnimation";
import { Text } from "../Typography";

export const AnimatedHero = () => {
  const [logoFrame, setLogoFrame] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative bg-cardinal-red-x-dark w-screen h-[calc(100vh_-_10rem)] rs-mb-7">
        <div className=" w-full h-full flex flex-row gap-200 items-center justify-center cc">
          <div className="w-full max-w-800">
            <div className="aspect-[1.12/1] rs-mb-1 w-300">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 768 682"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="flex items-center justify-center"
              >
                <mask id="image-mask">
                  <rect width="100%" height="100%" fill="black" />
                  <path
                    d="M89.667 42.417c-1 16-2.287 464.087 0 494 12.995 170 243.345 178 282.001 36 49.001-180 118.848-450.204 128-474 58.846-153 284-92 255 71.999-10.051 56.842-106.094 415.37-113.001 431.001-55.232 125-212 71-212-39 0-81.006 2.702-439.246 0-454-25.083-137-186.399-114-213.999-22-18 59.999-142 556-147 568-12.918 31-63 21-56-16s153-567 156-585c6.5-39-62-69-79.001-11Z"
                    fill="white"
                  />
                </mask>
                <image
                  xlinkHref="https://res.cloudinary.com/duv7bozlj/image/upload/v1740466877/WEB-20220204_3D_Bioprinting_N6A8345_optimized_h5vvnz.jpg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#image-mask)"
                />
                <path
                  d="M89.667 42.417c-1 16-2.287 464.087 0 494 12.995 170 243.345 178 282.001 36 49.001-180 118.848-450.204 128-474 58.846-153 284-92 255 71.999-10.051 56.842-106.094 415.37-113.001 431.001-55.232 125-212 71-212-39 0-81.006 2.702-439.246 0-454-25.083-137-186.399-114-213.999-22-18 59.999-142 556-147 568-12.918 31-63 21-56-16s153-567 156-585c6.5-39-62-69-79.001-11Z"
                  stroke="#F83535"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <Text
              weight="bold"
              size="f8"
              className="text-white leading-[0.8]"
              mb="0"
            >
              STANFORD ENGINEERING
            </Text>

            <Text size="f6" className="text-white" mb="0">
              1925-2025
            </Text>

            <Text size="f2" className="text-white" mb="0">
              Transformative breakthroughs,
              <br className="block lg:hidden" /> boundless horizons
            </Text>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-cardinal-red-x-dark w-screen h-[calc(100vh_-_10rem)] rs-mb-7">
      <div className=" w-full h-full flex flex-row gap-200 items-center justify-center cc">
        <div className="w-full max-w-800">
          <motion.div
            className="h-fit aspect-[1.12/1] rs-mb-1"
            initial={{ width: "800px" }}
            animate={logoFrame ? { width: "300px" } : { width: "800px" }}
            transition={{ duration: 0.5 }}
          >
            <MaskAnimation onComplete={() => setLogoFrame(true)} />
          </motion.div>
          {logoFrame && (
            <>
              <AnimateInView animation="slideUp">
                <Text
                  weight="bold"
                  size="f8"
                  className="text-white leading-[0.8]"
                  mb="0"
                >
                  STANFORD ENGINEERING
                </Text>
              </AnimateInView>
              <AnimateInView animation="slideUp" delay={0.5}>
                <Text size="f6" className="text-white" mb="0">
                  1925-2025
                </Text>
              </AnimateInView>
              <AnimateInView animation="slideUp" delay={0.8}>
                <Text size="f2" className="text-white" mb="0">
                  Transformative breakthroughs,
                  <br className="block lg:hidden" /> boundless horizons
                </Text>
              </AnimateInView>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
