/**
 * Quote component to display a styled quote with optional teaser, body, and source.
 *
 * @param {string} [teaser] - Optional teaser text to display above the main quote body.
 * @param {string} [body] - Optional main quote body text.
 * @param {string} source - Source of the quote.
 * @param {AnimationType} [animation="slideUp"] - Animation type for the quote appearance.
 * @param {number} [delay] - Optional delay for the animation.
 * @param {string} [className] - Additional class names for styling.
 * @param {QuoteMarkColorType} [quoteColor="stone"] - Color of the quote mark.
 * @param {types.QuoteWidthType} [width="default"] - Width of the quote container.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes for the container.
 *
 * @returns {JSX.Element} The rendered Quote component.
 */
import { AnimateInView, type AnimationType } from "@/components/Animate";
import { Container } from "@/components/Container";
import { Text } from "@/components/Typography";
import * as styles from "./Quote.styles";
import * as types from "./Quote.types";
import { QuoteMark, QuoteMarkColorType } from "../images/quote-mark";
import { cnb } from "cnbuilder";

export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  teaser?: string | React.ReactNode;
  body?: string | React.ReactNode;
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
    <AnimateInView animation={animation} delay={delay}>
      <Container
        {...props}
        width="full"
        className={cnb("text-stone-dark", styles.widths[width], className)}
      >
        <QuoteMark className="rs-mb-0" fill={quoteColor} />
        <blockquote>
          {teaser && (
            <Text size="quote-lg" font="dm-sans" className={styles.teaser}>
              {teaser}
            </Text>
          )}
          {body && (
            <Text size="quote-md" font="dm-sans" className={styles.body}>
              {body}&quot;
            </Text>
          )}
        </blockquote>
        {source && (
          <Text size="base" font="dm-mono" className={styles.source}>
            {source}
          </Text>
        )}
      </Container>
    </AnimateInView>
  );
};
