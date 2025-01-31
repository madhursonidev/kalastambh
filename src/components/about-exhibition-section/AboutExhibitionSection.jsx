'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Introduction } from './Introduction';
import { MissionVision } from './MissionVision';
import { FestivalJourney } from './FestivalJourney';
import { WhyAttend } from './WhyAttend';
import { Testimonials } from './Testimonials';
import { CallToAction } from './CallToAction';

export function AboutExhibitionSection() {
  return (
    <section className='bg-gradient-to-br from-amber-50 to-orange-100 py-16 text-gray-800'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-16'
        >
          <SectionHeader />
          <Introduction />
          <MissionVision />
          <FestivalJourney />
          <WhyAttend />
          <Testimonials />
          <CallToAction />
        </motion.div>
      </div>
    </section>
  );
}
