"use client";
import React from "react";
import { Button } from "@/components/Cta";
import { usePathname } from "next/navigation";
import { Text } from "../Typography";

const navigationItems = [
  { label: "All stories", href: "/stories" },
  { label: "Decade stories", href: "/decades" },
  { label: "Video stories", href: "/videos" },
];

export const StoriesNav = () => {
  const pathname = usePathname();
  return (
    <div className="mx-auto max-w-600 flex flex-row gap-26 items-center justify-between rs-mb-1">
      <Text mb="0">View</Text>
      <div className="flex flex-row gap-10">
        {navigationItems.map((item, key) => (
          <Button
            hideArrow
            key={key}
            href={item.href}
            isLight
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
