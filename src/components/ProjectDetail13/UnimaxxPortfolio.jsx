import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/trippur_residency (1).webp';
import modern_1 from '../../assets/trippur_residency (2).webp';
import modern_2 from '../../assets/trippur_residency (3).webp';

import modern_5 from '../../assets/trippur_residency (6).webp';
import modern_6 from '../../assets/trippur_residency (7).webp';

import modern_8 from '../../assets/trippur_residency (9).webp';
import modern_9 from '../../assets/trippur_residency (10).webp';
import modern_10 from '../../assets/trippur_residency (11).webp';
import modern_11 from '../../assets/trippur_residency (12).webp';
import modern_12 from '../../assets/trippur_residency (13).webp';


import modern6 from '../../assets/trippur_residency 12 (1).webp';
import modern7 from '../../assets/trippur_residency 12 (2).webp';
import modern8 from '../../assets/trippur_residency 12 (3).webp';
import modern9 from '../../assets/trippur_residency 12 (4).webp';
import modern10 from '../../assets/trippur_residency 12 (5).webp';
import modern11 from '../../assets/trippur_residency 12 (6).webp';
import modern12 from '../../assets/trippur_residency 12 (7).webp';
import modern13 from '../../assets/trippur_residency 12 (8).webp';
import modern14 from '../../assets/trippur_residency 12 (9).webp';
import modern15 from '../../assets/trippur_residency 12 (10).webp';
import modern16 from '../../assets/trippur_residency 12 (11).webp';
import modern17 from '../../assets/trippur_residency 12 (12).webp';
import modern18 from '../../assets/trippur_residency 12 (13).webp';
import modern19 from '../../assets/trippur_residency 12 (14).webp';
import modern20 from '../../assets/trippur_residency 12 (15).webp';

import SyncPortfolioNavButton from '../ProjectDetail1/SyncPortfolioNavButton';
import SyncPortfolioFluidButton from '../ProjectDetail1/SyncPortfolioFluidButton';
import ProjectGooButtons from '../ProjectDetail1/ProjectGooButtons';

const UnimaxxPortfolio = () => {
  // ஸ்லைடரின் தற்போதைய இண்டெக்ஸைக் கண்காணிக்க State
  const [currentIndex, setCurrentIndex] = useState(0);

  // உங்களிடம் உள்ள ஐந்து இமேஜ்களை பின்னணி மற்றும் கார்டுக்குள் மாறி மாறி வருமாறு செட் செய்துள்ளேன்
const portfolioData = [
  { id: 1, bgImage: modern_1 },
  { id: 2, bgImage: modern_2 },

  { id: 5, bgImage: modern_5 },
  { id: 6, bgImage: modern_6 },
  
  { id: 9, bgImage: modern_9 },
  { id: 10, bgImage: modern_10 },
  { id: 11, bgImage: modern_11 },
  { id: 12, bgImage: modern_12 },

 

  { id: 96, bgImage: modern6 },
  { id: 97, bgImage: modern7 },
  { id: 98, bgImage: modern8 },
  { id: 99, bgImage: modern9 },
  { id: 100, bgImage: modern10 },
  { id: 111, bgImage: modern11 },
  { id: 122, bgImage: modern12 },
  { id: 133, bgImage: modern13 },
  { id: 14, bgImage: modern14 },
  { id: 15, bgImage: modern15 },
  { id: 16, bgImage: modern16 },
  { id: 17, bgImage: modern17 },
  { id: 18, bgImage: modern18 },
  { id: 19, bgImage: modern19 },
  { id: 20, bgImage: modern20 },
];

  // அடுத்த புராஜெக்ட்டுக்கு மாற (Next Button)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // முந்தைய புராஜெக்ட்டுக்கு மாற (Prev Button)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
    );
  };

  // தற்போதைய ஆக்டிவ் டேட்டா
  const currentProject = portfolioData[currentIndex];

  return (
    <div className="sync-portfolio-viewport">
      <div className="sync-portfolio-container">
        
        {/* செக்ஷன் மெயின் தலைப்பு */}
        <h2 className="sync-portfolio-main-heading font-serief"><span>✻</span> Project Gallery</h2>

        {/* பிரதான பெரிய இமேஜ் பாக்ஸ் */}
        <div className="sync-portfolio-hero-banner">
          
          {/* 🎯 மாற்றம் 1: எல்லா இமேஜ்களையும் தனித்தனி லேயராக அடுக்கியுள்ளோம் (Smooth Cross-fade க்காக) */}
          {portfolioData.map((project, index) => (
            <div 
              key={project.id}
              className={`sync-portfolio-bg-layer ${index === currentIndex ? 'bg-active' : ''}`}
              style={{ backgroundImage: `url("${project.bgImage}")` }}
            ></div>
          ))}

        </div>

        {/* கட்டுப்படுத்தும் நேவிகேஷன் பட்டன்கள் (View Next Projects) */}
        <div className="sync-portfolio-controls-row">
          <SyncPortfolioNavButton
            text="Previous | Next Image" 
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