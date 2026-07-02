import React from 'react';
import '../ProjectDetail1/css/ProjectBottomSection.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern4 from '../../assets/modern4.webp';
import modern5 from '../../assets/modern5.webp';
import modern6 from '../../assets/modern6.webp'; // இறுதிப் படம்

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
                <h4 className='fsub font-geist'>1. Concept Development</h4>
                <p className='fmin font-geist'>
                  We started by capturing the essence of coastal life: 
                  light, air, and movement. The palette leaned into ocean 
                  blues, sandy neutrals, and breezy white finishes.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>2. Spatial Planning</h4>
                <p className='fmin font-geist'>
                  An open floor plan with visual flow from room to room 
                  allows natural light to fill the entire home. We 
                  emphasized seamless indoor-outdoor transitions.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>3. Final Touches</h4>
                <p className='fmin font-geist'>
                  Textural elements like linen, rattan, and aged wood 
                  brought a grounded elegance. Subtle brass accents 
                  added polish without overwhelming the calm aesthetic.
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