'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from 'src/components/ui/button';

export function QuickAssistance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'
    >
      <h3 className='mb-4 text-2xl font-semibold text-rose-600 dark:text-rose-400'>
        Quick Assistance
      </h3>
      <div className='space-y-4'>
        <Button className='w-full' variant='outline'>
          <MessageCircle className='mr-2 h-4 w-4' />
          WhatsApp Chat
        </Button>
        <Button className='w-full' variant='outline'>
          <MessageCircle className='mr-2 h-4 w-4' />
          Live Chat
        </Button>
      </div>
    </motion.div>
  );
}
