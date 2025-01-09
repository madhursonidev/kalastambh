"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Palette, Camera, Flower, Sparkles } from "lucide-react";

const competitions = [
  { name: "Dance Competition", icon: Music },
  { name: "Painting Competition", icon: Palette },
  { name: "Photography Competition", icon: Camera },
  { name: "Mehndi Competition", icon: Flower },
  { name: "Rangoli Competition", icon: Sparkles },
];

export function CompetitionsActivities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold">Competitions & Special Activities</h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {competitions.map((competition, index) => (
            <motion.button
              key={competition.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === index
                  ? "bg-yellow-400 text-purple-900"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <competition.icon className="h-5 w-5" />
              <span>{competition.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg bg-white/10 p-6 backdrop-blur-lg"
      >
        <h4 className="mb-4 text-2xl font-semibold">
          {competitions[activeTab].name}
        </h4>
        <p className="mb-6">
          Showcase your talent and compete with artists from around the country
          in our exciting {competitions[activeTab].name.toLowerCase()}. Win
          amazing prizes and get recognized for your skills!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 font-semibold text-purple-900 transition-all hover:from-yellow-500 hover:to-orange-600"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
}
