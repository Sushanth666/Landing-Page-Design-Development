import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Network, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';

export const About = ({ onShowToast }) => {
  const [selectedStat, setSelectedStat] = useState(null);

  const stats = [
    {
      value: '98.2%',
      label: 'Model Precision Rate',
      detail: 'Continuous AST reasoning ensures 98.2% accuracy across automated pull request reviews and fixes.',
    },
    {
      value: '1.5ms',
      label: 'Deterministic Latency',
      detail: 'Engineered in lightweight edge rust nodes with sub-2ms deterministic pipeline execution.',
    },
    {
      value: '450+',
      label: 'Concurrent DAG Pipelines',
      detail: 'Supports over 450 simultaneous cross-stack autonomous workflows per single cluster node.',
    },
    {
      value: '2.1 TB',
      label: 'Secure Data Ingestion',
      detail: 'Zero data retention architecture ensures your intellectual property is never stored or trained on.',
    },
  ];

  const comparisons = [
    {
      feature: 'Workflow Orchestration',
      legacy: 'Manual status updates, disjointed tickets, and Slack chases',
      aether: 'Autonomous multi-agent DAG synthesis with instant cross-tool execution',
    },
    {
      feature: 'Code Reviews & CI/CD',
      legacy: 'Hours spent waiting on PR reviews and diagnosing test flake',
      aether: 'Instant AST analysis, automated regressions, and self-healing pipelines',
    },
    {
      feature: 'Incident Response',
      legacy: 'Alert fatigue, scrambling across logs, long MTTR',
      aether: 'Auto-triage in 8 seconds with root-cause summarization and runbooks',
    },
    {
      feature: 'Tool Integration',
      legacy: 'Brittle webhooks, unmaintained Zapier connectors, data silos',
      aether: '200+ native bidirectional connectors with zero-lag state synchronization',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#060b11] border-t border-emerald-950/60">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>THE AETHERFLOW MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed for Modern Teams That Refuse to Move Slowly
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every day, engineering and product teams waste up to 40% of their bandwidth wrangling disconnected tools, resolving sync conflicts, and handling repetitive operational tasks. AetherFlow gives you an intelligent autonomous layer that harmonizes your workflows and drives high-velocity execution.
          </p>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedStat(idx);
                onShowToast(stat.label, stat.detail);
              }}
              className="p-6 rounded-2xl bg-[#09121d] border border-emerald-950/80 hover:border-emerald-500/50 hover:bg-[#0c1827] transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400 font-mono">
                  {stat.value}
                </span>
                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{stat.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Table */}
        <div className="rounded-3xl border border-emerald-950/80 bg-[#080f1a]/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">The Paradigm Shift</h3>
            <p className="text-sm text-slate-400 mt-2">
              See how AetherFlow compares to traditional manual workflows and fragmented toolchains.
            </p>
          </div>

          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 sm:p-5 rounded-2xl bg-[#060b13] border border-emerald-950/60 hover:border-emerald-800 transition-colors items-center"
              >
                <div className="lg:col-span-3">
                  <span className="text-sm font-bold text-emerald-300">{item.feature}</span>
                </div>

                <div className="lg:col-span-4 p-3 rounded-xl bg-rose-950/20 border border-rose-900/30 flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-rose-300 block mb-0.5">Legacy Approach</span>
                    <span className="text-xs text-slate-300">{item.legacy}</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-300 block mb-0.5">With AetherFlow</span>
                    <span className="text-xs text-slate-200">{item.aether}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
