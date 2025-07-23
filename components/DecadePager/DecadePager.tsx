"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { internalLinks } from "@/utilities/internalLinks";
import { Button } from "../Cta";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { cnb } from "cnbuilder";

type DecadePagerProps = {
  transparent?: boolean;
};

export const DecadePager = ({ transparent }: DecadePagerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentDecade = useMemo(() => {
    const urlToDecade: Record<string, number> = {};

    Object.entries(internalLinks).forEach(([key, url]) => {
      const decadeMatch = key.match(/^decade(\d+)$/);
      if (decadeMatch) {
        urlToDecade[url] = parseInt(decadeMatch[1], 10);
      }
    });

    return urlToDecade[pathname] || 1;
  }, [pathname]);

  const getDecadeHref = (decade: number): string | null => {
    const key = `decade${decade}` as keyof typeof internalLinks;
    return internalLinks[key] ?? null;
  };

  const minDecade = 1;
  const maxDecade = 10;

  const hasPrev = currentDecade > minDecade;
  const hasNext = currentDecade < maxDecade;

  const prevHref = hasPrev ? getDecadeHref(currentDecade - 1) : null;
  const nextHref = hasNext ? getDecadeHref(currentDecade + 1) : null;

  const handleNavigate = (href: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(href);
    }, 500); // matches animation duration
  };

  return (
    <nav
      className={cnb("relative", { "rs-mb-5": !transparent })}
      aria-label="Decade navigation"
    >
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div
        className={cnb("w-full flex ", {
          "justify-between px-50": transparent,
          "cc justify-around rs-mt-1": !transparent,
        })}
      >
        {prevHref ? (
          <Button
            solid
            onClick={() => handleNavigate(prevHref)}
            aria-label={`Go to previous decade: Decade ${currentDecade - 1}`}
            className={cnb("group", {
              "p-0 m-0 bg-transparent border-none hocus:bg-transparent":
                transparent,
            })}
          >
            <span className="whitespace-nowrap">
              &#65279;
              <ArrowLeftIcon
                width={20}
                className="transition ease-in-out duration-1000 mr-03em group-hover:-translate-x-02em group-focus:-translate-x-02em inline"
              />
            </span>
            Decade {currentDecade - 1}
          </Button>
        ) : (
          <div />
        )}

        {nextHref ? (
          <Button
            solid
            onClick={() => handleNavigate(nextHref)}
            aria-label={`Go to next decade: Decade ${currentDecade + 1}`}
            className={cnb("group", {
              "p-0 m-0 bg-transparent border-none hocus:bg-transparent":
                transparent,
            })}
          >
            Decade {currentDecade + 1}
            <span className="whitespace-nowrap">
              &#65279;
              <ArrowRightIcon
                width={20}
                className="transition ease-in-out duration-1000 ml-03em group-hover:translate-x-02em group-focus:translate-x-02em inline"
              />
            </span>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};
