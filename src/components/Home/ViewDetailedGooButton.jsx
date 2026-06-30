import React, { useRef, useEffect, useCallback } from "react";
// CSS கோப்பின் பெயரை இதற்கு ஏற்றாற்போல் கொடுத்துக்கொள்ளுங்கள்
import "./css/ViewDetailedGooButton.css";

let idCounter = 0;
function useStableIds() {
  const ref = useRef(null);
  if (ref.current === null) {
    idCounter += 1;
    ref.current = {
      filter: `um-vd-goo-filter-${idCounter}`,
      mask: `um-vd-goo-mask-${idCounter}`,
    };
  }
  return ref.current;
}

export default function ViewDetailedGooButton({ text = "View Detailed Project", onClick }) {
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const bgRef = useRef(null);
  const baseBgRef = useRef(null); 
  
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

  const sizeRect = useCallback(() => {
    if (!btnRef.current || !wrapRef.current || !bgRef.current || !baseBgRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const w = wrapRef.current.getBoundingClientRect();
    const x = r.left - w.left;
    const y = r.top - w.top;
    const radius = r.height / 2; 
    
    bgRef.current.setAttribute("x", x);
    bgRef.current.setAttribute("y", y);
    bgRef.current.setAttribute("width", r.width);
    bgRef.current.setAttribute("height", r.height);
    bgRef.current.setAttribute("rx", radius); 
    bgRef.current.setAttribute("ry", radius); 

    baseBgRef.current.setAttribute("x", x);
    baseBgRef.current.setAttribute("y", y);
    baseBgRef.current.setAttribute("width", r.width);
    baseBgRef.current.setAttribute("height", r.height);
    baseBgRef.current.setAttribute("rx", radius); 
    baseBgRef.current.setAttribute("ry", radius); 
  }, []);

  const clampToButton = useCallback((x, y) => {
    if (!btnRef.current || !wrapRef.current) return { x, y: 0 };
    const r = btnRef.current.getBoundingClientRect();
    const w = wrapRef.current.getBoundingClientRect();
    
    const left = r.left - w.left + 8;
    const right = r.left - w.left + r.width - 8;
    const top = r.top - w.top + 6;
    const bottom = r.top - w.top + r.height - 6;
    
    return {
      x: Math.min(Math.max(x, left), right),
      y: Math.min(Math.max(y, top), bottom),
    };
  }, []);

  const targetRadii = useCallback(() => {
    if (!btnRef.current) return { rx: 12, ry: 12 };
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
    sizeRect();
    window.addEventListener("resize", sizeRect);
    return () => {
      window.removeEventListener("resize", sizeRect);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sizeRect]);

  const handleMouseEnter = (e) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const clamped = clampToButton(e.clientX - rect.left, e.clientY - rect.top);
    
    posRef1.current = { ...clamped };
    posRef2.current = { ...clamped };
    posRef3.current = { ...clamped };
    targetRef.current = { ...clamped };
    
    const t = targetRadii();
    targetRxRef.current = t.rx;
    targetRyRef.current = t.ry;
    startLoop();
  };

  const handleMouseMove = (e) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    targetRef.current = clampToButton(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    targetRxRef.current = 0;
    targetRyRef.current = 0;
    startLoop();
  };

  return (
    <div 
      className="um-vd-goo-wrapper" 
      ref={wrapRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="um-vd-goo-svg" aria-hidden="true">
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
          <mask id={ids.mask}>
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <g filter={`url(#${ids.filter})`}>
              <ellipse ref={blobRef1} fill="black" />
              <ellipse ref={blobRef2} fill="black" />
              <ellipse ref={blobRef3} fill="black" />
            </g>
          </mask>
        </defs>
        <rect ref={baseBgRef} fill="#1a1a1a" />
        <rect ref={bgRef} fill="#ffffff" mask={`url(#${ids.mask})`} />
      </svg>

      <button className="um-vd-goo-btn" ref={btnRef} onClick={onClick}>
        <span className="um-vd-goo-text">{text}</span>
        
        <span className="um-vd-goo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
}