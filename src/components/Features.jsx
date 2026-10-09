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
  ArrowRight,
  Database,
  Network,
  Cpu,
  Layers
} from 'lucide-react';

export const Features = ({ onShowToast, onOpenAuthModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'automation', label: 'Autonomous Agents' },
    { id: 'intelligence', label: 'Real-Time Insights' },
    { id: 'infrastructure', label: 'Architecture & Security' },
  ];

  const features = [
    {
      id: 1,
      category: 'automation',
      title: 'Autonomous AI Agents',
      description: 'Deploy self-learning agent meshes across your codebase to review PRs, synthesize unit tests, and execute multi-step engineering logic without manual oversight.',
      icon: Bot,
      badge: 'Agent Mesh',
      metrics: '98.2% Accuracy',
      highlight: true,
    },
    {
      id: 2,
      category: 'intelligence',
      title: 'Real-Time Data Streams',
      description: 'Visualize live telemetry streams, queue metrics, and throughput velocity with sub-millisecond precision. Get proactive alerts before bottlenecks form.',
      icon: BarChart,
      badge: 'Live Telemetry',
      metrics: '1.5ms Latency',
      highlight: false,
    },
    {
      id: 3,
      category: 'infrastructure',
      title: 'Secure Orchestration Enclave',
      description: 'Your codebase and internal conversations never train third-party models. SOC2 Type II, HIPAA, and GDPR certified with zero-retention encryption.',
      icon: Lock,
      badge: 'SOC2 Type II',
      metrics: 'Zero Data Retention',
      highlight: false,
    },
    {
      id: 4,
      category: 'automation',
      title: 'Cross-Platform Integrations',
      description: 'Connect GitHub, Linear, Jira, Slack, AWS, and Snowflake in under 60 seconds with 1-click bi-directional OAuth sync.',
      icon: GitMerge,
      badge: '200+ Connectors',
      metrics: 'Zero Config Setup',
      highlight: false,
    },
    {
      id: 5,
      category: 'intelligence',
      title: 'Dynamic Process Mapping',
      description: 'Design and compile visual DAG workflows directly in the browser. Interactive nodes coordinate tasks and dynamically self-heal failing branches.',
      icon: Network,
      badge: 'Visual DAG Builder',
      metrics: '450+ Concurrent DAGs',
      highlight: true,
    },
    {
      id: 6,
      category: 'infrastructure',
      title: 'Scalable Edge Infrastructure',
      description: 'Distributed edge cluster architecture automatically scales up to handle millions of simultaneous operations with zero performance degradation.',
      icon: Layers,
      badge: '32 Edge Regions',
      metrics: '99.98% Uptime SLA',
      highlight: false,
    },
  ];

  const filteredFeatures = activeCategory === 'all'
    ? features
    : features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#060b11]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-Performance Building Blocks for Autonomous Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A unified suite of autonomous multi-agent meshes, visual process mapping, and real-time telemetry engineered to supercharge your delivery pipeline.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25'
                    : 'bg-[#09121d] text-slate-400 hover:text-white hover:bg-[#0d1a29] border border-emerald-950'
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
                className="group relative rounded-2xl bg-[#080f1a]/90 border border-emerald-950 hover:border-emerald-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0d1a29] border border-emerald-900/60 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#0d1a29] text-emerald-300 border border-emerald-900/60">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-950 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {feature.metrics}
                  </span>

                  <button
                    onClick={() => {
                      onShowToast(feature.title, `Configuring interactive preview for ${feature.title}...`);
                      onOpenAuthModal(`Explore ${feature.title}`);
                    }}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Inspect</span>
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
