import { techStack } from '../data/portfolioData';
import styles from './TechStack.module.css';

export default function TechStack({ sRef }) {
  return (
    <section className="section" ref={sRef} data-sec="Tech Stack">
      <div className="wrap">
        <div className="sec-label">02 · Skills</div>
        <h2 className="sec-title">My <em>Tech Stack</em></h2>

        <div className={styles.grid}>
          {techStack.map(cat => (
            <div className={`${styles.card} ${styles[cat.color]}`} key={cat.category}>
              <div className={styles.head}>
                <span className={`${styles.catBadge} ${styles[cat.color]}`}>{cat.category}</span>
                <span className={styles.cnt}>{cat.skills.length}</span>
              </div>
              <div className={styles.pills}>
                {cat.skills.map(skill => (
                  <div className={styles.pill} key={skill.name}>
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={styles.logo}
                      onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}
                    />
                    <span className={styles.fallback}>{skill.name.slice(0,2)}</span>
                    <span className={styles.pillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
