import React from 'react';
import '../ProjectDetail1/css/ProjectBottomSection.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern4 from '../../assets/EivvaVilla 32  (19).webp';
import modern5 from '../../assets/EivvaVilla 32  (10).webp';
import modern6 from '../../assets/EivvaVilla 32  (24).webp'; // இறுதிப் படம்

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
                  The design began with an understanding of the client's requirements, lifestyle, and the potential of the site. The concept focuses on creating a contemporary residence with a clear identity and a comfortable living experience. 
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>2. Spatial Planning</h4>
                <p className='fmin font-geist'>
                  The 2,693 sq.ft. residence is thoughtfully planned to establish functional spaces, comfortable circulation, and a natural connection between different areas. Each zone is designed to support everyday living.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>3. Final Details </h4>
                <p className='fmin font-geist'>
                  Architectural forms, materials, finishes, and interior elements are carefully brought together to create a cohesive visual language. The final design balances contemporary aesthetics with warmth, comfort, and functionality.
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