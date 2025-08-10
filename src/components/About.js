import React from 'react';

const About = () => {
  return (
    <div id="about" className="grid md:grid-cols-3 font-sans antialiased text-gray-800 bg-white p-4 sm:p-6 lg:p-8">
      {/* Example usage of the Section component for "What We Do" */}
      <Section
        title="Who We Are"
        description="Global Engine for Next-gen Analytics (GENA) is a frontier innovation platform advancing Africa’s healthcare ecosystem through genomics, Artificial Intelligence, and data-led solutions"
      />

      {/* Example usage of the Section component for "Mission and Vision" */}
      <Section
        title="Mission"
        description="To harness modern technology to deliver next-gen healthcare innovation in Africa, led locally, scaled globally."
      />

      <Section
        title="Vision"
        description="Strengthen Africa’s healthcare ecosystem via capacity building, expanded access to advanced technologies, real-time diseases surveillance, and predictive models"
      />
    </div>
  );
};


const Section = ({ title, description }) => {
  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:my-4 lg:my-7">
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
