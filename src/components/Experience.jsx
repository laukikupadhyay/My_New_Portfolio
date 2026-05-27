import { experience } from '../data/portfolioData';
import styles from './Experience.module.css';

const BriefIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
);
const CalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function Experience({ sRef }) {
  return (
    <section className="section" ref={sRef} data-sec="Experience">
      <div className="wrap">
        <div className="sec-label">04 · Journey</div>
        <h2 className="sec-title">Work <em>Experience</em></h2>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div className={styles.item} key={exp.role}>
              <div className={styles.dotCol}>
                <div className={styles.dot}/>
                {i < experience.length - 1 && <div className={styles.line}/>}
              </div>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}><BriefIcon/>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={`${styles.badge} ${styles[exp.color]}`}>{exp.type}</span>
                    <span className={styles.period}><CalIcon/> {exp.period}</span>
                  </div>
                </div>
                <ul className={styles.points}>
                  {exp.points.map((pt,j)=>(
                    <li key={j} className={styles.pt}>
                      <span className={styles.arrow}>→</span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callout}>
          <span className={styles.calloutIcon}>🚀</span>
          <div>
            <div className={styles.calloutTitle}>Actively Seeking Opportunities</div>
            <div className={styles.calloutDesc}>
              Looking for full-time roles in Full Stack Development (ReactJS / Spring Boot). Open to on-site, hybrid, or remote positions across India.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
