import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/vivke (1).webp';
import modern2 from '../../assets/vivke (2).webp';
import modern3 from '../../assets/vivke (3).webp';
import modern4 from '../../assets/vivke (4).webp';
import modern5 from '../../assets/vivke (5).webp';
import modern6 from '../../assets/vivke (6).webp';
import modern7 from '../../assets/vivke (7).webp';
import modern8 from '../../assets/vivke (8).webp';
import modern9 from '../../assets/vivke (9).webp';
import modern10 from '../../assets/vivke (10).webp';
import modern11 from '../../assets/vivke (11).webp';
import modern12 from '../../assets/vivke (12).webp';
import modern13 from '../../assets/vivke (13).webp';
import modern14 from '../../assets/vivke (14).webp';
import modern15 from '../../assets/vivke (15).webp';
import modern16 from '../../assets/vivke (16).webp';
import modern17 from '../../assets/vivke (17).webp';
import modern18 from '../../assets/vivke (18).webp';
import modern19 from '../../assets/vivke (19).webp';
import modern20 from '../../assets/vivke (20).webp';
import modern21 from '../../assets/vivke (21).webp';
import modern22 from '../../assets/vivke (22).webp';
import modern23 from '../../assets/vivke (23).webp';
import modern24 from '../../assets/vivke (24).webp';
import modern25 from '../../assets/vivke (25).webp';
import modern26 from '../../assets/vivke (26).webp';
import modern27 from '../../assets/vivke (27).webp';
import modern28 from '../../assets/vivke (28).webp';
import modern29 from '../../assets/vivke (29).webp';
import modern30 from '../../assets/vivke (30).webp';
import modern31 from '../../assets/vivke (31).webp';
import SyncPortfolioNavButton from '../ProjectDetail1/SyncPortfolioNavButton';
import SyncPortfolioFluidButton from '../ProjectDetail1/SyncPortfolioFluidButton';
import ProjectGooButtons from '../ProjectDetail1/ProjectGooButtons';

const UnimaxxPortfolio = () => {
  // ஸ்லைடரின் தற்போதைய இண்டெக்ஸைக் கண்காணிக்க State
  const [currentIndex, setCurrentIndex] = useState(0);

  // உங்களிடம் உள்ள ஐந்து இமேஜ்களை பின்னணி மற்றும் கார்டுக்குள் மாறி மாறி வருமாறு செட் செய்துள்ளேன்
const portfolioData = [
    { id: 31, bgImage: modern31 },
  { id: 1, bgImage: modern1 },

  { id: 3, bgImage: modern3 },
  
  
  { id: 6, bgImage: modern6 },
  { id: 7, bgImage: modern7 },
  { id: 8, bgImage: modern8 },
  { id: 9, bgImage: modern9 },
  { id: 10, bgImage: modern10 },
  { id: 11, bgImage: modern11 },
  { id: 12, bgImage: modern12 },
  { id: 13, bgImage: modern13 },
  
  { id: 15, bgImage: modern15 },
  { id: 16, bgImage: modern16 },
  { id: 17, bgImage: modern17 },
  { id: 18, bgImage: modern18 },
  { id: 19, bgImage: modern19 },
  { id: 20, bgImage: modern20 },
  { id: 21, bgImage: modern21 },
  { id: 22, bgImage: modern22 },
  { id: 23, bgImage: modern23 },
  { id: 24, bgImage: modern24 },
  { id: 25, bgImage: modern25 },
  { id: 26, bgImage: modern26 },
  { id: 27, bgImage: modern27 },
  { id: 28, bgImage: modern28 },
  { id: 29, bgImage: modern29 },
  { id: 30, bgImage: modern30 },

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
            text="Previous | Next Project" 
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