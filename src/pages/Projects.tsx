import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  githubLink: string;
  isMobileFriendly?: boolean;
  previewImages?: string[];
}

const Projects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePreviewClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setPreviewUrl(url);
  };

  const handleClosePreview = () => {
    setPreviewUrl(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking the overlay itself, not its children
    if (e.target === e.currentTarget) {
      handleClosePreview();
    }
  };

  const projects: Project[] = [
    {
      title: "PDF Reader",
      description:
        "A web application that allows users to upload and read PDF files. Features include file upload, PDF rendering, and basic navigation controls.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/images/project-previews/pdf-reader/initial-screen.png",
      link: "http://192.168.1.79:5253",
      githubLink: "https://github.com/bimberman/pdf-scanner",
      isMobileFriendly: false,
      previewImages: [
        "/images/project-previews/pdf-reader/initial-screen.png",
        "/images/project-previews/pdf-reader/upload-documents.png",
        "/images/project-previews/pdf-reader/preview-documents.png",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS. Features a responsive design, dark mode support, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/images/project-previews/portfolio/portfolio.jpg",
      link: "https://bimberman.github.io",
      githubLink: "https://github.com/bimberman/portfolio",
    },
    {
      title: "Task Manager",
      description:
        "A task management application that helps users organize their daily tasks. Features include task creation, editing, deletion, and categorization.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/images/project-previews/task-manager/task-manager.jpg",
      link: "https://task-manager-demo.com",
      githubLink: "https://github.com/bimberman/task-manager",
    },
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/images/project-previews/project-one/project-one.jpg",
      link: "#",
      githubLink: "https://github.com/bimberman/project-one",
    },
    {
      title: "Project Two",
      description: "An AI-powered data analysis tool",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      image: "/images/project-previews/project-two/project-two.jpg",
      link: "#",
      githubLink: "https://github.com/bimberman/project-two",
    },
    {
      title: "Project Three",
      description: "A real-time collaboration platform",
      technologies: ["Next.js", "WebSocket", "PostgreSQL"],
      image: "/images/project-previews/project-three/project-three.jpg",
      link: "#",
      githubLink: "https://github.com/bimberman/project-three",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onPreviewClick={handlePreviewClick}
            />
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-6xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project Preview
              </h3>
              <button
                onClick={handleClosePreview}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
            </div>
            <div className="flex-grow">
              <iframe
                src={previewUrl}
                className="w-full h-full rounded-b-lg"
                title="Project Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
