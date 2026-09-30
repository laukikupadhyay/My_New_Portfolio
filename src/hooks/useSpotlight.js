import { useEffect, useRef } from 'react';

/**
 * Publishes the cursor's position inside an element as --mx / --my so CSS can
 * render a glow that tracks the pointer.
 *
 * Writing custom properties rather than re-rendering keeps this off React's
 * critical path entirely — the browser just recomposites a gradient.
 * Attaches only on fine pointers, and stays off under reduced-motion.
 */
export default function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const onMove = e => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        frame = 0;
      });
    };

    const onLeave = () => {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      el.style.removeProperty('--mx');
      el.style.removeProperty('--my');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
