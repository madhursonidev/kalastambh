import { motion } from 'framer-motion';

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-center'
    >
      <h2 className='mb-4 text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl'>
        <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
          About the Madhya Pradesh Art Festival
        </span>
      </h2>
      <p className='mx-auto max-w-3xl text-xl font-light text-gray-600 sm:text-2xl'>
        Celebrating Art, Culture, Literature, Music, and Dance Since 2010
      </p>
    </motion.div>
  );
}
