"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { internalLinks } from "@/utilities/internalLinks";

type DecadePagerProps = {
  currentDecade: number;
};

export default function DecadePager({ currentDecade }: DecadePagerProps) {
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

      <div className="flex justify-between mt-10">
        {prevHref ? (
          <button
            onClick={() => handleNavigate(prevHref)}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            ← Decade {currentDecade - 1}
          </button>
        ) : (
          <div />
        )}

        {nextHref ? (
          <button
            onClick={() => handleNavigate(nextHref)}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Decade {currentDecade + 1} →
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
