"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardCheck,
  Rocket,
  PhoneCall,
  Send,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const steps = [
  {
    icon: MessageCircle,
    title: "Step 1: Let’s Talk",
    description: "Schedule a quick intro or send us a message to share your vision.",
  },
  {
    icon: ClipboardCheck,
    title: "Step 2: Get a Plan",
    description: "We craft a personalized plan with pricing, timeline, and deliverables.",
  },
  {
    icon: Rocket,
    title: "Step 3: Watch Us Build",
    description: "We build transparently, updating you at key stages — from design to launch.",
  },
];

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    toast.loading("Sending message...");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setSubmitted(true);
        reset();
      } else {
        toast.dismiss();
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.dismiss();
      toast.error("Failed to send. Please try again later.");
    }
  };

  return (
    <section className="bg-white dark:bg-[#0d1117] text-astro-text dark:text-white px-6 py-20 relative">
      <Toaster position="top-center" />

      {/* Hero */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Work With Us</h1>
        <p className="text-lg text-astro-muted dark:text-gray-400">
          Ready to collaborate on your next big idea? Let’s bring it to life.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3 mb-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#e6f0fa] dark:bg-[#1a1f2c]">
              <step.icon className="w-8 h-8 text-astro-blue dark:text-astro-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp */}
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div>
          <h3 className="text-xl font-bold mb-2">Prefer WhatsApp?</h3>
          <Link
            href="https://wa.me/254790470430"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <PhoneCall className="w-5 h-5" />
            Chat with us on WhatsApp
          </Link>
        </div>

        {/* Divider */}
        <div className="relative text-sm uppercase text-gray-400 dark:text-gray-600 my-6">
          <span className="bg-white dark:bg-[#0d1117] px-4 relative z-10">or</span>
          <div className="absolute inset-0 top-3 border-t border-gray-300 dark:border-gray-700" />
        </div>

        {/* Contact Form */}
        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>

            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name / Company Name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}

            <textarea
              {...register("message", { required: true })}
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm"
            />
            {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-astro-blue hover:bg-astro-blue-dark text-white px-6 py-3 rounded-full font-medium transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        ) : (
          <motion.div
            className="text-center mt-10 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-600 rounded-xl p-6 max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-10 h-10 mx-auto text-green-600 dark:text-green-300 mb-4" />
            <h4 className="text-lg font-semibold">Thanks for reaching out!</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We’ll get back to you within 24 hours. Watch your inbox!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
