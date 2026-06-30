import React from 'react';
import './css/UnimaxxInsights.css';

// நீங்கள் குறிப்பிட்ட இமேஜ் ஃபைல்கள்
import innovationimg1 from '../../assets/innovationimg1.webp';
import innovationimg2 from '../../assets/innovationimg2.webp';
import ViewAllGooButtons from './ViewAllGooButtons';
import ReadMoreFluidLink from './ReadMoreFluidLink';

const UnimaxxInsights = () => {
  return (
    <div className="um-insights-master">
      <section className="um-insights-section">
        
        {/* Top Header Row */}
        <div className="um-insights-header">
          <h2 className="font-serif">
          Ideas, Interiors, Insight, <br />
          <span className="font-sand">&</span> Innovation.
          </h2>
          <div className="um-ins-desc-right ">
            <p className=' font-inter fsub'>A closer look into our design world featuring tips, trends, and transformations.</p>
            <ViewAllGooButtons text="View All Insights" />
          </div>
        </div>

        {/* 2-Column Insights Cards Grid */}
        <div className="um-insights-grid">
          
          {/* Card 1: Designing Calm Spaces */}
          <div className="um-insight-card">
            <div className="um-ins-card-content">
              <h3 className='font-inter fsub'>Designing Calm Spaces</h3>
              <ReadMoreFluidLink />
            </div>
            <div className="um-ins-card-image">
              <img src={innovationimg1} alt="Designing Calm Spaces" />
            </div>
          </div>

          {/* Card 2: The Minimalist Mindset */}
          <div className="um-insight-card">
            <div className="um-ins-card-content">
              <h3 className='font-inter fsub'>The Minimalist Mindset</h3>
              <ReadMoreFluidLink />
            </div>
            <div className="um-ins-card-image">
              <img src={innovationimg2} alt="The Minimalist Mindset" />
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default UnimaxxInsights;