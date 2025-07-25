import { HtmlHTMLAttributes } from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LinkProps } from "next/dist/client/link";
import { cnb } from "cnbuilder";

type Props = Omit<
  HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
  "href"
> &
  Omit<LinkProps, "href"> & {
    href: string;
    linkType?:
      | "timeline"
      | "story"
      | "story-invert"
      | "poster"
      | "poster-invert"
      | "heading"
      | "dark-bg"
      | "default";
  };

const NextLink = ({ href, children, className, linkType, ...props }: Props) => {
  let linkStyles =
    "transition-all ease-in-out duration-1000 underline text-stone-dark hocus:text-digital-red hocus:decoration-digital-red";

  switch (linkType) {
    case "timeline":
      linkStyles =
        "transition-all ease-in-out duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light hocus:decoration-stone-dark group-hocus:decoration-stone-dark cursor-pointer decoration-4";
      break;
    case "story":
      linkStyles =
        "transition-all ease-in-out duration-1000 font-normal text-stone-dark underline decoration-transparent underline-offset-[5px] hocus:decoration-stone-dark hocus:cursor-pointer group-hocus:decoration-stone-dark group-hocus:cursor-pointer decoration-2";
      break;
    case "story-invert":
      linkStyles =
        "transition-all ease-in-out duration-1000 font-normal text-white underline decoration-transparent underline-offset-[5px] hocus:text-white hocus:decoration-white hocus:cursor-pointer group-hocus:decoration-white group-hocus:cursor-pointer decoration-2";
      break;
    case "poster":
      linkStyles =
        "transition-all ease-in-out duration-1000 text-black hocus:text-black font-normal underline decoration-transparent underline-offset-[5px] hocus:decoration-black hocus:cursor-pointer group-hocus:decoration-black group-hocus:cursor-pointer decoration-4";
      break;
    case "poster-invert":
      linkStyles =
        "transition-all ease-in-out duration-1000 text-white hocus:text-white font-normal underline decoration-transparent underline-offset-[5px] hocus:decoration-white hocus:cursor-pointer group-hocus:decoration-white group-hocus:cursor-pointer decoration-4";
      break;
    case "heading":
      linkStyles =
        "transition-all ease-in-out duration-1000 text-digital-red-light hocus:text-stone-dark underline underline-offset-[5px] decoration-digital-red-light hocus:decoration-stone-dark group-hocus:decoration-stone-dark cursor-pointer decoration-4";
      break;
    case "dark-bg":
      linkStyles =
        "transition-all ease-in-out duration-500 underline underline-offset-2 decoration-2 text-white decoration-digital-red-light hocus:text-black hocus:bg-white/80 hocus:decoration-black";
      break;
    default:
      break;
  }

  return (
    <Link {...props} href={href} className={cnb(linkStyles, className)}>
      {children}
      {href?.startsWith("mailto") && (
        <span className="whitespace-nowrap">
          &#65279;
          <EnvelopeIcon width={20} className="ml-4 inline-block" />
        </span>
      )}
    </Link>
  );
};

export { NextLink as Link };
