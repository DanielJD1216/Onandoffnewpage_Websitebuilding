import React, { forwardRef } from 'react';

interface FlipbookCoverProps {
  children?: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const FlipbookCover = forwardRef<HTMLDivElement, FlipbookCoverProps>(
  ({ children, className = '', isActive = false }, ref) => {
    return (
      <div 
        className={`page hard bg-brand-green text-brand-ivory shadow-lg ${className}`} 
        ref={ref}
      >
        <div 
          className={`
            w-full h-full flex flex-col justify-center items-center 
            p-6 md:p-10 text-center transition-opacity duration-700 
            ease-in-out delay-200 
            ${isActive ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {children}
        </div>
      </div>
    );
  }
);

FlipbookCover.displayName = 'FlipbookCover';

export default FlipbookCover;