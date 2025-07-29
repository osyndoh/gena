import Hero from '../components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
