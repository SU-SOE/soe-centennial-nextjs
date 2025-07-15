import { useState, useEffect, useMemo } from "react";

export const TimelineNav = () => {
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% from top
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

    return () => observer.disconnect();
  }, [decades]);

  const handleClick = (decade: string) => {
    const element = document.getElementById(decade);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 w-full h-fit border-t border-white shadow-lg rounded-lg z-[500] bg-cen-blue-xlight"
      aria-label="Navigate by Decade"
    >
      <ul className="flex flex-row flex-wrap list-none gap-27 justify-center px-20 py-34 h-fit">
        {decades.map((decade, key) => (
          <>
            <li key={key}>
              <button
                onClick={() => handleClick(decade)}
                className={`
                relative transition-colors duration-200 hover:text-digital-red-light hocus:underline font-dm-mono
                ${activeSection === decade ? "text-digital-red-light underline" : "text-stone-dark"}
              `}
              >
                {decade}
              </button>
            </li>
            {key < decades.length - 1 && (
              <li className="hidden lg:block" aria-hidden="true">
                &#8226;
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};
