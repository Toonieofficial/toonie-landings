'use client';
import { useState } from 'react';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Cryptocurrency Trading', content: 'Buy, sell, and trade cryptocurrencies with ease and confidence.' },
    { label: 'Financial Management', content: 'Access tools and advice to grow and protect your wealth.' },
    { label: 'Staking & Investment', content: 'Earn rewards and invest smartly with our staking and investment services.' },
    { label: 'Financial Planning', content: 'Plan for your future with personalized financial advice and tools.' },
  ];

  return (
    <div className="flex h-screen mt-[200px]">
      {/* Sidebar for tabs */}
      <div className="w-3/5  flex flex-col items-start space-y-2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveTab(index)}
            className={`cursor-pointer p-4 w-full text-left ${
              activeTab === index ? ' text-toonie' : 'text-white'
            }  hover:text-toonie`}
          >
        <p className={`max-w-[700px] px-2 clear-both text-[45px] z-10 mb-[10px] duration-1000 ease-in-out`}>
            {tab.label}
        </p>
        <p className={`px-2 clear-both text-[18px] z-10 mb-[30px] text-white duration-1000 ease-in-out`}>
            {tab.content}
        </p>
        </div>
        ))}
      </div>

      {/* Content area for active tab */}
      <div className="flex-grow w-2/5 p-8 ">
        <h2 className="text-2xl font-semibold mb-4">{tabs[activeTab].label}</h2>
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default VerticalTabs;
