import { useState, useEffect } from 'react';
import { NAV_SECTIONS, NAV_PARENT, profile } from '../data';
import Icon from './ui/Icon';
import styles from './Navbar.module.css';

export default function Navbar({ activeSection, progress }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock the page while the mobile drawer is open. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const activeNav = NAV_PARENT[activeSection] || activeSection;

  const go = id => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={styles.nav} data-scrolled={scrolled}>
        <div className={`wrap ${styles.inner}`}>
          <a href="#top" className={styles.logo} onClick={e => { e.preventDefault(); go('top'); }}>
            <span className={styles.mark} aria-hidden="true">LU</span>
            <span className={styles.wordmark}>
              Laukik<span className={styles.dot}>.</span>
            </span>
          </a>

          <nav className={styles.links} aria-label="Sections">
            {NAV_SECTIONS.map(s => (
              <button
                key={s.id}
                className={styles.link}
                data-active={activeNav === s.id}
                onClick={() => go(s.id)}
              >
                {s.navLabel}
              </button>
            ))}
          </nav>

          <div className={styles.right}>
            <a
              href={profile.resumeView}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resume}
            >
              <Icon name="download" size={14} />
              Résumé
            </a>
            <button className={styles.cta} onClick={() => go('contact')}>
              Get in touch
            </button>
            <button
              className={styles.burger}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      <div className={styles.sheet} data-open={open}>
        <nav className={styles.sheetNav} aria-label="Sections">
          {NAV_SECTIONS.map((s, i) => (
            <button
              key={s.id}
              className={styles.sheetLink}
              data-active={activeNav === s.id}
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
              onClick={() => go(s.id)}
            >
              <span className={styles.sheetNum}>{s.num}</span>
              {s.navLabel}
              <Icon name="arrowRight" size={15} className={styles.sheetArrow} />
            </button>
          ))}
        </nav>
        <div className={styles.sheetFoot}>
          <a href={profile.resumeView} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Icon name="eye" size={14} /> View résumé
          </a>
          <button className="btn btn-primary" onClick={() => go('contact')}>
            Get in touch <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
