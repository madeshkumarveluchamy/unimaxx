import React, { useState } from 'react';
import './css/TeamSection.css';

import img1 from '../../assets/Mr.Dinesh.webp';
import img2 from '../../assets/Adhi Kesavan.webp';
import img3 from '../../assets/Raghul.webp';
import img4 from '../../assets/Vignesh.webp';

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    { id: '01', role: 'Founder', name: 'Mr.Dinesh', image: img1 },
    { id: '04', role: 'Lead Architect', name: 'Mr.Vignesh', image: img4 },    
    { id: '02', role: 'Interior Designer', name: 'Mr.Adhi Kesavan', image: img2 },
    { id: '03', role: 'Interior Designer', name: 'Mr.Raghul', image: img3 },
    
  ];

  return (
    <section className="unq-team-container">
      <div className="unq-team-wrapper">
        
        <div className="unq-team-header ">
          <h2 className="unq-team-title  font-alice">The team crafting <br/> inspired designs</h2>
        </div>

        <div className="unq-team-desktop-layout">
          
          <div className="unq-team-list">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`unq-team-list-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="unq-team-num">
                  {activeIndex === index ? member.id : ''}
                </div>
                
                {/* Role மற்றும் Name இரண்டையும் உள்ளடக்கிய Div-ல் onMouseEnter சேர்க்கப்பட்டுள்ளது */}
                <div 
                  className="unq-team-info-row"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="unq-team-role font-geist">{member.role}</span>
                  <h3 className="unq-team-name font-inter">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>

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