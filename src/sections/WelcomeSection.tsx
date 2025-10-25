import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="text-center text-white max-w-2xl mx-auto px-8 animate-fade-in">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Welcome</h1>
        <p className="text-2xl mb-8 drop-shadow-md">Scroll to explore my portfolio</p>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-1 bg-white mx-auto animate-pulse drop-shadow-md"></div>
          <div className="text-sm opacity-80 animate-bounce">↓ Scroll down to begin ↓</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
