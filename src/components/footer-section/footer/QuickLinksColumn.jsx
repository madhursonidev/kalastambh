'use client';

import dynamic from 'next/dynamic';

const MotionLi = dynamic(() => import('./MotionLi'), { ssr: false });

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
          <MotionLi key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </div>
  );
}
