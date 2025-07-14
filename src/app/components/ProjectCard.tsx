"use client";

import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Define the project shape
interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
}

// Props interface
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
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
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

      <DialogContent className="max-w-2xl w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4">View Live</Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
