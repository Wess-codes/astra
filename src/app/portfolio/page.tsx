"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/app/components/ProjectCard";
import { Project } from "@/app/components/ProjectDialog";

const projects: Project[] = [
  {
    id: 1,
    title: "Swift Styles Shop",
    category: "E-commerce",
    image: "/porth.jpeg",
    description: "A sleek and modern e-commerce store integrated with M-Pesa.",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    liveLink: "https://swift-styles.vercel.app",
  },
  {
    id: 2,
    title: "CareCrest Nursing",
    category: "HealthTech",
    image: "/poerc.jpeg",
    description: "Healthcare system for nurses to streamline patient care and emergencies.",
    tech: ["Next.js", "Prisma", "Clerk"],
    liveLink: "https://care-crest.vercel.app",
  },
  {
    id: 3,
    title: "Astra Web Redesign",
    category: "Corporate",
    image: "/porta.jpeg",
    description: "Modern redesign for our web agency site to elevate clarity and trust.",
    tech: ["Next.js", "Figma", "ShadCN UI"],
    liveLink: "https://astra.vercel.app",
  },
  {
  id: 4,
  title: "Careplus Healthcare",
  category: "HealthTech",
  image: "/portch.jpeg",
  description: "Patient-focused system with emergency support features.",
  tech: ["Next.js", "Prisma", "Clerk"],
  liveLink: "https://careplus.vercel.app",
},
  
  {
    id: 5,
    title: "My Portfolio",
    category: "Personal",
    image: "/portw.jpeg",
    description: "My personal portfolio showcasing my dev skills and work.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    liveLink: "https://wess-portfolio.vercel.app",
  },
];

export default function PortfolioPage() {
  return (
    <section className="bg-white dark:bg-[#0b0f19] py-20 px-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            A showcase of our projects, designed to deliver quality and innovation.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
