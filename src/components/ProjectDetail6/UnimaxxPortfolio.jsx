import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/EivvaVilla 32  (1).webp';
import modern2 from '../../assets/EivvaVilla 32  (2).webp';
import modern3 from '../../assets/EivvaVilla 32  (3).webp';
import modern4 from '../../assets/EivvaVilla 32  (4).webp';
import modern5 from '../../assets/EivvaVilla 32  (5).webp';
import modern6 from '../../assets/EivvaVilla 32  (6).webp';
import modern7 from '../../assets/EivvaVilla 32  (7).webp';
import modern8 from '../../assets/EivvaVilla 32  (8).webp';
import modern9 from '../../assets/EivvaVilla 32  (9).webp';
import modern10 from '../../assets/EivvaVilla 32  (10).webp';
import modern11 from '../../assets/EivvaVilla 32  (11).webp';
import modern12 from '../../assets/EivvaVilla 32  (12).webp';
import modern13 from '../../assets/EivvaVilla 32  (13).webp';
import modern14 from '../../assets/EivvaVilla 32  (14).webp';
import modern15 from '../../assets/EivvaVilla 32  (15).webp';
import modern16 from '../../assets/EivvaVilla 32  (16).webp';
import modern17 from '../../assets/EivvaVilla 32  (17).webp';
import modern18 from '../../assets/EivvaVilla 32  (18).webp';
import modern19 from '../../assets/EivvaVilla 32  (19).webp';
import modern20 from '../../assets/EivvaVilla 32  (20).webp';
import modern21 from '../../assets/EivvaVilla 32  (21).webp';
import modern22 from '../../assets/EivvaVilla 32  (22).webp';
import modern23 from '../../assets/EivvaVilla 32  (23).webp';
import modern24 from '../../assets/EivvaVilla 32  (24).webp';
import modern25 from '../../assets/EivvaVilla 32  (25).webp';
import modern26 from '../../assets/EivvaVilla 32  (26).webp';
import modern27 from '../../assets/EivvaVilla 32  (27).webp';
import modern28 from '../../assets/EivvaVilla 32  (28).webp';
import modern29 from '../../assets/EivvaVilla 32  (29).webp';
import modern30 from '../../assets/EivvaVilla 32  (30).webp';
import modern31 from '../../assets/EivvaVilla 32  (31).webp';
import modern32 from '../../assets/EivvaVilla 32  (32).webp';
import modern33 from '../../assets/EivvaVilla 32  (33).webp';
import modern34 from '../../assets/EivvaVilla 32  (34).webp';
import modern35 from '../../assets/EivvaVilla 32  (35).webp';
import modern36 from '../../assets/EivvaVilla 32  (36).webp';
import modern37 from '../../assets/EivvaVilla 32  (37).webp';
import modern38 from '../../assets/EivvaVilla 32  (38).webp';
import modern39 from '../../assets/EivvaVilla 32  (39).webp';
import modern40 from '../../assets/EivvaVilla 32  (40).webp';
import modern41 from '../../assets/EivvaVilla 32  (41).webp';
import modern42 from '../../assets/EivvaVilla 32  (42).webp';
import modern43 from '../../assets/EivvaVilla 32  (43).webp';
import modern44 from '../../assets/EivvaVilla 32  (44).webp';
import modern45 from '../../assets/EivvaVilla 32  (45).webp';
import modern46 from '../../assets/EivvaVilla 32  (46).webp';
import modern47 from '../../assets/EivvaVilla 32  (47).webp';
import modern48 from '../../assets/EivvaVilla 32  (48).webp';
import modern49 from '../../assets/EivvaVilla 32  (49).webp';
import modern50 from '../../assets/EivvaVilla 32  (50).webp';
import modern51 from '../../assets/EivvaVilla 32  (51).webp';
import modern52 from '../../assets/EivvaVilla 32  (52).webp';
import modern53 from '../../assets/EivvaVilla 32  (53).webp';
import modern54 from '../../assets/EivvaVilla 32  (54).webp';
import modern55 from '../../assets/EivvaVilla 32  (55).webp';
import modern56 from '../../assets/EivvaVilla 32  (56).webp';
import modern57 from '../../assets/EivvaVilla 32  (57).webp';
import modern58 from '../../assets/EivvaVilla 32  (58).webp';
import modern59 from '../../assets/EivvaVilla 32  (59).webp';
import modern60 from '../../assets/EivvaVilla 32  (60).webp';
import modern61 from '../../assets/EivvaVilla 32  (61).webp';
import modern62 from '../../assets/EivvaVilla 32  (62).webp';
import modern63 from '../../assets/EivvaVilla 32  (63).webp';
import modern64 from '../../assets/EivvaVilla 32  (64).webp';
import modern65 from '../../assets/EivvaVilla 32  (65).webp';
import modern66 from '../../assets/EivvaVilla 32  (66).webp';
import modern67 from '../../assets/EivvaVilla 32  (67).webp';
import modern68 from '../../assets/EivvaVilla 32  (68).webp';
import modern69 from '../../assets/EivvaVilla 32  (69).webp';
import modern70 from '../../assets/EivvaVilla 32  (70).webp'; 
import modern71 from '../../assets/evvia villa 32 (80).webp'; 
import modern72 from '../../assets/evvia villa 32 (81).webp'; 

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
  {
    id: 26,
    bgImage: modern26,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 27,
    bgImage: modern27,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 28,
    bgImage: modern28,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 29,
    bgImage: modern29,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 30,
    bgImage: modern30,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 31,
    bgImage: modern31,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 32,
    bgImage: modern32,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 33,
    bgImage: modern33,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 34,
    bgImage: modern34,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 35,
    bgImage: modern35,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 36,
    bgImage: modern36,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 37,
    bgImage: modern37,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 38,
    bgImage: modern38,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 39,
    bgImage: modern39,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 40,
    bgImage: modern40,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 41,
    bgImage: modern41,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 42,
    bgImage: modern42,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 43,
    bgImage: modern43,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 44,
    bgImage: modern44,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 45,
    bgImage: modern45,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 46,
    bgImage: modern46,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 47,
    bgImage: modern47,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 48,
    bgImage: modern48,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 49,
    bgImage: modern49,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 50,
    bgImage: modern50,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 51,
    bgImage: modern51,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 52,
    bgImage: modern52,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 53,
    bgImage: modern53,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 54,
    bgImage: modern54,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 55,
    bgImage: modern55,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 56,
    bgImage: modern56,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 57,
    bgImage: modern57,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 58,
    bgImage: modern58,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 59,
    bgImage: modern59,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 60,
    bgImage: modern60,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 61,
    bgImage: modern61,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 62,
    bgImage: modern62,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 63,
    bgImage: modern63,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 64,
    bgImage: modern64,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 65,
    bgImage: modern65,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 66,
    bgImage: modern66,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 67,
    bgImage: modern67,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 68,
    bgImage: modern68,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 69,
    bgImage: modern69,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 70,
    bgImage: modern70,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 71,
    bgImage: modern71,     /* பிரதான கிச்சன் பின்னணி */
  },
  {
    id: 72,
    bgImage: modern72,     /* பிரதான கிச்சன் பின்னணி */
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