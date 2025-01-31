'use client';

import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';

export function BlogGrid({ articles }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
    >
      {articles.map(article => (
        <BlogCard key={article.id} article={article} />
      ))}
    </motion.div>
  );
}
