import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Activity, 
  Cpu, 
  Zap, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Terminal,
  Bot
} from 'lucide-react';

export const Hero = ({ onOpenAuthModal, onOpenDemoModal, onShowToast }) => {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [throughputCount, setThroughputCount] = useState(148290);

  // Simulated live counter for realistic feeling
  useEffect(() => {
    const timer = setInterval(() => {
      setThroughputCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const partnerLogos = [
    { name: 'Linear', symbol: '▲' },
    { name: 'Stripe', symbol: 'S' },
    { name: 'Supabase', symbol: '⚡' },
    { name: 'Vercel', symbol: '▲' },
    { name: 'Figma', symbol: '❖' },
    { name: 'Datadog', symbol: '🐕' },
    { name: 'Notion', symbol: 'N' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & grid patterns */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => onShowToast('Feature Announcement', 'PulseAI 2.5 introduces Autonomous Multi-Agent Workflows & SOC2 Type II validation!')}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-indigo-400 hover:bg-slate-850 transition-all duration-300 shadow-lg shadow-indigo-500/10 group cursor-pointer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="font-semibold text-indigo-300">PulseAI 2.5 Live:</span>
            <span>Autonomous Multi-Agent Workflow Engine</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hero Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Turn Complex Operations Into{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Autonomous Execution
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            PulseAI continuously orchestrates your team’s cross-platform workflows, analyzes operational bottlenecks, and executes multi-step automations with enterprise-grade precision.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAuthModal('Start Free Trial')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/30" />
              <span>Watch Interactive Demo</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant 2-minute setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 & GDPR compliant</span>
            </div>
          </div>
        </div>

        {/* Interactive Visual Dashboard Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  pulseai.cloud/live-workspace
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'pipeline'
                      ? 'bg-indigo-600 text-white font-medium shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Active Pipeline
                </button>
                <button
                  onClick={() => setActiveTab('agents')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'agents'
                      ? 'bg-indigo-600 text-white font-medium shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Agents (4 Online)
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'metrics'
                      ? 'bg-indigo-600 text-white font-medium shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Throughput
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8">
              {/* Header metrics bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real-time Velocity</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">4.8x Faster</div>
                  <div className="text-[11px] text-emerald-400 mt-1">↑ +38% this cycle</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Total Tasks Executed</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {throughputCount.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-indigo-400 mt-1">Live autonomous sync</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <Bot className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Active Agent Nodes</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">24 / 24</div>
                  <div className="text-[11px] text-cyan-400 mt-1">Zero idle latency</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Security Enclave</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400 flex items-center gap-1">
                    Verified
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Zero data leaks</div>
                </div>
              </div>

              {/* Dynamic View based on Active Tab */}
              {activeTab === 'pipeline' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-3 pb-1 border-b border-slate-800/60">
                    <span>TASK WORKFLOW</span>
                    <span>AGENT STATUS</span>
                    <span>CYCLE LATENCY</span>
                    <span>ACTION</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs">
                        PR
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Autonomous Pull Request Review & Synthesis</div>
                        <div className="text-xs text-slate-400">Triggered via GitHub Webhook • Branch main</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Completed (1.4s)
                    </span>
                    <span className="text-xs font-mono text-slate-300">42ms avg</span>
                    <button 
                      onClick={() => onShowToast('Workflow Inspected', 'PR #382 successfully validated against 18 policy rules.')}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 cursor-pointer"
                    >
                      View Diff
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs">
                        ETL
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Multi-Database Schema Drift & Auto-Migration</div>
                        <div className="text-xs text-slate-400">PostgreSQL ↔ Snowflake Sync • 12,400 events</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Streaming
                    </span>
                    <span className="text-xs font-mono text-slate-300">18ms avg</span>
                    <button 
                      onClick={() => onShowToast('Stream Active', 'Real-time drift monitor streaming zero discrepancies.')}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 cursor-pointer"
                    >
                      Inspect
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xs">
                        OPS
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Continuous Incident Triage & Slack Escalation</div>
                        <div className="text-xs text-slate-400">PagerDuty, Datadog & AWS CloudWatch Link</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Standby Active
                    </span>
                    <span className="text-xs font-mono text-slate-300">8ms avg</span>
                    <button 
                      onClick={() => onShowToast('Ops Standby', 'All monitoring channels calibrated with 0 open anomalies.')}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 cursor-pointer"
                    >
                      Logs
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'agents' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white text-sm">Agent Orion-7 (Code Synthesis)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <p className="text-xs text-slate-400">Specialize in AST analysis, lint automation, and unit test generation.</p>
                    <div className="mt-3 text-xs font-mono text-indigo-400 bg-slate-900 p-2 rounded border border-slate-800">
                      Status: Parsing commit hash #a8f921
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white text-sm">Agent Chrono (SLA Watcher)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <p className="text-xs text-slate-400">Monitors latency SLA across distributed cloud microservices.</p>
                    <div className="mt-3 text-xs font-mono text-cyan-400 bg-slate-900 p-2 rounded border border-slate-800">
                      Status: P99 latency = 31.4ms
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white text-sm">Agent Sentinel (Compliance)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <p className="text-xs text-slate-400">Audits real-time data flows against GDPR and HIPAA guardrails.</p>
                    <div className="mt-3 text-xs font-mono text-purple-400 bg-slate-900 p-2 rounded border border-slate-800">
                      Status: Zero rule violations detected
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white text-sm">Agent Relay (Multi-Stack Sync)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <p className="text-xs text-slate-400">Coordinates bi-directional sync across Linear, Jira, and Slack.</p>
                    <div className="mt-3 text-xs font-mono text-emerald-400 bg-slate-900 p-2 rounded border border-slate-800">
                      Status: 142 tickets synced this hour
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-3">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Global Throughput: {throughputCount.toLocaleString()} Executions</h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
                    Handling peak load across 32 geographic availability regions with sub-50ms deterministic response times.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={() => onShowToast('System Health', 'Global cluster operating at 100% capacity with nominal load.')}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      Run Health Check
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Proof Brand Logos */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Trusted by 10,000+ engineers & leaders from fast-growing teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerLogos.map((partner) => (
              <div 
                key={partner.name}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default"
              >
                <span className="text-lg font-bold">{partner.symbol}</span>
                <span className="text-sm font-semibold tracking-wider">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
