import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export const Testimonials = ({ onShowToast }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      roleCategory: 'engineering',
      name: 'Elena Rostova',
      role: 'VP of Engineering',
      company: 'Veloce Cloud',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      quote: 'AetherFlow shaved 18 hours off our weekly deployment cycles. The autonomous PR review agent catches nuanced edge-case memory leaks that even senior engineers missed.',
      rating: 5,
      impact: '74% reduction in PR review lag',
    },
    {
      id: 2,
      roleCategory: 'founder',
      name: 'Marcus Chen',
      role: 'Co-founder & CTO',
      company: 'Nexus FinTech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      quote: 'Our engineering team grew from 10 to 60 without having to hire dedicated release managers. AetherFlow handles coordination effortlessly across 4 timezones.',
      rating: 5,
      impact: 'Saved $180k/year in ops overhead',
    },
    {
      id: 3,
      roleCategory: 'product',
      name: 'Sarah Jenkins',
      role: 'Head of Product Delivery',
      company: 'Aura Health',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      quote: 'The natural language workflow canvas is pure magic. I can map out our customer validation logic in plain English and have it live in production within minutes.',
      rating: 5,
      impact: 'Shipped 3 major products ahead of schedule',
    },
    {
      id: 4,
      roleCategory: 'engineering',
      name: 'Devon Patel',
      role: 'Principal DevOps Architect',
      company: 'HyperScale AI',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      quote: 'The self-healing runbooks saved us during a Black Friday traffic surge. A database connection pool deadlock was diagnosed and cured in 11 seconds flat.',
      rating: 5,
      impact: 'Zero downtime during 10x traffic spike',
    },
    {
      id: 5,
      roleCategory: 'founder',
      name: 'Amara Okafor',
      role: 'CEO & Founder',
      company: 'StackMatrix',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      quote: 'AetherFlow is our secret weapon. As a lean startup competing with legacy enterprises, our shipping cadence feels superhuman.',
      rating: 5,
      impact: 'Raised Series A with 3x market speed',
    },
    {
      id: 6,
      roleCategory: 'product',
      name: 'Lucas Lindqvist',
      role: 'Staff Product Ops Lead',
      company: 'Nordic Wave',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      quote: 'No more stale Jira tickets or confusion over sprint priorities. AetherFlow continuously reconciles the truth between Git commits and roadmaps.',
      rating: 5,
      impact: '100% roadmap alignment across teams',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Stories' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'founder', label: 'Founders & CTOs' },
    { id: 'product', label: 'Product & Ops' },
  ];

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter((t) => t.roleCategory === activeFilter);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOMER STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Loved by Builders, Trusted by Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover how high-growth startups and established tech leaders utilize AetherFlow to accelerate delivery without burning out their teams.
          </p>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-sm"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-400/40 group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Quantifiable Impact Badge */}
                <div className="mb-5 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.impact}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} • <span className="text-slate-300 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-purple-950/40 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">Join 10,000+ happy engineers</h4>
            <p className="text-xs text-slate-400 mt-1">Read in-depth case studies with verified metrics.</p>
          </div>
          <button
            onClick={() => onShowToast('Case Studies', 'Opening verified enterprise customer case studies...')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white border border-slate-700 transition-colors cursor-pointer"
          >
            Explore Customer Case Studies →
          </button>
        </div>
      </div>
    </section>
  );
};
