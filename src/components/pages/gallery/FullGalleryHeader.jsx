'use client';

import { motion } from 'framer-motion';
import { Image, Film } from 'lucide-react';

export function FullGalleryHeader({ activeTab, setActiveTab }) {
  return (
    <div className='space-y-8 text-center'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='font-serif text-5xl font-bold leading-tight tracking-tighter text-indigo-800 dark:text-indigo-200 sm:text-6xl md:text-7xl'
      >
        Festival Gallery
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='mx-auto max-w-3xl text-xl font-light text-gray-600 dark:text-gray-300'
      >
        Immerse yourself in the vibrant moments of the Madhya Pradesh Art
        Festival 2025
      </motion.p>
      <div className='flex justify-center space-x-4'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('photos')}
          className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-colors ${
            activeTab === 'photos'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700'
          }`}
        >
          <Image className='h-5 w-5' />
          <span>Photos</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('videos')}
          className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-colors ${
            activeTab === 'videos'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700'
          }`}
        >
          <Film className='h-5 w-5' />
          <span>Videos</span>
        </motion.button>
      </div>
    </div>
  );
}
