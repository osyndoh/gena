import React from 'react';

// Footer Component
// Displays a simple footer with a copyright notice.
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#1e3a5f] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; {currentYear} The Gena Initiative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
