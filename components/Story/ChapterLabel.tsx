import { cnb } from "cnbuilder";
import React from "react";
import { Text } from "../Typography";

type ChapterLabelProps = {
  text: string;
  chipColor?: "stone-dark" | "archway-dark" | "digital-red";
  isLight?: boolean;
  className?: string;
};

export const ChapterLabel = ({
  text,
  chipColor = "archway-dark",
  className,
  ...props
}: ChapterLabelProps) => {
  return (
    <Text
      {...props}
      as="div"
      weight="bold"
      size="small"
      leading="snug"
      mb="base"
      className={cnb(
        "text-white py-6 px-13 rounded-xl w-fit",
        {
          "bg-stone-dark": chipColor === "stone-dark",
          "bg-archway-dark": chipColor === "archway-dark",
          "bg-digital-red": chipColor === "digital-red",
        },
        className,
      )}
    >
      {text}
    </Text>
  );
};
