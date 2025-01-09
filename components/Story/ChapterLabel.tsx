import { cnb } from "cnbuilder";
import React from "react";
import { Text } from "../Typography";

type ChapterLabelProps = {
  text: string;
  isLight?: boolean;
  className?: string;
};

export const ChapterLabel = ({
  text,
  isLight = false,
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
      mb="none"
      className={cnb(
        "text-white pt-6 px-13 pb-8 rounded-xl w-fit",
        {
          "bg-stone-dark": isLight,
          "bg-archway-dark": !isLight,
        },
        className,
      )}
    >
      {text}
    </Text>
  );
};
