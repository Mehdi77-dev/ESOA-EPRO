import React from 'react';

const TrustBadge = ({ text = "Établissement privé accrédité par l'État" }) => {
  return (
    <div className="flex items-center gap-2.5 mt-7 animate-hero-fade-up" style={{ animationDelay: '0.5s' }}>
      <div className="w-5 h-5 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-500 text-sm font-medium">{text}</span>
    </div>
  );
};

export default TrustBadge;
