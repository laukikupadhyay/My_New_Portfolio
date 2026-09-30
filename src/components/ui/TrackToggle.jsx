import styles from './TrackToggle.module.css';

/**
 * Dual-track filter. Lets a backend hiring manager read only Development and
 * an SDET manager read only Testing, while "Both" tells the whole story.
 */
export default function TrackToggle({ value, onChange, options, label = 'Filter by track' }) {
  return (
    <div className={styles.shell} role="group" aria-label={label}>
      <span className={styles.caption}>{label}</span>
      <div className={styles.group}>
        {options.map(opt => {
          const selected = value === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              className={styles.btn}
              data-selected={selected}
              data-track={opt.key === 'all' ? undefined : opt.key}
              aria-pressed={selected}
              onClick={() => onChange(opt.key)}
            >
              {opt.key !== 'all' && <span className={styles.dot} aria-hidden="true" />}
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
