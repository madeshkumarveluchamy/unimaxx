import React, { useRef } from 'react';
import './css/GoeeyButton.css'; // Mela irukka CSS file-ah import pandrom

const GooeButton = () => {
  // Button DOM element-ah reference panna
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    
    // Button oda coordinates-ah edukurom
    const rect = btnRef.current.getBoundingClientRect();
    
    // Cursor exact-a button kulla enga iruku nu calculate pandrom
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Inline-a CSS variables-ah update pandrom
    btnRef.current.style.setProperty('--mouseX', `${x}px`);
    btnRef.current.style.setProperty('--mouseY', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    
    // Mouse veliya pona mask-ah hide panna default values set pandrom
    btnRef.current.style.setProperty('--mouseX', '-100px');
    btnRef.current.style.setProperty('--mouseY', '-100px');
  };

  return (
    <div className="button-container">
      <button
        ref={btnRef}
        className="gooey-btn"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        HOVER ME
      </button>
    </div>
  );
};

export default GooeButton;