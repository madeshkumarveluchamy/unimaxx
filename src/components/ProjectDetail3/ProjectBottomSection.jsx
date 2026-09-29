import React from 'react';
import '../ProjectDetail1/css/ProjectBottomSection.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern4 from '../../assets/Dr.Vijayalakshmi (6).webp';
import modern5 from '../../assets/Dr.Vijayalakshmi (7).webp';
import modern6 from '../../assets/Dr.Vijayalakshmi (8).webp'; // இறுதிப் படம்

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
                  The project begins with an understanding of the client's requirements, the site's characteristics, and the way the home is intended to be experienced. These considerations form the foundation for a residential concept that is both practical and visually distinctive.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>2. Spatial Planning</h4>
                <p className='fmin font-geist'>
                  The available 1,166 sq.ft. area is carefully planned to establish functional spaces and comfortable circulation. Each area is considered in relation to the overall layout, creating a cohesive flow throughout the residence.
                </p>
              </div>

              <div className="nest-timeline-step-card">
                <h4 className='fsub font-geist'>3. Design Development</h4>
                <p className='fmin font-geist'>
                  Architectural elements, materials, finishes, and interior details are brought together to establish a consistent visual identity. The design balances contemporary expression with the comfort and functionality expected from a modern home. 
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