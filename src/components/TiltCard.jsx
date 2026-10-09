import React, { useState, useRef } from 'react';

export const TiltCard = ({ children, className = '', maxTilt = 12, scale = 1.03, ...props }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [boxShadow, setBoxShadow] = useState('');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const rotateX = (0.5 - yPercent) * maxTilt * 2;
    const rotateY = (xPercent - 0.5) * maxTilt * 2;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    // Dynamic directional 3D drop shadow opposite to light source
    const shadowX = -rotateY * 1.8;
    const shadowY = rotateX * 1.8;
    setBoxShadow(
      `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 35px -5px rgba(0, 0, 0, 0.65), 0 0 30px -5px rgba(16, 185, 129, 0.25)`
    );

    setGlarePosition({
      x: xPercent * 100,
      y: yPercent * 100,
      opacity: 0.24,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setBoxShadow('');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        boxShadow,
        transition: 'transform 0.16s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden will-change-transform ${className}`}
      {...props}
    >
      <div style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }} className="w-full h-full">
        {children}
      </div>

      {/* Dynamic specular glare light reflection following mouse in 3D */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(52, 211, 153, 0.45), transparent 70%)`,
        }}
      />
    </div>
  );
};
