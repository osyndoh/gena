'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Background Image - Centered and Responsive */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/lab.jpg"
            alt="Gena Initiative - Powering Africa's Future Through Innovation"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
      
      {/* Floating "See More" Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="/#about" className="bg-[#1e3a5f] hover:bg-[#2a4a6b] text-white px-8 py-3 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce">
          See More
        </Link>
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