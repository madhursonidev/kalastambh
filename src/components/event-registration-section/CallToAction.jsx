'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import QRCode from 'react-qr-code';

export function CallToAction() {
  return (
    <div className='flex flex-col items-center space-y-8 sm:flex-row sm:justify-between sm:space-y-0'>
      <div className='text-center sm:text-left'>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200'
        >
          Quick Registration
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <QRCode value='https://forms.gle/Lg4yGT8GPBVYSRmT6' size={128} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-2 text-sm text-gray-600 dark:text-gray-400'
        >
          Scan to register on mobile
        </motion.p>
      </div>
      <div className='flex flex-col space-y-4'>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href='https://forms.gle/Lg4yGT8GPBVYSRmT6'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full bg-indigo-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-indigo-700'
        >
          Register Now
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center justify-center space-x-2 rounded-full border-2 border-indigo-600 px-8 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900'
        >
          <HelpCircle className='h-5 w-5' />
          <span>Need Help? Contact Us</span>
        </motion.button>
      </div>
    </div>
  );
}
