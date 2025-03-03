import { FlexBox } from "@/components/FlexBox";
import { Twitter } from "./Twitter";
import { FacebookF } from "./FacebookF";
import { LinkedinIn } from "./LinkedinIn";
import { SocialButton } from "./SocialButton";
import { YouTube } from "./YouTube";
import { Instagram } from "./Instagram";
import { cnb } from "cnbuilder";

type SocialSharingProps = React.HTMLAttributes<HTMLDivElement> & {};

export const SocialSharing = ({ className }: SocialSharingProps) => {
  return (
    <FlexBox
      as="ul"
      direction="row"
      className={cnb(
        "gap-20 list-unstyled p-0 rs-mt-5 *:mb-0 *:w-fit",
        className,
      )}
    >
      <li>
        <SocialButton
          aria-label="Centennial on Facebook"
          href="https://www.facebook.com/stanford.engineering/"
        >
          <FacebookF aria-hidden height="30" />
        </SocialButton>
      </li>
      <li>
        <SocialButton
          aria-label="Centennial on X (formerly Twitter)"
          href="https://x.com/StanfordEng"
        >
          <Twitter aria-hidden height="30" />
        </SocialButton>
      </li>
      <li>
        <SocialButton
          aria-label="Centennial on LinkedIn"
          href="https://www.linkedin.com/school/stanford-university-school-of-engineering/"
        >
          <LinkedinIn aria-hidden height="30" />
        </SocialButton>
      </li>
      <li>
        <SocialButton
          aria-label="Centennial on YouTube"
          href="https://www.youtube.com/@stanfordengineering"
        >
          <YouTube aria-hidden height="30" />
        </SocialButton>
      </li>
      <li>
        <SocialButton
          aria-label="Centennial on Instagram"
          href="https://www.instagram.com/stanfordeng/"
        >
          <Instagram aria-hidden height="30" />
        </SocialButton>
      </li>
    </FlexBox>
  );
};
