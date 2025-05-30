import { Text, Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./LocalFooter.styles";
import { EngLogoLockup } from "@/components/Logo/EngLogoLockup";
import { ActionLink, Button, Link } from "@/components/Cta";
import { SocialSharing } from "./Socials";
import * as links from "@/utilities/externalLinks";

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
        <Text
          size="small"
          leading="snug"
          mb="0"
          className="rs-mt-5 hidden xl:block"
        >
          This site created in partnership with{" "}
          <Link href={links.sws} linkType="dark-bg">
            Stanford Web Services
          </Link>
        </Text>
      </div>
      <FlexBox direction="col" className={styles.wrapper}>
        <FlexBox className={styles.linksWrapper}>
          <Text weight="normal" size="f1" mb="0">
            <ActionLink whiteText href="/stories">
              Centennial stories
            </ActionLink>
          </Text>
          <Text weight="normal" size="f1" mb="0">
            <ActionLink whiteText href="/timeline">
              Timeline
            </ActionLink>
          </Text>
        </FlexBox>
        <FlexBox className={styles.contentWrapper}>
          <section className={styles.column}>
            <Heading size={1} as="h2" mb="base">
              Share your Stanford Engineering memories
            </Heading>
            <Text size="small" mb="base">
              Mark this milestone by sharing one of your favorite memories of
              Stanford Engineering.
            </Text>
            <Button solid href={links.googleDocShare}>
              Share a memory
            </Button>
          </section>
          <section className={styles.column}>
            <Heading size={1} as="h2" mb="base">
              Support Stanford Engineering
            </Heading>
            <Text size="small" mb="base">
              Learn how your generosity can have transformational impact.
            </Text>
            <Button solid href={links.supportEngineering}>
              Support Engineering
            </Button>
          </section>
        </FlexBox>
        <div>
          <SocialSharing className="mt-0 flex xl:hidden" />
          <Text
            size="small"
            leading="snug"
            mb="0"
            className="rs-mt-2 block xl:hidden"
          >
            This site created in partnership with{" "}
            <Link href={links.sws} linkType="dark-bg">
              Stanford Web Services
            </Link>
          </Text>
        </div>
      </FlexBox>
    </FlexBox>
  </Container>
);
