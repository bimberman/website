import React from "react";
import SunIcon from "../assets/icons/SunIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme, isTransitioning } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-600 theme-transition"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className={`absolute top-1 left-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
          !isDark ? "translate-x-7 rotate-180" : "translate-x-0 rotate-0"
        }`}
      >
        <div
          className={`transition-opacity duration-300 ${
            !isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          <SunIcon />
        </div>
        <div
          className={`absolute transition-opacity duration-300 ${
            !isDark ? "opacity-0" : "opacity-100"
          }`}
        >
          <MoonIcon />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
