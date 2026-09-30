import { useState } from 'react';
import {
  pyramid, surfaces, defectTypes, dashboardWidgets,
  launchAttributes, stabilityPlaybook, snippets,
} from '../data';
import Section from './ui/Section';
import Icon from './ui/Icon';
import styles from './TestingShowcase.module.css';

export default function TestingShowcase() {
  const [surface, setSurface] = useState(surfaces[0].key);
  const [snippet, setSnippet] = useState(snippets[0].key);

  const activeSurface = surfaces.find(s => s.key === surface);
  const activeSnippet = snippets.find(s => s.key === snippet);

  return (
    <Section
      id="testing"
      num="05"
      eyebrow="Quality Engineering"
      title={<>How I <em>prove it works</em></>}
      lede="Most portfolios stop at what was built. This is the other half of my job — the strategy, the tooling and the reporting that decide whether a release is actually ready."
      track="test"
    >
      {/* ── Strategy: pyramid + surfaces ───────────────────── */}
      <div className={`${styles.strategy} reveal`}>
        <div className={styles.pyramidPanel}>
          <h3 className={styles.panelTitle}>
            <Icon name="layers" size={15} /> Test Strategy
          </h3>
          <p className={styles.panelNote}>
            Broad, cheap coverage at the base; a small, deliberate set of end-to-end
            journeys at the top.
          </p>

          <ul className={styles.pyramid}>
            {pyramid.map(layer => (
              <li key={layer.layer} className={styles.layer} data-tone={layer.tone}>
                <div className={styles.layerBar} style={{ width: `${layer.width}%` }}>
                  <span className={styles.layerName}>{layer.layer}</span>
                </div>
                <div className={styles.layerMeta}>
                  <p className={styles.layerNote}>{layer.note}</p>
                  <div className={styles.layerTools}>
                    {layer.tools.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.surfacePanel}>
          <h3 className={styles.panelTitle}>
            <Icon name="shield" size={15} /> Surfaces I own
          </h3>

          <div className={styles.tabs} role="tablist" aria-label="Test surfaces">
            {surfaces.map(s => (
              <button
                key={s.key}
                role="tab"
                aria-selected={surface === s.key}
                className={styles.tab}
                data-active={surface === s.key}
                onClick={() => setSurface(s.key)}
              >
                <Icon name={s.icon === 'phone' ? 'phoneMob' : s.icon} size={14} />
                {s.label}
              </button>
            ))}
          </div>

          <div className={styles.surfaceBody} role="tabpanel">
            <p className={styles.surfaceLead}>{activeSurface.lead}</p>
            <ul className={styles.surfaceList}>
              {activeSurface.points.map(p => (
                <li key={p} className={styles.surfaceItem}>
                  <Icon name="check" size={12} className={styles.tick} />
                  {p}
                </li>
              ))}
            </ul>
            <div className={styles.surfaceTools}>
              {activeSurface.tools.map(t => (
                <span key={t} className="tag tag-accent">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Code ───────────────────────────────────────────── */}
      <div className={`${styles.codePanel} reveal`}>
        <div className={styles.codeTabs} role="tablist" aria-label="Code samples">
          {snippets.map(s => (
            <button
              key={s.key}
              role="tab"
              aria-selected={snippet === s.key}
              className={styles.codeTab}
              data-active={snippet === s.key}
              onClick={() => setSnippet(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className={styles.codeWindow}>
          <div className={styles.codeBar}>
            <span className={styles.dots} aria-hidden="true">
              <i /><i /><i />
            </span>
            <span className={styles.codeFile}>{activeSnippet.file}</span>
            <span className={styles.codeLang}>{activeSnippet.lang}</span>
          </div>
          <pre className={styles.code}><code>{activeSnippet.code}</code></pre>
        </div>
      </div>

      {/* ── Reporting ──────────────────────────────────────── */}
      <div className={`${styles.reporting} reveal`}>
        <div className={styles.reportCard}>
          <h3 className={styles.panelTitle}>
            <Icon name="bug" size={15} /> Defect Classification
          </h3>
          <p className={styles.panelNote}>
            A red run is not one thing. Every failure lands in a category before anyone
            starts debugging — auto-analysis matches new failures against history.
          </p>
          <ul className={styles.defects}>
            {defectTypes.map(d => (
              <li key={d.key} className={styles.defect} data-tone={d.tone}>
                <span className={styles.defectDot} aria-hidden="true" />
                <div>
                  <p className={styles.defectLabel}>{d.label}</p>
                  <p className={styles.defectDesc}>{d.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.reportCard}>
          <h3 className={styles.panelTitle}>
            <Icon name="gauge" size={15} /> ReportPortal Dashboards
          </h3>
          <p className={styles.panelNote}>
            The widget set I configured, and the launch attributes that make any slice
            of results one filter away.
          </p>
          <ul className={styles.widgets}>
            {dashboardWidgets.map(w => (
              <li key={w.key} className={styles.widget}>
                <span className={styles.widgetLabel}>{w.label}</span>
                <span className={styles.widgetDesc}>{w.desc}</span>
              </li>
            ))}
          </ul>
          <div className={styles.attrs}>
            <span className={styles.attrsLabel}>Launch attributes</span>
            <div className={styles.attrChips}>
              {launchAttributes.map(a => (
                <code key={a} className={styles.attrChip}>{a}</code>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.reportCard}>
          <h3 className={styles.panelTitle}>
            <Icon name="spark" size={15} /> Flake Playbook
          </h3>
          <p className={styles.panelNote}>
            A suite nobody trusts is worse than no suite. This is how I keep red
            meaning something.
          </p>
          <ol className={styles.playbook}>
            {stabilityPlaybook.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
