"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type Project = {
  id: number;
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
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl bg-white dark:bg-[#111827] rounded-xl shadow-lg max-h-[90vh] overflow-y-auto p-0">
        {/* Header with Close Button */}
        <DialogHeader className="relative p-4 border-b border-gray-200 dark:border-gray-700">
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            {project.category}
          </DialogDescription>
          {/* Close Button */}
         
        </DialogHeader>

        {/* Image */}
        <div className="w-full">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full max-h-72 object-cover rounded-t-lg"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end">
            <Button asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
