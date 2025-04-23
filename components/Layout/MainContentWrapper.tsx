import React from "react";

interface MainContentWrapperProps {
  children: React.ReactNode;
}

export const MainContentWrapper: React.FC<MainContentWrapperProps> = ({
  children,
}) => {
  return (
    <main id="main-content">
      <article>{children}</article>
    </main>
  );
};
