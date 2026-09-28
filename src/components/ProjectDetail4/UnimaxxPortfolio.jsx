import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/EivvaVilla21 (22).webp';
import modern2 from '../../assets/EivvaVilla21 (23).webp';
import modern3 from '../../assets/EivvaVilla21 (24).webp';
import modern4 from '../../assets/EivvaVilla21 (25).webp';
import modern5 from '../../assets/EivvaVilla21 (26).webp';
import modern6 from '../../assets/EivvaVilla21 (27).webp';
import modern7 from '../../assets/EivvaVilla21 (28).webp';
import modern8 from '../../assets/EivvaVilla21 (29).webp';
import modern9 from '../../assets/EivvaVilla21 (30).webp';
import modern10 from '../../assets/EivvaVilla21 (31).webp';
import modern11 from '../../assets/EivvaVilla21 (32).webp';
import modern12 from '../../assets/EivvaVilla21 (33).webp';
import modern13 from '../../assets/EivvaVilla21 (34).webp';
import modern14 from '../../assets/EivvaVilla21 (35).webp';
import modern15 from '../../assets/EivvaVilla21 (36).webp';
import modern16 from '../../assets/EivvaVilla21 (37).webp';
import modern17 from '../../assets/EivvaVilla21 (38).webp';
import modern18 from '../../assets/EivvaVilla21 (39).webp';
import modern19 from '../../assets/EivvaVilla21 (40).webp';
import modern20 from '../../assets/EivvaVilla21 (41).webp';
import modern21 from '../../assets/EivvaVilla21 (42).webp';
import modern22 from '../../assets/EivvaVilla21 (43).webp';
import modern23 from '../../assets/EivvaVilla21 (44).webp';
import modern24 from '../../assets/EivvaVilla21 (45).webp';
import modern25 from '../../assets/EivvaVilla21 (46).webp';
import modern26 from '../../assets/EivvaVilla21 (47).webp';
import modern27 from '../../assets/EivvaVilla21 (48).webp';
import modern28 from '../../assets/EivvaVilla21 (49).webp';
import modern29 from '../../assets/EivvaVilla21 (50).webp';
import modern30 from '../../assets/EivvaVilla21 (51).webp';
import modern31 from '../../assets/EivvaVilla21 (52).webp';
import modern32 from '../../assets/EivvaVilla21 (53).webp';
import modern33 from '../../assets/EivvaVilla21 (54).webp';
import modern34 from '../../assets/EivvaVilla21 (55).webp';
import modern35 from '../../assets/EivvaVilla21 (56).webp';
import modern36 from '../../assets/EivvaVilla21 (57).webp';
import modern37 from '../../assets/EivvaVilla21 (58).webp';
import modern38 from '../../assets/EivvaVilla21 (59).webp';
import modern39 from '../../assets/EivvaVilla21 (60).webp';
import modern40 from '../../assets/EivvaVilla21 (61).webp';
import modern41 from '../../assets/EivvaVilla21 (62).webp';
import modern42 from '../../assets/EivvaVilla21 (63).webp';
import modern43 from '../../assets/EivvaVilla21 (64).webp';
import modern44 from '../../assets/EivvaVilla21 (65).webp';
import modern45 from '../../assets/EivvaVilla21 (66).webp';
import modern46 from '../../assets/EivvaVilla21 (67).webp';
import modern47 from '../../assets/EivvaVilla21 (68).webp';
import modern48 from '../../assets/EivvaVilla21 (69).webp';
import modern49 from '../../assets/EivvaVilla21 (70).webp';
import modern50 from '../../assets/EivvaVilla21 (71).webp';
import modern51 from '../../assets/EivvaVilla21 (72).webp';
import modern52 from '../../assets/EivvaVilla21 (73).webp';
import modern53 from '../../assets/EivvaVilla21 (74).webp';
import modern54 from '../../assets/EivvaVilla21 (75).webp';
import modern55 from '../../assets/EivvaVilla21 (76).webp';
import modern56 from '../../assets/EivvaVilla21 (77).webp';
import modern57 from '../../assets/EivvaVilla21 (78).webp';
import modern58 from '../../assets/EivvaVilla21 (79).webp';
import modern59 from '../../assets/EivvaVilla21 (80).webp';
import modern60 from '../../assets/EivvaVilla21 (81).webp';
import modern61 from '../../assets/EivvaVilla21 (82).webp';
import modern62 from '../../assets/EivvaVilla21 (83).webp';
import modern63 from '../../assets/EivvaVilla21 (84).webp';
import modern64 from '../../assets/EivvaVilla21 (85).webp';
import modern65 from '../../assets/EivvaVilla21 (86).webp';
import modern66 from '../../assets/EivvaVilla21 (87).webp';
import modern67 from '../../assets/EivvaVilla21 (88).webp';
import modern68 from '../../assets/EivvaVilla21 (89).webp';
import modern69 from '../../assets/EivvaVilla21 (90).webp';
import modern70 from '../../assets/EivvaVilla21 (91).webp';
import modern71 from '../../assets/EivvaVilla21 (92).webp';
import modern72 from '../../assets/EivvaVilla21 (93).webp';
import modern73 from '../../assets/EivvaVilla21 (94).webp';
import modern74 from '../../assets/EivvaVilla21 (95).webp';
import modern75 from '../../assets/EivvaVilla21 (96).webp';
import modern76 from '../../assets/EivvaVilla21 (97).webp';
import modern77 from '../../assets/EivvaVilla21 (98).webp';
import modern78 from '../../assets/EivvaVilla21 (99).webp';
import modern79 from '../../assets/EivvaVilla21 (100).webp';
import modern80 from '../../assets/EivvaVilla21 (101).webp';
import modern81 from '../../assets/EivvaVilla21 (102).webp';
import modern82 from '../../assets/EivvaVilla21 (103).webp';
import modern83 from '../../assets/EivvaVilla21 (104).webp';
import modern84 from '../../assets/EivvaVilla21 (105).webp';
import modern85 from '../../assets/EivvaVilla21 (106).webp';
import modern86 from '../../assets/EivvaVilla21 (107).webp';
import modern87 from '../../assets/EivvaVilla21 (108).webp';
import modern88 from '../../assets/EivvaVilla21 (109).webp';
import modern89 from '../../assets/EivvaVilla21 (110).webp';
import modern90 from '../../assets/EivvaVilla21 (111).webp';
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
    bgImage: modern1,
  },
  {
    id: 2,
    bgImage: modern2,
  },
  {
    id: 3,
    bgImage: modern3,
  },
  {
    id: 4,
    bgImage: modern4,
  },
  {
    id: 5,
    bgImage: modern5,
  },
  {
    id: 6,
    bgImage: modern6,
  },
  {
    id: 7,
    bgImage: modern7,
  },
  {
    id: 8,
    bgImage: modern8,
  },
  {
    id: 9,
    bgImage: modern9,
  },
  {
    id: 10,
    bgImage: modern10,
  },
  {
    id: 11,
    bgImage: modern11,
  },
  {
    id: 12,
    bgImage: modern12,
  },
  {
    id: 13,
    bgImage: modern13,
  },
  {
    id: 14,
    bgImage: modern14,
  },
  {
    id: 15,
    bgImage: modern15,
  },
  {
    id: 16,
    bgImage: modern16,
  },
  {
    id: 17,
    bgImage: modern17,
  },
  {
    id: 18,
    bgImage: modern18,
  },
  {
    id: 19,
    bgImage: modern19,
  },
  {
    id: 20,
    bgImage: modern20,
  },
  {
    id: 21,
    bgImage: modern21,
  },
  {
    id: 22,
    bgImage: modern22,
  },
  {
    id: 23,
    bgImage: modern23,
  },
  {
    id: 24,
    bgImage: modern24,
  },
  {
    id: 25,
    bgImage: modern25,
  },
  {
    id: 26,
    bgImage: modern26,
  },
  {
    id: 27,
    bgImage: modern27,
  },
  {
    id: 28,
    bgImage: modern28,
  },
  {
    id: 29,
    bgImage: modern29,
  },
  {
    id: 30,
    bgImage: modern30,
  },
  {
    id: 31,
    bgImage: modern31,
  },
  {
    id: 32,
    bgImage: modern32,
  },
  {
    id: 33,
    bgImage: modern33,
  },
  {
    id: 34,
    bgImage: modern34,
  },
  {
    id: 35,
    bgImage: modern35,
  },
  {
    id: 36,
    bgImage: modern36,
  },
  {
    id: 37,
    bgImage: modern37,
  },
  {
    id: 38,
    bgImage: modern38,
  },
  {
    id: 39,
    bgImage: modern39,
  },
  {
    id: 40,
    bgImage: modern40,
  },
  {
    id: 41,
    bgImage: modern41,
  },
  {
    id: 42,
    bgImage: modern42,
  },
  {
    id: 43,
    bgImage: modern43,
  },
  {
    id: 44,
    bgImage: modern44,
  },
  {
    id: 45,
    bgImage: modern45,
  },
  {
    id: 46,
    bgImage: modern46,
  },
  {
    id: 47,
    bgImage: modern47,
  },
  {
    id: 48,
    bgImage: modern48,
  },
  {
    id: 49,
    bgImage: modern49,
  },
  {
    id: 50,
    bgImage: modern50,
  },
  {
    id: 51,
    bgImage: modern51,
  },
  {
    id: 52,
    bgImage: modern52,
  },
  {
    id: 53,
    bgImage: modern53,
  },
  {
    id: 54,
    bgImage: modern54,
  },
  {
    id: 55,
    bgImage: modern55,
  },
  {
    id: 56,
    bgImage: modern56,
  },
  {
    id: 57,
    bgImage: modern57,
  },
  {
    id: 58,
    bgImage: modern58,
  },
  {
    id: 59,
    bgImage: modern59,
  },
  {
    id: 60,
    bgImage: modern60,
  },
  {
    id: 61,
    bgImage: modern61,
  },
  {
    id: 62,
    bgImage: modern62,
  },
  {
    id: 63,
    bgImage: modern63,
  },
  {
    id: 64,
    bgImage: modern64,
  },
  {
    id: 65,
    bgImage: modern65,
  },
  {
    id: 66,
    bgImage: modern66,
  },
  {
    id: 67,
    bgImage: modern67,
  },
  {
    id: 68,
    bgImage: modern68,
  },
  {
    id: 69,
    bgImage: modern69,
  },
  {
    id: 70,
    bgImage: modern70,
  },
  {
    id: 71,
    bgImage: modern71,
  },
  {
    id: 72,
    bgImage: modern72,
  },
  {
    id: 73,
    bgImage: modern73,
  },
  {
    id: 74,
    bgImage: modern74,
  },
  {
    id: 75,
    bgImage: modern75,
  },
  {
    id: 76,
    bgImage: modern76,
  },
  {
    id: 77,
    bgImage: modern77,
  },
  {
    id: 78,
    bgImage: modern78,
  },
  {
    id: 79,
    bgImage: modern79,
  },
  {
    id: 80,
    bgImage: modern80,
  },
  {
    id: 81,
    bgImage: modern81,
  },
  {
    id: 82,
    bgImage: modern82,
  },
  {
    id: 83,
    bgImage: modern83,
  },
  {
    id: 84,
    bgImage: modern84,
  },
  {
    id: 85,
    bgImage: modern85,
  },
  {
    id: 86,
    bgImage: modern86,
  },
  {
    id: 87,
    bgImage: modern87,
  },
  {
    id: 88,
    bgImage: modern88,
  },
  {
    id: 89,
    bgImage: modern89,
  },
  {
    id: 90,
    bgImage: modern90,
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