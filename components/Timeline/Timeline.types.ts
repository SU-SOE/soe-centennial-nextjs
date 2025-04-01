import { HTMLAttributes } from "react";
import * as styles from "./Timeline.styles";
import { AnimateInViewProps } from "@/components/Animate";
import { type MarginType, type PaddingType } from "@/utilities/datasource";

// Timeline Card Element
export type TimelineCardElementType =
  | "div"
  | "section"
  | "article"
  | "main"
  | "span";

export type WidthType = keyof typeof styles.widths;

export type BgColorType = keyof typeof styles.bgColors | "";

// Timeline Image
export type SizeType = keyof typeof styles.size;

//  Timeline Card Props
export type TimelineCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<AnimateInViewProps, "children"> & {
    as?: TimelineCardElementType;
    heading: string;
    year: string;
    body?: string;
    anchor: string;
    uuid?: string;
    image: string;
    alt?: string;
    bgColor?: BgColorType;
    align?: "right" | "left";
    width?: WidthType;
    pt?: PaddingType;
    pb?: PaddingType;
    py?: PaddingType;
    mt?: MarginType;
    mb?: MarginType;
    my?: MarginType;
  };
