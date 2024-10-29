// components/Title.tsx
import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    fontSize?: string; // Prop for dynamic font size
}


const Title: React.FC<TitleProps> = ({ children , fontSize = '80px' }) => {
    return (
      <h2 className='text-white font-bold text-[80px] leading-[100px] max-w-[700px] overflow-hidden text-ellipsis whitespace-normal font-sans' style={{ fontSize }}>{children}</h2>
    );
  };
  
  export default Title;
  