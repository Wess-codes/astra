"use client";

import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Define project shape
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
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
        <p className="text-sm mt-2">{project.description}</p>
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
      >
        <DialogClose asChild>
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
          >
            ✕
          </button>
        </DialogClose>

        <div className="space-y-4">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />

          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {project.category}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
