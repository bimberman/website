import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const transitionDuration = 1000; // 3 minutes transition
    setIsTransitioning(true);

    // Add a class to trigger transitions
    document.documentElement.classList.add("theme-transitioning");

    // Update localStorage and document class when theme changes
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Use requestAnimationFrame to ensure the transition is triggered
    requestAnimationFrame(() => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    // Reset transition state after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.classList.remove("theme-transitioning");
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [isDark]);

  const toggleTheme = () => {
    if (!isTransitioning) {
      setIsDark((prev) => !prev);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
