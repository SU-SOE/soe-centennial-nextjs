"use client";

import { HTMLAttributes, JSX, useEffect, useRef, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { cnb } from "cnbuilder";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

type ArrowProps = CustomArrowProps & {
  disabled?: boolean;
};

const NextArrow = ({ onClick, disabled }: ArrowProps) => (
  <button
    className={cnb(
      "hocus:outline-3 absolute right-0 bottom-0 z-50 flex h-36 w-36 items-center justify-center rounded-full border-2 border-white",
      {
        "bg-stone-dark hocus:bg-stone-dark hocus:outline hocus:outline-stone-dark":
          !disabled,
        "bg-black-10 hocus:bg-black-10 hocus:outline-0": disabled,
      },
    )}
    onClick={onClick}
    aria-label="Next"
    disabled={disabled}
  >
    <ChevronRightIcon
      width={40}
      className={disabled ? "text-black-30" : "text-white"}
    />
  </button>
);

const PrevArrow = ({ onClick, disabled }: ArrowProps) => (
  <button
    className={cnb(
      "hocus:outline-3 absolute right-40 bottom-0 z-50 flex h-36 w-36 items-center justify-center rounded-full border-2 border-white",
      {
        "bg-stone-dark hocus:bg-stone-dark hocus:outline hocus:outline-stone-dark":
          !disabled,
        "bg-black-10 hocus:bg-black-10 hocus:outline-0": disabled,
      },
    )}
    onClick={onClick}
    aria-label="Previous"
    disabled={disabled}
  >
    <ChevronLeftIcon
      width={40}
      className={disabled ? "text-black-30" : "text-white"}
    />
  </button>
);

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
  const sliderRef = useRef<Slider | null>(null);
  const slideCount = Array.isArray(children) ? children.length : 1;

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const checkEdgeSlides = () => {
    const activeSlides = slideShowRef.current?.querySelectorAll(
      ".slick-slide.slick-active",
    );
    if (!activeSlides || activeSlides.length === 0) return;

    const indexes = [...activeSlides]
      .map((slide) => parseInt(slide.getAttribute("data-index") || "", 10))
      .filter((n) => !isNaN(n));

    setIsFirstSlide(indexes.includes(0));
    setIsLastSlide(indexes.includes(slideCount - 1));
  };

  const adjustSlideLinks = () => {
    // Set tabindex attributes based on if the slides are visible or not.
    const hiddenLinks = slideShowRef.current?.querySelectorAll(
      ".slick-slide:not(.slick-active) a",
    );
    if (hiddenLinks) {
      [...hiddenLinks].map((link) => {
        link.setAttribute("tabindex", "-1");
        link.setAttribute("aria-hidden", "true");
      });
    }

    const visibleLinks = slideShowRef.current?.querySelectorAll(
      ".slick-slide.slick-active a",
    );
    if (visibleLinks) {
      [...visibleLinks].map((link) => {
        link.removeAttribute("tabindex");
        link.removeAttribute("aria-hidden");
      });
    }
  };

  useEffect(() => {
    adjustSlideLinks();
    checkEdgeSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      checkEdgeSlides();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings: Settings = {
    afterChange: () => {
      adjustSlideLinks();
      checkEdgeSlides();
    },

    arrows: false,
    autoplay: false,
    centerMode: false,
    className:
      "[&_.slick-track]:flex [&_.slick-track] [&_.slick-slider]:relative [&_.slick-slide>div]:h-full [&_.slick-slide>div>div]:h-full even:[&_.slick-slide]:rs-pt-6",
    dots: false,
    infinite: false,
    initialSlide: 0,
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
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <ul className="list-none">
        <li>
          <PrevArrow disabled={isFirstSlide} onClick={previous} />
        </li>
        <li>
          <NextArrow disabled={isLastSlide} onClick={next} />
        </li>
      </ul>
    </section>
  );
};
