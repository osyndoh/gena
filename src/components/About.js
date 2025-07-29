import React from 'react';

const About = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Example usage of the Section component for "What We Do" */}
      <Section
        title="What We Do"
        description="We focus on creating lasting change through community-led projects in education, environmental sustainability, and economic empowerment. Our approach combines local knowledge with global best practices to ensure effective and sustainable outcomes."
      />

      {/* Example usage of the Section component for "Mission and Vision" */}
      <Section
        title="Mission"
        description="Our mission is to foster resilient communities by providing resources and support for self-sufficiency. We envision a world where every community thrives, equipped to meet its challenges and achieve its full potential."
      />

      <Section
        title="Vision"
        description="Our mission is to foster resilient communities by providing resources and support for self-sufficiency. We envision a world where every community thrives, equipped to meet its challenges and achieve its full potential."
      />
    </div>
  );
};


const Section = ({ title, description }) => {
  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:my-12 lg:my-16">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6 leading-tight">
        {title}
      </h2>

      {/* Section Description */}
      <p className="text-base sm:text-lg text-center text-gray-600 leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default About;
