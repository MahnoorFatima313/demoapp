// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { heroSlides } from '../data/mock';
// import './HeroSlider.css';

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Stable function to go to the next slide
//   const goToNext = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500); // match animation duration
//   }, [isAnimating]);

//   // Stable function to go to the previous slide
//   const goToPrev = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500); // match animation duration
//   }, [isAnimating]);

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 6000);

//     return () => clearInterval(interval); // cleanup on unmount
//   }, [goToNext]);

//   return (
//     <section className="hero-slider">
//       {/* Slides */}
//       {heroSlides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
//           style={{ backgroundImage: `url(${slide.image})` }}
//         >
//           <div className="hero-overlay"></div>
//           <div className="hero-content">
//             <h1 className="hero-title">{slide.title}</h1>
//             <p className="hero-subtitle">{slide.subtitle}</p>
//             <Link to={slide.ctaLink} className="hero-btn">
//               {slide.ctaText}
//             </Link>
//           </div>
//         </div>
//       ))}

//       {/* Navigation buttons */}
//       <button
//         className="hero-nav hero-nav-prev"
//         onClick={goToPrev}
//         aria-label="Previous Slide"
//       >
//         <ChevronLeft size={40} />
//       </button>
//       <button
//         className="hero-nav hero-nav-next"
//         onClick={goToNext}
//         aria-label="Next Slide"
//       >
//         <ChevronRight size={40} />
//       </button>

//       {/* Slide dots */}
//       <div className="hero-dots">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             className={`hero-dot ${index === currentSlide ? 'hero-dot-active' : ''}`}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/herovdTrim .mp4";

import "./HeroSlider.css";

const heroHeadingFirstLine = "Custom Software & AI";
const heroHeadingSecondLine = "Built for Worldwide Impact";
const heroHeadingCharacterCount =
  heroHeadingFirstLine.length + 1 + heroHeadingSecondLine.length;
const heroHeadingAccentStart = "Custom Software ".length;

const HeroSlider = () => {
  const [visibleHeadingCharacters, setVisibleHeadingCharacters] = useState(0);

  useEffect(() => {
    let characterIndex = 0;
    let interval;
    const startDelay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        characterIndex += 1;
        setVisibleHeadingCharacters(characterIndex);

        if (characterIndex >= heroHeadingCharacterCount) {
          window.clearInterval(interval);
        }
      }, 100);
    }, 250);

    return () => {
      window.clearTimeout(startDelay);
      window.clearInterval(interval);
    };
  }, []);

  const firstLineCharacterCount = Math.min(
    visibleHeadingCharacters,
    heroHeadingFirstLine.length
  );
  const secondLineCharacterCount = Math.max(
    0,
    visibleHeadingCharacters - heroHeadingFirstLine.length - 1
  );

  return (
    <section className="hero-video-wrapper">
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-spatial-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Software engineered for what comes next</span>
          <h1
            className="hero-title"
            aria-label="Custom Software & AI Built for Worldwide Impact"
          >
            <span aria-hidden="true">
              {heroHeadingFirstLine.slice(0, Math.min(firstLineCharacterCount, heroHeadingAccentStart))}
              <span className="hero-title-accent">
                {heroHeadingFirstLine.slice(
                  heroHeadingAccentStart,
                  firstLineCharacterCount
                )}
              </span>
              {firstLineCharacterCount === heroHeadingFirstLine.length && (
                <>
                  <br />
                  {heroHeadingSecondLine.slice(0, secondLineCharacterCount)}
                </>
              )}
              <span className="hero-title-cursor" />
            </span>
          </h1>

          <p className="hero-subtitle">
            Secure, scalable enterprise systems and AI-powered digital products
            for ambitious businesses across four continents.
          </p>

          <Link to="/services" className="hero-btn" aria-label="Explore QllmSoft services">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;