'use client';

import { motion } from 'framer-motion';

export function BlogCategories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-wrap justify-center gap-4'
    >
      {categories.map(category => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setSelectedCategory(
              selectedCategory === category.id ? null : category.id
            )
          }
          className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === category.id
              ? 'bg-rose-600 text-white'
              : 'bg-white text-rose-600 hover:bg-rose-100 dark:bg-gray-800 dark:text-rose-400 dark:hover:bg-gray-700'
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
