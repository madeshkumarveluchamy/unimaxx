import React, { useEffect, useRef, useState } from 'react';
import './css/StoryPhilosophy.css';

import blueprintImg from '../../assets/aboutstory2.webp'; 
import staircaseImg from '../../assets/aboutstory3.webp'; 

const StoryPhilosophy = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation when the element hits the center of the screen
          setIsVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset the animation instantly when scrolling up past the section, 
          // so it can re-animate the next time you scroll down.
          // (Note: If you want the animation to happen only ONCE and stay permanently, 
          // simply delete this `else if` block).
          setIsVisible(false);
        }
      },
      { 
        threshold: 0, // Set to 0 because the rootMargin dictates the exact trigger point
        rootMargin: "0px 0px -50% 0px" // Triggers exactly at the center of the viewport
      } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  

  return (
    <section 
      className={`ux-philo-section ${isVisible ? 'animate-active' : ''}`} 
      ref={sectionRef}
    >
      <div className="ux-philo-container">
        
        <div className="ux-philo-flex-row">
          
          {/* ================= COLUMN 1 ================= */}
          <div className="ux-philo-col ux-philo-left-col ">
            <div className="ux-philo-tag slide-from-left mainsub font-geist">● OUR PHILOSOPHY</div>
            
            <h2 className="ux-philo-main-title slide-from-left font-alice">
              Design with <br />
              Clarity. Create <br />
              with Purpose.
            </h2>

            <div className="ux-philo-animated-line main-line line-draw"></div>

            <div className="ux-philo-text-block">
              <h3 className="ux-philo-sub-title slide-from-left maintit font-geist">OUR MISSION</h3>
              
              <div className="ux-philo-animated-line sub-line line-draw"></div>
              
              <p className="ux-philo-desc slide-from-left mainsub font-geist">
                Our mission is to create spaces that respond thoughtfully to the way people live, work, and interact. We combine creativity with practical thinking to deliver designs that are visually refined, functionally strong, and carefully considered from concept through completion.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="ux-philo-col ux-philo-center-col">
            <img 
              src={blueprintImg} 
              alt="Architects working on blueprints" 
              className="ux-philo-main-img fade-in-up" 
            />
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="ux-philo-col ux-philo-right-col vision-col">
            <img 
              src={staircaseImg} 
              alt="Modern Staircase" 
              className="ux-philo-sub-img slide-from-right" 
            />
            
            <div className="ux-philo-text-block ux-philo-vision-block">
              <h3 className="ux-philo-sub-title slide-from-right maintit font-geist">OUR VISION</h3>

              <div className="ux-philo-animated-line sub-line line-draw"></div>

              <p className="ux-philo-desc slide-from-right mainsub font-geist desc-story">
                We aspire to create architecture and interiors that remain meaningful beyond changing trends. Through collaboration, thoughtful planning, and attention to detail, we aim to develop spaces where design, functionality, and individual character come together naturally.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryPhilosophy;