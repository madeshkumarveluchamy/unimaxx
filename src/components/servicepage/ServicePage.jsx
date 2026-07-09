import React, { useEffect, useRef, useState } from 'react';
import './css/ServicePage.css';
import staricon from '../../assets/logo1.png'; 
// Assets
import heroBgPng from '../../assets/hero-bg.webp';
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
    desc: "We develop innovative architectural concepts, ensuring each design is practical, aesthetically appealing, and built for longevity. From initial sketches to technical documentation, we create custom solutions tailored to your vision.",
    image: service1Png,
    points: [
      "Concept development & feasibility studies",
      "Schematic design & 3D visualization",
      "Detailed architectural planning & documentation",
      "Compliance with local regulations & building codes",
      "Coordination with engineers & contractors"
    ]
  },
  {
    id: "02",
    title: "Commercial & Workplace Design",
    desc: "We design offices, coworking spaces, and commercial hubs that prioritize functionality, aesthetics, and employee well-being. Our spaces foster creativity, efficiency, and a strong brand presence.",
    image: service2Png,
    points: [
      "Office layout & workflow optimization",
      "Branding & identity integration in design",
      "Sustainable & flexible workspaces",
      "Employee well-being & biophilic design",
      "Technology-driven smart office solutions"
    ]
  },
  {
    id: "03",
    title: "Interior Design & Space Planning",
    desc: "Our interior design services enhance the functionality and visual appeal of spaces through strategic layouts, custom finishes, and smart material choices. Whether residential, commercial, or hospitality-focused, we create spaces that inspire.",
    image: service3Png,
    points: [
      "Space planning & layout optimization",
      "Custom furniture & material selection",
      "Lighting, color, and texture harmonization",
      "Smart technology integration",
      "Workplace ergonomics & residential comfort solutions"
    ]
  },
  {
    id: "04",
    title: "Furniture & Styling Design",
    desc: "We curate interiors that transcend mere decor, transforming commercial hubs into high performance landscapes. By balancing ergonomic functionality with visual elegance, we design spaces that boost employee well-being. Every element is meticulously selected to serve a purpose while reinforcing your brand's unique identity.",
    image: service4Png,
    points: [
      "Curated Furniture & Spatial Flow",
      "Brand-Centric Design Integration",
      "Adaptive & Sustainable Furnishing",
      "Ergonomic Comfort & Biophilic Styling",
      "Integrated Tech-Smart Furnishings"
    ]
  },
  {
    id: "05",
    title: "Restoration & Adaptive Reuse",
    desc: "We specialize in restoring heritage buildings and repurposing outdated spaces into contemporary, efficient environments. Our adaptive reuse projects retain historical architectural charm while integrating modern innovations.",
    image: service5Png,
    points: [
      "Historic preservation & heritage conservation",
      "Structural assessment & rehabilitation",
      "Adaptive reuse & space repurposing",
      "Facade restoration & material matching",
      "Code compliance & safety upgrades"
    ]
  },
  {
    id: "06",
    title: "Project Management & Consulting",
    desc: "We oversee architectural projects at every stage, managing costs, timelines, and quality control to ensure flawless execution. Our consulting services provide expert insights to optimize planning, construction, and compliance.",
    image: service6Png,
    points: [
      "Budgeting & cost estimation",
      "Scheduling & timeline management",
      "Contractor selection & coordination",
      "Construction oversight & quality control",
      "Risk assessment & problem-solving strategies"
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
                  <span className="check-icon  ">✔</span>
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
          <span className="services-sub maindes font-geist mainsub">WHAT WE DO</span>
          <h2 className="services-title mainhead">
            <img 
                                                    src={staricon} /* உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும் */
                                                    alt="Star Icon" 
                                                    className="unimaxx-asterisk-icon" 
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