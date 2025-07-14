"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Astra Design was a game-changer. They translated our vision into a beautiful, functional website that truly represents our brand.",
      name: "Linda Mwangi",
      role: "Founder, GreenStep Foundation",
    },
    {
      quote:
        "They delivered everything ahead of schedule and exceeded expectations. We've seen a boost in engagement since launching our new site.",
      name: "James Otieno",
      role: "CTO, J-Tech Innovations",
    },
    {
      quote:
        "Professional, creative, and reliable. Astra Design helped us tell our story in a way that connects with our audience.",
      name: "Mercy Wanjiru",
      role: "Director, Bright Future Children's Home",
    },
  ];

  return (
    <motion.section
      className="bg-warm-white dark:bg-[#0b0f19] py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-astro-text dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-astro-muted dark:text-slate-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We don’t just build websites — we build trust, results, and lasting relationships.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-astro-text dark:text-white text-base mb-4 italic leading-relaxed">
              “{testimonial.quote}”
            </p>
            <p className="font-semibold text-astro-blue">{testimonial.name}</p>
            <p className="text-sm text-astro-muted dark:text-slate-400">
              {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
