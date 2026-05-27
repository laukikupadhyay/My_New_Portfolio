import { certifications } from '../data/portfolioData';
import styles from './Certifications.module.css';

const ExtIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Certifications({ sRef }) {
  return (
    <section className="section" ref={sRef} data-sec="Certifications">
      <div className="wrap">
        <div className="sec-label">06 · Achievements</div>
        <h2 className="sec-title">Certifications & <em>Achievements</em></h2>

        <div className={styles.grid}>
          {certifications.map(c => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles[c.color]}`}
            >
              <div className={styles.topRow}>
                <span className={styles.emoji}>{c.emoji}</span>
                <span className={`${styles.badge} ${styles[c.color]}`}>
                  <ExtIcon /> View Certificate
                </span>
              </div>
              <h3 className={styles.title}>{c.title}</h3>
              <div className={styles.issuer}>{c.issuer}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
