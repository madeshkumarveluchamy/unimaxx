import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logoImg from '../../../assets/unimaxxlogo.webp'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // 🎯 பக்கம் மாறும்போது ஃபிளாஷ் அனிமேஷனை ஆஃப் செய்ய

  // 🎯 ஸ்க்ரோல் செய்வதைக் கண்காணிக்கும் விண்டோ லிசனர் லாஜிக்
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // 🎯 ULTRA FIX: புதிய பக்கத்திற்குப் போகும்போது உடனடியாக அனிமேஷன் ட்ரான்சிஷனை ஆஃப் செய்கிறோம்
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsScrolled(false);
    setIsTransitioning(true); // 👈 1. லேக் தரும் சிஎஸ்எஸ் அனிமேஷனை தற்காலிகமாக முற்றிலும் நிறுத்து

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 2. உடனடியாக லேக் இல்லாமல் டாப் பொசிஷனுக்குப் போ
    });

    // 3. பிரவுசர் டாப் பொசிஷனுக்குச் சென்ற பிறகு, அனிமேஷனை மீண்டும் ஆன் செய்
    setTimeout(() => {
      setIsTransitioning(false);
    }, 50);
  };

  return (
    /* 🎯 0ms லேக் பிக்ஸ்: 'no-transition' கிளாஸ் இங்கு டைனமிக்காக இணைகிறது */
    <header className={`unimaxx-premium-nav-root ${isScrolled ? 'scrolled' : ''} ${isTransitioning ? 'no-transition' : ''}`}>
      <div className="unimaxx-nav-flex-core">
        
        {/* லோகோ பிளாக் */}
        <div className="unimaxx-logo-white-plate">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logoImg} alt="Unimaxx Logo" className="unimaxx-src-logo" />
          </Link>
        </div>

        {/* மொபைல் டோகிள் பார் */}
        <button 
          className={`unimaxx-hamburger-trigger ${isMenuOpen ? 'burger-active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        {/* கிளாஸ் மெனு */}
        <nav className={`unimaxx-exact-glass-pill ${isMenuOpen ? 'mobile-visible' : ''}`}>
          <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
          <Link to="/what-we-deliver" onClick={handleLinkClick}>What we Deliver</Link>
          <Link to="/our-story" onClick={handleLinkClick}>Our Story</Link>
          <Link to="/start-a-project" onClick={handleLinkClick}>Start a Project</Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;