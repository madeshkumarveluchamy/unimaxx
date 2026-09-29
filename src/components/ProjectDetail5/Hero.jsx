import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/evvia villa 3.webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Refined Home <br/>Designed for Everyday Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A thoughtfully designed residence that brings together contemporary architectural expression, practical planning, and comfortable living. The design makes effective use of the space while creating a home with a strong sense of character and visual balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;