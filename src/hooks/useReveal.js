import { useEffect } from 'react';

const STAGGER_STEP = 55;   // ms between siblings
const STAGGER_CAP = 4;     // stop compounding past this many, so grids never crawl

/**
 * One observer for the whole page. Any element carrying `.reveal` fades and
 * lifts in once, then stops being watched — so cost stays flat as the page grows.
 *
 * Siblings that share a parent are staggered automatically by their DOM index,
 * which means a grid of cards cascades in without any per-card markup.
 */
export default function useReveal({ threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = {}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)');

    if (prefersReduced) {
      nodes.forEach(n => n.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'))
            : [];
          const index = Math.min(siblings.indexOf(el), STAGGER_CAP);
          if (index > 0) el.style.setProperty('--reveal-delay', `${index * STAGGER_STEP}ms`);

          el.classList.add('is-visible');
          obs.unobserve(el);
        });
      },
      { threshold, rootMargin }
    );

    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  });
}
