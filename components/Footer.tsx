import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-10 pt-4 text-[var(--muted)] sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="editorial-title text-lg font-bold text-[var(--foreground)]">
            Fernando Vergara
          </p>
          <p>AI, automation, consulting, and digital product execution.</p>
        </div>
        <p className="max-w-md text-sm leading-6">
          Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, React
          Email, and a redesigned visual system inspired by editorial portfolio
          storytelling.
        </p>
      </div>
    </footer>
  );
}
