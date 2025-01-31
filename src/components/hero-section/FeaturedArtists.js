'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const artists = [
  { name: 'Amrita Sher-Gil', image: 'https://picsum.photos/100' },
  { name: 'M.F. Husain', image: 'https://picsum.photos/100' },
  { name: 'Anjolie Ela Menon', image: 'https://picsum.photos/100' },
  { name: 'Jitish Kallat', image: 'https://picsum.photos/100' },
];

export function FeaturedArtists() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className='w-full max-w-4xl'
    >
      <h2 className='mb-4 text-2xl font-bold'>Featured Artists</h2>
      <div className='flex justify-center space-x-4'>
        {artists.map((artist, index) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.1 }}
            className='group relative'
          >
            <img
              src={artist.image}
              alt={artist.name}
              className='rounded-full'
            />
            <div className='absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100'>
              <span className='text-sm font-medium text-white'>
                {artist.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
