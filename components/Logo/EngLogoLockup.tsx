import React from "react";
import { cnb } from "cnbuilder";
import Link from "next/link";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./Logo.styles";
import StanfordEngLogo from "./StanfordEngLogo";

/**
 * Stanford Department Branding Component.
 */
type EngLogoLockupProps = {
  isLink?: boolean;
  color?: "default" | "white";
  className?: string;
};

export const EngLogoLockup = ({
  isLink,
  color = "default",
  className,
  ...rest
}: EngLogoLockupProps) => {
  // Partials
  const LockupContent = (
    <FlexBox className={styles.contentWrapper}>
      <StanfordEngLogo color={color} />
      <span className="sr-only">Stanford Engineering 1925-2025</span>
    </FlexBox>
  );

  if (isLink) {
    return (
      <Link className={cnb(styles.root, className)} href="/" {...rest}>
        {LockupContent}
      </Link>
    );
  }

  return (
    <div className={cnb(styles.root, className)} {...rest}>
      {LockupContent}
    </div>
  );
};
