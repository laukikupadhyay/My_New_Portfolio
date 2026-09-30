import { education } from '../data';
import Section from './ui/Section';
import Icon from './ui/Icon';
import useSpotlight from '../hooks/useSpotlight';
import styles from './Education.module.css';

function EduCard({ ed }) {
  const ref = useSpotlight();
  const pct = (parseFloat(ed.score) / parseFloat(ed.scoreOutOf)) * 100;

  return (
    <article ref={ref} className={`${styles.card} spot reveal`} data-track={ed.track}>
      <span className="spot-glow" aria-hidden="true" />

      <header className={styles.head}>
        <span className={styles.crest}>
          {ed.logo
            ? <img src={ed.logo} alt="" className={styles.logo} loading="lazy" />
            : <Icon name="cap" size={20} />}
        </span>
        <span className={styles.badge}>{ed.badge}</span>
      </header>

      <h3 className={styles.degree}>{ed.degree}</h3>
      <p className={styles.institution}>{ed.institution}</p>
      <p className={styles.place}>
        <Icon name="pin" size={11} /> {ed.place}
      </p>

      <div className={styles.stats}>
        <div className={styles.score}>
          <span className={styles.scoreLabel}>{ed.scoreLabel}</span>
          <span className={styles.scoreValue}>
            {ed.score}
            <span className={styles.scoreMax}>/ {ed.scoreOutOf}</span>
          </span>
          <span className={styles.bar} aria-hidden="true">
            <span className={styles.barFill} style={{ '--pct': `${pct}%` }} />
          </span>
        </div>
        <div className={styles.completed}>
          <span className={styles.scoreLabel}>Completed</span>
          <span className={styles.completedValue}>{ed.completed}</span>
        </div>
      </div>

      {ed.certUrl && (
        <a
          href={ed.certUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certLink}
        >
          <Icon name="external" size={13} /> View certificate
        </a>
      )}
    </article>
  );
}

export default function Education() {
  return (
    <Section
      id="education"
      num="07"
      eyebrow="Academic"
      title={<>Where it <em>started</em></>}
      lede="Formal grounding in computer science, plus the diploma that got me writing code in the first place."
    >
      <div className={styles.grid}>
        {education.map(ed => <EduCard key={ed.id} ed={ed} />)}
      </div>
    </Section>
  );
}
