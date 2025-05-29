/*
 * @TODO: Refine post-launch for Story Pages
 */

"use client";

import { HTMLAttributes, useRef } from "react";
import { Container } from "@/components/Container";
import { motion, useScroll, useTransform } from "motion/react";

type GradientBannerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const GradientBanner = ({ children, ...props }: GradientBannerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(90deg, #C74632 20%, #610058 100%)",
      "linear-gradient(90deg, #610058 20%, #C74632 100%)",
    ],
  );

  return (
    <Container width="full" {...props}>
      <motion.div
        ref={ref}
        style={{ background: gradientPosition }}
        className="flex flex-col justify-center text-white size-full rs-py-9 cc *:font-dm-sans"
      >
        {children}
      </motion.div>
    </Container>
  );
};
