import React from 'react';
import './css/StoryPhilosophy.css';

// 🎯 உங்களுடைய இமேஜ் பாத்களை இங்கே சரியாக மாற்றிக்கொள்ளுங்கள்
import blueprintImg from '../../assets/aboutstory2.png'; 
import staircaseImg from '../../assets/aboutstory3.png'; 

const StoryPhilosophy = () => {
  return (
    <section className="ux-philo-section">
      <div className="ux-philo-container">
        
        {/* Bootstrap-ஐ பயன்படுத்தாமல் நாமே உருவாக்கிய Flex Layout */}
        <div className="ux-philo-flex-row">
          
          {/* ================= COLUMN 1 (Left - 35%) ================= */}
          <div className="ux-philo-col ux-philo-left-col">
            <div className="ux-philo-tag">● OUR PHILOSOPHY</div>
            
            <h2 className="ux-philo-main-title">
              Design with <br />
              Purpose, Build <br />
              with Integrity
            </h2>

            <div className="ux-philo-text-block">
              <h3 className="ux-philo-sub-title">OUR MISSION</h3>
              <p className="ux-philo-desc">
                At Unimaxx, we believe architecture should improve lives, respect the environment, and tell a story. 
                Every line we draw reflects purpose, creativity, and care. Our mission is to deliver spaces that endure 
                aesthetically, functionally, and emotionally.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 2 (Center - 35%) ================= */}
          <div className="ux-philo-col ux-philo-center-col">
            <img 
              src={blueprintImg} 
              alt="Architects working on blueprints" 
              className="ux-philo-main-img" 
            />
          </div>

          {/* ================= COLUMN 3 (Right - 30%) ================= */}
          <div className="ux-philo-col ux-philo-right-col">
            <img 
              src={staircaseImg} 
              alt="Modern Staircase" 
              className="ux-philo-sub-img" 
            />
            
            <div className="ux-philo-text-block ux-philo-vision-block">
              <h3 className="ux-philo-sub-title">OUR VISION</h3>
              <p className="ux-philo-desc">
                Our vision is to create purposeful, innovative, and enduring spaces through a process that values 
                collaboration, creativity, and sustainability. Every line we draw and every space we craft reflects our 
                commitment to human-centered design, technical precision, and timeless aesthetic values.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoryPhilosophy;