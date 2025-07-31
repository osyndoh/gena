import React from 'react';


// Main App component to demonstrate the ContactSection
const Contact = () => {
  return (
    <div id="contact" className="font-sans antialiased text-gray-800 bg-white p-4 sm:p-6 lg:p-8">
      <ContactSection />
    </div>
  );
};

// ContactSection Component
// Displays a "Contact Us" section with an introductory message and social/contact links.
const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-8 md:my-12 lg:my-16 text-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
        Contact Us
      </h2>

      {/* Introductory Text */}
      <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
        Have questions or want to get involved? Reach out to us through the links below.
      </p>

      {/* Contact Icons Container */}
      <div className="flex justify-center items-start space-x-8 sm:space-x-12">
        {/* Email Link */}
        <ContactLink
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m18 0A2 2 0 0020 6H4a2 2 0 00-2 2m18 0V7a2 2 0 00-2-2H4a2 2 0 00-2 2v1"
              />
            </svg>
          }
          label="Email"
          href="mailto:info@example.com"
        />

        {/* X (formerly Twitter) Link */}
        <ContactLink
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 group-hover:text-black transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.714 11.24H14.53l-6.57-8.47L3 21.75H.692l7.579-8.675L3.426 2.25H7.1l4.954 6.36L18.244 2.25zm-4.358 16.497L12.087 11.48l-6.917 7.72H4.07L10.39 6.42l-6.21-4.17h2.344L14.546 12.97l6.57-7.72h2.344L14.07 18.747z" />
            </svg>
          }
          label="X"
          href="https://x.com/example"
          target="_blank"
          rel="noopener noreferrer"
        />

        {/* LinkedIn Link */}
        <ContactLink
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-blue-700 group-hover:text-blue-800 transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.397-.025-3.192-1.943-3.192-1.943 0-2.247 1.512-2.247 3.097v5.664H9.159V9.281h3.413v1.56c.493-.951 1.378-1.943 3.362-1.943 3.592 0 4.252 2.378 4.252 5.487v6.065h-.001zM7.003 8.396a2.003 2.003 0 110-4.006 2.003 2.003 0 010 4.006zm1.785 12.056h-3.554V9.281h3.554v11.171zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.455c.979 0 1.773-.773 1.773-1.729V1.729C24 .774 23.206 0 22.227 0z" />
            </svg>
          }
          label="LinkedIn"
          href="https://linkedin.com/company/example"
          target="_blank"
          rel="noopener noreferrer"
        />

        {/* Facebook Link */}
        <ContactLink
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-blue-700 group-hover:text-blue-800 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              />
            </svg>
          }
          label="Facebook"
          href="https://facebook.com/example"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
};

// ContactLink Component
// A reusable component for individual contact links (e.g., Email, Twitter, Facebook).
// Props:
// - icon: An SVG icon element for the link.
// - label: The text label for the link (e.g., "Email").
// - href: The URL the link points to.
// - target: HTML target attribute (e.g., "_blank").
// - rel: HTML rel attribute (e.g., "noopener noreferrer").
const ContactLink = ({ icon, label, href, target, rel }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-200">
        {icon}
      </div>
      <span className="mt-3 text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
        {label}
      </span>
    </a>
  );
};

export default Contact;