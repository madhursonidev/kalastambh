'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function LogoColumn() {
  return (
    <div className='space-y-4'>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Image
          src='https://picsum.photos/200/100'
          alt='Madhya Pradesh Art Festival Logo'
          width={200}
          height={100}
          className='w-48'
        />
      </motion.div>
      <h3 className='text-xl font-semibold'>
        Celebrating Art, Culture & Creativity!
      </h3>
      <p className='text-sm'>
        Join India's grandest celebration of art, culture, literature, music,
        and dance.
      </p>
    </div>
  );
}
