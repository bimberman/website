import { useState, useEffect } from "react";
import Scrollable3DModel from "../components/Scrollable3DModel";
import { projects } from "../data/projects";
import { WelcomeSection, AboutSection, ProjectSection, SkillsSection, ContactSection } from "../sections";
import "../styles/Home3D.css";

const Home3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Track if user has scrolled
      if (scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
      
      // Calculate scroll progress (0 to 1)
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);
      
      // Calculate which section should be active based on scroll position
      // Use smaller section height on mobile for better responsiveness
      const sectionHeight = windowHeight * (window.innerWidth < 768 ? 0.8 : 0.6);
      const currentSection = Math.floor(scrollY / sectionHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    // Use passive: false to ensure scroll events work on mobile
    window.addEventListener('scroll', handleScroll, { passive: false });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const personalInfo = {
    name: "Ben Bimberman",
    title: "Full Stack Developer",
    location: "Orange County, CA",
    experience: "5+ years",
    specialties: ["React", "Node.js", "TypeScript", "Three.js", "AWS"],
    bio: "Passionate developer creating digital solutions that make a difference. I love building full-stack applications and exploring new technologies like 3D web experiences."
  };

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  // Create individual sections for each project
  const projectSections = featuredProjects.map((project, index) => ({
    id: index + 2, // Start from 2 to account for Welcome (0) and About (1)
    title: project.title,
    content: project,
    type: 'project'
  }));

  const sections = [
    { id: 0, title: "Welcome", content: "Scroll to explore my portfolio", type: 'welcome' },
    { id: 1, title: "About Me", content: personalInfo, type: 'about' },
    ...projectSections,
    { id: 2 + featuredProjects.length, title: "Skills & Technologies", content: personalInfo.specialties, type: 'skills' },
    { id: 3 + featuredProjects.length, title: "Contact", content: "Let's connect and build something amazing together!", type: 'contact' }
  ];

  return (
    <main className="bg-white dark:bg-gray-900 home-3d-main">
      {/* 3D Model Section - Fixed to stay in view */}
      <section className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 z-20">
        <Scrollable3DModel 
          modelPath="/models/lost_programmer.glb"
          className="w-full h-full"
          startPosition={{
            rotation: { x: -1.00, y: 1.00, z: -1.00 },
            scale: 0.3,
            position: { x: 0.00, y: 0.00, z: 0.00 }
          }}
          endPosition={{
            rotation: { x:1.03, y: 0, z: 3.00 },
            scale: 1,
            position: { x: 0.00, y: -0.16, z: 0.00 }
          }}
          showDebugInfo={true}
        />
      </section>
      
      {/* Dynamic Content Overlay */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        {/* Welcome Section - Only show on first load, hide after scroll */}
        {activeSection === 0 && !hasScrolled && <WelcomeSection />}

        {/* About Me Section */}
        {activeSection === 1 && <AboutSection personalInfo={personalInfo} />}

        {/* Individual Project Sections */}
        {sections.map((section) => {
          if (section.type === 'project') {
            const project = section.content;
            const isEvenProject = (section.id - 2) % 2 === 0; // Check if it's an even project (0-indexed from first project)
            return (
              activeSection === section.id && (
                <div key={section.id} className={`absolute inset-0 flex items-center ${isEvenProject ? 'justify-end pr-4 lg:pr-8 xl:pr-12' : 'justify-start pl-4 lg:pl-8 xl:pl-12'}`}>
                  <div className={`bg-white/95 dark:bg-gray-800/95 rounded-xl p-6 max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in shadow-lg project-card transform ${isEvenProject ? 'skew-y-3' : '-skew-y-3'} hover:skew-y-0 transition-transform duration-300`}>
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
              )
            );
          }
          return null;
        })}

        {/* Skills Section */}
        {activeSection === 2 + featuredProjects.length && <SkillsSection specialties={personalInfo.specialties} />}

        {/* Contact Section */}
        {activeSection === 3 + featuredProjects.length && <ContactSection />}
      </div>

      {/* Scrollable Content for Height */}
      <div className="h-[800vh] relative z-10 mt-[100vh]">
        {/* Invisible content to enable scrolling */}
        <div className="h-full"></div>
      </div>
    </main>
  );
};

export default Home3D;
