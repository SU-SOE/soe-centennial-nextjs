import React, { ReactNode } from "react";
import SidebarLineart from "@/components/images/sidebar-lineart";
import { cnb } from "cnbuilder";

interface StorySidebarProps {
  children: ReactNode;
  className?: string;
  hasLineArt?: boolean;
}

export const StorySidebar = ({
  children,
  className,
  hasLineArt,
  ...props
}: StorySidebarProps) => {
  return (
    <div
      {...props}
      className={cnb(
        "@container w-full lg:max-w-[32rem] xl:max-w-400",
        {
          " relative pt-100 sm:pt-150 lg:pt-220 pb-20 md:pb-45 rs-px-3  h-fit":
            hasLineArt,
        },
        className,
      )}
    >
      {hasLineArt && (
        <SidebarLineart className="absolute top-0 left-0 rs-p-0 z-10" />
      )}
      <div className="w-full relative z-50 flex flex-col gap-20 justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
