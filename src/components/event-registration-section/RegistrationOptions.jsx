'use client';

import { motion } from 'framer-motion';
import { Ticket, Palette, ShoppingBag, Music } from 'lucide-react';

const categories = [
  {
    id: 'visitor',
    name: 'General Visitors',
    icon: Ticket,
    description: 'Free Entry – No Registration Required',
  },
  {
    id: 'participant',
    name: 'Competition Participants',
    icon: Palette,
    description: 'Dance, Painting, Photography, Rangoli, Mehndi',
  },
  {
    id: 'vendor',
    name: 'Stall Vendors & Exhibitors',
    icon: ShoppingBag,
    description: 'Handicrafts, Art Market, Food Stalls',
  },
  {
    id: 'artist',
    name: 'Performing Artists & Speakers',
    icon: Music,
    description: 'Musicians, Poets, Theatre Artists',
  },
];

export function RegistrationOptions({ onCategorySelect }) {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategorySelect(category.id)}
            className='flex h-full w-full flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-lg transition-colors hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <category.icon className='mb-4 h-12 w-12 text-indigo-600 dark:text-indigo-400' />
            <h3 className='mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200'>
              {category.name}
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {category.description}
            </p>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
