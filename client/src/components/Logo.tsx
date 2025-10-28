import React from 'react';

// Modern, animated, gradient logo for E-Store
const Logo: React.FC = () => {
  return (
    <span
      className="text-2xl sm:text-3xl font-extrabold gradient-text float select-none tracking-tight"
      style={{
        letterSpacing: '-0.03em',
      }}
      aria-label="E-Store logo"
    >
      E-<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 animate-pulse">Store</span>
    </span>
  );
};

export default Logo; 