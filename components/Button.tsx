// components/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline'; // Type for button variant
  href?: string; // Optional for Link support
  onClick?: () => void; // Optional click handler
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'solid', href, onClick }) => {
  const baseStyles = 'text-white border-1.5 border-toonie text-lg py-4 px-8 mt-20 rounded-full transition duration-300';
  const solidStyles = 'bg-toonie hover:bg-black';
  const outlineStyles = 'bg-black hover:bg-toonie hover:text-white';

  const combinedStyles = `${baseStyles} ${variant === 'solid' ? solidStyles : outlineStyles}`;

  return href ? (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  ) : (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
