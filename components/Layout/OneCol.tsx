/**
 * A component that renders a single column layout with optional background color.
 * It uses the `Container` component to wrap its children and applies flexbox styles
 * to center the content.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the column.
 * @param {string} [className] - Additional class names to apply to the container.
 * @param {BgColorType} [bgColor] - Optional background color type for the container.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to apply to the container.
 * @returns {JSX.Element} The rendered single column layout component.
 */
import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: BgColorType;
};

export const OneCol = ({ children, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb("flex flex-col items-center", className)}
    >
      <div className="w-full max-w-[72.5rem]">{children}</div>
    </Container>
  );
};
