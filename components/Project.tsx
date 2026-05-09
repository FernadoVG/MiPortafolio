"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  eyebrow,
  description,
  impact,
  role,
  stack,
  imageUrl,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
  const isEven = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      style={{ y, opacity }}
      className="surface-card overflow-hidden rounded-[2rem]"
    >
      <div
        className={`grid gap-0 lg:grid-cols-2 ${
          isEven ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(180deg,rgba(47,79,69,0.18),rgba(217,93,57,0.08))]">
          <Image
            src={imageUrl}
            alt={`${title} project preview`}
            fill
            className="object-cover transition duration-500 hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
          <div className="space-y-4">
            <p className="section-kicker">{eyebrow}</p>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="editorial-title text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                {title}
              </h3>
              <span className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {role}
              </span>
            </div>
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.34)] p-5 dark:bg-[rgba(255,255,255,0.03)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
              Product angle
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {impact}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
