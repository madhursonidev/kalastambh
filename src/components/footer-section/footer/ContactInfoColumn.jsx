'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactInfoColumn() {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
      <ul className='space-y-2'>
        <li className='flex items-start'>
          <MapPin className='mr-2 h-5 w-5 text-rose-600 dark:text-rose-400' />
          <span>Gandhi Hall, Indore, Madhya Pradesh, India</span>
        </li>
        <li className='flex items-start'>
          <Phone className='mr-2 h-5 w-5 text-rose-600 dark:text-rose-400' />
          <div>
            <p>Sapna Katfar (Founder): +91 91791 82244</p>
            <p>Pushkar Soni (Director): +91 75099 22082</p>
          </div>
        </li>
        <li className='flex items-start'>
          <Mail className='mr-2 h-5 w-5 text-rose-600 dark:text-rose-400' />
          <div>
            <p>General: Director@kalastambh.com</p>
            <p>Sponsorship: partnerships@kalastambh.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
