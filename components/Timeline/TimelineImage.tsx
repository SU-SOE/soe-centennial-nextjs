import Image from "next/image";
import { cnb } from "cnbuilder";
import * as styles from "./TimelineItem.styles";
import * as types from "./TimelineItem.types";

interface TimelineImageProps {
  src: string;
  alt?: string;
  size?: types.SizeType;
  trapezoidAngle?: types.TrapezoidType;
  className?: string;
}

export const TimelineImage = ({
  src,
  alt = "",
  size = "medium",
  trapezoidAngle = "left",
  className,
}: TimelineImageProps) => {
  const imageSize = styles.size[size];
  const trapezoidType = styles.trapezoid[trapezoidAngle];

  return (
    <div className={cnb("group relative flex justify-center", trapezoidType)}>
      <div
        className={cnb(
          "aspect-[1/1] relative perspective-1000 transform ease-in-out duration-1000",
          imageSize,
          className,
        )}
      >
        <Image
          alt={alt}
          src={src}
          fill
          className="object-cover rounded-lg shadow-lg transform ease-in-out duration-1000"
        />
      </div>
    </div>
  );
};
