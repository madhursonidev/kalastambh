'use client';

import { motion } from 'framer-motion';

export function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='overflow-hidden rounded-lg shadow-lg'
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2140872993737!2d75.86436947592848!3d22.72028272754016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1246ae310b%3A0x2bf544615bbb4407!2sGandhi%20Hall!5e0!3m2!1sen!2sin!4v1738339597464!5m2!1sen!2sin'
        width='100%'
        height='300'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </motion.div>
  );
}
