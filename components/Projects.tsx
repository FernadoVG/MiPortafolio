"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 py-18 sm:py-24">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-4">
          <p className="section-kicker">Selected work</p>
          <SectionHeading>Projects with product thinking behind them.</SectionHeading>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Inspired by case-study style portfolios, this section highlights not
          just what I built, but the role I played, the product angle I pushed,
          and the type of problem each project was trying to solve.
        </p>
      </div>

      <div className="space-y-5">
        {projectsData.map((project, index) => (
          <Project key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
