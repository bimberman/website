const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="flex gap-6" aria-label="Social media links">
            <a
              href="https://github.com/bimberman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ben-imberman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
