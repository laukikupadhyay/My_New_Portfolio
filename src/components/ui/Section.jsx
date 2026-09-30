import styles from './Section.module.css';

/**
 * Every section shares one shell: anchor id, track scoping, eyebrow with
 * index number, display title and optional lede.
 */
export default function Section({
  id, num, eyebrow, title, lede, track, aside, children,
}) {
  return (
    <section
      id={id}
      className={styles.section}
      data-track={track || undefined}
      aria-labelledby={`${id}-title`}
    >
      <div className="wrap">
        <header className={`${styles.head} reveal`}>
          <div className={styles.headMain}>
            {(num || eyebrow) && (
              <p className={styles.eyebrow}>
                {num && <span className={styles.num}>{num}</span>}
                <span className={styles.rule} aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
            {lede && <p className={styles.lede}>{lede}</p>}
          </div>
          {aside && <div className={styles.aside}>{aside}</div>}
        </header>
        {children}
      </div>
    </section>
  );
}
