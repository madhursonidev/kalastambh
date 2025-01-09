"use client";

import { motion } from "framer-motion";
import { Palette, Users, Trophy, ShoppingBag } from "lucide-react";

const expectations = [
  {
    icon: Palette,
    description: "Spectacular performances in visual and performing arts.",
  },
  {
    icon: Users,
    description: "Interact with renowned artists, writers, and designers.",
  },
  {
    icon: Trophy,
    description: "Showcase your talent in competitions and workshops.",
  },
  {
    icon: ShoppingBag,
    description:
      "Explore a vibrant marketplace of traditional and contemporary crafts.",
  },
];

export function WhatToExpect() {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold">What to Expect</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {expectations.map((expectation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 p-6 text-center backdrop-blur-lg"
          >
            <expectation.icon className="h-12 w-12 text-yellow-400" />
            <p className="text-sm">{expectation.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
