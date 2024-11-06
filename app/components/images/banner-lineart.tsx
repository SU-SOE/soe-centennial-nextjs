import React from "react";

interface BannerLineartProps {
  className?: string;
}

const BannerLineart = ({ className }: BannerLineartProps) => {
  return (
    <svg
      viewBox="0 0 1730 632"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        height: "100%",
        width: "100%",
        maxWidth: "100%",
      }}
      preserveAspectRatio="none"
    >
      <path
        d="M2.1275 555.801C2.1275 584.656 -3.25941 630 55.9966 630C115.253 630 1616.52 630 1640.76 630C1728.3 630 1728.3 607 1728.3 544C1728.3 504.199 1728.3 148.874 1728.3 125.515C1728.3 81.545 1697.5 62.0899 1640.77 81.5449C1584.04 101 1504.84 135.515 1406.84 161C1369.3 170.761 1347.58 141 1347.58 121.545C1347.58 74.8065 1347.58 73.451 1347.58 58.3363C1347.58 15.7405 1386.64 2.00014 1406.84 2.00008C1463.42 1.9999 1588.65 2.00008 1607.5 2.00008C1654.64 2.00008 1651.94 63.8326 1607.5 65.2066C1563.06 66.5807 130.068 65.2066 72.1588 65.2066C14.2495 65.2066 2.12891 65.2066 2.12891 127.039C2.12891 158.642 2.1275 533.95 2.1275 555.801Z"
        stroke="#F83535"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BannerLineart;
