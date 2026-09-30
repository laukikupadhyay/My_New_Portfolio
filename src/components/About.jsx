import { profile } from '../data';
import Section from './ui/Section';
import Icon from './ui/Icon';
import EmailAction from './ui/EmailAction';
import styles from './About.module.css';

const SIDES = [
  {
    track: 'dev',
    icon: 'code',
    label: 'I build',
    title: 'Development',
    lines: [
      'Permission & RBAC modules in a live platform',
      'API key issuing, scoping and revocation',
      'Spring Boot services behind REST APIs',
      'Hibernate / JPA onto PostgreSQL',
      'ReactJS front-ends and admin interfaces',
    ],
  },
  {
    track: 'test',
    icon: 'shield',
    label: 'I prove',
    title: 'Testing & QA',
    lines: [
      'Playwright end-to-end suites on the POM',
      'Appium journeys on real Android devices',
      'REST Assured + Postman contract checks',
      'Manual test design, regression, exploratory',
      'Everything reported through ReportPortal',
    ],
  },
];

const DETAILS = [
  { icon: 'pin',       label: 'Based in',  value: profile.location },
  { icon: 'briefcase', label: 'Currently', value: 'SDE + SDET at BestQ' },
  { icon: 'layers',    label: 'Work mode', value: profile.workMode },
  { icon: 'email',     label: 'Email',     email: true },
];

export default function About() {
  return (
    <Section
      id="about"
      num="01"
      eyebrow="About"
      title={<>Two disciplines, <em>one engineer</em></>}
      lede={profile.summary}
    >
      <div className={styles.layout}>
        <div className={`${styles.prose} reveal`}>
          <p className={styles.para}>{profile.summaryExtra}</p>

          <dl className={styles.details}>
            {DETAILS.map(d => (
              <div key={d.label} className={styles.detail}>
                <dt className={styles.dt}>
                  <Icon name={d.icon} size={13} />
                  {d.label}
                </dt>
                <dd className={styles.dd}>
                  {d.email ? <EmailAction variant="inline" /> : d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.sides}>
          {SIDES.map(side => (
            <article
              key={side.track}
              className={`${styles.side} reveal`}
              data-track={side.track}
            >
              <header className={styles.sideHead}>
                <span className={styles.sideIcon}><Icon name={side.icon} size={16} /></span>
                <div>
                  <p className={styles.sideLabel}>{side.label}</p>
                  <h3 className={styles.sideTitle}>{side.title}</h3>
                </div>
              </header>
              <ul className={styles.sideList}>
                {side.lines.map(line => (
                  <li key={line} className={styles.sideItem}>
                    <Icon name="check" size={12} className={styles.tick} />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <p className={`${styles.joint} reveal`}>
            <Icon name="spark" size={14} />
            The overlap is the point — I write the feature, then I write the test that
            catches the day it breaks.
          </p>
        </div>
      </div>
    </Section>
  );
}
