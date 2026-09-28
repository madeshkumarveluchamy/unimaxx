import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';
import SyncPortfolioNavButton from '../ProjectDetail1/SyncPortfolioNavButton';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/Corporate_office (1).webp'; 
import modern2 from '../../assets/Corporate_office (2).webp';
import modern3 from '../../assets/Corporate_office (3).webp'; 
import modern4 from '../../assets/Corporate_office (4).webp';
import modern5 from '../../assets/Corporate_office (5).webp'; 
import modern6 from '../../assets/Corporate_office (6).webp'; 
import modern7 from '../../assets/Corporate_office (7).webp'; 
import modern8 from '../../assets/Corporate_office (8).webp'; 
import modern9 from '../../assets/Corporate_office (9).webp'; 
import modern10 from '../../assets/Corporate_office (10).webp'; 

import SyncPortfolioFluidButton from '../ProjectDetail1/SyncPortfolioFluidButton';
import ProjectGooButtons from '../ProjectDetail1/ProjectGooButtons';

const UnimaxxPortfolio = () => {
  // ஸ்லைடரின் தற்போதைய இண்டெக்ஸைக் கண்காணிக்க State
  const [currentIndex, setCurrentIndex] = useState(0);

  // உங்களிடம் உள்ள ஐந்து இமேஜ்களை பின்னணி மற்றும் கார்டுக்குள் மாறி மாறி வருமாறு செட் செய்துள்ளேன்
  const portfolioData = [
    {
      id: 1,
      bgImage: modern1,      /* பிரதான சோபா பின்னணி */
    },
    {
      id: 2,
      bgImage: modern2,      /* பிரதான லிவிங் ரூம் பின்னணி */
     
    },
    {
      id: 3,
      bgImage: modern3,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 4,
      bgImage: modern4,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 5,
      bgImage: modern5,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 6,
      bgImage: modern6,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 7,
      bgImage: modern7,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 8,
      bgImage: modern8,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 9,
      bgImage: modern9,      /* பிரதான கிச்சன் பின்னணி */
    },
    {
      id: 10,
      bgImage: modern10,      /* பிரதான கிச்சன் பின்னணி */
    },
   
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
        <h2 className="sync-portfolio-main-heading font-serief"><span>✻</span> Our Portfolio</h2>

        {/* 🎯 பிரதான பெரிய இமேஜ் பாக்ஸ் */}
        <div className="sync-portfolio-hero-banner">
          
          {/* 🎯 மெதுவாக மாறும் (Smooth Cross-fade) அனிமேஷனுக்கான லேயர்கள் */}
          {portfolioData.map((project, index) => (
            <div 
              key={project.id}
              className={`sync-portfolio-bg-layer ${index === currentIndex ? 'bg-active' : ''}`}
              style={{ backgroundImage: `url("${project.bgImage}" )` }}
            ></div>
          ))}
          
          

        </div>

        {/* கட்டுப்படுத்தும் நேவிகேஷன் பட்டன்கள் (View Next Projects) */}
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