"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// 1. Define the project shape
interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
}

// 2. Project data
const projects: Project[] = [
  {
    title: "Swift Styles Shop",
    category: "E-commerce",
    image: "/porth.jpeg",
    description: "A sleek and modern e-commerce store integrated with M-Pesa.",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    liveLink: "https://swiftstyles.vercel.app",
  },
  {
    title: "CareCrest Nursing",
    category: "HealthTech",
    image: "/poerc.jpeg",
    description: "A nursing site simplifying appointments and homecare.",
    tech: ["Next.js", "Prisma", "Clerk"],
    liveLink: "https://carecrest.vercel.app",
  },
  {
    title: "Careplus Healthcare",
    category: "HealthTech",
    image: "/portch.jpeg",
    description: "Patient-focused system with emergency support features.",
    tech: ["Next.js", "Prisma", "Clerk"],
    liveLink: "https://careplus.vercel.app",
  },
  {
    title: "Astra Agency Redesign",
    category: "Corporate",
    image: "/porta.jpeg",
    description: "Modern redesign for our web agency to build clarity and trust.",
    tech: ["Next.js", "Figma", "ShadCN UI"],
    liveLink: "https://astradsign.vercel.app",
  },
  {
    title: "My Portfolio",
    category: "Personal",
    image: "/portw.jpeg",
    description: "My personal portfolio showcasing my dev skills and work.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    liveLink: "https://wess-portfolio.vercel.app",
  },
];

// 3. Card Component
function ProjectCard({ project }: { project: Project }) {
  const card = (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all bg-white dark:bg-zinc-900 cursor-pointer group">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={350}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {project.category}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.liveLink !== "#" && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
          >
            View Live →
          </a>
        )}
      </div>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{card}</div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-zinc-900 rounded-xl relative text-gray-900 dark:text-gray-100">
        <DialogClose asChild>
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            ✕
          </button>
        </DialogClose>

        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          className="w-full rounded-lg mb-4 object-cover"
        />

        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

        <p className="text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={`${tech}-modal-${i}`}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.liveLink !== "#" && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm dark:bg-blue-500 dark:hover:bg-blue-600">
              Visit Live Project
            </Button>
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}

// 4. Portfolio Page
export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Our Projects
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
