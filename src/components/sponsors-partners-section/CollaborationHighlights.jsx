'use client';

import { motion } from 'framer-motion';
import { Users, Palette, Eye } from 'lucide-react';

const highlights = [
  { icon: Users, stat: '500+', text: 'Artists' },
  { icon: Eye, stat: '50,000+', text: 'Visitors' },
  { icon: Palette, stat: '100+', text: 'Exhibitors' },
];

export function CollaborationHighlights() {
  return (
    <div className='rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-6 text-center text-lg text-gray-700 dark:text-gray-300'
      >
        With the support of our partners, MP Art Festival 2025 brings together a
        grand celebration of creativity:
      </motion.p>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        {highlights.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex flex-col items-center'
          >
            <item.icon className='mb-2 h-12 w-12 text-indigo-600 dark:text-indigo-400' />
            <span className='text-3xl font-bold text-indigo-700 dark:text-indigo-300'>
              {item.stat}
            </span>
            <span className='text-lg text-gray-600 dark:text-gray-400'>
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mt-8 border-l-4 border-indigo-500 pl-4 italic text-gray-600 dark:text-gray-300'
      >
        "The Madhya Pradesh Art Festival is a testament to the power of
        collaboration between art and industry. It's an honor to be part of this
        cultural renaissance."
        <footer className='mt-2 text-right text-sm font-semibold'>
          - CEO, TechCorp (Platinum Sponsor)
        </footer>
      </motion.blockquote>
    </div>
  );
}
