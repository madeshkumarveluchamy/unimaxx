import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/UnimaxxProjects.css';

import hero3frame1 from '../../assets/hero3frame1.webp';
import projectimg1 from '../../assets/projectimg1.webp';
import projectimg2 from '../../assets/projectimg2.webp';

import p2_main from '../../assets/Corporate_office (10).webp';
import p3_main from '../../assets/Dr.Vijayalakshmi (6).webp';
import p4_main from '../../assets/EivvaVilla21 (33).webp';
import p5_main from '../../assets/EivvaVilla 28 (33).webp';
import p6_main from '../../assets/EivvaVilla 32  (33).webp';
import p7_main from '../../assets/view_2.webp';
import p8_main from '../../assets/meenamadurai (85).webp';
import p9_main from '../../assets/Pritham (23).webp';
import p10_main from '../../assets/Pritham (5).webp';
import p11_main from '../../assets/vivke (5).webp';


const UnimaxxProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, img: p2_main, title: "serenia", type: "COMMERCIAL", location: "TIRUPPUR, TN" },
    { id: 2, img: p3_main, title: "Dr. VIJAYALAKSHMI", type: "RESIDENTIAL", location: "CHENNAI, TN" },
    { id: 3, img: p4_main, title: "Mr. BALACHANDAR", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 4, img: p5_main, title: "Mr .BALAJI", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 5, img: p6_main, title: "Mr. SHANMUGAM", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 6, img: p7_main, title: "GOWTHAMI RESIDENCE", type: "RESIDENTIAL", location: "TIRUPPUR, TN" },
    { id: 7, img: p8_main, title: "MEENA RESIDENCE", type: "RESIDENTIAL", location: "MADURAI, TN" },
    { id: 8, img: p9_main, title: "PRITHAM RESIDENCE", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 9, img: p10_main, title: "Mr. SUBRAMANI", type: "RESIDENTIAL", location: "ERODE, TN" },
    { id: 10,img: p11_main, title: "Mr .VIVEK", type: "RESIDENTIAL", location: "CHENNAI, TN" },
  ]);

  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setProjects((prevProjects) => {
      const updated = [...prevProjects];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setProjects((prevProjects) => {
      const updated = [...prevProjects];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  // Autoplay Logic Added Here
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, 3000); // 3000ms = 3 seconds (Unangalku ethapla timing mathikonga)

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(autoPlayInterval);
  }, []); 

  const waterflowVariants = {
    initial: (dir) => ({
      opacity: 0,
      scale: 1.03,
      filter: "blur(4px)",
      x: dir > 0 ? "2%" : "-2%"
    }),
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: "0%",
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
      x: dir > 0 ? "-2%" : "2%",
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  return (
    <div className="um-projects-master">
      <section className="um-projects-section">
        
        {/* Header Section */}
        <div className="um-projects-header">
          <div className="um-proj-title-area">
            <span className="um-proj-subtitle font-hanken fsub">What We Proud Of</span>
            <h2 className="um-proj-title stit font-alice">Our Projects:</h2>
          </div>
        </div>

        {/* Projects Container */}
        <div className="um-projects-grid">
          
          {/* Card 1 */}
          <div className="um-project-card um-card-first">
            <div className="um-proj-img-wrapper um-standard-height">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={projects[0].id}
                  src={projects[0].img}
                  alt={projects[0].title}
                  custom={direction}
                  variants={waterflowVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>
              <div className="um-proj-icon">∞</div>
            </div>
            <div className="um-proj-info">
              <h3 className='font-inter stit'>{projects[0].title}</h3>
              <div className="um-proj-tags">
                <span className='font-manrope'>{projects[0].type}</span>
                <span className='font-manrope'>{projects[0].location}</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="um-project-card um-card-second">
            <div className="um-proj-img-wrapper um-tall-height">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={projects[1].id}
                  src={projects[1].img}
                  alt={projects[1].title}
                  custom={direction}
                  variants={waterflowVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>
              <div className="um-proj-icon">∞</div>
            </div>
            <div className="um-proj-info">
              <h3 className='stit font-inter'>{projects[1].title}</h3>
              <div className="um-proj-tags">
                <span className='font-manrope'>{projects[1].type}</span>
                <span className='font-manrope'>{projects[1].location}</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="um-project-card um-card-third">
            <div className="um-proj-img-wrapper um-standard-height">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={projects[2].id}
                  src={projects[2].img}
                  alt={projects[2].title}
                  custom={direction}
                  variants={waterflowVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>
              <div className="um-proj-icon">∞</div>
            </div>
            <div className="um-proj-info">
              <h3 className='font-inter stit'>{projects[2].title}</h3>
              <div className="um-proj-tags">
                <span className='font-manrope'>{projects[2].type}</span>
                <span className='font-manrope'>{projects[2].location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Buttons Layout Control */}
        <div className="um-proj-navigation-wrapper">
            <div className="um-proj-navigation-inline">
              {/* Left Modern Arrow */}
              <button className="um-proj-arrow-btn" onClick={handlePrev} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              
              {/* Right Modern Arrow */}
              <button className="um-proj-arrow-btn um-arrow-active" onClick={handleNext} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

      </section>
    </div>
  );
};

export default UnimaxxProjects;