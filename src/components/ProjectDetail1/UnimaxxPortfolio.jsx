import React, { useState } from 'react';
import './css/UnimaxxPortfolio.css';

import modern1 from '../../assets/modern1.webp'; 
import modern2 from '../../assets/modern2.webp';
import modern3 from '../../assets/modern3.webp'; 
import modern4 from '../../assets/modern4.webp';
import modern5 from '../../assets/modern5.webp'; 
import SyncPortfolioFluidButton from './SyncPortfolioFluidButton';
import SyncPortfolioNavButton from './SyncPortfolioNavButton';
import ProjectGooButtons from './ProjectGooButtons';

const UnimaxxPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioData = [
    {
      id: 1,
      bgImage: modern2,
      title: "Modern Residence",
      type: "RESIDENTIAL",
      location: "COIMBATORE, TN"
    },
    {
      id: 2,
      bgImage: modern4,
      title: "Luxury Villa Loft",
      type: "RESIDENTIAL",
      location: "BANGALORE, KA"
    },
    {
      id: 3,
      bgImage: modern1,
      title: "Premium Penthouse",
      type: "COMMERCIAL",
      location: "CHENNAI, TN"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = portfolioData[currentIndex];

  return (
    <div className="sync-portfolio-viewport">
      <div className="sync-portfolio-container">
        
        <h2 className="sync-portfolio-main-heading font-serief"><span>✻</span> Our Portfolio</h2>

        {/* 🎯 பிரதான பெரிய இமேஜ் பாக்ஸ் */}
        <div className="sync-portfolio-hero-banner">
          
          {/* 🎯 மாற்றம் 1: எல்லா இமேஜ்களையும் தனித்தனி லேயராக அடுக்கியுள்ளோம் (Smooth Cross-fade க்காக) */}
          {portfolioData.map((project, index) => (
            <div 
              key={project.id}
              className={`sync-portfolio-bg-layer ${index === currentIndex ? 'bg-active' : ''}`}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>
          ))}
          
          <div className="sync-portfolio-floating-card">
            {/* 🎯 மாற்றம் 2: Text-ம் ஸ்மூத் ஆக வருவதற்கு key={currentProject.id} கொடுக்கப்பட்டுள்ளது */}
            <div className="sync-portfolio-card-info" key={currentProject.id}>
              <h3 className='font-geist'>{currentProject.title}</h3>
              
              <div className="sync-portfolio-card-footer">
                <ProjectGooButtons to="/" />
                <div className="sync-portfolio-meta-tags">
                  <span className='font-manrope'>{currentProject.type}</span>
                  <span className='font-manrope'>{currentProject.location}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="sync-portfolio-controls-row">
          <SyncPortfolioNavButton 
            text="View Next Projects" 
            onPrev={handlePrev} 
            onNext={handleNext} 
            onMainClick={() => console.log("Main text clicked!")} 
          />
        </div>

      </div>
    </div>
  );
};

export default UnimaxxPortfolio;