'use client';
import { useState } from 'react';
import Image from "next/image";
import Title from '@/components/Title';
const features = [
  {
    title: "Secure & Trusted",
    description: "Backed by partnerships with leading Canadian and US financial institutions, we provide bank-level security to protect your assets",
    image: "/1.jpg", // مسیر تصویر اول
  },
  {
    title: "Comprehensive Services",
    description: "From cryptocurrency trading to wealth management, we offer everything you need in one platform",
    image: "/2.jpg", // مسیر تصویر دوم
  },
  {
    title: "User-Centric Design",
    description: "An intuitive, user-friendly platform built to meet your financial needs",
    image: "/3.jpg", // مسیر تصویر سوم
  },
];

export default function WhyToonie() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <div className="container absolute h-screen w-screen bg-black text-white overflow-hidden mt-[200px]">
      <div
        className={`fixed inset-0 justify-center bg-auto bg-top bg-no-repeat transition-all duration-500 ease-in-out ${
          backgroundImage ? "opacity-100" : "opacity-0"
        } 
        ${
          backgroundImage ? "z-100" : "z-0"
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="fixed inset-0 bg-black bg-opacity-10 z-10"></div>

      <div className="relative container z-10 flex flex-col h-full ">
      <p className={`max-w-[600px] px-2 font-bold clear-both text-[75px] z-10 mb-[10px] text-white duration-1000 ease-in-out ${
          backgroundImage ? "opacity-0" : "opacity-100"
        } `}>Why Toonie?</p>
      <p className={`max-w-[600px] px-2 clear-both text-[25px] z-10 mb-[10px] text-zinc-700 duration-1000 ease-in-out ${
          backgroundImage ? "opacity-0" : "opacity-100"
        } `}>A trusted partner for your financial journey in Canada and the US</p>

        <ul className="space-y-1 md:space-y-1 mt-[100px]">
          {features.map((feature, index) => (
            <li
              key={index}
              onMouseEnter={() => setBackgroundImage(feature.image)}
              onMouseLeave={() => setBackgroundImage(null)}
              className="w-full py-10 px-2 flex items-center cursor-pointer transition duration-300 hover:bg-black"
            >
              <h2 className='text-white font-bold text-[55px] leading-[120px] w-[800px] overflow-hidden text-ellipsis whitespace-normal font-sans'>{feature.title}</h2>
              <p className="mt-2 max-w-md mx-auto text-gray-300">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
