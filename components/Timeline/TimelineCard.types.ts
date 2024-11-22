import * as styles from "./TimelineCard.styles";

export type TimelineCardElementType =
  | "div"
  | "section"
  | "article"
  | "main"
  | "span";

export type WidthType = keyof typeof styles.widths;

export type BgColorType = keyof typeof styles.bgColors | "";
