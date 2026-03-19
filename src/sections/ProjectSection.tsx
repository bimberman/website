import React from 'react';
import { Project } from '../data/projects';

interface ProjectSectionProps {
  project: Project;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-end pr-4 lg:pr-8 xl:pr-12">
      <div className="bg-white/95 dark:bg-gray-800/95 rounded-xl p-6 max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in shadow-lg project-card transform skew-y-3 hover:skew-y-0 transition-transform duration-300">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Project Preview</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
