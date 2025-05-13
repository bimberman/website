import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Hi, I'm Ben
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            A Full Stack Developer passionate about building modern web
            applications
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
