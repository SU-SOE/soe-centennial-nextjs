"use client";
import React from "react";
import { Button } from "@/components/Cta";
import { usePathname } from "next/navigation";
import { Text } from "../Typography";

const navigationItems = [
  { label: "All stories", href: "/stories" },
  { label: "Decade stories", href: "/decades" },
  { label: "Video stories", href: "/videos" },
  { label: "Event Coverage", href: "/events" },
];

export const StoriesNav = () => {
  const pathname = usePathname();
  return (
    <div className="cc lg:p-0 lg:w-full mx-auto lg:max-w-800 flex flex-wrap lg:flex-row gap-10 lg:gap-26 items-center justify-center lg:justify-between rs-mb-5">
      <Text mb="0">View</Text>
      <div className="flex flex-wrap lg:flex-row items-center justify-center lg:justify-between gap-10">
        {navigationItems.map((item, key) => (
          <Button
            hideArrow
            key={key}
            href={item.href}
            isLight
            className="py-8 px-16 lg:rs-px-1 lg:rs-py-0"
            solid={pathname === item.href}
            disabled={pathname === item.href}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
