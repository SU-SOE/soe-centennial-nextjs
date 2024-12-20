import Image from "next/image";
import { cnb } from "cnbuilder";
import { XMarkIcon } from "@heroicons/react/16/solid";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";

interface TimelineImageProps {
  src: string;
  alt?: string;
  size?: types.SizeType;
  trapezoidAngle?: "left" | "right";
  className?: string;
  isExpanded?: boolean;
}

export const TimelineImage = ({
  src,
  alt = "",
  size = "medium",
  trapezoidAngle = "left",
  className,
  isExpanded = false,
}: TimelineImageProps) => {
  const imageSize = styles.size[size];
  const trapezoidType = styles.trapezoid[trapezoidAngle];

  return (
    <div
      className={cnb(
        "group relative flex justify-center stretch-link z-50",
        className,
      )}
    >
      <div
        className={cnb(
          "aspect-[1/1] relative h-full perspective-1000 transform ease-in-out duration-2000 flex items-center justify-center",
          { "rotate-y-0": isExpanded },
          trapezoidType,
          imageSize,
        )}
      >
        {isExpanded && (
          <XMarkIcon
            width={34}
            className="absolute bg-stone-dark text-white rounded-full w-34 h-34 z-50"
          />
        )}
        <Image
          alt={alt}
          src={src}
          fill
          className={cnb(
            "z-0 object-cover overflow-hidden rounded-[20px] shadow-lg transform ease-in-out duration-1000",
            { "contrast-50 brightness-100": isExpanded },
          )}
        />
      </div>
    </div>
  );
};
