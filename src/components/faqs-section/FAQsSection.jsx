'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { FAQAccordion } from './FAQAccordion';
import { SearchBar } from './SearchBar';
import { ContactCTA } from './ContactCTA';

const faqCategories = [
  {
    id: 'general',
    name: 'General Information',
    icon: '📅',
    questions: [
      {
        question:
          'When and where is the Madhya Pradesh Art Festival 2025 happening?',
        answer:
          'The festival will be held on February 21-23, 2025, at Gandhi Hall, Indore, from 10 AM to 10 PM.',
      },
      {
        question: 'Is there an entry fee for visitors?',
        answer: 'No, entry is completely free for visitors!',
      },
    ],
  },
  {
    id: 'registration',
    name: 'Registration & Participation',
    icon: '🖌',
    questions: [
      {
        question: 'How can I participate in competitions?',
        answer:
          'Register via the official form here: https://forms.gle/Lg4yGT8GPBVYSRmT6.',
      },
      {
        question: 'Who can participate in the festival?',
        answer:
          'Artists, performers, photographers, writers, and art enthusiasts from all backgrounds are welcome!',
      },
    ],
  },
  {
    id: 'attractions',
    name: 'Event Attractions',
    icon: '🎶',
    questions: [
      {
        question: 'What kind of performances will be there?',
        answer:
          'The festival includes live music, poetry, dance, art exhibitions, and stand-up comedy.',
      },
    ],
  },
  {
    id: 'sponsorship',
    name: 'Sponsorship & Stalls',
    icon: '🏪',
    questions: [
      {
        question: 'How can I book a stall for my artwork or products?',
        answer:
          'Contact Pushkar Soni at +91 75099 22082 or email Director@kalastambh.com.',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Accessibility',
    icon: '🅿️',
    questions: [
      {
        question: 'Is parking available at the venue?',
        answer: 'Yes, ample parking space is available near the venue.',
      },
    ],
  },
];

export function FAQsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqCategories
    .map(category => ({
      ...category,
      questions: category.questions.filter(
        q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => category.questions.length > 0);

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 py-16 dark:from-gray-900 dark:to-indigo-900'>
      <div className='absolute inset-0 z-0'>
        <svg
          className='h-full w-full opacity-10'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 1000'
          preserveAspectRatio='none'
        >
          <defs>
            <pattern
              id='questionPattern'
              patternUnits='userSpaceOnUse'
              width='100'
              height='100'
            >
              <text
                x='50'
                y='50'
                fontSize='40'
                fill='currentColor'
                textAnchor='middle'
                dominantBaseline='central'
              >
                ?
              </text>
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#questionPattern)' />
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
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FAQAccordion categories={filteredFAQs} />
          <ContactCTA />
        </motion.div>
      </div>
    </section>
  );
}
