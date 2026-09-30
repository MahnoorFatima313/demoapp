import { useEffect, useRef } from "react";

export default function useAutoScroll(speed = 50) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const box = track.parentElement;

    let x = 0;
    let last = performance.now();
    let raf;
    let paused = false;
    let resumeTimer;

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1); // avoids a jump after switching tabs
      last = now;
      if (!paused) {
        x -= speed * dt;
        const half = track.scrollWidth / 2;
        if (half > 0 && -x >= half) x += half; // seamless loop
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause on mouse hover only (not on touch)
    const onEnter = (e) => { if (e.pointerType === "mouse") paused = true; };
    const onLeave = (e) => { if (e.pointerType === "mouse") paused = false; };
    // Touch: pause while the finger is down, resume shortly after
    const onTouchStart = () => { clearTimeout(resumeTimer); paused = true; };
    const onTouchEnd = () => { resumeTimer = setTimeout(() => (paused = false), 1500); };

    box.addEventListener("pointerenter", onEnter);
    box.addEventListener("pointerleave", onLeave);
    box.addEventListener("touchstart", onTouchStart, { passive: true });
    box.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      box.removeEventListener("pointerenter", onEnter);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("touchstart", onTouchStart);
      box.removeEventListener("touchend", onTouchEnd);
    };
  }, [speed]);

  return trackRef;
}