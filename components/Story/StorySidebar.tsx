/**
 * StorySidebar component to be used within the TwoCol layout.
 *
 * @param {ReactNode} children - The content to be displayed inside the sidebar.
 * @param {string} [className] - Optional additional class names to style the component.
 * @param {boolean} [hasLineArt] - Flag to determine if line art should be displayed in the sidebar.
 * @param {boolean} [isShort] - Flag to determine if the line art should be short version.
 * @param {object} props - Additional props to be passed to the component.
 *
 * @example
 * ```tsx
 * import { TwoCol } from "@/components/layouts/TwoCol";
 * import { StorySidebar } from "@/components/Story/StorySidebar";
 *
 * const MyComponent = () => (
 *   <TwoCol>
 *     <OneCol>
 *       <p>Main content here</p>
 *     </OneCol>
 *     <StorySidebar hasLineArt isShort>
 *       <p>Your content here</p>
 *     </StorySidebar>
 *   </TwoCol>
 * );
 * ```
 */
import React, { ReactNode } from "react";
import SidebarLineart from "@/components/images/sidebar-lineart";
import { cnb } from "cnbuilder";

interface StorySidebarProps {
  children: ReactNode;
  className?: string;
  hasLineArt?: boolean;
  lineArtType?: "default" | "medium" | "short";
}

export const StorySidebar = ({
  children,
  className,
  hasLineArt,
  lineArtType = "default",
  ...props
}: StorySidebarProps) => {
  return (
    <aside
      {...props}
      className={cnb(
        "@container w-full lg:max-w-[32rem] xl:max-w-400",
        {
          " relative pt-100 sm:pt-150 lg:pt-220 pb-20 md:pb-45 rs-px-3  h-fit":
            hasLineArt,
        },
        className,
      )}
    >
      {hasLineArt && (
        <SidebarLineart
          className="absolute top-0 left-0 rs-p-0 z-10"
          lineArtType={lineArtType}
        />
      )}
      <div className="w-full relative z-50 flex flex-col gap-20 justify-center items-center ">
        {children}
      </div>
    </aside>
  );
};
