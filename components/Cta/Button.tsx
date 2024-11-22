import Link from "@/components/Cta/Link";
import { HtmlHTMLAttributes, MouseEventHandler } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { LinkProps } from "next/dist/client/link";
import { cnb } from "cnbuilder";

type Props = HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  href?: string;
  buttonElem?: boolean;
  onClick?: MouseEventHandler;
  prefetch?: LinkProps["prefetch"];
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
};

export const Button = ({
  href,
  buttonElem = false,
  children,
  className,
  ...props
}: Props) => {
  const standardClasses =
    "flex items-center w-fit btn btn--secondary transition text-digital-red hocus:text-white hocus:bg-digital-red border-2 border-digital-red hocus:border-white no-underline hocus:underline hocus:outline hocus:outline-3 hocus:outline-digital-red py-4 px-16 font-normal rounded-full";

  if (!href || buttonElem) {
    return (
      <button
        className={cnb(standardClasses, className)}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={cnb(standardClasses, className?.replace("button", ""))}
      {...props}
    >
      {children}
      <ArrowRightIcon width={20} className="ml-2 inline-block" />
    </Link>
  );
};
