'use client';

import { motion } from 'framer-motion';

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
    <div className=' mx-auto max-w-4xl py-10'>
      <h3 className='text-center text-3xl font-bold text-purple-600 mb-8'>
        Festival Journey
      </h3>

      <div className='relative mx-auto max-w-4xl'>
        {/* Vertical Timeline Line */}
        <div className='absolute left-1/2 top-0 h-full w-1 bg-purple-600 transform -translate-x-1/2'></div>

        <div className='flex flex-col space-y-12'>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center w-full md:w-[calc(100%-3rem)]
        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
        flex-col md:flex-row`}
            >
              {/* Connector Dot - Centered */}
              <div className='absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-600 border-4 border-white'></div>

              {/* Left Side: Year & Event Text */}
              <div className='md:w-5/12 text-center md:text-left px-4'>
                <div className='inline-block rounded-full bg-purple-600 px-4 py-1 text-sm font-bold text-white'>
                  {milestone.year}
                </div>
                <p className='mt-2 text-lg'>{milestone.achievement}</p>
              </div>

              {/* Right Side: Image */}
              <div className='md:w-5/12'>
                <img
                  src={milestone.image}
                  alt={`Milestone ${milestone.year}`}
                  className='rounded-lg object-cover shadow-lg mx-auto md:mx-0'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
