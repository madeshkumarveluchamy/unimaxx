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
            A Well-Considered <br/> Approach to Residential Design

          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
           Mr. Subramani Residence is shaped by a design approach that values spatial efficiency and
architectural consistency. The planning creates purposeful living areas while maintaining a
balanced visual language, resulting in a home that responds to practical needs and
contemporary expectations.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;