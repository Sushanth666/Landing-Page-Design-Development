import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  MessageSquare,
  ExternalLink,
  Sparkles,
  Server,
  Zap
} from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { Modal } from '../ui/Modal';

export const Footer = ({ 
  onShowToast,
  onNavigateToFeature,
  onNavigateToArchitecture,
  onNavigateToPlayground,
  onNavigateToHome
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

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
      { name: 'Autonomous Agent Mesh', href: '#feature-1', type: 'feature', featureId: 1 },
      { name: 'Visual DAG Workflow Canvas', href: '#playground', type: 'playground' },
      { name: 'Real-Time Data Streams', href: '#feature-2', type: 'feature', featureId: 2 },
      { name: '200+ Stack Connectors', href: '#feature-4', type: 'feature', featureId: 4 },
      { name: 'Zero-Trust Security', href: '#feature-3', type: 'feature', featureId: 3 },
      { name: 'Release Changelog v2.5', href: '#changelog', type: 'modal', modalId: 'changelog' },
    ],
    Solutions: [
      { name: 'For Engineering Teams', href: '#about', type: 'anchor' },
      { name: 'For High-Velocity Startups', href: '#pricing', type: 'anchor' },
      { name: 'For Enterprise Operations', href: '#architecture', type: 'architecture' },
      { name: 'For DevOps & SREs', href: '#feature-7', type: 'feature', featureId: 7 },
      { name: 'Customer Case Studies', href: '#testimonials', type: 'anchor' },
    ],
    Resources: [
      { name: 'API & Webhook Docs', href: '#docs', type: 'modal', modalId: 'docs' },
      { name: 'DAG Architecture Blueprints', href: '#architecture', type: 'architecture' },
      { name: 'Developer Discord Community', href: 'https://discord.gg/aetherflow', type: 'external' },
      { name: 'System Status (99.98%)', href: '#status', type: 'modal', modalId: 'status' },
      { name: 'Open Source SDKs', href: 'https://github.com/aetherflow', type: 'external' },
    ],
    Company: [
      { name: 'About AetherFlow', href: '#about', type: 'anchor' },
      { name: 'Careers (We are hiring!)', href: '#careers', type: 'modal', modalId: 'careers' },
      { name: 'Security & Trust Center', href: '#feature-3', type: 'feature', featureId: 3 },
      { name: 'Privacy Policy', href: '#privacy', type: 'modal', modalId: 'privacy' },
      { name: 'Terms of Service', href: '#terms', type: 'modal', modalId: 'terms' },
    ],
  };

  const handleLinkClick = (e, link) => {
    if (link.type === 'modal') {
      e.preventDefault();
      setActiveModal(link.modalId);
      return;
    }

    if (link.type === 'external') {
      // Natural external link navigation with target="_blank"
      return;
    }

    if (link.type === 'feature') {
      e.preventDefault();
      if (onNavigateToFeature) {
        onNavigateToFeature(link.featureId);
      } else {
        window.location.hash = `#feature-${link.featureId}`;
      }
      return;
    }

    if (link.type === 'architecture') {
      e.preventDefault();
      if (onNavigateToArchitecture) {
        onNavigateToArchitecture();
      } else {
        window.location.hash = '#architecture';
      }
      return;
    }

    if (link.type === 'playground') {
      e.preventDefault();
      if (onNavigateToPlayground) {
        onNavigateToPlayground();
      } else {
        window.location.hash = '#playground';
      }
      return;
    }

    if (link.type === 'anchor') {
      if (onNavigateToHome) {
        onNavigateToHome();
      }
      const targetEl = document.querySelector(link.href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', link.href);
      }
      return;
    }
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
                      target={link.type === 'external' ? '_blank' : undefined}
                      rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-xs text-slate-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 duration-200 cursor-pointer group"
                    >
                      <span className="group-hover:text-emerald-300 transition-colors">{link.name}</span>
                      {link.type === 'external' && (
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                      )}
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
                <a 
                  href="mailto:support@aetherflow.dev" 
                  className="hover:text-emerald-300 transition-colors"
                >
                  support@aetherflow.dev
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a 
                  href="tel:+18884207857" 
                  className="hover:text-emerald-300 transition-colors"
                >
                  +1 (888) 420-FLOW
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=548+Market+St+Suite+392+San+Francisco+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>548 Market St, Suite 392, San Francisco, CA</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal('status')}
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#080f1a] border border-emerald-950 text-[11px] text-emerald-400 font-medium hover:border-emerald-700 hover:bg-emerald-950/30 transition-all cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-glow">All Systems Operational (99.98%)</span>
                </button>
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

      {/* Interactive Footer Informational Modals */}
      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={
          activeModal === 'changelog' ? 'Release Changelog v2.5' :
          activeModal === 'docs' ? 'Developer API & Webhook Docs' :
          activeModal === 'status' ? 'Global System Status (99.98% SLA)' :
          activeModal === 'careers' ? 'Careers at AetherFlow' :
          activeModal === 'privacy' ? 'Privacy & Data Protection' :
          activeModal === 'terms' ? 'Enterprise Terms of Service' :
          'Information'
        }
        maxWidth="max-w-2xl"
      >
        {activeModal === 'changelog' && (
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-2 pb-2 border-b border-emerald-950">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                v2.5.0 Current Release
              </span>
              <span className="text-xs text-slate-400">Deployed to 32 Global Regions</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#060b13] border border-emerald-950">
                <h5 className="font-semibold text-white flex items-center gap-2 text-xs">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  Self-Healing Canary Rollbacks (Feature 7)
                </h5>
                <p className="text-xs text-slate-400 mt-1">
                  Automated telemetry monitoring tracks latency drift and triggers zero-downtime rollbacks within 8 seconds of threshold breach.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#060b13] border border-emerald-950">
                <h5 className="font-semibold text-white flex items-center gap-2 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  Natural Language Workflow Synthesizer (Feature 8)
                </h5>
                <p className="text-xs text-slate-400 mt-1">
                  Compiles human intent into stateful, verified DAG topologies with syntax guardrails and AST verification.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#060b13] border border-emerald-950">
                <h5 className="font-semibold text-white flex items-center gap-2 text-xs">
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  32 Distributed Edge Clusters
                </h5>
                <p className="text-xs text-slate-400 mt-1">
                  Expanded global coverage with 1.5ms median execution latency across North America, Europe, and Asia-Pacific.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'docs' && (
          <div className="space-y-4 text-sm text-slate-300">
            <p className="text-xs text-slate-300">
              Integrate with AetherFlow programmatically via our high-performance REST, GraphQL, and Webhook APIs.
            </p>
            <div className="p-3 rounded-xl bg-[#040810] border border-emerald-950 font-mono text-xs text-emerald-300 overflow-x-auto">
              <code>curl -X POST https://api.aetherflow.dev/v2/workflows/dispatch \<br />
  &nbsp;&nbsp;-H "Authorization: Bearer af_live_secret_key" \<br />
  &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
  &nbsp;&nbsp;-d '&#123;"workflowId":"wf_canary_pipeline","trigger":"git_push"&#125;'</code>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href="#architecture"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal(null);
                  if (onNavigateToArchitecture) onNavigateToArchitecture();
                  else window.location.hash = '#architecture';
                }}
                className="p-3 rounded-xl bg-[#060b13] border border-emerald-950 hover:border-emerald-500/50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300">Architecture Specifications</div>
                  <div className="text-[11px] text-slate-400">Sub-ms pipelines & security matrix</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href="#playground"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal(null);
                  if (onNavigateToPlayground) onNavigateToPlayground();
                  else window.location.hash = '#playground';
                }}
                className="p-3 rounded-xl bg-[#060b13] border border-emerald-950 hover:border-emerald-500/50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300">Workflow Studio Sandbox</div>
                  <div className="text-[11px] text-slate-400">Interactive DAG compiler & simulation</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        )}

        {activeModal === 'status' && (
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-emerald-300 text-xs">All Systems 100% Operational</span>
              </div>
              <span className="text-xs font-mono text-emerald-400">99.998% Uptime</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Multi-Agent Mesh Core', status: 'Operational', latency: '1.2ms' },
                { name: 'Telemetry Streaming Gateway', status: 'Operational', latency: '0.8ms' },
                { name: 'US-East (N. Virginia)', status: 'Operational', latency: '1.1ms' },
                { name: 'EU-Central (Frankfurt)', status: 'Operational', latency: '1.6ms' },
                { name: 'AP-Southeast (Singapore)', status: 'Operational', latency: '1.9ms' },
                { name: 'Zero-Trust Enclave Vault', status: 'Operational', latency: '< 0.5ms' },
              ].map((svc) => (
                <div key={svc.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#060b13] border border-emerald-950 text-xs">
                  <span className="text-white font-medium">{svc.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-mono">{svc.latency}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {svc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeModal === 'careers' && (
          <div className="space-y-4 text-sm text-slate-300">
            <p className="text-xs text-slate-300 leading-relaxed">
              We are building the autonomous workflow intelligence substrate for the next generation of software engineering. Join our globally distributed engineering team.
            </p>
            <div className="space-y-2.5">
              {[
                { title: 'Staff Distributed Systems Engineer', location: 'San Francisco / Remote', comp: '$240k – $320k • 0.8%' },
                { title: 'AI Agent Mesh Compiler Engineer', location: 'New York / Remote', comp: '$220k – $300k • 0.6%' },
                { title: 'Senior Site Reliability & Chaos Lead', location: 'Remote (Global)', comp: '$200k – $280k • 0.5%' },
              ].map((job) => (
                <div key={job.title} className="p-3 rounded-xl bg-[#060b13] border border-emerald-950 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-xs">{job.title}</h5>
                    <p className="text-[11px] text-slate-400">{job.location} • {job.comp}</p>
                  </div>
                  <a
                    href={`mailto:careers@aetherflow.dev?subject=Application:%20${encodeURIComponent(job.title)}`}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                  >
                    Apply
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeModal === 'privacy' && (
          <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              <strong>Zero Data Retention Guarantee:</strong> AetherFlow executes customer automation in ephemeral, hardware-isolated memory enclaves. We never persist source code, environment secrets, or payload payloads.
            </div>
            <div>
              <h5 className="font-bold text-white mb-1">1. Cryptographic Isolation</h5>
              <p className="text-slate-400">All agent communications are encrypted in transit via mTLS 1.3 with AES-256-GCM and ephemeral session keys rotated every 15 minutes.</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-1">2. No AI Training on Customer Data</h5>
              <p className="text-slate-400">Your inputs, PR summaries, and AST metadata are never fed into foundation models for training or fine-tuning.</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-1">3. Enterprise Compliance</h5>
              <p className="text-slate-400">Independently certified under SOC2 Type II, ISO/IEC 27001:2022, HIPAA, and GDPR Article 28 data processing addendums.</p>
            </div>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
            <div className="p-3 rounded-xl bg-[#060b13] border border-emerald-950">
              <h5 className="font-bold text-white mb-1">99.98% Service Level Agreement (SLA)</h5>
              <p className="text-slate-400">AetherFlow guarantees 99.98% monthly uptime for workflow orchestration endpoints with automated billing credits if SLA thresholds are not met.</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-1">1. Customer Ownership</h5>
              <p className="text-slate-400">Customers retain 100% ownership, intellectual property rights, and title to all workflows, custom actions, and orchestration scripts built on the platform.</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-1">2. Acceptable Use</h5>
              <p className="text-slate-400">The platform may not be utilized to execute unauthorized denial-of-service tests or malicious vulnerability scanning against third-party targets.</p>
            </div>
          </div>
        )}
      </Modal>
    </footer>
  );
};
