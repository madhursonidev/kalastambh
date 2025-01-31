'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home 🏠' },
  { href: '#about', label: 'About the Festival ℹ️' },
  { href: '#highlights', label: 'Event Highlights 🎭' },
  { href: '#artists', label: 'Artist Showcase 🎨' },
  { href: '/gallery', label: 'Gallery 📸' },
  { href: '#register', label: 'Register Now 📝' },
  { href: '#blog', label: 'Blog & News 📰' },
  { href: '#faq', label: 'FAQs ❓' },
  { href: '#contact', label: 'Contact Us 📩' },
];

export function QuickLinksColumn() {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
      <ul className='space-y-2'>
        {links.map(link => (
          <motion.li key={link.href} whileHover={{ x: 5 }}>
            <Link
              href={link.href}
              className='hover:text-rose-600 dark:hover:text-rose-400 transition-colors'
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
