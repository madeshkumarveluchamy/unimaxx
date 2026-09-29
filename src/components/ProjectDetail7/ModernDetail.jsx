import React from 'react';
import '../ProjectDetail1/css/ModernDetail.css';
import staricon from '../../assets/logo1.webp'; // உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும்
// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/Gowthami1.webp';
import modern2 from '../../assets/Gowthami11.webp';
import modern3 from '../../assets/Gowthami3.webp';

const ModernDetail = () => {
  return (
    <div className="nest-top-viewport">
      <div className="nest-top-container">
        

        <div className="nest-top-row">
          
          
          <div className="nest-top-text-panel">
            <h2 className="nest-top-heading font-serief"><img 
                                                                  src={staricon} /* உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும் */
                                                                  alt="Star Icon" 
                                                                  className="unimaxx-asterisk-icon" 
                                                                />GOWTHAMI RESIDENCE</h2>
            
            <div className="nest-top-specs-grid">
              <div className="nest-top-spec-box">
                <h4 className='font-geist fusb'>LOCATION</h4>
                <p className='font-geist fmin'>TIRUPPUR</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Sq.Ft</h4>
                <p className='font-geist fmin' >2387</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Facing</h4>
                <p className='font-geist fmin'>EAST</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Duration</h4>
                <p className='font-geist fmin'>UPCOMING PROJECT</p>
              </div>
            </div>

            <p className="nest-top-paragraph font-geist fmin">
              This 2,387 sq.ft. east-facing residence in Tiruppur is designed around the needs of modern family living. The planning focuses on making effective use of the available space while maintaining comfortable movement and clear relationships between different areas of the home. Contemporary architectural elements, balanced proportions, and carefully considered design details come together to create a residence that feels functional, refined, and welcoming.
            </p>
          </div>

          {/* வலதுபுறம்: சமையலறை இமேஜ் (modern1.webp) */}
          <div className="nest-top-image-panel">
            <img src={modern1} alt="Modern Nest Kitchen and Dining" />
          </div>

        </div>

        {/* இரண்டாவது வரிசை: பக்கவாட்டில் இருக்கும் இரண்டு படங்கள் (modern3.webp & modern2.webp) */}
        <div className="nest-bottom-images-row">
          <div className="nest-bottom-frame">
            <img src={modern3} alt="Lakeside Window View" />
          </div>
          <div className="nest-bottom-frame">
            <img src={modern2} alt="Living Room Sofa View" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModernDetail;