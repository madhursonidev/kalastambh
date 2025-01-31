'use client';

import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='flex flex-col items-center space-y-4 text-center'
    >
      <h3 className='text-2xl font-bold text-purple-600'>
        Ready to Experience the Magic?
      </h3>
      <p className='text-lg text-gray-600'>
        Discover more about our rich history and exciting plans for the future.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700'
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}
