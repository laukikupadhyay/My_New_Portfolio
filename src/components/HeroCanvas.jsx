import { useEffect, useRef } from 'react';
import styles from './HeroCanvas.module.css';

/* Two-tone constellation field: indigo nodes = development, cyan = testing.
   Links only form between nodes of the same track, so the two networks read
   as parallel systems that happen to share a space — which is the point. */

const DEV = [129, 140, 248];   // --dev-400
const TEST = [103, 232, 249];  // --test-400

const CONFIG = {
  density: 11000,   // one node per N css-pixels² of canvas
  maxNodes: 96,
  linkDist: 132,
  speed: 0.16,
  pointerRadius: 160,
  pointerPush: 0.9,
};

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes = [];
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        CONFIG.maxNodes,
        Math.max(26, Math.round((width * height) / CONFIG.density))
      );

      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * CONFIG.speed,
        vy: (Math.random() - 0.5) * CONFIG.speed,
        r: Math.random() * 1.5 + 0.7,
        track: i % 2 === 0 ? DEV : TEST,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.012;

          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;

          if (pointer.active) {
            const dx = n.x - pointer.x;
            const dy = n.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist < CONFIG.pointerRadius && dist > 0.1) {
              const force = (1 - dist / CONFIG.pointerRadius) * CONFIG.pointerPush;
              n.x += (dx / dist) * force;
              n.y += (dy / dist) * force;
            }
          }
        }

        // Links — same track only.
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          if (m.track !== n.track) continue;
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist > CONFIG.linkDist) continue;

          const alpha = (1 - dist / CONFIG.linkDist) * 0.3;
          ctx.strokeStyle = `rgba(${n.track[0]},${n.track[1]},${n.track[2]},${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }

        const twinkle = reduced ? 0.7 : 0.55 + Math.sin(n.pulse) * 0.28;
        ctx.fillStyle = `rgba(${n.track[0]},${n.track[1]},${n.track[2]},${twinkle})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running && raf) return;
      running = true;
      if (!reduced) { raf = requestAnimationFrame(loop); } else { draw(); }
    };

    const stop = () => {
      running = false;
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
    };

    const onResize = () => { build(); draw(); };
    const onPointerMove = e => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => { pointer.active = false; };
    const onVisibility = () => (document.hidden ? stop() : start());

    build();
    start();

    /* Stop burning frames the moment the hero scrolls out of view. */
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.01 }
    );
    io.observe(canvas);

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
