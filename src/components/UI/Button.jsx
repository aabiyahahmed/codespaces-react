import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    // Primary color HEX #4F46E5 
    primary: 'bg-[#4F46E5] text-white hover:bg-indigo-700',
    
    outline: 'border border-gray-300 text-gray-600 hover:bg-gray-50',
    ghost: 'text-gray-500 hover:bg-gray-100'
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-sm ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;