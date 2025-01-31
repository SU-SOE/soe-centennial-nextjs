"use client";
import Image from "next/image";
import { cnb } from "cnbuilder";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { motion } from "motion/react";

interface TimelineAnimateImageProps {
  src: string;
  alt?: string;
  size?: types.SizeType;
  trapezoidAngle?: "left" | "right";
  className?: string;
}

export const TimelineAnimateImage = ({
  src,
  alt = "",
  size = "medium",
  trapezoidAngle = "left",
  className,
}: TimelineAnimateImageProps) => {
  const imageSize = styles.size[size];

  return (
    <div
      className={cnb(
        "flex justify-center z-50 mx-10 transform perspective-1000",
        className,
      )}
    >
      <motion.div
        initial={{ rotateY: 0, opacity: 0 }}
        whileInView={{
          rotateY: trapezoidAngle === "left" ? 15 : -15,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of it is visible
        transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
        className={cnb(
          "aspect-[1/1] relative h-full flex items-center justify-center group-focus-within/root:!rotate-y-0 group-hover-within/root:!rotate-y-0 group-hover/root:!rotate-y-0 group-focus/root:!rotate-y-0",
          imageSize,
        )}
      >
        <Image
          alt={alt}
          src={src}
          fill
          className="z-0 object-cover rounded-[20px] shadow-lg"
        />
      </motion.div>
    </div>
  );
};
