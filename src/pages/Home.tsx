import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm Ben
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A Full Stack Developer passionate about building modern web
            applications
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </nav>
        </header>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Get to know more about my background and skills
            </p>
          </header>
          <article className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate full-stack developer with a strong foundation in
              modern web technologies. My journey in software development has
              been driven by a constant desire to learn and create meaningful
              applications that solve real-world problems.
            </p>
            <nav>
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </nav>
          </article>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Check out some of my recent work
            </p>
          </header>
          <article className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I've worked on various projects ranging from web applications to
              mobile apps. Each project has helped me grow as a developer and
              learn new technologies.
            </p>
            <nav>
              <Link
                to="/projects"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>
            </nav>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
