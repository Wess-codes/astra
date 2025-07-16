"use client";

import Link from "next/link";
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
    liveLink: "https://carecrest.vercel.app",
  },
  {
    id: 3,
    title: "Astra Web Redesign",
    category: "Corporate",
    image: "/porta.jpeg",
    description: "Modern redesign for our web agency site to elevate clarity and trust.",
    tech: ["Next.js", "Figma", "ShadCN UI"],
    liveLink: "#",
  },
];

export default function Work() {
  return (
    <motion.section
      id="work"
      className="bg-warm-white dark:bg-[#0b0f19] py-20 px-4 scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="flex justify-between items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our Work
          </h2>
          <Link
            href="/portfolio"
            className="text-astro-brand hover:underline font-medium"
          >
            View All Projects →
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
