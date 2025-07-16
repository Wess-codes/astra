"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectDialog, { Project } from "./ProjectDialog";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <ProjectDialog project={project}>
      <motion.div
        className="cursor-pointer group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg bg-white dark:bg-[#111827] transition-transform duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          priority={index === 0}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {project.category}
          </p>
        </div>
      </motion.div>
    </ProjectDialog>
  );
}
