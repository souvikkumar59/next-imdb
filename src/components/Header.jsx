import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <div className='flex justify-between items-center mx-auto max-w-6xl p-4 bg-gray-900 text-white'>
      {/* Logo Section */}
      <div className='gap-5 flex items-center'>
        
      <Link href='/' className='flex items-center text-2xl font-bold'>
        <span className='bg-yellow-600 rounded-md py-1 px-3 text-black'>IMDb</span>
        <span className='ml-1'>Clone</span>
      </Link>
      <DarkModeSwitch/>
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className='flex gap-6'>
          <li>
            <Link href='/' className='hover:text-yellow-500 transition duration-300'>Home</Link>
          </li>
          <li>
            <Link href='/signup' className='hover:text-yellow-500 transition duration-300'>Signup</Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-yellow-500 transition duration-300'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
