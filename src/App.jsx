import { useMemo } from 'react';
import { SECTIONS, devStack, testStack } from './data';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StackSection from './components/StackSection';
import Experience from './components/Experience';
import TestingShowcase from './components/TestingShowcase';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useReveal from './hooks/useReveal';
import useScrollProgress from './hooks/useScrollProgress';
import useActiveSection from './hooks/useActiveSection';

export default function App() {
  const ids = useMemo(() => SECTIONS.map(s => s.id), []);
  const progress = useScrollProgress();
  const active = useActiveSection(ids);

  useReveal();

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>

      <Navbar activeSection={active} progress={progress} />

      <main>
        <Hero />
        <About />

        <StackSection
          id="dev-stack"
          num="02"
          stack={devStack}
          counterpart={{ id: 'test-stack', track: 'test', prefix: 'Next', title: 'The testing side' }}
        />

        <StackSection
          id="test-stack"
          num="03"
          stack={testStack}
          counterpart={{ id: 'experience', track: 'dev', prefix: 'Next', title: 'How I use both' }}
        />

        <Experience />
        <TestingShowcase />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
