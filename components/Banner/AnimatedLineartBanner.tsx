"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Container } from "../Container";
import {
  HorizontalLineart,
  HorizontalLineartProps,
} from "../images/horizontal-lineart";

type AnimatedLineartBannerProps = HTMLAttributes<HTMLDivElement> &
  Omit<HorizontalLineartProps, "className"> & {
    children: ReactNode;
  };

export const AnimatedLineartBanner = ({
  children,
  className,
  stroke,
  lineartType,
  ...props
}: AnimatedLineartBannerProps) => {
  return (
    <Container {...props} width="full" className={className}>
      <Container width="site">{children}</Container>
      <HorizontalLineart
        stroke={stroke}
        lineartType={lineartType}
        className="ml-auto pl-38 md:pl-126 2xl:pl-133 max-w-[160rem] 2xl:max-w-[200rem] 3xl:max-w-[250rem] 3xl:pr-76"
      />
    </Container>
  );
};
