"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"; // ✅ Fix this path
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Swift Styles Shop",
    category: "E-commerce",
    image: "/hero.jpeg",
    description: "A clean, mobile-first e-commerce platform with M-Pesa integration.",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    liveLink: "https://swift-styles.vercel.app",
  },
  {
    id: 2,
    title: "CarePlus Health",
    category: "HealthTech",
    image: "/hero.jpeg",
    description: "A hospital management system for streamlined patient care.",
    tech: ["Next.js", "Prisma", "Clerk"],
    liveLink: "https://careplus.vercel.app",
  },
  {
    id: 3,
    title: "Astra Web Redesign",
    category: "Corporate",
    image: "/hero.jpeg",
    description: "Modern redesign for our own agency website.",
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
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-astro-text dark:text-white">
            Our Work
          </h2>
          <Link
            href="/portfolio"
            className="text-astro-blue hover:underline font-medium"
          >
            View All Projects →
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <motion.div
                  className="cursor-pointer group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg bg-white dark:bg-[#111827] transition-transform duration-300 hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-astro-text dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-astro-muted dark:text-gray-400 mt-1">
                      {project.category}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <DialogTitle className="text-2xl font-bold mb-4">
                    {project.title}
                  </DialogTitle>

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full rounded-md mb-4 object-cover"
                  />

                  <p className="text-astro-muted dark:text-slate-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-astro-blue text-white text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveLink !== "#" && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-astro-blue underline hover:text-astro-accent transition"
                    >
                      Visit Live Project
                    </Link>
                  )}
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
