// components/Title.tsx
import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    fontSize?: string; // Prop for dynamic font size
    lheight?: string; // Prop for dynamic font size
}


const Title: React.FC<TitleProps> = ({ children , fontSize, lheight = '80px' }) => {
    return (
      <h2 className='text-white font-bold text-[75px] leading-[120px] max-w-[1200px] overflow-hidden text-ellipsis whitespace-normal font-sans' style={{ fontSize , lineHeight:lheight }}>{children}</h2>
    );
  };
  
  export default Title;
  