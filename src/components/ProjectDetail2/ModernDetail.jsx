import React from 'react';
import '../ProjectDetail1/css/ModernDetail.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/Corporate_office (1).webp';
import modern2 from '../../assets/Corporate_office (2).webp';
import modern3 from '../../assets/Corporate_office (3).webp';
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
                                                                />SERENIA</h2>
            
            <div className="nest-top-specs-grid">
              <div className="nest-top-spec-box">
                <h4 className='font-geist fusb'>LOCATION</h4>
                <p className='font-geist fmin'>TIRUPPUR</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>Sq.Ft</h4>
                <p className='font-geist fmin' >959</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>FACING</h4>
                <p className='font-geist fmin'>EAST</p>
              </div>
              <div className="nest-top-spec-box">
                <h4 className='font-geist fsub'>DURATION</h4>
                <p className='font-geist fmin'>ONGOING</p>
              </div>
            </div>

            <p className="nest-top-paragraph font-geist fmin">
              Designed as a contemporary workspace in Tiruppur, Serenia combines clean architectural lines with a refined and functional interior environment. The 959 sq.ft. space is thoughtfully planned to accommodate focused work, collaboration, and everyday movement while maintaining a sense of openness. Glass partitions create visual connectivity between work areas, while a restrained palette of white surfaces, wood textures, and subtle marble detailing adds warmth and sophistication. Carefully considered furniture, lighting, and spatial proportions complete a professional workplace designed for comfort, efficiency, and a distinctive visual identity. 
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