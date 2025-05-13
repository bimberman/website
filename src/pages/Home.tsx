import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm Ben
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          A Full Stack Developer passionate about building modern web
          applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
