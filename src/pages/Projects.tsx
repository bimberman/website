import { useState, useMemo, useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { FeaturedFirstIcon, FeaturedOnlyIcon, AlphabeticalIcon, DateAddedIcon, SortArrowIcon } from "../assets/icons/SortIcons";

type SortOption = "featured-first" | "featured-only" | "alphabetical" | "date-added";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured-first");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handlePreviewClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setSelectedProject(url);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
    setShowDropdown(false);
  };

  const sortOptions = [
    { value: "featured-first" as SortOption, label: "Featured First", icon: FeaturedFirstIcon },
    { value: "featured-only" as SortOption, label: "Featured Only", icon: FeaturedOnlyIcon },
    { value: "alphabetical" as SortOption, label: "Alphabetical", icon: AlphabeticalIcon },
    { value: "date-added" as SortOption, label: "Date Added (Newest First)", icon: DateAddedIcon },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const sortedProjects = useMemo(() => {
    let filteredProjects = [...projects];
    
    // Filter projects based on sort option
    if (sortBy === "featured-only") {
      filteredProjects = projects.filter(project => project.featured);
    }
    
    // Sort projects based on selected option
    switch (sortBy) {
      case "featured-first":
        return filteredProjects.sort((a, b) => {
          // Featured projects first
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          
          // For featured projects, sort by featuredOrder
          if (a.featured && b.featured) {
            const featuredOrderA = a.featuredOrder || 999;
            const featuredOrderB = b.featuredOrder || 999;
            return featuredOrderA - featuredOrderB;
          }
          
          // For non-featured projects, sort by order
          const orderA = a.order || 999;
          const orderB = b.order || 999;
          return orderA - orderB;
        });
        
      case "featured-only":
        return filteredProjects.sort((a, b) => {
          const featuredOrderA = a.featuredOrder || 999;
          const featuredOrderB = b.featuredOrder || 999;
          return featuredOrderA - featuredOrderB;
        });
        
      case "alphabetical":
        return filteredProjects.sort((a, b) => 
          a.title.localeCompare(b.title)
        );
        
      case "date-added":
        return filteredProjects.sort((a, b) => {
          const dateA = new Date(a.dateAdded || 0).getTime();
          const dateB = new Date(b.dateAdded || 0).getTime();
          return dateB - dateA; // Most recent first
        });
        
      default:
        return filteredProjects;
    }
  }, [sortBy]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <div className="flex items-center justify-center relative">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of my recent work and personal projects
            </p>
            
            {/* Sorting Controls - anchored to the right */}
            <div className="absolute right-0" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Change sort order"
            >
              {/* Sort Icon based on current sort */}
              {sortBy === "featured-first" && (
                <FeaturedFirstIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
              {sortBy === "featured-only" && (
                <FeaturedOnlyIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
              {sortBy === "alphabetical" && (
                <AlphabeticalIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
              {sortBy === "date-added" && (
                <DateAddedIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
              
              {/* Double-sided arrow */}
              <SortArrowIcon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
            </button>
            
            {/* Custom Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 top-full mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50">
                {sortOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSortChange(option.value)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg ${
                        sortBy === option.value ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
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
