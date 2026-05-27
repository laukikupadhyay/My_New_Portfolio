import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';

const GhIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const ExtIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);
const CalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

function Links({ p }) {
  return (
    <div className={styles.links}>
      <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <GhIcon /> GitHub
      </a>
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.liveLink}`}>
          <ExtIcon /> Live Demo
        </a>
      )}
    </div>
  );
}

export default function Projects({ sRef }) {
  const featured = projects.filter(p => p.featured);
  const others   = projects.filter(p => !p.featured);

  return (
    <section className="section" ref={sRef} data-sec="Projects">
      <div className="wrap">
        <div className="sec-label">03 · Work</div>
        <h2 className="sec-title">Selected <em>Projects</em></h2>

        {/* Featured */}
        <div className={styles.featuredStack}>
          {featured.map((p, i) => (
            <div className={styles.featCard} key={p.title}>
              <div className={styles.featLeft}>
                <div className={styles.featBadge}><StarIcon /> Featured Project</div>
                <h3 className={styles.featTitle}>{p.title}</h3>
                <div className={styles.sub}>{p.subtitle}</div>
                <p className={styles.desc}>{p.desc}</p>

                <ul className={styles.bullets}>
                  {p.bullets.map((b,j) => (
                    <li key={j} className={styles.bullet}>
                      <span className={styles.checkWrap}><CheckIcon /></span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

                <div className={styles.foot}>
                  <span className={styles.period}><CalIcon /> {p.period}</span>
                  <Links p={p} />
                </div>
              </div>

              <div className={styles.featRight}>
                <div className={styles.mockup}>
                  <div className={styles.mockBar}>
                    <span/><span/><span/>
                    <div className={styles.mockUrl}>{p.subtitle}</div>
                  </div>
                  <div className={styles.mockBody}>
                    {Array.from({length:7}).map((_,k)=>(
                      <div key={k} className={styles.mockLine}
                        style={{width:`${48+Math.sin(k*1.9)*32}%`, opacity:.1+(k%3)*.07}}/>
                    ))}
                    <div className={styles.mockChips}>
                      {p.tags.slice(0,3).map(t=>(
                        <span key={t} className={styles.mockChip}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className={styles.otherGrid}>
          {others.map(p => (
            <div className={styles.otherCard} key={p.title}>
              <div className={styles.otherTop}>
                <span className={styles.folder}>📁</span>
                <Links p={p} />
              </div>
              <h3 className={styles.otherTitle}>{p.title}</h3>
              <div className={styles.sub} style={{marginBottom:'.5rem'}}>{p.subtitle}</div>
              <p className={styles.otherDesc}>{p.desc}</p>
              <div className={styles.otherFoot}>
                <div className={styles.tags}>
                  {p.tags.slice(0,4).map(t=><span className="tag" key={t}>{t}</span>)}
                </div>
                <span className={styles.period}><CalIcon /> {p.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
