import React from "react";

interface ScrollDownArrowProps {
  className?: string;
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ 
  className = "w-6 h-6 text-gray-400 dark:text-gray-500" 
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-label="Scroll down"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

export default ScrollDownArrow;
