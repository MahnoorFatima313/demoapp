import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mock';
import './ProjectSections.css';

const AUTO_DELAY = 4000;

const ProjectsSection = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
const scrollByCard = useCallback((dir) => {
  const el = trackRef.current;
  const card = el?.firstElementChild;
  if (!el || !card) return;
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
  const step = card.getBoundingClientRect().width + gap;
  const max = el.scrollWidth - el.clientWidth;

  let left = el.scrollLeft + dir * step;
  if (dir > 0 && el.scrollLeft >= max - 4) left = 0;
  if (dir < 0 && el.scrollLeft <= 4) left = max;

  el.scrollTo({ left, behavior: 'smooth' });
}, []);

useEffect(() => {
  if (paused) return;
  const id = setInterval(() => scrollByCard(1), AUTO_DELAY);
  return () => clearInterval(id);
}, [paused, scrollByCard]);

  

  return (
    <section className="section projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Latest Projects</h2>
          <p>Explore our recent work across web, mobile, and desktop applications</p>
        </div>

        <div
          className="custom-carousel-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 5000)}
        >
          <div className="custom-carousel" ref={trackRef}>
            {projects.map((project) => (
              <div className="carousel-card" key={project.id}>
                <Link to={`/projects#${project.slug}`}>
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <div className="carousel-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <button type="button" className="carousel-btn prev" aria-label="Previous project" onClick={() => scrollByCard(-1)}>‹</button>
          <button type="button" className="carousel-btn next" aria-label="Next project" onClick={() => scrollByCard(1)}>›</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;