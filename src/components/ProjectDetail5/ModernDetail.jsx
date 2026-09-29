import React from 'react';
import '../ProjectDetail1/css/ModernDetail.css';
import staricon from '../../assets/logo1.webp'; // உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும்
// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/evvia villa 21.webp';
import modern2 from '../../assets/evvia villa 22.webp';
import modern3 from '../../assets/evvia villa 23.webp';

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
                                                                />Mr.Balaji</h2>
            
            <div className="nest-top-specs-grid">
              <div className="nest-top-spec-box">
                <h4 className='font-geist fusb'>LOCATION</h4>
                <p className='font-geist fmin'>COIMBATORE</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>SQ.FT</h4>
                <p className='font-geist fmin' >2733</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>FACING</h4>
                <p className='font-geist fmin'>EAST</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Duration</h4>
                <p className='font-geist fmin'>3 MONTHS</p>
              </div>
            </div>

            <p className="nest-top-paragraph font-geist fmin">
              This 2,733 sq.ft. east-facing residence in Coimbatore is designed around the requirements of modern family living. The planning focuses on creating well-connected spaces, comfortable circulation, and a balanced relationship between private and shared areas. Contemporary architectural elements are combined with carefully considered materials and finishes to create a home that feels welcoming, functional, and visually cohesive.
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