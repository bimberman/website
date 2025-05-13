import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Ben. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/bimberman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ben-imberman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
