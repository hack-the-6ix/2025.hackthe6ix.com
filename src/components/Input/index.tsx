import React from 'react';
import {  Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'] });

interface InputProps {
  placeholder?: string;
  borderColor?: string;
  inputBackground?: string;
  currentBackground: string;
  className?: string;
  borderWidth?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  borderColor = '#ccc',
  inputBackground = '#fff',
  currentBackground = '#000',
  borderWidth = "4px",
  className
}) => {
  return (
    <div className={`relative ${className}  ${inconsolata.className} font-bold`}>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '6px 12px',
          border: `${borderWidth} solid ${borderColor}`,
          outline: 'none',
          backgroundColor: inputBackground,
          color: borderColor,
        }}
      />
      <div
        className="absolute top-[0px] left-[0px] z-50"
        style={{ backgroundColor: currentBackground, width: borderWidth, height: borderWidth }}
      ></div>
      <div
        className="absolute top-[0px] left-[calc(100%-4px)] z-50"
        style={{ backgroundColor: currentBackground, width: borderWidth, height: borderWidth }}
      ></div>
      <div
        className="absolute top-[calc(100%-4px)] left-[0px] z-50"
        style={{ backgroundColor: currentBackground, width: borderWidth, height: borderWidth }}
      ></div>
      <div
        className="absolute top-[calc(100%-4px)] left-[calc(100%-4px)] z-50"
        style={{ backgroundColor: currentBackground, width: borderWidth, height: borderWidth }}
      ></div>
    </div>
  );
};

export default Input;
