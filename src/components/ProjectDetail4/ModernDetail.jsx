import React from 'react';
import '../ProjectDetail1/css/ModernDetail.css';
import staricon from '../../assets/logo1.webp'; // உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும்
// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/EivvaVilla21 (33).webp';
import modern2 from '../../assets/EivvaVilla21 (36).webp';
import modern3 from '../../assets/EivvaVilla21 (109).webp';

const ModernDetail = () => {
  return (
    <div className="nest-top-viewport">
      <div className="nest-top-container">
        

        <div className="nest-top-row">
          
          
          <div className="nest-top-text-panel">
            <h2 className="nest-top-heading font-serief">
              <img 
                src={staricon}
                alt="Star Icon"
                className="unimaxx-asterisk-icon"
              />Mr.BALACHANDAR</h2>
            
            <div className="nest-top-specs-grid">
              <div className="nest-top-spec-box">
                <h4 className='font-geist fusb'>LOCATION</h4>
                <p className='font-geist fmin'>COIMBATORE</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Sq.Ft</h4>
                <p className='font-geist fmin' >2344</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>FACING</h4>
                <p className='font-geist fmin'>EAST</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>DURATION</h4>
                <p className='font-geist fmin'>UPCOMING PROJECT</p>
              </div>
            </div>

            <p className="nest-top-paragraph font-geist fmin">
              Designed for modern residential living, this 2,344 sq.ft. east-facing residence in Coimbatore focuses on creating a balanced relationship between space, functionality, and visual character. The layout is carefully considered to provide comfortable movement and well-defined living areas, while the architectural language brings a contemporary identity to the home. Thoughtful proportions, material choices, and interior detailing come together to create a residence that feels refined, practical, and welcoming.
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