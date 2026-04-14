import React, { useState, useEffect } from "react";
import "./SpiderAnimation.css";

function SpiderAnimation() {
  const [showHanging, setShowHanging] = useState(true);
  const [showSwinging, setShowSwinging] = useState(false);
  const [webStrings, setWebStrings] = useState([]);
  const [tapBursts, setTapBursts] = useState([]);

  // Web burst on tap/click
  useEffect(() => {
    const handleTap = (e) => {
      const x = e.clientX || (e.touches && e.touches[0]?.clientX);
      const y = e.clientY || (e.touches && e.touches[0]?.clientY);
      if (x === undefined || y === undefined) return;

      const id = Date.now();
      setTapBursts((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setTapBursts((prev) => prev.filter((b) => b.id !== id));
      }, 800);
    };

    window.addEventListener("click", handleTap);
    window.addEventListener("touchstart", handleTap, { passive: true });

    return () => {
      window.removeEventListener("click", handleTap);
      window.removeEventListener("touchstart", handleTap);
    };
  }, []);
  useEffect(() => {
    const swingTimer = setTimeout(() => {
      setShowHanging(false);
    }, 5000);
    return () => clearTimeout(swingTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSwinging(true);
      setTimeout(() => setShowSwinging(false), 3000);
    }, 5000);

    const firstSwing = setTimeout(() => {
      setShowSwinging(true);
      setTimeout(() => setShowSwinging(false), 3000);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstSwing);
    };
  }, []);

  useEffect(() => {
    const createWebString = () => {
      const id = Date.now();
      const left = Math.random() * 100;
      const height = 80 + Math.random() * 200;
      const delay = Math.random() * 2;
      setWebStrings((prev) => [...prev, { id, left, height, delay }]);
      setTimeout(() => {
        setWebStrings((prev) => prev.filter((w) => w.id !== id));
      }, 8000);
    };

    const interval = setInterval(createWebString, 4000);
    setTimeout(createWebString, 2000);
    setTimeout(createWebString, 3500);

    return () => clearInterval(interval);
  }, []);

  // Clean silhouette hanging hero
  const HangingHero = () => (
    <svg viewBox="0 0 80 160" className="spidey-svg">
      <defs>
        <filter id="eyeGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="silhouetteGlow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood floodColor="#e23636" floodOpacity="0.3" result="color"/>
          <feComposite in="color" in2="blur" operator="in" result="shadow"/>
          <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      
      {/* Full body silhouette - single smooth path */}
      <path d="
        M40 5
        C52 5 60 14 60 28
        C60 36 56 42 50 46
        L53 48
        C58 50 64 56 64 68
        L64 85
        C64 90 62 94 58 96
        L62 98 L66 130
        C68 140 64 148 58 152
        L56 155
        L54 148 L50 155
        L40 158
        L30 155 L26 148
        L24 155
        L22 152
        C16 148 12 140 14 130
        L18 98 L16 96
        C12 94 10 90 10 85
        L10 68
        C10 56 16 50 22 48
        L27 46
        C24 42 20 36 20 28
        C20 14 28 5 40 5
        Z
      " fill="#0a0a0a" filter="url(#silhouetteGlow)"/>
      
      {/* Arms hanging down */}
      <path d="M16 60 C8 68 4 82 8 98 C10 104 14 108 16 110" 
        fill="none" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M64 60 C72 68 76 82 72 98 C70 104 66 108 64 110" 
        fill="none" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Legs */}
      <path d="M30 130 C28 138 24 146 22 155" 
        fill="none" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M50 130 C52 138 56 146 58 155" 
        fill="none" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round"/>
      
      {/* Glowing eyes - the iconic element */}
      <path d="M28 24 Q33 16 40 24 Q35 30 28 24" fill="#fff" filter="url(#eyeGlow)"/>
      <path d="M52 24 Q47 16 40 24 Q45 30 52 24" fill="#fff" filter="url(#eyeGlow)"/>
      
      {/* Subtle eye inner detail */}
      <path d="M30 24 Q34 19 39 24 Q35 28 30 24" fill="rgba(200,230,255,0.9)"/>
      <path d="M50 24 Q46 19 41 24 Q45 28 50 24" fill="rgba(200,230,255,0.9)"/>
    </svg>
  );

  // Clean silhouette swinging hero
  const SwingingHero = () => (
    <svg viewBox="0 0 140 140" className="spidey-swing-svg">
      <defs>
        <filter id="swingEyeGlow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="swingSilhouette">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feFlood floodColor="#e23636" floodOpacity="0.35" result="color"/>
          <feComposite in="color" in2="blur" operator="in" result="shadow"/>
          <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      
      {/* Web line from hand */}
      <line x1="105" y1="28" x2="140" y2="0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeDasharray="3,2"/>
      
      {/* Full body silhouette in action pose */}
      <g transform="rotate(-12 70 60)" filter="url(#swingSilhouette)">
        {/* Head */}
        <ellipse cx="65" cy="30" rx="14" ry="16" fill="#0a0a0a"/>
        {/* Torso */}
        <path d="M52 44 C50 55 50 68 54 78 Q65 84 76 78 C80 68 80 55 78 44 Z" fill="#0a0a0a"/>
        
        {/* Front arm reaching to shoot */}
        <path d="M78 50 C90 42 100 34 110 26" fill="none" stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round"/>
        {/* Fist */}
        <circle cx="112" cy="24" r="3.5" fill="#0a0a0a"/>
        
        {/* Back arm trailing */}
        <path d="M52 52 C40 60 30 72 22 85" fill="none" stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="20" cy="87" r="3" fill="#0a0a0a"/>
        
        {/* Front leg stretched */}
        <path d="M60 78 C52 92 42 106 32 118" fill="none" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round"/>
        <ellipse cx="30" cy="120" rx="5" ry="3" fill="#0a0a0a" transform="rotate(-25 30 120)"/>
        
        {/* Back leg */}
        <path d="M72 78 C82 92 92 104 102 114" fill="none" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round"/>
        <ellipse cx="104" cy="116" rx="5" ry="3" fill="#0a0a0a" transform="rotate(20 104 116)"/>
        
        {/* Glowing eyes */}
        <path d="M57 26 Q61 19 66 26 Q62 31 57 26" fill="#fff" filter="url(#swingEyeGlow)"/>
        <path d="M73 26 Q69 19 64 26 Q68 31 73 26" fill="#fff" filter="url(#swingEyeGlow)"/>
      </g>
    </svg>
  );

  return (
    <>
      {/* HUD Overlay */}
      <div className="spidey-hud">
        <div className="hud-corner hud-top-left">
          <svg viewBox="0 0 100 100" className="hud-bracket">
            <path d="M 0 30 L 0 0 L 30 0" fill="none" stroke="#e23636" strokeWidth="2" />
          </svg>
        </div>
        <div className="hud-corner hud-top-right">
          <svg viewBox="0 0 100 100" className="hud-bracket">
            <path d="M 70 0 L 100 0 L 100 30" fill="none" stroke="#e23636" strokeWidth="2" />
          </svg>
        </div>
        <div className="hud-corner hud-bottom-left">
          <svg viewBox="0 0 100 100" className="hud-bracket">
            <path d="M 0 70 L 0 100 L 30 100" fill="none" stroke="#1a4b91" strokeWidth="2" />
          </svg>
        </div>
        <div className="hud-corner hud-bottom-right">
          <svg viewBox="0 0 100 100" className="hud-bracket">
            <path d="M 70 100 L 100 100 L 100 70" fill="none" stroke="#1a4b91" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Hanging Hero */}
      {showHanging && (
        <div className="spidey-hanging">
          <div className="web-thread"></div>
          <div className="spidey-body hanging-anim">
            <HangingHero />
          </div>
        </div>
      )}

      {/* Swinging Hero */}
      {showSwinging && (
        <div className="spidey-swinging">
          <div className="swing-web"></div>
          <SwingingHero />
        </div>
      )}

      {/* Web Strings */}
      {webStrings.map((web) => (
        <div
          key={web.id}
          className="web-string-drop"
          style={{
            left: `${web.left}%`,
            animationDelay: `${web.delay}s`,
          }}
        >
          <div className="web-string-line" style={{ height: `${web.height}px` }}></div>
          <div className="web-droplet"></div>
        </div>
      ))}

      {/* Tap Web Bursts (mobile + desktop click) */}
      {tapBursts.map((burst) => (
        <div
          key={burst.id}
          className="web-tap-burst"
          style={{
            left: `${burst.x}px`,
            top: `${burst.y}px`,
          }}
        >
          <svg viewBox="0 0 80 80" className="web-burst-svg">
            {/* Center */}
            <circle cx="40" cy="40" r="3" fill="#e23636" opacity="0.9"/>
            {/* Inner ring */}
            <circle cx="40" cy="40" r="12" fill="none" stroke="#e23636" strokeWidth="1" opacity="0.7"/>
            {/* Outer ring */}
            <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            {/* Web lines */}
            <line x1="40" y1="5" x2="40" y2="75" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6"/>
            <line x1="5" y1="40" x2="75" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6"/>
            <line x1="12" y1="12" x2="68" y2="68" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            <line x1="68" y1="12" x2="12" y2="68" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            {/* Extra web arcs */}
            <line x1="40" y1="5" x2="68" y2="12" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
            <line x1="40" y1="5" x2="12" y2="12" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
            <line x1="40" y1="75" x2="68" y2="68" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
            <line x1="40" y1="75" x2="12" y2="68" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
          </svg>
        </div>
      ))}
    </>
  );
}

export default SpiderAnimation;
