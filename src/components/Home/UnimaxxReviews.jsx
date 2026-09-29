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
      text: "The team understood our requirements from the beginning and translated our ideas into a space that feels both elegant and comfortable. Their attention to detail throughout the project was truly appreciated.",
      userImg: user1,
      userName: "Dr. Vijayalakshmi ",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 2,
      stars: "★★★★★",
      text: "Working with the team was a smooth and well-organized experience. They brought together thoughtful design, practical planning, and beautiful details to create a space that feels complete and refined.",
      userImg: user2,
      userName: "Serenia ",
      company: "Commercial",
      videoUrl: reviewVideo1
    },
    {
      id: 3,
      stars: "★★★★★",
      text: "We appreciated how carefully the team listened to our requirements and developed the design around them. The final result is functional, distinctive, and beautifully executed.",
      userImg: user3,
      userName: "Mr. Balachandar",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 4,
      stars: "★★★★★",
      text: "The entire design process was handled with clarity and attention to detail. The team understood our vision and created a space that feels practical, modern, and personal.",
      userImg: user4,
      userName: "Mr. Balaji",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 5,
      stars: "★★★★★",
      text: "From the initial discussions to the final execution, the team maintained a thoughtful approach throughout. The design reflects our needs while adding a strong sense of character to the space.",
      userImg: user4,
      userName: "Mr. Shanmugam",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 6,
      stars: "★★★★★",
      text: "Our home was designed with a wonderful balance of comfort, functionality, and aesthetics. The team paid attention to the smallest details and made the entire experience feel effortless.",
      userImg: user4,
      userName: "Gowthami Residence",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 7,
      stars: "★★★★★",
      text: "The team took the time to understand how we wanted our home to feel and brought that vision into the design beautifully. Every space feels considered, comfortable, and uniquely ours.",
      userImg: user4,
      userName: "Meena Residence",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 8,
      stars: "★★★★★",
      text: "We were impressed by the way the team transformed our ideas into a cohesive design. Their planning, creativity, and attention to detail made a real difference to the final outcome.",
      userImg: user4,
      userName: "Pritham Residence",
      company: "Residential",
      videoUrl: reviewVideo1
    },
      {
      id: 9,
      stars: "★★★★★",
      text: "The team approached the project with professionalism and genuine attention to our requirements. The finished space is well planned, functional, and reflects the vision we had from the beginning.",
      userImg: user4,
      userName: "Mr. Subramani",
      company: "Residential",
      videoUrl: reviewVideo1
    },
      {
      id: 10,
      stars: "★★★★★",
      text: "What stood out to us was the team's ability to combine creativity with practical design. Communication was clear throughout, and the final space exceeded what we had imagined.",
      userImg: user4,
      userName: "Mr. Vivek",
      company: "Residential",
      videoUrl: reviewVideo1
    },
      {
      id: 11,
      stars: "★★★★★",
      text: "Our home feels completely transformed. The design brings together beautiful details and everyday functionality in a way that feels natural, comfortable, and truly suited to our family.",
      userImg: user4,
      userName: "Thara Residence",
      company: "Residential",
      videoUrl: reviewVideo1
    },
    {
      id: 12,
      stars: "★★★★★",
      text: "The team understood the character we wanted for the café and translated it into a welcoming and distinctive environment. The attention to space, details, and overall experience made the design stand out.",
      userImg: user4,
      userName: "Cafe",
      company: "Commercial",
      videoUrl: reviewVideo1
    },
  ];

  // 🎯 மாற்றம் 1: Infinite Drag-க்காக 4 Sets (16 Cards) உருவாக்குகிறோம்
  const displayReviews = [
    ...reviewsData,
    ...reviewsData.map(review => ({ ...review, id: review.id + 4 })),
    ...reviewsData.map(review => ({ ...review, id: review.id + 8 })),
    ...reviewsData.map(review => ({ ...review, id: review.id + 12 }))
  ];

  // 🎯 Auto-Scroll & Infinite Seamless Loop Animation 
  useEffect(() => {
    const slider = sliderRef.current;
    
    const autoScroll = () => {
      if (!slider) return;

      // Responsive ஆக அகலத்தை (Width) கணக்கிடுதல் (Mobile & Desktop)
      const cardWidth = slider.children[0]?.offsetWidth || 350;
      const gap = 24; // CSS-ல் உள்ள gap அளவு
      const SET_WIDTH = (cardWidth + gap) * 4; // 1 Set-ன் மொத்த நீளம்

      // ==========================================
      // 🎯 மாற்றம் 2: PERFECT SEAMLESS LOOP (எப்போதும் இயங்கும்)
      // முடிவை எட்டும் முன் யாருக்கும் தெரியாமல் மையத்திற்குத் தாவிவிடும்
      // ==========================================
      if (slider.scrollLeft >= SET_WIDTH * 2) {
        slider.scrollLeft -= SET_WIDTH;
        if (isDown.current) scrollLeft.current -= SET_WIDTH; // Drag-ஐ டிஸ்டர்ப் செய்யாமல் இருக்க
      } else if (slider.scrollLeft < SET_WIDTH) {
        slider.scrollLeft += SET_WIDTH;
        if (isDown.current) scrollLeft.current += SET_WIDTH; // Drag-ஐ டிஸ்டர்ப் செய்யாமல் இருக்க
      }

      // 3. Auto Scroll (Mouse hover செய்யாதபோதும், Video play ஆகாதபோதும் மட்டும்)
      if (!isDown.current && !isHovering.current && activeVideoId === null) {
        slider.scrollLeft += 1; // Animation Speed
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [activeVideoId]); 

  // ==========================================
  // Mouse Drag Events (Desktop Only)
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
    const walk = (x - startX.current) * 1.5; // Drag Speed
    
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
          <h2 className='font-alice'>Don't just listen to us—see what our partners have to say.</h2>
        </div>

        <div 
          className="um-reviews-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
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