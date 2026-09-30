import { profile, socials, heroFacts } from '../data';
import HeroCanvas from './HeroCanvas';
import Icon from './ui/Icon';
import { useEmailLink } from './ui/EmailAction';
import useMagnetic from '../hooks/useMagnetic';
import styles from './Hero.module.css';

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const magnetRef = useMagnetic(0.2);
  const mail = useEmailLink();

  return (
    <section id="top" className={styles.hero}>
      <HeroCanvas />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.content}>
          {profile.availability.open && (
            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              {profile.availability.label}
              <span className={styles.statusSep} aria-hidden="true">/</span>
              <span className={styles.statusDetail}>{profile.availability.detail}</span>
            </p>
          )}

          <h1 className={styles.name}>
            {profile.name.split(' ')[0]}
            <br />
            <span className={styles.lastName}>{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* The dual identity, shown as two parallel tracks rather than
              a rotator — both are true at the same time. */}
          <div className={styles.tracks}>
            {profile.roles.map(role => (
              <div key={role.short} className={styles.track} data-track={role.track}>
                <span className={styles.trackShort}>{role.short}</span>
                <span className={styles.trackFull}>{role.full}</span>
              </div>
            ))}
          </div>

          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.ctas}>
            <span ref={magnetRef} className={styles.magnet}>
              <button className="btn btn-primary" onClick={() => go('experience')}>
                See my work
                <Icon name="arrowRight" size={15} />
              </button>
            </span>
            <a
              href={profile.resumeView}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="eye" size={15} /> View résumé
            </a>
            <a
              href={profile.resumeDL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="download" size={15} /> Download
            </a>
          </div>

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
                  title={s.icon === 'email' && mail.copied ? 'Address copied' : s.handle}
                >
                  <Icon name={s.icon} size={17} />
                </a>
              </li>
            ))}
            <li className={styles.locale}>
              <Icon name="pin" size={14} />
              {profile.location}
            </li>
          </ul>
        </div>

        <div className={styles.portraitWrap}>
          <div className={styles.orbit} aria-hidden="true" />
          <div className={styles.portrait}>
            <picture>
              <source type="image/avif" srcSet={profile.portrait.avif} sizes={profile.portrait.sizes} />
              <source type="image/webp" srcSet={profile.portrait.webp} sizes={profile.portrait.sizes} />
              <img
                src={profile.portrait.fallback}
                srcSet={profile.portrait.jpg}
                sizes={profile.portrait.sizes}
                alt={profile.name}
                className={styles.photo}
                width="800"
                height="803"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div className={styles.portraitFade} aria-hidden="true" />
          </div>

          <div className={`${styles.chip} ${styles.chipDev}`} data-track="dev">
            <Icon name="code" size={13} />
            Spring Boot · React
          </div>
          <div className={`${styles.chip} ${styles.chipTest}`} data-track="test">
            <Icon name="shield" size={13} />
            Playwright · Appium
          </div>
          <div className={`${styles.chip} ${styles.chipYears}`}>
            <Icon name="briefcase" size={13} />
            BestQ · since 2024
          </div>
        </div>
      </div>

      <ul className={styles.facts}>
        {heroFacts.map(f => (
          <li key={f.label} className={styles.fact} data-track={f.track}>
            <span className={styles.factValue}>{f.value}</span>
            <span className={styles.factLabel}>{f.label}</span>
            <span className={styles.factSub}>{f.sub}</span>
          </li>
        ))}
      </ul>

      <button className={styles.scrollHint} onClick={() => go('about')} aria-label="Scroll to About">
        <span className={styles.mouse} aria-hidden="true"><span className={styles.wheel} /></span>
        <span className={styles.scrollText}>Scroll</span>
      </button>
    </section>
  );
}
