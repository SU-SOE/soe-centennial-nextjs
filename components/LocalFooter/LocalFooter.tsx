import { Text, Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./LocalFooter.styles";
import { EngLogoLockup } from "@/components/Logo/EngLogoLockup";
import { ActionLink, Button } from "@/components/Cta";

export const LocalFooter = () => (
  <Container as="nav" bgColor="red" py={10} aria-label="Local footer menu">
    <FlexBox className={styles.flexWrapper}>
      <EngLogoLockup color="white" isLink className={styles.logo} />
      <FlexBox direction="col" className="gap-95 w-full max-w-[110rem]">
        <FlexBox className={styles.contentWrapper}>
          <Text size={2}>
            <ActionLink whiteText className="font-normal" href="/stories">
              Impact stories
            </ActionLink>
          </Text>
          <Text size={2}>
            <ActionLink whiteText className="font-normal" href="/timeline">
              Timeline
            </ActionLink>
          </Text>
          <Text size={2}>
            <ActionLink whiteText className="font-normal" href="/">
              Centennial book online
            </ActionLink>
          </Text>
        </FlexBox>
        <FlexBox className={styles.contentWrapper}>
          <section className={styles.column}>
            <Heading size={2} as="h2">
              Contribute your stories
            </Heading>
            <Text>
              Lorem ipsum dolar sit amet vestibulum periment ium dismaret
            </Text>
            <Button solid href="/">
              Submit your story
            </Button>
          </section>
          <section className={styles.column}>
            <Heading size={2} as="h2">
              Make a gift
            </Heading>
            <Text>
              Lorem ipsum dolar sit amet vestibulum periment ium dismaret
            </Text>
            <Button href="/">Ways to give</Button>
          </section>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  </Container>
);
