import { Text, Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./LocalFooter.styles";
import { EngLogoLockup } from "@/components/Logo/EngLogoLockup";
import { Button } from "@/components/Cta";

export const LocalFooterMvp = () => (
  <Container
    as="nav"
    bgColor="red"
    pt={7}
    pb={8}
    aria-label="Local footer menu"
  >
    <FlexBox className={styles.flexWrapper}>
      <EngLogoLockup color="white" isLink className={styles.logo} />

      <div className="w-full">
        <FlexBox className={styles.contentWrapper}>
          <section className={styles.column}>
            <Heading size={2} as="h2" mb="base">
              Contribute your stories
            </Heading>
            <Text mb={2}>
              Lorem ipsum dolar sit amet vestibulum periment ium dismaret
            </Text>
            <Button solid href="/">
              Submit your story
            </Button>
          </section>
          <section className={styles.column}>
            <Heading size={2} as="h2" mb="base">
              Make a gift
            </Heading>
            <Text mb={2}>
              Lorem ipsum dolar sit amet vestibulum periment ium dismaret
            </Text>
            <Button href="/">Ways to give</Button>
          </section>
        </FlexBox>
      </div>
    </FlexBox>
  </Container>
);
