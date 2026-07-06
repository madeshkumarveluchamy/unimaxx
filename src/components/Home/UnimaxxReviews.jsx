import React, { useState, useRef, useEffect } from 'react';
import './css/UnimaxxReviews.css';

import reviewVideo1 from '../../assets/bg-videos.mp4'; 
import user1 from '../../assets/user1.webp';
import user2 from '../../assets/user2.webp';
import user3 from '../../assets/user3.webp';
import user4 from '../../assets/user4.webp';

const UnimaxxReviews = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const videoRefs = useRef({});

  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const isHovering = useRef(false); 
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragged = useRef(false);
  const animationRef = useRef(null); 

  const reviewsData = [
    {
      id: 1,
      stars: "★★★★★",
      text: "Their work brought our entire brand to life—subtle, thoughtful, and timeless. Every element felt carefully crafted, both visually and emotionally.",
      userImg: user1,
      userName: "Amelia Hart",
      company: "Vale Studio",
      videoUrl: reviewVideo1
    },
    {
      id: 2,
      stars: "★★★★★",
      text: "The team captured our vision better than we imagined. From mood boards to final space, everything felt clear, smooth, and perfectly on-brand.",
      userImg: user2,
      userName: "Daniel Rees",
      company: "Rees & Co",
      videoUrl: reviewVideo1
    },
    {
      id: 3,
      stars: "★★★★★",
      text: "We required a complete architectural vision, and this team delivered beyond our expectations. Every element feels cohesive and intentional.",
      userImg: user3,
      userName: "Julian Meyer",
      company: "Partner",
      videoUrl: reviewVideo1
    },
    {
      id: 4,
      stars: "★★★★★",
      text: "We felt heard and understood at every step. Their design choices not only impressed—but told our story in ways we never could with words.",
      userImg: user4,
      userName: "Sophie Lang",
      company: "Atelier Nine",
      videoUrl: reviewVideo1
    }
  ];

  // Auto-Scroll வேலை செய்ய 8 கார்டுகளாக மாற்றுகிறோம்
  const displayReviews = [
    ...reviewsData,
    ...reviewsData.map(review => ({ ...review, id: review.id + 4 })) 
  ];

  // Auto-Scroll Animation 
  useEffect(() => {
    const slider = sliderRef.current;
    
    const autoScroll = () => {
      if (!slider) return;

      if (isDown.current || isHovering.current || activeVideoId !== null) {
        animationRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      slider.scrollLeft += 1;

      if (Math.ceil(slider.scrollLeft) >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [activeVideoId]); 

  // ==========================================
  // Mouse Drag Events (Desktop Only)
  // மொபைலுக்கு Native Swipe வேலை செய்யும்
  // ==========================================
  const handleMouseDown = (e) => {
    isDown.current = true;
    dragged.current = false;
    if (sliderRef.current) {
      sliderRef.current.classList.add('dragging');
      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    isHovering.current = false; 
    if (sliderRef.current) sliderRef.current.classList.remove('dragging');
  };

  const handleMouseEnter = () => {
    isHovering.current = true; 
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (sliderRef.current) sliderRef.current.classList.remove('dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    // 1.5 என Speed-ஐ குறைத்துள்ளேன், Drag மிகவும் Smooth ஆக இருக்கும்
    const walk = (x - startX.current) * 1.5; 
    
    if (Math.abs(walk) > 5) {
      dragged.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Card Click (Video Player Logic)
  const handleCardClick = (id) => {
    if (dragged.current) return; 

    if (activeVideoId && activeVideoId !== id) {
      const currentPlayingVideo = videoRefs.current[activeVideoId];
      if (currentPlayingVideo) {
        currentPlayingVideo.pause();
        currentPlayingVideo.currentTime = 0;
      }
    }

    const targetVideo = videoRefs.current[id];
    if (activeVideoId === id) {
      if (targetVideo) targetVideo.pause();
      setActiveVideoId(null);
    } else {
      if (targetVideo) targetVideo.play();
      setActiveVideoId(id);
    }
  };

  return (
    <div className="um-reviews-master">
      <section className="um-reviews-section">
        
        <div className="um-reviews-header">
          <h2 className='font-serief'>Don't just listen to us—see what our partners have to say.</h2>
        </div>

        <div 
          className="um-reviews-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          // Touch Events நீக்கப்பட்டுவிட்டன! Mobile-ல் Browser-ன் இயல்பான Swipe வேலை செய்யும்.
        >
          {displayReviews.map((review) => {
            const isPlaying = activeVideoId === review.id;
            
            return (
              <div 
                key={review.id}
                className={`um-review-card ${isPlaying ? 'video-active' : ''}`}
                onClick={() => handleCardClick(review.id)}
              >
                <video 
                  ref={(el) => (videoRefs.current[review.id] = el)}
                  src={review.videoUrl}
                  className="um-card-video-bg"
                  loop
                  muted
                  playsInline
                  onEnded={() => setActiveVideoId(null)}
                />

                {!isPlaying ? (
                  <>
                    <div className="um-card-static-content">
                      <div className="um-rev-stars">{review.stars}</div>
                      <p className="um-rev-text font-geist fsub">{review.text}</p>
                    </div>

                    <div className="um-rev-user-info">
                      <img src={review.userImg} alt={review.userName} draggable="false" />
                      <div>
                        <h4 className='font-inter fsub'>{review.userName}</h4>
                        <span className='font-geist fmin'>{review.company}</span>
                      </div>
                    </div>
                    
                    <div className="um-hover-play-indicator">▶</div>
                  </>
                ) : (
                  <div className="um-rev-user-info um-video-user-overlay">
                    <img src={review.userImg} alt={review.userName} draggable="false" />
                    <div>
                      <h4 className="text-white font-inter fsub">{review.userName}</h4>
                      <span className="text-white-dim font-geist fmin">{review.company}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
};

export default UnimaxxReviews;