import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useTheme();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const linkStyles =
    "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors";
  const activeLinkStyles = "font-bold underline underline-offset-4";

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 dark:border-gray-800/50">
      <header className="flex justify-between items-center h-16 px-6">
        <figure className="w-10">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/headshot.jpg"
              alt="Ben"
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
          </Link>
        </figure>

        {/* Desktop menu */}
        <menu className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`${linkStyles} min-w-[60px] text-center ${
                  location.pathname === item.href ? activeLinkStyles : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </menu>

        {/* Mobile menu button */}
        <aside className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={linkStyles}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </aside>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <menu className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/50">
          <ul className="p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`${linkStyles} block px-3 py-2 rounded-lg ${
                    location.pathname === item.href
                      ? "font-bold bg-gray-100 dark:bg-gray-800"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </menu>
      )}
    </nav>
  );
};

export default Navbar;
