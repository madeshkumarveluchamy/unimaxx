import React from 'react';
import './css/ModernDetail.css';

// தேவையான இமேஜ் ஃபைல்கள்
import modern1 from '../../assets/modern1.webp';
import modern2 from '../../assets/modern2.webp';
import modern3 from '../../assets/modern3.webp';

const ModernDetail = () => {
  return (
    <div className="nest-top-viewport">
      <div className="nest-top-container">
        

        <div className="nest-top-row">
          
          
          <div className="nest-top-text-panel">
            <h2 className="nest-top-heading font-serief ftit"><span>✻</span> Modern Nest</h2>
            
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
              Designed to exist in harmony with nature, The Glass Pavilion is defined by its 
              expansive floor to ceiling windows that dissolve the distinction between 
              architecture and environment. The structure is carefully positioned to follow the 
              contours of the land, maximizing natural light while offering uninterrupted views 
              of the surrounding vineyards and distant hills. A neutral material palette, including 
              polished concrete, raw limestone, and smoked oak, ensures the home feels both 
              modern and timeless, responding to the shifting light and changing seasons.
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