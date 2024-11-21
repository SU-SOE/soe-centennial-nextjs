import React, { HTMLAttributes } from "react";
import { Slideshow } from "@/components/Slideshow/Slideshow";

type Props = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export const Carousel = ({ children, ...props }: Props) => {
  const slides = React.Children.toArray(children);

  return (
    <article {...props} aria-labelledby="carousel-label">
      <div className="relative left-1/2 mb-32 mt-0 w-screen -translate-x-1/2">
        <Slideshow className="mx-auto w-[calc(100%-50px)] xl:w-[calc(100%-150px)]">
          {slides.map((slide, slideIndex) => {
            return (
              <CarouselSlide
                key={slideIndex} // You can use slideIndex or slide.id if available
                slide={slide}
                slideNumber={slideIndex + 1}
                totalSlides={slides.length}
              />
            );
          })}
        </Slideshow>
      </div>
    </article>
  );
};

const CarouselSlide = ({
  slide,
  slideNumber,
  totalSlides,
}: {
  slide: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
}) => {
  const labelId = `slide-${slideNumber}`;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-labelledby={labelId}
      aria-label={`${slideNumber} of ${totalSlides}`}
    >
      {slide}
    </div>
  );
};
