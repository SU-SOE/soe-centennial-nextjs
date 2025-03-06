import React from "react";

interface FootnotesLineartProps {
  className?: string;
}

const FootnotesLineart = ({ className }: FootnotesLineartProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        height: "100%",
        width: "100%",
      }}
      preserveAspectRatio="none"
      viewBox="0 0 724 30"
      fill="none"
    >
      <path
        d="M726 28.6341H374.181C363.313 28.6341 355.509 24.0825 355.509 15.9953C355.509 7.90802 363.313 2.35645 374.181 2.35645H444.356C452.517 2.35645 458.123 6.28259 458.123 12.3455C458.123 18.4185 452.503 21.3346 444.356 21.3346H0"
        stroke="#EC0909"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default FootnotesLineart;
