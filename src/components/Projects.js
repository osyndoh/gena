'use client'
import React, { useState, useRef, useEffect } from 'react';

// Main App component to demonstrate the ProjectsSection
const Projects = () => {
  // Sample project data. In a real application, this might come from an API or a data file.
  const projectsData = [
    {
      id: 'ZODIA Academy',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=ZODIA+Academy',
      title: 'ZODIA Academy',
      subtitle: 'Zonal Omics Data & Intelligent Analytics Academy',
      description: 'ZODIA Academy is GENA’s flagship training institution dedicated to building Africa’s next generation of computational biologists, bioinformaticians, and pathogen genomics specialists. With a hands-on, problem-solving approach, the Academy offers tailored courses in genomics, AI in public health, molecular epidemiology, and data-driven outbreak response. It bridges the gap between scientific knowledge and real-world public health challenges through mentorship, practical experience, and global collaboration.',
      projectPageUrl: '#',
    },
    {
      id: 'STEMA AI',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=STEMA+AI',
      title: 'STEMA AI',
      subtitle: 'Science, Technology, Engineering, Mathematics & AI for Africa',
      description: 'STEMA AI is an ambitious, pan-African initiative to democratize access to cutting-edge AI tools for STEM learning and research. Focused on primary to post-graduate education, STEMA AI develops adaptive learning platforms, intelligent tutors, and STEM content pipelines rooted in African contexts. At its core, STEMA AI believes in building a tech-literate generation capable of shaping the continent’s scientific destiny.',
      projectPageUrl: '#',
    },
    {
      id: 'ZCIP',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=ZCIP',
      title: 'ZCIP',
      subtitle: 'Zonal Computational Intelligence Platform',
      description: 'ZCIP is GENA’s intelligent surveillance and analytics tool for tracking and combating antimicrobial resistance (AMR) across Africa. It integrates genomic data, clinical outcomes, and drug susceptibility patterns into a dynamic, AI-driven dashboard that supports early detection of resistance trends, hotspot mapping, and antimicrobial stewardship. ZCIP empowers researchers, policymakers, and healthcare systems with real-time, localized insights to inform targeted interventions and reduce the burden of AMR on the continent.',
      projectPageUrl: '#',
    },
    {
      id: 'OMNIA',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=OMNIA',
      title: 'OMNIA',
      subtitle: 'Omics Monitoring Network for Integrated Africa',
      description: 'OMNIA is GENA’s integrated genomic surveillance platform focused on high-priority viruses including Respiratory Syncytial Virus (RSV), SARS-CoV-2, Influenza, and Mpox. Beyond human pathogens, OMNIA extends into zoonotic spillover surveillance — monitoring viral evolution and interspecies transmission at the animal-human interface. By combining pathogen genomics, temporal patterns, and AI-powered analytics, OMNIA supports early outbreak detection, lineage tracking, and precision public health responses. It serves as a core infrastructure for epidemic intelligence and pandemic preparedness across Africa.',
      projectPageUrl: '#',
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 p-4 sm:p-6 lg:p-8">
      <ProjectsSection projects={projectsData} />
    </div>
  );
};

// ProjectsSection Component
// Displays a horizontally scrollable list of projects with interactive features.
const ProjectsSection = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null); // State to track the currently selected project
  const [showDescription, setShowDescription] = useState(false); // State to control description visibility for animation
  const scrollContainerRef = useRef(null); // Ref for the scrollable project container

  // useEffect to manage the animation state for the description
  useEffect(() => {
    if (selectedProject) {
      // When a project is selected, immediately set to show description
      setShowDescription(true);
      // Scroll the projects section to the top of the page smoothly
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // When no project is selected, hide the description after a short delay
      // This delay allows the fade-out animation to complete before the content collapses
      const timer = setTimeout(() => {
        setShowDescription(false);
      }, 300); // This duration should match the CSS transition duration
      return () => clearTimeout(timer); // Cleanup the timer if component unmounts or state changes
    }
  }, [selectedProject]); // Re-run this effect whenever selectedProject changes

  // Function to handle project card clicks
  const handleProjectClick = (project) => {
    // If the clicked project is already selected, deselect it (close description)
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
    } else {
      // Otherwise, select the new project
      setSelectedProject(project);
    }
  };

  return (
    <section className="max-w-7xl mx-auto my-8 md:my-12 lg:my-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 leading-tight">
        Our Projects
      </h2>

      {/* Scrollable container for project cards */}
      <div
        ref={scrollContainerRef} // Attach ref to this div for scrolling
        className="flex overflow-x-auto snap-x snap-mandatory content-center pb-4 pt-4 space-x-4 px-2 sm:px-4 lg:px-6 scrollbar-hide"
        // Custom scrollbar hide for better aesthetics (might need a custom CSS utility for full browser support)
        style={{ scrollBehavior: 'smooth' }} // Smooth scrolling for manual drag
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
            isSelected={selectedProject && selectedProject.id === project.id}
            isAnyProjectSelected={selectedProject !== null}
          />
        ))}
      </div>

      {/* Project Description Section - always rendered but animated via max-height and opacity */}
      {/* Only pass the project data if a project is selected, even if it's fading out */}
      <ProjectDescription
        project={selectedProject}
        isVisible={showDescription}
      />
    </section>
  );
};

// ProjectCard Component
// Represents an individual project item in the scrollable list.
const ProjectCard = ({ project, onClick, isSelected, isAnyProjectSelected }) => {
  // Determine dynamic classes for scaling and fading based on selection
  const cardClasses = `
    flex-none w-64 sm:w-72 lg:w-80
    bg-white rounded-lg shadow-lg overflow-hidden
    cursor-pointer transform transition-all duration-300 ease-in-out
    snap-center
    ${isSelected
      ? 'scale-105 shadow-xl ring-4 ring-[#1e3a5f] ring-opacity-70' // Highlight selected project
      : isAnyProjectSelected
        ? 'opacity-60 scale-95' // Fade and slightly shrink non-selected projects when one is active
        : 'hover:scale-105 hover:shadow-xl' // Normal hover effect when no project is selected
    }
  `;

  return (
    <div className={cardClasses} onClick={() => onClick(project)}>
      <div className="relative overflow-hidden">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0F2F7/000000?text=Image+Error'; }}
        />
        {/* "See More" Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">See More</span>
        </div>
      </div>
      <div className="p-4">
        {/* Project Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {project.title}
        </h3>
        {/* Project Subtitle/Short Description */}
        <p className="text-sm text-gray-600">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
};

// ProjectDescription Component
// Displays the detailed description of a selected project with smooth reveal/hide.
const ProjectDescription = ({ project, isVisible }) => {
  if (!project && !isVisible) {
    return null;
  }

  const descriptionClasses = `
    mt-8 p-6 bg-white rounded-lg shadow-xl max-w-7xl mx-auto border-t-2 border-[#1e3a5f]
    overflow-hidden transition-all duration-300 ease-in-out
    ${isVisible ? 'opacity-100 max-h-[1000px] py-6' : 'opacity-0 max-h-0 py-0'}
  `;

  return (
    <div className={descriptionClasses}>
      {/* Only render content if a project is selected (even if it's currently fading out) */}
      {project && (
        <>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>
          <a
            href={project.projectPageUrl}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
          >
            View Full Project
          </a>
        </>
      )}
    </div>
  );
};

export default Projects;
