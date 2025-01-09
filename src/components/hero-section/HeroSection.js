"use client";

import { motion } from "framer-motion";
import { DynamicBackground } from "./DynamicBackground";
import { EventTitle } from "./EventTitle";
import { CountdownTimer } from "./CountdownTimer";
import { EventDetails } from "./EventDetails";
import { KeyAttractions } from "./KeyAttractions";
import { CTAButtons } from "./CTAButtons";
import { FeaturedArtists } from "./FeaturedArtists";
import { ScrollIndicator } from "src/components/hero-section/ScrollIndicator";


export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'url("/images/45.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 -z-[5] bg-gradient-to-br from-purple-900 via-pink-700 to-orange-500 opacity-90" />
      <DynamicBackground />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <EventTitle />
          <CountdownTimer targetDate="2025-02-21T10:00:00" />
          <EventDetails />
          <KeyAttractions />
          <CTAButtons />
          <FeaturedArtists />
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
