import React, { useState, useEffect } from 'react';
import './css/UnimaxxOngoing.css';

import bgImg from '../../assets/ongoing1.webp'; // Background image (Now static)

// Card-kulla slide aaga vendiya images (Add your actual images here)
import overlayImg1 from '../../assets/aboutstory.png';
import overlayImg2 from '../../assets/aboutstory2.png'; 
import overlayImg3 from '../../assets/aboutstory3.png'; 

import ViewDetailedGooButton from './ViewDetailedGooButton';
import { Link } from "react-router-dom";

// Reusable AutoSlider Component
const AutoSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img 
      key={currentIndex} 
      src={images[currentIndex]} 
      alt="Project Overlay Slider" 
      className="slider-fade-anim" // Custom animation class
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensures it fits perfectly inside the box
    />
  );
};

const UnimaxxOngoing = () => {
  // Array of images for the cards
  const project1CardImages = [overlayImg1, overlayImg2, overlayImg3];
  const project2CardImages = [overlayImg1, overlayImg2, overlayImg3];

  return (
    <div className="um-ongoing-master">
      <section className="um-ongoing-section">
        
        {/* Header Section */}
        <div className="um-ongoing-header">
          <span className="um-ongoing-subtitle font-hanken fsub">What We Proud Of</span>
          <h2 className="um-ongoing-title font-serief">On Going Projects:</h2>
        </div>

        <div className="um-ongoing-list">
          
          {/* Row 1 */}
          <div className="um-ongoing-row">
            <div className="um-bg-image-wrapper">
              
              {/* Static Background Image */}
              <img src={bgImg} alt="Project Background 1" className="um-bg-main-img" />
              
              <div className="um-overlay-card um-overlay-right">
                {/* 1. Banner Image on Top (Now Sliding!) */}
                <div className="um-overlay-img-box">
                  <AutoSlider images={project1CardImages} interval={3000} />
                </div>
                
                {/* 2. Centered Text Content Below */}
                <div className="um-overlay-text-content">
                  <h3 className="um-card-title font-serief ">Modern Residence</h3>
                  
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
              <img src={bgImg} alt="Project Background 2" className="um-bg-main-img" />
              
              <div className="um-overlay-card um-overlay-left">
                {/* 1. Banner Image on Top (Now Sliding!) */}
                <div className="um-overlay-img-box">
                  <AutoSlider images={project2CardImages} interval={3500} /> 
                </div>
                
                {/* 2. Centered Text Content Below */}
                <div className="um-overlay-text-content">
                  <h3 className="um-card-title font-serief">Modern Residence</h3>
                  
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