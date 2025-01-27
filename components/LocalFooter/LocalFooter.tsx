import { Text, Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./LocalFooter.styles";
import { EngLogoLockup } from "@/components/Logo/EngLogoLockup";
import { Button } from "@/components/Cta";

export const LocalFooter = () => (
  <Container as="nav" bgColor="red" py={10} aria-label="Local footer menu">
    <FlexBox className={styles.flexWrapper}>
      <EngLogoLockup color="white" isLink className={styles.logo} />
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
  </Container>
);
