import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold text-[16px] h-[58px] rounded-[12px] transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-[#0B2747] text-white hover:bg-[#071a30] hover:-translate-y-[2px] shadow-sm hover:shadow-md',
    secondary: 'bg-white text-[#0B2747] border border-[#0B2747] hover:bg-[#f8fafc] hover:-translate-y-[2px] shadow-sm hover:shadow-md',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
