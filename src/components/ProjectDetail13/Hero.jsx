import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/trippur_residency (12).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            Contemporary Living with<br/>a Private Countryside Retreat
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Sandeep Residence in Tiruppur combines spacious residential planning with a contemporary
architectural approach. The project also incorporates a luxury guest house within the client's
farmland, offering a private retreat that complements the main residence and its
surroundings.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;