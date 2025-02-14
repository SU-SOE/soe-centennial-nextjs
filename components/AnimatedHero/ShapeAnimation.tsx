"use client";

import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { interpolate } from "flubber";

const paths: { [key: string]: string } = {
  0: "M0,0",
  1: "M381.334 134.835C381.334 82.8456 381.9 66.2088 306.632 66.2088C231.364 66.2088 145.344 66.2088 117.614 66.2088C67.8123 66.2088 67.2464 8.5 117.614 8.5C167.981 8.5 243.815 8.5 268.715 8.5C337.758 8.5 331.533 118.199 268.715 118.199C205.898 118.199 100.07 118.199 75.1693 118.199C-1.23039 118.199 -6.60214 165.054 32.725 217.499C67.8123 264.29 209.859 440.536 235.892 472.25C251.936 491.796 271.63 516.368 292.484 523.72C336.282 539.162 381.334 515.923 381.334 472.25C381.334 356.624 381.334 199.13 381.334 134.835Z",
  2: "M324.41 353.961C346.92 353.961 331.203 353.961 373.41 353.961C397.931 353.961 408.583 342.489 408.583 321.67C408.583 232.802 408.583 71.2599 408.583 65.5968C408.583 29.5762 395.993 8.5 362.111 8.5C346.636 8.5 82.8332 8.5 56.2077 8.5C29.5822 8.5 -43.0031 47.7727 71.2125 141.565C93.4777 157.532 247.61 289.518 324.41 353.961ZM324.41 353.961C268.555 353.961 150.636 353.961 117.574 353.961C99.2463 353.961 92.0285 363.7 92.0284 385.093C92.0283 412.704 92.0284 454.981 92.0284 460.573C92.0284 482.391 109.719 488.5 116.701 488.5C130.77 488.5 372.003 488.5 376.224 488.5C423.585 488.5 423.901 442.747 396.846 417.809C369.792 392.871 346.228 372.269 324.41 353.961Z",
  3: "M8.8424 441.169C8.84239 467.353 3.94519 508.5 57.8143 508.5C111.683 508.5 291.655 508.5 313.693 508.5C373.683 508.5 393.272 492.29 393.272 451.144C393.272 421.219 393.272 178.077 393.272 156.88C393.272 116.98 370.961 92.7327 307.571 116.98C244.181 141.227 229.964 154.796 176.571 184.629C118.727 216.95 83.5247 190.318 83.5247 159.691C83.5247 117.279 83.5247 73.3376 83.5247 59.6219C83.5247 20.9687 119.029 8.50015 137.394 8.50009C188.829 8.49994 302.674 8.50012 319.814 8.50012C362.665 8.50013 360.216 64.6095 319.814 65.8563C279.412 67.1032 125.151 65.8563 72.506 65.8563C19.8612 65.8563 8.84246 65.8563 8.84245 121.966C8.84245 150.644 8.8424 421.34 8.8424 441.169Z",
  4: "M61.3905 508.5C117.75 508.5 292.242 508.5 323.553 508.5C365.275 508.5 375.531 486.324 375.531 450.788C375.531 415.252 375.531 141.773 375.531 126.543C375.531 92.3054 345.259 80.7404 311.859 103.077C288.071 118.987 279.996 124.758 246.783 143.15C213.569 161.542 188.297 143.15 188.297 92.3054C188.297 68.953 188.297 72.5088 188.297 50.1718C188.297 27.8347 191.428 8.5 229.001 8.5C266.574 8.5 299.745 8.5 299.745 8.5C299.745 8.5 299.745 8.5 299.745 8.5C350.014 8.5 351.21 66.3995 299.745 66.3995C273.713 66.3995 92.7252 66.3995 61.3905 66.3995C30.0558 66.3995 8.00081 85.2505 8.00081 119.811C8.00081 154.371 8 446.797 8 459.765C8 497.467 30.4452 508.5 61.3905 508.5Z",
  5: "M415.972 97.3926L63.7948 356.652C-23.845 421.467 3.93408 508.5 63.7961 508.5L453.861 506.514C502.084 506.514 521.991 494.616 521.991 446.467V214.985C521.991 172.71 484.491 153.874 444.248 184.747L349.306 261.271C299.306 299.245 262.526 270.297 262.526 203.784V52.0222C262.526 25.1703 275.913 8.5 304.861 8.5H410.417C421.272 8.5 453.861 8.5 453.861 41.2724C453.861 68.6889 426.325 88.5514 415.972 97.3926Z",
  6: "M427.873 82.0259C427.873 53.4325 433.222 8.5 374.386 8.5C315.551 8.5 118.986 8.5 94.9165 8.5C29.3948 8.5 7.99999 26.2012 7.99999 71.1332C7.99999 103.811 7.99999 369.322 7.99999 392.469C7.99999 436.04 32.3678 462.518 101.602 436.04C170.837 409.562 186.365 394.745 244.68 362.167C307.858 326.873 346.306 355.955 346.306 389.399C346.306 435.714 346.306 483.697 346.306 498.675C346.306 540.884 307.527 554.5 287.47 554.5C231.293 554.5 106.951 554.5 88.2306 554.5C41.4294 554.5 44.1037 493.229 88.2306 491.867C132.357 490.505 300.842 491.867 358.34 491.867C415.839 491.867 427.873 491.867 427.873 430.595C427.873 399.279 427.873 103.679 427.873 82.0259Z",
  7: "M108.08 394.941L439.127 151.237C521.509 90.3111 495.396 8.50001 439.126 8.5L72.4647 10.3666C27.1357 10.3666 8.42265 21.5507 8.42265 66.8111L8.42263 284.404C8.42263 324.142 43.6727 341.848 81.5009 312.828L170.747 240.895C217.747 205.2 252.32 232.411 252.32 294.933L252.32 437.589C252.32 462.83 239.736 478.5 212.525 478.5L113.302 478.5C103.098 478.5 72.4646 478.5 72.4646 447.694C72.4646 421.922 98.3487 403.252 108.08 394.941Z",
  8: "M470.985 408.896V311.014C470.985 266.541 441.496 227.449 398.744 215.242L146.025 143.045C132.3 139.126 122.842 126.587 122.842 112.312C122.842 94.6535 137.16 80.3501 154.804 80.3501H437.547C456.016 80.3501 470.999 95.3188 470.999 113.788C470.999 132.256 456.031 147.239 437.547 147.239H329.006C290.694 147.239 259.643 116.188 259.643 77.877C259.643 39.5656 228.578 8.5 190.281 8.5H108.177C53.1612 8.5 8.55859 53.1026 8.55859 108.118V408.896C8.55859 463.912 53.1612 508.5 108.162 508.5H371.367C426.382 508.5 470.985 463.897 470.985 408.896Z",
  9: "M156.018 625.785C233.82 604.287 338.49 579.468 358.08 573.171C377.671 566.874 387.691 547.983 387.691 520.429L387.687 39.792C387.687 16.5074 370.394 5.00784 350.543 8.9801L43.5122 65.8676C18.3266 70.5422 8.30511 86.0413 8.3051 113.183L8.30509 570.379C8.30509 601.591 28.3973 605.508 49.5926 601.591L245.09 549.255C267.962 542.819 280.551 558.896 280.551 577.096L280.551 657.421C280.551 670.328 270.087 680.792 257.18 680.792L161.827 680.792C119.076 680.792 113.478 637.54 156.018 625.785Z",
  10: "M8.01521 108.104L8.0152 205.986C8.01519 250.459 37.5044 289.551 80.2557 301.757L332.975 373.955C346.7 377.874 356.158 390.413 356.158 404.688C356.158 422.346 341.84 436.65 324.196 436.65L41.4526 436.65C22.9839 436.65 8.0007 421.681 8.0007 403.212C8.0007 384.744 22.9695 369.761 41.4526 369.761L149.994 369.761C188.306 369.761 219.357 400.812 219.357 439.123C219.357 477.434 250.422 508.5 288.719 508.5L370.823 508.5C425.839 508.5 470.441 463.897 470.441 408.882L470.441 108.104C470.441 53.0881 425.839 8.49998 370.838 8.49998L107.633 8.49996C52.6178 8.49995 8.01521 53.1026 8.01521 108.104Z",
  100: "M223.626 284H223.398C196.066 284 173.833 261.645 173.833 234.165V179.096L158.97 235.368C151.398 264.012 125.532 284.014 96.0627 284.014C70.3051 284.014 48.0044 268.894 37.4592 247.026L30.8013 272.302C28.9855 279.199 22.7714 284.014 15.6696 284.014C10.7736 284.014 6.25429 281.782 3.2683 277.874C0.282312 273.979 -0.713018 269.002 0.53787 264.242L30.9761 148.735V20.7861C30.9761 9.31791 40.2569 0 51.6494 0C58.1191 0 64.091 2.96171 68.032 8.11429C71.973 13.2669 73.2911 19.8259 71.6367 26.1145L39.0464 149.79V209.308L84.4146 37.0823C90.1714 15.2413 109.876 0 132.338 0C159.67 0 181.903 22.3549 181.903 49.8352V116.954L200.989 44.7232C207.943 18.3924 231.737 0 258.826 0C277.549 0 294.833 8.56057 306.252 23.4773C317.672 38.3941 321.465 57.3951 316.676 75.5846L271.537 246.918C265.78 268.745 246.075 284 223.626 284ZM181.903 148.559V234.165C181.903 257.169 200.519 275.886 223.398 275.886H223.626C242.43 275.886 258.92 263.119 263.735 244.849L308.875 73.5154C313.018 57.7737 309.736 41.3423 299.863 28.427C289.977 15.5253 275.02 8.11429 258.826 8.11429C235.382 8.11429 214.803 24.0318 208.777 46.8059L181.89 148.546L181.903 148.559ZM41.0101 233.516C47.5739 257.899 69.7671 275.886 96.0627 275.886C122.358 275.886 144.538 258.359 151.169 233.272L173.833 147.491V49.8352C173.833 26.8312 155.218 8.11429 132.338 8.11429C113.535 8.11429 97.0445 20.8808 92.2293 39.1514L41.0101 233.516ZM30.9627 180.408L8.32565 266.311C7.72039 268.61 8.2046 271.017 9.6438 272.91C11.083 274.804 13.2754 275.886 15.6561 275.886C19.086 275.886 22.0989 273.56 22.9866 270.219L32.6709 233.462C31.5545 228.674 30.9627 223.684 30.9627 218.558V180.421V180.408ZM51.636 8.11429C44.6821 8.11429 39.0329 13.7943 39.0329 20.7861V118.103L63.822 24.0318C64.8308 20.2046 64.0372 16.2015 61.6296 13.064C59.222 9.92648 55.5904 8.11429 51.636 8.11429Z",
  mask: "M381.334 134.835C381.334 82.8456 381.9 66.2088 306.632 66.2088C231.364 66.2088 145.344 66.2088 117.614 66.2088C67.8123 66.2088 67.2464 8.5 117.614 8.5C167.981 8.5 243.815 8.5 268.715 8.5C337.758 8.5 331.533 118.199 268.715 118.199C205.898 118.199 100.07 118.199 75.1693 118.199C-1.23039 118.199 -6.60214 165.054 32.725 217.499C67.8123 264.29 209.859 440.536 235.892 472.25C251.936 491.796 271.63 516.368 292.484 523.72C336.282 539.162 381.334 515.923 381.334 472.25C381.334 356.624 381.334 199.13 381.334 134.835Z",
};

