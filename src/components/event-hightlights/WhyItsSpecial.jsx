"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experts = [
  "Fashion Designers",
  "Interior Designers",
  "Architects",
  "Visual Artists",
  "Photographers",
  "Dancers",
  "Theatre Artists",
  "Writers",
  "Poets",
  "Musicians",
  "Bands",
];

export function WhyItsSpecial() {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold">Why It's Special</h3>
      <div className="overflow-hidden rounded-lg bg-white/10 backdrop-blur-lg lg:flex">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-64 w-full lg:h-auto lg:w-1/2"
        >
          <Image
            src="/images/40.jpeg"
            alt="Artists collaborating"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 lg:w-1/2"
        >
          <h4 className="mb-4 text-2xl font-semibold">
            Learn from top artists and build connections
          </h4>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>🎙️ Learn from top artists in workshops and masterclasses</li>
            <li>🌟 Build meaningful connections with industry experts</li>
          </ul>
          <div>
            <h5 className="mb-2 font-semibold">
              Meet experts from various fields:
            </h5>
            <div className="flex flex-wrap gap-2">
              {experts.map((expert, index) => (
                <motion.span
                  key={expert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-full bg-white/20 px-3 py-1 text-sm"
                >
                  {expert}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
