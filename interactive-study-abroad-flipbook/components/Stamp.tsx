
import React from 'react';

const Stamp = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 transform opacity-90 pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 150 150" className="stamp-animate">
            <circle cx="75" cy="75" r="65" stroke="#A48242" strokeWidth="4" fill="rgba(164, 130, 66, 0.05)" />
            <circle cx="75" cy="75" r="70" stroke="#A48242" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            <text x="75" y="90" className="font-noto-serif" fontSize="36" fill="#A48242" textAnchor="middle" fontWeight="bold">
                $0
            </text>
            <text x="75" y="58" className="font-poppins" fontSize="16" fill="#A48242" textAnchor="middle" fontWeight="600">
                무료 상담
            </text>
        </svg>
    </div>
);

export default Stamp;
