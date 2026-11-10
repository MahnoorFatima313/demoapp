import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ArrowUp, Youtube, Twitter } from 'lucide-react';
import { companyInfo, navigationLinks } from '../data/mock';
import logo from '../assets/qllmsoft-web-desktop-mobile-app-logo.webp';
import './Footer.css';


const useParticles = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const host = canvas.parentElement.parentElement; // <footer>
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cols = ['30,90,168', '30,90,168', '14,30,51', '214,161,37'];
    const LINK = 135, BEAM = 170;

    let w = 0, h = 0, raf = 0, visible = true, pts = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const r = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(110, Math.max(28, (w * h) / 11000)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 - 0.05,
        r: Math.random() * 1.6 + 0.8,
        c: cols[(Math.random() * cols.length) | 0],
        glow: Math.random() < 0.14,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 90 && d > 0) { p.x += (dx / d) * 0.9; p.y += (dy / d) * 0.9; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(30,90,168,${(1 - d / LINK) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < BEAM) {
          ctx.strokeStyle = `rgba(214,161,37,${(1 - dm / BEAM) * 0.7})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${p.c},${p.glow ? 0.95 : 0.7})`;
        if (p.glow) { ctx.shadowColor = 'rgba(214,161,37,.9)'; ctx.shadowBlur = 14; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.glow ? p.r + 1 : p.r, 0, 6.283); ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (!reduce && visible) raf = requestAnimationFrame(frame);
    };

    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    resize(); frame();
    const ro = new ResizeObserver(() => { resize(); if (reduce) frame(); });
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(frame);
    });
    io.observe(host);
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [canvasRef]);
};

const services = [
  ['/website-development-services', 'Web Development'],
  ['/mobile-app-development', 'Mobile Apps'],
  ['/api-development-services', 'API Development'],
  ['/custom-software-development-services', 'Custom Software'],
  ['/digital-marketing-services', 'Digital Marketing'],
  ['/ai-document-management-software', 'QllmDocs'],
];

const Footer = () => {
  const canvasRef = useRef(null);
  useParticles(canvasRef);
  const year = new Date().getFullYear();
  const { socialLinks } = companyInfo;

  const socials = [
    ['ln', 'LinkedIn', socialLinks.linkedin, <Linkedin size={17} />],
    ['fb', 'Facebook', socialLinks.facebook, <Facebook size={17} />],
    ['yt', 'YouTube', socialLinks.youtube, <Youtube size={17} />],
    ['x', 'X', socialLinks.twitter, <Twitter size={17} />],
    ['ig', 'Instagram', socialLinks.instagram, <Instagram size={17} />],
  ];

  return (
    <footer className="footer">
      {/* original background: grid, scan sweep, particle network */}
      <div className="footer-sky" aria-hidden="true">
        <span className="footer-grid-bg" />
        <span className="footer-scan" />
        <canvas ref={canvasRef} className="footer-canvas" />
      </div>

      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="QllmSoft home">
              <img src={logo} alt="QllmSoft" />
            </Link>
            <p>Software development for startups, businesses and eCommerce brands that want results, not just a website.</p>
            <div className="footer-social">
              {socials.map(([cls, label, href, icon]) => (
                <a key={cls} className={cls} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a>
              ))}
            </div>
          </div>

          <nav className="footer-col" aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul>
              {navigationLinks.map((l) => <li key={l.path}><Link to={l.path}>{l.name}</Link></li>)}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <h4>Services</h4>
            <ul>
              {services.map(([p, n]) => <li key={p}><Link to={p}>{n}</Link></li>)}
            </ul>
          </nav>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><MapPin size={16} /><span>{companyInfo.address}</span></li>
              <li><Phone size={16} /><a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></li>
              <li><Mail size={16} /><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></li>
            </ul>
            <Link to="/contact" className="footer-cta">Get a free quote</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} QllmSoft. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-services">Terms of Service</Link>
            <button type="button" className="to-top" aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;