import React from 'react';
import './css/UnimaxxTeam.css';
import peopleimg1 from '../../assets/Adhi Kesavan.webp';
import peopleimg2 from '../../assets/Raghul.webp';
import peopleimg3 from '../../assets/Vignesh.webp';
import peopleimg4 from '../../assets/peopleimg4.webp';
import peopleimg5 from '../../assets/peopleimg5.webp';
import { Link } from 'react-router-dom';

const UnimaxxTeam = () => {
  const teamMembers = [
    { id: 1, name: "Adhi Kesavan - Interior Design", img: peopleimg1 },
    { id: 2, name: "Raghul - Interior Design", img: peopleimg2 },
    { id: 3, name: "Vignesh - Lead Architect", img: peopleimg3 },
    
  ];

  return (
    <div className="um-team-masters">
      <section className="um-team-section">
        
        {/* Header Area */}
        <div className="um-team-header">
          <h2 className="um-team-main-title font-alice">
            Meet the people behind<br />the process
          </h2>
          <p className="um-team-subtitle-top font-geist fsub">
            Exceptional design is a team effort. We collaborate closely to bring aligned, thoughtful results that not only meet but exceed your expectations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="um-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="um-team-card">
              <img src={member.img} alt={member.name} className="um-team-img" />
              <div className="um-team-card-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="2" r="1.8"/>
                  <circle cx="8" cy="14" r="1.8"/>
                  <circle cx="2" cy="8" r="1.8"/>
                  <circle cx="14" cy="8" r="1.8"/>
                </svg>
              </div>
              <div className="um-team-name-overlay font-geist">
                <span>{member.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA Area */}
        <div className="um-team-footer-cta">
          <div className="um-team-cta-text">
            <h3 className="font-inter fsub">Join us in shaping better spaces</h3>
            <p className="font-geist fdes">
              Ready to build something meaningful together? Let's connect <br/>and turn ideas into impactful design.
            </p>
          </div>
          <Link to="start-a-project">
          <button className="um-team-join-btn">Join us now</button>
          </Link>
        </div>

      </section>
    </div>
  );
};

export default UnimaxxTeam;