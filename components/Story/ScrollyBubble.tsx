import React from "react";

export const ScrollyBubble = ({
  children, // children passed in should be wrapped with the <Text> component
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="p-36 bg-white text-stone-dark rounded-[20px]">
      {children}
    </div>
  );
};
