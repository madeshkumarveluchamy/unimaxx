import React, { useState } from 'react';
import '../ProjectDetail1/css/UnimaxxPortfolio.css';

// நாம் ஏற்கனவே பயன்படுத்திய அதே இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/modern1.webp'; 
import modern2 from '../../assets/modern2.webp';
import modern3 from '../../assets/modern3.webp'; 
import modern4 from '../../assets/modern4.webp';
import modern5 from '../../assets/modern5.webp'; 
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
      bgImage: modern2,      /* பிரதான சோபா பின்னணி */
      cardImage: modern1,    /* கார்டுக்குள் இருக்கும் கிச்சன் இமேஜ் */
      title: "Modern Residence",
      type: "RESIDENTIAL",
      location: "COIMBATORE, TN"
    },
    {
      id: 2,
      bgImage: modern4,      /* பிரதான லிவிங் ரூம் பின்னணி */
      cardImage: modern3,    /* கார்டுக்குள் இருக்கும் ஜன்னல் இமேஜ் */
      title: "Luxury Villa Loft",
      type: "RESIDENTIAL",
      location: "BANGALORE, KA"
    },
    {
      id: 3,
      bgImage: modern1,      /* பிரதான கிச்சன் பின்னணி */
      cardImage: modern5,    /* கார்டுக்குள் இருக்கும் காபி டேபிள் இமேஜ் */
      title: "Premium Penthouse",
      type: "COMMERCIAL",
      location: "CHENNAI, TN"
    }
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

        {/* பிரதான பெரிய இமேஜ் பாக்ஸ் (பட்டன் அழுத்தும்போது இதனுடைய பின்னணி மாறும்) */}
        <div 
          className="sync-portfolio-hero-banner"
          style={{ backgroundImage: `url(${currentProject.bgImage})` }}
        >
          
          {/* வலதுபுறம் மிதக்கும் கார்டு லேயர் (இதன் உள்ளே இருக்கும் இமேஜ் மற்றும் டெக்ஸ்ட்டும் மாறும்) */}
          <div className="sync-portfolio-floating-card">
            <div className="sync-portfolio-card-media">
              <img src={currentProject.cardImage} alt={currentProject.title} />
            </div>
            
            <div className="sync-portfolio-card-info">
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