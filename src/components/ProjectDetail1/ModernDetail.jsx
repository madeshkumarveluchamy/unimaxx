import React from 'react';
import './css/ModernDetail.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/cafe (1).webp';
import modern2 from '../../assets/cafe (2).webp';
import modern3 from '../../assets/cafe (3).webp';
import staricon from '../../assets/logo1.webp'; // உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும்

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
                                                    />  Modern Nest</h2>
            
            <div className="nest-top-specs-grid">
              <div className="nest-top-spec-box">
                <h4 className='font-geist fusb'>LOCATION</h4>
                <p className='font-geist fmin'>Vadavalli, Coimbatore.</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>CATEGORY</h4>
                <p className='font-geist fmin' >Residential</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>YEAR</h4>
                <p className='font-geist fmin'>2026</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>TIMELINE</h4>
                <p className='font-geist fmin'>30 Weeks</p>
              </div>
            </div>

            <p className="nest-top-paragraph font-geist fmin">
              Modern Nest is a contemporary residential project in Vadavalli, Coimbatore, designed with a focus on comfortable living, efficient planning, and a strong architectural identity. The design approach considers the relationship between spaces, movement, functionality, and everyday use to create a well-balanced home. Contemporary forms and carefully considered details come together to create a residence that feels refined, practical, and connected to modern lifestyles.
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