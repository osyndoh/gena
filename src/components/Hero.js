'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden bg-gray-50 flex items-center justify-center">
      {/* Hero Background Image - Centered and Responsive */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-auto">
          <Image
            src="/hero-bg.png"
            alt="Gena Initiative - Powering Africa's Future Through Innovation"
            width={2000}
            height={1000}
            className="w-full h-auto max-w-full object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Floating "See More" Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          className="bg-[#1e3a5f] hover:bg-blue-[#1e3a5f] text-white px-8 py-3 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce"
          onClick={() => {
            // Scroll to next section or handle navigation
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          See More
        </button>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-blue-900 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-900 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
}