'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Upload, Save, ArrowRight, ArrowLeft } from 'lucide-react';

export function RegistrationForm({ category }) {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert('Registration submitted successfully!');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800'
    >
      <h3 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200'>
        Register as {category}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                >
                  Full Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type='text'
                  id='name'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                />
                {errors.name && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                >
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type='email'
                  id='email'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                />
                {errors.email && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                >
                  Phone Number
                </label>
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                  })}
                  type='tel'
                  id='phone'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                />
                {errors.phone && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className='space-y-4'>
              {category === 'participant' && (
                <div>
                  <label
                    htmlFor='competition'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Competition Category
                  </label>
                  <select
                    {...register('competition', {
                      required: 'Competition category is required',
                    })}
                    id='competition'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  >
                    <option value=''>Select a category</option>
                    <option value='dance'>Dance</option>
                    <option value='painting'>Painting</option>
                    <option value='photography'>Photography</option>
                    <option value='rangoli'>Rangoli</option>
                    <option value='mehndi'>Mehndi</option>
                  </select>
                  {errors.competition && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.competition.message}
                    </p>
                  )}
                </div>
              )}
              {(category === 'artist' || category === 'vendor') && (
                <div>
                  <label
                    htmlFor='requirements'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Special Requirements
                  </label>
                  <textarea
                    {...register('requirements')}
                    id='requirements'
                    rows={4}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  ></textarea>
                </div>
              )}
              {(category === 'artist' || category === 'vendor') && (
                <div>
                  <label
                    htmlFor='portfolio'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Upload Portfolio (PDF, max 10MB)
                  </label>
                  <div className='mt-1 flex items-center'>
                    <input
                      {...register('portfolio')}
                      type='file'
                      id='portfolio'
                      accept='.pdf'
                      className='hidden'
                    />
                    <label
                      htmlFor='portfolio'
                      className='flex cursor-pointer items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    >
                      <Upload className='mr-2 h-5 w-5' />
                      Upload File
                    </label>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div className='flex justify-between'>
          {step > 1 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='button'
              onClick={prevStep}
              className='flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            >
              <ArrowLeft className='mr-2 h-5 w-5' />
              Previous
            </motion.button>
          )}
          {step < 2 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='button'
              onClick={nextStep}
              className='ml-auto flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Next
              <ArrowRight className='ml-2 h-5 w-5' />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='submit'
              className='ml-auto flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            >
              Submit Registration
            </motion.button>
          )}
        </div>
      </form>
      <div className='mt-4 flex justify-between'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='button'
          className='flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        >
          <Save className='mr-2 h-5 w-5' />
          Save Progress
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='button'
          className='flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Resume Later
        </motion.button>
      </div>
    </motion.div>
  );
}
