'use client';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className='text-xl cursor-pointer hover:text-amber-500'
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className='text-xl cursor-pointer hover:text-amber-500'
        />
      )}
    </div>
  );
}
