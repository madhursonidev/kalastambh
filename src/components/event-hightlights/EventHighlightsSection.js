"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { MainAttractions } from "./MainAttractions";
import { WhatToExpect } from "./WhatToExpect";
import { CompetitionsActivities } from "./CompetitionsActivities";
import { WhyItsSpecial } from "./WhyItsSpecial";
import { ScrollIndicator } from "src/components/ScrollIndicator";

export function EventHighlightsSection() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 py-16 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <SectionHeader />
          <MainAttractions />
          <WhatToExpect />
          <CompetitionsActivities />
          <WhyItsSpecial />
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
