"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.35);

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 py-18 sm:py-24"
    >
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-4">
          <p className="section-kicker">Capabilities</p>
          <SectionHeading>The stack behind the delivery.</SectionHeading>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Instead of listing everything as one long cloud, I grouped the tools
          around how I actually use them: building interfaces, shaping systems,
          and supporting enterprise solution work.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08 }}
            className="surface-card rounded-[2rem] p-7 sm:p-8"
          >
            <p className="section-kicker">{group.title}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
              {group.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-[var(--card-strong)] px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
