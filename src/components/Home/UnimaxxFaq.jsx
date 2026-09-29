import React, { useState } from 'react';
import './css/UnimaxxFaq.css';

import faqimage from '../../assets/faqimage.webp';
import FaqContactGooButton from './FaqContactGooButton';

const UnimaxxFaq = () => {
  const [openId, setOpenId] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "1. How do you approach each design project?",
      answer: "We begin by understanding your requirements, lifestyle, preferences, and the character of the space. This allows us to develop designs that balance aesthetics, functionality, and the way the space will be experienced."
    },
    {
      id: 2,
      question: "2. What types of projects do you undertake?",
      answer: "We work across residential and commercial projects, developing design solutions that respond to the scale, purpose, character, and specific requirements of each space."
    },
    {
      id: 3,
      question: "3.  How do you incorporate sustainable design?",
      answer: "We consider sustainability throughout the design process through thoughtful material selection, efficient lighting, natural ventilation, and planning strategies that make better use of available resources."
    },
    {
      id: 4,
      question: "4. What does your design process involve?",
      answer: "Our process moves from understanding your requirements and developing the initial concept to detailed planning, material selection, design development, and coordination through the execution stage."
    },
    {
      id: 5,
      question: "5. How is the project cost determined?",
      answer: "Project costs are developed according to the scope of work, scale, material choices, design requirements, and level of customization. We discuss these factors clearly during the planning stage."
    },
    {
      id: 6,
      question: "6. What can we expect when working with your team?",
      answer: "You can expect a considered design approach, clear communication, attention to detail, and solutions developed around your specific requirements from the initial concept through execution."
    }
  ];

  // 🎯 எப்போதாவது ஒரு FAQ திறந்தபடியே இருக்க:
  const toggleFaq = (id) => {
    if (openId !== id) {
      setOpenId(id);
    }
  };

  return (
    <div className="um-faq-master">
      <section className="um-faq-section">
        
        {/* FAQ Header Content */}
        <div className="um-faq-header">
          <h2 className="um-faq-main-title font-alice">Answers that bring clarity</h2>
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
                    <span className="um-faq-arrow-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                  
                  {/* 🎯 Smooth Grid Transition Wrapper */}
                  <div className={`um-faq-answer-wrapper ${isOpen ? 'is-open' : ''}`}>
                    <div className="um-faq-answer-row">
                      <p className='font-geist fmin'>{faq.answer}</p>
                    </div>
                  </div>
                  
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
                  <p className='font-geist fsub'>Have a project in mind?</p>
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