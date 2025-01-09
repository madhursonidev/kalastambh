"use client";

import { motion } from "framer-motion";

export function EventTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Madhya Pradesh
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Art Festival 2025
        </span>
      </h1>
      <p className="mx-auto max-w-3xl text-xl font-light text-gray-200 sm:text-2xl">
        The grand celebration of art, culture, literature, music, and dance!
      </p>
    </motion.div>
  );
}
