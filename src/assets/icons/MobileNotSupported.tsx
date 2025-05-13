import React from "react";

interface IconProps {
  className?: string;
}

const MobileNotSupported: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <div className="relative">
      <svg
        className={`${className} text-red-500`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="11" strokeWidth="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M8.5 4.5h7a2 2 0 012 2v11a2 2 0 01-2 2h-7a2 2 0 01-2-2v-11a2 2 0 012-2z"
          className="text-gray-900 dark:text-white"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M12 17.5h.01"
          className="text-gray-900 dark:text-white"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className={`${className} text-red-500`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 19L19 5"
          />
        </svg>
      </div>
    </div>
  );
};

export default MobileNotSupported;
