import React, { useEffect, useRef, useState } from 'react';
import ceoImg from '../assets/ceo-qllmsoft.webp';
import './FounderNote.css';

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2.5 6.3l2.3 2.3 4.7-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FounderNote = ({ title, message = '' }) => {
  const rootRef = useRef(null);
  const [typed, setTyped] = useState('');
  const [started, setStarted] = useState(false);
  const done = typed.length >= message.length;

  // start typing when the section scrolls into view
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(message);
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [message]);

  useEffect(() => {
    if (!started || done) return;
    const t = setTimeout(() => setTyped(message.slice(0, typed.length + 1)), typed.length === 0 ? 700 : 16);
    return () => clearTimeout(t);
  }, [started, typed, message, done]);

  // pointer-follow light on the glass panels
  const handleMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--fn-mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--fn-my', `${e.clientY - r.top}px`);
  };

  return (
    <section className="fn-section" ref={rootRef} aria-labelledby="fn-title">
      {/* floating colour blobs (give the glass something to blur) */}
      <span className="fn-blob fn-blob--navy" aria-hidden="true" />
      <span className="fn-blob fn-blob--gold" aria-hidden="true" />
      <span className="fn-blob fn-blob--sky" aria-hidden="true" />
      <span className="fn-grid" aria-hidden="true" />

      <div className="fn-layout">
        {/* ---------- profile glass card ---------- */}
        <div className="fn-profile fn-glass" onMouseMove={handleMove}>
          <div className="fn-avatar">
            <span className="fn-avatar__ring" aria-hidden="true" />
            <span className="fn-avatar__orbit" aria-hidden="true"><i /></span>
            <div className="fn-avatar__photo">
              <img src={ceoImg} alt="Zain Ul Abedin, QllmSoft Founder" loading="lazy" />
            </div>
            <div className="fn-chip fn-chip--years">
              <strong>15+</strong>
              <span>Years Exp.</span>
            </div>
          </div>

          <div className="fn-profile__id">
            <h3>Zain Ul Abedin</h3>
            <p>Founder &amp; Team Lead</p>
          </div>

          <div className="fn-tags">
            <span className="fn-tag"><CheckIcon /> Upwork Verified</span>
            <span className="fn-tag"><CheckIcon /> Top Rated Plus</span>
          </div>
        </div>

        {/* ---------- terminal note ---------- */}
        <div className="fn-terminal fn-glass fn-glass--dark" onMouseMove={handleMove}>
          <div className="fn-terminal__bar">
            <span className="fn-dot fn-dot--r" />
            <span className="fn-dot fn-dot--y" />
            <span className="fn-dot fn-dot--g" />
            <span className="fn-terminal__title">founder@qllmsoft: ~/note</span>
            <span className="fn-terminal__status">
              <i /> online
            </span>
          </div>

          <div className="fn-terminal__body">
            <p className="fn-line">
              <span className="fn-prompt">$</span> <span className="fn-cmd">whoami</span>
            </p>
            <p className="fn-out">zain-ul-abedin <em>// founder, team lead</em></p>

            <p className="fn-line">
              <span className="fn-prompt">$</span> <span className="fn-cmd">cat</span>{' '}
              <span className="fn-arg">founder_note.txt</span>
            </p>

            <h2 id="fn-title" className="fn-title">
              <span className="fn-hash">#</span> {title}
            </h2>

            <p className="fn-message" aria-label={message}>
              <span aria-hidden="true">{typed}</span>
              <span className={`fn-cursor ${done ? 'is-idle' : ''}`} aria-hidden="true" />
            </p>

            <p className={`fn-line fn-line--cta ${done ? 'is-visible' : ''}`}>
              <span className="fn-prompt">$</span>{' '}
              <a href="/contact" className="fn-run">
                <span className="fn-run__text">./start-direct-consultation</span>
                <span className="fn-run__tag">Run</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;