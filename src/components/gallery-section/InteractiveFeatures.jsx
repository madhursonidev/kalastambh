'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, MessageCircle } from 'lucide-react';

export function InteractiveFeatures() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  return (
    <div className='flex justify-center space-x-8'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='flex items-center space-x-2'
        onClick={() => setLikes(likes + 1)}
      >
        <Heart className='h-6 w-6 text-red-500' />
        <span>{likes} Likes</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='flex items-center space-x-2'
      >
        <Share2 className='h-6 w-6 text-blue-500' />
        <span>Share</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='flex items-center space-x-2'
        onClick={() => setComments(comments + 1)}
      >
        <MessageCircle className='h-6 w-6 text-green-500' />
        <span>{comments} Comments</span>
      </motion.button>
    </div>
  );
}
