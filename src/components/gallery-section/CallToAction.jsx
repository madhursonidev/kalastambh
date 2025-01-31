'use client';

import { motion } from 'framer-motion';
import { Upload, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function CallToAction() {
  return (
    <div className='flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='flex items-center space-x-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700'
      >
        <Upload className='h-5 w-5' />
        <span>Upload Your Festival Moments</span>
      </motion.button>
      <Link href='/gallery'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center space-x-2 rounded-full border-2 border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-600 hover:text-white'
        >
          <ExternalLink className='h-5 w-5' />
          <span>View Full Gallery</span>
        </motion.button>
      </Link>
    </div>
  );
}
