'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <motion.button
      className='fixed bottom-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
      onClick={() => setIsDarkMode(!isDarkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <Sun className='h-6 w-6' /> : <Moon className='h-6 w-6' />}
    </motion.button>
  );
}
