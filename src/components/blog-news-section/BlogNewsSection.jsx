'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { FeaturedArticle } from './FeaturedArticle';
import { BlogGrid } from './BlogGrid';
import { BlogCategories } from './BlogCategories';
import { CTASection } from './CTASection';
import { TrendingArticles } from './TrendingArticles';
import { SearchBar } from './SearchBar';

const categories = [
  { id: 'art-culture', name: 'Art & Culture', icon: '🎨' },
  { id: 'meet-artists', name: 'Meet the Artists', icon: '🎭' },
  { id: 'festival-highlights', name: 'Festival Highlights', icon: '🎶' },
  { id: 'announcements', name: 'Announcements & Updates', icon: '📢' },
  { id: 'media-coverage', name: 'Media Coverage', icon: '📰' },
];

const articles = [
  {
    id: 1,
    title:
      'Unveiling the Madhya Pradesh Art Festival 2025: A Cultural Extravaganza',
    excerpt:
      "Get ready for an immersive experience as we reveal the exciting lineup for this year's festival.",
    image: 'https://picsum.photos/600/400',
    category: 'announcements',
    author: 'Priya Sharma',
    date: '2025-01-15',
  },
  {
    id: 2,
    title: 'In Conversation with Renowned Sculptor Rajesh Patel',
    excerpt:
      "Discover the inspiration behind Patel's latest masterpiece set to debut at the festival.",
    image: 'https://picsum.photos/600/400',
    category: 'meet-artists',
    author: 'Amit Kumar',
    date: '2025-01-18',
  },
  {
    id: 3,
    title: "The Evolution of Madhya Pradesh's Folk Art Scene",
    excerpt:
      'Explore how traditional art forms are being reimagined by contemporary artists.',
    image: 'https://picsum.photos/600/400',
    category: 'art-culture',
    author: 'Sneha Gupta',
    date: '2025-01-20',
  },
  {
    id: 4,
    title: 'Behind the Scenes: Setting Up the Grand Exhibition Hall',
    excerpt:
      'Get an exclusive look at the preparations for our largest exhibition space yet.',
    image: 'https://picsum.photos/600/400',
    category: 'festival-highlights',
    author: 'Rahul Verma',
    date: '2025-01-22',
  },
  {
    id: 5,
    title: 'MP Art Festival Featured in National Geographic Traveller India',
    excerpt:
      'Read about how our festival is putting Madhya Pradesh on the global art map.',
    image: 'https://picsum.photos/600/400',
    category: 'media-coverage',
    author: 'Ananya Desai',
    date: '2025-01-25',
  },
  // Add more articles as needed
];

export function BlogNewsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(
    article =>
      (!selectedCategory || article.category === selectedCategory) &&
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <BlogCategories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <FeaturedArticle article={articles[0]} />
          <BlogGrid articles={filteredArticles.slice(1)} />
          <TrendingArticles articles={articles.slice(0, 5)} />
          <CTASection />
        </motion.div>
      </div>
    </section>
  );
}
