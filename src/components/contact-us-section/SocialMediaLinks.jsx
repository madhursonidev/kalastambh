'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export function SocialMediaLinks() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'
    >
      <h3 className='mb-4 text-2xl font-semibold text-rose-600 dark:text-rose-400'>
        Connect With Us
      </h3>
      <div className='flex justify-center space-x-4'>
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400'
          >
            <link.icon className='h-6 w-6' />
            <span className='sr-only'>{link.label}</span>
          </motion.a>
        ))}
      </div>
      <p className='mt-4 text-center text-sm text-gray-600 dark:text-gray-300'>
        Follow us for live updates and behind-the-scenes moments!
      </p>
    </motion.div>
  );
}
