import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { cnb } from "cnbuilder";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  whiteText?: boolean;
};

export const ActionLink = ({
  children,
  className,
  whiteText,
  ...props
}: Props) => {
  return (
    <Link
      {...props}
      className={cnb(
        "group transition-all ease-in-out duration-1000 underline underline-offset-[5px] cursor-pointer decoration-4",
        whiteText
          ? "text-white hocus:text-digital-red-xlight decoration-digital-red-xlight"
          : "text-stone-dark hocus:decoration-stone-dark decoration-digital-red-light",
        className,
      )}
    >
      {children}
      <span className="whitespace-nowrap">
        &#65279;
        <ArrowRightIcon
          width={25}
          className={cnb(
            "transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-x-02em inline",
            whiteText ? "text-digital-red-xlight" : "text-digital-red-light ",
          )}
        />
      </span>
    </Link>
  );
};
