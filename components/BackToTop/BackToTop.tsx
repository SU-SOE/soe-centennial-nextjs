"use client";
import { useBoolean, useDebounceCallback, useEventListener } from "usehooks-ts";
import { useCallback } from "react";
import { Button } from "../Cta";
import { cnb } from "cnbuilder";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

export const BackToTop = () => {
  const { value, setFalse, setTrue } = useBoolean(false);

  const onScroll = useCallback(() => {
    if (window.scrollY > 1500) setTrue();
    if (window.scrollY <= 1500) setFalse();
  }, [setTrue, setFalse]);

  useEventListener("scroll", useDebounceCallback(onScroll, 200));

  const onButtonClick = useCallback(() => {
    scrollTo({
      left: 0,
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)")?.matches
        ? "instant"
        : "smooth",
    });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, []);

  return (
    <Button
      solid
      className={cnb(
        "fixed bottom-10 right-10 z-[500] transition-all duration-300",
        {
          "visible opacity-100": value,
          "invisible opacity-0": !value,
        },
      )}
      onClick={onButtonClick}
    >
      <span className="flex items-center gap-2">
        Back to Top
        <ArrowUpIcon width={15} />
      </span>
    </Button>
  );
};
