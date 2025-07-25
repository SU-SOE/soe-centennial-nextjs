import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import * as styles from "./Timeline.styles";
import { BackToTop } from "../BackToTop";
import { cnb } from "cnbuilder";

// Constants
const decades = [
  "1925",
  "1935",
  "1945",
  "1955",
  "1965",
  "1975",
  "1985",
  "1995",
  "2005",
  "2015",
  "2025",
];

const breakpointConfig = {
  desktop: { firstRowCount: 5, gap: "gap-40" },
  tablet: { firstRowCount: 4, gap: "gap-10" },
  mobile: { firstRowCount: 2, gap: "gap-8" },
};

const observerConfig = {
  section: {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0.1,
  },
  banner: {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0,
  },
};

const useActiveSection = (decades: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerConfig.section);

    decades.forEach((decade) => {
      const element = document.getElementById(decade);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [decades]);

  return activeSection;
};

const useNavVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "TimelineContribBanner") {
          setIsVisible(!entry.isIntersecting);
        }
      });
    }, observerConfig.banner);

    const bannerElement = document.getElementById("TimelineContribBanner");
    if (bannerElement) observer.observe(bannerElement);

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

type DecadeButtonProps = {
  decade: string;
  isActive: boolean;
  onClick: (decade: string) => void;
};

const DecadeButton = ({ decade, isActive, onClick }: DecadeButtonProps) => (
  <li>
    <button
      onClick={() => onClick(decade)}
      aria-label={`Jump to ${decade} section`}
      aria-current={isActive ? "location" : undefined}
      className={styles.navButton(isActive ? decade : "", decade)}
    >
      {decade}
    </button>
  </li>
);

type ExpandButtonProps = {
  isExpanded: boolean;
  onToggle: () => void;
};

const ExpandButton = ({ isExpanded, onToggle }: ExpandButtonProps) => (
  <li>
    <button
      onClick={onToggle}
      className={styles.expandButton}
      aria-expanded={isExpanded}
      aria-controls="additional-decades"
    >
      {isExpanded ? "- Less decades" : "+ More decades"}
    </button>
  </li>
);

type DecadeRowProps = {
  decades: string[];
  activeSection: string;
  gap: string;
  onDecadeClick: (decade: string) => void;
  showExpandButton?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
};

const DecadeRow = ({
  decades,
  activeSection,
  gap,
  onDecadeClick,
  showExpandButton = false,
  isExpanded = false,
  onToggleExpand,
}: DecadeRowProps) => (
  <ul className={cnb("flex flex-row list-none justify-center p-0", gap)}>
    {decades.map((decade, index) => (
      <DecadeButton
        key={index}
        decade={decade}
        isActive={activeSection === decade}
        onClick={onDecadeClick}
      />
    ))}
    {showExpandButton && onToggleExpand && (
      <ExpandButton isExpanded={isExpanded} onToggle={onToggleExpand} />
    )}
  </ul>
);

type ResponsiveNavigationProps = {
  decades: string[];
  activeSection: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onDecadeClick: (decade: string) => void;
  breakpoint: keyof typeof breakpointConfig;
  className: string;
};

const ResponsiveNavigation = ({
  decades,
  activeSection,
  isExpanded,
  onToggleExpand,
  onDecadeClick,
  breakpoint,
  className,
}: ResponsiveNavigationProps) => {
  const config = breakpointConfig[breakpoint];
  const firstRow = decades.slice(0, config.firstRowCount);
  const secondRow = decades.slice(config.firstRowCount);

  return (
    <div className={cnb("pt-[2rem] pb-[1.5rem] md:px-20 md:py-34", className)}>
      {/* First Row - Always visible */}
      <DecadeRow
        decades={firstRow}
        activeSection={activeSection}
        gap={config.gap}
        onDecadeClick={onDecadeClick}
        showExpandButton={true}
        isExpanded={isExpanded}
        onToggleExpand={onToggleExpand}
      />

      {/* Second Row - Expandable */}
      <motion.div
        id="additional-decades"
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3, ease: "easeInOut" },
          opacity: { duration: 0.2, delay: isExpanded ? 0.1 : 0 },
        }}
        className="overflow-hidden pt-16"
      >
        <ul
          className={cnb(
            "flex flex-row flex-wrap list-none justify-center p-0",
            config.gap,
          )}
        >
          {secondRow.map((decade, index) => (
            <DecadeButton
              key={index}
              decade={decade}
              isActive={activeSection === decade}
              onClick={onDecadeClick}
            />
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export const TimelineNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const activeSection = useActiveSection(decades);
  const isVisible = useNavVisibility();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleDecadeClick = (decade: string) => {
    const element = document.getElementById(decade);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <>
      <BackToTop
        className={cnb("z-[501] 2xl:bottom-[13rem]", {
          "bottom-[25rem] md:bottom-[23rem] lg:bottom-[24rem]": isExpanded,
          "bottom-[12rem] md:bottom-[16rem] lg:bottom-[17rem]": !isExpanded,
        })}
      />

      <motion.nav
        className="fixed bottom-0 left-0 right-0 w-full h-fit shadow-lg rounded-lg z-[500] bg-cen-blue-xlight"
        aria-label="Navigate by Decade"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-5 bg-digital-red-light origin-left z-10"
          style={{ scaleX }}
        />

        {/* Large Navigation (2XL) */}
        <ul className="hidden 2xl:flex flex-row flex-wrap list-none gap-50 justify-center px-20 pt-30 pb-26 h-fit">
          {decades.map((decade, index) => (
            <DecadeButton
              key={index}
              decade={decade}
              isActive={activeSection === decade}
              onClick={handleDecadeClick}
            />
          ))}
        </ul>

        {/* Desktop Navigation (LG) */}
        <ResponsiveNavigation
          decades={decades}
          activeSection={activeSection}
          isExpanded={isExpanded}
          onToggleExpand={toggleExpanded}
          onDecadeClick={handleDecadeClick}
          breakpoint="desktop"
          className="hidden lg:block 2xl:hidden"
        />

        {/* Tablet Navigation (MD) */}
        <ResponsiveNavigation
          decades={decades}
          activeSection={activeSection}
          isExpanded={isExpanded}
          onToggleExpand={toggleExpanded}
          onDecadeClick={handleDecadeClick}
          breakpoint="tablet"
          className="hidden md:block lg:hidden"
        />

        {/* Mobile Navigation */}
        <ResponsiveNavigation
          decades={decades}
          activeSection={activeSection}
          isExpanded={isExpanded}
          onToggleExpand={toggleExpanded}
          onDecadeClick={handleDecadeClick}
          breakpoint="mobile"
          className="md:hidden"
        />
      </motion.nav>
    </>
  );
};
