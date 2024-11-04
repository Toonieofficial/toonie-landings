// components/Header.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
const [hovered, setHovered] = useState(false); 
  return (
    <header className="sticky flex justify-between items-center mt-8 top-10 z-50">
      <div className="container bg-black flex justify size-auto items-center rounded-full ml-auto text-white py-5 px-6" style={{border:'1.5px solid white' , }}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/Union.png" alt="Toonie Logo" width={170} height={30} />
        </Link>
        
        {/* Navigation Links */}
        <nav className="w-full hidden md:flex space-x-[55px] ml-10 text-white font-medium">
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
              className="absolute top-4 left-0 mt-1 w-[300px] bg-gray-800 text-white rounded-lg shadow-lg py-5"
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
