import { HtmlHTMLAttributes } from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button, ActionLink } from "@/components/Cta";
import { LinkProps } from "next/dist/client/link";

type Props = HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> &
  LinkProps & {
    href: string;
  };

const NextLink = ({ href, children, ...props }: Props) => {
  if (props.className?.includes("link--action")) {
    return (
      <ActionLink href={href} {...props}>
        {children}
      </ActionLink>
    );
  }

  if (props.className?.includes("button")) {
    return (
      <Button href={href} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <Link href={href} className={props.className} {...props}>
      {children}
      {href.startsWith("mailto") && (
        <EnvelopeIcon width={20} className="ml-4 inline-block" />
      )}
    </Link>
  );
};

export default NextLink as typeof Link;
