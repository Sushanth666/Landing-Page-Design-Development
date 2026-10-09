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
import { ArrowUp, Play, CheckCircle, Sparkles, Send } from 'lucide-react';

export default function App() {
  const [toasts, setToasts] = useState([]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalAction, setAuthModalAction] = useState('Get Started');
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

  const handleOpenAuthModal = (actionName = 'Get Started') => {
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
        'Workspace Created!',
        `Welcome aboard, ${formData.name || 'Engineer'}! We sent activation details to ${formData.email}.`,
        'success'
      );
      setFormData({ name: '', email: '', company: '' });
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white relative">
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

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-indigo-400" />
        </button>
      )}

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Interactive Auth / Signup Modal */}
      <Modal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        title={authModalAction}
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            Begin your 14-day free trial of AetherFlow with full access to our autonomous agent mesh and stack connectors.
          </p>

          <form onSubmit={handleAuthSubmit} className="space-y-3.5 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company / Team Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30"
              >
                {isSubmitting ? (
                  <span>Provisioning Workspace...</span>
                ) : (
                  <>
                    <span>Confirm & Launch Workspace</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-[11px] text-center text-slate-400 pt-2 border-t border-slate-800">
            🔒 By continuing, you agree to AetherFlow's Terms of Service and Privacy Policy. No credit card required.
          </p>
        </div>
      </Modal>

      {/* Interactive Demo Video Walkthrough Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="AetherFlow 2.5 Architecture Walkthrough"
      >
        <div className="space-y-4">
          <div className="relative aspect-video rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
            <div className="w-16 h-16 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-indigo-400 text-indigo-400 translate-x-0.5" />
            </div>
            <h4 className="text-base font-bold text-white">Interactive Video Walkthrough</h4>
            <p className="text-xs text-slate-400 max-w-sm mt-1">
              Explore how autonomous agent swarms review PRs, diagnose telemetry anomalies, and synchronize cross-functional teams in under 3 minutes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Key Highlights Covered in Demo:</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>1-click OAuth repository connection & zero-config indexing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>Live code review agent spotting AST memory leaks</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>Self-healing rollback triggered within 8 seconds of failure</span>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                setDemoModalOpen(false);
                handleOpenAuthModal('Get Started After Demo');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Start Free Trial Now
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
