'use client';

import { useState, useEffect } from 'react';
import { LogoColumn } from './footer/LogoColumn';
import { QuickLinksColumn } from './footer/QuickLinksColumn';
import { ContactInfoColumn } from './footer/ContactInfoColumn';
import { SocialMediaColumn } from './footer/SocialMediaColumn';
import { CopyrightSection } from './footer/CopyrightSection';
import { DarkModeToggle } from './footer/DarkModeToggle';
import { ScrollToTopButton } from './footer/ScrollToTopButton';

export function FooterSection() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <footer className='bg-gradient-to-br from-amber-50 to-rose-100 dark:from-gray-900 dark:to-rose-900 text-gray-800 dark:text-gray-200'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <LogoColumn />
          <QuickLinksColumn />
          <ContactInfoColumn />
          <SocialMediaColumn />
        </div>
      </div>
      <CopyrightSection />
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ScrollToTopButton />
    </footer>
  );
}
