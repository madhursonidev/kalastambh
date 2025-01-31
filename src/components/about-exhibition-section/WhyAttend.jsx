'use client';

import { motion } from 'framer-motion';
import { Music, Users, Trophy, ShoppingBag } from 'lucide-react';

const reasons = [
  {
    icon: Music,
    title: 'Experience breathtaking performances',
    description:
      'Immerse yourself in a world of music, dance, and theatrical wonders.',
  },
  {
    icon: Users,
    title: 'Network with renowned artists and creators',
    description:
      'Connect with industry professionals and expand your artistic horizons.',
  },
  {
    icon: Trophy,
    title: 'Participate in engaging competitions and workshops',
    description:
      'Showcase your talent and learn from the best in various artistic disciplines.',
  },
  {
    icon: ShoppingBag,
    title: 'Explore a vibrant marketplace of art and crafts',
    description:
      'Discover unique artworks and handcrafted treasures from across India.',
  },
];

export function WhyAttend() {
  return (
    <div className='space-y-8'>
      <h3 className='text-center text-3xl font-bold text-purple-600'>
        Why Attend the Festival?
      </h3>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex flex-col items-center space-y-4 rounded-lg bg-white p-6 text-center shadow-lg'
          >
            <reason.icon className='h-12 w-12 text-purple-600' />
            <h4 className='text-xl font-semibold'>{reason.title}</h4>
            <p className='text-sm text-gray-600'>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
