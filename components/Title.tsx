// components/Title.tsx
import React from 'react';

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
      <h2 className='text-white font-bold text-[65px] max-w-[700px] overflow-hidden text-ellipsis whitespace-normal font-sans'>{children}</h2>
    );
  };
  
  export default Title;
  