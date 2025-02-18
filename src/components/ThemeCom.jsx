
'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='bg-slate-300 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen'>
        {children}
      </div>
    </ThemeProvider>
  );
}