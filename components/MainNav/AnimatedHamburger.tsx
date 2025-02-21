import * as styles from "./MainNav.styles";

export type AnimatedHamburgerProps = Omit<
  React.SVGProps<SVGSVGElement>,
  "ref"
> & {
  icon: styles.IconType;
  // Title for the SVG for accessibility
  title?: string;
};

export const AnimatedHamburger = ({
  icon,
  title,
  className,
  ...props
}: AnimatedHamburgerProps) => {
  const Icon = styles.iconMap[icon];

  return (
    <Icon
      title={title}
      // If a title for the SVG is provided, unhide the SVG from screen readers
      aria-hidden={!title}
      className={className}
      {...props}
    />
  );
};
