import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV = ['About','Tech Stack','Projects','Experience','Education','Certifications','Contact'];

export default function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.solid : ''}`}>
        <div className={`wrap ${styles.inner}`}>
          <a href="#" className={styles.logo}>Laukik<span>.</span></a>

          <div className={styles.links}>
            {NAV.map(n => (
              <button key={n}
                className={`${styles.link} ${active === n ? styles.active : ''}`}
                onClick={() => onNav(n)}>
                {n}
              </button>
            ))}
            <button className={styles.cta} onClick={() => onNav('Contact')}>Hire Me</button>
          </div>

          <button className={styles.hamburger} onClick={() => setOpen(v => !v)} aria-label="menu">
            <span className={open ? styles.x1 : ''} />
            <span className={open ? styles.x2 : ''} />
            <span className={open ? styles.x3 : ''} />
          </button>
        </div>
      </nav>

      <div className={`${styles.mob} ${open ? styles.mobOpen : ''}`}>
        {NAV.map(n => (
          <button key={n}
            className={`${styles.mobLink} ${active === n ? styles.active : ''}`}
            onClick={() => { onNav(n); setOpen(false); }}>
            {n}
          </button>
        ))}
        <button className={styles.cta} style={{marginTop:'0.5rem'}}
          onClick={() => { onNav('Contact'); setOpen(false); }}>Hire Me</button>
      </div>
    </>
  );
}
