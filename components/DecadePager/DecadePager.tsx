"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { internalLinks } from "@/utilities/internalLinks";
import { Button } from "../Cta";

type DecadePagerProps = {
  currentDecade: number;
};

export const DecadePager = ({ currentDecade }: DecadePagerProps) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    <div className="relative">
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

      <div className="cc flex justify-around rs-mt-1">
        {prevHref ? (
          <Button solid onClick={() => handleNavigate(prevHref)}>
            Decade {currentDecade - 1}
          </Button>
        ) : (
          <div />
        )}

        {nextHref ? (
          <Button solid onClick={() => handleNavigate(nextHref)}>
            Decade {currentDecade + 1} →
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
