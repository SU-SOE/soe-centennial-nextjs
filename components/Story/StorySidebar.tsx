"use client";

import { Heading } from "@/components/Typography";
import SidebarLineart from "@/components/images/sidebar-lineart";
import { TimelineItem } from "../Timeline/TimelineItem";
import { cnb } from "cnbuilder";

interface StorySidebarProps {
  className?: string;
}

export const StorySidebar = ({ className, ...props }: StorySidebarProps) => {
  return (
    <div
      {...props}
      className={cnb(
        "relative pt-[210px] pb-65 rs-px-3 max-w-[463px]",
        className,
      )}
    >
      <div className="w-full z-50 flex flex-col gap-[65px] justify-center items-center ">
        <Heading as="h3" className="font-normal">
          Around the same time...
        </Heading>
        <TimelineItem
          size="full"
          heading="The Beginning"
          year="1990"
          image="https://placecats.com/neo/300/200"
        />
        <TimelineItem
          size="full"
          heading="The Beginning"
          year="1990"
          image="https://placecats.com/neo/300/200"
        />
      </div>
      <SidebarLineart className="absolute top-0 left-0 flex justify-center items-center rs-p-0 z-10" />
    </div>
  );
};
