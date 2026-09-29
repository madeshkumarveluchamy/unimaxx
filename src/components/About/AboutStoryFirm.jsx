import React from 'react';
import './css/AboutStoryFirm.css';
import { Link } from 'react-router-dom';
import firmImg from '../../assets/aboutstory.webp';
import AboutGooButton from './AboutGooButton';
import staricon from '../../assets/logo1.webp';

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
              <h2 className="ux-firm-title font-alice">About <br /> Our Firm</h2>
            </div>
            
            <p className="ux-firm-description font-geist mainsub" >
              We believe great spaces begin with a clear understanding of the people, purpose, and possibilities behind them. At Unimaxx Architects & Interiors, we bring together architectural thinking, interior design, and craftsmanship to create spaces that are distinctive, functional, and made to last.
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