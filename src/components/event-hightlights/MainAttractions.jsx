"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Palette,
  ShoppingBag,
  Camera,
  Music,
  Mic,
  Book,
  Utensils,
  Users,
} from "lucide-react";

const attractions = [
  {
    title: "Madhya Pradesh's BIGGEST ART SALE",
    description: "Explore and acquire stunning artworks from talented artists.",
    icon: Palette,
    image: "/images/9.jpg",
  },
  {
    title: "Art Trade Fair",
    description:
      "Connect with art dealers and collectors from around the world.",
    icon: ShoppingBag,
    image: "/images/79.jpg",
  },
  {
    title: "Art and Photography Exhibition",
    description: "Immerse yourself in captivating visual storytelling.",
    icon: Camera,
    image: "/images/21.jpg",
  },
  {
    title: "Dance & Painting Competitions",
    description: "Witness and participate in thrilling artistic showdowns.",
    icon: Users,
    image: "/images/497091.webp",
  },
  {
    title: "Live Musical Performances & Band Shows",
    description: "Experience soul-stirring melodies and rhythms.",
    icon: Music,
    image: "/images/Domingos+3.jpg",
  },
  {
    title: "Poetry & Stand-Up Comedy Acts",
    description: "Enjoy thought-provoking verses and hearty laughter.",
    icon: Mic,
    image: "/images/Live-Poetry-Readings-for-Newbies-Notes-of-Oak-Blog.jpg",
  },
  {
    title: "Literary Sessions & Panel Discussions",
    description:
      "Engage in stimulating conversations with literary luminaries.",
    icon: Book,
    image: "/images/24.jpg",
  },
  {
    title: "Handicrafts, Handloom & Art Market",
    description: "Shop for unique, handcrafted treasures and artworks.",
    icon: ShoppingBag,
    image: "/images/10_Dec-_Craft_Mela.webp",
  },
  {
    title: "Delicious Food Stalls",
    description: "Savor a diverse array of culinary delights.",
    icon: Utensils,
    image: "/images/image_food_stall.jpg",
  },
];

export function MainAttractions() {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold">Main Attractions</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attraction, index) => (
          <motion.div
            key={attraction.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-lg bg-white/10 backdrop-blur-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={attraction.image}
                alt={attraction.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0" />
              <attraction.icon className="absolute left-4 top-4 h-8 w-8 text-white" />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-xl font-semibold">{attraction.title}</h4>
              <p className="text-sm text-gray-300">{attraction.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
