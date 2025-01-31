'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedArticle({ article }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'
    >
      <div className='md:flex'>
        <div className='md:w-2/3'>
          <Image
            src={article.image || 'https://picsum.photos/600/400'}
            alt={article.title}
            width={600}
            height={400}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='p-6 md:w-1/3'>
          <span className='mb-2 inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-900 dark:text-rose-200'>
            {article.category}
          </span>
          <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200'>
            {article.title}
          </h3>
          <p className='mb-4 text-gray-600 dark:text-gray-400'>
            {article.excerpt}
          </p>
          <div className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
            <span>{article.author}</span> •{' '}
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <Link
            href={`/blog/${article.id}`}
            className='inline-block rounded-full bg-rose-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-700'
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
