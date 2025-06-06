'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MotionLi({ href, label }) {
  return (
    <motion.li whileHover={{ x: 5 }}>
      <Link
        href={href}
        className='hover:text-rose-600 dark:hover:text-rose-400 transition-colors'
      >
        {label}
      </Link>
    </motion.li>
  );
}
