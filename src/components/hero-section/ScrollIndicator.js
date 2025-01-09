"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <ChevronDown className="h-8 w-8 animate-bounce text-white" />
    </motion.div>
  );
}
