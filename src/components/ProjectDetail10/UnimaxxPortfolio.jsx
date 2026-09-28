import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/subramanicut (1).webp';
import modern2 from '../../assets/subramanicut (2).webp';
import modern3 from '../../assets/subramanicut (3).webp';
import modern4 from '../../assets/subramanicut (4).webp';
import modern5 from '../../assets/subramanicut (5).webp';
import modern6 from '../../assets/subramanicut (6).webp';
import modern7 from '../../assets/subramanicut (7).webp';
import modern8 from '../../assets/subramanicut (8).webp';
import modern9 from '../../assets/subramanicut (9).webp';
import modern10 from '../../assets/subramanicut (10).webp';
import modern11 from '../../assets/subramanicut (11).webp';
import modern12 from '../../assets/subramanicut (12).webp';
import modern13 from '../../assets/subramanicut (13).webp';
import modern14 from '../../assets/subramanicut (14).webp';
import modern15 from '../../assets/subramanicut (15).webp';
import modern16 from '../../assets/subramanicut (16).webp';
import modern17 from '../../assets/subramanicut (17).webp';
import modern18 from '../../assets/subramanicut (18).webp';
import modern19 from '../../assets/subramanicut (19).webp';
import modern20 from '../../assets/subramanicut (20).webp';
import modern21 from '../../assets/subramani (1).webp';
import modern22 from '../../assets/subramani (2).webp';
import modern23 from '../../assets/subramani (3).webp';
import modern24 from '../../assets/subramani (4).webp';
import modern25 from '../../assets/subramani (5).webp';
import modern26 from '../../assets/subramani (6).webp';
import modern27 from '../../assets/subramani (7).webp';
import modern28 from '../../assets/subramani (8).webp';
import modern29 from '../../assets/subramani (9).webp';
import modern30 from '../../assets/subramani (10).webp';
import modern31 from '../../assets/subramani (11).webp';
import modern32 from '../../assets/subramani (12).webp';
import modern33 from '../../assets/subramani (13).webp';
import modern34 from '../../assets/subramani (14).webp';
import modern35 from '../../assets/subramani (15).webp';
import modern36 from '../../assets/subramani (16).webp';
import modern37 from '../../assets/subramani (17).webp';
import modern38 from '../../assets/subramani (18).webp';
import modern39 from '../../assets/subramani (19).webp';
import modern40 from '../../assets/subramani (20).webp';
import modern41 from '../../assets/subramani (21).webp';
import modern42 from '../../assets/subramani (22).webp';
import modern43 from '../../assets/subramani (23).webp';
import modern44 from '../../assets/subramani (24).webp';
import modern45 from '../../assets/subramani (25).webp';
import modern46 from '../../assets/subramani (26).webp';
import modern47 from '../../assets/subramani (27).webp';
import modern48 from '../../assets/subramani (28).webp';
import modern49 from '../../assets/subramani (29).webp';
import modern50 from '../../assets/subramani (30).webp';
import modern51 from '../../assets/subramani (31).webp';
import modern52 from '../../assets/subramani (32).webp';
import modern53 from '../../assets/subramani (33).webp';
import modern54 from '../../assets/subramani (34).webp';
import modern55 from '../../assets/subramani (35).webp';
import modern56 from '../../assets/subramani (36).webp';
import modern57 from '../../assets/subramani (37).webp';
import modern58 from '../../assets/subramani (38).webp';
import modern59 from '../../assets/subramani (39).webp';
import modern60 from '../../assets/subramani (40).webp';
import modern61 from '../../assets/subramani (41).webp';
import modern62 from '../../assets/subramani (42).webp';
import modern63 from '../../assets/subramani (43).webp';
import modern64 from '../../assets/subramani (44).webp';
import modern65 from '../../assets/subramani (45).webp';
import SyncPortfolioNavButton from '../ProjectDetail1/SyncPortfolioNavButton';
import SyncPortfolioFluidButton from '../ProjectDetail1/SyncPortfolioFluidButton';
import ProjectGooButtons from '../ProjectDetail1/ProjectGooButtons';

const UnimaxxPortfolio = () => {
  // ஸ்லைடரின் தற்போதைய இண்டெக்ஸைக் கண்காணிக்க State
  const [currentIndex, setCurrentIndex] = useState(0);

  // உங்களிடம் உள்ள ஐந்து இமேஜ்களை பின்னணி மற்றும் கார்டுக்குள் மாறி மாறி வருமாறு செட் செய்துள்ளேன்
const portfolioData = [
  { id: 1, bgImage: modern1 },
  { id: 2, bgImage: modern2 },
  { id: 3, bgImage: modern3 },
  { id: 4, bgImage: modern4 },
  { id: 5, bgImage: modern5 },
  { id: 6, bgImage: modern6 },
  { id: 7, bgImage: modern7 },
  { id: 8, bgImage: modern8 },
  { id: 9, bgImage: modern9 },
  { id: 10, bgImage: modern10 },
  { id: 11, bgImage: modern11 },
  { id: 12, bgImage: modern12 },
  { id: 13, bgImage: modern13 },
  { id: 14, bgImage: modern14 },
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
  { id: 31, bgImage: modern31 },
  { id: 32, bgImage: modern32 },
  { id: 33, bgImage: modern33 },
  { id: 34, bgImage: modern34 },
  { id: 35, bgImage: modern35 },
  { id: 36, bgImage: modern36 },
  { id: 37, bgImage: modern37 },
  { id: 38, bgImage: modern38 },
  { id: 39, bgImage: modern39 },
  { id: 40, bgImage: modern40 },
  { id: 41, bgImage: modern41 },
  { id: 42, bgImage: modern42 },
  { id: 43, bgImage: modern43 },
  { id: 44, bgImage: modern44 },
  { id: 45, bgImage: modern45 },
  { id: 46, bgImage: modern46 },
  { id: 47, bgImage: modern47 },
  { id: 48, bgImage: modern48 },
  { id: 49, bgImage: modern49 },
  { id: 50, bgImage: modern50 },
  { id: 51, bgImage: modern51 },
  { id: 52, bgImage: modern52 },
  { id: 53, bgImage: modern53 },
  { id: 54, bgImage: modern54 },
  { id: 55, bgImage: modern55 },
  { id: 56, bgImage: modern56 },
  { id: 57, bgImage: modern57 },
  { id: 58, bgImage: modern58 },
  { id: 59, bgImage: modern59 },
  { id: 60, bgImage: modern60 },
  { id: 61, bgImage: modern61 },
  { id: 62, bgImage: modern62 },
  { id: 63, bgImage: modern63 },
  { id: 64, bgImage: modern64 },
  { id: 65, bgImage: modern65 }
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