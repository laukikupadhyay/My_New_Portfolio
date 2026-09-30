import { certifications } from '../data';
import Section from './ui/Section';
import Icon from './ui/Icon';
import useSpotlight from '../hooks/useSpotlight';
import styles from './Certifications.module.css';

function CertCard({ cert }) {
  const ref = useSpotlight();
  const Tag = cert.url ? 'a' : 'div';

  return (
    <Tag
      ref={ref}
      {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${styles.card} spot reveal`}
      data-track={cert.track}
      data-link={Boolean(cert.url)}
    >
      <span className="spot-glow" aria-hidden="true" />
      <span className={styles.icon}><Icon name={cert.icon} size={19} /></span>
      <div className={styles.body}>
        <span className={styles.kind}>{cert.kind}</span>
        <h3 className={styles.title}>{cert.title}</h3>
        <p className={styles.issuer}>{cert.issuer}</p>
      </div>
      {cert.url && <Icon name="external" size={14} className={styles.ext} />}
    </Tag>
  );
}

export default function Certifications() {
  return (
    <Section
      id="certs"
      num="08"
      eyebrow="Recognition"
      title={<>Certifications &amp; <em>achievements</em></>}
    >
      <div className={styles.grid}>
        {certifications.map(cert => <CertCard key={cert.id} cert={cert} />)}
      </div>
    </Section>
  );
}
