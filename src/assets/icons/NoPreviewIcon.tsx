import React from "react";

interface IconProps {
  className?: string;
}

const NoPreviewIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {/* Eye icon - same as PreviewIcon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
      {/* Red line across the eye */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M4 4l16 16"
        stroke="#ef4444"
        className="text-red-500"
      />
    </svg>
  );
};

export default NoPreviewIcon;
