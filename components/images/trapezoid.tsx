import React from "react";

interface TrapezoidProps {
  fill?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
}

export const Trapezoid = ({
  fill,
  height = "100%",
  width = "100%",
  className,
}: TrapezoidProps) => {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 495 909"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M559.14 907.342L23.1398 781.435C9.58301 778.251 0 766.156 0 752.23V140.481C0 126.232 10.0237 113.948 23.9838 111.091L559.984 1.37244C578.585 -2.43514 596 11.7764 596 30.763V878.136C596 897.477 577.968 911.764 559.14 907.342Z"
        fill={fill || "#F4F8FA"}
      />
    </svg>
  );
};
