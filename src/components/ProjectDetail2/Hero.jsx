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
            A Professional Space<br/> Built for Productivity
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Commercial</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Serenia is designed to create an engaging workplace through purposeful architecture and
contemporary interiors. Its carefully arranged spaces support productivity, encourage
interaction, and provide a comfortable professional environment with a seamless balance of
functionality and visual appeal.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;