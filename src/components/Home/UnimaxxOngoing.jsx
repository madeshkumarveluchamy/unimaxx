import React from 'react';
import './css/UnimaxxOngoing.css';

import bgImg from '../../assets/ongoing1.webp'; // Background image (Static)

import p4_main from '../../assets/EivvaVilla21 (33).webp';
import p5_main from '../../assets/EivvaVilla 28 (38).webp';

import ViewDetailedGooButton from './ViewDetailedGooButton';
import { Link } from "react-router-dom";

const UnimaxxOngoing = () => {

  return (
    <div className="um-ongoing-master">
      <section className="um-ongoing-section">
        
        {/* Header Section */}
        <div className="um-ongoing-header">
          <span className="um-ongoing-subtitle font-hanken fsub">What We Proud Of</span>
          <h2 className="um-ongoing-title font-alice">On Going Projects:</h2>
        </div>

        <div className="um-ongoing-list">
          
          {/* Row 1 */}
          <div className="um-ongoing-row">
            <div className="um-bg-image-wrapper">
              
              {/* Static Background Image */}
              <img src={p4_main} alt="Project Background 1" className="um-bg-main-img" />
              
              <div className="um-overlay-card um-overlay-right">
                
                {/* Centered Text Content */}
                <div className="um-overlay-text-content">
                  <h3 className="um-card-title font-serief">Mr. BALACHANDAR</h3>
                  
                  <div className="um-btn-align-wrapper row">
                    <Link className="text-decoration-none col-12 col-md-6 hellos gap-3" to="/projects">
                      <ViewDetailedGooButton textColor="black" />
                    </Link>

                    <span className="um-card-footer font-hanken col-12 col-md-6">RESIDENTIAL &nbsp; COIMBATORE, TN</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="um-ongoing-row">
            <div className="um-bg-image-wrapper">
              
              {/* Static Background Image */}
              <img src={p5_main} alt="Project Background 2" className="um-bg-main-img" />
              
              <div className="um-overlay-card um-overlay-left">
                
                {/* Centered Text Content */}
                <div className="um-overlay-text-content">
                  <h3 className="um-card-title font-serief">Mr .BALAJI</h3>
                  
                  <div className="um-btn-align-wrapper row">
                    <Link className="text-decoration-none col-12 col-md-6 hellos" to="/projects">
                      <ViewDetailedGooButton textColor="black" />
                    </Link>

                    <span className="um-card-footer font-hanken col-12 col-md-6">RESIDENTIAL &nbsp; COIMBATORE, TN</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default UnimaxxOngoing;