import { useState, useEffect } from "react";
import Scrollable3DModel from "../components/Scrollable3DModel";
import { projects } from "../data/projects";
import { WelcomeSection, AboutSection, SkillsSection, ContactSection } from "../sections";
import "../styles/Home3D.css";

const Home3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [forceShowSections, setForceShowSections] = useState(false);
  const [scrollEventCount, setScrollEventCount] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      setScrollEventCount(prev => prev + 1); // Increment counter for testing
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Track if user has scrolled - lower threshold for mobile
      const scrollThreshold = window.innerWidth < 768 ? 5 : 10;
      if (scrollY > scrollThreshold && !hasScrolled) {
        setHasScrolled(true);
        // Force show sections after a short delay on mobile
        if (window.innerWidth < 768) {
          setTimeout(() => setForceShowSections(true), 500);
        }
      }
      
      // Calculate scroll progress (0 to 1) for 3D model
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);
      
      // Calculate which section should be active based on scroll position
      // Use smaller section height on mobile for better responsiveness
      const sectionHeight = windowHeight * (window.innerWidth < 768 ? 0.4 : 0.6);
      const currentSection = Math.floor(scrollY / sectionHeight);
      
      // Ensure we don't go below 0 or above the number of sections
      const clampedSection = Math.max(0, Math.min(currentSection, sections.length - 1));
      setActiveSection(clampedSection);
      
      // Debug logging for mobile
      if (window.innerWidth < 768) {
        console.log('Mobile Scroll Debug:', {
          scrollY,
          windowHeight,
          sectionHeight,
          currentSection,
          clampedSection,
          totalSections: sections.length,
          hasScrolled,
          forceShowSections
        });
      }
    };

    // Handle touch events for mobile
    const handleTouchStart = () => {
      console.log('Touch Start detected!');
      // Mark that user has started interacting
      if (!hasScrolled) {
        setHasScrolled(true);
      }
      handleScroll();
    };

    const handleTouchMove = () => {
      console.log('Touch Move detected!');
      handleScroll();
    };

    const handleTouchEnd = () => {
      console.log('Touch End detected!');
      handleScroll();
    };

    // Add multiple event listeners for better mobile compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    
    // Also listen on the document body
    document.body.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.body.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.body.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleScroll);
      document.body.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('touchend', handleTouchEnd);
    };
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
          scrollProgress={scrollProgress}
          startPosition={{
            rotation: { x: -1.00, y: 1.00, z: -1.00 },
            scale: 0.3,
            position: { x: 0.00, y: 0.00, z: 0.00 }
          }}
          endPosition={{
            rotation: { x:-1.03, y: 0.39, z: 4.00 },
            scale: 1,
            position: { x: 0.00, y: -0.16, z: 0.00 }
          }}
          showDebugInfo={true}
        />
      </section>
      
      {/* Dynamic Content Overlay */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        {/* Welcome Section - Always show when on first section */}
        {activeSection === 0 && (
          <div className="animate-fade-in">
            <WelcomeSection />
          </div>
        )}


        {/* Test Section - Should appear when scrolling */}
        {activeSection >= 1 && hasScrolled && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <div className="bg-green-500/90 text-white p-4 rounded-lg text-center max-w-sm mx-4">
              <h2 className="text-xl font-bold mb-2">Test Section</h2>
              <p>This appears when scrolling!</p>
              <p className="text-sm mt-2">Section: {activeSection}</p>
            </div>
          </div>
        )}

        {/* About Me Section */}
        {activeSection === 1 && (
          <div className="animate-fade-in">
            <AboutSection personalInfo={personalInfo} />
          </div>
        )}

        {/* Individual Project Sections */}
        {sections.map((section) => {
          if (section.type === 'project' && typeof section.content === 'object' && 'title' in section.content) {
            const project = section.content as any; // Type assertion for project object
            const isEvenProject = (section.id - 2) % 2 === 0; // Check if it's an even project (0-indexed from first project)
            return (
              activeSection === section.id && (
                <div key={section.id} className={`absolute inset-0 flex items-center ${isEvenProject ? 'justify-end pr-2 sm:pr-4 lg:pr-8 xl:pr-12' : 'justify-start pl-2 sm:pl-4 lg:pl-8 xl:pl-12'}`}>
                  <div className={`bg-white/95 dark:bg-gray-800/95 rounded-xl p-3 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-fade-in shadow-lg project-card transform ${isEvenProject ? 'skew-y-3' : '-skew-y-3'} hover:skew-y-0 transition-transform duration-300`}>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Project Preview</span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{project.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string) => (
                          <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Project
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-600 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition-colors"
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
        {activeSection === 2 + featuredProjects.length && (
          <div className="animate-fade-in">
            <SkillsSection specialties={personalInfo.specialties} />
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 3 + featuredProjects.length && (
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        )}
      </div>

      {/* Scrollable Content for Height */}
      <div className="h-[800vh] relative z-10 mt-[100vh]">
        {/* Invisible content to enable scrolling */}
        <div className="h-full"></div>
      </div>
      
      {/* Mobile Debug Info - Temporary for debugging */}
      {typeof window !== 'undefined' && window.innerWidth < 768 && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
          <div className="mb-1 font-bold">Mobile Debug</div>
          <div>Scroll Y: {Math.round(window.pageYOffset || 0)}px</div>
          <div>Section: {activeSection}</div>
          <div>Has Scrolled: {hasScrolled ? 'Yes' : 'No'}</div>
          <div>Force Show: {forceShowSections ? 'Yes' : 'No'}</div>
          <div>Total Sections: {sections.length}</div>
          <div className="mt-2 text-green-400">Events: {scrollEventCount}</div>
          <div className="text-yellow-400">Scroll to test!</div>
          <div className="mt-2 text-blue-400">
            <div>About: {activeSection === 1 ? 'YES' : 'NO'}</div>
            <div>Projects: {activeSection >= 2 && activeSection < 2 + featuredProjects.length ? 'YES' : 'NO'}</div>
          </div>
        </div>
      )}
      
    </main>
  );
};

export default Home3D;
