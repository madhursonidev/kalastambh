"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const artists = [
  { name: "Amrita Sher-Gil", image: "/placeholder.svg?height=100&width=100" },
  { name: "M.F. Husain", image: "/placeholder.svg?height=100&width=100" },
  { name: "Anjolie Ela Menon", image: "/placeholder.svg?height=100&width=100" },
  { name: "Jitish Kallat", image: "/placeholder.svg?height=100&width=100" },
];

export function FeaturedArtists() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-4xl"
    >
      <h2 className="mb-4 text-2xl font-bold">Featured Artists</h2>
      <div className="flex justify-center space-x-4">
        {artists.map((artist, index) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.1 }}
            className="group relative"
          >
            <Image
              src={artist.image}
              alt={artist.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">
                {artist.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
