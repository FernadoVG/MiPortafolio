import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const introStats = [
  { value: "700+", label: "registrations coordinated for a national virtual event during the pandemic" },
  { value: "10", label: "people led in public relations and event execution teams" },
  { value: "3", label: "startup and innovation programs where Ucarpool stood out or won recognition" },
] as const;

export const profilePillars = [
  {
    title: "AI and automation focus",
    items: [
      "Technical presales around automation, AI, integration, observability, and enterprise platforms",
      "Hands-on understanding of foundational models, RAG patterns, and how to turn them into usable business solutions",
      "Strong familiarity with Anthropic tooling, launches, and product evolution through continuous follow-up of their ecosystem",
    ],
  },
  {
    title: "Builder and researcher",
    items: [
      "Built a thesis project around a RAG assistant with an admin layer for BI analysis, sentiment signals, recurring topics, and end-user feedback",
      "Comfortable moving from prototype to product thinking through web apps, automation flows, and solution demos",
      "Able to connect technical implementation with analytics and decision-making instead of treating AI as a one-off feature",
    ],
  },
  {
    title: "Leadership and momentum",
    items: [
      "Led public relations initiatives and strategic alliances for Sedipro PUCP while coordinating a 10-person team",
      "Co-managed events with 80+ in-person attendees and helped run CONEGP 2021, a national virtual event with 700+ registered participants",
      "Currently leading Ucarpool, a university-focused carpooling startup recognized in PCI 2024, CAP 2024, and Jump Chile",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "AcrediPUCP",
    eyebrow: "Academic platform",
    description:
      "Frontend delivery for a university accreditation platform used to coordinate evidence, process visibility, and faculty workflows across PUCP.",
    impact:
      "Balanced institutional complexity with a practical interface that helped different faculties move through accreditation tasks with less friction.",
    role: "Frontend developer",
    stack: ["React", "Node.js", "MySQL", "Bootstrap", "AWS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Ucarpool",
    eyebrow: "Mobility startup",
    description:
      "Leading a university-focused carpooling startup, shaping the product vision, technical direction, partnerships, and team coordination around a real mobility pain point.",
    impact:
      "The project earned recognition in PCI 2024 and CAP 2024 at PUCP, and also reached the top 100 in Jump Chile, validating both the concept and the execution behind it.",
    role: "Founder, PM, and technical lead",
    stack: ["React Native", "Node.js", "Google APIs", "Product Strategy"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Qarta",
    eyebrow: "Commerce experience",
    description:
      "Designed and developed a digital commerce concept that connects people with local businesses through chat, rewards, and discovery.",
    impact:
      "Framed the product around engagement loops, lightweight communication, and repeat-purchase incentives instead of a traditional catalog-only experience.",
    role: "Product-minded full-stack builder",
    stack: ["React", "Next.js", "SQL", "Tailwind", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    description: "Core tools I use to move from idea to implementation.",
    items: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frontend",
    description: "Interfaces, interaction, and polished web delivery.",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend & data",
    description: "APIs, databases, and integration-oriented thinking.",
    items: ["Node.js", "GraphQL", "MongoDB", "MySQL", "PostgreSQL", "SingleStoreDB"],
  },
  {
    title: "Enterprise toolkit",
    description: "Platforms I use in consulting, demos, and solution design.",
    items: ["watsonx", "Instana", "Guardium", "API Connect", "webMethods", "Power BI", "Anthropic tools"],
  },
] as const;

export const experiencesData = [
  {
    title: "Pre-Sales Technical Consultant - IBM Specialist",
    location: "Ingram Micro, Peru",
    description:
      "Supporting partners and enterprise clients in IBM-related initiatives across AI, automation, security, integration, and observability. My role combines technical discovery, demos, workshops, and solution guidance while I continue deepening my focus on AI adoption and automation use cases.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 - Present",
  },
  {
    title: "Professional Intern - Data & AI Technician",
    location: "IBM, Global Teams",
    description:
      "Supported technical initiatives across Big Data, AI, cybersecurity, and cloud solutions. Built demos, workshops, and proof-of-concept assets for engineering and sales teams, strengthening the bridge between technical potential and commercial adoption.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Jul 2025",
  },
  {
    title: "Public Relations Coordinator - Sedipro PUCP",
    location: "Project management student organization",
    description:
      "Built alliances with external organizations, coordinated a 10-person public relations team, and helped execute events with strong attendance. One of the biggest milestones was helping manage CONEGP 2021, a national virtual event with more than 700 registered participants during the pandemic.",
    icon: React.createElement(CgWorkAlt),
    date: "University leadership stage",
  },
  {
    title: "Infrastructure & Operations Intern",
    location: "BBVA, Peru",
    description:
      "Worked on cloud and operations support, solved internal infrastructure requests, built reporting dashboards, and automated workflows that significantly reduced manual implementation time.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Jul 2023",
  },
  {
    title: "B.S. in Computer Engineering",
    location: "Pontifical Catholic University of Peru (PUCP)",
    description:
      "Built a foundation in software engineering, systems, and data while working on practical web, automation, and product-oriented academic projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduated 2024",
  },
] as const;
