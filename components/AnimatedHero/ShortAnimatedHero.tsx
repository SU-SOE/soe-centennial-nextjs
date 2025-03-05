"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { AnimateInView } from "../Animate/AnimateInView";
import { MaskAnimation } from "./MaskAnimation";
import { Text } from "../Typography";

const ShortAnimatedHero = () => {
  const [logoFrame, setLogoFrame] = useState(false);

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

export default ShortAnimatedHero;
