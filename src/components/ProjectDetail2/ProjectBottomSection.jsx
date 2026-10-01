import React from 'react';
import '../ProjectDetail1/css/ProjectBottomSection.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern4 from '../../assets/Corporate_office (10).webp';
import modern5 from '../../assets/Corporate_office (4).webp';
import modern6 from '../../assets/Corporate_office (8).webp'; // இறுதிப் படம்

const ProjectBottomSection = () => {
  return (
    <div className="nest-bottom-viewport">
      <div className="nest-bottom-container">
        
        {/* மேலே இருக்கும் பெரிய முழு அகல இமேஜ் frame (modern4.webp) */}
        <div className="nest-full-banner-frame">
          <img src={modern4} alt="Minimal Living Interior Concept" />
        </div>

        {/* 2-Column Split: இடதுபுறம் இமேஜ், வலதுபுறம் டைம்லைன் உரை */}
        <div className="nest-timeline-split-grid">
          
          {/* இடதுபுறம்: டீடைல் காபி டேபிள் இமேஜ் (modern5.webp) */}
          <div className="nest-timeline-image-holder">
            <img src={modern5} alt="Wooden Coffee Table Detail" />
          </div>

          {/* வலதுபுறம்: Concept to Reality டைம்லைன் பலகை */}
          <div className="nest-timeline-text-holder">
            <h3 className="nest-timeline-main-title font-serief ftit">From Concept to Reality</h3>
            
            <div className="nest-timeline-steps-stack">
              
              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>1. Understanding the Workplace</h4>
                <p className='fmin font-geist'>
                  The design began with an understanding of the workplace requirements, spatial possibilities, and the experience expected from a contemporary professional environment. The focus was on creating a setting that feels organised, open, and purposeful.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>2. Planning the Space</h4>
                <p className='fmin font-geist'>
                  The interior was planned around efficient work areas, clear circulation, and a comfortable relationship between different zones. Furniture placement and spatial proportions were carefully considered to support the everyday functions of the workplace.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>3. Creating the Final Experience</h4>
                <p className='fmin font-geist'>
                  A restrained material palette, clean forms, and carefully selected furnishings bring consistency to the interior. Large openings introduce a strong connection with the surrounding environment, while the overall design maintains a professional and contemporary character.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 🎯 NEW ADDITION: `image_accc46.jpg` படத்தில் உள்ளவாறு கீழே வரும் இறுதி முழு அகலப் படம் */}
        <div className="nest-final-closet-frame">
          <img src={modern6} alt="Closet and Foyer Area with Round Mirror" />
        </div>

      </div>
    </div>
  );
};

export default ProjectBottomSection;