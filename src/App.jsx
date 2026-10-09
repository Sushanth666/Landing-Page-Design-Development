import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { Modal } from './components/Modal';
import { DemoVideoPlayer } from './components/DemoVideoPlayer';
import { Canvas3D } from './components/Canvas3D';
import { AnimatedFavicon } from './components/AnimatedFavicon';
import { ArrowUp, Play, CheckCircle, Sparkles, Send } from 'lucide-react';

export default function App() {
  const [toasts, setToasts] = useState([]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalAction, setAuthModalAction] = useState('Explore Platform');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Form states for modal
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (title, message, type = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenAuthModal = (actionName = 'Explore Platform') => {
    setAuthModalAction(actionName);
    setAuthModalOpen(true);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      showToast('Missing Field', 'Please enter your work email to continue.', 'warning');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthModalOpen(false);
      showToast(
        'Workspace Provisioned!',
        `Welcome to AetherFlow, ${formData.name || 'Engineer'}! Activation details dispatched to ${formData.email}.`,
        'success'
      );
      setFormData({ name: '', email: '', company: '' });
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05090f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 relative">
      {/* Live Animated Moving Favicon with official brand logo in browser tab */}
      <AnimatedFavicon />

      {/* Global 3D Neural Particle Lattice & Connecting Links across the entire project */}
      <Canvas3D isGlobal={true} />

      {/* 1. Navbar */}
      <Navbar
        onOpenAuthModal={handleOpenAuthModal}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenAuthModal={handleOpenAuthModal}
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onShowToast={showToast}
        />

        {/* 3. About / Introduction */}
        <About onShowToast={showToast} />

        {/* 4. Features Section */}
        <Features
          onShowToast={showToast}
          onOpenAuthModal={handleOpenAuthModal}
        />

        {/* 5. How It Works */}
        <HowItWorks
          onShowToast={showToast}
          onOpenAuthModal={handleOpenAuthModal}
        />

        {/* 6. Testimonials */}
        <Testimonials onShowToast={showToast} />

        {/* 7. Pricing Section */}
        <Pricing
          onOpenAuthModal={handleOpenAuthModal}
          onShowToast={showToast}
        />
      </main>

      {/* 8. Footer */}
      <Footer onShowToast={showToast} />

      {/* Back to Top Floating Button with Bouncing Pulse Glow */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-[#08111d]/90 border border-emerald-500/40 text-emerald-400 hover:text-slate-950 hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 animate-float cursor-pointer group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Interactive Auth / Signup Modal */}
      <Modal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        title={authModalAction}
        maxWidth="max-w-lg"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            Begin your 14-day free trial of AetherFlow with full access to our autonomous agent mesh and stack connectors.
          </p>

          <form onSubmit={handleAuthSubmit} className="space-y-3.5 pt-2">
            <div>
              <label className="block text-xs font-semibold text-emerald-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b13] border border-emerald-950 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-300 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b13] border border-emerald-950 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-300 mb-1">
                Company / Team Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b13] border border-emerald-950 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="shimmer-trigger btn-magnetic w-full py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/25"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Provisioning Workspace...</span>
                  </span>
                ) : (
                  <>
                    <span>Confirm & Launch Workspace</span>
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-[11px] text-center text-slate-400 pt-2 border-t border-emerald-950">
            🔒 By continuing, you agree to AetherFlow's Terms of Service and Privacy Policy. No credit card required.
          </p>
        </div>
      </Modal>

      {/* Interactive Demo Video Walkthrough Modal with Real Playable Video Player */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="AetherFlow 2.5 Architecture Walkthrough"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-4">
          {/* Playable Video Player */}
          <DemoVideoPlayer onOpenAuthModal={handleOpenAuthModal} />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-emerald-950">
            <span className="text-xs text-slate-400">
              Interactive 1080p preview • Continuous real-time pipeline recording
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDemoModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#0d1a29] hover:bg-[#122438] transition-colors cursor-pointer"
              >
                Close Player
              </button>
              <button
                onClick={() => {
                  setDemoModalOpen(false);
                  handleOpenAuthModal('Get Started After Demo');
                }}
                className="shimmer-trigger btn-magnetic px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-md"
              >
                Start Free Trial Now
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
