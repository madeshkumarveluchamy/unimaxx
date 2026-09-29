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
            A Contemporary Home<br/> Designed with Purpose 
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
          A thoughtfully designed residence that brings together contemporary architectural character, practical planning, and comfortable living. The design makes efficient use of the available space while creating a home with a balanced and cohesive identity. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;