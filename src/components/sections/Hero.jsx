import React, { useState, useEffect } from 'react';
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
  RefreshCw,
  Sparkles,
  Box,
  Layers,
  ExternalLink
} from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { Canvas3D } from '../media/Canvas3D';

export const Hero = ({ onOpenAuthModal, onOpenDemoModal, onShowToast }) => {
  const [activeNode, setActiveNode] = useState('ml');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(null);
  const [liveThroughput, setLiveThroughput] = useState(452);
  const [is3DIsometric, setIs3DIsometric] = useState(false);

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveThroughput((prev) => prev + (Math.random() > 0.4 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep('ingest');
    setActiveNode('ingest');
    onShowToast('Pipeline Activated', '1/4: Ingesting high-throughput test payload...');

    setTimeout(() => {
      setSimStep('ml');
      setActiveNode('ml');
      onShowToast('Reasoning Active', '2/4: ML Agent Mesh executing AST validation...');
    }, 600);

    setTimeout(() => {
      setSimStep('deploy');
      setActiveNode('deploy');
      onShowToast('Edge Synchronization', '3/4: Deploying hot-swap container to 32 edge clusters...');
    }, 1200);

    setTimeout(() => {
      setSimStep('analytics');
      setActiveNode('analytics');
      onShowToast('Metrics Aggregated', '4/4: Telemetry SLA verified in 1.48ms total round-trip.', 'success');
      setIsSimulating(false);
      setSimStep(null);
    }, 1800);
  };

  const partnerLogos = [
    { name: 'Linear', symbol: '▲', url: 'https://linear.app' },
    { name: 'Supabase', symbol: '⚡', url: 'https://supabase.com' },
    { name: 'Stripe', symbol: 'S', url: 'https://stripe.com' },
    { name: 'Vercel', symbol: '▲', url: 'https://vercel.com' },
    { name: 'Datadog', symbol: '🐕', url: 'https://www.datadoghq.com' },
    { name: 'Snowflake', symbol: '❄', url: 'https://www.snowflake.com' },
    { name: 'Figma', symbol: '❖', url: 'https://www.figma.com' },
  ];

  const currentNode = nodes[activeNode];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent">

      {/* Aurora Emerald & Teal Ambient Glowing Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none -z-10 animate-aurora-glow" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-float" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute inset-0 bg-matrix-grid opacity-75 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Pill with Beacon Ping & Kinetic Pop */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => onShowToast('AetherFlow AI Matrix', 'Next-Gen Node Graph Automation engine deployed across all clusters.')}
            className="shimmer-trigger spring-pop inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a1420]/90 border border-emerald-500/30 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-emerald-400 hover:bg-[#0e1d2f] transition-all duration-300 shadow-lg shadow-emerald-500/10 group cursor-pointer"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-bold font-aurora">AetherFlow Matrix v2.5:</span>
            <span className="font-hover-expand">Interactive 3D Node-Graph Workflow Engine</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hero Heading with Animated Color Flow Gradient */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            <span className="font-shimmer font-hover-expand inline-block">Interactive Workflow Automation:</span>{' '}
            <span className="font-aurora font-hover-expand inline-block">
              Autonomous AI Data
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Orchestrate complex engineering workflows, deploy self-learning agent meshes, and monitor end-to-end data pipelines with deterministic 1.5ms processing speeds.
          </p>

          {/* Dual CTAs with Shimmer and Magnetic Button Physics */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAuthModal('Explore Platform')}
              className="shimmer-trigger btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/50 cursor-pointer"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-[#09121d]/85 border border-emerald-900/80 hover:bg-[#0d1c2d] hover:text-white hover:border-emerald-500/50 backdrop-blur-md cursor-pointer"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
              <span>Watch Interactive Demo</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 hover:text-slate-200 transition-colors cursor-default">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-slate-200 transition-colors cursor-default">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>1.5ms median latency</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-slate-200 transition-colors cursor-default">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II & GDPR certified</span>
            </div>
          </div>
        </div>

        {/* Hero Showcase: Interactive DAG Workflow Canvas with 3D Isometric View Mode */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Animated Pulsing Outer Glowing Border */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-emerald-400/30 rounded-3xl blur-xl opacity-80 animate-pulse transition duration-1000 -z-10" />

          <div 
            style={{
              transform: is3DIsometric 
                ? 'perspective(1400px) rotateX(16deg) rotateY(-4deg) rotateZ(1deg) scale(0.98)' 
                : 'perspective(1400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease',
              transformStyle: 'preserve-3d',
              boxShadow: is3DIsometric 
                ? '0 35px 60px -15px rgba(0, 0, 0, 0.9), 0 0 50px -5px rgba(16, 185, 129, 0.4)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
            className="rounded-2xl border border-emerald-900/80 bg-[#080f1a]/95 shadow-2xl backdrop-blur-xl overflow-hidden relative will-change-transform"
          >
            {/* Radar scanner sweep line effect */}
            <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-emerald-400/8 to-transparent pointer-events-none animate-radar-sweep -z-0" />

            {/* Canvas Header / Controls with 3D Perspective Toggle & Animated Browser Tab Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 border-b border-emerald-950/80 bg-[#060b13] relative z-10">
              <div className="flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:scale-125 transition-transform cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:scale-125 transition-transform cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:scale-125 transition-transform cursor-pointer" />
                </div>

                {/* Animated Browser Tab Pill matching user screenshot */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c1624] border border-emerald-500/30 text-xs font-medium text-slate-200 shadow-inner group">
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <span className="absolute inset-0 rounded bg-emerald-400/20 animate-ping" />
                    <Network className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow relative z-10" />
                  </div>
                  <span className="font-semibold tracking-tight text-white flex items-center gap-1">
                    AetherFlow <span className="text-emerald-400 font-normal">—</span>
                    <span className="font-shimmer font-hover-expand text-emerald-300">Autonomous Workflows</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
                  <span className="text-slate-500 hover:text-slate-300 text-[11px] ml-1.5 cursor-pointer">✕</span>
                </div>

                <span className="sm:hidden text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                  <Network className="w-3 h-3 animate-spin-slow" />
                  AetherFlow DAG
                </span>
              </div>

              {/* Action Buttons: 3D Toggle + Simulation */}
              <div className="flex items-center gap-2">
                {/* 3D Perspective Mode Switch */}
                <button
                  onClick={() => {
                    const nextMode = !is3DIsometric;
                    setIs3DIsometric(nextMode);
                    onShowToast('Perspective Toggled', nextMode ? 'Switched to 3D Isometric View Mode 🧊' : 'Switched to 2D Plan View');
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    is3DIsometric
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                      : 'bg-[#0d1a29] text-slate-300 hover:text-white border border-emerald-950 hover:border-emerald-700'
                  }`}
                  title="Toggle 3D Isometric Perspective"
                >
                  <Box className={`w-3.5 h-3.5 ${is3DIsometric ? 'rotate-12 scale-110' : ''}`} />
                  <span>{is3DIsometric ? '3D Isometric Active' : 'Toggle 3D View'}</span>
                </button>

                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className={`shimmer-trigger btn-magnetic inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                    isSimulating
                      ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                  }`}
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Executing Pipeline...' : 'Run Simulation'}</span>
                </button>
              </div>
            </div>

            {/* Interactive SVG Node Canvas */}
            <div className="p-6 md:p-8 bg-[#070e17] relative select-none">
              {/* Background Grid Dots */}
              <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

              {/* Interactive Node Graph */}
              <div className="relative z-10 py-4">
                {/* SVG Connections between Nodes with animated Dash and moving Energy Packets */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '260px' }}>
                  <defs>
                    <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#34d399" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glowPacket" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Curve 1: Ingest to ML */}
                  <path
                    d="M 170 120 C 230 120, 270 120, 330 120"
                    fill="none"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    className="animate-flow-dash"
                  />
                  <circle r="4" fill="#34d399" filter="url(#glowPacket)">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 170 120 C 230 120, 270 120, 330 120" />
                  </circle>

                  {/* Curve 2: ML to Deploy */}
                  <path
                    d="M 470 120 C 530 120, 570 120, 630 120"
                    fill="none"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    className="animate-flow-dash"
                  />
                  <circle r="4" fill="#34d399" filter="url(#glowPacket)">
                    <animateMotion dur="2.2s" begin="0.4s" repeatCount="indefinite" path="M 470 120 C 530 120, 570 120, 630 120" />
                  </circle>

                  {/* Curve 3: Deploy to Analytics */}
                  <path
                    d="M 770 120 C 820 120, 830 120, 860 120"
                    fill="none"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    className="animate-flow-dash"
                  />
                  <circle r="4" fill="#34d399" filter="url(#glowPacket)">
                    <animateMotion dur="1.8s" begin="0.8s" repeatCount="indefinite" path="M 770 120 C 820 120, 830 120, 860 120" />
                  </circle>
                </svg>

                {/* Nodes Horizontal Flow Container with True 3D Z-Depth Layering */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-20">
                  {/* Node 1: Ingestion */}
                  <TiltCard
                    maxTilt={14}
                    scale={1.05}
                    onClick={() => {
                      setActiveNode('ingest');
                      onShowToast('Node Selected', 'Inspecting Data Ingestion Kafka stream telemetry.');
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer relative group ${
                      activeNode === 'ingest' || simStep === 'ingest'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-xl shadow-emerald-500/25'
                        : 'bg-[#0b1420]/90 border-emerald-950 hover:border-emerald-700'
                    }`}
                  >
                    {(activeNode === 'ingest' || simStep === 'ingest') && (
                      <span className="absolute -inset-0.5 rounded-2xl border border-emerald-400 animate-ping-slow pointer-events-none opacity-50" />
                    )}
                    <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-between mb-3 transition-transform">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 spring-icon shadow-inner">
                        <Database className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        0.8ms
                      </span>
                    </div>
                    <h4 style={{ transform: 'translateZ(20px)' }} className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Data Ingestion</h4>
                    <p style={{ transform: 'translateZ(15px)' }} className="text-xs text-slate-400">Streaming CDC pipeline</p>
                    <div style={{ transform: 'translateZ(25px)' }} className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </TiltCard>

                  {/* Node 2: ML Training / Agent Mesh */}
                  <TiltCard
                    maxTilt={14}
                    scale={1.05}
                    onClick={() => {
                      setActiveNode('ml');
                      onShowToast('Node Selected', 'Inspecting ML Autonomous Agent Mesh execution.');
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer relative group ${
                      activeNode === 'ml' || simStep === 'ml'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-xl shadow-emerald-500/25'
                        : 'bg-[#0b1420]/90 border-emerald-950 hover:border-emerald-700'
                    }`}
                  >
                    {(activeNode === 'ml' || simStep === 'ml') && (
                      <span className="absolute -inset-0.5 rounded-2xl border border-emerald-400 animate-ping-slow pointer-events-none opacity-50" />
                    )}
                    <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-between mb-3 transition-transform">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 spring-icon shadow-inner">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        1.5ms
                      </span>
                    </div>
                    <h4 style={{ transform: 'translateZ(20px)' }} className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">ML Agent Mesh</h4>
                    <p style={{ transform: 'translateZ(15px)' }} className="text-xs text-slate-400">Autonomous reasoning</p>
                    <div style={{ transform: 'translateZ(25px)' }} className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Inferencing</span>
                    </div>
                  </TiltCard>

                  {/* Node 3: Model Deployment */}
                  <TiltCard
                    maxTilt={14}
                    scale={1.05}
                    onClick={() => {
                      setActiveNode('deploy');
                      onShowToast('Node Selected', 'Inspecting Model Deployment Edge Cluster.');
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer relative group ${
                      activeNode === 'deploy' || simStep === 'deploy'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-xl shadow-emerald-500/25'
                        : 'bg-[#0b1420]/90 border-emerald-950 hover:border-emerald-700'
                    }`}
                  >
                    {(activeNode === 'deploy' || simStep === 'deploy') && (
                      <span className="absolute -inset-0.5 rounded-2xl border border-emerald-400 animate-ping-slow pointer-events-none opacity-50" />
                    )}
                    <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-between mb-3 transition-transform">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 spring-icon shadow-inner">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        1.2ms
                      </span>
                    </div>
                    <h4 style={{ transform: 'translateZ(20px)' }} className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Deployment Node</h4>
                    <p style={{ transform: 'translateZ(15px)' }} className="text-xs text-slate-400">32 edge regions</p>
                    <div style={{ transform: 'translateZ(25px)' }} className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Sync</span>
                    </div>
                  </TiltCard>

                  {/* Node 4: Real-time Analytics */}
                  <TiltCard
                    maxTilt={14}
                    scale={1.05}
                    onClick={() => {
                      setActiveNode('analytics');
                      onShowToast('Node Selected', 'Inspecting Real-Time Telemetry & SLA health.');
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer relative group ${
                      activeNode === 'analytics' || simStep === 'analytics'
                        ? 'bg-[#0f1d2b] border-emerald-400 shadow-xl shadow-emerald-500/25'
                        : 'bg-[#0b1420]/90 border-emerald-950 hover:border-emerald-700'
                    }`}
                  >
                    {(activeNode === 'analytics' || simStep === 'analytics') && (
                      <span className="absolute -inset-0.5 rounded-2xl border border-emerald-400 animate-ping-slow pointer-events-none opacity-50" />
                    )}
                    <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-between mb-3 transition-transform">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 spring-icon shadow-inner">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        0.4ms
                      </span>
                    </div>
                    <h4 style={{ transform: 'translateZ(20px)' }} className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Real-time Insight</h4>
                    <p style={{ transform: 'translateZ(15px)' }} className="text-xs text-slate-400">Predictive auditing</p>
                    <div style={{ transform: 'translateZ(25px)' }} className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Operational</span>
                    </div>
                  </TiltCard>
                </div>
              </div>

              {/* Node Inspector Bar with Smooth Micro-Transition */}
              <div className="mt-6 p-4 rounded-xl bg-[#060b13] border border-emerald-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 animate-pulse">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {currentNode.name} • <span className="text-emerald-400 font-semibold">{currentNode.status}</span>
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

              {/* Live Metric Cards with Dynamic Hover Elevation & Subtle Glow */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950 hover:border-emerald-500/40 spring-pop cursor-default group">
                  <span className="text-xs text-slate-400 block mb-1 group-hover:text-slate-200">Model Accuracy</span>
                  <span className="text-2xl font-extrabold text-white font-mono group-hover:text-emerald-300 transition-colors">98.2%</span>
                  <span className="text-[11px] text-emerald-400 block mt-1">↑ +2.4% benchmark</span>
                </div>

                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950 hover:border-emerald-500/40 spring-pop cursor-default group">
                  <span className="text-xs text-slate-400 block mb-1 group-hover:text-slate-200">Processing Speed</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono group-hover:text-emerald-300 transition-colors">1.5ms</span>
                  <span className="text-[11px] text-emerald-300 block mt-1">Sub-millisecond P50</span>
                </div>

                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950 hover:border-emerald-500/40 spring-pop cursor-default group">
                  <span className="text-xs text-slate-400 block mb-1 group-hover:text-slate-200">Tasks Automating</span>
                  <span className="text-2xl font-extrabold text-white font-mono group-hover:text-emerald-300 transition-colors">
                    {liveThroughput}+
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-1">Active concurrent DAGs</span>
                </div>

                <div className="p-4 rounded-xl bg-[#09121d] border border-emerald-950 hover:border-emerald-500/40 spring-pop cursor-default group">
                  <span className="text-xs text-slate-400 block mb-1 group-hover:text-slate-200">Data Handled</span>
                  <span className="text-2xl font-extrabold text-white font-mono group-hover:text-emerald-300 transition-colors">2.1 TB</span>
                  <span className="text-[11px] text-emerald-400 block mt-1">Zero data leaks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Brand Logobar with bouncy hover scale */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-500/80 font-semibold mb-6">
            Powering autonomous engineering teams at high-growth organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-80 hover:opacity-100 transition-all duration-300">
            {partnerLogos.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onShowToast?.('External Partner Portal', `Redirecting to official ${partner.name} platform (${partner.url})...`)}
                title={`Visit official ${partner.name} website (${partner.url})`}
                className="group/partner flex items-center gap-2 text-slate-400 hover:text-emerald-300 spring-pop cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 rounded-xl px-2.5 py-1.5 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/10 border border-transparent hover:border-emerald-500/30"
              >
                <span className="text-lg font-bold group-hover/partner:text-emerald-400 group-hover/partner:scale-110 transition-all">{partner.symbol}</span>
                <span className="text-sm font-semibold tracking-wider group-hover/partner:text-white transition-colors">{partner.name}</span>
                <ExternalLink className="w-3 h-3 text-emerald-400/0 group-hover/partner:text-emerald-400 -translate-x-1 group-hover/partner:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
