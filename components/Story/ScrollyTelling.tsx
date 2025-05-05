/**
 * Scrollytelling component renders a full-width section with a background image
 * and optional heading, subheading, caption, and children content. The background
 * image remains fixed while the content scrolls over it, creating a "scrollytelling" effect.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.heading - The main heading text.
 * @param {string} [props.headingLevel="h2"] - The HTML heading level for the main heading.
 * @param {string} props.subheading - The subheading text.
 * @param {string} props.caption - The caption text displayed below the section.
 * @param {string} props.bgImageSrc - The source URL of the background image.
 * @param {string} props.bgImageAlt - The alt text for the background image.
 * @param {React.ReactNode} props.children - The content to be displayed within the section.
 * @param {boolean} props.isBlur - Whether to apply a blur effect to the background image.
 * @param {Object} props - Additional props to be passed to the section element.
 *
 * @returns {JSX.Element} The rendered Scrollytelling component.
 *
 * @example
 * <Scrollytelling
 *   heading="Main Heading"
 *   subheading="This is a subheading"
 *   caption="This is a caption"
 *   bgImageSrc="/path/to/image.jpg"
 *   bgImageAlt="Description of the image"
 *   isBlur={true}
 * >
 *   <p>Your content here</p>
 * </Scrollytelling>
 */
import { AnimateInView } from "@/components/Animate";
import { Container } from "@/components/Container";
import { Heading, Text, type HeadingType } from "@/components/Typography";
import { cnb } from "cnbuilder";
import Image from "next/image";

type ScrollytellingProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  content?: React.ReactNode;
  caption?: React.ReactNode;
  isBlur?: boolean;
  bgImageSrc: string;
  bgImageAlt?: string;
};

export const Scrollytelling = ({
  heading,
  headingLevel = "h2",
  subheading,
  children,
  className,
  caption,
  isBlur,
  bgImageSrc,
  bgImageAlt,
  ...props
}: ScrollytellingProps) => {
  return (
    <section {...props} className={cnb("w-full rs-mb-6", className)}>
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
          <div
            className={cnb(
              "absolute size-full top-0 left-0 z-0 bg-fog-light/80",
              isBlur && " backdrop-blur-sm",
            )}
          />
        </div>
        <div className="relative z-10 cc text-stone-dark rs-py-10 -mt-[90vh]">
          <div className="w-full">
            {(heading || subheading) && (
              <AnimateInView
                animation="slideUp"
                delay={0.1}
                className="rs-mb-6 mx-auto md:w-2/3 xl:w-1/2"
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
