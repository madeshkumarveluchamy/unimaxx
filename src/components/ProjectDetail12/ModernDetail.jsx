import React from 'react';
import '../ProjectDetail1/css/ModernDetail.css';
import staricon from '../../assets/logo1.webp'; // உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும்
// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/thara (1).webp';
import modern2 from '../../assets/thara (3).webp';
import modern3 from '../../assets/thara (16).webp';

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
                                                                />THARA RESIDENCE</h2>
            
            <div className="nest-top-specs-grid">
              <div className="nest-top-spec-box">
                <h4 className='font-geist fusb'>LOCATION</h4>
                <p className='font-geist fmin'>CHENNAI,TN</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Sq.Ft</h4>
                <p className='font-geist fmin' >1840.3</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Facing</h4>
                <p className='font-geist fmin'>SOUTH</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Duration</h4>
                <p className='font-geist fmin'>3 MONTHS</p>
              </div>
            </div>

            <p className="nest-top-paragraph font-geist fmin">
              This 1,840.3 sq.ft. south-facing residence in Chennai is designed to create a comfortable and well-organised environment for everyday living. The planning focuses on efficient use of space, clear circulation, and a balanced relationship between different areas of the home. Contemporary architectural elements, considered proportions, and refined design details come together to create a residence that is functional, welcoming, and visually cohesive.
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