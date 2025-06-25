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
    <nav
      aria-label="stories-nav"
      className="cc lg:p-0 lg:w-full mx-auto lg:max-w-800 flex flex-wrap lg:flex-row gap-10 lg:gap-26 items-center justify-center lg:justify-between rs-mb-5"
    >
      <Text mb="0">View</Text>
      <ul className="list-none flex flex-wrap lg:flex-row items-center justify-center lg:justify-between gap-10 p-0">
        {navigationItems.map((item, key) => (
          <li key={key} className="m-0">
            <Button
              hideArrow
              href={item.href}
              isLight
              className="py-8 px-16 lg:rs-px-1 lg:rs-py-0"
              solid={pathname === item.href}
              disabled={pathname === item.href}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
