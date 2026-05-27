import { personal, socials, aboutStats } from '../data/portfolioData';
import styles from './Hero.module.css';

const SocialIcons = {
  github: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  linkedin: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  naukri: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  email: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
    </svg>
  ),
};

export default function Hero({ onNav }) {
  return (
    <section className={styles.hero}>
      {/* BG decorations */}
      <div className={styles.grid} />
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={`wrap ${styles.inner}`}>
        {/* ── LEFT: text ── */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Open to Opportunities · {personal.location}
          </div>

          <h1 className={styles.name}>{personal.name}</h1>

          <div className={styles.titleRow}>
            <span className={styles.slash}>//</span> {personal.title}
          </div>

          <p className={styles.tagline}>{personal.tagline}</p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <button className="btn-p" onClick={() => onNav('Projects')}>
              View Projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </button>
            <a href={personal.resumeView} target="_blank" rel="noopener noreferrer" className="btn-o">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View Resume
            </a>
            <a href={personal.resumeDL} className="btn-o">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>

          {/* Social pills */}
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.label} href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.pill}>
                {SocialIcons[s.icon]}
                <span>{s.label}</span>
              </a>
            ))}
          </div>

          {/* Stats row */}
          <div className={styles.stats}>
            {aboutStats.map(s => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo ── */}
        <div className={styles.photoWrap}>
          <div className={styles.ring}>
            <div className={styles.frame}>
              {personal.photo ? (
                <img src={personal.photo} alt={personal.name} className={styles.photo} />
              ) : (
                <div className={styles.photoPlaceholder}>
                  <span className={styles.initials}>LU</span>
                  <span className={styles.photoHint}>Add your photo in<br/><code>src/assets/profile.jpg</code><br/>and update portfolioData.js</span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.float1}>☕ Java Expert</div>
          <div className={styles.float2}>⚛️ React Dev</div>
          <div className={styles.float3}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bengaluru
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scroll} onClick={() => onNav('About')}>
        <div className={styles.mouse}><div className={styles.wheel}/></div>
        <span>scroll to explore</span>
      </div>
    </section>
  );
}
