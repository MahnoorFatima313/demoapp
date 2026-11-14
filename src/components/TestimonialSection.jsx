import React, { useId } from "react";
import "./TestimonialSection.css";
import { clientReviews } from "../data/clientReviews";
import useAutoScroll from "../hooks/useAutoScroll";

const Marquee = ({ children, speed = 60 }) => {
  const trackRef = useAutoScroll(speed); // px per second

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

const GoldenStar = ({ filled = false }) => {
  const gradientId = useId();

  return (
    <svg className={`star-svg ${filled ? "filled" : ""}`} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe9a3" />
          <stop offset="32%" stopColor="#f9d15a" />
          <stop offset="68%" stopColor="#f1b421" />
          <stop offset="100%" stopColor="#b97800" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.9 5.8 6.4.9-4.6 4.5 1.1 6.4-5.8-3-5.8 3 1.1-6.4-4.6-4.5 6.4-.9L12 2.5z"
        fill={filled ? `url(#${gradientId})` : "#d8dde4"}
        stroke={filled ? "#d49a17" : "#c9ced7"}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* =======================
   Review Card
======================= */
const ReviewCard = ({ avatar, name, location, rating, review, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="review-card clickable"
  >
    <div className="review-header">
      <img src={avatar} alt={name} />

      <div>
        <h4>{name}</h4>
        <span className="review-location">{location}</span>

        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <GoldenStar key={i} filled={i < rating} />
          ))}
        </div>
      </div>
    </div>

    <p>"{review}"</p>
  </a>
);

/* =======================
   Main Section Component
======================= */
const TestimonialSection = () => {
  const reviews = clientReviews;

  return (
    <section className="section testimonial-section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>

        <Marquee speed={65}>
          {reviews.map((r) => (
            <ReviewCard key={r.id} {...r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSection;
