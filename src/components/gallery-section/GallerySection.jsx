'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { PhotoGallery } from './PhotoGallery';
import { VideoGallery } from './VideoGallery';
import { InteractiveFeatures } from './InteractiveFeatures';
import { CallToAction } from './CallToAction';
import { LightboxModal } from './LightboxModal';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className='bg-gradient-to-br from-purple-50 to-indigo-100 py-16 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-16'
        >
          <SectionHeader />
          <PhotoGallery onImageClick={setSelectedImage} />
          <VideoGallery />
          <InteractiveFeatures />
          <CallToAction />
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
