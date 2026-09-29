import React, { useState } from 'react';
import '../Home/css/UnimaxxFaq.css';

import faqimage from '../../assets/faqimage.webp';
import FaqContactGooButton from '../Home/FaqContactGooButton';

const UnimaxxFaq = () => {
  const [openId, setOpenId] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "1. What information should I share before starting a project?",
      answer: "You can begin by sharing your project type, location, approximate requirements, and the kind of space you have in mind. This gives us a clear starting point for understanding your expectations and discussing the possibilities."
    },
    {
      id: 2,
      question: "2. Do you work on both residential and commercial projects?",
      answer: "Yes. We work across residential and commercial spaces, adapting our design approach to the purpose, scale, character, and specific requirements of each project."
    },
    {
      id: 3,
      question: "3.  Can the design be customised to my requirements?",
      answer: "Absolutely. Every project is developed around its individual requirements, preferences, spatial conditions, and functional needs. Our designs are tailored rather than based on a fixed template."
    },
    {
      id: 4,
      question: "4. What happens after I contact your team?",
      answer: "We begin with a conversation to understand your requirements, project scope, and expectations. From there, we discuss the appropriate design approach, project stages, timelines, and the next steps."
    },
    {
      id: 5,
      question: "5.How do you determine the project cost?",
      answer: "The overall cost depends on factors such as project scope, size, design requirements, materials, finishes, and level of customisation. We discuss these considerations with you before moving forward."
    },
    {
      id: 6,
      question: "6. How involved can I be during the design process?",
      answer: "Your input remains an important part of the process. We encourage collaboration throughout the project so that design decisions reflect your requirements while maintaining a clear and cohesive overall vision."
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
                  <p className='font-geist fsub'>Ready to discuss your project?</p>
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