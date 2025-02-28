import { cnb } from "cnbuilder";

type SocialSharingProps = React.HTMLAttributes<HTMLButtonElement> &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, "href"> & {
    href?: string;
    children?: React.ReactNode;
  };

export const SocialButton = ({
  href,
  children,
  className,
  ...props
}: SocialSharingProps) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          className={cnb(
            "w-40 h-40 md:w-44 md:h-44 text-white hocus-visible:text-digital-red-xlight hocus:text-digital-red-xlight transition-colors",
            className,
          )}
          {...props}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={cnb(
            "w-40 h-40 md:w-44 md:h-44 text-white hocus-visible:text-digital-red-xlight hocus:text-digital-red-xlight transition-colors",
            className,
          )}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
