import React, { useState, useEffect } from 'react';
import './css/UnimaxxExpertise.css';

import expertiseimg1 from '../../assets/expertiseimg1.webp';
import expertiseimg2 from '../../assets/expertiseimg2.webp';
import expertiseimg3 from '../../assets/expertiseimg3.webp';
import expertiseimg4 from '../../assets/expertiseimg4.webp';
import expertiseimg5 from '../../assets/expertiseimg5.webp';
import GetQuoteGooButton from './GetQuoteGooButton';

const UnimaxxExpertise = () => {
  // Default-ஆக எந்த கார்டும் open-ல் இருக்க வேண்டாம் எனில் null என வைக்கலாம்
  // அல்லது முதல் கார்டு திறந்திருக்க வேண்டும் எனில் 1 என வைக்கலாம்.
  const [activeId, setActiveId] = useState(null); 
  
  // Mobile-ஐ கண்டுபிடிக்க <= 968 பயன்படுத்துகிறோம்
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  const expertiseData = [
    {
      id: 1,
      num: "01",
      img: expertiseimg1,
      title: "Residential Interiors",
      subtitle: "Spaces made personal",
      count: "50+",
      desc: "We design homes around individual lifestyles, creating balanced layouts, thoughtful material palettes, and interiors that feel comfortable, distinctive, and naturally connected."
    },
    {
      id: 2,
      num: "02",
      img: expertiseimg2,
      title: "Commercial Spaces",
      subtitle: "Designed for your business",
      count: "30+",
      desc: "We create purposeful commercial environments that reflect each brand while considering functionality, customer experience, workflow, and the character of the business."
    },
    {
      id: 3,
      num: "03",
      img: expertiseimg3,
      title: "Interior Architecture",
      subtitle: "Where space meets structure",
      count: "25+",
      desc: "We thoughtfully shape interior volumes by combining spatial planning, architectural elements, natural light, and material expression to create cohesive and functional environments."
    },
    {
      id: 4,
      num: "04",
      img: expertiseimg4,
      title: "Furniture & Styling",
      subtitle: "Details that complete the space",
      count: "100+",
      desc: "From carefully selected furniture to custom pieces and finishing details, we bring together textures, forms, and accents that give every interior its own distinctive character."
    },
    {
      id: 5,
      num: "05",
      img: expertiseimg5,
      title: "Renovation Consulting",
      subtitle: "Transforming existing spaces",
      count: "40+",
      desc: "We help reimagine existing spaces through considered renovation strategies, practical planning, and design guidance that brings new function and character to established environments."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hover செய்யும் போது வேலை செய்ய (Desktop மட்டும்)
  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setActiveId(id);
    }
  };

  // Mouse வெளியேறும் போது மூட (Desktop மட்டும்)
  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveId(null);
    }
  };

  return (
    <div className="um-expertise-master">
      <section className="um-expertise-section">
        
        {/* Header Title Area */}
        <div className="um-expertise-header">
          <h2 className="um-exp-title font-alice text-white">Our expertise</h2>
          <p className="um-exp-desc-top fmin font-geist">
            Architecture and interiors shaped around how you live, work, and experience a space. From initial concepts to refined details, we create environments with clarity, character, and purpose. 
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="um-accordion-list">
          {expertiseData.map((item) => {
            const isOpen = activeId === item.id;
            
            // Mobile-ல் எல்லாமே திறந்திருக்க வேண்டும், Desktop-ல் Hover செய்தவை மட்டும் திறக்க வேண்டும்
            const showDetails = isMobile || isOpen;

            return (
              <div
                key={item.id} 
                className={`um-accordion-row ${showDetails ? 'um-row-open' : ''}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                
                {/* Number column */}
                <div className="um-row-num">{item.num}</div>

                {/* Image Area */}
                <div className="um-row-img-container">
                  <img src={item.img} alt={item.title} className="um-row-img" />
                </div>

                {/* Text Context Area */}
                <div className="um-row-content">
                  <div className="um-content-main-info">
                    <h3 className='font-serief ftit'>{item.title}</h3>
                    <span className="um-content-subtitle font-geist fmin">{item.subtitle}</span>
                  </div>

                  {/* ஓப்பனாக இருக்கும்போது அல்லது மொபைலாக இருக்கும்போது வெளியே தெரியும் கூடுதல் தகவல்கள் */}
                  {showDetails && (
                    <div className="um-expanded-details">
                      <h4 className="um-exp-count font-geist ">{item.count}</h4>
                      <p className="um-exp-body-text font-geist fmin">{item.desc}</p>
                    </div>
                  )}
                </div>

                {/* Right Side Action (Icon & Button Area) - Desktop-ல் மட்டும் காட்ட வேண்டும் */}
                {!isMobile && (
                  <div className="um-row-action">
                    {isOpen ? (
                      <>
                        <div className="um-card-quote-btn">
                          <GetQuoteGooButton to="/projects"/>
                        </div> 
                        <div className="um-toggle-icon um-icon-close">✕</div>
                      </>
                    ) : (
                      <div className="um-toggle-icon um-icon-plus">＋</div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Mobile-க்கான Common Button - இது Mobile-ல் மட்டுமே Section-க்கு கீழே தெரியும் */}
        {isMobile && (
          <div className="um-mobile-common-btn" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '0px' }}>
            <GetQuoteGooButton to="/projects"/>
          </div>
        )}

      </section>
    </div>
  );
};

export default UnimaxxExpertise;