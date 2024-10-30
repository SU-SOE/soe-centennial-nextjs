import { HTMLAttributes } from "react";
import { Container } from "../Container";
import { Heading } from "../Typography";
import * as styles from "./PageTitle.styles";

type PageTitleProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  bigText: string;
  bgColor?: "fog-light" | "red-gradient";
};

export const PageTitle = ({
  heading,
  bigText,
  bgColor = "fog-light",
  ...props
}: PageTitleProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="site"
    py={9}
    className={styles.root}
  >
    <Heading leading="none" className={styles.heading}>
      <span className="font-semibold type-1">{heading}</span>
      <span className="font-bold type-8">{bigText}</span>
    </Heading>
  </Container>
);
