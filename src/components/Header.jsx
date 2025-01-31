'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 z-50 w-full bg-white bg-opacity-90 shadow-md backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-90'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link
            href='/'
            className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'
          >
            MP Art Festival
          </Link>
          <nav className='hidden md:block'>
            <ul className='flex space-x-4'>
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden'
        >
          <ul className='space-y-2 px-4 py-2'>
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='block py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
