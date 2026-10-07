import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import './css/OurStory.css';
import staricon from '../../assets/logo1.webp';
import heroBg1Png from '../../assets/Thara Residence (12).webp';

// ==========================================
// 🎯 1. உங்க Project சம்பந்தமான Images-அ இங்க Import பண்ணுங்க
// ==========================================
import p1_main from '../../assets/cafe (1).webp';
import p1_img1 from '../../assets/aboutstory.webp';
import p1_img2 from '../../assets/aboutstory2.webp';
import p1_img3 from '../../assets/aboutstory3.webp';

import p2_main from '../../assets/Corporate_office (10).webp';
import p2_img1 from '../../assets/aboutstory.webp';
import p2_img2 from '../../assets/aboutstory2.webp';
import p2_img3 from '../../assets/aboutstory3.webp';

import p3_main from '../../assets/Dr.Vijayalakshmi (6).webp';
import p3_img1 from '../../assets/aboutstory.webp';
import p3_img2 from '../../assets/aboutstory2.webp';

import p4_main from '../../assets/EivvaVilla21 (33).webp';
import p5_main from '../../assets/EivvaVilla 28 (33).webp';
import p6_main from '../../assets/EivvaVilla 32  (33).webp';
import p7_main from '../../assets/Gowthami1.webp';
import p8_main from '../../assets/meenamadurai (85).webp';
import p9_main from '../../assets/Pritham (23).webp';
import p10_main from '../../assets/Pritham (5).webp';
import p11_main from '../../assets/vivke (5).webp';
import p12_main from '../../assets/Thara Residence (3).webp';

import StoryHeroGooButton from './StoryHeroGooButton';
import ProjectGooButton from './ProjectGooButton';

// ==========================================
// 🎯 2. இங்க தான் நீங்க Import பண்ண Images-அ கார்டுக்கு Assign பண்றீங்க
// ==========================================
const portfolioData = [

  {
    id: 12,
    mainImage: p12_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "THARA RESIDENCE",
    category: "RESIDENTIAL",
    location: "CHENNAI, TN",
    alignRight: false,
    path: "/projects/thara-residence"
  },

  {
    id: 2,
    mainImage: p2_main,
    popupImages: [p2_img1, p2_img2, p2_img3],
    cardTitle: "SERENIA",
    category: "COMMERCIAL",
    location: "TIRUPPUR, TN",
    alignRight: false,
    path: "/projects/serenia"
  },
  {
    id: 3,
    mainImage: p3_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "Dr.VIJAYALAKSHMI",
    category: "RESIDENTIAL",
    location: "CHENNAI, TN",
    alignRight: true,
    path: "/projects/dr-vijayalakshmi"
  },
  {
    id: 4,
    mainImage: p4_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "Mr.BALACHANDAR",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: false,
    path: "/projects/mr-balachandar"
  },
  {
    id: 5,
    mainImage: p5_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "Mr.BALAJI",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: true,
    path: "/projects/mr-balaji"
  },
  {
    id: 6,
    mainImage: p6_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "Mr.SHANMUGAM",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: false,
    path: "/projects/mr-shanmugam"
  },
  {
    id: 7,
    mainImage: p7_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "GOWTHAMI RESIDENCE",
    category: "RESIDENTIAL",
    location: "TIRUPPUR, TN",
    alignRight: true,
    path: "/projects/gowthami-residence"
  },
  {
    id: 8,
    mainImage: p8_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "MEENA RESIDENCE",
    category: "RESIDENTIAL",
    location: "MADURAI, TN",
    alignRight: false,
    path: "/projects/meena-residence"
  },
  {
    id: 9,
    mainImage: p9_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "PRITHAM RESIDENCE",
    category: "RESIDENTIAL",
    location: "COIMBATORE, TN",
    alignRight: true,
    path: "/projects/pritham-residence"
  },
  {
    id: 10,
    mainImage: p10_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "Mr.SUBRAMANI",
    category: "RESIDENTIAL",
    location: "ERODE, TN",
    alignRight: false,
    path: "/projects/mr-subramani"
  },
  {
    id: 11,
    mainImage: p11_main,
    popupImages: [p3_img1, p3_img2],
    cardTitle: "Mr.VIVEK",
    category: "RESIDENTIAL",
    location: "CHENNAI, TN",
    alignRight: true,
    path: "/projects/mr-vivek"
  },
  
  {
    id: 1,
    mainImage: p1_main,
    popupImages: [p1_img1, p1_img2, p1_img3],
    cardTitle: "CAFE",
    category: "COMMERCIAL",
    location: "COIMBATORE, TN",
    alignRight: true,
    path: "/projects/cafe"
  }
];

const AnimatedProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  
  // Scroll & Zoom Effect logic...
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["0 1", "1 1"] });
  const smoothScrollY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const mainImageScale = useTransform(smoothScrollY, [0, 1], [1.3, 1]);

  // Slideshow Logic
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.popupImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.popupImages.length]);

  return (
    <div ref={cardRef} className="portfolio-large-card" style={{ overflow: "hidden" }}>
      
      {/* Zoom out effect */}
      <motion.img 
        style={{ scale: mainImageScale }}
        src={project.mainImage} 
        alt={project.cardTitle} 
        className="portfolio-main-img" 
      />
      
      <div className={`portfolio-vertical-floating-card ${project.alignRight ? 'float-right' : 'float-left'}`}>
        <h3 className="vertical-card-title maintit font-geist">{project.cardTitle}</h3>
        
        <div className="vertical-card-bottom-row">
          <ProjectGooButton to={project.path} />
          <div className="vertical-card-tags" >
            <span className="v-tag ">{project.category}</span>
            <span className="v-tag ">{project.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurStory = () => {
  
  // ==========================================
  // 🎯 3. Scroll Position-ஐ Save மற்றும் Restore செய்யும் Logic
  // ==========================================
  useEffect(() => {
    // Page load ஆனதும், ஏற்கனவே save ஆன scroll position இருக்கிறதா என சரிபார்க்கவும்
    const savedPosition = sessionStorage.getItem('ourStoryScrollPos');
    
    if (savedPosition) {
      // setTimeout பயன்படுத்துவதன் மூலம் DOM render ஆனதும் lag இல்லாமல் exact இடத்திற்கு செல்லும்
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'instant' // 'instant' கொடுப்பதன் மூலம் screen jump/lag ஆகாமல் நேராக அந்த இடத்திற்கு போகும்
        });
      }, 0);
    }

    // பயனர் scroll செய்யும் போது, அந்த position-ஐ தொடர்ச்சியாக save செய்வது
    const handleScroll = () => {
      sessionStorage.setItem('ourStoryScrollPos', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Component-ஐ விட்டு வெளியேறும் போது event listener-ஐ remove செய்வது சிறந்த முறை
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="story-page-wrapper">
      {/* HERO SECTION */}
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

      {/* PORTFOLIO SECTION */}
      <section className="portfolio-container">
        <div className="portfolio-header">
          <span className="portfolio-sub maindes font-geist">RECENT PROJECTS</span>
          <h2 className="portfolio-title">
            <img 
                src={staricon} 
                alt="Star Icon" 
                className="unimaxx-asterisk-icon" 
            />  Our Portfolio
          </h2>
        </div>

        <div className="portfolio-list">
          {portfolioData.map((project) => (
            <AnimatedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurStory;