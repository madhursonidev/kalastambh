'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RegistrationOptions } from './RegistrationOptions';
import { RegistrationForm } from './RegistrationForm';
import { EventDetails } from './EventDetails';
import { CallToAction } from './CallToAction';
import { SectionHeader } from './SectionHeader';

export function EventRegistrationSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 py-16 dark:from-gray-900 dark:to-indigo-900'>
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='h-full w-full object-cover opacity-10'
        >
          <source src='/festival-highlights.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='container relative z-10 mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-16'
        >
          <SectionHeader />
          <RegistrationOptions onCategorySelect={setSelectedCategory} />
          {selectedCategory && <RegistrationForm category={selectedCategory} />}
          <EventDetails />
          <CallToAction />
        </motion.div>
      </div>
    </section>
  );
}
