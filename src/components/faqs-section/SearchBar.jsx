'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='relative mx-auto max-w-2xl'
    >
      <input
        type='text'
        placeholder='Search FAQs...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='w-full rounded-full bg-white px-6 py-3 pr-12 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white'
      />
      <Search className='absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400' />
    </motion.div>
  );
}
