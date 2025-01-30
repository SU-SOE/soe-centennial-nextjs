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
        initial={{
          rotateY: 0,
        }}
        animate={{
          rotateY: trapezoidAngle === "left" ? 15 : -15,
        }}
        transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
        className={cnb(
          "aspect-[1/1] relative h-full flex items-center justify-center group-hocus-within:!rotate-y-0 group-hocus:!rotate-y-0 hocus:!rotate-y-0",
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
