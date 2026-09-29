import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/subramani (2).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Contemporary Residence <br/> Planned Around Everyday Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
           A thoughtfully planned residence that combines contemporary architectural expression with practical spatial planning. The design focuses on creating comfortable, functional spaces while giving the home a clear and cohesive visual character. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;