'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';

const navItems = [
  // { href: '/', label: 'Home 🏠' },
  // { href: '/about', label: 'About Kalastambh ℹ️' },
  // {
  //   href: '#',
  //   label: 'MP Art Festival 🎨',
  //   dropdown: [
  //     { href: '/mp-art-festival/about', label: 'About' },
  //     { href: '/mp-art-festival/schedule', label: 'Schedule' },
  //     { href: '/mp-art-festival/attractions', label: 'Attractions' },
  //   ],
  // },
  // { href: '/event-highlights', label: 'Event Highlights 🎭' },
  // { href: '/artist-showcase', label: 'Artist Showcase 🎶' },
  {
    href: '/gallery',
    label: 'Gallery',
  },
  // { href: '/blog', label: 'Blog & News 📰' },
  // { href: '/faq', label: 'FAQs ❓' },
  // { href: '/contact', label: 'Contact Us 📩' },
];

const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Youtube, label: 'YouTube' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white bg-opacity-90 shadow-md backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-90`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex h-20 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src='/images/kalastambh-icon.png'
                alt='Kalastambh Logo'
                width={40}
                height={40}
                className='rounded-full'
              />
            </motion.div>
            <div>
              <Image
                src='/images/KALASTAMBH-LOGO.webp'
                alt='Kalastambh Logo'
                width={300}
                height={200}
                className='rounded-full'
              />
            </div>
          </Link>

          {/* <nav className='hidden lg:flex items-center space-x-4'>
            {navItems.map(item =>
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className='flex items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'>
                    {item.label} <ChevronDown className='ml-1 h-4 w-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown.map(subItem => (
                      <DropdownMenuItem key={subItem.label}>
                        <Link href={subItem.href} className='w-full'>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                >
                  {item.label}
                </Link>
              )
            )}
          </nav> */}

          <div className='hidden lg:flex items-center space-x-4'>
            {/* Remove after other navigation implementations */}
            {navItems.map(item =>
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className='flex items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'>
                    {item.label} <ChevronDown className='ml-1 h-4 w-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown.map(subItem => (
                      <DropdownMenuItem key={subItem.label}>
                        <Link href={subItem.href} className='w-full'>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                >
                  {item.label}
                </Link>
              )
            )}
            {/* Remove after other navigation implementations */}

            <Button className='bg-rose-600 hover:bg-rose-700 text-white'>
              Register Now
            </Button>
          </div>

          <button
            className='lg:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-white dark:bg-gray-900'
          >
            <div className='container mx-auto px-4 py-4 space-y-4'>
              {navItems.map(item => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className='flex items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'>
                        {item.label} <ChevronDown className='ml-1 h-4 w-4' />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.dropdown.map(subItem => (
                          <DropdownMenuItem key={subItem.label}>
                            <Link href={subItem.href} className='w-full'>
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className='block text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                <Button className='w-full bg-rose-600 hover:bg-rose-700 text-white'>
                  Register Now
                </Button>
              </div>
              <div className='flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700'>
                <div className='relative flex-1 mr-2'>
                  <Input
                    type='search'
                    placeholder='Search...'
                    className='pl-8 pr-2 py-1 w-full rounded-full text-sm'
                  />
                  <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                </div>
                <Button variant='ghost' size='icon'>
                  <Globe className='h-5 w-5' />
                </Button>
              </div>
              <div className='flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                {socialLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                  >
                    <Image
                      src={link.icon || '/placeholder.svg'}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
