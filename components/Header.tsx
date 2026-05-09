"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6">
      <motion.div
        initial={{ y: -36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex w-full max-w-5xl items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,250,242,0.7)] px-3 py-3 shadow-[0_12px_40px_rgba(32,21,10,0.08)] backdrop-blur-xl dark:bg-[rgba(23,25,22,0.82)] sm:gap-4"
      >
        <Link
          href="#home"
          className="editorial-title shrink-0 px-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--foreground)]"
        >
          Fernando
        </Link>

        <nav className="min-w-0 flex-1 overflow-x-auto overflow-y-hidden no-scrollbar">
          <ul className="flex min-w-max items-center justify-end gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--nav-muted)] sm:min-w-0 sm:flex-wrap sm:justify-end sm:text-sm sm:tracking-[0.18em]">
            {links.map((link) => {
              const isActive = activeSection === link.name;

              return (
                <li key={link.hash} className="shrink-0">
                  <Link
                    href={link.hash}
                    className={`block rounded-full px-3 py-2 ${
                      isActive
                        ? "bg-[var(--foreground)] text-[var(--background)]"
                        : "hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
                    }`}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
