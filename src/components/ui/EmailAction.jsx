import { profile } from '../../data';
import Icon from './Icon';
import useCopy from '../../hooks/useCopy';
import styles from './EmailAction.module.css';

const SUBJECT = 'Opportunity for you — SDE / SDET';
const BODY = `Hi Laukik,

I came across your portfolio and would like to talk about a role.

Company:
Role:
Location:

`;

export const MAILTO =
  `mailto:${profile.email}` +
  `?subject=${encodeURIComponent(SUBJECT)}` +
  `&body=${encodeURIComponent(BODY)}`;

export const GMAIL_COMPOSE =
  'https://mail.google.com/mail/?view=cm&fs=1' +
  `&to=${encodeURIComponent(profile.email)}` +
  `&su=${encodeURIComponent(SUBJECT)}` +
  `&body=${encodeURIComponent(BODY)}`;

/**
 * Shared behaviour for every email link on the site: fire mailto for people who
 * have a client, and copy the address regardless so the click is never a no-op.
 */
export function useEmailLink() {
  const { copied, copy } = useCopy();
  return {
    href: MAILTO,
    onClick: () => { copy(profile.email); },
    copied,
  };
}

/**
 * A mailto: link is a dead end on any machine with no mail client registered —
 * the click silently does nothing, which is what "Email me doesn't work" means
 * in practice. So every path is covered here: the click still fires mailto for
 * people who have a client, copies the address regardless, and a Gmail web
 * fallback is always one tap away.
 */
export default function EmailAction({ variant = 'primary' }) {
  const { copied, copy } = useCopy();

  const handleClick = () => { copy(profile.email); };

  if (variant === 'inline') {
    return (
      <span className={styles.inline}>
        <a href={MAILTO} onClick={handleClick} className={styles.inlineLink}>
          {profile.email}
        </a>
        <button
          type="button"
          className={styles.copyBtn}
          onClick={() => copy(profile.email)}
          aria-label={copied ? 'Address copied' : 'Copy email address'}
          title={copied ? 'Copied' : 'Copy address'}
        >
          <Icon name={copied ? 'check' : 'clipboard'} size={13} />
        </button>
      </span>
    );
  }

  return (
    <div className={styles.shell}>
      <div className={styles.row}>
        <a href={MAILTO} onClick={handleClick} className="btn btn-primary">
          <Icon name="email" size={15} />
          Email me
        </a>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => copy(profile.email)}
        >
          <Icon name={copied ? 'check' : 'clipboard'} size={15} />
          {copied ? 'Copied' : 'Copy address'}
        </button>
      </div>

      <p className={styles.helper} data-copied={copied}>
        {copied ? (
          <>
            <Icon name="check" size={12} />
            <strong>{profile.email}</strong> copied to your clipboard.
          </>
        ) : (
          <>
            <span className={styles.address}>{profile.email}</span>
            <span className={styles.sep}>·</span>
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gmail}
            >
              open in Gmail <Icon name="external" size={11} />
            </a>
          </>
        )}
      </p>
    </div>
  );
}
