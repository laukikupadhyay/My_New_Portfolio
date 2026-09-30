import { profile, NAV_SECTIONS, socials } from '../data';
import Icon from './ui/Icon';
import EmailAction, { useEmailLink } from './ui/EmailAction';
import styles from './Footer.module.css';

export default function Footer() {
  const mail = useEmailLink();
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo} onClick={e => { e.preventDefault(); go('top'); }}>
            <span className={styles.mark} aria-hidden="true">{profile.initials}</span>
            <span className={styles.wordmark}>Laukik<span className={styles.dot}>.</span></span>
          </a>
          <p className={styles.blurb}>{profile.headline}</p>
          <ul className={styles.socials}>
            {socials.map(s => (
              <li key={s.label}>
                <a
                  href={s.icon === 'email' ? mail.href : s.url}
                  onClick={s.icon === 'email' ? mail.onClick : undefined}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <p className={styles.navTitle}>Sections</p>
          {NAV_SECTIONS.map(s => (
            <button key={s.id} className={styles.navLink} onClick={() => go(s.id)}>
              {s.navLabel}
            </button>
          ))}
        </nav>

        <div className={styles.meta}>
          <p className={styles.navTitle}>Reach me</p>
          <span className={styles.metaLink}><EmailAction variant="inline" /></span>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className={styles.metaLink}>{profile.phone}</a>
          <p className={styles.metaText}>{profile.location}</p>
        </div>
      </div>

      <div className={`wrap ${styles.base}`}>
        <p>© {new Date().getFullYear()} {profile.name}. Designed and built from scratch.</p>
        <p className={styles.built}>React · Vite · CSS Modules · no UI framework</p>
      </div>
    </footer>
  );
}
