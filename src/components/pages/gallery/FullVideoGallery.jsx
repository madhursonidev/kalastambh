'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { PlayCircle } from 'lucide-react';

const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Event Highlights 2024',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Artist Interview: Maya Rao',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Live Performance: Fusion Band',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Behind the Scenes: Art Installation',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Workshop: Traditional Painting Techniques',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Dance Performance: Classical Fusion',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Artist Talk: Contemporary Sculpture',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/300/200',
    title: 'Festival Atmosphere: Day 1 Recap',
  },
  // Add more videos here to showcase a larger gallery
];

export function FullVideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className='space-y-8'>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {videos.map(video => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative overflow-hidden rounded-lg shadow-lg'
          >
            <img
              src={video.thumbnail || 'https://picsum.photos/300/200'}
              alt={video.title}
              className='w-full cursor-pointer object-cover'
              onClick={() => setActiveVideo(video.url)}
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100'>
              <PlayCircle className='h-16 w-16 text-white' />
            </div>
            <p className='mt-2 text-center text-sm font-medium'>
              {video.title}
            </p>
          </motion.div>
        ))}
      </div>
      {activeVideo && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative w-full max-w-4xl'>
            <button
              className='absolute -top-10 right-0 text-white'
              onClick={() => setActiveVideo(null)}
            >
              Close
            </button>
            <ReactPlayer
              url={activeVideo}
              width='100%'
              height='100%'
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
}
