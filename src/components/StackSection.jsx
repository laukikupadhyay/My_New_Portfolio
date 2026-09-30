import { useState } from 'react';
import Section from './ui/Section';
import Icon from './ui/Icon';
import useSpotlight from '../hooks/useSpotlight';
import styles from './StackSection.module.css';

/**
 * Skills with `logo: null` have no brand mark by design — a concept like RBAC
 * or Debugging has no logo to show. Those get a gradient dot, which reads as
 * intentional. Initials are reserved for a logo that genuinely failed to load.
 */
function SkillMark({ skill }) {
  const [failed, setFailed] = useState(false);

  if (!skill.logo) {
    return <span className={styles.dot} aria-hidden="true" />;
  }

  if (failed) {
    const initials = skill.name
      .replace(/[^A-Za-z0-9 /]/g, '')
      .split(/[\s/]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0])
      .join('')
      .toUpperCase();
    return <span className={styles.mark} aria-hidden="true">{initials}</span>;
  }

  return (
    <img
      src={skill.logo}
      alt=""
      loading="lazy"
      decoding="async"
      className={styles.logo}
      data-invert={skill.invert || undefined}
      onError={() => setFailed(true)}
    />
  );
}

function StackCard({ group }) {
  const ref = useSpotlight();

  return (
    <article ref={ref} className={`${styles.card} reveal`}>
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.edge} aria-hidden="true" />

      <header className={styles.cardHead}>
        <span className={styles.groupIcon}>
          <Icon name={group.icon || 'code'} size={16} />
        </span>
        <h3 className={styles.cardTitle}>{group.name}</h3>
        <span className={styles.cardCount}>
          {String(group.skills.length).padStart(2, '0')}
        </span>
      </header>

      <p className={styles.focus}>{group.focus}</p>

      <ul className={styles.pills}>
        {group.skills.map(skill => (
          <li
            key={skill.name}
            className={styles.pill}
            data-primary={skill.primary || undefined}
          >
            <SkillMark skill={skill} />
            <span className={styles.pillName}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function StackSection({ id, num, stack, counterpart }) {
  const total = stack.groups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <Section
      id={id}
      num={num}
      eyebrow={stack.eyebrow}
      title={<em>{stack.title}</em>}
      lede={stack.blurb}
      track={stack.track}
      aside={
        <div className={styles.aside}>
          <span className={styles.count}>{total}</span>
          <span className={styles.countLabel}>
            tools &amp; practices
            <br />
            across {stack.groups.length} areas
          </span>
        </div>
      }
    >
      <div className={styles.grid}>
        {stack.groups.map(group => (
          <StackCard key={group.name} group={group} />
        ))}
      </div>

      {counterpart && (
        <a
          href={`#${counterpart.id}`}
          className={`${styles.bridge} reveal`}
          data-track={counterpart.track}
        >
          <span className={styles.bridgeLabel}>{counterpart.prefix}</span>
          <span className={styles.bridgeTitle}>{counterpart.title}</span>
          <Icon name="arrowDown" size={16} className={styles.bridgeIcon} />
        </a>
      )}
    </Section>
  );
}
