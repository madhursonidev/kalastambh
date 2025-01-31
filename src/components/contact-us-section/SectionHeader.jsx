'use client';

import { motion } from 'framer-motion';

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-center'
    >
      <h2 className='mb-4 font-serif text-5xl font-bold leading-tight tracking-tighter text-rose-800 dark:text-rose-200 sm:text-6xl md:text-7xl'>
        Get in Touch
      </h2>
      <p className='mx-auto max-w-3xl text-xl font-light text-gray-600 dark:text-gray-300 sm:text-2xl'>
        Have questions? We're here to help! Contact us for inquiries,
        collaborations, and more.
      </p>
    </motion.div>
  );
}
