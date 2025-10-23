import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handlePreviewClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setSelectedProject(url);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A collection of my recent work and personal projects
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onPreviewClick={handlePreviewClick}
            />
          ))}
        </section>

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
      </div>
    </main>
  );
};

export default Projects;
