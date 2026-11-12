import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import "./TechnologiesSlider.css";
import useAutoScroll from "../hooks/useAutoScroll";
import awsLogo from "../assets/aws-logo.svg";

const techList = [
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Blazor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: ".NET MAUI", icon: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/dotnet/icon.svg" },
  { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
  { name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: awsLogo },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
];

const COUNT = techList.length;
const STEP = 360 / COUNT;          // degrees between items on the ring
const AUTO_SPEED = -2.5;           // deg/s, negative = items travel left at the front
const DEG_PER_PX = 0.18;           // drag sensitivity
const TILT = 0.3;                  // vertical radius of the oval ring

const METRICS = {
  lg: { radius: 390, tile: 62, height: 340 },
  md: { radius: 310, tile: 54, height: 300 },
  sm: { radius: 205, tile: 42, height: 250 },
};

const getBreakpoint = () => {
  if (typeof window === "undefined") return "lg";
  const w = window.innerWidth;
  if (w < 640) return "sm";
  if (w < 1100) return "md";
  return "lg";
};

const toRad = (deg) => (deg * Math.PI) / 180;

/* One icon on the ring. Position, depth, fade and blur are all derived
   from the ring rotation, so nothing re-renders while it spins. */
const RingItem = ({ tech, index, rot, ringR }) => {
  const base = index * STEP;

  const x = useTransform([rot, ringR], ([r, R]) => R * Math.sin(toRad(base + r)));
  const z = useTransform([rot, ringR], ([r, R]) => R * (Math.cos(toRad(base + r)) - 1));
  const y = useTransform([rot, ringR], ([r, R]) => R * TILT * Math.cos(toRad(base + r)));
  const depth = (r) => (1 + Math.cos(toRad(base + r))) / 2; // 1 = front, 0 = back
  const opacity = useTransform(rot, (r) => 0.4 + 0.6 * Math.pow(depth(r), 0.8));
  const filter = useTransform(rot, (r) => `blur(${((1 - depth(r)) * 2.6).toFixed(2)}px)`);
  const zIndex = useTransform(rot, (r) => Math.round(depth(r) * 100));

  return (
    <motion.li className="tr-item" style={{ x, y, z, opacity, filter, zIndex }}>
      <div className="tr-float" style={{ animationDelay: `${-(index * 0.47).toFixed(2)}s` }}>
        <span className="tr-tile">
          <img
            className="tr-icon"
            src={tech.icon}
            alt=""
            width="64"
            height="64"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </span>
        <span className="tr-label">{tech.name}</span>
      </div>
    </motion.li>
  );
};

const CompactTechMarquee = () => {
  const trackRef = useAutoScroll(65);

  return (
    <div
      className="tr-mobile-marquee"
      role="region"
      aria-roledescription="carousel"
      aria-label="Technologies we use"
    >
      <div className="tr-mobile-track" ref={trackRef}>
        {[false, true].map((isDuplicate) => (
          <div
            className="tr-mobile-group"
            key={isDuplicate ? "duplicate" : "original"}
            aria-hidden={isDuplicate}
          >
            {techList.map((tech) => (
              <div className="tr-mobile-card" key={tech.name}>
                <img src={tech.icon} alt="" width="56" height="56" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnologiesSlider = () => {
  const reduceMotion = useReducedMotion();
  const [bp, setBp] = useState(getBreakpoint);
  const [front, setFront] = useState(0);
  const m = METRICS[bp];

  const rot = useMotionValue(0);
  const ringR = useMotionValue(m.radius);

  const vel = useRef(reduceMotion ? 0 : AUTO_SPEED);
  const dragging = useRef(false);
  const focused = useRef(false);
  const last = useRef({ x: 0, t: 0 });
  const frontRef = useRef(0);

  useEffect(() => {
    const onResize = () => setBp(getBreakpoint());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => { ringR.set(m.radius); }, [m.radius, ringR]);

  /* which tech is currently at the front (drives the caption) */
  useEffect(
    () =>
      rot.on("change", (v) => {
        if (bp !== "lg") return;
        const idx = ((Math.round(-v / STEP) % COUNT) + COUNT) % COUNT;
        if (idx !== frontRef.current) {
          frontRef.current = idx;
          setFront(idx);
        }
      }),
    [bp, rot]
  );

  /* auto-rotate with eased start / stop and drag inertia */
  useAnimationFrame((_, dt) => {
    if (bp !== "lg" || dragging.current) return;
    const target = reduceMotion || focused.current ? 0 : AUTO_SPEED;
    vel.current += (target - vel.current) * Math.min(1, dt / 700);
    if (Math.abs(vel.current) > 0.01) rot.set(rot.get() + (vel.current * dt) / 1000);
  });

  /* drag to spin */
  const onPointerDown = (e) => {
    dragging.current = true;
    last.current = { x: e.clientX, t: performance.now() };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const now = performance.now();
    const dDeg = (e.clientX - last.current.x) * DEG_PER_PX;
    const dtSec = Math.max(8, now - last.current.t) / 1000;
    rot.set(rot.get() + dDeg);
    vel.current = Math.max(-420, Math.min(420, dDeg / dtSec));
    last.current = { x: e.clientX, t: now };
  };
  const endDrag = () => { dragging.current = false; };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); vel.current += 40; }
    if (e.key === "ArrowLeft") { e.preventDefault(); vel.current -= 40; }
  };

  return (
    <section className="tr-section" aria-labelledby="tr-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="tr-heading">Technologies We Use</h2>
          <p>Modern tools &amp; platforms powering our solutions</p>
        </div>
      </div>

      {bp !== "lg" ? (
        <CompactTechMarquee />
      ) : (
        <>
          <div
            className="tr-scene"
            role="region"
            aria-roledescription="carousel"
            aria-label="Technologies we use. Drag or use the arrow keys to rotate."
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            onFocus={() => { focused.current = true; }}
            onBlur={() => { focused.current = false; }}
            style={{
              "--tr-tile": `${m.tile}px`,
              "--tr-r": `${m.radius}px`,
              height: m.height,
            }}
          >
            <ul className="tr-ring">
              {techList.map((tech, i) => (
                <RingItem
                  key={tech.name + i}
                  tech={tech}
                  index={i}
                  rot={rot}
                  ringR={ringR}
                />
              ))}
            </ul>
          </div>

          <p className="tr-caption" aria-hidden="true">
            <span className="tr-caption-name">{techList[front].name}</span>
            <span className="tr-caption-hint">Drag to explore</span>
          </p>
        </>
      )}
    </section>
  );
};

export default TechnologiesSlider;