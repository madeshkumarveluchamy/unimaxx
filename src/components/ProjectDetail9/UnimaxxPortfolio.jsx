import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/Pritham (1).webp';
import modern2 from '../../assets/Pritham (2).webp';
import modern3 from '../../assets/Pritham (3).webp';
import modern4 from '../../assets/Pritham (4).webp';
import modern5 from '../../assets/Pritham (5).webp';
import modern6 from '../../assets/Pritham (6).webp';
import modern7 from '../../assets/Pritham (7).webp';
import modern8 from '../../assets/Pritham (8).webp';
import modern9 from '../../assets/Pritham (9).webp';
import modern10 from '../../assets/Pritham (10).webp';
import modern11 from '../../assets/Pritham (11).webp';
import modern12 from '../../assets/Pritham (12).webp';
import modern13 from '../../assets/Pritham (13).webp';
import modern14 from '../../assets/Pritham (14).webp';
import modern15 from '../../assets/Pritham (15).webp';
import modern16 from '../../assets/Pritham (16).webp';
import modern17 from '../../assets/Pritham (17).webp';
import modern18 from '../../assets/Pritham (18).webp';
import modern19 from '../../assets/Pritham (19).webp';
import modern20 from '../../assets/Pritham (20).webp';
import modern21 from '../../assets/Pritham (21).webp';
import modern22 from '../../assets/Pritham (22).webp';
import modern23 from '../../assets/Pritham (23).webp';
import modern24 from '../../assets/Pritham (24).webp';
import modern25 from '../../assets/Pritham (25).webp';
import SyncPortfolioNavButton from '../ProjectDetail1/SyncPortfolioNavButton';
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
    bgImage: modern10,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 11,
    bgImage: modern11,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 12,
    bgImage: modern12,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 13,
    bgImage: modern13,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 14,
    bgImage: modern14,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 15,
    bgImage: modern15,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 16,
    bgImage: modern16,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 17,
    bgImage: modern17,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 18,
    bgImage: modern18,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 19,
    bgImage: modern19,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 20,
    bgImage: modern20,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 21,
    bgImage: modern21,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 22,
    bgImage: modern22,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 23,
    bgImage: modern23,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 24,
    bgImage: modern24,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 25,
    bgImage: modern25,     /* பிரதான கிச்சன் பின்னணி */
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