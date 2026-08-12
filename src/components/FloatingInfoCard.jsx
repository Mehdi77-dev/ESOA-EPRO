import React from 'react';

const FloatingInfoCard = ({ icon, label, sublabel, className = '', delay = '0s' }) => {
  return (
    <div
      className={`bg-white rounded-[18px] shadow-[0_8px_30px_rgba(11,39,71,0.08)] px-4 py-3.5 flex items-center gap-3.5 animate-hero-card ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-[16px]">{label}</span>
        {sublabel && <span className="text-[#0B2747] font-medium text-[14px] leading-tight">{sublabel}</span>}
      </div>
    </div>
  );
};

export default FloatingInfoCard;
