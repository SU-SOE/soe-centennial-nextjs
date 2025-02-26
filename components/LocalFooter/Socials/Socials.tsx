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
        "gap-10 list-unstyled p-0 rs-mt-5 *:mb-0 *:w-fit",
        className,
      )}
    >
      <li>
        <SocialButton aria-label="Centennial on Facebook" href="">
          <FacebookF aria-hidden width="20" />
        </SocialButton>
      </li>
      <li>
        <SocialButton aria-label="Centennial on X (formerly Twitter)" href="">
          <Twitter aria-hidden width="26" />
        </SocialButton>
      </li>
      <li>
        <SocialButton aria-label="Centennial on LinkedIn" href="">
          <LinkedinIn aria-hidden width="25" />
        </SocialButton>
      </li>
      <li>
        <SocialButton aria-label="Centennial on YouTube" href="">
          <YouTube aria-hidden width="25" />
        </SocialButton>
      </li>
      <li>
        <SocialButton aria-label="Centennial on Instagram" href="">
          <Instagram aria-hidden width="25" />
        </SocialButton>
      </li>
    </FlexBox>
  );
};
