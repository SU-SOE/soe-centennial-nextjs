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
      <div className={styles.logo}>
        <EngLogoLockup color="white-red" isLink />
        <Text font="dm-mono" size="small" className="rs-mt-0" leading="tight">
          A century of discovery, innovation, and impact
        </Text>
      </div>
      <div className="w-full max-w-900">
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
