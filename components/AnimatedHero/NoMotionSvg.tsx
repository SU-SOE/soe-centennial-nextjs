import { cnb } from "cnbuilder";

export const NoMotionSvg = ({ className }: { className?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 768 682"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={cnb("flex items-center justify-center", className)}
    aria-hidden="true"
  >
    <defs>
      <clipPath id="image-clip">
        <path d="M89.667 42.417c-1 16-2.287 464.087 0 494 12.995 170 243.345 178 282.001 36 49.001-180 118.848-450.204 128-474 58.846-153 284-92 255 71.999-10.051 56.842-106.094 415.37-113.001 431.001-55.232 125-212 71-212-39 0-81.006 2.702-439.246 0-454-25.083-137-186.399-114-213.999-22-18 59.999-142 556-147 568-12.918 31-63 21-56-16s153-567 156-585c6.5-39-62-69-79.001-11Z" />
      </clipPath>
    </defs>

    <image
      href="https://res.cloudinary.com/duv7bozlj/image/upload/v1740466877/WEB-20220204_3D_Bioprinting_N6A8345_optimized_h5vvnz.jpg"
      width="768"
      height="682"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#image-clip)"
    />

    <path
      d="M89.667 42.417c-1 16-2.287 464.087 0 494 12.995 170 243.345 178 282.001 36 49.001-180 118.848-450.204 128-474 58.846-153 284-92 255 71.999-10.051 56.842-106.094 415.37-113.001 431.001-55.232 125-212 71-212-39 0-81.006 2.702-439.246 0-454-25.083-137-186.399-114-213.999-22-18 59.999-142 556-147 568-12.918 31-63 21-56-16s153-567 156-585c6.5-39-62-69-79.001-11Z"
      stroke="#F83535"
      strokeWidth="16"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
