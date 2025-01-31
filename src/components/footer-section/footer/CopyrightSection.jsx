export function CopyrightSection() {
  return (
    <div className='border-t border-gray-200 dark:border-gray-700'>
      <div className='container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm'>
        <p>© 2025 Madhya Pradesh Art Festival. All Rights Reserved.</p>
        <div className='space-x-4 mt-2 sm:mt-0'>
          <a href='#' className='hover:text-rose-600 dark:hover:text-rose-400'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-rose-600 dark:hover:text-rose-400'>
            Terms & Conditions
          </a>
          <a href='#' className='hover:text-rose-600 dark:hover:text-rose-400'>
            Refund Policy
          </a>
        </div>
      </div>
      <div className='text-center text-xs py-2'>
        Designed & Developed by Your Web Agency Name
      </div>
    </div>
  );
}
