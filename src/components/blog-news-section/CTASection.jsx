'use client';

import { motion } from 'framer-motion';
import { Mail, Pencil } from 'lucide-react';

export function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='rounded-lg bg-rose-100 p-8 text-center dark:bg-rose-900'
    >
      <h3 className='mb-4 text-2xl font-bold text-rose-800 dark:text-rose-200'>
        Stay Connected & Contribute
      </h3>
      <p className='mb-6 text-gray-600 dark:text-gray-300'>
        Be part of the Madhya Pradesh Art Festival community. Subscribe for
        updates or share your story!
      </p>
      <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-rose-700'
        >
          <Mail className='mr-2 h-5 w-5' />
          Subscribe to Updates
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-rose-600 transition-colors hover:bg-rose-50 dark:bg-gray-800 dark:text-rose-400 dark:hover:bg-gray-700'
        >
          <Pencil className='mr-2 h-5 w-5' />
          Submit Your Story
        </motion.button>
      </div>
    </motion.div>
  );
}
