"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-[#0d1117] backdrop-blur-md shadow-sm border-b border-blue-100 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left - Logo */}
        <Link href="/" className="text-2xl font-bold text-[#005ea6] tracking-tight">
          Astra Design
        </Link>

        {/* Center - Navigation */}
        <nav className="hidden md:flex gap-12 absolute left-1/2 transform -translate-x-1/2 text-[#005ea6] text-base font-medium">
          <Link href="/" className="hover:underline underline-offset-4 transition">
            Home
          </Link>
          <Link href="/services" className="hover:underline underline-offset-4 transition">
            Services
          </Link>
          <Link href="/portfolio" className="hover:underline underline-offset-4 transition">
            Portfolio
          </Link>
        </nav>

        {/* Right - Dark Toggle + CTA */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-[#005ea6] hover:text-yellow-500 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#005ea6]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Mobile Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* CTA - Work With Us */}
          <Link
            href="/work-with-us"
            className="hidden md:inline-block bg-[#005ea6] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
          >
            Work With Us
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-[#0d1117] border-t border-blue-100 text-[#005ea6] dark:text-white">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2">
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block py-2">
            Services
          </Link>
          <Link href="/portfolio" onClick={() => setOpen(false)} className="block py-2">
            Portfolio
          </Link>
          <Link
            href="/work-with-us"
            onClick={() => setOpen(false)}
            className="block py-2 font-semibold underline underline-offset-4"
          >
            Work With Us
          </Link>
        </div>
      )}
    </header>
  );
}
