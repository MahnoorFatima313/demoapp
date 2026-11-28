import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/ServicesData";
import "./RelatedSolutions.css";

const RelatedSolutions = ({ category }) => {
  const filteredSlides = SERVICES.filter(service =>
    service.categories.includes(category)
  );
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const updateMaxIndex = () => {
      const track = trackRef.current;
      const firstCard = track?.querySelector(".csd-custom-card-wrapper");
      if (!track || !firstCard) return;

      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const visibleCount = Math.max(1, Math.floor((track.clientWidth + gap) / (cardWidth + gap)));
      const nextMaxIndex = Math.max(0, filteredSlides.length - visibleCount);

      setMaxIndex(nextMaxIndex);
      setActiveIndex((current) => Math.min(current, nextMaxIndex));
    };

    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, [filteredSlides.length]);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const card = track?.querySelectorAll(".csd-custom-card-wrapper")[index];
    if (!track || !card) return;

    const left = track.scrollLeft + card.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    track.scrollTo({ left, behavior });
    setActiveIndex(index);
  };

  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const cards = Array.from(track.querySelectorAll(".csd-custom-card-wrapper"));
    const nearestIndex = cards.reduce((nearest, card, index) => {
      const currentDistance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      const nearestDistance = Math.abs(cards[nearest].getBoundingClientRect().left - trackLeft);
      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActiveIndex((current) => {
      const nextIndex = Math.min(nearestIndex, maxIndex);
      return current === nextIndex ? current : nextIndex;
    });
  };

  if (!filteredSlides.length) return null;

  return (
    <section className="csd-custom-grid-section">
      <div className="container">
        <div className="csd-carousel-header">
          <div className="csd-custom-grid-heading">
            <span className="csd-section-eyebrow">Explore our expertise</span>
            <h2>Explore Our Specialised Software Development Services in Pakistan</h2>
            <p>Solutions shaped around your industry, team, and goals.</p>
          </div>
          {maxIndex > 0 && (
            <div className="csd-carousel-controls" role="group" aria-label="Carousel controls">
              <button
                type="button"
                aria-label="Previous services"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-label="Next services"
                onClick={() => scrollToIndex(Math.min(maxIndex, activeIndex + 1))}
                disabled={activeIndex >= maxIndex}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>

        <div
          className="csd-carousel-wrapper"
          role="region"
          aria-roledescription="carousel"
          aria-label="Specialised software services"
        >
          <div
            className={`csd-horizontal-scroll${filteredSlides.length === 2 ? " csd-horizontal-scroll--two-up" : ""}`}
            ref={trackRef}
            onScroll={handleTrackScroll}
            role="list"
            aria-label="Specialised software services"
            tabIndex={0}
          >
            {filteredSlides.map((service, index) => (
              <Link
                to={service.link}
                key={service.id}
                className="csd-custom-card-wrapper"
                role="listitem"
                aria-label={`${service.title}, ${index + 1} of ${filteredSlides.length}`}
              >
                <div className="csd-custom-card">
                  <div className="card-glass-effect"></div>

                  <div className="csd-card-meta">
                    <span className="csd-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="csd-card-tag">Specialised service</span>
                  </div>

                  <div className="card-image-circle">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  <div className="card-footer-link">
                    Explore service <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="csd-carousel-pagination" role="group" aria-label="Choose service group">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show service group ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedSolutions