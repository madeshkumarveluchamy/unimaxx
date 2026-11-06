import React from 'react';
import '../ProjectDetail1/css/ProjectBottomSection.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern4 from '../../assets/trippur_residency (7).webp';
import modern5 from '../../assets/trippur_residency (5).webp';
import modern6 from '../../assets/trippur_residency (6).webp'; // இறுதிப் படம்

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
                  The project began with an understanding of the client's requirements, site characteristics, and vision for the property. The design direction focused on creating a contemporary residence with a distinctive identity, complemented by a luxury guest house within the farmland.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>2. Spatial Planning</h4>
                <p className='fmin font-geist'>
                 The 10,000 sq.ft. residence is carefully planned to establish spacious living areas and comfortable circulation. The guest house is designed as a separate accommodation space, providing privacy and convenience while complementing the main residence.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>3. Final Details</h4>
                <p className='fmin font-geist'>
                  Architectural elements, material selections, and design details are brought together to establish a cohesive visual character. The overall design balances contemporary aesthetics with functionality, comfort, and the practical requirements of modern residential living.
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