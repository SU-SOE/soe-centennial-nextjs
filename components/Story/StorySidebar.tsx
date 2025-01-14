import React, { ReactNode } from "react";
import SidebarLineart from "@/components/images/sidebar-lineart";
import { cnb } from "cnbuilder";

interface StorySidebarProps {
  children: ReactNode;
  className?: string;
}

export const StorySidebar = ({
  children,
  className,
  ...props
}: StorySidebarProps) => {
  return (
    <div
      {...props}
      className={cnb(
        "relative pt-[22rem] pb-65 rs-px-3 w-full lg:max-w-[463px]",
        className,
      )}
    >
      <SidebarLineart className="absolute top-0 left-0 flex justify-center items-center rs-p-0 z-10" />
      <div className="w-full z-50 flex flex-col gap-[65px] justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
