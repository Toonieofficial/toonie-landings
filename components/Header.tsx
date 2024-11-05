// components/Header.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
const [hovered, setHovered] = useState(false); 
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
  return (
    <header className="fixed w-full flex justify-between items-center mt-5 top-5 z-50">
      <div className="container w-full md:w-auto bg-black flex top-10 justify size-auto items-center rounded-full ml-auto text-white md:py-5 md:px-6 p-10 border-[1.5px] border-black md:border-[1.5px] md:border-solid md:border-white">
        
        {/* Logo */}
        <Link href="/" className="md:flex absolute left-1/2 transform -translate-x-1/2 md:left-2 md:transform-none md:relative justify justify-center items-center ">
          <Image src="/Union.png" alt="Toonie Logo" width={170} height={30} />
        </Link>
        
        {/* Navigation Links */}
        <nav className="w-full text-[18px] hidden md:flex space-x-[55px] ml-10 text-white font-medium">
        <ul className="flex space-x-10">
        <li 
          className="relative group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button className="hover:text-toonie">
            WEALTH
          </button>

          {/* Submenu */}
          {hovered && (
            <ul 
              className="absolute top-4 left-0 mt-1 w-[300px]  bg-[#262626] text-white rounded-[20px] shadow-lg py-5"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <li className="px-4 py-2 hover:bg-toonie">
                <Link href="/wealth/financial-management">Financial Management</Link>
              </li>
              <li className="px-4 py-2 hover:bg-toonie">
                <Link href="/wealth/insurance">Insurance</Link>
              </li>
              <li className="px-4 py-2 hover:bg-toonie">
                <Link href="/wealth/invesment">Investment</Link>
              </li>
              <li className="px-4 py-2 hover:bg-toonie">
                <Link href="/wealth/tax">Tax</Link>
              </li>
              <li className="px-4 py-2 hover:bg-toonie">
                <Link href="/corporate">Corporate</Link>
              </li>
            </ul>
          )}
        </li>
        {/* Other Menu Items */}
        <li><Link href="/money" className="hover:text-toonie">MONEY</Link></li>
        <li><Link href="/get-toonie" className="hover:text-toonie">GET TOONIE</Link></li>
        <li><Link href="/career" className="hover:text-toonie">CAREER</Link></li>
        <li><Link href="/about" className="hover:text-toonie">ABOUT</Link></li>
      </ul>
        </nav>      
        <button onClick={toggleMenu} className="text-white text-[45px] absolute left-5 md:hidden">
            {isMenuOpen ? '✕' : '☰'}
        </button>
        <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
      <div className="hidden md:flex items-center mr-auto ml-3 space-x-4">
          <Link href="/login" className="hidden md:flex text-white bg-black text-lg py-5 px-9 rounded-full hover:bg-toonie hover:text-white transition duration-300" style={{border:'1.5px solid white' , }}>
            Login
          </Link>
          <Link href="/signup" className="hidden md:flex text-white bg-black bg-toonie text-lg py-5 px-9 rounded-full hover:bg-blue-900 transition duration-300">
            Get Started
          </Link>
      </div>
    </header>
  );
}
