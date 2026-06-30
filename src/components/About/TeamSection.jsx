import React, { useState } from 'react';
import './css/TeamSection.css';

// குறிப்பு: உங்கள் டீம் உறுப்பினர்களின் படங்களை இங்கே Import செய்துகொள்ளுங்கள்
import img1 from '../../assets/employee1.png';
import img2 from '../../assets/employee1.png';
import img3 from '../../assets/employee1.png';
import img4 from '../../assets/employee1.png';
import img5 from '../../assets/employee1.png';

const TeamSection = () => {
  // எந்த நபர் Hover செய்யப்படுகிறார் என்பதை டிராக் செய்ய
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    { id: '01', role: 'Lead Architect', name: 'Ananya Suresh', image: img1 },
    { id: '02', role: 'Interior Designer', name: 'Karthik Mehra', image: img2 },
    { id: '03', role: 'Landscape Architect', name: 'Priya Varman', image: img3 },
    { id: '04', role: 'Project Manager', name: 'Arjun Menon', image: img4 },
    { id: '05', role: 'Brand & Spatial Designer', name: 'Vikram Rajan', image: img5 }
  ];

  return (
    <section className="unq-team-container">
      <div className="unq-team-wrapper">
        
        {/* Header Section */}
        <div className="unq-team-header">
          <h2 className="unq-team-title">The team crafting <br /> inspired designs</h2>
        </div>

        {/* =========================================
            DESKTOP VIEW (Hover to change image)
        ========================================= */}
        <div className="unq-team-desktop-layout">
          
          {/* Left Side: List of Names */}
          <div className="unq-team-list">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`unq-team-list-item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Active ஆக இருக்கும் போது மட்டும் நம்பர் தெரியும் */}
                <div className="unq-team-num">
                  {activeIndex === index ? member.id : ''}
                </div>
                
                <div className="unq-team-info-row">
                  <span className="unq-team-role">{member.role}</span>
                  <h3 className="unq-team-name">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Dynamic Image Display */}
          <div className="unq-team-image-display">
            <div className="unq-team-image-wrapper">
              <img 
                src={teamMembers[activeIndex].image} 
                alt={teamMembers[activeIndex].name} 
                className="unq-team-img"
              />
            </div>
            <p className="unq-team-caption">
              {teamMembers[activeIndex].name}, {teamMembers[activeIndex].role}
            </p>
          </div>

        </div>

        {/* =========================================
            MOBILE VIEW (Static Cards)
        ========================================= */}
        <div className="unq-team-mobile-layout">
          {teamMembers.map((member) => (
            <div key={member.id} className="unq-team-mobile-card">
              <div className="unq-team-mobile-img-wrapper">
                <img src={member.image} alt={member.name} className="unq-team-img" />
              </div>
              <div className="unq-team-mobile-text">
                <h3 className="unq-team-mobile-name">{member.name}</h3>
                <p className="unq-team-mobile-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;