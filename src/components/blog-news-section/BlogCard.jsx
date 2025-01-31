'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function BlogCard({ article }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date(article.date).toLocaleDateString());
  }, [article?.date]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800'
    >
      <Image
        src={article.image || 'https://picsum.photos/400/250'}
        alt={article.title}
        width={400}
        height={250}
        className='h-48 w-full object-cover'
      />
      <div className='p-6'>
        <span className='mb-2 inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-900 dark:text-rose-200'>
          {article.category}
        </span>
        <h3 className='mb-2 text-xl font-bold text-gray-800 dark:text-gray-200'>
          {article.title}
        </h3>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          {article.excerpt}
        </p>
        <div className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
          <span>{article.author}</span> • <span>{formattedDate}</span>
        </div>
        <Link
          href={`/blog/${article.id}`}
          className='inline-block rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-700'
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
