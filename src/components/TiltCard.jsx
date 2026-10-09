import React, { useState, useRef } from 'react';

export const TiltCard = ({ children, className = '', maxTilt = 10, scale = 1.03, ...props }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
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
    setGlarePosition({
      x: xPercent * 100,
      y: yPercent * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden will-change-transform ${className}`}
      {...props}
    >
      {children}

      {/* Dynamic specular glare light reflection following mouse */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(52, 211, 153, 0.45), transparent 70%)`,
        }}
      />
    </div>
  );
};
