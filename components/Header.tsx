// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <header className="sticky flex justify-between items-center mt-8 top-10 z-50">
      <div className="container bg-black flex justify size-auto items-center rounded-full ml-auto text-white py-5 px-6" style={{border:'1.5px solid white' , }}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/Union.png" alt="Toonie Logo" width={110} height={30} />
        </Link>
        
        {/* Navigation Links */}
        <nav className="w-full hidden md:flex space-x-[45px] ml-8 text-white font-medium">
          <Link href="/about" className="text-white text-[15px] hover:text-toonie transition duration-200">
            About Us
          </Link>
          <Link href="/about" className="text-white text-[15px] hover:text-toonie transition duration-200">
            Wealth
          </Link>
          <Link href="/contact" className="text-white text-[15px] hover:text-toonie transition duration-200">
            Career
          </Link>
          <Link href="/services" className="text-white text-[15px] hover:text-toonie transition duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-white text-[15px] hover:text-toonie transition duration-200">
            Contact
          </Link>
          <Link href="/contact" className="text-white text-[15px] hover:text-toonie transition duration-200">
            Get Toonie
          </Link>
        </nav>
        
      </div>
      <div className="flex items-center mr-auto ml-3 space-x-4">
          <Link href="/login" className="text-white bg-black text-lg py-5 px-9 rounded-full hover:bg-toonie hover:text-white transition duration-300" style={{border:'1.5px solid white' , }}>
            Login
          </Link>
          <Link href="/signup" className="text-white bg-black bg-toonie text-lg py-5 px-9 rounded-full hover:bg-blue-900 transition duration-300">
            Get Started
          </Link>
        </div>
    </header>
  );
}
