import React, { useRef, useEffect, useCallback } from "react";
import "./css/StoryHeroGooButton.css";
import { Link } from "react-router-dom";
let idCounter = 0;
function useStableIds() {
  const ref = useRef(null);
  if (ref.current === null) {
    idCounter += 1;
    ref.current = {
      filter: `storyherogoobtn-filter-${idCounter}`
    };
  }
  return ref.current;
}

export default function StoryHeroGooButton({ text = "Let's Build Your Legacy", onClick }) {
  const btnRef = useRef(null);
  
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);
  const rafRef = useRef(null);
  
  const targetRef = useRef({ x: 0, y: 0 });
  const posRef1 = useRef({ x: 0, y: 0 });
  const posRef2 = useRef({ x: 0, y: 0 });
  const posRef3 = useRef({ x: 0, y: 0 });

  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const targetRxRef = useRef(0);
  const targetRyRef = useRef(0);

  const ids = useStableIds();

  const clampToButton = useCallback((x, y) => {
    if (!btnRef.current) return { x, y: 0 };
    const r = btnRef.current.getBoundingClientRect();
    
    const marginX = 16; 
    const marginY = 10;
    
    return {
      x: Math.min(Math.max(x, marginX), r.width - marginX),
      y: Math.min(Math.max(y, marginY), r.height - marginY),
    };
  }, []);

  const targetRadii = useCallback(() => {
    if (!btnRef.current) return { rx: 15, ry: 15 };
    const r = btnRef.current.getBoundingClientRect();
    return { rx: r.height * 0.40, ry: r.height * 0.40 }; 
  }, []);

  const animate = useCallback(() => {
    const target = targetRef.current;
    const pos1 = posRef1.current;
    const pos2 = posRef2.current;
    const pos3 = posRef3.current;

    pos1.x += (target.x - pos1.x) * 0.20; 
    pos1.y += (target.y - pos1.y) * 0.20;
    pos2.x += (pos1.x - pos2.x) * 0.08; 
    pos2.y += (pos1.y - pos2.y) * 0.08;
    pos3.x += (pos2.x - pos3.x) * 0.03; 
    pos3.y += (pos2.y - pos3.y) * 0.03;

    rxRef.current += (targetRxRef.current - rxRef.current) * 0.22;
    ryRef.current += (targetRyRef.current - ryRef.current) * 0.22;

    const currentRx = Math.max(rxRef.current, 0);
    const currentRy = Math.max(ryRef.current, 0);

    if (blobRef1.current) {
      blobRef1.current.setAttribute("cx", pos1.x);
      blobRef1.current.setAttribute("cy", pos1.y);
      blobRef1.current.setAttribute("rx", currentRx);
      blobRef1.current.setAttribute("ry", currentRy);
    }
    if (blobRef2.current) {
      blobRef2.current.setAttribute("cx", pos2.x);
      blobRef2.current.setAttribute("cy", pos2.y);
      blobRef2.current.setAttribute("rx", currentRx * 0.85); 
      blobRef2.current.setAttribute("ry", currentRy * 0.85);
    }
    if (blobRef3.current) {
      blobRef3.current.setAttribute("cx", pos3.x);
      blobRef3.current.setAttribute("cy", pos3.y);
      blobRef3.current.setAttribute("rx", currentRx * 0.65); 
      blobRef3.current.setAttribute("ry", currentRy * 0.65);
    }

    if (rxRef.current > 0.5 || targetRxRef.current > 0) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      rafRef.current = null;
    }
  }, []);

  const startLoop = useCallback(() => {
    if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseEnter = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    posRef1.current = { x, y };
    posRef2.current = { x, y };
    posRef3.current = { x, y };
    targetRef.current = { x, y };
    
    const t = targetRadii();
    targetRxRef.current = t.rx;
    targetRyRef.current = t.ry;
    startLoop();
  };

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    targetRef.current = clampToButton(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    targetRxRef.current = 0;
    targetRyRef.current = 0;
    startLoop();
  };

  return (
    <Link to="start-a-project">
    <button 
      className="storyherogoobtn-btn" 
      ref={btnRef} 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG is now exclusively just the water flow blobs */}
      <svg className="storyherogoobtn-svg" aria-hidden="true">
        <defs>
          <filter id={ids.filter} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 25 -10"
            />
          </filter>
        </defs>

        <g filter={`url(#${ids.filter})`}>
          <ellipse ref={blobRef1} fill="#ffffff" cx="0" cy="0" rx="0" ry="0" />
          <ellipse ref={blobRef2} fill="#ffffff" cx="0" cy="0" rx="0" ry="0" />
          <ellipse ref={blobRef3} fill="#ffffff" cx="0" cy="0" rx="0" ry="0" />
        </g>
      </svg>
  <span class="storyherogoobtn-text">Let’s Build Your Legacy</span>
  <span class="storyherogoobtn-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>

    </button>
    </Link>
  );
}