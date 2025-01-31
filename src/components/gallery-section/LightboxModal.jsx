'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

export function LightboxModal({ imageUrl, onClose }) {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(scale + 0.1);
  const handleZoomOut = () => setScale(Math.max(0.5, scale - 0.1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
      >
        <motion.div
          className='relative max-h-[90vh] max-w-[90vw]'
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <motion.img
            src={imageUrl}
            alt='Fullscreen view'
            style={{ scale }}
            className='max-h-full max-w-full object-contain'
          />
          <button
            className='absolute -top-12 right-0 text-white'
            onClick={onClose}
          >
            <X className='h-8 w-8' />
          </button>
          <div className='absolute bottom-4 right-4 flex space-x-4'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleZoomIn}
              className='rounded-full bg-white p-2 text-black'
            >
              <ZoomIn className='h-6 w-6' />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleZoomOut}
              className='rounded-full bg-white p-2 text-black'
            >
              <ZoomOut className='h-6 w-6' />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
