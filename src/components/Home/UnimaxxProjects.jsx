import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/UnimaxxProjects.css';

import hero3frame1 from '../../assets/hero3frame1.webp';
import projectimg1 from '../../assets/projectimg1.webp';
import projectimg2 from '../../assets/projectimg2.webp';

const UnimaxxProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, img: hero3frame1, title: "Modern Residence 1", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 2, img: projectimg1, title: "Modern Residence 2", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 3, img: projectimg2, title: "Modern Residence 3", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
    { id: 4, img: hero3frame1, title: "Modern Residence 4", type: "RESIDENTIAL", location: "COIMBATORE, TN" },
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
            <h2 className="um-proj-title stit font-serief">Our Projects:</h2>
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
            <button className="um-proj-arrow-btn" onClick={handlePrev}>←</button>
            <button className="um-proj-arrow-btn um-arrow-active" onClick={handleNext}>→</button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default UnimaxxProjects;