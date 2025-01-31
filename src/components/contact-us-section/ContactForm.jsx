'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { Textarea } from 'src/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'
    >
      <h3 className='mb-4 text-2xl font-semibold text-rose-600 dark:text-rose-400'>
        Contact Form
      </h3>
      {isSubmitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-green-600 dark:text-green-400'
        >
          Thank you! We'll get back to you soon.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input type='text' placeholder='Name' required />
          <Input type='email' placeholder='Email Address' required />
          <Input type='tel' placeholder='Phone Number (Optional)' />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Subject' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='general'>General Inquiry</SelectItem>
              <SelectItem value='participation'>Participation</SelectItem>
              <SelectItem value='sponsorship'>Sponsorship</SelectItem>
              <SelectItem value='media'>Media</SelectItem>
              <SelectItem value='others'>Others</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder='Your Message' required />
          <div className='flex items-center space-x-2'>
            <Input type='file' id='file-upload' className='hidden' />
            <Button type='button' variant='outline' asChild>
              <label htmlFor='file-upload' className='cursor-pointer'>
                <Upload className='mr-2 h-4 w-4' />
                Attach File
              </label>
            </Button>
            <span className='text-sm text-gray-500'>
              Optional: Attach portfolio or proposal
            </span>
          </div>
          <Button type='submit' className='w-full'>
            Send Message
          </Button>
        </form>
      )}
    </motion.div>
  );
}
