import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './css/WhyChooseUs.css';

// --- 🎯 நீங்கள் கொடுத்த ரோலிங் எண்களுக்கான அனிமேஷன் கூறு அப்படியே உள்ளது ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value)); 

  return (
    <span ref={ref} className="arch-feat-slot-inline">
      {digits.map((digit, i) => {
        if (isNaN(parseInt(digit))) {
          return <span key={i} className="arch-feat-slot-static-char">{digit}</span>;
        }

        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="arch-feat-digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}}
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1,
              }}
              className="arch-feat-digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span>{digit}</span>
                </>  
              ) : (
                <>
                  <span>{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

// --- புதிய "Why Choose Us" டிசைன் ---
const WhyChooseUs = () => {
  const statsData = [
    { count: 110, suffix: "+", title: "Spaces Redefined", desc: "Transforming raw concepts into highly functional and aesthetically stunning environments." },
    { count: 2, suffix: "+", title: "Years of Excellence", desc: "A rapidly growing legacy driven by innovative architecture and uncompromising quality." },
    { count: 50, suffix: "k+", title: "SQ.FT. Of Excellence", desc: "Maximizing utility and beauty across massive spaces, ensuring every inch serves a purpose." },
    { count: 100, suffix: "%", title: "Client Satisfaction", desc: "Delivering a flawless experience from the very first consultation to the final handover." }
  ];

  return (
    <div className="wcu-master">
      <section className="wcu-section">
        
        {/* Header Title */}
        <h2 className="wcu-heading font-alice">Why choose us</h2>

        {/* 4-Column Grid */}
        <div className="wcu-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="wcu-card">
              
              {/* Outline Number Animated Text */}
              <div className="wcu-number-wrapper">
                <SlotCounter value={stat.count} baseDirection="up"/>
                <span className="wcu-suffix">{stat.suffix}</span>
              </div>
              
              {/* Card Content */}
              <h3 className="wcu-card-title maintit font-geist">{stat.title}</h3>
              <p className="wcu-card-desc mainsub font-geist">{stat.desc}</p>
              
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default WhyChooseUs;