
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
                   Capacity Building & Interoperability
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  Empowering local scientists and health professionals through targeted training, mentorship, and technology transfer.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#fff]">
                  Seamlessly integrating GENA’s solutions into national health systems, global organizations, and open-source ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-full">
          <Image
            src="/rna.png"
            alt="Gena Initiative - Image 2"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-50" />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="relative z-10 w-full text-left px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Modular Design & Integrated Research & Development
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  Delivering a core AI + genomics engine with adaptable healthcare innovation modules to address diverse global health challenges.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  Creating platforms that promote collaborative research on pathogens of global health significance, vector biology, GIS & climate data, and policy integration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-full">
          <Image
            src="/worlddata.png"
            alt="Gena Initiative - Image 2"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-50" />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="relative z-10 w-full text-left px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Data Equity & Public–Private Collaboration
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  Championing LMIC data ownership and benefit-sharing via transparent, inclusive platforms.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">
                  Acting as a trusted, neutral bridge between governments, academia, and the private sector to drive sustainable health innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
          