import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/Corporate_office (11).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Workplace Designed<br/> for Modern Work. 
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Commercial</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Serenia brings together clean architectural language, functional planning, and contemporary interiors to create a professional workplace. Thoughtfully designed spaces encourage focus, collaboration, comfort, and seamless movement throughout.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;