'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const milestones = [
  {
    year: 2010,
    achievement: 'Inaugural Madhya Pradesh Art Festival with 100 artists',
    image: 'https://picsum.photos/200/150',
  },
  {
    year: 2015,
    achievement: 'Expanded to include literary and performing arts',
    image: 'https://picsum.photos/200/150',
  },
  {
    year: 2020,
    achievement: 'Virtual edition reached 1 million online viewers',
    image: 'https://picsum.photos/200/150',
  },
  {
    year: 2025,
    achievement: 'Celebrating 15 years with over 1000 participating artists',
    image: 'https://picsum.photos/200/150',
  },
];

export function FestivalJourney() {
  return (
    <div className='space-y-8'>
      <h3 className='text-center text-3xl font-bold text-purple-600'>
        Festival Journey
      </h3>
      <div className='flex flex-col space-y-8'>
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center gap-4 md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className='md:w-1/3'>
              <img
                src={milestone.image || 'https://picsum.photos/200/150'}
                alt={`Milestone ${milestone.year}`}
                className='rounded-lg object-cover shadow-lg'
              />
            </div>
            <div className='flex flex-col items-center text-center md:w-2/3 md:items-start md:text-left'>
              <div className='mb-2 rounded-full bg-purple-600 px-4 py-1 text-sm font-bold text-white'>
                {milestone.year}
              </div>
              <p className='text-lg'>{milestone.achievement}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
