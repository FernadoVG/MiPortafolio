import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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

export const experiencesData = [
  {
    title: "Pre-Sales Technical Consultant – IBM Specialist",
    location: "Ingram Micro · Peru",
    description:
      "Technical presales consultant for IBM solutions, advising more than 15 partners and enterprise clients, including major banks and government organizations. Designed and delivered over 25 demos, proofs of concept, and workshops focused on AI, automation, security, integration, and observability.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 – Present",
  },
  {
    title: "B.S. in Computer Engineering",
    location: "Pontifical Catholic University of Peru (PUCP)",
    description:
      "Bachelor’s degree in Computer Engineering with a strong focus on software development, data, and enterprise technologies. Participated in academic and practical projects involving web development, automation, and system design.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Professional Intern – Data & AI Technician",
    location: "IBM · Global Teams",
    description:
      "Provided technical support for IBM Big Data, AI, cybersecurity, and cloud solutions. Developed demos, proofs of concept, and technical workshops for engineering and sales teams, achieving an estimated 70% sales conversion rate.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 – Jul 2025",
  },
  {
    title: "Infrastructure & Operations Intern",
    location: "BBVA · Peru",
    description:
      "Supported cloud-based infrastructure and operations by resolving IT tickets for internal users while maintaining SLA compliance above 90%. Built dashboards and integrated internal databases to improve reporting processes. Automated workflows that reduced implementation time by approximately 80%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 – Jul 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "AcrediPUCP",
    description:
      "I worked as a frontend developer on this system project for 6 months. Online platform for the accreditation process of the different faculties and specialties of PUCP.",
    tags: ["React", "Node.js", "MySQL", "Bootstrap", "AWS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Ucarpool",
    description:
      "I led the technical architecture, development strategy, and public relations, acting as PM for a team of two developers using React Native, Node.js, and Google services APIs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Qarta",
    description:
      "Qarta connects people and businesses: discover products, chat with stores, shop easily, and earn achievements and discounts with every purchase.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "C++", category: "languages" },

  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "GraphQL", category: "backend" },

  { name: "MongoDB", category: "databases" },
  { name: "MySQL", category: "databases" },
  { name: "PostgreSQL", category: "databases" },
  { name: "SinglestoreDB", category: "databases" },

  { name: "Git", category: "tooling" },
  { name: "Excel", category: "tooling" },
  { name: "PowerBI", category: "tooling" },
  { name: "SAP", category: "tooling" },

  { name: "watsonx", category: "ibm" },
  { name: "Instana", category: "ibm" },
  { name: "Guardium", category: "ibm" },
  { name: "Api Connect", category: "ibm" },
  { name: "webMethods", category: "ibm" },
] as const;