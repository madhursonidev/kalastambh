"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";

export function EventDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-4"
    >
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5 text-yellow-400" />
          <span>February 21-23, 2025</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-orange-400" />
          <span>10 AM to 10 PM</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-red-400" />
          <span>Gandhi Hall, Indore</span>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-block rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-semibold text-white"
      >
        <Ticket className="mr-2 inline-block h-5 w-5" />
        Free Entry for Visitors
      </motion.div>
    </motion.div>
  );
}
