import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Clipboard write with a fallback for non-secure origins.
 *
 * navigator.clipboard is undefined on plain http:// (anything other than
 * localhost), which is exactly where a portfolio gets previewed from a phone on
 * the local network — so the execCommand path is not legacy cruft, it is the
 * path that actually runs in that case.
 */
export default function useCopy(resetAfter = 2400) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async text => {
      let ok = false;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          ok = true;
        }
      } catch {
        ok = false;
      }

      if (!ok) {
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.top = '-1000px';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          ok = document.execCommand('copy');
          document.body.removeChild(ta);
        } catch {
          ok = false;
        }
      }

      if (ok) {
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetAfter);
      }
      return ok;
    },
    [resetAfter]
  );

  return { copied, copy };
}
