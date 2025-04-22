import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const images = [
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466880/zx844pk9013_optimized_vwwdyg.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466875/20201204Ocean_One_k_3D0A1788_optimized_vrsomb.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466876/U4473_Irmgard-Flugge-Lotz_1951_wide2_o5vfns.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466877/WEB-20220204_3D_Bioprinting_N6A8345_optimized_h5vvnz.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466875/STS047-37-003_large_Mission_Specialist_Mae_C._Jemison_aboard_the_Space_Shuttle_Endeavour_1992_c5e2nm.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466874/rm634fy8400_whqtof.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466878/130704-9205_optimized_x3fqc9.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466875/Ryan-High-Voltage-Laboratory_ZZ050168_1927_tighter_p8pcwn.jpg",
  "https://res.cloudinary.com/duv7bozlj/image/upload/v1740466877/WEB-20220204_3D_Bioprinting_N6A8345_optimized_h5vvnz.jpg",
];

interface MaskAnimationProps {
  onComplete?: () => void;
}

export const MaskAnimation = ({ onComplete }: MaskAnimationProps) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const [imageIndex, setImageIndex] = useState(0);
  const [mask, setMask] = useState(false);

  useEffect(() => {
    if (mask) {
      const interval = setInterval(() => {
        if (imageIndex < images.length - 1) {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else {
          clearInterval(interval);
          onComplete?.(); // Call onComplete when last image is fully visible
        }
      }, 500); // Change image every second

      return () => {
        clearInterval(interval);
      };
    }
  }, [imageIndex, mask, onComplete]);

  return (
    <motion.svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox="0 0 768 682"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      preserveAspectRatio="none"
      className="flex items-center justify-center"
    >
      <mask id="image-mask">
        <rect width="100%" height="100%" fill="black" />
        <path
          d="M89.667 42.417c-1 16-2.287 464.087 0 494 12.995 170 243.345 178 282.001 36 49.001-180 118.848-450.204 128-474 58.846-153 284-92 255 71.999-10.051 56.842-106.094 415.37-113.001 431.001-55.232 125-212 71-212-39 0-81.006 2.702-439.246 0-454-25.083-137-186.399-114-213.999-22-18 59.999-142 556-147 568-12.918 31-63 21-56-16s153-567 156-585c6.5-39-62-69-79.001-11Z"
          fill="white"
        />
      </mask>
      {images.map((src, idx) => (
        <motion.image
          key={idx}
          xlinkHref={src}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#image-mask)"
          initial={{ opacity: 0 }}
          animate={mask && { opacity: imageIndex === idx ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        />
      ))}
      <motion.path
        d="M89.667 42.417c-1 16-2.287 464.087 0 494 12.995 170 243.345 178 282.001 36 49.001-180 118.848-450.204 128-474 58.846-153 284-92 255 71.999-10.051 56.842-106.094 415.37-113.001 431.001-55.232 125-212 71-212-39 0-81.006 2.702-439.246 0-454-25.083-137-186.399-114-213.999-22-18 59.999-142 556-147 568-12.918 31-63 21-56-16s153-567 156-585c6.5-39-62-69-79.001-11Z"
        stroke="#F83535"
        strokeWidth="16"
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{
          duration: 1,
          delay: 0,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setMask(true)}
      />
    </motion.svg>
  );
};
