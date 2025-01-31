"use client";
import Image from "next/image";
import { cnb } from "cnbuilder";
import { AnimateInView } from "@/components/Animate";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";

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
      <AnimateInView
        animation={trapezoidAngle === "left" ? "rotateInLeft" : "rotateInRight"}
        delay={1.5}
        duration={2}
        className={cnb(
          "aspect-[1/1] relative h-full flex items-center justify-center group-hover/cardroot:![transform:rotateY(0deg)] group-focus-within/cardroot:![transform:rotateY(0deg)] duration-300",
          imageSize,
        )}
      >
        <Image
          alt={alt}
          src={src}
          fill
          className="z-0 object-cover rounded-[20px] shadow-lg"
        />
      </AnimateInView>
    </div>
  );
};
