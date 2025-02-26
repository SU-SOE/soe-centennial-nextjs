import { Text, Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./LocalFooter.styles";
import { EngLogoLockup } from "@/components/Logo/EngLogoLockup";
import { ActionLink, Button } from "@/components/Cta";
import { SocialSharing } from "./Socials";

export const LocalFooter = () => (
  <Container
    as="nav"
    bgColor="red"
    pt={7}
    pb={8}
    aria-label="Local footer menu"
    className="border-b border-digital-red"
  >
    <FlexBox className={styles.flexWrapper}>
      <div className={styles.logo}>
        <EngLogoLockup color="white-red" isLink />
        <Text
          font="dm-sans"
          size="small"
          className="mt-10 md:mt-18 max-w-200 md:max-w-full"
          mb="0"
          leading="snug"
        >
          Transformative breakthroughs, boundless horizons
        </Text>
        <SocialSharing className="hidden xl:flex" />
      </div>
      <FlexBox direction="col" className={styles.wrapper}>
        <FlexBox className={styles.linksWrapper}>
          <Text weight="normal" size="f2" mb="0">
            <ActionLink whiteText href="/stories">
              Impact stories
            </ActionLink>
          </Text>
          <Text weight="normal" size="f2" mb="0">
            <ActionLink whiteText href="/timeline">
              Timeline
            </ActionLink>
          </Text>
          <Text weight="normal" size="f2" mb="0">
            <ActionLink whiteText href="/">
              Centennial book online
            </ActionLink>
          </Text>
        </FlexBox>
        <FlexBox className={styles.contentWrapper}>
          <section className={styles.column}>
            <Heading size={2} as="h2" mb="base">
              Contribute your stories
            </Heading>
            <Text mb={2}>
              Lorem ipsum dolar sit amet vestibulum periment ium dismaret
            </Text>
            <Button
              solid
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
            >
              Submit your story
            </Button>
          </section>
          <section className={styles.column}>
            <Heading size={2} as="h2" mb="base">
              Support Stanford Engineering
            </Heading>
            <Text mb={2}>
              Learn how your generosity can have transformational impact.
            </Text>
            <Button href="https://engineering.stanford.edu/get-involved/support-engineering">
              Support Engineering
            </Button>
          </section>
        </FlexBox>
        <SocialSharing className="flex xl:hidden" />
      </FlexBox>
    </FlexBox>
  </Container>
);
