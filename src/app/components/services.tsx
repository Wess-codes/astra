"use client";

import { Code, Paintbrush, RefreshCw, Search } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description: "Custom themes and visuals tailored to your brand’s identity and purpose.",
    icon: Paintbrush,
  },
  {
    title: "Web Development",
    description: "Blazing-fast websites built with clean, scalable, modern architecture.",
    icon: Code,
  },
  {
    title: "Redesign Services",
    description: "Transform outdated sites into sleek, conversion-driven experiences.",
    icon: RefreshCw,
  },
  {
    title: "SEO & Optimization",
    description: "Grow your traffic, improve speed, and climb search rankings effortlessly.",
    icon: Search,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 bg-[#f9fafb] dark:bg-[#0d1117] py-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-br from-astro-accent/20 via-blue-300/10 to-transparent dark:from-astro-accent/10 dark:via-astro-blue/10 blur-3xl opacity-30 z-0 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <motion.p
          className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We help forward-thinking brands craft digital experiences that inspire trust, action, and impact.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex items-start bg-[#e6f0fa] dark:bg-[#111827] border border-blue-100 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <div className="flex-shrink-0 bg-[#d1e9ff] dark:bg-[#1f2937] p-3 rounded-lg mr-4">
              <service.icon className="w-6 h-6 text-[#005ea6] dark:text-astro-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#003d66] dark:text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-[#1a2e3b] dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
