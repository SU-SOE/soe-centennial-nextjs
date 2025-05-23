/**
 * ScrollyBubble component
 *
 * This component is a styled div container that wraps its children with padding,
 * background color, text color, and rounded corners. The children passed in should
 * be wrapped with the <Text> component for consistent styling.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the ScrollyBubble.
 *
 * @example
 * <ScrollyBubble>
 *   <Text>Your content here</Text>
 * </ScrollyBubble>
 */
import React from "react";

export const ScrollyBubble = ({
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="p-36 bg-white text-stone-dark rounded-[20px] lg:min-w-650 mx-auto md:w-2/3 xl:w-1/2">
      {children}
    </div>
  );
};
