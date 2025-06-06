import Link from "next/link";
import { HtmlHTMLAttributes, MouseEventHandler, forwardRef } from "react";
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

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  (
    {
      href,
      big = false,
      solid = false,
      isLight = false,
      buttonElem = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const buttonStyle = cnb(
      "group/button flex flex-row items-center justify-center sm:block font-dm-sans w-fit transition rounded-lg hocus:text-white hocus:bg-digital-red border-4 border-digital-red-xlight no-underline hocus:underline font-normal",
      {
        "text-digital-red-light": isLight && !solid,
        "text-white": !isLight,
        "text-white bg-digital-red hocus:bg-digital-red-xlight": solid,
        "px-48 py-22 type-0": big,
        "rs-px-1 rs-py-0 text-16 md:text-18": !big,
      },
    );

    Button.displayName = "Button";

    if (!href || buttonElem) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cnb(buttonStyle, className)}
          type="button"
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <Link href={href} className={cnb(buttonStyle, className)} {...props}>
        {children}
        <span className="whitespace-nowrap">
          &#65279;
          <ArrowRightIcon
            width={20}
            className="ml-2 inline-block transition ease-in-out duration-500 group-hover/button:translate-x-02em group-focus/button:translate-x-02em"
          />
        </span>
      </Link>
    );
  },
);
