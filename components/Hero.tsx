"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold">
        Hi, I’m <span className="text-blue-500">Faseer Ahmed</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-gray-500 max-w-xl">
        Full Stack Developer specializing in React, Next.js, Spring Boot, Flask, and PostgreSQL.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex gap-4">
        <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Projects
        </a>
        <a href="/resume.pdf" className="px-6 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
