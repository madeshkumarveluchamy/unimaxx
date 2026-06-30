import React, { useState, useRef } from 'react';
import './css/UnimaxxReviews.css';

// உங்களுக்குத் தேவையான வீடியோ மற்றும் இமேஜ் ஃபைல்கள்
import reviewVideo1 from '../../assets/bg-videos.mp4'; // (உதாரணத்திற்கு ஒரே வீடியோவை பகிர்ந்துள்ளேன், நீங்கள் வெவ்வேறு வீடியோக்களை மாற்றிக்கொள்ளலாம்)
import user1 from '../../assets/user1.webp';
import user2 from '../../assets/user2.webp';
import user3 from '../../assets/user3.webp';
import user4 from '../../assets/user4.webp';

const UnimaxxReviews = () => {
  // எந்த கார்டில் வீடியோ ஓடிக்கொண்டிருக்கிறது என்பதை லாக் செய்ய State (null என்றால் எதுவும் ஓடவில்லை)
  const [activeVideoId, setActiveVideoId] = useState(null);
  
  // அனைத்து வீடியோக்களையும் தனித்தனியாகக் கட்டுப்படுத்த Array-of-Refs செட்டப்
  const videoRefs = useRef({});

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

  const handleCardClick = (id) => {
    // 1. ஏற்கனவே ஓடிக்கொண்டிருக்கும் வீடியோவை பாஸ் செய்து கார்டாக மாற்ற
    if (activeVideoId && activeVideoId !== id) {
      const currentPlayingVideo = videoRefs.current[activeVideoId];
      if (currentPlayingVideo) {
        currentPlayingVideo.pause();
        currentPlayingVideo.currentTime = 0; // வீடியோவை ஆரம்பத்திற்கு கொண்டு செல்ல
      }
    }

    // 2. கிளிக் செய்யப்பட்ட புதிய கார்டை வீடியோவாக மாற்றி பிளே செய்ய
    const targetVideo = videoRefs.current[id];
    if (activeVideoId === id) {
      // அதே கார்டை மீண்டும் கிளிக் செய்தால் வீடியோ பாஸ் ஆகி கார்டாக மாறும்
      if (targetVideo) targetVideo.pause();
      setActiveVideoId(null);
    } else {
      // புதிய கார்டில் வீடியோ பிளே ஆகும்
      if (targetVideo) targetVideo.play();
      setActiveVideoId(id);
    }
  };

  return (
    <div className="um-reviews-master">
      <section className="um-reviews-section">
        
        {/* Header Title */}
        <div className="um-reviews-header">
          <h2 className='font-serief'>Don't just listen to us—see what our partners have to say.</h2>
        </div>

        {/* 4 Column Grid */}
        <div className="um-reviews-grid">
          {reviewsData.map((review) => {
            const isPlaying = activeVideoId === review.id;
            
            return (
              <div 
                key={review.id}
                className={`um-review-card ${isPlaying ? 'video-active' : ''}`}
                onClick={() => handleCardClick(review.id)}
              >
                {/* பேக்ரவுண்ட் வீடியோ லேயர் - அனைத்து கார்டுகளுக்கும் பொதுவானது */}
                <video 
                  ref={(el) => (videoRefs.current[review.id] = el)}
                  src={review.videoUrl}
                  className="um-card-video-bg"
                  loop
                  muted
                  playsInline
                  onEnded={() => setActiveVideoId(null)}
                />

                {/* வீடியோ பிளே ஆகாத போது மட்டும் தெரிய வேண்டிய இயல்பான கார்டு விபரங்கள் */}
                {!isPlaying ? (
                  <>
                    <div className="um-card-static-content">
                      <div className="um-rev-stars">{review.stars}</div>
                      <p className="um-rev-text font-geist fsub">{review.text}</p>
                    </div>

                    <div className="um-rev-user-info">
                      <img src={review.userImg} alt={review.userName} />
                      <div>
                        <h4 className='font-inter fsub'>{review.userName}</h4>
                        <span className='font-geist fmin'>{review.company}</span>
                      </div>
                    </div>
                    
                    {/* ஹோவர் செய்யும்போது மட்டும் தெரியும் சிறிய பிளே ஐகான் ஓவர்லே */}
                    <div className="um-hover-play-indicator">▶</div>
                  </>
                ) : (
                  /* வீடியோ பிளே ஆகும்போது படத்தில் உள்ளது போல பெயர் மட்டும் கீழே மிதக்கும் */
                  <div className="um-rev-user-info um-video-user-overlay">
                    <img src={review.userImg} alt={review.userName} />
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