import { useState } from 'react';
import { professional, personal, TRACK_META } from '../data';
import Section from './ui/Section';
import TrackToggle from './ui/TrackToggle';
import Icon from './ui/Icon';
import useSpotlight from '../hooks/useSpotlight';
import styles from './Projects.module.css';

const OPTIONS = [TRACK_META.all, TRACK_META.dev, TRACK_META.test];

function CaseStudy({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useSpotlight();

  return (
    <article
      ref={ref}
      className={`${styles.caseCard} spot reveal`}
      data-track={item.track}
      data-open={open}
    >
      <span className="spot-glow" aria-hidden="true" />
      <div className={styles.caseTop}>
        <div className={styles.caseMeta}>
          <span className={styles.caseKind}>{item.kind}</span>
          <span className={styles.caseOrg}>
            <Icon name="briefcase" size={11} /> {item.org} · {item.period}
          </span>
        </div>
        <span className={styles.trackTag}>
          {item.track === 'dev' ? 'Development' : 'Testing'}
        </span>
      </div>

      <h3 className={styles.caseTitle}>{item.title}</h3>
      <p className={styles.caseBlurb}>{item.blurb}</p>

      <ul className={styles.caseStack}>
        {item.stack.map(s => <li key={s} className="tag tag-accent">{s}</li>)}
      </ul>

      <button
        type="button"
        className={styles.expand}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {open ? 'Hide case study' : 'Read the case study'}
        <Icon name="chevron" size={14} className={styles.expandIcon} />
      </button>

      {open && (
        <div className={styles.caseBody}>
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Context</h4>
            <p className={styles.blockText}>{item.context}</p>
          </div>
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Challenge</h4>
            <p className={styles.blockText}>{item.challenge}</p>
          </div>
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>What I did</h4>
            <ul className={styles.blockList}>
              {item.approach.map(a => (
                <li key={a} className={styles.blockItem}>
                  <Icon name="check" size={12} className={styles.tick} />{a}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Outcome</h4>
            <ul className={styles.blockList}>
              {item.outcome.map(o => (
                <li key={o} className={styles.blockItem}>
                  <Icon name="arrowRight" size={12} className={styles.tick} />{o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function ProjectCard({ item }) {
  const ref = useSpotlight();

  return (
    <article
      ref={ref}
      className={`${styles.projCard} spot reveal`}
      data-track={item.track}
      data-featured={item.featured}
    >
      <span className="spot-glow" aria-hidden="true" />
      <div className={styles.projTop}>
        <span className={styles.projKind}>{item.kind}</span>
        <div className={styles.projLinks}>
          {item.github && (
            <a href={item.github} target="_blank" rel="noopener noreferrer"
               className={styles.projLink} aria-label={`${item.title} on GitHub`}>
              <Icon name="github" size={16} />
            </a>
          )}
          {item.live && (
            <a href={item.live} target="_blank" rel="noopener noreferrer"
               className={styles.projLink} aria-label={`${item.title} live demo`}>
              <Icon name="external" size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.projTitle}>{item.title}</h3>
      <p className={styles.projBlurb}>{item.blurb}</p>

      <ul className={styles.projBullets}>
        {item.bullets.map(b => (
          <li key={b} className={styles.projBullet}>
            <span className={styles.bulletDot} aria-hidden="true" />{b}
          </li>
        ))}
      </ul>

      <footer className={styles.projFoot}>
        <ul className={styles.projStack}>
          {item.stack.slice(0, 5).map(s => <li key={s} className="tag">{s}</li>)}
        </ul>
        <span className={styles.projPeriod}>
          <Icon name="calendar" size={11} /> {item.period}
        </span>
      </footer>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const pro = professional.filter(p => filter === 'all' || p.track === filter);
  const own = personal.filter(p => filter === 'all' || p.track === filter);

  return (
    <Section
      id="projects"
      num="06"
      eyebrow="Work"
      title={<>Things I have <em>actually shipped</em></>}
      lede="Professional work at BestQ first, with the reasoning behind it. Personal builds below, each with a public repo."
      aside={<TrackToggle value={filter} onChange={setFilter} options={OPTIONS} />}
    >
      {pro.length > 0 && (
        <>
          <h3 className={`${styles.tier} reveal`}>
            <span className={styles.tierLine} aria-hidden="true" />
            Professional work
            <span className={styles.tierCount}>{pro.length}</span>
          </h3>
          <div className={styles.caseGrid}>
            {pro.map(item => <CaseStudy key={item.id} item={item} />)}
          </div>
        </>
      )}

      {own.length > 0 && (
        <>
          <h3 className={`${styles.tier} reveal`}>
            <span className={styles.tierLine} aria-hidden="true" />
            Personal projects
            <span className={styles.tierCount}>{own.length}</span>
          </h3>
          <div className={styles.projGrid}>
            {own.map(item => <ProjectCard key={item.id} item={item} />)}
          </div>
        </>
      )}

      {pro.length === 0 && own.length === 0 && (
        <p className={styles.empty}>Nothing in this track yet.</p>
      )}
    </Section>
  );
}
