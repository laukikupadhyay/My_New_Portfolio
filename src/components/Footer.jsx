import { personal } from '../data/portfolioData';
import styles from './Footer.module.css';

const NAV = ['About','Tech Stack','Projects','Experience','Education','Certifications','Contact'];

export default function Footer({ onNav }) {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.left}>
          <a href="#" className={styles.logo}>Laukik<span>.</span></a>
          <p className={styles.copy}>Designed & built by {personal.name} · {new Date().getFullYear()}</p>
        </div>
        <div className={styles.links}>
          {NAV.map(n => (
            <button key={n} className={styles.link} onClick={() => onNav(n)}>{n}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}
