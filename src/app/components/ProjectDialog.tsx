"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type Project = {
  id: number | string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
};

export default function ProjectDialog({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  const descId = `project-dialog-desc-${project.id}`;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="max-w-2xl w-full bg-white dark:bg-[#111827] p-6 max-h-[90vh] overflow-y-auto rounded-xl relative"
        aria-describedby={descId}
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
          id={descId}
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
  );
}
