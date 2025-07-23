import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import * as styles from "./Timeline.styles";
import { BackToTop } from "../BackToTop";

export const TimelineNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Array of decades to create anchor links
  const decades = useMemo(
    () => [
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
    ],
    [],
  );

  // Split decades for medium display
  const firstRowDecades = useMemo(() => decades.slice(0, 4), [decades]); // 1925-1955
  const secondRowDecades = useMemo(() => decades.slice(4), [decades]); // 1965-2025

  const mobileFirstRow = useMemo(() => decades.slice(0, 2), [decades]); // 1925-1935
  const mobileSecondRow = useMemo(() => decades.slice(2), [decades]); // 1945-2025

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all decade sections
    decades.forEach((decade) => {
      const element = document.getElementById(decade);
      if (element) {
        observer.observe(element);
      }
    });

    // Observer for hiding nav when reaching TimelineContribBanner Id
    const hideNavObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "TimelineContribBanner") {
            setIsVisible(!entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
      },
    );

    // Observe the TimelineContribBanner
    const bannerElement = document.getElementById("TimelineContribBanner");
    if (bannerElement) {
      hideNavObserver.observe(bannerElement);
    }

    return () => {
      observer.disconnect();
      hideNavObserver.disconnect();
    };
  }, [decades]);

  const handleClick = (decade: string) => {
    const element = document.getElementById(decade);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BackToTop className="bottom-200 md:bottom-150 z-[501]" />
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

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row flex-wrap list-none gap-50 justify-center px-20 pt-30 pb-26 h-fit">
          {decades.map((decade, key) => (
            <li key={key}>
              <button
                onClick={() => handleClick(decade)}
                aria-label={`Jump to ${decade} section`}
                aria-current={activeSection === decade ? "location" : undefined}
                className={styles.navButton(activeSection, decade)}
              >
                {decade}
              </button>
            </li>
          ))}
        </ul>

        {/* Tablet Navigation */}
        <div className="hidden md:block lg:hidden px-20 py-34">
          {/* First Row - Always visible */}
          <ul className="flex flex-row list-none gap-8 justify-center mb-16">
            {firstRowDecades.map((decade, key) => (
              <li key={key}>
                <button
                  onClick={() => handleClick(decade)}
                  aria-current={
                    activeSection === decade ? "location" : undefined
                  }
                  className={styles.navButton(activeSection, decade)}
                >
                  {decade}
                </button>
              </li>
            ))}
            {/* Expand/Collapse Button */}
            <li>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={styles.expandButton}
                aria-expanded={isExpanded}
                aria-controls="additional-decades"
              >
                {isExpanded ? "- Less decades" : "+ More decades"}
              </button>
            </li>
          </ul>

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
            className="overflow-hidden"
          >
            <ul className="flex flex-row list-none gap-8 justify-center">
              {secondRowDecades.map((decade, key) => (
                <li key={key}>
                  <button
                    onClick={() => handleClick(decade)}
                    aria-current={
                      activeSection === decade ? "location" : undefined
                    }
                    className={styles.navButton(activeSection, decade)}
                  >
                    {decade}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-20 py-34">
          {/* First Row - Always visible */}
          <ul className="flex flex-row list-none gap-8 justify-center mb-16">
            {mobileFirstRow.map((decade, key) => (
              <li key={key}>
                <button
                  onClick={() => handleClick(decade)}
                  aria-current={
                    activeSection === decade ? "location" : undefined
                  }
                  className={styles.navButton(activeSection, decade)}
                >
                  {decade}
                </button>
              </li>
            ))}
            {/* Expand/Collapse Button */}
            <li>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={styles.expandButton}
                aria-expanded={isExpanded}
                aria-controls="additional-decades"
              >
                {isExpanded ? "- Less decades" : "+ More decades"}
              </button>
            </li>
          </ul>

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
            className="overflow-hidden"
          >
            <ul className="flex flex-row flex-wrap list-none gap-8 justify-center">
              {mobileSecondRow.map((decade, key) => (
                <li key={key}>
                  <button
                    onClick={() => handleClick(decade)}
                    aria-current={
                      activeSection === decade ? "location" : undefined
                    }
                    className={styles.navButton(activeSection, decade)}
                  >
                    {decade}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};
