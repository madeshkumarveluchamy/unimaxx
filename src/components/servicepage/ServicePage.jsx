import React from 'react';
import './css/ServicePage.css'; // அப்டேட் செய்யப்பட்ட பிரத்தியேக சிஎஸ்எஸ் இணைப்பு

// அஸெட்ஸ் ஃபோல்டரில் இருக்கும் படங்கள்
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

export default function ServicePage() {
  return (
    <div className="service-page-wrapper">
      
      {/* ==========================================
         HERO BANNER SECTION (முழு பின்னணி & பிரைட் இமேஜ் விசுவல்)
         ========================================== */}
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

      {/* ==========================================
         SERVICES LIST SECTION (6 சர்வீஸ்கள் கிரிட் பட்டியல்)
         ========================================== */}
      <main className="services-container">
        <div className="services-header">
          <span className="services-sub maindes font-geist">WHAT WE DO</span>
          <h2 className="services-title">
            <span className="asterisk  font-serief">✳</span> Our Services
          </h2>
        </div>

        <div className="services-list">
          {servicesData.map((service) => (
            <div key={service.id} className="service-item-grid">
              
              {/* இடது பகுதி: விபரங்கள் மற்றும் பிரீமியம் பட்டன் */}
              <div className="service-info-col">
                <div>
                  <span className="service-number mainsub font-plus">{service.id}</span>
                  <h3 className="service-name maintit font-geist font-geist">{service.title}</h3>
                  <p className="service-description maindes">{service.desc}</p>
                </div>
                <PortfolioGooButton />
              </div>

              {/* நடுப் பகுதி: துல்லியமான செவ்வக வடிவ இமேஜ் (Rectangle Box) */}
              <div className="service-image-col">
                <img src={service.image} alt={service.title} />
              </div>

              {/* வலது பகுதி: கீ பாயிண்ட்ஸ் கார்டு மற்றும் செக் மார்க்குகள் */}
              <div className="service-points-col">
                <h4 className="points-header mainsub">Key Point</h4>
                <ul className="points-list">
                  {service.points.map((point, index) => (
                    <li key={index} className="point-item">
                     <span className="check-icon maindes">✔</span>
                      <span className="point-text maindes">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </main>

    </div>
  );
}