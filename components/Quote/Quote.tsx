import { AnimateInView, type AnimationType } from "@/components/Animate";
import { Container } from "@/components/Container";
import { Text } from "@/components/Typography";
import * as styles from "./Quote.styles";
import * as types from "./Quote.types";
import { QuoteMark, QuoteMarkColorType } from "../images/quote-mark";
import { cnb } from "cnbuilder";

export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  teaser?: string;
  body: string;
  source: string;
  animation?: AnimationType;
  delay?: number;
  quoteColor?: QuoteMarkColorType;
  width?: types.QuoteWidthType;
};

export const Quote = ({
  teaser,
  body,
  source,
  animation = "slideUp",
  delay,
  className,
  quoteColor = "stone",
  width = "default",
  ...props
}: QuoteProps) => {
  return (
    <AnimateInView animation={animation} delay={delay} className="w-fit">
      <Container
        {...props}
        width="full"
        className={cnb("text-stone-dark", styles.widths[width], className)}
      >
        <blockquote>
          <QuoteMark className="rs-mb-0" fill={quoteColor} />
          {teaser && (
            <Text size="quote-lg" font="dm-sans" className={styles.teaser}>
              {teaser}
            </Text>
          )}
          {body && (
            <Text variant="overview" font="dm-sans" className={styles.body}>
              {body}&quot;
            </Text>
          )}
          {source && (
            <Text size="base" font="dm-mono" className={styles.source}>
              {source}
            </Text>
          )}
        </blockquote>
      </Container>
    </AnimateInView>
  );
};
