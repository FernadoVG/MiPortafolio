"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 py-18 sm:py-24">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-4">
          <p className="section-kicker">Experience</p>
          <SectionHeading>A path shaped by enterprise technology.</SectionHeading>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          My career has grown through consulting, support, demos, operations,
          and product-oriented execution. Each step strengthened the way I
          connect technical detail with real user and business needs.
        </p>
      </div>

      <div className="space-y-4">
        {experiencesData.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.date}`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
            className="surface-card grid gap-5 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[13rem_1fr]"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card-strong)] text-xl text-[var(--accent)]">
                {item.icon}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.date}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                {item.location}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
