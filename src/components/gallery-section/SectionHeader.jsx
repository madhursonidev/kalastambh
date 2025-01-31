'use client';

import { motion } from 'framer-motion';

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-center'
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='mb-4 font-serif text-5xl font-bold leading-tight tracking-tighter text-indigo-800 dark:text-indigo-200 sm:text-6xl md:text-7xl'
      >
        Festival Gallery
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='mx-auto max-w-3xl text-xl font-light text-gray-600 dark:text-gray-300 sm:text-2xl'
      >
        Relive the Best Moments of Madhya Pradesh Art Festival
      </motion.p>
    </motion.div>
  );
}
