import { useState, useEffect, useRef } from 'react';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import TechStack from './components/TechStack';
import Projects  from './components/Projects';
import Experience from './components/Experience';
import Education  from './components/Education';
import Certifications from './components/Certifications';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

const SECTIONS = ['About','Tech Stack','Projects','Experience','Education','Certifications','Contact'];

export default function App() {
  const [active, setActive] = useState('About');
  const refs = useRef({});

  // Intersection observer for active nav tracking
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.dataset.sec); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    Object.values(refs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = id => {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const ref = id => el => { refs.current[id] = el; };

  return (
    <>
      <Navbar active={active} onNav={scrollTo} />
      <main>
        <Hero onNav={scrollTo} />
        <div className="divider" />
        <About      sRef={ref('About')} />
        <div className="divider" />
        <TechStack  sRef={ref('Tech Stack')} />
        <div className="divider" />
        <Projects   sRef={ref('Projects')} />
        <div className="divider" />
        <Experience sRef={ref('Experience')} />
        <div className="divider" />
        <Education  sRef={ref('Education')} />
        <div className="divider" />
        <Certifications sRef={ref('Certifications')} />
        <div className="divider" />
        <Contact    sRef={ref('Contact')} />
      </main>
      <Footer onNav={scrollTo} />
    </>
  );
}
