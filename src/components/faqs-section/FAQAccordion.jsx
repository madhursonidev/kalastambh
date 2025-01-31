'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion({ categories }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleCategory = categoryId => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (categoryId, questionIndex) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${categoryId}-${questionIndex}`]:
        !prev[`${categoryId}-${questionIndex}`],
    }));
  };

  return (
    <div className='space-y-6'>
      {categories.map(category => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800'
        >
          <button
            onClick={() => toggleCategory(category.id)}
            className='flex w-full items-center justify-between p-4 text-left text-lg font-semibold'
          >
            <span className='flex items-center'>
              <span className='mr-2 text-2xl'>{category.icon}</span>
              {category.name}
            </span>
            <ChevronDown
              className={`h-6 w-6 transform transition-transform ${
                openCategory === category.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openCategory === category.id && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden'
              >
                {category.questions.map((faq, index) => (
                  <div
                    key={index}
                    className='border-t border-gray-200 dark:border-gray-700'
                  >
                    <button
                      onClick={() => toggleQuestion(category.id, index)}
                      className='flex w-full items-center justify-between p-4 text-left'
                    >
                      <span className='font-medium'>{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform ${
                          openQuestions[`${category.id}-${index}`]
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestions[`${category.id}-${index}`] && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className='overflow-hidden'
                        >
                          <p className='p-4 text-gray-600 dark:text-gray-300'>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
