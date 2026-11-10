import React, { useEffect, useRef } from 'react';

/**
 * Floating particle network.
 *  - fixed   : fills the viewport (use as a page background; particles drift with scroll depth)
 *  - palette : 'light' for light backgrounds, 'dark' for the video hero
 * Nodes drift, link to neighbours, and a gold beam follows the cursor.
 * Pauses when off-screen / tab hidden; reduced motion renders one still frame.
 */
const PALETTES = {
  light: { cols: ['30,90,168', '30,90,168', '14,30,51', '214,161,37'], link: '30,90,168', linkA: 0.26, beam: '214,161,37', glow: '214,161,37' },
  dark: { cols: ['120,200,255', '120,200,255', '255,255,255', '240,200,98'], link: '120,200,255', linkA: 0.34, beam: '240,200,98', glow: '240,200,98' },
};

const ParticleField = ({ fixed = false, palette = 'light', density = 12000, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const P = PALETTES[palette] || PALETTES.light;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LINK = 135, BEAM = 170;

    let w = 0, h = 0, raf = 0, visible = true, sy = 0, pts = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (fixed) { w = window.innerWidth; h = window.innerHeight; }
      else { const r = canvas.parentElement.getBoundingClientRect(); w = r.width; h = r.height; }
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(fixed ? 85 : 100, Math.max(26, (w * h) / density)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.38, vy: (Math.random() - 0.5) * 0.38 - 0.05,
        r: Math.random() * 1.6 + 0.8,
        d: fixed ? Math.random() * 0.25 + 0.05 : 0, // scroll parallax depth
        c: P.cols[(Math.random() * P.cols.length) | 0],
        glow: Math.random() < 0.14,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
        p.dy = (((p.y - sy * p.d) % h) + h) % h;
        const dx = p.x - mouse.x, dy = p.dy - mouse.y, d = Math.hypot(dx, dy);
        if (d < 90 && d > 0) { p.x += (dx / d) * 0.9; p.y += (dy / d) * 0.9; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.dy - b.dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${P.link},${(1 - d / LINK) * P.linkA})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.dy); ctx.lineTo(b.x, b.dy); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.dy - mouse.y);
        if (dm < BEAM) {
          ctx.strokeStyle = `rgba(${P.beam},${(1 - dm / BEAM) * 0.7})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(a.x, a.dy); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${p.c},${p.glow ? 0.95 : 0.7})`;
        if (p.glow) { ctx.shadowColor = `rgba(${P.glow},.9)`; ctx.shadowBlur = 14; }
        ctx.beginPath(); ctx.arc(p.x, p.dy, p.glow ? p.r + 1 : p.r, 0, 6.283); ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (!reduce && visible) raf = requestAnimationFrame(frame);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onScroll = () => { sy = window.scrollY; if (reduce) frame(); };

    resize(); frame();
    const target = fixed ? document.documentElement : canvas.parentElement;
    const ro = new ResizeObserver(() => { resize(); if (reduce) frame(); });
    ro.observe(target);
    let io;
    if (!fixed) {
      io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        cancelAnimationFrame(raf);
        if (visible && !reduce) raf = requestAnimationFrame(frame);
      });
      io.observe(canvas.parentElement);
    }
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io && io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [fixed, palette, density]);

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ position: fixed ? 'fixed' : 'absolute', inset: 0, pointerEvents: 'none', display: 'block', zIndex: 0 }}
    />
  );
};

export default ParticleField;