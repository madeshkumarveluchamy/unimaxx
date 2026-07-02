import React from 'react';
import './css/UnimaxxOngoing.css';

import bgImg from '../../assets/ongoing1.webp';
import overlayImg from '../../assets/ongoingprojectoverlay.webp';
import ViewDetailedGooButton from './ViewDetailedGooButton';
import {Link} from "react-router-dom"

const UnimaxxOngoing = () => {
  return (
    <div className="um-ongoing-master">
      <section className="um-ongoing-section">
        
        {/* Header Section */}
        <div className="um-ongoing-header">
          <span className="um-ongoing-subtitle font-hanken fsub">What We Proud Of</span>
          <h2 className="um-ongoing-title font-serief">On Going Projects:</h2>
        </div>

        <div className="um-ongoing-list">
          
          {/* Row 1: Overlay Card on the RIGHT */}
          <div className="um-ongoing-row">
            <div className="um-bg-image-wrapper">
              <img src={bgImg} alt="Project Background 1" className="um-bg-main-img" />
              
              <div className="um-overlay-card um-overlay-right">
                <span className="um-card-tag font-serief fw-semibold ftit">Begin Your Design Journey</span>
                <div className="um-overlay-img-box">
                  <img src={overlayImg} alt="Project Overlay" />
                </div>
                <p className='font-hanken fmin'>Refined interior blending functionality with elegance.</p>
                <div className="um-btn-align-wrapper">
                  <Link  className="text-decoration-none" to="/projects">
                  <ViewDetailedGooButton textColor="black" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Overlay Card on the LEFT */}
          <div className="um-ongoing-row">
            <div className="um-bg-image-wrapper">
              <img src={bgImg} alt="Project Background 2" className="um-bg-main-img" />
              
              <div className="um-overlay-card um-overlay-left">
                <span className="um-card-tag ssub fw-semibold font-serief ftit">Begin Your Design Journey</span>
                <div className="um-overlay-img-box">
                  <img src={overlayImg} alt="Project Overlay" />
                </div>
                <p className='font-hanken fmin'>Refined interior blending functionality with elegance.</p>
                <div className="um-btn-align-wrapper">
                  <Link  className="text-decoration-none" to="/projects">
                  <ViewDetailedGooButton  textColor="black"/>
                  </Link>
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