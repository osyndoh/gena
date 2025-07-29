'use client'
import React, { useState, useRef } from 'react';

// Main App component to demonstrate the ProjectsSection
const Projects = () => {
  // Sample project data. In a real application, this might come from an API or a data file.
  const projectsData = [
    {
      id: 'community-garden',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=Community+Garden',
      title: 'Community Garden Project',
      subtitle: 'Cultivating sustainable food sources and community engagement.',
      description: 'This project focuses on establishing and maintaining community gardens in urban areas. We empower local residents with knowledge and resources to grow their own food, fostering self-sufficiency and strengthening community bonds. The gardens also serve as educational hubs for sustainable farming practices.',
      projectPageUrl: '/projects/community-garden',
    },
    {
      id: 'renewable-energy',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=Renewable+Energy',
      title: 'Renewable Energy Initiative',
      subtitle: 'Providing clean energy solutions to underserved areas.',
      description: 'Our initiative aims to bring affordable and clean renewable energy solutions, primarily solar power, to remote and underserved communities. We install solar panels for homes and community centers, reducing reliance on fossil fuels and improving access to electricity for education, healthcare, and economic activities.',
      projectPageUrl: '/projects/renewable-energy',
    },
    {
      id: 'educational-support',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=Educational+Support',
      title: 'Educational Support Program',
      subtitle: 'Enhancing educational opportunities for children and adults.',
      description: 'The Educational Support Program provides tutoring, mentorship, and access to learning resources for students of all ages. We focus on bridging educational gaps, promoting literacy, and preparing individuals for future academic and professional success through personalized support and community learning centers.',
      projectPageUrl: '/projects/educational-support',
    },
    {
      id: 'water-conservation',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=Water+Conservation',
      title: 'Water Conservation Efforts',
      subtitle: 'Implementing sustainable water management practices.',
      description: 'This project tackles water scarcity by implementing innovative conservation techniques, including rainwater harvesting, efficient irrigation systems, and public awareness campaigns. We work with communities to build resilient water infrastructure and promote responsible water usage for long-term sustainability.',
      projectPageUrl: '/projects/water-conservation',
    },
    {
      id: 'health-outreach',
      image: 'https://placehold.co/400x250/E0F2F7/000000?text=Health+Outreach',
      title: 'Community Health Outreach',
      subtitle: 'Promoting well-being through accessible healthcare and education.',
      description: 'Our health outreach program provides free health screenings, vaccinations, and health education workshops to underserved populations. We aim to improve public health outcomes by increasing access to preventative care and empowering individuals with knowledge about healthy lifestyles and disease prevention.',
      projectPageUrl: '/projects/health-outreach',
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
  const scrollContainerRef = useRef(null); // Ref for the scrollable project container

  // Function to handle project card clicks
  const handleProjectClick = (project) => {
    // If the clicked project is already selected, deselect it (close description)
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
    } else {
      // Otherwise, select the new project
      setSelectedProject(project);
      // Scroll the projects section to the top of the page smoothly
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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

      {/* Project Description Section - conditionally rendered */}
      {selectedProject && (
        <ProjectDescription project={selectedProject} />
      )}
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
// Displays the detailed description of a selected project.
const ProjectDescription = ({ project }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-xl max-w-7xl mx-auto border-t-2 animate-fade-in">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {project.title}
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        {project.description}
      </p>
      {/* Button to redirect to the full project page */}
      <a
        href={project.projectPageUrl}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
      >
        View Full Project
      </a>
    </div>
  );
};

export default Projects;
