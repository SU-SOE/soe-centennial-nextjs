"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { cnb } from "cnbuilder";
import ReactPlayer from "react-player/lazy";
import { FlexBox } from "@/components/FlexBox";
import Image from "next/image.js";
import { PlayIcon } from "@heroicons/react/16/solid";
import * as styles from "./EmbedMediaHero.styles";

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

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
        <div className={styles.mediaWrapper}>
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
