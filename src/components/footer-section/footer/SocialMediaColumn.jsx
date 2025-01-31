'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function SocialMediaColumn() {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-4'>Connect With Us</h3>
      <div className='flex space-x-4 mb-6'>
        {socialLinks.map(link => (
          <motion.a
            key={link.label}
            href={link.href}
            whileHover={{ y: -3 }}
            className='text-gray-600 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-400'
          >
            <link.icon className='h-6 w-6' />
            <span className='sr-only'>{link.label}</span>
          </motion.a>
        ))}
      </div>
      <h4 className='text-lg font-semibold mb-2'>Stay Updated!</h4>
      <p className='text-sm mb-2'>
        Subscribe for festival news, exclusive content, and event updates.
      </p>
      <form className='flex space-x-2'>
        <Input type='email' placeholder='Your email' className='w-full' />
        <Button type='submit'>Subscribe</Button>
      </form>
    </div>
  );
}
