import React from 'react';
import './css/UnimaxxTeam.css';
import peopleimg1 from '../../assets/peopleimg1.webp';
import peopleimg2 from '../../assets/peopleimg2.webp';
import peopleimg3 from '../../assets/peopleimg3.webp';
import peopleimg4 from '../../assets/peopleimg4.webp';
import peopleimg5 from '../../assets/peopleimg5.webp';

const UnimaxxTeam = () => {
  const teamMembers = [
    { id: 1, name: "Ananya", img: peopleimg1 },
    { id: 2, name: "Arjun Rohan", img: peopleimg2 },
    { id: 3, name: "Vikram Rao", img: peopleimg3 },
    { id: 4, name: "Siddharth Abhi", img: peopleimg4 },
    { id: 5, name: "Aditya Sharma", img: peopleimg5 }
  ];

  return (
    <div className="um-team-masters">
      <section className="um-team-section">
        
        {/* Header Area */}
        <div className="um-team-header">
          <h2 className="um-team-main-title font-serief">
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
          <button className="um-team-join-btn">Join us now</button>
        </div>

      </section>
    </div>
  );
};

export default UnimaxxTeam;