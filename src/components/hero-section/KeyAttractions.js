"use client";

import { motion } from "framer-motion";
import { Palette, Users, Music, ShoppingBag, Utensils } from "lucide-react";

const attractions = [
  {
    icon: Palette,
    title: "Art Sale & Exhibitions",
    description: "Biggest art sale and photography exhibitions",
  },
  {
    icon: Users,
    title: "Competitions",
    description: "Dance and painting competitions",
  },
  {
    icon: Music,
    title: "Live Performances",
    description: "Music, poetry, and comedy shows",
  },
  {
    icon: ShoppingBag,
    title: "Handicrafts Market",
    description: "Traditional handicrafts and handloom",
  },
  {
    icon: Utensils,
    title: "Food Stalls",
    description: "Delicious local and international cuisine",
  },
];

export function KeyAttractions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-4xl"
    >
      <h2 className="mb-4 text-2xl font-bold">Key Attractions</h2>
      <div className="flex overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {attractions.map((attraction, index) => (
          <motion.div
            key={attraction.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="mr-4 flex-shrink-0 sm:mr-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex h-full flex-col items-center rounded-lg bg-white/10 p-4 text-center backdrop-blur-lg"
            >
              <attraction.icon className="mb-2 h-8 w-8 text-yellow-400" />
              <h3 className="mb-1 text-lg font-semibold">{attraction.title}</h3>
              <p className="text-sm text-gray-300">{attraction.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
