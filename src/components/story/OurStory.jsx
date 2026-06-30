import React from 'react';
import { Link } from 'react-router-dom';
import './css/OurStory.css';

// அசெட்ஸ் இமேஜ் இம்போர்ட்ஸ்
import heroBg1Png from '../../assets/hero-bg1.webp';

// அசெட்ஸ் இமேஜ் வேரியபிள்கள்
import story1Png from '../../assets/story1.webp';
import story1_1Png from '../../assets/story1.1.webp'; 

import story2Png from '../../assets/story2.webp';
import story2_2Png from '../../assets/story2.2.webp'; 

import story3Png from '../../assets/story3.webp';
import story3_3Png from '../../assets/story3.3.webp'; 
import StoryHeroGooButton from './StoryHeroGooButton';
import ProjectGooButton from './ProjectGooButton';

const portfolioData = [
  {
    id: 1,
    mainImage: story1Png,
    thumbnailImage: story1_1Png,
    cardTitle : "Modern Residence",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: true,
    path: "/detail1" // 🎯 முதல் கார்டுக்கான பிரத்யேக லிங்க் பாத்
  },
  {
    id: 2,
    mainImage: story2Png,
    thumbnailImage: story2_2Png,
    cardTitle: "Modern & luxury Residence",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: false,
    path: "/detail2" // 🎯 இரண்டாம் கார்டுக்கான பிரத்யேக லிங்க் பாத்
  },
  {
    id: 3,
    mainImage: story3Png,
    thumbnailImage: story3_3Png,
    cardTitle: "Modern Architecture & Interior",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: true,
    path: "/detail3" // 🎯 மூன்றாம் கார்டுக்கான பிரத்யேக லிங்க் பாத்
  }
];

const OurStory = () => {
  return (
    <div className="story-page-wrapper">
      
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className="story-hero-section">
        <img src={heroBg1Png} alt="Hero Background" className="story-hero-bg-image" />
        <div className="story-hero-overlay"></div>

        <div className="story-hero-content">
          <h1 className="story-hero-title font-geist">
            Explore Our Architectural <br /> Planning Projects
          </h1>
          <StoryHeroGooButton />
        </div>
      </section>

      {/* ==========================================
          PORTFOLIO SECTION
          ========================================== */}
      <section className="portfolio-container">
        <div className="portfolio-header">
          <span className="portfolio-sub maindes font-geist">RECENT PROJECTS</span>
          <h2 className="portfolio-title">
            <span className="story-asterisk maintit font-serief">✳</span> Our Portfolio
          </h2>
        </div>

        <div className="portfolio-list">
          {portfolioData.map((project) => (
            <div key={project.id} className="portfolio-large-card">
              
              <img src={project.mainImage} alt={project.projectTitle || project.cardTitle} className="portfolio-main-img" />
              
              <div className={`portfolio-vertical-floating-card ${project.alignRight ? 'float-right' : 'float-left'}`}>
                
                <div className="vertical-card-img-box">
                  <img src={project.thumbnailImage} alt="Project Preview" />
                </div>
              
                <h3 className="vertical-card-title maintit font-geist">{project.cardTitle}</h3>
              
                <div className="vertical-card-bottom-row">
                  
                  {/* 🎯 FIX: இங்கிருந்த நிலையான "/detail" பாத் மாற்றப்பட்டு, இப்போது ஒவ்வொரு கார்டுக்குமான தனித்துவமான 'project.path' கொடுக்கப்பட்டுள்ளது */}
                 
                    <ProjectGooButton to={project.path}  />
                  
                  
                  <div className="vertical-card-tags" >
                    <span className="v-tag mainsdes">{project.category}</span>
                    <span className="v-tag mainsdes">{project.location}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OurStory;