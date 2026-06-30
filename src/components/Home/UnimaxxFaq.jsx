import React, { useState } from 'react';
import './css/UnimaxxFaq.css';

import faqimage from '../../assets/faqimage.webp';
import FaqContactGooButton from './FaqContactGooButton';

const UnimaxxFaq = () => {
  const [openId, setOpenId] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "1.What is your design philosophy?",
      answer: "We believe in \"Architecting the Soul of Space.\" Our philosophy centers on the intersection of structural integrity and human experience, ensuring that every project is not just a building, but a functional, inspiring environment tailored to your unique narrative."
    },
    {
      id: 2,
      question: "2. Do you handle both residential and commercial projects?",
      answer: "Yes, we handle a wide spectrum of both residential and commercial interior architecture, customized completely to match the scale and brand expectations."
    },
    {
      id: 3,
      question: "3. How do you integrate sustainability into your designs?",
      answer: "We carefully source eco-conscious materials, use energy-efficient fixtures, and optimize spatial structures to encourage natural lighting and ventilation."
    },
    {
      id: 4,
      question: "4. What is your process from concept to completion?",
      answer: "Our seamless process involves initial spatial layout concept rendering, detailed structural drawings, material curation, and strict site supervision till execution."
    },
    {
      id: 5,
      question: "What are your pricing options?",
      answer: "Our pricing options are transparent and tailored based on the project scale, material selections, and specific customization requirements."
    },
    {
      id: 6,
      question: "5. Why should we choose your firm?",
      answer: "We focus on a perfect blend of timeless aesthetics, technical precision, and an uncompromised commitment to bringing your unique spatial vision to life."
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="um-faq-master">
      <section className="um-faq-section">
        
        {/* FAQ Header Content */}
        <div className="um-faq-header">
          <h2 className="um-faq-main-title font-serief ftit">Answers that bring clarity</h2>
          <p className="um-faq-subtitle-top font-geist fsub">
            We've answered the most common questions to help you move forward.
          </p>
        </div>

        {/* FAQ Main Content Split Grid */}
        <div className="um-faq-content-grid">
          
          {/* Left Column: Accordions */}
          <div className="um-faq-accordion-group">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`um-faq-box ${isOpen ? 'um-faq-open' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="um-faq-question-row">
                    <h3 className='font-geist fsub'>{faq.question}</h3>
                    <span className="um-faq-arrow-icon">{isOpen ? '▲' : '▼'}</span>
                  </div>
                  
                  {isOpen && (
                    <div className="um-faq-answer-row">
                      <p className='font-geist fmin'>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Image with Floating Bottom Bar */}
          <div className="um-faq-image-column">
            <div className="um-faq-img-wrapper">
              <img src={faqimage} alt="Our Team / FAQ illustration" />
              
              {/* Floating Dark Bottom Bar */}
              <div className="um-faq-image-overlay-bar">
                <div className="um-overlay-text-left">
                  <span className="um-overlay-star">✻</span>
                  <p className='font-geist fsub'>Still have a question in mind?</p>
                </div>
                <FaqContactGooButton text="Contact Us" />
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default UnimaxxFaq;