"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
}

interface ProjectCardProps {
  project: Project;
  withDialog?: boolean;
}

export default function ProjectCard({ project, withDialog = false }: ProjectCardProps) {
  const idSafeTitle = project.title
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  const card = (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white dark:bg-zinc-900">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (!withDialog) return card;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">{card}</div>
      </DialogTrigger>

      <DialogContent
        className="max-w-xl w-full bg-white dark:bg-zinc-900 rounded-xl p-6 overflow-y-auto max-h-[90vh] transition-all"
        aria-describedby={`project-desc-${idSafeTitle}`}
      >
        <DialogClose asChild>
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
          >
            ✕
          </button>
        </DialogClose>

        <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </DialogTitle>

        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />

        <DialogDescription
          id={`project-desc-${idSafeTitle}`}
          className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
        >
          {project.description}
        </DialogDescription>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={`${tech}-modal-${i}`}
              className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
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
            className="inline-block"
          >
            <Button className="bg-astro-blue hover:bg-blue-700 text-white px-4 py-2 text-sm rounded transition">
              Visit Live Site →
            </Button>
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}
