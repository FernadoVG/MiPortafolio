"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { introStats } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.45);

  return (
    <section
      id="home"
      ref={ref}
      className="relative scroll-mt-28 pb-18 pt-10 sm:pb-24 sm:pt-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-7"
        >
          <p className="section-kicker">AI and automation / technical presales / startup leadership</p>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] px-4 py-2">
                based in Peru
              </span>
              <span className="rounded-full border border-[var(--line)] px-4 py-2">
                enterprise + startup perspective
              </span>
            </div>

            <h1 className="editorial-title max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              I connect
              <span className="text-[var(--accent)]"> AI, automation, </span>
              and
              <span className="text-[var(--olive)]"> product leadership</span>
              into work that creates real momentum.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              I&apos;m Fernando, a computer engineer currently working in technical
              presales, learning and applying automation and AI tools while building
              a strong point of view around foundational models, RAG systems, and
              user-centered solution design. I also lead teams, partnerships, events,
              and startup initiatives when the opportunity calls for it.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--background)]"
            >
              View selected work
              <BsArrowRight className="text-base" />
            </Link>

            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card-strong)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]"
              href="/CV Fernando.pdf"
              download
            >
              Download CV
              <HiDownload className="text-base" />
            </a>

            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card-strong)] text-xl text-[var(--foreground)]"
              href="https://www.linkedin.com/in/fernando-abel-vergara-guzman"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card-strong)] text-2xl text-[var(--foreground)]"
              href="https://github.com/FernadoVG"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {introStats.map((stat) => (
              <div
                key={stat.label}
                className="surface-card rounded-[1.75rem] p-5"
              >
                <p className="editorial-title text-3xl font-bold text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08 }}
          className="relative"
        >
          <div className="grain surface-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[21rem] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(47,79,69,0.2),rgba(217,93,57,0.08))]">
                <Image
                  src="/foto-fer.jpg"
                  alt="Fernando portrait"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-[1.6rem] border border-[var(--line)] bg-[rgba(255,255,255,0.35)] p-5 dark:bg-[rgba(255,255,255,0.03)]">
                <div>
                  <p className="section-kicker">Current focus</p>
                  <p className="mt-3 text-xl font-semibold leading-8">
                    AI adoption, automation use cases, enterprise demos, and startup
                    execution grounded in technical depth.
                  </p>
                </div>

                <div className="space-y-3 border-t border-[var(--line)] pt-4">
                  <div className="flex items-center justify-between gap-3 text-sm text-[var(--muted)]">
                    <span>Main angle</span>
                    <span className="font-semibold text-[var(--foreground)]">
                      Technical storytelling
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm text-[var(--muted)]">
                    <span>Preferred arena</span>
                    <span className="font-semibold text-[var(--foreground)]">
                      Enterprise innovation
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm text-[var(--muted)]">
                    <span>Also leading</span>
                    <span className="font-semibold text-[var(--foreground)]">
                      Events and startup teams
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
