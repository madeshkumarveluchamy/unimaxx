import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/vivke (23).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            Where Practical Planning<br/> Meets Modern Architecture
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
          Mr. Vivek Residence brings together thoughtful space utilisation and contemporary
architectural detailing. The design focuses on establishing functional living areas with a
natural sense of connection, creating a comfortable residential environment defined by
simplicity, proportion, and visual harmony.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;