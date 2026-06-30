import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './css/UnimaxxFeatures.css';

import frame1 from '../../assets/hero2frame1.webp';
import frame2 from '../../assets/hero2frame2.webp';
import frame3 from '../../assets/hero2frame3.webp';
import ArchFeatGooButton from './ArchFeatGooButton';

// --- 🎯 ரோலிங் எண்களுக்கான அனிமேஷன் கூறு (Slot Counter) ---
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
              className="arch-feat-digit-strip font-geist"
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

// --- முதன்மை ஃபீச்சர்ஸ் செக்ஷன் ---
const UnimaxxFeatures = () => {
  const statsData = [
    { count: 50, suffix: "+", label: "Projects Realized" },
    { count: 2, suffix: "+", label: "Years of Expertise" },
    { count: 15, suffix: "%", label: "Client Partnerships" },
    { count: 100, suffix: "%", label: "Award-Winning Quality" }
  ];

  return (
    <div className="arch-feat-master">
      <section className="arch-feat-section">

        
        
        {/* Header Block */}
        <div className="arch-feat-header">
          <div className="arch-feat-left-title">
            <h2 className='font-serif stit'>
              Quiet corners, bold <br /> statements <span className="arch-feat-star-icon">✻</span> we design<br/> spaces that connect with you.
            </h2>
          </div>
          
          <div className="arch-feat-right-cta">
            <p className='font-geist smin'>With a seamless process and attention to detail, we turn ideas into beautiful, livable realities.</p>
            <div className="arch-feat-btn-container">
              <ArchFeatGooButton />
            </div>
          </div>
        </div>

        {/* 2Row Asymmetrical Grid Mesh */}
        <div className="arch-feat-grid-mesh">
          
          {/* Testimonial Card */}
          <div className="arch-feat-card arch-feat-testimonial">
            <div className="arch-feat-stars">★★★★★</div>
            <p className='smin font-geist'>We required a complete architectural vision, and this team delivered beyond our expectations. From the initial spatial concept to the final site execution, every element feels cohesive, intentional, and masterfully crafted.</p>
          </div>

          {/* Orange Chair Image */}
          <div className="arch-feat-image-card">
            <img src={frame1} alt="Feature 1" />
          </div>

          {/* 01 Structural Precision */}
          <div className="arch-feat-card arch-feat-text-type">
            <span className="arch-feat-card-num">01</span>
            <h3 className='font-serif stit'>Structural Precision</h3>
            <p className='smin font-geist'>We have delivered 50+ projects that integrate eco-conscious materials and energy-efficient systems to harmonize with the environment.</p>
          </div>

          {/* Lake Table Image */}
          <div className="arch-feat-image-card">
            <img src={frame3} alt="Feature 3" />
          </div>

          {/* 02 Sustainable by Design */}
          <div className="arch-feat-card arch-feat-text-type">
            <span className="arch-feat-card-num">02</span>
            <h3 className='font-serif stit'>Sustainable by Design</h3>
            <p className='font-geist smin'>We have delivered 50+ projects that prioritize integrity, technical excellence, and long-term durability in every build.</p>
          </div>

          {/* Tree with Orange Chair Image */}
          <div className="arch-feat-image-card">
            <img src={frame2} alt="Feature 2" />
          </div>

          {/* 03 Beauty with purpose */}
          <div className="arch-feat-card arch-feat-text-type">
            <span className="arch-feat-card-num">03</span>
            <h3 className='font-serif stit'>Beauty with purpose</h3>
            <p className='font-geist smin'>We have delivered 50+ projects that transform raw volumes into inspiring, functional spaces tailored to the human experience.</p>
          </div>

        </div>

        {/* 4-Column Stats Bar with Animated Slot Counter */}
        <div className="arch-feat-stats-bar">
          {statsData.map((stat, idx) => (
            <div key={idx} className="arch-feat-stat-item font-geist">
              <h4>
                <SlotCounter value={stat.count} baseDirection="up"/>
                <span className="arch-feat-stat-suffix font-geist">{stat.suffix}</span>
              </h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default UnimaxxFeatures;