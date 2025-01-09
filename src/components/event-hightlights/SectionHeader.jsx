import { motion } from "framer-motion";

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="mb-4 text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-7xl">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Event Highlights
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-xl font-light text-gray-200 sm:text-2xl">
        What Makes Madhya Pradesh Art Festival 2025 Unmissable!
      </p>
    </motion.div>
  );
}
