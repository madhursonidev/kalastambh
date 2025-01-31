'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function TrendingArticles({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % articles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [articles.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='overflow-hidden rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800'
    >
      <h3 className='mb-4 text-xl font-bold text-gray-800 dark:text-gray-200'>
        Trending Articles
      </h3>
      <div className='relative h-8'>
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              y: index === currentIndex ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className='absolute left-0 top-0 w-full'
          >
            <Link
              href={`/blog/${article.id}`}
              className='flex items-center justify-between'
            >
              <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                {article.title}
              </span>
              <span className='rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-900 dark:text-rose-200'>
                {article.category}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
