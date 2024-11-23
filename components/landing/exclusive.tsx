'use client';
import { useState } from 'react';
const features = [
  {
    title: "Exclusive Early Access",
    description: "Join the Toonie Token ICO and secure your tokens at the initial offering price, positioning yourself for future growth as Toonie expands its services across Canada and the US.",
    image: '/1.jpg', 
    color: '#002EFF', 
  },
  {
    title: "Seamless Participation",
    description: "Participate in the Toonie Token ICO directly through our platform with a simple, secure process tailored for both new and experienced investors.",
    image: '/2.jpg', 
    color: '#5D675B', 
  },
  {
    title: "Strategic Investment",
    description: "Toonie Tokens are designed to offer utility within our platform, providing holders with benefits such as reduced transaction fees, staking rewards, and early access to new features.",
    image: '/3.jpg',
    color: '#6C8A9C', 
  },
  {
    title: "Trust and Compliance",
    description: "Our ICO adheres to rigorous security standards and regulatory guidelines, ensuring a safe and compliant investment environment for participants in Canada, the US, and beyond.",
    image: '/3.jpg',
    color: '#70544F', 
  },
];

export default function Exclusive() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <div className="container bg-black text-white mt-[200px]">
      <div className="block relative container flex flex-col">
        <ul className="space-y-1 md:space-y-1 mt-[30px]">
          {features.map((feature, index) => (
            <li
              key={index}
              onMouseEnter={() => setBackgroundImage(feature.image)}
              onMouseLeave={() => setBackgroundImage(null)}
              className={`w-full py-8 px-4 flex items-center cursor-pointer transition duration-300 bg-[${feature.color}] hover:bg-[${feature.color}] `}>
              <h2 className='text-white text-[35px] leading-[100px] w-[800px] overflow-hidden text-ellipsis whitespace-normal font-sans'>{feature.title}</h2>
              <p className="mt-2 max-w-md mx-auto text-gray-300">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
