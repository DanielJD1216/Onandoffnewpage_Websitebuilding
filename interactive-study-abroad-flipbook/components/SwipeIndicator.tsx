import React from 'react';

const SwipeIndicator: React.FC = () => {
  return (
    <div
      className="absolute z-50 top-1/2 right-4 flex flex-col items-center justify-center text-[#114B3F] pointer-events-none animate-swipe-indicator"
      aria-hidden="true"
    >
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
      <p className="font-poppins font-semibold text-xs mt-1">Swipe</p>
    </div>
  );
};

export default SwipeIndicator;
