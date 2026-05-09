"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { profilePillars } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.45);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-28 py-18 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mb-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-5">
          <p className="section-kicker">About</p>
          <SectionHeading>Part consultant. Part builder.</SectionHeading>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>
            My profile blends technical depth with leadership and execution. As a
            computer engineer, I currently work in technical presales, focusing on
            automation and AI tools while helping translate complex technologies
            into demos, workshops, and solutions that make sense for real clients.
          </p>

          <p>
            That technical side is only part of the story. I&apos;ve also led
            university teams, built strategic alliances, coordinated large-scale
            events, and now drive a startup for university mobility. I enjoy being
            the person who can understand the system, explain the opportunity, and
            mobilize people around it. Experiences in Chile and Finland also gave
            me a closer look at how innovation teams work in different contexts.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {profilePillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08 }}
            className="surface-card rounded-[2rem] p-7 sm:p-8"
          >
            <p className="section-kicker">{pillar.title}</p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
              {pillar.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
