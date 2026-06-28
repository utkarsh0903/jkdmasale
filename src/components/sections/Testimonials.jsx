import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../constants/products';

const CARD_WIDTH = 340;
const GAP = 24;
const CARD_STEP = CARD_WIDTH + GAP;
const SPEED = 0.45;
const N = TESTIMONIALS.length;
// 7 copies to ensure infinite scroll never hits the physical edge even on ultrawide monitors
const LOOPED = [
  ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, 
  ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS
];

function Stars({ rating, size = 14 }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
        
        return (
          <div key={i} style={{ position: 'relative', width: size, height: size }}>
            {/* Background empty star */}
            <Star
              size={size}
              fill="#e5e7eb"
              stroke="none"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
            {/* Foreground filled star, clipped proportionally */}
            {fillPercentage > 0 && (
              <Star
                size={size}
                fill="#E1AD01"
                stroke="none"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Card({ testimonial, index, isExpanded, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const isLong = testimonial.text.length > 110;

  return (
    <motion.div
      className="tc-wrapper"
      style={{
        width: isExpanded ? 580 : CARD_WIDTH,
        flexShrink: 0,
        position: 'relative',
        transition: 'width 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      <motion.div
        className={`tc group ${isExpanded ? 'tc-expanded' : ''}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: Math.min(index * 0.03, 0.6), duration: 0.5 }}
        onMouseEnter={() => !isExpanded && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => !isExpanded && setHovered(true)}
        onTouchEnd={() => setTimeout(() => setHovered(false), 1800)}
        onClick={onToggle}
      >
        <div className="tc-glow" />

        <div className="tc-quote-bg">
          <Quote size={58} strokeWidth={0.7} />
        </div>

        <Stars rating={testimonial.rating} />

        <div className="tc-text-wrap">
          {/* Always render clamped text to maintain exact intrinsic height */}
          <p className="tc-preview" style={{ visibility: isExpanded ? 'hidden' : 'visible' }}>
            "{testimonial.text}"
          </p>
          
          {/* Absolute scrollable text when expanded, preventing height changes */}
          {isExpanded && (
            <p className="tc-preview expanded-text">
              "{testimonial.text}"
            </p>
          )}
          
          {!isExpanded && isLong && <div className="tc-fade" />}
        </div>

      <div className="tc-divider" />

      <div className="tc-bottom">
        <div className="tc-user">
          <div className="tc-av-wrap">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`tc-av ${testimonial.image?.includes('.svg') ? 'svg-av' : ''}`}
            />
            <div className="tc-av-ring" />
          </div>
          <div>
            <p className="tc-name">{testimonial.name}</p>
            <p className="tc-badge">✓ Verified Purchase</p>
          </div>
        </div>
      </div>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {hovered && isLong && !isExpanded && (
          <motion.div
            className="t-tooltip"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="t-tooltip-arrow" />

            <div className="t-tooltip-stars">
              <Stars rating={testimonial.rating} size={13} />
            </div>

            <p className="t-tooltip-text">"{testimonial.text}"</p>

            <div className="t-tooltip-user">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`t-tooltip-avatar ${testimonial.image?.includes('.svg') ? 'svg-av' : ''}`}
              />
              <div>
                <p className="tc-name">{testimonial.name}</p>
                <p className="tc-badge">✓ Verified Customer</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const paused = useRef(false);
  const dragging = useRef(false);
  const dragX = useRef(0);
  const dragScroll = useRef(0);
  const singleW = N * CARD_STEP;

  // Initialize to middle copy
  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.scrollLeft = singleW * 3;
      updateDot(singleW * 3);
    }
  }, [singleW]);

  const updateDot = useCallback((scrollLeft) => {
    const offset = ((scrollLeft - singleW) % singleW + singleW) % singleW;
    const idx = Math.round(offset / CARD_STEP) % N;
    setActiveDot(idx);
  }, [singleW]);

  // Auto scroll
  const tick = useCallback(() => {
    const el = trackRef.current;
    if (!el || paused.current || dragging.current || expandedIndex !== null) {
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    el.scrollLeft += SPEED;

    // Seamless loop
    if (el.scrollLeft >= singleW * 4) el.scrollLeft -= singleW;
    if (el.scrollLeft < singleW * 2) el.scrollLeft += singleW;

    updateDot(el.scrollLeft);
    rafRef.current = requestAnimationFrame(tick);
  }, [singleW, updateDot, expandedIndex]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  // Navigation
  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    paused.current = true;
    const target = el.scrollLeft + dir * CARD_STEP;

    el.scrollTo({ left: target, behavior: 'smooth' });

    setTimeout(() => {
      if (el.scrollLeft >= singleW * 4) el.scrollLeft -= singleW;
      if (el.scrollLeft < singleW * 2) el.scrollLeft += singleW;
      updateDot(el.scrollLeft);
      paused.current = false;
    }, 480);
  };

  const goToDot = (i) => {
    const el = trackRef.current;
    if (!el) return;

    paused.current = true;
    const target = (singleW * 3) + i * CARD_STEP;
    el.scrollTo({ left: target, behavior: 'smooth' });
    setActiveDot(i);

    setTimeout(() => { paused.current = false; }, 650);
  };

  // Drag handlers
  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    dragging.current = true;
    dragX.current = e.clientX;
    dragScroll.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const el = trackRef.current;
    const newScroll = dragScroll.current + (dragX.current - e.clientX);
    el.scrollLeft = newScroll;

    if (el.scrollLeft >= singleW * 4) el.scrollLeft -= singleW;
    if (el.scrollLeft < singleW * 2) el.scrollLeft += singleW;

    updateDot(el.scrollLeft);
  };

  const onPointerUp = () => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  return (
    <section className="ts-wrap" id="reviews">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="ts-head"
      >
        <span className="ts-eyebrow">TESTIMONIALS</span>
        <h2 className="section-title">Happy Families, Real Stories</h2>
        <p className="section-subtitle">
          From our kitchen to yours — heartfelt words from people who trust us
        </p>
      </motion.div>

      {/* Marquee Container */}
      <div className="ts-outer">
        <div className="ts-fade-l" />
        <div
          ref={trackRef}
          className="ts-track"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { if (!dragging.current) paused.current = false; }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {LOOPED.map((t, i) => (
            <Card
              key={`${t.id || i}-${i}`}
              testimonial={t}
              index={i}
              isExpanded={expandedIndex === i}
              onToggle={() => {
                if (expandedIndex === i) {
                  setExpandedIndex(null);
                  paused.current = false; // forcefully resume scroll
                } else {
                  setExpandedIndex(i);
                  setTimeout(() => {
                    const el = trackRef.current?.children[i];
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }
                  }, 50);
                }
              }}
            />
          ))}
        </div>
        <div className="ts-fade-r" />
      </div>

      {/* Controls */}
      <div className="ts-controls">
        <button
          className="ts-arrow"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        <div className="ts-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`ts-dot ${activeDot === i ? 'ts-dot-active' : ''}`}
              onClick={() => goToDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="ts-arrow"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      <p className="ts-hint">Drag to explore • Auto plays</p>

      <style>{`
        .ts-wrap {
          padding: 100px 0 64px;
          background: linear-gradient(165deg, #fffdf5 0%, #fff9ea 50%, #fffdf5 100%);
          position: relative;
          overflow: hidden;
        }

        .ts-head { 
          text-align: center; 
          margin-bottom: 48px; 
          padding: 0 20px; 
        }

        .ts-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #E1AD01;
          background: #fff8dc;
          border: 1px solid rgba(225, 173, 1, 0.4);
          padding: 5px 18px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .ts-outer {
          position: relative;
          width: 100%;
        }

        .ts-track {
          display: flex;
          gap: ${GAP}px;
          overflow-x: scroll;
          overflow-y: visible;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 20px 120px 40px;
          cursor: grab;
          scroll-behavior: smooth;
        }

        .ts-track::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .ts-track {
            padding: 16px 28px 36px;
            gap: 18px;
          }
        }

        .ts-fade-l, .ts-fade-r {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 140px;
          z-index: 10;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .ts-fade-l, .ts-fade-r { width: 60px; }
        }

        .ts-fade-l { 
          left: 0; 
          background: linear-gradient(to right, #fffdf5, transparent); 
        }
        .ts-fade-r { 
          right: 0; 
          background: linear-gradient(to left, #fffdf5, transparent); 
        }

        /* Controls */
        .ts-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 12px;
        }

        .ts-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.8px solid rgba(225, 173, 1, 0.35);
          background: white;
          color: #b8860b;
          box-shadow: 0 4px 14px rgba(180, 120, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          flex-shrink: 0;
        }

        .ts-arrow:hover {
          background: #E1AD01;
          color: white;
          border-color: #E1AD01;
          transform: scale(1.1);
        }

        .ts-dots {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .ts-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(225, 173, 1, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .ts-dot:hover {
          background: rgba(225, 173, 1, 0.6);
          transform: scale(1.3);
        }

        .ts-dot-active {
          width: 28px;
          border-radius: 999px;
          background: #E1AD01;
          box-shadow: 0 3px 10px rgba(225, 173, 1, 0.5);
        }

        .ts-hint {
          text-align: center;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(150, 100, 20, 0.45);
          margin: 18px 0 0;
        }

        /* Card */
        .tc-expanded {
          z-index: 50;
          box-shadow: 0 15px 40px rgba(180, 120, 0, 0.15) !important;
          cursor: pointer;
        }

        .tc-expanded .expanded-text {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          -webkit-line-clamp: unset !important;
          display: block;
          overflow-y: auto;
          height: auto;
          padding-right: 8px; /* space for scrollbar */
        }
        
        /* Optional: custom scrollbar for the text */
        .tc-expanded .expanded-text::-webkit-scrollbar {
          width: 4px;
        }
        .tc-expanded .expanded-text::-webkit-scrollbar-thumb {
          background: rgba(225, 173, 1, 0.4);
          border-radius: 4px;
        }

        .tc {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          border: 1px solid rgba(225, 173, 1, 0.18);
          border-radius: 28px;
          padding: 32px 28px 24px;
          box-shadow: 0 8px 32px rgba(180, 120, 0, 0.09);
          position: relative;
          overflow: visible;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
        }

        .tc:hover {
          box-shadow: 0 25px 70px rgba(180, 120, 0, 0.18);
          transform: translateY(-10px);
          border-color: rgba(225, 173, 1, 0.45);
        }

        .tc-glow {
          position: absolute;
          top: -36px;
          right: -36px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(225,173,1,0.14) 0%, transparent 68%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .tc:hover .tc-glow {
          opacity: 1;
        }

        .tc-quote-bg {
          position: absolute;
          bottom: 58px;
          right: 22px;
          color: rgba(225, 173, 1, 0.07);
          transition: transform 0.6s ease;
        }

        .tc:hover .tc-quote-bg {
          transform: scale(1.12) rotate(8deg);
        }

        .tc-text-wrap {
          position: relative;
          flex: 1;
          margin: 16px 0 12px;
        }

        .tc-preview {
          font-size: 14px;
          font-style: italic;
          font-weight: 500;
          line-height: 1.75;
          color: #5f3c22;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tc-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 42px;
          background: linear-gradient(to bottom, transparent, #ffffff);
        }

        .tc-divider {
          height: 1px;
          margin: 18px 0 20px;
          background: linear-gradient(to right, transparent, rgba(225,173,1,0.25), transparent);
        }

        .tc-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tc-user {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .tc-av-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .tc-av {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
        }

        .svg-av {
          background: #fff8dc;
          object-fit: contain;
          padding: 6px;
        }

        .tc-av-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2.5px solid rgba(225, 173, 1, 0.45);
        }

        .tc-name {
          font-size: 12px;
          font-weight: 900;
          color: #2D1B14;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 2px;
        }

        .tc-badge {
          font-size: 8.8px;
          font-weight: 700;
          color: #E1AD01;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        /* Tooltip */
        .t-tooltip {
          position: absolute;
          bottom: calc(100% + 22px);
          left: 50%;
          transform: translateX(-50%);
          width: 360px;
          max-width: 92vw;
          background: #ffffff;
          border: 1px solid rgba(225, 173, 1, 0.35);
          border-radius: 22px;
          padding: 24px 26px 20px;
          box-shadow: 0 28px 80px rgba(120, 80, 0, 0.22), 
                      0 6px 20px rgba(0, 0, 0, 0.1);
          z-index: 100;
          pointer-events: none;
        }

        .t-tooltip-arrow {
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 10px;
          background: rgba(225, 173, 1, 0.35);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .t-tooltip-stars { margin-bottom: 14px; }
        .t-tooltip-text {
          font-size: 13.5px;
          font-style: italic;
          line-height: 1.78;
          color: #5f3c22;
        }

        .t-tooltip-user {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid rgba(225, 173, 1, 0.2);
        }

        .t-tooltip-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          object-fit: cover;
          border: 2.5px solid rgba(225, 173, 1, 0.45);
        }
      `}</style>
    </section>
  );
}