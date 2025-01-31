'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <div className='flex flex-col gap-8 rounded-lg bg-white p-8 shadow-lg sm:flex-row'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-center text-center sm:w-1/2'
      >
        <Target className='mb-4 h-16 w-16 text-purple-600' />
        <h3 className='mb-2 text-2xl font-bold text-purple-600'>Our Mission</h3>
        <p className='text-lg'>
          To nurture and celebrate artistic talent, preserve cultural heritage,
          and inspire creativity in all its forms.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='flex flex-col items-center text-center sm:w-1/2'
      >
        <Eye className='mb-4 h-16 w-16 text-pink-600' />
        <h3 className='mb-2 text-2xl font-bold text-pink-600'>Our Vision</h3>
        <p className='text-lg'>
          To become the premier platform for showcasing art and culture in
          India.
        </p>
      </motion.div>
    </div>
  );
}
