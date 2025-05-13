import React from "react";
import { Project } from "../data/projects";
import { ProjectIcons } from "../data/projectIcons";
import GithubIcon from "../assets/icons/GithubIcon";
import ExternalLinkIcon from "../assets/icons/ExternalLinkIcon";
import PreviewIcon from "../assets/icons/PreviewIcon";
import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  project: Project;
  onPreviewClick: (e: React.MouseEvent, url: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPreviewClick,
}) => {
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col h-full">
      <div className="relative">
        {project.previewImages ? (
          <ImageCarousel images={project.previewImages} className="h-64" />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.icons && (
            <div className="flex gap-2">
              {project.icons.map((iconType) => {
                const IconComponent = ProjectIcons[iconType].icon;
                return (
                  <div
                    key={iconType}
                    className="relative group bg-white dark:bg-gray-700 rounded-full p-1.5 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-shadow duration-200"
                  >
                    <IconComponent
                      className="w-5 h-5"
                      theme={isDark ? "dark" : "light"}
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                      {ProjectIcons[iconType].description}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-auto">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
            View Project
          </h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={(e) => onPreviewClick(e, project.link)}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <PreviewIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <ExternalLinkIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <GithubIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
