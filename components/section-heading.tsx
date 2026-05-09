import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="editorial-title text-4xl font-bold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
      {children}
    </h2>
  );
}
