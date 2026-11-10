import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import "./ServiceCoverflow.css";

/**
 * ServiceCoverflow
 * 3D coverflow carousel for the "What we build" section.
 *
 * Interaction: drag / swipe, arrow keys, prev / next buttons, dots,
 * click a side card to bring it forward, autoplay (pauses on hover/focus).
 * Respects prefers-reduced-motion. Loops infinitely.
 *
 * Requires:  npm i framer-motion
 */

const METRICS = {
  // gap = horizontal distance between cards, depth = how far side cards recede
  lg: { gap: 270, depth: 170, rotate: 46, visible: 3 },
  md: { gap: 210, depth: 140, rotate: 44, visible: 2 },
  sm: { gap: 118, depth: 110, rotate: 38, visible: 1 },
};

const getBreakpoint = () => {
  if (typeof window === "undefined") return "lg";
  const w = window.innerWidth;
  if (w < 640) return "sm";
  if (w < 1100) return "md";
  return "lg";
};

/* Shortest signed distance on a circular list */
const circularOffset = (index, active, total) => {
  let d = index - active;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
};

const ServiceCoverflow = ({ services = [], autoPlay = true, interval = 5200 }) => {
  const total = services.length;
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [bp, setBp] = useState(getBreakpoint);
  const stageRef = useRef(null);
  const didPan = useRef(false);

  const m = METRICS[bp];

  const go = useCallback(
    (dir) => setActive((c) => (c + dir + total) % total),
    [total]
  );

  /* responsive metrics */
  useEffect(() => {
    const onResize = () => setBp(getBreakpoint());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* autoplay */
  useEffect(() => {
    if (!autoPlay || paused || reduceMotion || total < 2) return undefined;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, reduceMotion, interval, go, total]);

  /* keep off-center cards out of the tab order (links/buttons inside ServiceCard) */
  useEffect(() => {
    if (!stageRef.current) return;
    stageRef.current.querySelectorAll("[data-slide]").forEach((slide) => {
      const isActive = Number(slide.dataset.slide) === active;
      slide.querySelectorAll("a, button").forEach((el) => {
        if (isActive) el.removeAttribute("tabindex");
        else el.setAttribute("tabindex", "-1");
      });
    });
  }, [active, services]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  };

  const onPanEnd = (_, info) => {
    const { x } = info.offset;
    const vx = info.velocity.x;
    if (Math.abs(x) > 60 || Math.abs(vx) > 450) {
      didPan.current = true;
      go(x < 0 ? 1 : -1);
      window.setTimeout(() => { didPan.current = false; }, 80);
    }
  };

  if (!total) return null;

  return (
    <div
      className="cf"
      role="region"
      aria-roledescription="carousel"
      aria-label="What QllmSoft builds"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ "--cf-card-w": bp === "sm" ? "min(300px, 74vw)" : "340px" }}
    >
      <motion.div
        ref={stageRef}
        className="cf-stage"
        onPanEnd={onPanEnd}
        style={{ touchAction: "pan-y" }}
      >
        {services.map((service, i) => {
          const d = circularOffset(i, active, total);
          const abs = Math.abs(d);
          const sign = Math.sign(d);
          const inRange = abs <= m.visible;
          const isActive = d === 0;

          return (
            <motion.div
              key={service.id ?? i}
              data-slide={i}
              className={`cf-slide ${isActive ? "is-active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={!isActive}
              initial={false}
              animate={{
                x: d * m.gap,
                z: -abs * m.depth + (isActive ? 40 : 0),
                rotateY: isActive ? 0 : -sign * m.rotate,
                scale: isActive ? 1 : Math.max(0.72, 1 - abs * 0.09),
                opacity: inRange ? (isActive ? 1 : Math.max(0.35, 1 - abs * 0.22)) : 0,
                filter: isActive ? "brightness(1)" : `brightness(${Math.max(0.72, 1 - abs * 0.12)})`,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 190, damping: 26, mass: 0.9 }
              }
              style={{ zIndex: 20 - abs, pointerEvents: inRange ? "auto" : "none" }}
              /* clicking a side card focuses it instead of navigating */
              onClickCapture={(e) => {
                if (didPan.current) { e.preventDefault(); e.stopPropagation(); return; }
                if (!isActive) {
                  e.preventDefault();
                  e.stopPropagation();
                  setActive(i);
                }
              }}
            >
              <div className="cf-card">
                <ServiceCard service={service} />
              </div>
              <span className="cf-reflection" aria-hidden="true" />
            </motion.div>
          );
        })}
        <span className="cf-floor" aria-hidden="true" />
      </motion.div>

      <div className="cf-controls">
        <button type="button" className="cf-arrow" onClick={() => go(-1)} aria-label="Previous service">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
        </button>

        <div className="cf-dots" role="tablist" aria-label="Choose a service">
          {services.map((s, i) => (
            <button
              key={s.id ?? i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show service ${i + 1}`}
              className={`cf-dot ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <button type="button" className="cf-arrow" onClick={() => go(1)} aria-label="Next service">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>

      <p className="cf-live" aria-live="polite">
        {active + 1} of {total}
      </p>
    </div>
  );
};

export default ServiceCoverflow;