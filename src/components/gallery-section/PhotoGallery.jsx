'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'art', name: '🎭 Art & Exhibitions' },
  { id: 'performances', name: '🎶 Live Performances' },
  { id: 'workshops', name: '🎨 Workshops & Competitions' },
  { id: 'candid', name: '📸 Candid Moments' },
];

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/400/300/',
    category: 'art',
    alt: 'Art Exhibition',
  },
  {
    id: 2,
    src: 'https://picsum.photos/300/400',
    category: 'performances',
    alt: 'Live Music Performance',
  },
  {
    id: 3,
    src: 'https://picsum.photos/350',
    category: 'workshops',
    alt: 'Painting Workshop',
  },
  {
    id: 4,
    src: 'https://picsum.photos/400/300/',
    category: 'candid',
    alt: 'Festival Attendees',
  },
  {
    id: 5,
    src: 'https://picsum.photos/300/400',
    category: 'art',
    alt: 'Sculpture Display',
  },
  {
    id: 6,
    src: 'https://picsum.photos/350',
    category: 'performances',
    alt: 'Dance Performance',
  },
  // Add more images here
];

export function PhotoGallery({ onImageClick }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter(image => image.category === activeCategory);

  return (
    <div className='space-y-8'>
      <div className='flex flex-wrap justify-center gap-4'>
        {categories.map(category => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-indigo-600 hover:bg-indigo-100'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className='flex w-auto -ml-4'
        columnClassName='pl-4 bg-clip-padding'
      >
        {filteredImages.map(image => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-4'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative overflow-hidden rounded-lg shadow-lg'
            >
              <Image
                src={image.src || 'https://picsum.photos/400/300'}
                alt={image.alt}
                width={400}
                height={300}
                className='cursor-pointer object-cover transition-transform duration-300 hover:scale-110'
                onClick={() => onImageClick(image.src)}
              />
            </motion.div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}
