import React from 'react';
import './css/ProjectBottomSection.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern4 from '../../assets/cafe (1).webp';
import modern5 from '../../assets/cafe (2).webp';
import modern6 from '../../assets/cafe (3).webp'; // இறுதிப் படம்

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
                  The project began with an understanding of the requirements, lifestyle, and possibilities of the site. The design direction was developed around a contemporary architectural language, with emphasis on creating a home that feels distinctive while remaining practical for everyday living. 
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>2. Spatial Planning</h4>
                <p className='fmin font-geist'>
                  The residence is carefully planned to establish functional zones, comfortable circulation, and a natural relationship between different areas. Each space is considered as part of the larger composition, creating a cohesive flow throughout the home.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>3. Final Details</h4>
                <p className='fmin font-geist'>
                  Architectural elements, materials, finishes, and interior details are brought together to establish a consistent visual identity. Every element is considered to support the overall character of the residence while maintaining comfort, functionality, and contemporary appeal.
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