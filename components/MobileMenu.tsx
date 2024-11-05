// components/MobileMenu.tsx
'use client';
import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
            <button
                onClick={onClose}
                className="text-white text-[30px] absolute top-10 right-10"
            >
                ✕
            </button>
            <nav className="flex flex-col ml-10 items-left space-y-10 text-[60px] mt-[130px]">
                <Link href="/wealth" className="text-[40px] font-bold" onClick={onClose}>
                    WEALTH
                </Link>
                <Link href="/money" className="text-[40px] font-bold" onClick={onClose}>
                    MONEY
                </Link>
                <Link href="/get-toonie" className="text-[40px] font-bold" onClick={onClose}>
                    GET TOONIE
                </Link>
                <Link href="/career" className="text-[40px] font-bold" onClick={onClose}>
                    CAREER
                </Link>
                <Link href="/about" className="text-[40px] font-bold" onClick={onClose}>
                    ABOUT
                </Link>
                <div className="flex flex-col items-center mr-10 space-y-8 pt-[120px]">
                    <button className="text-[20px] tracking-widest">LOGIN</button>
                    <button className="p-5 text-[20px] font-semibold border border-toonie rounded-full hover:bg-blue-500 transition duration-200 ease-in-out">
                    Get Started →
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;
