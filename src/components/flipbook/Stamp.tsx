import React from 'react';

const Stamp: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 rotate-12">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-brand-gold flex items-center justify-center">
          <span className="text-brand-gold font-batang font-black text-xs text-center leading-tight">
            무료
            <br />
            상담
          </span>
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-brand-gold/30 animate-pulse" />
      </div>
    </div>
  );
};

export default Stamp;