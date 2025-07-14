"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Web Projects" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, value, count]);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-black dark:text-white bg-white dark:bg-[#0d1117]">
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-8 md:px-12 flex flex-col justify-center items-center h-full py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {/* LEFT - Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/hero1.jpeg"
              alt="Creative web design"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-xl hover:scale-[1.015] transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* RIGHT - Text */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Introducing your brand to the world with an{" "}
              <span className="text-astro-brand whitespace-nowrap">elegant website</span>.
            </h1>

            <p className="text-lg sm:text-xl font-normal leading-relaxed">
              We help you tell your story and build your brand through{" "}
              <span className="text-astro-brand">World-class webdesign services.</span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              <Link
                href="#services"
                className="bg-astro-brand hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Our Services
              </Link>

              <Link
                href="#work"
                className="border border-astro-brand text-astro-brand hover:bg-astro-brand hover:text-white px-6 py-2 rounded-full font-semibold transition"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 w-full text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Hint */}
        <Link href="#services" scroll={true}>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="mt-6 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
