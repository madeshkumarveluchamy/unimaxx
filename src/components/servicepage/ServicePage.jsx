import React, { useEffect, useRef, useState } from 'react';
import './css/ServicePage.css';
import staricon from '../../assets/logo1.webp'; 
// Assets
import heroBgPng from '../../assets/Thara Residence (4).webp';
import service1Png from '../../assets/service1.webp';
import service2Png from '../../assets/service2.webp';
import service3Png from '../../assets/service3.webp';
import service4Png from '../../assets/service4.webp';
import service5Png from '../../assets/service5.webp';
import service6Png from '../../assets/service6.webp';
import StoryHeroGooButton from '../story/StoryHeroGooButton';
import PortfolioGooButton from './PortfolioGooButton';

const servicesData = [
  {
    id: "01",
    title: "Architectural Design",
    desc: "We shape architectural concepts around the purpose, context, and character of each project. Our approach combines creative thinking with practical planning to develop spaces that are distinctive, functional, and built to last. ",
    image: service1Png,
    points: [
      "Concept development & design planning",
      "Spatial studies & 3D visualisation",
      "Detailed drawings & documentation",
      "Site-responsive architectural solutions",
      "Coordination with technical consultants"
    ]
  },
  {
    id: "02",
    title: "Commercial & Workplace Design",
    desc: "We create commercial and workplace environments that support productivity, reflect brand identity, and provide a thoughtful experience for the people who use them. Every space is planned around its operational and aesthetic requirements.",
    image: service2Png,
    points: [
      " Workplace planning & space optimisation",
      "Functional zoning & circulation planning",
      "Brand identity through spatial design",
      "Flexible workplace environments",
      " Employee-focused design solutions"
    ]
  },
  {
    id: "03",
    title: "Interior Design & Space Planning",
    desc: "We transform interiors through purposeful layouts, carefully selected materials, and a considered approach to colour, light, and form. Each design is developed to balance visual character with everyday functionality.",
    image: service3Png,
    points: [
      "Space planning & functional layouts",
      "Material & finish selection",
      "Lighting & colour coordination",
      "Custom interior elements",
      " Residential & commercial interiors"
    ]
  },
  {
    id: "04",
    title: "Furniture & Styling Design",
    desc: "We complete interiors through carefully considered furniture, textures, accessories, and finishing elements. Each selection contributes to the overall character of the space while maintaining comfort, proportion, and visual balance.",
    image: service4Png,
    points: [
      "Furniture selection & placement",
      "Custom furniture solutions",
      "Material & fabric coordination",
      "Decorative styling & accessories",
      "Complete interior detailing"
    ]
  },
  {
    id: "05",
    title: "Restoration & Adaptive Reuse",
    desc: "We approach existing structures with an understanding of their character and potential. Through thoughtful restoration and redesign, we help transform older or underused spaces into environments that meet contemporary requirements while retaining their distinctive identity.",
    image: service5Png,
    points: [
      "Existing space assessment",
      "Restoration & renovation planning",
      "Adaptive space transformation",
      "Material & architectural detailing",
      "Modern functionality integration"
    ]
  },
  {
    id: "06",
    title: "Project Management & Consulting",
    desc: "We provide structured guidance throughout the project journey, helping coordinate design decisions, timelines, resources, and execution. Our focus is to keep the process organised while ensuring the design intent is carried through to completion.",
    image: service6Png,
    points: [
      "Project planning & coordination",
      "Cost planning & estimation ",
      "Timeline & execution monitoring",
      "Contractor & consultant coordination",
      "Quality review & project guidance"
    ]
  }
];

function ServiceRow({ service }) {
  const wrapperRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // ✅ Screen-ku enter aagura exact time-la animation start aagidum
      const startTrigger = windowHeight * 1.0; 
      
      // ✅ Screen-oda top 25% reach aagum pothu animation complete aagidum
      const endTrigger = windowHeight * 0.25; 
      
      let progress = 0;
      if (rect.top <= startTrigger) {
        const totalDistance = startTrigger - endTrigger;
        progress = (startTrigger - rect.top) / totalDistance;
      }
      
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    handleScroll();
    
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  // ✅ JS-Based Smooth Calculation Function
  const getStyles = (startThreshold, endThreshold) => {
    const maxOffset = 250; // Increased height travel
    let yOffset = maxOffset; 
    let opacity = 0;
    
    if (scrollProgress >= endThreshold) {
      yOffset = 0; 
      opacity = 1;
    } else if (scrollProgress > startThreshold) {
      let ratio = (scrollProgress - startThreshold) / (endThreshold - startThreshold);
      
      // Mathematical Easing (easeOutQuad) for buttery smooth feel
      const easedRatio = ratio * (2 - ratio); 
      
      yOffset = maxOffset - (maxOffset * easedRatio);
      opacity = easedRatio;
    }

    return {
      opacity: opacity,
      transform: `translateY(${yOffset}px)`
    };
  };

  // Staggered timings for the 3 columns
  const styleCol1 = getStyles(0.0, 0.25);
  const styleCol2 = getStyles(0.55, 0.75);
  const styleCol3 = getStyles(.75, 1.0);

  return (
    <div ref={wrapperRef} className="service-scroll-wrapper">
      <div className="service-sticky-container">
        <div className="service-item-grid">
          
          {/* Column 1: Info */}
          <div className="service-info-col col-animate" style={styleCol1}>
            <div>
              <span className="service-number mainsub font-plus">{service.id}</span>
              <h3 className="service-name maintit font-geist">{service.title}</h3>
              <p className="service-description maindes">{service.desc}</p>
            </div>
            <div className="portfolio-btn-wrapper">
              
              <PortfolioGooButton />
              
            </div>
          </div>

          {/* Column 2: Image Box */}
          <div className="service-image-col col-animate" style={styleCol2}>
            <img src={service.image} alt={service.title} className="main-service-img" />
          </div>

          {/* Column 3: Key Points */}
          <div className="service-points-col col-animate" style={styleCol3}>
            <h4 className="points-header mainsub">Key Point</h4>
            <ul className="points-list d-flex justify-content-center align-items-center">
              {service.points.map((point, index) => (
                <li key={index} className="point-item">
                  <span className="check-icon ">✔</span>
                  <span className="point-text maindes ">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="service-page-wrapper">
      
      {/* HERO BANNER SECTION */}
      <header className="hero-section">
        <img src={heroBgPng} alt="Architectural Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title font-geist">
            Specialized Architectural <br /> Design And Planning
          </h1>
          <StoryHeroGooButton />
        </div>
      </header>

      {/* SERVICES LIST SECTION */}
      <main className="services-container">
        <div className="services-header">
          <span className="services-sub  font-geist mainsub">WHAT WE DO</span>
          <h2 className="services-title mainhead">
            <img 
              src={staricon} /* உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும் */
              alt="Star Icon" 
              className="unimaxx-asterisk-icon font-alice" 
            />  Our Services
          </h2>
        </div>

        <div className="services-list">
          {servicesData.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </main>

    </div>
  );
}