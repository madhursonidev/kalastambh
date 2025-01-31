'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Award, Users } from 'lucide-react';

const details = [
  { icon: Calendar, text: 'February 21-23, 2025' },
  { icon: Clock, text: '10 AM - 10 PM' },
  { icon: MapPin, text: 'Gandhi Hall, Indore' },
  { icon: Users, text: 'Free Entry for Visitors' },
  { icon: Award, text: 'Competitions & Prizes for participants' },
];

export function EventDetails() {
  return (
    <div className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
      <h3 className='mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200'>
        Key Event Details
      </h3>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex items-center space-x-3'
          >
            <detail.icon className='h-6 w-6 text-indigo-600 dark:text-indigo-400' />
            <span className='text-gray-700 dark:text-gray-300'>
              {detail.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
