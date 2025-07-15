"use client";

import { Code, Paintbrush, RefreshCw, Search, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const values = [
  {
    title: "Premium Design Standards",
    description: "We craft world-class websites so your brand can confidently compete on a global level.",
  },
  {
    title: "Client-First Approach",
    description: "Tailor-made solutions with your taste and needs in mind — you're involved every step of the way.",
  },
  {
    title: "Timely Delivery",
    description: "We value your time and business — deadlines are met with quality, every time.",
  },
  {
    title: "End-to-End Support",
    description: "From discovery to deployment — and beyond — we’re with you at every stage.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "We learn your goals, audience, and brand tone.",
  },
  {
    title: "Design & Content",
    description: "We create mockups, copy, and a visual direction.",
  },
  {
    title: "Development",
    description: "We build a clean, fast, scalable site across devices.",
  },
  {
    title: "Launch & Support",
    description: "We deploy and stay available for future updates.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative bg-[#f9fafb] dark:bg-[#0d1117] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We help forward-thinking brands craft digital experiences that inspire trust, action, and impact.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#e6f0fa] dark:bg-[#111827] border border-blue-100 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <service.icon className="w-9 h-9 text-[#0070ba] dark:text-astro-accent" />
            </div>
            <h3 className="text-xl font-semibold text-[#003d66] dark:text-white text-center mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-[#1a2e3b] dark:text-gray-400 text-center">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Our Process */}
      <div className="max-w-6xl mx-auto mb-28 px-2">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Our Process
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:flex-row md:items-center md:flex-1">
              <motion.div
                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm text-center w-full hover:scale-[1.03] transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-sm font-semibold text-astro-blue dark:text-astro-accent mb-1">
                  Step {index + 1}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>

              {/* Arrows */}
              {index < processSteps.length - 1 && (
                <>
                  <ArrowRight className="hidden md:block mx-4 w-6 h-6 text-[#FFD700]" />
                  <ArrowDown className="block md:hidden my-4 w-5 h-5 text-[#FFD700]" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mb-28">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
          Why Choose Us
        </h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Ready to elevate your brand?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
          Let’s turn your ideas into a stunning digital experience.
        </p>
        <Link
            href="/work-with-us"
            className="block py-2 font-semibold underline underline-offset-4"
          >
            Work With Us
          </Link>
      </div>
    </section>
  );
}
