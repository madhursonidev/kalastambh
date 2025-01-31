'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsorTiers = [
  {
    name: 'Platinum Sponsors',
    sponsors: [
      { name: 'TechCorp', logo: 'https://picsum.photos/300/150' },
      { name: 'ArtistryInc', logo: 'https://picsum.photos/300/150' },
      { name: 'CreativeMinds', logo: 'https://picsum.photos/300/150' },
    ],
  },
  {
    name: 'Gold Sponsors',
    sponsors: [
      { name: 'InnovateNow', logo: 'https://picsum.photos/240/120' },
      { name: 'DesignMasters', logo: 'https://picsum.photos/240/120' },
      { name: 'CultureHub', logo: 'https://picsum.photos/240/120' },
      { name: 'ArtWave', logo: 'https://picsum.photos/240/120' },
    ],
  },
  {
    name: 'Silver Sponsors',
    sponsors: [
      { name: 'LocalArtistry', logo: 'https://picsum.photos/200/100' },
      {
        name: 'CreativeSolutions',
        logo: 'https://picsum.photos/200/100',
      },
      { name: 'ArtSupplyCo', logo: 'https://picsum.photos/200/100' },
      { name: 'DigitalCanvas', logo: 'https://picsum.photos/200/100' },
      { name: 'EventPro', logo: 'https://picsum.photos/200/100' },
    ],
  },
];

export function SponsorShowcase() {
  const [activeSponsor, setActiveSponsor] = useState(null);

  return (
    <div className='space-y-12'>
      {sponsorTiers.map(tier => (
        <div key={tier.name} className='space-y-4'>
          <h3 className='text-2xl font-semibold text-indigo-700 dark:text-indigo-300'>
            {tier.name}
          </h3>
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {tier.sponsors.map(sponsor => (
              <motion.div
                key={sponsor.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center'
                onClick={() => setActiveSponsor(sponsor)}
              >
                <Image
                  src={sponsor.logo || 'https://picsum.photos/300/150'}
                  alt={sponsor.name}
                  width={300}
                  height={150}
                  className='max-h-24 w-auto cursor-pointer object-contain transition-all duration-300 hover:brightness-110'
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
      {activeSponsor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={() => setActiveSponsor(null)}
        >
          <div className='rounded-lg bg-white p-8 dark:bg-gray-800'>
            <Image
              src={activeSponsor.logo || 'https://picsum.photos/400/200'}
              alt={activeSponsor.name}
              width={400}
              height={200}
              className='mb-4 max-h-40 w-auto object-contain'
            />
            <h4 className='text-xl font-semibold'>{activeSponsor.name}</h4>
            <p className='mt-2 text-gray-600 dark:text-gray-300'>
              {activeSponsor.name} is a valued sponsor of the Madhya Pradesh Art
              Festival 2025. Their support helps us bring together artists,
              enthusiasts, and innovators to celebrate creativity and culture.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
