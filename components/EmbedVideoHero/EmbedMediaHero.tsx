"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { cnb } from "cnbuilder";
import ReactPlayer from "react-player/lazy";
import { FlexBox } from "@/components/FlexBox";
import Image from "next/image.js";
import { PlayIcon } from "@heroicons/react/16/solid";
import * as styles from "./EmbedMediaHero.styles";
import { useEventListener } from "usehooks-ts";

type EmbedMediaHeroProps = React.HTMLAttributes<HTMLDivElement> & {
  mediaUrl: string;
  caption?: React.ReactNode;
  autoplay?: boolean;
  isCaptionInset?: boolean;
  isPreview?: boolean;
  previewImageSrc?: string;
  previewAriaLabel?: string;
};

const PlayPreviewIcon = (
  <FlexBox
    alignItems="center"
    justifyContent="center"
    className={styles.iconWrapper}
  >
    <PlayIcon className={styles.previewIcon} />
  </FlexBox>
);

export const EmbedMediaHero = ({
  mediaUrl,
  caption,
  isCaptionInset,
  isPreview,
  autoplay,
  previewImageSrc,
  previewAriaLabel,
  className,
  ...props
}: EmbedMediaHeroProps) => {
  /**
   * This is needed to prevent hydration error for the React Player.
   * https://github.com/cookpete/react-player/issues/1428
   */
  const [hasWindow, setHasWindow] = useState(false);
  const playerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasWindow(typeof window !== "undefined");
  }, []);

  // If the space key is pressed, do not scroll the page and click the element
  const handleSpaceKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Space" || event.key === " ") {
      event.preventDefault();
      (event.target as HTMLElement).click();
    }
  };

  useEffect(() => {
    if (!isPreview || !playerWrapperRef.current) return;

    const wrapper = playerWrapperRef.current;

    /**
     * Observe for an element with class .react-player__preview inside the wrapper
     * and set its role to button when it is added to the DOM
     */
    const observer = new MutationObserver(() => {
      const preview = wrapper.querySelector(".react-player__preview");
      if (preview) {
        preview.setAttribute("role", "button");
        observer.disconnect();
      }
    });

    observer.observe(wrapper, {
      childList: true, // Look for added/removed child elements
      subtree: true, // Look for added/removed elements in all descendants inside wrapper
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [isPreview]);

  useEventListener("keydown", handleSpaceKeyDown);

  let PreviewImage: ReactElement = <></>;
  if (previewImageSrc) {
    PreviewImage = (
      <picture>
        <Image
          src={previewImageSrc}
          fill
          sizes="100vw"
          alt=""
          className={styles.previewImage}
        />
      </picture>
    );
  }

  return (
    <div {...props} className={cnb("aspect-[16/9]", className)}>
      <figure className="size-full">
        <div className={styles.mediaWrapper} ref={playerWrapperRef}>
          {hasWindow && (
            <ReactPlayer
              width="100%"
              height="100%"
              url={mediaUrl}
              controls
              playsinline
              muted
              light={previewImageSrc && isPreview ? PreviewImage : isPreview}
              playing={autoplay || isPreview ? true : false}
              playIcon={autoplay || isPreview ? PlayPreviewIcon : undefined}
              // This previewAriaLabel prop is not documented but it is in the React Player source code
              previewAriaLabel={isPreview ? previewAriaLabel : undefined}
              className="group"
            />
          )}
        </div>
        {caption && (
          <figcaption className="cc">
            <div className={styles.caption}>{caption}</div>
          </figcaption>
        )}
      </figure>
    </div>
  );
};
