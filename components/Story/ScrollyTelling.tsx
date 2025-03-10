import { AnimateInView } from "@/components/Animate";
import { Container } from "@/components/Container";
import { Heading, Text, type HeadingType } from "@/components/Typography";
import * as styles from "./ScrollyTelling.styles";
import Image from "next/image";

type ScrollytellingProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  content?: React.ReactNode;
  caption?: React.ReactNode;
  bgImageSrc: string;
  bgImageAlt?: string;
};

export const Scrollytelling = ({
  heading,
  headingLevel = "h2",
  subheading,
  caption,
  bgImageSrc,
  bgImageAlt,
  children,
  ...props
}: ScrollytellingProps) => {
  return (
    <section {...props} className="w-full">
      <Container
        width="full"
        bgColor="black"
        className="relative overflow-clip"
      >
        <div className="sticky top-0 h-screen w-full z-0">
          <Image
            src={bgImageSrc}
            alt={bgImageAlt || ""}
            width={2000}
            height={1200}
            className="absolute size-full object-cover top-0 left-0 z-0"
          />
          <div className="absolute size-full top-0 left-0 z-0 bg-fog-light/80" />
        </div>
        <div className="relative z-10 cc text-stone-dark rs-py-10">
          <div className="w-full mx-auto md:w-2/3 xl:w-1/2">
            {(heading || subheading) && (
              <AnimateInView
                animation="slideUp"
                delay={0.1}
                className="rs-mb-6"
              >
                {heading && (
                  <Heading
                    as={headingLevel || "h2"}
                    size={5}
                    color="stone-dark"
                    align="center"
                    className="relative z-10 mb-02em whitespace-pre-line"
                  >
                    {heading}
                  </Heading>
                )}
                {subheading && (
                  <Text
                    variant="subheading"
                    align="center"
                    className="sm:max-w-[40ch] mx-auto"
                  >
                    {subheading}
                  </Text>
                )}
              </AnimateInView>
            )}
            <div className="grid gap-y-30 md:gap-y-40 xl:gap-y-60">
              {children}
            </div>
          </div>
        </div>
      </Container>
      {caption && <Text variant="caption">{caption}</Text>}
    </section>
  );
};
