import { education } from '../data/portfolioData';
import styles from './Education.module.css';

const ExtIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const colorClass = { blue: 'blue', gold: 'gold' };

export default function Education({ sRef }) {
  return (
    <section className="section" ref={sRef} data-sec="Education">
      <div className="wrap">
        <div className="sec-label">05 · Academic</div>
        <h2 className="sec-title">My <em>Education</em></h2>

        <div className={styles.grid}>
          {education.map(ed => (
            <div className={`${styles.card} ${styles[colorClass[ed.color]] || ''}`} key={ed.degree}>
              <div className={styles.top}>
                <div className={styles.logoWrap}>
                  {ed.logo ? (
                    <img src={ed.logo} alt={ed.institution} className={styles.logo}
                      onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}
                    />
                  ) : null}
                  <div className={styles.logoFallback} style={{display: ed.logo ? 'none':'flex'}}>
                    🎓
                  </div>
                </div>
                <span className={`${styles.typeBadge} ${styles[ed.color]}`}>{ed.type}</span>
              </div>

              <h3 className={styles.degree}>{ed.degree}</h3>
              <div className={styles.inst}>{ed.institution}</div>

              <div className={styles.row}>
                <div className={styles.cgpaWrap}>
                  <span className={styles.cgpaLabel}>CGPA</span>
                  <span className={styles.cgpa}>{ed.cgpa}</span>
                </div>
                <div className={styles.year}>🗓 {ed.period}</div>
              </div>

              <a href={ed.certUrl} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                <ExtIcon /> View Passing Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
