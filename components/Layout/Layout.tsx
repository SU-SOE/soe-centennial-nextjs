import React from "react";
import Head from "next/head";
import { Masthead, MastheadProps } from "@/components/Masthead";

type LayoutProps = MastheadProps & {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  isLight,
  isOverlap = false,
  bgColor,
}) => {
  return (
    <div>
      <Head>
        <Masthead isLight={isLight} isOverlap={isOverlap} bgColor={bgColor} />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
