"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#005ea6] dark:bg-[#0a0f1c] text-white border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <p className="text-xl font-semibold tracking-tight">Astra Design</p>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-wrap gap-8 text-sm font-medium">
            <Link href="/" className="hover:underline underline-offset-4 hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/portfolio" className="hover:underline underline-offset-4 hover:text-blue-200 transition">
              Our Work
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4 hover:text-blue-200 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden text-sm text-white text-center">
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="flex items-center gap-1 underline underline-offset-2 font-medium"
            >
              {showMobileNav ? "Hide Links" : "More Links"}
              {showMobileNav ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
              {showMobileNav && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 flex flex-col items-center gap-2 text-sm"
                >
                  <Link href="/" className="hover:underline">Home</Link>
                  <Link href="/portfolio" className="hover:underline">Our Work</Link>
                  <Link href="/contact" className="hover:underline">Contact</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-white">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-xs text-white/70">
          &copy; {new Date().getFullYear()} Astra Design. All rights reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-white text-[#005ea6] shadow-lg hover:bg-blue-100 hover:scale-105 transition z-50"
            aria-label="Back to Top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
