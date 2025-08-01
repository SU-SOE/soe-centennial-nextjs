"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnimateInView } from "../Animate/AnimateInView";
import { MaskAnimation } from "./MaskAnimation";
import { Text } from "../Typography";
import { NoMotionSvg } from "./NoMotionSvg";

export const AnimatedHero = () => {
  const [logoFrame, setLogoFrame] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative bg-cardinal-red-x-dark w-screen h-fit rs-py-10 rs-mb-7">
        <div className=" size-full flex flex-row gap-200 items-center justify-center cc">
          <div className="w-full max-w-800">
            <div className="aspect-[1.12/1] rs-mb-1 w-full max-w-300">
              <NoMotionSvg />
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
    <div className="relative bg-cardinal-red-x-dark w-screen h-fit rs-py-10 rs-mb-7">
      <div className=" size-full flex flex-row gap-200 items-center justify-center cc">
        <div className="w-full max-w-800">
          <motion.div
            className="h-fit w-full aspect-[1.12/1] rs-mb-1"
            initial={{ maxWidth: "800px" }}
            animate={logoFrame ? { maxWidth: "300px" } : { maxWidth: "800px" }}
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
