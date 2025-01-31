'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Introduction() {
  return (
    <div className='flex flex-col items-center gap-8 lg:flex-row'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='lg:w-1/2'
      >
        <img
          src='https://placehold.co/600x400'
          alt='Madhya Pradesh Art Festival'
          className='rounded-lg object-cover shadow-lg'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='lg:w-1/2'
      >
        <h3 className='mb-4 text-2xl font-bold text-purple-600'>
          Introduction to the Festival
        </h3>
        <p className='mb-4 text-lg'>
          The Madhya Pradesh Art Festival is a grand platform uniting artists,
          writers, performers, and art enthusiasts to celebrate creativity and
          culture. It serves as a vibrant convergence of traditional and modern
          art forms, fostering cultural exchange and artistic innovation.
        </p>
        <p className='text-lg'>
          Since its inception, the festival has been a beacon for artistic
          expression, providing a stage for both established and emerging
          talents to showcase their work, collaborate, and inspire. It has
          become an integral part of Madhya Pradesh's cultural landscape,
          drawing visitors and participants from across India and beyond.
        </p>
      </motion.div>
    </div>
  );
}
