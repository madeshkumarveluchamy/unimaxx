import React from 'react';
import './css/AboutStoryFirm.css';
import { Link } from 'react-router-dom';
import firmImg from '../../assets/aboutstory.png';
import AboutGooButton from './AboutGooButton';
import staricon from '../../assets/logo1.png';

const AboutStoryFirm = () => {
  return (
    <section className="ux-firm-section">
      <div className="ux-firm-container">
        {/* Bootstrap கிரிட்டைப் பயன்படுத்தாமல் Custom Flexbox பயன்படுத்துகிறோம் */}
        <div className="ux-firm-flex-row">
          
          {/* இடது பக்கம்: டெக்ஸ்ட் (45% Width) */}
          <div className="ux-firm-left-col">
            <div className="ux-firm-title-wrapper">
              <span className="ux-firm-asterisk"><img 
                                                      src={staricon} /* உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும் */
                                                      alt="Star Icon" 
                                                      className="unimaxx-asterisk-icon" 
                                                    /> </span>
              <h2 className="ux-firm-title">About <br /> Our Firm</h2>
            </div>
            
            <p className="ux-firm-description font-geist mainsub" >
              We bridge the gap between imagination and reality, transforming complex concepts 
              into landmark structures that redefine the skyline. Guided by innovation and a 
              passion for excellence, we create spaces that stand as a testament to your legacy.
            </p>
            
            <AboutGooButton />
          </div>

          {/* வலது பக்கம்: இமேஜ் (50% Width) */}
          <div className="ux-firm-right-col">
            <img 
              src={firmImg} 
              alt="About Our Firm" 
              className="ux-firm-image" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStoryFirm;