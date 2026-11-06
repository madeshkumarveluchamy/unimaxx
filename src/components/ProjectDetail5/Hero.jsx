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
            An Elegant Home with<br/>a Balanced Design Approach
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Mr. Balaji Residence reflects a balanced combination of architectural refinement and
functional planning. The design carefully considers spatial arrangements, visual proportions,
and everyday needs, resulting in a comfortable residential environment with a cohesive
appearance and lasting character.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;