"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            >
            <SectionHeading>About me</SectionHeading>

            <p className="mb-3">
                I’m a <span className="font-medium">Computer Engineer</span> with experience
                working in <span className="font-medium">AI, automation, and cloud-based
                enterprise solutions</span>. I have worked in global technology companies
                like <span className="font-medium">IBM</span> and{" "}
                <span className="font-medium">Ingram Micro</span>, supporting presales,
                solution design, and real-world implementations for large clients, including
                banks and government organizations.
            </p>

            <p className="mb-3">
                My work focuses on bridging <span className="italic">technical depth</span>{" "}
                with <span className="italic">business value</span>. I’ve designed and
                delivered demos, proofs of concept, and workshops around{" "}
                <span className="underline">
                AI, automation, integration, security, and observability
                </span>{" "}
                solutions. I enjoy understanding complex problems and translating them into
                scalable and practical systems.
            </p>

            <p>
                Beyond development, I have experience in technical consulting, product
                architecture, and startup environments as a{" "}
                <span className="font-medium">Co-founder and CTO</span>. I’m driven by
                continuous learning and building impactful technology.
            </p>
        </motion.section>
    );
}