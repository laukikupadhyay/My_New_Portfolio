import { personal, aboutStats } from '../data/portfolioData';
import styles from './About.module.css';

export default function About({ sRef }) {
  return (
    <section className="section" ref={sRef} data-sec="About">
      <div className="wrap">
        <div className="sec-label">01 · About Me</div>
        <h2 className="sec-title">A little about <em>me</em></h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.summary}>{personal.summary}</p>
            <p className={styles.extra}>
              I thrive at the intersection of clean architecture and great user experience — from designing secure Spring Boot APIs with RBAC and JPA/Hibernate, to building smooth React frontends. I own projects end-to-end: from local dev to CI/CD deployment on Vercel and Render.
            </p>
            <div className={styles.details}>
              {[
                { icon: '📍', label: 'Location', val: personal.location, link: false },
                { icon: '📧', label: 'Email',    val: personal.email,    link: `mailto:${personal.email}` },
                { icon: '📱', label: 'Phone',    val: personal.phone,    link: `tel:${personal.phone}` },
                { icon: '🎯', label: 'Status',   val: 'open', link: false },
              ].map(d => (
                <div className={styles.row} key={d.label}>
                  <span className={styles.rowLabel}>{d.icon} {d.label}</span>
                  {d.val === 'open' ? (
                    <span className={styles.openBadge}>
                      <span className={styles.openDot}/>Open to Work
                    </span>
                  ) : d.link ? (
                    <a href={d.link} className={styles.rowLink}>{d.val}</a>
                  ) : (
                    <span className={styles.rowVal}>{d.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cards}>
            {aboutStats.map(s => (
              <div className={styles.card} key={s.label}>
                <span className={styles.cardIcon}>{s.icon}</span>
                <span className={styles.cardNum}>{s.num}</span>
                <span className={styles.cardLabel}>{s.label}</span>
                <span className={styles.cardSub}>{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
