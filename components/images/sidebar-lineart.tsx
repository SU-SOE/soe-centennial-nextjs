import React from "react";

interface SidebarLineartProps {
  className?: string;
}

const SidebarLineart = ({ className }: SidebarLineartProps) => {
  return (
    <svg
      viewBox="0 0 467 1671"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        height: "100%",
        width: "100%",
        maxWidth: "465px",
      }}
      preserveAspectRatio="none"
    >
      <path
        d="M2.1275 1595C2.1275 1623.86 -3.25941 1669.2 55.9966 1669.2C115.253 1669.2 353.222 1669.2 377.463 1669.2C443.452 1669.2 465 1651.34 465 1605.99C465 1573.02 465.001 148.874 465.001 125.515C465.001 81.545 434.193 62.0899 377.464 81.5449C320.735 101 241.535 135.515 143.535 161C106.001 170.761 84.2794 141 84.2794 121.545C84.2794 74.8065 84.2794 73.451 84.2794 58.3363C84.2794 15.7405 123.334 2.00014 143.535 2.00008C200.114 1.9999 325.344 2.00008 344.198 2.00008C391.333 2.00008 388.64 63.8326 344.198 65.2066C299.756 66.5807 130.068 65.2066 72.1588 65.2066C14.2495 65.2066 2.12891 65.2066 2.12891 127.039C2.12891 158.642 2.1275 1573.15 2.1275 1595Z"
        stroke="#F83535"
        strokeWidth="3"
      />
    </svg>
  );
};

export default SidebarLineart;
