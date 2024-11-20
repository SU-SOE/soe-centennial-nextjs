import { AnimateInView, type AnimationType } from "@/components/Animate";
import { Container } from "@/components/Container";
import { Text } from "@/components/Typography";
import * as styles from "./Quote.styles";
import { cnb } from "cnbuilder";

export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  teaser?: string;
  body?: string;
  source?: string;
  addDarkOverlay?: boolean;
  isLargeTeaser?: boolean;
  isLargeBody?: boolean;
  isMinimal?: boolean;
  quoteOnRight?: boolean;
  animation?: AnimationType;
  delay?: number;
};

export const Quote = ({
  teaser,
  body,
  addDarkOverlay,
  isMinimal,
  isLargeTeaser = false,
  isLargeBody,
  source,
  animation = "slideUp",
  quoteOnRight = false,
  delay,
  children,
  className,
  ...props
}: QuoteProps) => {
  return (
    <AnimateInView animation={animation} delay={delay}>
      <Container
        width="full"
        py={addDarkOverlay && !isMinimal ? 5 : undefined}
        className={cnb(styles.root(quoteOnRight), className)}
        {...props}
      >
        <blockquote>
          {teaser && (
            <>
              <Text font="serif" className={styles.quoteMark(isLargeTeaser)}>
                {quoteOnRight ? "”" : "“"}
              </Text>
              <Text
                size={isLargeTeaser ? "f5" : "f4"}
                leading="none"
                font="dm-sans"
                className={styles.teaser}
              >
                {teaser}
              </Text>
            </>
          )}
          {body && (
            <Text
              variant={isLargeBody ? undefined : "big"}
              leading="display"
              size={isLargeBody ? 2 : undefined}
              font="dm-sans"
              className={styles.body}
            >
              {body}&quot;
            </Text>
          )}
          {source && (
            <Text variant="card" font="dm-mono" className={styles.source}>
              {source}
            </Text>
          )}
        </blockquote>
      </Container>
    </AnimateInView>
  );
};
