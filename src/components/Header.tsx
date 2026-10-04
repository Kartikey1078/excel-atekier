"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/home";
import { setBodyScrollLock } from "@/lib/scroll-lock";
import { Logo } from "./Logo";

const navAnchors: Record<(typeof navItems)[number], string> = {
  Projects: "/#hero",
  Expertise: "/#expertise",
  People: "/#about",
  "About Us": "/#about",
  Research: "/#research",
  Sustainability: "/#approach",
  "Media Hub": "/#news",
  Contact: "/#contact",
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setBodyScrollLock(menuOpen);
    return () => setBodyScrollLock(false);
  }, [menuOpen]);

  const iconClass = "text-neutral-800 hover:bg-neutral-100";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-5 sm:pt-4 md:px-6 md:pt-5">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto mx-auto w-[90%] overflow-hidden rounded-2xl border border-neutral-200/90 bg-white text-neutral-900 shadow-md shadow-black/5 md:rounded-3xl"
      >
        <div className="flex h-14 items-center justify-between gap-4 px-3 sm:px-5 md:h-[4.5rem] md:px-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="min-w-0 shrink-0"
          >
            <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
              <Logo />
            </Link>
          </motion.div>

          <motion.button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className={`shrink-0 rounded-full p-2 transition-colors ${iconClass}`}
          >
            <span className="relative block h-4 w-5">
              <motion.span
                className="absolute left-0 block h-px w-5 bg-current"
                animate={menuOpen ? { top: 8, rotate: 45 } : { top: 2, rotate: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-[7px] block h-px w-5 bg-current"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 block h-px w-5 bg-current"
                animate={menuOpen ? { top: 8, rotate: -45 } : { top: 12, rotate: 0 }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(88vw,320px)] flex-col border-l border-neutral-200 bg-white text-neutral-900 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full p-2 text-neutral-800 hover:bg-neutral-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
              <nav aria-label="Main" className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.35 }}
                    >
                      <Link
                        href={navAnchors[item]}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between border-b border-neutral-100 py-4 text-sm font-medium uppercase tracking-[0.12em] text-neutral-800 transition-colors hover:text-black"
                      >
                        {item}
                        <span className="text-neutral-400 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
