"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle submission (e.g., send to backend or 3rd party)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div>
        <label className="block text-astro-text mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border border-astro-muted px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-astro-blue"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-astro-text mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border border-astro-muted px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-astro-blue"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-astro-text mb-1 font-medium">Message</label>
        <textarea
          name="message"
          rows={5}
          className="w-full border border-astro-muted px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-astro-blue"
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-astro-blue hover:bg-astro-blue-dark text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Send Message
      </button>
    </form>
  );
}
