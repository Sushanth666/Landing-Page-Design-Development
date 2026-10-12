import React from 'react';
import { Network } from 'lucide-react';

/**
 * BrandLogo
 * The official animated logo for AetherFlow featuring:
 * - Emerald gradient squircle
 * - Central connected node matrix (Network icon)
 * - Orbiting moving satellite electron beacon
 * - Rotating ambient aurora halo
 * - Kinetic hover and spring responsiveness
 */
export const BrandLogo = ({ size = 'md', showText = true, showBadge = false, className = '' }) => {
  const sizeClasses = {
    sm: { box: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-lg', orbit: 'w-11 h-11 -top-1.5 -left-1.5' },
    md: { box: 'w-10 h-10', icon: 'w-5 h-5', text: 'text-xl', orbit: 'w-14 h-14 -top-2 -left-2' },
    lg: { box: 'w-12 h-12', icon: 'w-6 h-6', text: 'text-2xl', orbit: 'w-16 h-16 -top-2 -left-2' },
  }[size] || { box: 'w-10 h-10', icon: 'w-5 h-5', text: 'text-xl', orbit: 'w-14 h-14 -top-2 -left-2' };

  return (
    <div className={`flex items-center gap-3 group focus:outline-none select-none ${className}`}>
      <div className="relative">
        {/* 1. Rotating ambient aura glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-2xl blur-md opacity-50 group-hover:opacity-90 transition-opacity duration-500 animate-spin-slow" />

        {/* 2. Orbiting satellite particle with moving tail */}
        <div className={`absolute ${sizeClasses.orbit} pointer-events-none animate-orbit z-20`}>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#34d399] absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white animate-ping" />
          </div>
        </div>

        {/* 3. Reverse secondary micro-orbit */}
        <div className={`absolute ${sizeClasses.orbit} pointer-events-none animate-orbit-reverse opacity-60 z-10`}>
          <div className="w-1.5 h-1.5 rounded-full bg-teal-200 shadow-[0_0_6px_#2dd4bf] absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>

        {/* 4. Squircle logo frame */}
        <div className={`relative ${sizeClasses.box} rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-400 to-teal-300 p-0.5 shadow-xl shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300 cursor-pointer`}>
          <div className="w-full h-full bg-[#070e17] rounded-[10px] flex items-center justify-center relative overflow-hidden">
            {/* Subtle internal sweep reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-400/10 to-transparent group-hover:via-emerald-400/25 transition-colors" />

            {/* Central Network Node Matrix */}
            <Network className={`${sizeClasses.icon} text-emerald-400 group-hover:text-emerald-300 group-hover:rotate-12 transition-all duration-300 relative z-10`} />
          </div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`${sizeClasses.text} font-extrabold tracking-tight text-white flex items-center gap-1.5`}>
            Aether<span className="font-aurora font-hover-expand">Flow</span>
          </span>
        </div>
      )}
    </div>
  );
};
