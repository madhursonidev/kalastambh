'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const mediaPartners = [
  { name: 'LocalNews24', logo: 'https://picsum.photos/160/80' },
  { name: 'ArtisticFM', logo: 'https://picsum.photos/160/80' },
  { name: 'CultureMag', logo: 'https://picsum.photos/160/80' },
  { name: 'CreativeTV', logo: 'https://picsum.photos/160/80' },
  { name: 'DigitalArtsDaily', logo: 'https://picsum.photos/160/80' },
];

const pressArticles = [
  '"MP Art Festival 2025: A Cultural Extravaganza" - LocalNews24',
  '"Celebrating Creativity: MP Art Festival Returns" - CultureMag',
  '"Art and Technology Converge at MP Festival" - DigitalArtsDaily',
  '"MP Art Festival: Boosting Local Economy" - ArtisticFM',
  '"Rising Artists Shine at MP Art Festival" - CreativeTV',
];

export function MediaPartnerRecognition() {
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle(prev => (prev + 1) % pressArticles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='space-y-8'>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-2xl font-semibold text-indigo-700 dark:text-indigo-300'
      >
        Media Partners
      </motion.h3>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {mediaPartners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={partner.logo || 'https://picsum.photos/160/80'}
              alt={partner.name}
              width={160}
              height={80}
              className='max-h-16 w-auto object-contain'
            />
          </motion.div>
        ))}
      </div>
      <div className='relative h-12 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700'>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -currentArticle * 48 }}
          transition={{ duration: 0.5 }}
          className='absolute left-0 top-0 w-full'
        >
          {pressArticles.map((article, index) => (
            <div
              key={index}
              className='flex h-12 items-center justify-center px-4 text-center text-sm text-gray-700 dark:text-gray-300'
            >
              {article}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
