
'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <div className="relative h-full">
          <Image
            src="/image.jpg"
            alt="Gena Initiative - Image 1"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-50" />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="relative z-10 w-full text-left px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fff]  mb-4">
                  Healthcare
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  1. Infectious disease management, surveillance, and predictive tools.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  2. Research training, capacity building, and innovation in genomics, proteomics, drug discovery, and antimicrobial resistance modeling — powered by Artificial Intelligence, Machine Learning, and Web3.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  3. Maternal and child health solutions to improve outcomes and reduce health inequities. 
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  4. AI and Machine Learning applications in cancer genomics, patient management, and outcome optimization.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  5. Strengthening health systems through advanced data management, interoperability, and secure data sharing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-full">
          <Image
            src="/education.png"
            alt="Gena Initiative - Image 2"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-50" />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="relative z-10 w-full text-left px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Education
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  1. Training and capacity building through innovative edtech platforms.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  2. Equality-driven innovation that ensures inclusive access to knowledge and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-full">
          <Image
            src="/agriculture.png"
            alt="Gena Initiative - Image 2"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-50" />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="relative z-10 w-full text-left px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Agriculture
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  1. Application of genomics, AI, and biotechnology for crop improvement, sustainable farming, and food security.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  2. Data-driven agricultural innovation to predict, prevent, and manage plant and animal diseases.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  3. Building capacity in agri-biotech research and technology transfer for resilient communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