interface ShapeAnimationProps {
  order: (number | string)[];
  onComplete?: () => void;
}

export const ShapeAnimation = ({ order, onComplete }: ShapeAnimationProps) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(0);
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  // Map order array to corresponding paths
  const orderedPaths = order.map((key) => paths[key]);
  const isMask = order[pathIndex] === "mask";
  const is100 = order[pathIndex] === 100;

  // Create interpolated path transformation
  const path = useTransform(
    progress,
    order.map((_, i) => i),
    orderedPaths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
    },
  );

  useEffect(() => {
    if (isInView && pathIndex < order.length - 1) {
      animate(progress, pathIndex + 1, {
        duration: 0.5,
        delay: 0.4,
        ease: "easeInOut",
        onComplete: () => {
          setPathIndex((prev) => prev + 1);
          if (pathIndex + 1 === order.length - 1) {
            onComplete?.();
          }
        },
      });
    }
  }, [pathIndex, progress, isInView, order.length, onComplete]);

  return (
    <motion.svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox="-70 0 600 700"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      preserveAspectRatio="none"
      className="flex items-center justify-center"
    >
      {isMask && (
        <>
          <mask id="image-mask">
            <rect width="100%" height="100%" fill="black" />
            <motion.path d={path} fill="white" />
          </mask>
          <image
            xlinkHref="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481950/Ryan-High-Voltage-Laboratory_rinsml.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#image-mask)"
          />
        </>
      )}
      <motion.path
        d={path}
        stroke="#F83535"
        strokeWidth={is100 ? "0" : "16"}
        fill="transparent"
      />
    </motion.svg>
  );
};
