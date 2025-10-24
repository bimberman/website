import { Link } from "react-router-dom";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ScrollDownArrow from "../assets/icons/ScrollDownArrow";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handlePreviewClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setSelectedProject(url);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);
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
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollDownArrow />
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
          
          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onPreviewClick={handlePreviewClick}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Preview Modal */}
      {selectedProject && (
        <aside
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClosePreview}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] m-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={handleClosePreview}
              aria-label="Close preview"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={selectedProject}
              className="w-full h-full rounded-lg"
              title="Project Preview"
              loading="lazy"
            />
          </div>
        </aside>
      )}
    </main>
  );
};

export default Home;
