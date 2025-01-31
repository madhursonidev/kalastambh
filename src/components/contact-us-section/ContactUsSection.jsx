'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { ContactInformation } from './ContactInformation';
import { ContactForm } from './ContactForm';
import { GoogleMap } from './GoogleMap';
import { SocialMediaLinks } from './SocialMediaLinks';
import { QuickAssistance } from './QuickAssistance';

export function ContactUsSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-100 py-16 dark:from-gray-900 dark:to-rose-900'>
      <div className='absolute inset-0 z-0'>
        <svg
          className='h-full w-full opacity-10'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 1000'
          preserveAspectRatio='none'
        >
          <defs>
            <pattern
              id='artPattern'
              patternUnits='userSpaceOnUse'
              width='100'
              height='100'
            >
              <path
                d='M0 0L100 0L100 100L0 100Z'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
              />
              <circle
                cx='50'
                cy='50'
                r='30'
                fill='currentColor'
                opacity='0.1'
              />
              <path
                d='M20 20L80 80M80 20L20 80'
                stroke='currentColor'
                strokeWidth='1'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#artPattern)' />
        </svg>
      </div>
      <div className='container relative z-10 mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-12'
        >
          <SectionHeader />
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='space-y-8'>
              <ContactInformation />
              <GoogleMap />
              <SocialMediaLinks />
            </div>
            <div className='space-y-8'>
              <ContactForm />
              <QuickAssistance />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
