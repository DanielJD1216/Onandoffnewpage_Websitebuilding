
import React, { forwardRef } from 'react';

interface HardCoverProps {
  children?: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const HardCover = forwardRef<HTMLDivElement, HardCoverProps>(({ children, className, isActive }, ref) => {
  return (
    <div className={`page hard bg-[#114B3F] text-[#ECEBE3] shadow-lg ${className}`} ref={ref}>
      <div className={`w-full h-full flex flex-col justify-center items-center p-6 md:p-10 text-center transition-opacity duration-700 ease-in-out delay-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
});

export default HardCover;