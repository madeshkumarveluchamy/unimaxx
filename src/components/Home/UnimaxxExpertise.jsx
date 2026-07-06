import React, { useState, useEffect } from 'react';
import './css/UnimaxxExpertise.css';

import expertiseimg1 from '../../assets/expertiseimg1.webp';
import expertiseimg2 from '../../assets/expertiseimg2.webp';
import expertiseimg3 from '../../assets/expertiseimg3.webp';
import expertiseimg4 from '../../assets/expertiseimg4.webp';
import expertiseimg5 from '../../assets/expertiseimg5.webp';
import GetQuoteGooButton from './GetQuoteGooButton';
// import { Link } from 'react-router-dom'; // தேவைப்பட்டால் மட்டும் பயன்படுத்தவும்

const UnimaxxExpertise = () => {
  const [activeId, setActiveId] = useState(1);
  
  // Mobile-ஐ கண்டுபிடிக்க <= 968 பயன்படுத்துகிறோம்
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  const expertiseData = [
    {
      id: 1,
      num: "01",
      img: expertiseimg1,
      title: "Residential Interiors",
      subtitle: "Elegant, livable spaces",
      count: "50+",
      desc: "This process ensures that each home is customized, from the overall layout and flow of rooms to the choice of materials. Every business has distinct requirements based on its industry, target audience, and organisational culture"
    },
    {
      id: 2,
      num: "02",
      img: expertiseimg2,
      title: "Commercial Spaces",
      subtitle: "Branded environments that work",
      count: "30+",
      desc: "Creating functional, inspiring environments for corporate offices, retail stores, and commercial venues tailored to match your brand identity."
    },
    {
      id: 3,
      num: "03",
      img: expertiseimg3,
      title: "Interior Architecture",
      subtitle: "Structural design with depth",
      count: "25+",
      desc: "Merging structural engineering with interior aesthetics to reshape interior volumes, optimizing light, spatial flow, and structural integrity."
    },
    {
      id: 4,
      num: "04",
      img: expertiseimg4,
      title: "Furniture & Styling",
      subtitle: "Curated design layers",
      count: "100+",
      desc: "Handpicked furniture selections, custom upholstery, and bespoke styling layers that give your spaces a premium, complete, and personal touch."
    },
    {
      id: 5,
      num: "05",
      img: expertiseimg5,
      title: "Renovation Consulting",
      subtitle: "Guidance through change",
      count: "40+",
      desc: "Expert restoration and modern remodeling consultations to breathe new life into existing structures safely and efficiently."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      // மொபைலைக் கண்டுபிடிக்க <= பயன்படுத்துவதே சரி
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleAccordion = (id) => {
    // மொபைலில் click வேலை செய்ய வேண்டாம், Desktop-ல் மட்டும் வேலை செய்யட்டும்
    if (!isMobile) {
      setActiveId(activeId === id ? null : id); // ஒரே கார்டை மறுபடியும் கிளிக் செய்தால் மூடவும்
    }
  };

  return (
    <div className="um-expertise-master">
      <section className="um-expertise-section">
        
        {/* Header Title Area */}
        <div className="um-expertise-header">
          <h2 className="um-exp-title font-serief ftit">Our expertise</h2>
          <p className="um-exp-desc-top fmin font-geist">
            We offer a full spectrum of interior design — each tailored to elevate spaces with clarity and timeless aesthetic value.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="um-accordion-list">
          {expertiseData.map((item) => {
            // Desktop-ல் click செய்தால் மட்டுமே isOpen true ஆகும்.
            const isOpen = activeId === item.id;
            
            // Mobile-ல் எல்லாமே திறந்திருக்க வேண்டும், Desktop-ல் click செய்தவை மட்டும் திறக்க வேண்டும்
            const showDetails = isMobile || isOpen;

            return (
              <div
                key={item.id} 
                className={`um-accordion-row ${showDetails ? 'um-row-open' : ''}`}
                onClick={() => toggleAccordion(item.id)}
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
                      <h4 className="um-exp-count font-geist fsub">{item.count}</h4>
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
          <div className="um-mobile-common-btn" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '30px' }}>
            <GetQuoteGooButton to="/projects"/>
          </div>
        )}

      </section>
    </div>
  );
};

export default UnimaxxExpertise;