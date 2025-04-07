"use client";

import { HTMLAttributes, JSX, useEffect, useRef } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { cnb } from "cnbuilder";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const NextArrow = ({ className, onClick }: CustomArrowProps) => {
  const slickDisabled = className?.includes("slick-disabled");
  return (
    <button
      className={cnb(
        "hocus:outline-3 absolute right-0 bottom-0 z-50 flex h-36 w-36 items-center justify-center rounded-full border-2 border-white",
        {
          "bg-stone-dark hocus:bg-stone-dark hocus:outline hocus:outline-stone-dark":
            !slickDisabled,
          "bg-black-10 hocus:bg-black-10 hocus:outline-0": slickDisabled,
        },
      )}
      onClick={onClick}
      aria-label="Next"
      disabled={slickDisabled}
    >
      <ChevronRightIcon
        width={40}
        className={slickDisabled ? "text-black-30" : "text-white"}
      />
    </button>
  );
};

const PrevArrow = ({ className, onClick }: CustomArrowProps) => {
  const slickDisabled = className?.includes("slick-disabled");
  return (
    <button
      className={cnb(
        "hocus:outline-3 absolute right-40 bottom-0 z-50 flex h-36 w-36 items-center justify-center rounded-full border-2 border-white",
        {
          "bg-stone-dark hocus:bg-stone-dark hocus:outline hocus:outline-stone-dark":
            !slickDisabled,
          "bg-black-10 hocus:bg-black-10 hocus:outline-0": slickDisabled,
        },
      )}
      onClick={onClick}
      aria-label="Previous"
      disabled={slickDisabled}
    >
      <ChevronLeftIcon
        width={40}
        className={slickDisabled ? "text-black-30" : "text-white"}
      />
    </button>
  );
};

type SlideshowProps = HTMLAttributes<HTMLDivElement> & {
  children: JSX.Element | JSX.Element[];
  slideshowProps?: Omit<Settings, "children">;
};

// Slide padding styles are added in the tailwind index.css file.
export const Slideshow = ({
  children,
  slideshowProps,
  ...props
}: SlideshowProps) => {
  const slideShowRef = useRef<HTMLDivElement>(null);

  const adjustSlideLinks = () => {
    // Set tabindex attributes based on if the slides are visible or not.
    const hiddenLinks = slideShowRef.current?.querySelectorAll(
      ".slick-slide:not(.slick-active) a",
    );
    if (hiddenLinks) {
      [...hiddenLinks].map((link) => link.setAttribute("tabindex", "-1"));
    }

    const visibleLinks = slideShowRef.current?.querySelectorAll(
      ".slick-slide.slick-active a",
    );
    if (visibleLinks) {
      [...visibleLinks].map((link) => link.removeAttribute("tabindex"));
    }
  };

  useEffect(() => {
    adjustSlideLinks();
  }, []);

  const settings: Settings = {
    afterChange: () => adjustSlideLinks(),
    autoplay: false,
    centerMode: false,
    className:
      "[&_.slick-track]:flex [&_.slick-track] [&_.slick-slider]:relative [&_.slick-slide>div]:h-full [&_.slick-slide>div>div]:h-full even:[&_.slick-slide]:rs-pt-6",
    dots: false,
    infinite: false,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    ...slideshowProps,
  };
  return (
    <section
      ref={slideShowRef}
      {...props}
      aria-roledescription="carousel"
      className={cnb("relative", props.className)}
    >
      <Slider {...settings}>{children}</Slider>
    </section>
  );
};
