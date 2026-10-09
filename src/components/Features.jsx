import React, { useState } from 'react';
import { 
  Bot, 
  BarChart, 
  Lock, 
  GitMerge, 
  Wand2, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Features = ({ onShowToast, onOpenAuthModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'automation', label: 'Autonomous Agents' },
    { id: 'intelligence', label: 'Deep Intelligence' },
    { id: 'security', label: 'Enterprise Security' },
  ];

  const features = [
    {
      id: 1,
      category: 'automation',
      title: 'Autonomous Multi-Agent Swarm',
      description: 'Deploy specialized AI agents that collaborate across GitHub, Linear, and Slack to auto-triage PRs, write unit tests, and resolve issues.',
      icon: Bot,
      color: 'indigo',
      badge: 'Agent Mesh',
      metrics: '82% faster triage',
      highlight: true,
    },
    {
      id: 2,
      category: 'intelligence',
      title: 'Predictive Bottleneck Discovery',
      description: 'Continuous telemetry calculates cycle times, predicts project slippage up to 14 days in advance, and provides actionable remediation paths.',
      icon: BarChart,
      color: 'cyan',
      badge: 'Telemetry',
      metrics: '3.8x velocity jump',
      highlight: false,
    },
    {
      id: 3,
      category: 'security',
      title: 'Zero-Trust Data Isolation',
      description: 'Your codebase and internal conversations never train third-party models. End-to-end encrypted enclaves with granular RBAC permissions.',
      icon: Lock,
      color: 'purple',
      badge: 'SOC2 Type II',
      metrics: 'Zero data retention',
      highlight: false,
    },
    {
      id: 4,
      category: 'automation',
      title: 'Universal 200+ Stack Connectors',
      description: 'Native bi-directional integrations with GitHub, Jira, AWS, Slack, Linear, and Figma. Keep every team member aligned with zero manual sync.',
      icon: GitMerge,
      color: 'emerald',
      badge: 'Instant Setup',
      metrics: '200+ Connectors',
      highlight: false,
    },
    {
      id: 5,
      category: 'intelligence',
      title: 'Natural Language Workflow Canvas',
      description: 'Describe complex orchestration logic in plain English. AetherFlow instantly compiles it into executable DAG pipelines with human-in-the-loop review.',
      icon: Wand2,
      color: 'amber',
      badge: 'No-Code / Low-Code',
      metrics: 'Natural Language to DAG',
      highlight: true,
    },
    {
      id: 6,
      category: 'automation',
      title: 'Self-Healing Runbooks & Auto-Rollback',
      description: 'When production incidents or failing builds occur, AetherFlow tests automated remedies in sandbox environments and rolls back flawed releases safely.',
      icon: RefreshCw,
      color: 'rose',
      badge: 'Resilience',
      metrics: '< 8s MTTR response',
      highlight: false,
    },
  ];

  const filteredFeatures = activeCategory === 'all'
    ? features
    : features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need to Orchestrate High-Performance Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A cohesive suite of autonomous agents, predictive analytics, and enterprise controls built to streamline your development life cycle from idea to production.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {feature.metrics}
                  </span>

                  <button
                    onClick={() => {
                      onShowToast(feature.title, `Configuring interactive preview for ${feature.title}...`);
                      onOpenAuthModal(`Explore ${feature.title}`);
                    }}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Try it</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
