import { Project } from "../data/projects";
import { ProjectIcons } from "../data/projectIcons";
import GithubIcon from "../assets/icons/GithubIcon";
import ExternalLinkIcon from "../assets/icons/ExternalLinkIcon";
import PreviewIcon from "../assets/icons/PreviewIcon";
import NoPreviewIcon from "../assets/icons/NoPreviewIcon";
import NoGithubIcon from "../assets/icons/NoGithubIcon";
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
  const hasNoPreview = project.icons?.includes("NO_PREVIEW");
  const hasNoGithub = project.icons?.includes("NO_GITHUB");

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col h-full">
      <figure className="relative">
        {project.previewImages ? (
          <ImageCarousel images={project.previewImages} className="h-64" />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        )}
      </figure>
      <section className="p-6 flex flex-col flex-grow">
        <header className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.icons && (
            <nav className="flex gap-2" aria-label="Project technologies">
              {project.icons.map((iconType) => {
                const IconComponent = ProjectIcons[iconType].icon;
                return (
                  <figure
                    key={iconType}
                    className="relative group bg-white dark:bg-gray-700 rounded-full p-1.5 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-shadow duration-200"
                  >
                    <IconComponent
                      className="w-5 h-5"
                      theme={isDark ? "dark" : "light"}
                    />
                    <figcaption className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                      {ProjectIcons[iconType].description}
                    </figcaption>
                  </figure>
                );
              })}
            </nav>
          )}
        </header>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex-grow"></div>
        <ul
          className="flex flex-wrap gap-2 mb-4"
          aria-label="Technologies used"
        >
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
        <footer className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
            View Project
          </h3>
          <nav className="flex justify-center gap-4" aria-label="Project links">
            <button
              onClick={(e) => onPreviewClick(e, project.url)}
              disabled={hasNoPreview}
              className={`p-2 rounded-full transition-colors ${
                hasNoPreview
                  ? "bg-gray-50 dark:bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              title={hasNoPreview ? "Preview not available" : "Preview Project"}
            >
              {hasNoPreview ? (
                <NoPreviewIcon className="w-5 h-5" />
              ) : (
                <PreviewIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
              title="Open Project"
            >
              <ExternalLinkIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
            {hasNoGithub ? (
              <button
                disabled
                className="p-2 bg-gray-50 dark:bg-gray-600 rounded-full cursor-not-allowed opacity-50"
                title="Source code not available"
              >
                <NoGithubIcon className="w-5 h-5" />
              </button>
            ) : (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                title="View Source Code"
              >
                <GithubIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            )}
          </nav>
        </footer>
      </section>
    </article>
  );
};

export default ProjectCard;
