"use client";

import { motion } from "framer-motion";

export function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 font-semibold text-white transition-all hover:from-yellow-500 hover:to-orange-600"
      >
        Participate Now
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600"
      >
        Learn More
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-purple-900"
      >
        View Schedule
      </motion.button>
    </motion.div>
  );
}
