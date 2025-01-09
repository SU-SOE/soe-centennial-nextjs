import Link from "@/components/Cta/Link";
import { HtmlHTMLAttributes, MouseEventHandler } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { LinkProps } from "next/dist/client/link";
import { cnb } from "cnbuilder";

type Props = HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  href?: string;
  solid?: boolean;
  big?: boolean;
  isLight?: boolean;
  buttonElem?: boolean;
  onClick?: MouseEventHandler;
  prefetch?: LinkProps["prefetch"];
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
};

export const Button = ({
  href,
  big = false,
  solid = false,
  isLight = false,
  buttonElem = false,
  children,
  className,
  ...props
}: Props) => {
  const buttonStyle = cnb(
    "flex flex-row items-center justify-center sm:block font-dm-sans w-fit transition rounded-lg hocus:text-white hocus:bg-digital-red border-4 border-digital-red-light no-underline hocus:underline font-normal",
    {
      "text-digital-red-light": isLight && !solid,
      "text-white": !isLight,
      "text-white bg-digital-red-light hocus:bg-digital-red": solid && big,
      "text-white bg-digital-red": solid,
      "px-48 py-22": big,
      "rs-px-1 rs-py-0": !big,
    },
  );

  if (!href || buttonElem) {
    return (
      <button className={cnb(buttonStyle, className)} type="button" {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={cnb(buttonStyle, className?.replace("button", ""))}
      {...props}
    >
      {children}
      <ArrowRightIcon width={20} className="ml-2 inline-block" />
    </Link>
  );
};
