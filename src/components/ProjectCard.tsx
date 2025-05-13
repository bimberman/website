import React from "react";
import MobileNotSupported from "../assets/icons/MobileNotSupported";
import PreviewIcon from "../assets/icons/PreviewIcon";
import ExternalLinkIcon from "../assets/icons/ExternalLinkIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import ImageCarousel from "./ImageCarousel";

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

interface ProjectCardProps {
  project: Project;
  onPreviewClick: (e: React.MouseEvent, url: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPreviewClick,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
      {project.previewImages ? (
        <ImageCarousel images={project.previewImages} />
      ) : (
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
          {/* Add actual project images later */}
          <div className="w-full h-48 bg-gray-300 dark:bg-gray-600" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            {project.isMobileFriendly === false && (
              <div className="group relative">
                <MobileNotSupported />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Not optimized for mobile
                </div>
              </div>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
        </div>
        <div className="mt-auto space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-base font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 text-center">
              View Project
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={project.link}
                onClick={(e) => onPreviewClick(e, project.link)}
                className="inline-flex items-center justify-center p-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                title="Preview in iframe"
              >
                <PreviewIcon />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                title="Open in new window"
              >
                <ExternalLinkIcon />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                title="View on GitHub"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
