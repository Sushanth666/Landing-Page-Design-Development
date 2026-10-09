import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Network } from 'lucide-react';

export const Navbar = ({ onOpenAuthModal, onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Workflow Canvas', href: '#features' },
    { name: 'Platform', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#060b11]/90 backdrop-blur-xl border-b border-emerald-950/80 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with rotating ambient halo & glow */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative">
              {/* Spinning background glow halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-spin-slow" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-400 to-teal-300 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#080d14] rounded-[10px] flex items-center justify-center">
                  <Network className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Aether<span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">Flow</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 animate-pulse">
                  AI Matrix
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with animated hover pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#09121d]/80 p-1.5 rounded-full border border-emerald-950/80 backdrop-blur-md shadow-inner relative">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredNav(idx)}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-colors duration-200 group"
              >
                {hoveredNav === idx && (
                  <span className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full -z-10 animate-in fade-in zoom-in-95 duration-150" />
                )}
                <span className="group-hover:text-emerald-300 transition-colors">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons with Shimmer & Glow */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="text-sm font-medium text-slate-300 hover:text-emerald-300 px-3.5 py-2 rounded-xl hover:bg-emerald-950/40 border border-transparent hover:border-emerald-900/50 transition-all duration-200 cursor-pointer active:scale-95"
            >
              Watch Demo
            </button>
            <button
              onClick={() => onOpenAuthModal('Explore Platform')}
              className="shimmer-trigger relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-[#09121d] border border-emerald-950 hover:bg-emerald-950/40 active:scale-95 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with slide & staggered fade */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-[#08111d]/95 border border-emerald-950 rounded-2xl backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-300 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-emerald-950 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full py-2.5 text-sm font-semibold text-slate-300 hover:text-white bg-[#0d1a29] rounded-xl border border-emerald-950 transition-colors"
                >
                  Watch Demo
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuthModal('Explore Platform');
                  }}
                  className="shimmer-trigger w-full py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <span>Explore Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
