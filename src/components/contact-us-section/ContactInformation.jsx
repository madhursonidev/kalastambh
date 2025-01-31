'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInformation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'
    >
      <h3 className='mb-4 text-2xl font-semibold text-rose-600 dark:text-rose-400'>
        Contact Information
      </h3>
      <ul className='space-y-4'>
        <motion.li whileHover={{ scale: 1.05 }} className='flex items-start'>
          <MapPin className='mr-3 h-6 w-6 flex-shrink-0 text-rose-500' />
          <div>
            <strong className='font-medium'>Venue Address:</strong>
            <p>Gandhi Hall, Indore, Madhya Pradesh, India</p>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} className='flex items-start'>
          <Phone className='mr-3 h-6 w-6 flex-shrink-0 text-rose-500' />
          <div>
            <strong className='font-medium'>Phone Numbers:</strong>
            <p>Sapna Katfar (Founder): +91 91791 82244</p>
            <p>Pushkar Soni (Director, Kalastambh): +91 75099 22082</p>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} className='flex items-start'>
          <Mail className='mr-3 h-6 w-6 flex-shrink-0 text-rose-500' />
          <div>
            <strong className='font-medium'>Email:</strong>
            <p>General Inquiries: Director@kalastambh.com</p>
            <p>Sponsorship & Stall Bookings: partnerships@kalastambh.com</p>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} className='flex items-start'>
          <Clock className='mr-3 h-6 w-6 flex-shrink-0 text-rose-500' />
          <div>
            <strong className='font-medium'>Office Hours:</strong>
            <p>Monday – Saturday: 10 AM – 6 PM</p>
          </div>
        </motion.li>
      </ul>
    </motion.div>
  );
}
