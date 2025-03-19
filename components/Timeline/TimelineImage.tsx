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
  const trapezoidType = styles.trapezoid(trapezoidAngle, isExpanded);

  return (
    <div className={cnb("flex justify-center z-50 mx-10", className)}>
      <div
        className={cnb(
          "aspect-[1/1] relative h-full transform ease-in-out perspective-1000 flex items-center justify-center",
          trapezoidType,
          imageSize,
        )}
      >
        {isExpanded && (
          <XMarkIcon
            width={60}
            className="absolute bg-stone-dark text-white rounded-full z-50 border-2 border-fog-dark"
          />
        )}
        <Image
          alt={alt}
          src={src}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          loading="lazy"
          className={cnb(
            "z-0 object-cover rounded-[20px] shadow-lg transform ease-in-out perspective-1000 duration-[1500ms] group-hocus-within:perspective-0 group-hocus-within:rotate-y-0 hocus:perspective-0 hocus:rotate-y-0",
            {
              "contrast-50 brightness-100 perspective-0 rotate-y-0 outline-stone":
                isExpanded,
            },
          )}
        />
      </div>
    </div>
  );
};
