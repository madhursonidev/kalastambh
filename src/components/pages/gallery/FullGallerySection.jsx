'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FullGalleryHeader } from './FullGalleryHeader';
import { FullPhotoGallery } from './FullPhotoGallery';
import { FullVideoGallery } from './FullVideoGallery';
import { LightboxModal } from 'src/components/gallery-section/LightboxModal';

export function FullGallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');

  return (
    <section className='bg-gradient-to-br from-purple-50 to-indigo-100 py-16 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-16'
        >
          <FullGalleryHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === 'photos' ? (
            <FullPhotoGallery onImageClick={setSelectedImage} />
          ) : (
            <FullVideoGallery />
          )}
        </motion.div>
      </div>
      {selectedImage && (
        <LightboxModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
