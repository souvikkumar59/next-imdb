
"use client"
import { useState } from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-gray-900 text-white shadow-md'>
      <div className='flex justify-between items-center mx-auto max-w-6xl p-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center text-2xl font-bold'>
          <span className='bg-yellow-600 rounded-md py-1 px-3 text-black'>Movie</span>
          <span className='ml-1'>Philic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6'>
          <Link href='/' className='hover:text-yellow-500 transition duration-300'>Home</Link>
          <Link href='/about' className='hover:text-yellow-500 transition duration-300'>About</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in' className='hover:text-yellow-500 transition duration-300'>Sign in</Link>
          </SignedOut>
        </nav>

        {/* Right Section (Dark Mode Toggle & Mobile Menu) */}
        <div className='flex items-center gap-4'>
          <DarkModeSwitch />

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-xl'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className='md:hidden bg-gray-800 text-center py-4'>
          <ul className='flex flex-col gap-4'>
            <li><Link href='/' onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href='/about' onClick={() => setMenuOpen(false)}>About</Link></li>
            <SignedIn>
              <li><UserButton /></li>
            </SignedIn>
            <SignedOut>
              <li><Link href='/sign-in' onClick={() => setMenuOpen(false)}>Sign in</Link></li>
            </SignedOut>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
