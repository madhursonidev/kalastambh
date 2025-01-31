'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-center'
    >
      <h3 className='mb-4 text-2xl font-semibold text-indigo-800 dark:text-indigo-200'>
        Didn't find your answer?
      </h3>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700'
      >
        <MessageCircle className='mr-2 h-5 w-5' />
        Contact Us
      </motion.button>
    </motion.div>
  );
}
