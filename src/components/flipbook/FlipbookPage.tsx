import React, { forwardRef } from 'react';

interface FlipbookPageProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const FlipbookPage = forwardRef<HTMLDivElement, FlipbookPageProps>(
  ({ children, className = '', isActive = false }, ref) => {
    return (
      <div 
        className={`page bg-white border border-gray-200 ${className}`} 
        ref={ref}
      >
        <div 
          className={`
            w-full h-full flex flex-col justify-center items-center 
            p-6 md:p-10 text-center transition-all duration-700 
            ease-in-out delay-200 
            ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          {children}
        </div>
      </div>
    );
  }
);

FlipbookPage.displayName = 'FlipbookPage';

export default FlipbookPage;