import { useEffect, useState } from 'react';

/**
 * Tracks which section owns the viewport.
 * Picks the candidate closest to the reading line (~38% down) rather than
 * trusting observer fire order, which is what makes naive versions flicker
 * when two sections intersect at once.
 */
export default function useActiveSection(ids, { offset = 0.38 } = {}) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const line = window.innerHeight * offset;
      let best = null;
      let bestDistance = Infinity;

      ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const { top, bottom } = el.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) return;
        const distance = Math.abs(top - line);
        if (distance < bestDistance) { bestDistance = distance; best = id; }
      });

      // Pin the last section once the page is scrolled to the bottom,
      // otherwise short trailing sections can never win the measurement.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) best = ids[ids.length - 1];

      if (best) setActive(best);
      frame = 0;
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, offset]);

  return active;
}
