import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  MessageSquare 
} from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer = ({ onShowToast }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      onShowToast('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    onShowToast('Subscribed!', `Thank you for subscribing with ${emailInput}. You will receive our weekly release digest.`);
    setEmailInput('');
  };

  const footerLinks = {
    Product: [
      { name: 'Autonomous Agent Mesh', href: '#features' },
      { name: 'Visual DAG Workflow Canvas', href: '#features' },
      { name: 'Real-Time Data Streams', href: '#features' },
      { name: '200+ Stack Connectors', href: '#features' },
      { name: 'Zero-Trust Security', href: '#about' },
      { name: 'Release Changelog v2.5', href: '#' },
    ],
    Solutions: [
      { name: 'For Engineering Teams', href: '#' },
      { name: 'For High-Velocity Startups', href: '#' },
      { name: 'For Enterprise Operations', href: '#' },
      { name: 'For DevOps & SREs', href: '#' },
      { name: 'Customer Case Studies', href: '#testimonials' },
    ],
    Resources: [
      { name: 'API & Webhook Docs', href: '#' },
      { name: 'DAG Architecture Blueprints', href: '#' },
      { name: 'Developer Discord Community', href: '#' },
      { name: 'System Status (99.98%)', href: '#' },
      { name: 'Open Source SDKs', href: '#' },
    ],
    Company: [
      { name: 'About AetherFlow', href: '#about' },
      { name: 'Careers (We are hiring!)', href: '#' },
      { name: 'Security & Trust Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#04080e]/80 border-t border-emerald-950/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-emerald-950/80 items-center">
          <div className="lg:col-span-6 space-y-3">
            <BrandLogo size="lg" showBadge={false} />
            <p className="text-sm text-slate-300 max-w-md leading-relaxed pt-2">
              The intelligent workflow orchestration platform empowering high-performance teams to automate complex engineering operations and ship with fearless velocity.
            </p>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-6">
            <div className="p-5 rounded-2xl bg-[#09121d] border border-emerald-950 hover:border-emerald-800 transition-colors">
              <h4 className="text-sm font-bold text-white mb-1 font-shimmer font-hover-expand inline-block">
                Stay updated with autonomous workflow innovations
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Join 24,000+ tech leaders receiving our bi-weekly architecture insights. No spam, ever.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email address..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#060b13] border border-emerald-950 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
                <button
                  type="submit"
                  className="shimmer-trigger px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-sm font-bold text-slate-950 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {isSubscribed && (
                <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>You're subscribed! Check your inbox for confirmation.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Links & Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-14 border-b border-emerald-950/80">
          {/* 4 Category link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/90 mb-4 font-aurora">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-emerald-300 transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/90 mb-4 font-aurora">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href="mailto:support@aetherflow.dev" className="hover:text-emerald-300 transition-colors">
                  support@aetherflow.dev
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href="tel:+18884207857" className="hover:text-emerald-300 transition-colors">
                  +1 (888) 420-FLOW
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>548 Market St, Suite 392, San Francisco, CA</span>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#080f1a] border border-emerald-950 text-[11px] text-emerald-400 font-medium hover:border-emerald-700 transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-glow">All Systems Operational (99.98%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Icons and Legal Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} AetherFlow Technologies, Inc. All rights reserved.
          </p>

          {/* Social Media Links with SVG Icons with bouncy hover */}
          <div className="flex items-center gap-3 text-slate-400">
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#09121d] hover:text-emerald-300 hover:bg-[#0e1c2d] hover:-translate-y-1 hover:scale-110 transition-all duration-200"
              aria-label="Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#09121d] hover:text-emerald-300 hover:bg-[#0e1c2d] hover:-translate-y-1 hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#09121d] hover:text-emerald-300 hover:bg-[#0e1c2d] hover:-translate-y-1 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
            {/* Discord */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#09121d] hover:text-emerald-300 hover:bg-[#0e1c2d] hover:-translate-y-1 hover:scale-110 transition-all duration-200"
              aria-label="Discord"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
