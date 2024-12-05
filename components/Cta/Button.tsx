import Link from "@/components/Cta/Link";
import { HtmlHTMLAttributes, MouseEventHandler } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { LinkProps } from "next/dist/client/link";
import { cnb } from "cnbuilder";

type Props = HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  href?: string;
  isLight?: boolean;
  buttonElem?: boolean;
  onClick?: MouseEventHandler;
  prefetch?: LinkProps["prefetch"];
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
};

export const Button = ({
  href,
  isLight = false,
  buttonElem = false,
  children,
  className,
  ...props
}: Props) => {
  const buttonStyle = cnb(
    "flex flex-row items-center justify-center sm:block font-dm-sans w-fit transition hocus:text-white hocus:bg-digital-red-light border-4 rounded border-digital-red-light hocus:border-white no-underline hocus:underline hocus:outline hocus:outline-3 hocus:outline-digital-red-light rs-p-1 sm:rs-py-1 sm:rs-px-3 font-normal ",
    {
      "text-digital-red-light ": isLight,
      "text-white ": !isLight,
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
