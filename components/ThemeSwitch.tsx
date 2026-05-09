"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--foreground)] shadow-[0_12px_30px_rgba(32,21,10,0.12)] backdrop-blur-xl hover:scale-110 active:scale-95"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
