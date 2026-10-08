import React from 'react';
import './ProjectVideo.css';
import tharavideo from '../../assets/tharavideo.mp4';

const ProjectVideo = () => {
  return (
    <section className="project-video-section">
      <div className="project-video-wrapper">
        <h2 className="sync-portfolio-main-heading font-serief mainheading"><span>✻</span>Project Video</h2>
        <div className="project-video-container">
          <video 
            className="project-video-element" 
            src={tharavideo} 
            controls
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
