import React, { useState } from 'react';
import './css/UnimaxxExpertise.css';

import expertiseimg1 from '../../assets/expertiseimg1.webp';
import expertiseimg2 from '../../assets/expertiseimg2.webp';
import expertiseimg3 from '../../assets/expertiseimg3.webp';
import expertiseimg4 from '../../assets/expertiseimg4.webp';
import expertiseimg5 from '../../assets/expertiseimg5.webp';
import GetQuoteGooButton from './GetQuoteGooButton';
import { Link } from 'react-router-dom';

const UnimaxxExpertise = () => {
  const [activeId, setActiveId] = useState(1);

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

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? id : id);
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
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id} 
                className={`um-accordion-row ${isOpen ? 'um-row-open' : ''}`}
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

                  {/* ஓப்பனாக இருக்கும்போது மட்டும் வெளியே தெரியும் கூடுதல் தகவல்கள் */}
                  {isOpen && (
                    <div className="um-expanded-details">
                      <h4 className="um-exp-count font-geist fsub">{item.count}</h4>
                      <p className="um-exp-body-text font-geist fmin">{item.desc}</p>
                    </div>
                  )}
                </div>

                {/* Right Side Action (Icon & Button Area) */}
                <div className="um-row-action">
                  {isOpen ? (
                    <>
                      <div className="um-quote-btn-wrapper">
                        <Link  className='text-decoration-none' to="/projects">
                        <GetQuoteGooButton />
                        </Link>
                      </div>
                      <div className="um-toggle-icon um-icon-close">✕</div>
                    </>
                  ) : (
                    <div className="um-toggle-icon um-icon-plus">＋</div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
};

export default UnimaxxExpertise;