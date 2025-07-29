import Hero from '../components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      {/* Additional sections can be added here */}
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More content coming soon...
          </h2>
          <p className="text-lg text-gray-600">
            This is where additional sections will be added.
          </p>
        </div>
      </div>
    </main>
  );
}
