import { profile, socials } from '../data';
import Section from './ui/Section';
import Icon from './ui/Icon';
import EmailAction, { useEmailLink } from './ui/EmailAction';
import styles from './Contact.module.css';

const LOOKING_FOR = [
  'SDE roles — Java / Spring Boot backend, or full-stack with React',
  'SDET roles — automation across mobile, web and API',
  'Teams that treat test engineering as engineering',
];

export default function Contact() {
  const mail = useEmailLink();

  return (
    <Section
      id="contact"
      num="09"
      eyebrow="Contact"
      title={<>Let us <em>talk</em></>}
      lede="I am currently at BestQ and not in a hurry — but I do read every message, and I will always reply to a real one."
    >
      <div className={styles.layout}>
        <div className={`${styles.primary} reveal`}>
          <p className={styles.kicker}>What I am open to</p>
          <ul className={styles.looking}>
            {LOOKING_FOR.map(item => (
              <li key={item} className={styles.lookingItem}>
                <Icon name="check" size={13} className={styles.tick} />
                {item}
              </li>
            ))}
          </ul>

          <EmailAction />

          <div className={styles.ctaRow}>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="btn btn-ghost">
              <Icon name="phone" size={15} /> Call
            </a>
            <a
              href={profile.resumeView}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="download" size={15} /> Résumé
            </a>
          </div>

          <p className={styles.response}>
            <span className={styles.responseDot} aria-hidden="true" />
            Based in {profile.location} · {profile.workMode}
          </p>
        </div>

        <ul className={`${styles.channels} reveal`}>
          {socials.map(s => (
            <li key={s.label}>
              <a
                href={s.icon === 'email' ? mail.href : s.url}
                onClick={s.icon === 'email' ? mail.onClick : undefined}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.channel}
              >
                <span className={styles.channelIcon}><Icon name={s.icon} size={17} /></span>
                <span className={styles.channelBody}>
                  <span className={styles.channelLabel}>
                    {s.label}
                    {s.icon === 'email' && mail.copied && (
                      <span className={styles.copiedTag}>copied</span>
                    )}
                  </span>
                  <span className={styles.channelHandle}>{s.handle}</span>
                </span>
                <Icon name="arrowRight" size={15} className={styles.channelArrow} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
