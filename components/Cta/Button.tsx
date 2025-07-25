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
  hideArrow?: boolean;
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
      disabled = false,
      solid = false,
      isLight = false,
      buttonElem = false,
      hideArrow = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const buttonStyle = cnb(
      // Base styles
      "group/button flex flex-row items-center justify-center sm:block font-dm-sans w-fit transition rounded-lg border-4 border-digital-red-xlight no-underline font-normal",
      {
        // Visual styles
        "text-digital-red-light": isLight && !solid,
        "text-white": !isLight,
        "text-white bg-digital-red": solid,
        "px-48 py-22 type-0": big,
        "rs-px-1 rs-py-0 text-16 md:text-18": !big,
        // Interactive styles
        "cursor-pointer hocus:text-white hocus:bg-digital-red hocus:underline":
          !disabled,
        "hocus:bg-digital-red-xlight": solid && !disabled,
        "cursor-not-allowed pointer-events-none": disabled,
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
        {!hideArrow && (
          <span className="whitespace-nowrap">
            &#65279;
            <ArrowRightIcon
              width={20}
              className="ml-2 inline-block transition ease-in-out duration-500 group-hover/button:translate-x-02em group-focus/button:translate-x-02em"
            />
          </span>
        )}
      </Link>
    );
  },
);
