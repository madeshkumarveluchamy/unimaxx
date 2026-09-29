import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './css/UnimaxxFeatures.css';
import staricon from '../../assets/logo1.webp';
import frame1 from '../../assets/hero2frame1.webp';
import frame2 from '../../assets/hero2frame2.webp';
import frame3 from '../../assets/hero2frame3.webp';
import ArchFeatGooButton from './ArchFeatGooButton';

// --- 🎯 Slot Counter ---
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

const UnimaxxFeatures = () => {
  const statsData = [
    { count: 110, suffix: "+", label: "Spaces Transformed" },
    { count: 2, suffix: "+", label: "Years of Excellence" },
    { count: 50, suffix: "K+", label: "SQ.FT. Of Excellence" },
    { count: 100, suffix: "%", label: "Client Satisfaction" }
  ];

  return (
    <div className="arch-feat-master">
      <section className="arch-feat-section">

        {/* 🎯 Sticky Header */}
        <div className="arch-feat-header sticky-header">
          <div className="arch-feat-left-title">
            <h2 className='font-alice stit'>
              Thoughtful spaces <br /> refined <img 
                src={staricon} 
                alt="Star Icon" 
                className="unimaxx-asterisk-icon" 
              /> details we create<br/> places that feel distinctly yours.  
            </h2>
          </div>
          
          <div className="arch-feat-right-cta">
            <p className='font-geist smin'>With thoughtful design and meticulous execution, we transform ideas into refined, functional, and enduring spaces. </p>
            <div className="arch-feat-btn-container">
              <ArchFeatGooButton />
            </div>
          </div>
        </div>

        {/* 🎯 The Native Math Staggering Grid */}
        <div className="arch-feat-grid-native">
          
          {/* Column 1 */}
          <div className="native-col native-col-1">
            <div className="arch-feat-card arch-feat-testimonial sticky-item tall-item">
              <div className="arch-feat-stars">★★★★★</div>
              <p className='smin font-geist'>From the first consultation to the final details, the experience was seamless and thoughtfully managed. The team understood our vision and translated it into a space that feels refined, practical, and truly personal.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="native-col native-col-2">
            <div className="arch-feat-image-card sticky-item row-1-item">
              <img src={frame1} alt="Feature 1" />
            </div>
            <div className="arch-feat-card arch-feat-text-type sticky-item row-2-item">
              <span className="arch-feat-card-num">02</span>
              <h3 className='font-serif stit'>Built Around You</h3>
              <p className='font-geist smin'>With 50+ projects delivered, our designs are shaped around individual needs, lifestyles, and the unique possibilities of every space.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="native-col native-col-3">
            <div className="arch-feat-card arch-feat-text-type sticky-item row-1-item">
              <span className="arch-feat-card-num">01</span>
              <h3 className='font-serif stit'>Design with Intention</h3>
              <p className='smin font-geist'>With 50+ projects delivered, we develop spaces where thoughtful planning, functionality, and visual character come together naturally. </p>
            </div>
            <div className="arch-feat-image-card sticky-item row-2-item">
              <img src={frame2} alt="Feature 2" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="native-col native-col-4">
            <div className="arch-feat-image-card sticky-item row-1-item">
              <img src={frame3} alt="Feature 3" />
            </div>
            <div className="arch-feat-card arch-feat-text-type sticky-item row-2-item">
              <span className="arch-feat-card-num">03</span>
              <h3 className='font-serif stit'>Form Meets Function</h3>
              <p className='font-geist smin'>With 50+ projects delivered, we create balanced environments that combine distinctive design with comfort, usability, and everyday living.</p>
            </div>
          </div>

        </div>

        {/* 4-Column Stats Bar */}
        <div className="arch-feat-stats-bar">
          {statsData.map((stat, idx) => (
            <div key={idx} className="arch-feat-stat-item font-geist ">
              <h4>
                <SlotCounter value={stat.count} baseDirection="up"/>
                <span className="arch-feat-stat-suffix font-geist">{stat.suffix}</span>
              </h4>
              <p className="font-serieef text-black fw-light smin">{stat.label}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default UnimaxxFeatures;