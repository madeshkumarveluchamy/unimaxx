import React from 'react';
import '../Home/css/UnimaxxOngoing.css';

import bgImg from '../../assets/ongoing1.webp'; // Background image (Static)


const UnimaxxOngoing = () => {

  return (
    <div className="um-ongoing-master">
      <section className="um-ongoing-section">
        
        {/* Header Section */}
        <div className="um-ongoing-header">
          <span className="um-ongoing-subtitle font-hanken fsub">Brains Behind the Process</span>
          <h2 className="um-ongoing-title font-serief">Our Team</h2>
        </div>

        <div className="um-ongoing-list">
          
          {/* Row 1 */}
          <div className="um-ongoing-row">
            <div className="um-bg-image-wrapper">
              
              {/* Static Background Image */}
              <img src={bgImg} alt="Project Background 1" className="um-bg-main-img" />

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default UnimaxxOngoing;