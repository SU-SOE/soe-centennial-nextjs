/**
 * SidebarLineart component renders different SVG line art based on the screen size and the `isShort` prop.
 *
 * @param {SidebarLineartProps} props - The properties for the SidebarLineart component.
 * @param {string} [props.className] - Optional additional class names to apply to the SVG elements.
 * @param {boolean} [props.isShort] - Determines whether to render the short version of the SVG line art.
 *
 * @returns {JSX.Element} The rendered SidebarLineart component.
 */
import { cnb } from "cnbuilder";
import React from "react";

interface SidebarLineartProps {
  className?: string;
  isShort?: boolean;
}

const SidebarLineart = ({ className, isShort }: SidebarLineartProps) => {
  return (
    <>
      {!isShort && (
        <div className="w-full h-full hidden lg:block">
          <svg
            aria-hidden="true"
            viewBox="0 0 467 1671"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cnb("hidden 2xl:block", className)}
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <path
              vectorEffect="non-scaling-stroke"
              d="M2.1275 1595C2.1275 1623.86 -3.25941 1669.2 55.9966 1669.2C115.253 1669.2 353.222 1669.2 377.463 1669.2C443.452 1669.2 465 1651.34 465 1605.99C465 1573.02 465.001 148.874 465.001 125.515C465.001 81.545 434.193 62.0899 377.464 81.5449C320.735 101 241.535 135.515 143.535 161C106.001 170.761 84.2794 141 84.2794 121.545C84.2794 74.8065 84.2794 73.451 84.2794 58.3363C84.2794 15.7405 123.334 2.00014 143.535 2.00008C200.114 1.9999 325.344 2.00008 344.198 2.00008C391.333 2.00008 388.64 63.8326 344.198 65.2066C299.756 66.5807 130.068 65.2066 72.1588 65.2066C14.2495 65.2066 2.12891 65.2066 2.12891 127.039C2.12891 158.642 2.1275 1573.15 2.1275 1595Z"
              stroke="#F83535"
              strokeWidth="3"
            />
          </svg>
          {/* XL & LG */}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 315 1283"
            className={cnb("hidden lg:block 2xl:hidden", className)}
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              vectorEffect="non-scaling-stroke"
              d="M2.08564 1231.03C2.08564 1250.47 -1.53278 1281 38.2699 1281C78.0725 1281 237.918 1281 254.201 1281C298.526 1281 313 1268.97 313 1238.44C313 1216.23 313 100.907 313 85.1763C313 55.5665 292.306 42.4652 254.201 55.5665C216.095 68.6677 162.896 91.9105 97.0693 109.072C71.8575 115.645 57.2666 95.6042 57.2666 82.5029C57.2666 51.0287 57.2666 50.1159 57.2666 39.9375C57.2666 11.253 83.5002 2.00009 97.0693 2.00005C135.073 1.99993 219.191 2.00005 231.855 2.00005C263.517 2.00005 261.707 43.6388 231.855 44.5641C202.003 45.4894 88.0232 44.5641 49.1252 44.5641C10.2272 44.5641 2.08567 44.5641 2.08566 86.2029C2.08566 107.485 2.08564 1216.32 2.08564 1231.03Z"
              stroke="#F83535"
              strokeWidth="3"
            />
          </svg>
        </div>
      )}
      {isShort && (
        <div className="w-full h-full hidden lg:block">
          <svg
            aria-hidden="true"
            viewBox="0 0 315 547"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cnb("block", className)}
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
            preserveAspectRatio="none"
          >
            <path
              vectorEffect="non-scaling-stroke"
              d="M2.08564 495.272C2.08564 514.704 -1.53278 545.239 38.2699 545.239C78.0725 545.239 237.918 545.239 254.201 545.239C298.526 545.239 313 533.21 313 502.675C313 480.467 313 100.581 313 84.8512C313 55.2413 292.306 42.14 254.201 55.2413C216.095 68.3425 162.896 91.5853 97.0692 108.747C71.8574 115.32 57.2666 95.279 57.2666 82.1777C57.2666 50.7035 57.2666 49.7907 57.2666 39.6123C57.2666 10.9278 83.5001 1.6749 97.0692 1.67486C135.073 1.67474 219.191 1.67486 231.855 1.67486C263.517 1.67486 261.707 43.3136 231.855 44.2389C202.003 45.1642 88.0231 44.2389 49.1251 44.2389C10.2271 44.2389 2.0856 44.2389 2.0856 85.8777C2.0856 107.159 2.08564 480.558 2.08564 495.272Z"
              stroke="#F83535"
              strokeWidth="3"
            />
          </svg>
        </div>
      )}
      {/* MD */}
      <div className="w-full h-full lg:hidden">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden @4xl:block lg:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
          viewBox="0 0 627 574"
          fill="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M1.5 523.767C1.5 551.057 10.371 572 42.3773 572C101.646 572 550.705 572 574.951 572C615.959 572 625.499 561.409 625.499 523.767C625.499 486.125 625.5 115.357 625.5 93.2649C625.5 58.7875 597.918 41.8064 574.951 47.9113C551.983 54.0163 526.978 61.5823 480.469 74.3499C452.463 82.038 430.703 80.4972 430.703 52.6401C430.703 49.2875 430.703 44.9852 430.703 30.6906C430.703 3.8915 461.965 2.00003 470.004 2.00003C478.043 2.00003 527.016 2 533.715 2C566.024 2 567.524 37.1881 533.715 37.1881C489.242 37.1881 116.302 37.188 58.3809 37.188C22.3735 37.188 1.50098 47.9113 1.50098 80.4973C1.50098 113.083 1.5 503.101 1.5 523.767Z"
            stroke="#F83535"
            strokeWidth="3"
          />
        </svg>
        {/* SM */}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden @md:block @4xl:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
          viewBox="0 0 480 609"
          fill="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M2 562.551C2 587.7 10.618 607 41.7116 607C99.2898 607 405.338 607 428.892 607C468.731 607 477.999 597.24 477.999 562.551C477.999 527.863 477.999 89.467 477.999 69.1087C477.999 34.4271 454.191 40.5113 439.13 44.3089C424.069 48.1064 387.631 59.5217 360.91 66.9299C333.842 74.4338 312.563 72.5948 312.563 46.9235C312.563 43.834 312.563 31.1966 312.563 28.4393C312.563 3.74308 342.933 2.00003 350.743 2.00003C358.553 2.00003 401.042 2 407.551 2C438.938 2 440.396 34.4271 407.551 34.4271C364.346 34.4271 113.528 34.427 57.258 34.427C22.2773 34.427 2 44.3089 2 74.338C2 104.367 2 543.507 2 562.551Z"
            stroke="#F83535"
            strokeWidth="3"
          />
        </svg>
        {/* XS */}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("block @md:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
          viewBox="0 0 308 859"
          fill="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M2 828.217C2 853.946 12.8917 856.75 30.9287 856.75C90.3076 856.75 245.094 856.75 269.385 856.75C293.677 856.75 306 849.617 305.999 830C305.997 810.383 306 81.6785 306 60.85C306 40.0216 288.963 33.8913 271.928 38.1525C254.893 42.4137 226.334 50.1338 213.307 53.7167C200.28 57.2996 168.465 67.0916 168.465 40.8275C168.465 37.6667 168.465 24.7375 168.465 21.9165C168.465 4.675 183.745 2.00003 201.827 2.00003C219.909 2.00003 243.679 2 250.391 2C271.441 2 270.439 28.0425 250.391 28.0425C205.835 28.0426 89.9605 28.0424 31.9311 28.0424C7.88132 28.0424 2.00098 35.4775 2.00098 56.3916C2.00098 77.3058 2 808.733 2 828.217Z"
            stroke="#F83535"
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
};

export default SidebarLineart;
