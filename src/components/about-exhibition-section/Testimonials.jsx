'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "The Madhya Pradesh Art Festival is a true celebration of India's rich cultural heritage and contemporary creativity.",
    author: 'Priya Sharma',
    role: 'Renowned Painter',
    image: 'https://placehold.co/100x100',
  },
  {
    quote:
      'As a first-time attendee, I was blown away by the diversity and quality of art on display. It was an unforgettable experience.',
    author: 'Rahul Verma',
    role: 'Art Enthusiast',
    image: 'https://placehold.co/100x100',
  },
];

export function Testimonials() {
  return (
    <div className='space-y-8'>
      <h3 className='text-center text-3xl font-bold text-purple-600'>
        What People Say
      </h3>
      <div className='grid gap-8 sm:grid-cols-2'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex flex-col items-center space-y-4 rounded-lg bg-white p-6 text-center shadow-lg'
          >
            <img
              src={testimonial.image || 'https://placehold.co/100x100'}
              alt={testimonial.author}
              className='rounded-full'
            />
            <p className='text-lg italic text-gray-600'>
              "{testimonial.quote}"
            </p>
            <div>
              <p className='font-semibold'>{testimonial.author}</p>
              <p className='text-sm text-gray-500'>{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
