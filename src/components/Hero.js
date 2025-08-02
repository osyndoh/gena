'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Hero Background Image - Full Section Coverage */}
      <Image
        src="/lab.jpg"
        alt="Gena Initiative - Powering Africa's Future Through Innovation"
        fill
        className="object-cover"
        priority
      />

      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-black-900 bg-opacity-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Add your hero content here if needed */}
      </div>

      {/* Floating "See More" Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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