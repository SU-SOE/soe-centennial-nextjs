import Link from "@/components/Cta/Link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { cnb } from "cnbuilder";
import { HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const ActionLink = ({ children, className, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={cnb(
        "relative flex w-fit flex-row items-center no-underline hocus:underline",
        className?.replace("link--action", ""),
      )}
    >
      {children}
      <ArrowRightIcon width={20} className="ml-2 inline-block shrink-0" />
    </Link>
  );
};
