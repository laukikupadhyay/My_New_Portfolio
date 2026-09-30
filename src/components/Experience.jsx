import { useState } from 'react';
import { experience, TRACK_META } from '../data';
import Section from './ui/Section';
import TrackToggle from './ui/TrackToggle';
import Icon from './ui/Icon';
import styles from './Experience.module.css';

const OPTIONS = [TRACK_META.all, TRACK_META.dev, TRACK_META.test];

/* Development reads first: it is the heavier track and the one most roles
   screen on. Content order stays owned by the data; this is reading order. */
const TRACK_ORDER = { dev: 0, test: 1 };

function Lane({ lane, company }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.lane} data-track={lane.track}>
      <header className={styles.laneHead}>
        <span className={styles.laneBadge}>{lane.short}</span>
        <div className={styles.laneTitles}>
          <h4 className={styles.laneRole}>{lane.role}</h4>
          <p className={styles.laneScope}>{lane.scope}</p>
        </div>
      </header>

      <ul className={styles.highlights}>
        {lane.highlights.map((h, i) => {
          const open = openIndex === i;
          return (
            <li key={h.title} className={styles.highlight} data-open={open}>
              <button
                type="button"
                className={styles.highlightBtn}
                aria-expanded={open}
                aria-controls={`${company}-${lane.track}-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span className={styles.highlightDot} aria-hidden="true" />
                <span className={styles.highlightTitle}>{h.title}</span>
                <Icon name="chevron" size={15} className={styles.chevron} />
              </button>

              <div
                id={`${company}-${lane.track}-${i}`}
                className={styles.highlightBody}
                hidden={!open}
              >
                <p className={styles.highlightDetail}>{h.detail}</p>
                <ul className={styles.stack}>
                  {h.stack.map(s => (
                    <li key={s} className="tag tag-accent">{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState('all');

  return (
    <Section
      id="experience"
      num="04"
      eyebrow="Experience"
      title={<>Two tracks, <em>run in parallel</em></>}
      lede="At BestQ I hold two roles at once — automating quality across three client products, and building the reporting platform those results land in. Filter to whichever track you are hiring for."
      aside={<TrackToggle value={filter} onChange={setFilter} options={OPTIONS} />}
    >
      <div className={styles.timeline}>
        {experience.map(job => {
          const lanes = job.tracks
            .filter(t => filter === 'all' || t.track === filter)
            .sort((a, b) => TRACK_ORDER[a.track] - TRACK_ORDER[b.track]);
          if (lanes.length === 0) {
            return (
              <div key={job.id} className={styles.emptyRow}>
                <span className={styles.emptyDot} aria-hidden="true" />
                <p className={styles.empty}>
                  <strong>{job.company}</strong> has no {TRACK_META[filter].label.toLowerCase()} track.
                </p>
              </div>
            );
          }

          return (
            <article key={job.id} className={`${styles.job} reveal`}>
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.railDot} data-current={job.current} />
                <span className={styles.railLine} />
              </div>

              <div className={styles.jobBody}>
                <header className={styles.jobHead}>
                  <div className={styles.jobIdentity}>
                    <h3 className={styles.company}>
                      {job.company}
                      {job.current && <span className={styles.now}>Now</span>}
                    </h3>
                    <p className={styles.jobMeta}>
                      <span><Icon name="briefcase" size={12} /> {job.employment}</span>
                      <span><Icon name="pin" size={12} /> {job.location}</span>
                      <span><Icon name="calendar" size={12} /> {job.period}</span>
                    </p>
                  </div>

                  {job.clients.length > 0 && (
                    <div className={styles.clients}>
                      <span className={styles.clientsLabel}>Clients</span>
                      <div className={styles.clientChips}>
                        {job.clients.map(c => (
                          <span key={c} className={styles.clientChip}>{c}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </header>

                <p className={styles.jobSummary}>{job.summary}</p>

                <div className={styles.lanes} data-single={lanes.length === 1}>
                  {lanes.map(lane => (
                    <Lane key={lane.track} lane={lane} company={job.id} />
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
