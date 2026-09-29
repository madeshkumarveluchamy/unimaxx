import React from 'react';
import './css/Hero.css';
import backgroundimage from '../../assets/cafe (1).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Contemporary Home<br/> Shaped Around Modern Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Commercial</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
           A thoughtfully designed residence that brings together contemporary architecture, functional planning, and refined interiors. Modern Nest is developed around the way people live, creating a comfortable and cohesive home with a distinct sense of character. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;