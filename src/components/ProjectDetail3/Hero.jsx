import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/backgroundimage.webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url(${backgroundimage})` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            Modern Nest: Welcome <br /> Home to Modern Luxury.
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Experience a seamless blend of contemporary aesthetics and functional comfort. 
            Modern Nest is thoughtfully curated to provide a sanctuary that balances 
            cutting-edge design with the warmth of a true home.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;