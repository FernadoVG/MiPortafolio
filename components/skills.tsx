"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const categoryStyles: Record<string, string> = {
        languages: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-500/10 dark:text-blue-100",
        frontend: "bg-purple-50 text-purple-900 border-purple-200 dark:bg-purple-500/10 dark:text-purple-100",
        backend: "bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-100",
        databases: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-500/10 dark:text-amber-100",
        tooling: "bg-slate-50 text-slate-900 border-slate-200 dark:bg-slate-500/10 dark:text-slate-100",
        ibm: "bg-red-50 text-red-900 border-red-200 dark:bg-red-500/10 dark:text-red-100",
    };
    return (
        <section
        id="skills"
        ref={ref}
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
        <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {skillsData.map((skill, index) => (
                    <motion.li
                    key={skill.name}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    className={[
                        "border rounded-xl px-5 py-3 borderBlack hover:scale-110 active:scale-105 transition",
                        "dark:bg-white/10 dark:text-white/80", // si quieres mantener tu base
                        categoryStyles[skill.category] ?? "bg-white text-gray-800",
                    ].join(" ")}
                    >
                    {skill.name}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}