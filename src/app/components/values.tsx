"use client";

import { motion, cubicBezier } from "framer-motion";
import {
  Star,
  Handshake,
  PhoneCall,
  CalendarCheck,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";

const easing = cubicBezier(0.42, 0, 0.58, 1);

const values = [
  {
    title: "Premium Design Standards",
    description:
      "We craft world-class websites so your brand can confidently compete on a global level.",
    icon: Star,
  },
  {
    title: "Client-First Approach",
    description:
      "Tailor-made solutions with your taste and needs in mind — you're involved every step of the way.",
    icon: Handshake,
  },
  {
    title: "Open Communication",
    description:
      "Weekly progress calls, consistent updates, and clear timelines. You're never left in the dark.",
    icon: PhoneCall,
  },
  {
    title: "Professional & Timely Delivery",
    description:
      "We value your time and business — deadlines are met with quality, every time.",
    icon: CalendarCheck,
  },
  {
    title: "Design Expertise",
    description:
      "From concept to deployment — complete web design, development, redesign, and SEO optimization.",
    icon: RefreshCw,
  },
  {
    title: "After-Sale Support",
    description:
      "Our partnership doesn’t end at launch. We offer post-launch updates, fixes, and guidance.",
    icon: LifeBuoy,
  },
];

export default function Values() {
  return (
    <motion.section
      id="values"
      className="bg-white dark:bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#005ea6] dark:text-white mb-4">
          Why Choose Astra Design?
        </h2>
        <p className="text-base text-gray-600 dark:text-slate-400">
          Everything we do is built on trust, quality, and your success.
        </p>
      </motion.div>

      {/* Grid Values */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              className="bg-[#f0f8ff] dark:bg-[#111827] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-blue-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easing }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#dbeeff] dark:bg-[#1f2937] flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#005ea6] dark:text-astro-accent" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-[#003d66] dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-[#1a2e3b] dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
