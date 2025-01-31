'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Zap, Award } from 'lucide-react';

const benefits = [
  { icon: Briefcase, text: 'Brand exposure to a large, engaged audience' },
  {
    icon: Users,
    text: 'VIP networking opportunities with artists and industry experts',
  },
  {
    icon: Zap,
    text: 'Custom partnership activations (stalls, workshops, speaking opportunities)',
  },
  {
    icon: Award,
    text: 'Logo placement in event promotions, social media, and live banners',
  },
];

export function SponsorCTA() {
  return (
    <div className='rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-lg'>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-6 text-center text-3xl font-bold'
      >
        Become a Sponsor
      </motion.h3>
      <div className='mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex items-center space-x-4'
          >
            <benefit.icon className='h-8 w-8 flex-shrink-0' />
            <span>{benefit.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-center'
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-100'
        >
          Become a Sponsor
        </motion.button>
      </motion.div>
    </div>
  );
}
