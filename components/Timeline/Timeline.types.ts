import * as styles from "./Timeline.styles";

// Timeline Card
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
