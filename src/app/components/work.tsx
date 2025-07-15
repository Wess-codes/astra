"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
};

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

              <DialogContent
                className="max-w-2xl w-full bg-white dark:bg-[#111827] p-6 max-h-[90vh] overflow-y-auto rounded-xl relative"
                aria-describedby={`dialog-description-${project.id}`}
              >
                <DialogClose asChild>
                  <button
                    aria-label="Close"
                    className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition"
                  >
                    ✕
                  </button>
                </DialogClose>

                <DialogTitle className="text-2xl font-bold mb-2 text-astro-text dark:text-white">
                  {project.title}
                </DialogTitle>

                <DialogDescription
                  id={`dialog-description-${project.id}`}
                  className="text-sm mb-4 leading-relaxed text-gray-700 dark:text-slate-300"
                >
                  {project.description}
                </DialogDescription>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover mb-4"
                />

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="text-xs bg-astro-blue/10 text-astro-blue dark:bg-astro-accent/10 dark:text-astro-accent px-2 py-1 rounded-full"
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
                  >
                    <Button className="bg-astro-blue hover:bg-blue-700 text-white px-4 py-2 text-sm rounded mt-2 transition">
                      Visit Live Project →
                    </Button>
                  </Link>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
