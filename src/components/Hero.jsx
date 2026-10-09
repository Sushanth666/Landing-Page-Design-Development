import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Database, 
  Cpu, 
  Cloud, 
  BarChart3, 
  CheckCircle, 
  Activity, 
  Zap, 
  Network,
  Maximize2,
  RefreshCw,
  PlusCircle,
  Settings2
} from 'lucide-react';

export const Hero = ({ onOpenAuthModal, onOpenDemoModal, onShowToast }) => {
  const [activeNode, setActiveNode] = useState('ml');
  const [isSimulating, setIsSimulating] = useState(false);

  const nodes = {
    ingest: {
      name: 'Data Ingestion',
      type: 'Stream Pipeline',
      icon: Database,
      status: 'Streaming 18.4k req/s',
      detail: 'Kafka + Postgres CDC connectors actively streaming telemetry without buffer backlog.',
      latency: '0.8ms',
      memory: '240 MB',
    },
    ml: {
      name: 'ML Agent Mesh',
      type: 'Autonomous Core',
      icon: Cpu,
      status: 'Inferencing (98.2% confidence)',
      detail: 'Multi-agent orchestration compiling workflow logic, verifying AST boundaries, and filtering outliers.',
      latency: '1.5ms',
      memory: '1.2 GB',
    },
    deploy: {
      name: 'Model Deployment',
      type: 'Edge Runtime',
      icon: Cloud,
      status: 'Zero-Downtime Rollout',
      detail: 'Automated container hot-swapping across 32 distributed global edge enclaves.',
      latency: '1.2ms',
      memory: '512 MB',
    },
    analytics: {
      name: 'Real-Time Telemetry',
      type: 'Insight Engine',
      icon: BarChart3,
      status: 'Auditing 450+ Workflows',
      detail: 'Live metrics aggregation predicting pipeline anomalies and auto-triggering alerts.',
      latency: '0.4ms',
      memory: '380 MB',
    },
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    onShowToast('Workflow Executing', 'Streaming test payload through Data Ingestion ➔ ML Mesh ➔ Deployment...');
    setTimeout(() => {
      setIsSimulating(false);
      onShowToast('Pipeline Validated', 'All 4 nodes verified successfully in 1.48ms total round-trip.', 'success');
    }, 1800);
  };

  const partnerLogos = [
    { name: 'Linear', symbol: '▲' },
    { name: 'Supabase', symbol: '⚡' },
    { name: 'Stripe', symbol: 'S' },
    { name: 'Vercel', symbol: '▲' },
    { name: 'Datadog', symbol: '🐕' },
    { name: 'Snowflake', symbol: '❄' },
    { name: 'Figma', symbol: '❖' },
  ];

  const currentNode = nodes[activeNode];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#060b11]">
      {/* Aurora Emerald & Teal Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-emerald-500/12 rounded-full blur-[150px] pointer-events-none -z-10 animate-aurora" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-matrix-grid opacity-75 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => onShowToast('AetherFlow AI Matrix', 'Next-Gen Node Graph Automation engine deployed across all clusters.')}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0b1420]/90 border border-emerald-500/30 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-emerald-400 hover:bg-[#0f1d2e] transition-all duration-300 shadow-lg shadow-emerald-500/10 group cursor-pointer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">AetherFlow Matrix v2.5:</span>
            <span>Interactive Node-Graph Workflow Engine</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hero Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Interactive Workflow Automation:{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-mint-200 bg-clip-text text-transparent">
              Autonomous AI Data
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Orchestrate complex engineering workflows, deploy self-learning agent meshes, and monitor end-to-end data pipelines with deterministic 1.5ms processing speeds.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAuthModal('Explore Platform')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-[#0b1420]/80 border border-emerald-900/80 hover:bg-[#0f1d2e] hover:text-white hover:border-emerald-500/50 backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
              <span>Watch Interactive Demo</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>1.5ms median latency</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II & GDPR certified</span>
            </div>
          </div>
        </div>

        {/* Hero Showcase: Interactive DAG Workflow Canvas */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Subtle Outer Glowing Border */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-emerald-400/30 rounded-3xl blur-xl opacity-75 transition duration-1000 -z-10" />

          <div className="rounded-2xl border border-emerald-900/80 bg-[#080f1a]/95 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Canvas Header / Controls */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-emerald-950/80 bg-[#060b13]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <Network className="w-3.5 h-3.5" />
                  Workflow Canvas: Real-time DAG Orchestration
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSimulating
                      ? 'bg-emerald-500/30 text-emerald-300'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                  }`}
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Streaming...' : 'Run Simulation'}</span>
                </button>
              </div>
            </div>

            {/* Interactive SVG Node Canvas */}
            <div className="p-6 md:p-8 bg-[#070e17] relative select-none">
              {/* Background Grid Dots */}
              <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

              {/* Interactive Node Graph */}
              <div className="relative z-10 py-4">
                {/* SVG Connections between Nodes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '260px' }}>
                  <defs>
                    <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#34d399" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Curve 1: Ingest to ML */}
                  <path
                    d="M 170 120 C 230 120, 270 120, 330 120"
                    fill="none"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    className="animate-flow-dash"
                  />
                  {/* Curve 2: ML to Deploy */}
                  <path
                    d="M 470 120 C 530 120, 570 120, 630 120"
                    fill="none"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    className="animate-flow-dash"
                  />
                  {/* Curve 3: Deploy to Analytics */}
                  <path
                    d="M 770 120 C 820 120, 830 120, 860 120"
                    fill="none"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    className="animate-flow-dash"
                  />
                </svg>

                {/* Nodes Horizontal Flow Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-20">
                  {/* Node 1: Ingestion */}
                  <div
                    onClick={() => {
                      setActiveNode('ingest');
                      onShowToast('Node Selected', 'Inspecting Data Ingestion Kafka stream telemetry.');
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeNode === 'ingest'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-lg shadow-emerald-500/20 -translate-y-1'
                        : 'bg-[#0b1420]/80 border-emerald-950 hover:border-emerald-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Database className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        0.8ms
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Data Ingestion</h4>
                    <p className="text-xs text-slate-400">Streaming CDC pipeline</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Node 2: ML Training / Agent Mesh */}
                  <div
                    onClick={() => {
                      setActiveNode('ml');
                      onShowToast('Node Selected', 'Inspecting ML Autonomous Agent Mesh execution.');
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeNode === 'ml'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-lg shadow-emerald-500/20 -translate-y-1'
                        : 'bg-[#0b1420]/80 border-emerald-950 hover:border-emerald-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        1.5ms
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">ML Agent Mesh</h4>
                    <p className="text-xs text-slate-400">Autonomous reasoning</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Inferencing</span>
                    </div>
                  </div>

                  {/* Node 3: Model Deployment */}
                  <div
                    onClick={() => {
                      setActiveNode('deploy');
                      onShowToast('Node Selected', 'Inspecting Model Deployment Edge Cluster.');
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeNode === 'deploy'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-lg shadow-emerald-500/20 -translate-y-1'
                        : 'bg-[#0b1420]/80 border-emerald-950 hover:border-emerald-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        1.2ms
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Deployment Node</h4>
                    <p className="text-xs text-slate-400">32 edge regions</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Sync</span>
                    </div>
                  </div>

                  {/* Node 4: Real-time Analytics */}
                  <div
                    onClick={() => {
                      setActiveNode('analytics');
                      onShowToast('Node Selected', 'Inspecting Real-Time Telemetry & SLA health.');
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeNode === 'analytics'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-lg shadow-emerald-500/20 -translate-y-1'
                        : 'bg-[#0b1420]/80 border-emerald-950 hover:border-emerald-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        0.4ms
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Real-time Insight</h4>
                    <p className="text-xs text-slate-400">Predictive auditing</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Operational</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node Inspector Bar */}
              <div className="mt-6 p-4 rounded-xl bg-[#060b13] border border-emerald-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {currentNode.name} • <span className="text-emerald-400">{currentNode.status}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {currentNode.detail}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-xs font-mono">
                  <span className="text-slate-400">Latency: <strong className="text-emerald-300">{currentNode.latency}</strong></span>
                  <span className="text-slate-400">Memory: <strong className="text-emerald-300">{currentNode.memory}</strong></span>
                </div>
              </div>

              {/* Live Metric Cards: Model Accuracy, Speed, Tasks, Data Handled */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950">
                  <span className="text-xs text-slate-400 block mb-1">Model Accuracy</span>
                  <span className="text-2xl font-extrabold text-white font-mono">98.2%</span>
                  <span className="text-[11px] text-emerald-400 block mt-1">↑ +2.4% benchmark</span>
                </div>

                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950">
                  <span className="text-xs text-slate-400 block mb-1">Processing Speed</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">1.5ms</span>
                  <span className="text-[11px] text-emerald-300 block mt-1">Sub-millisecond P50</span>
                </div>

                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950">
                  <span className="text-xs text-slate-400 block mb-1">Tasks Automating</span>
                  <span className="text-2xl font-extrabold text-white font-mono">450+</span>
                  <span className="text-[11px] text-emerald-400 block mt-1">Active concurrent DAGs</span>
                </div>

                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950">
                  <span className="text-xs text-slate-400 block mb-1">Data Handled</span>
                  <span className="text-2xl font-extrabold text-white font-mono">2.1 TB</span>
                  <span className="text-[11px] text-emerald-400 block mt-1">Zero data leaks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Brand Logobar */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-500/80 font-semibold mb-6">
            Powering autonomous engineering teams at high-growth organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerLogos.map((partner) => (
              <div 
                key={partner.name}
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-300 transition-colors cursor-default"
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
