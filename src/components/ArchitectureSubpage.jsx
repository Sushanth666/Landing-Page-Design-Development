import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Bot, 
  BarChart3, 
  Lock, 
  GitMerge, 
  Network, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe, 
  Database, 
  Activity, 
  Play, 
  RefreshCw,
  X,
  Share2
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { TiltCard } from './TiltCard';

export const ArchitectureSubpage = ({ 
  onNavigateHome, 
  onOpenAuthModal, 
  onOpenDemoModal, 
  onShowToast,
  initialFeatureId = null
}) => {
  const [activeTab, setActiveTab] = useState(initialFeatureId || 1);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('us-east');
  const [activeMetricTab, setActiveMetricTab] = useState('p99');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLog, setSimLog] = useState([
    'Initializing distributed mesh cluster...',
    'Verified 32 edge region connectivity in 1.4ms',
    'AST boundary verification active with 98.2% precision'
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (initialFeatureId) {
      setActiveTab(initialFeatureId);
    }
  }, [initialFeatureId]);

  const metricsData = [
    {
      key: 'accuracy',
      value: '98.2%',
      label: 'Model Precision Rate',
      trend: '+4.8% vs industry avg',
      description: 'Continuous AST reasoning ensures 98.2% accuracy across automated pull request reviews and fixes.',
      benchmarks: { p50: '99.4%', p95: '98.8%', p99: '98.2%' },
      regionSpeed: { 'us-east': '1.2ms', 'eu-central': '1.5ms', 'ap-southeast': '2.1ms' }
    },
    {
      key: 'latency',
      value: '1.5ms',
      label: 'Deterministic Latency',
      trend: 'Zero jitter guaranteed',
      description: 'Engineered in lightweight edge Rust nodes with sub-2ms deterministic pipeline execution.',
      benchmarks: { p50: '0.8ms', p95: '1.2ms', p99: '1.5ms' },
      regionSpeed: { 'us-east': '1.1ms', 'eu-central': '1.4ms', 'ap-southeast': '1.9ms' }
    },
    {
      key: 'dags',
      value: '450+',
      label: 'Concurrent DAG Pipelines',
      trend: 'Auto-balanced loads',
      description: 'Supports over 450 simultaneous cross-stack autonomous workflows per single cluster node.',
      benchmarks: { p50: '120 active', p95: '380 active', p99: '450+ peak' },
      regionSpeed: { 'us-east': '180 DAGs', 'eu-central': '150 DAGs', 'ap-southeast': '120 DAGs' }
    },
    {
      key: 'ingestion',
      value: '2.1 TB',
      label: 'Secure Data Ingestion',
      trend: '100% ephemeral memory',
      description: 'Zero data retention architecture ensures your intellectual property is never stored or trained on.',
      benchmarks: { p50: '0.6 TB/hr', p95: '1.8 TB/hr', p99: '2.1 TB/hr' },
      regionSpeed: { 'us-east': '900 GB', 'eu-central': '750 GB', 'ap-southeast': '450 GB' }
    },
  ];

  const systems = [
    {
      id: 1,
      name: 'Autonomous AI Agents',
      badge: 'Agent Mesh',
      subtitle: 'Self-orchestrating multi-agent AST reasoning engines',
      icon: Bot,
      stats: '98.2% Accuracy • 0 human blockers',
      summary: 'Autonomous agent mesh distributes engineering logic across dedicated verification nodes. Agents reason directly about abstract syntax trees, generate unit tests, and resolve merge conflicts deterministically.',
      capabilities: [
        'Deterministic AST validation preventing hallucinations',
        'Automatic regression testing with simulated ephemeral sandboxes',
        'Multi-agent debate consensus protocol before merging changes',
        'Direct synchronization with GitHub, GitLab, and Linear'
      ],
      codeSample: `// AetherFlow Autonomous Agent Definition
import { createAgentMesh, astRule } from '@aetherflow/core';

export const agentMesh = createAgentMesh({
  topology: 'dynamic-consensus',
  modelEnclave: 'isolated-rust-v2',
  rules: [
    astRule('no-unhandled-promise-rejection'),
    astRule('strict-type-boundaries'),
  ],
  onVerify: async (prContext) => {
    return await prContext.autoRemediateAndMerge();
  }
});`,
      lang: 'typescript'
    },
    {
      id: 2,
      name: 'Real-Time Data Streams',
      badge: 'Live Telemetry',
      subtitle: 'Sub-millisecond event streaming & proactive anomaly detection',
      icon: BarChart3,
      stats: '1.5ms Latency • eBPF Event Ingestion',
      summary: 'High-throughput kernel-level eBPF stream processing aggregates telemetry directly from distributed clusters without kernel-user space copy overhead.',
      capabilities: [
        'Kernel-level eBPF telemetry with zero CPU footprint',
        'Dynamic sliding-window anomaly detection with AI forecasting',
        'Instant multi-region replication across 32 edge zones',
        'Native export adapters for Prometheus, Datadog, & Grafana'
      ],
      codeSample: `// Real-Time Telemetry Stream Pipeline
from aetherflow import TelemetryMesh, StreamFilter

pipeline = TelemetryMesh(region="global-edge")
stream = pipeline.subscribe(
    filter=StreamFilter(max_latency_ms=1.5, error_budget=0.0002),
    on_anomaly=lambda event: pipeline.trigger_canary_rollback(event.service_id)
)
pipeline.start_listening()`,
      lang: 'python'
    },
    {
      id: 3,
      name: 'Secure Orchestration Enclave',
      badge: 'SOC2 Type II',
      subtitle: 'Zero-retention encryption with memory-safe confidential compute',
      icon: Lock,
      stats: 'Zero Data Retention • AES-256 GCM',
      summary: 'Every execution runs inside a hardware-isolated confidential enclave (AWS Nitro / AMD SEV). Code tokens are discarded immediately after AST evaluation.',
      capabilities: [
        'Hardware-level memory encryption with cryptographic attestation',
        'SOC2 Type II, HIPAA, and ISO 27001 verified compliance',
        'Zero telemetry retention guarantee signed in SLA agreements',
        'Role-Based Access Control (RBAC) with fine-grained scoped keys'
      ],
      codeSample: `# Cryptographic Enclave Attestation Configuration
enclave:
  attestation_mode: strict-hardware-nitro
  encryption: aes-256-gcm-authenticated
  ephemeral_memory_ttl_ms: 50
  zero_retention_policy: enforced
  authorized_orgs:
    - org_id: "aetherflow-enterprise-cluster-alpha"`,
      lang: 'yaml'
    },
    {
      id: 4,
      name: 'Cross-Platform Integrations',
      badge: '200+ Connectors',
      subtitle: 'Zero-lag bidirectional sync for engineering stacks',
      icon: GitMerge,
      stats: '200+ Integrations • 60-second setup',
      summary: 'Bi-directional webhooks and native gRPC connectors integrate your team toolchain with sub-second synchronization and automatic backpressure management.',
      capabilities: [
        'Out-of-the-box connectors for GitHub, Linear, Slack, AWS, Snowflake',
        'Automated token refresh & OAuth lifecycle management',
        'Exponential backoff with automated dead-letter queue recovery',
        'Custom webhook builder with visual schema transformation'
      ],
      codeSample: `// Stack Connector Orchestration
import { StackRegistry } from '@aetherflow/connectors';

const stack = new StackRegistry();
stack.link(['github', 'linear', 'aws-cloudwatch', 'slack-ops']);
stack.onEvent('deployment-failure', async (incident) => {
  await stack.broadcastResolutionRunbook(incident);
});`,
      lang: 'javascript'
    },
    {
      id: 5,
      name: 'Dynamic Process Mapping',
      badge: 'Visual DAG Builder',
      subtitle: 'Visual directed acyclic graph compilation with self-healing nodes',
      icon: Network,
      stats: '450+ Concurrent DAGs • Self-Healing Nodes',
      summary: 'Construct and visualize multi-step operations using our graph canvas. Failing branches trigger automatic canary rollbacks and alternative branch traversal.',
      capabilities: [
        'Declarative topological sorting with cycle prevention',
        'Real-time visual node execution animation directly in browser',
        'State persistence and deterministic replay of past executions',
        'Parallel node execution with fan-out / fan-in barriers'
      ],
      codeSample: `// Declarative Workflow DAG Node Mapping
workflow "Continuous-Deploy-Pipeline" {
  node "ast-lint"       -> "run-unit-tests"
  node "run-unit-tests" -> "build-canary-container"
  node "build-canary"   -> ["deploy-region-us", "deploy-region-eu"]
  
  on_error {
    strategy = "safe-rollback"
    target   = "previous-stable-tag"
  }
}`,
      lang: 'hcl'
    },
    {
      id: 6,
      name: 'Scalable Edge Infrastructure',
      badge: '32 Edge Regions',
      subtitle: 'Global anycast edge mesh delivering 99.98% availability',
      icon: Layers,
      stats: '32 Global Regions • 99.98% SLA',
      summary: 'High-availability nodes span 32 geo-distributed edge data centers. Traffic routes via BGP Anycast to guarantee lowest-latency processing worldwide.',
      capabilities: [
        'BGP Anycast routing with zero single point of failure',
        'Active-active cross-continental failover in <150ms',
        'Edge compute isolation preventing neighbor-tenant slowdowns',
        '99.98% financial SLA with enterprise compensation guarantee'
      ],
      codeSample: `// Global Edge Mesh Routing Configuration
{
  "edgeMesh": {
    "regions": ["iad1", "fra1", "sin1", "nrt1", "syd1"],
    "anycastHealthCheckIntervalMs": 500,
    "automaticFailover": true,
    "slaThreshold": 0.9998
  }
}`,
      lang: 'json'
    }
  ];

  const currentSystem = systems.find((s) => s.id === activeTab) || systems[0];

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    onShowToast('Code Copied', 'Architecture snippet ready in clipboard.', 'info');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    const newSteps = [
      `Validating ${currentSystem.name} payload in ${selectedRegion.toUpperCase()}...`,
      'Running cryptographic attestation check... [OK]',
      `Deterministic latency verified: ${metricsData[1].regionSpeed[selectedRegion]}`,
      `Simulation successful: All DAG branches operational.`
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < newSteps.length) {
        setSimLog((prev) => [...prev, newSteps[step]]);
        step++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        onShowToast('Simulation Complete', `${currentSystem.name} passed all stress checks!`, 'success');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#05090f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 relative">
      {/* Top Sticky Subpage Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#060b11]/90 backdrop-blur-xl border-b border-emerald-950/80 shadow-2xl py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0a1523] hover:bg-emerald-500 hover:text-slate-950 text-slate-300 border border-emerald-900/60 transition-all font-semibold text-xs cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-px bg-emerald-950 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span className="hover:text-white cursor-pointer" onClick={onNavigateHome}>Home</span>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">Architecture &amp; Feature Deep Dive</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#09121d] border border-emerald-950 hover:border-emerald-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Watch Video Walkthrough</span>
            </button>
            <button
              onClick={() => onOpenAuthModal('Start Trial from Subpage')}
              className="shimmer-trigger px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-md shadow-emerald-500/20"
            >
              <span>Provision Sandbox</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Subpage Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Subpage Header Banner */}
        <section className="text-center max-w-4xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-6 animate-pulse">
            <Cpu className="w-4 h-4 animate-spin-slow" />
            <span className="font-aurora font-float uppercase tracking-wider">AETHERFLOW PLATFORM SPECIFICATIONS &amp; ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="font-shimmer font-hover-expand inline-block">Deep Technical Breakdown of</span>{' '}
            <span className="font-aurora font-hover-expand inline-block">Autonomous Engine Specs</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore live SLA telemetry benchmarks, inspect confidential Rust enclave architectures, and discover how our multi-agent DAG mesh eliminates 40% of operational engineering toil.
          </p>
        </section>

        {/* SECTION 1: 4 Key Metric Benchmarks & Regional Telemetry */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-950/80 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                <span className="font-shimmer">Live Telemetry &amp; SLA Benchmarks</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">Real-time performance metrics aggregated from 32 distributed edge regions.</p>
            </div>

            {/* Region Selector Pills */}
            <div className="flex items-center gap-2 bg-[#09121d] p-1 rounded-xl border border-emerald-950">
              <span className="text-[11px] font-mono text-slate-400 px-2 flex items-center gap-1">
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>Region:</span>
              </span>
              {[
                { id: 'us-east', name: 'US-East (IAD)' },
                { id: 'eu-central', name: 'EU-Central (FRA)' },
                { id: 'ap-southeast', name: 'AP-South (SIN)' }
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setSelectedRegion(r.id);
                    onShowToast('Region Switched', `Inspecting real-time metrics for ${r.name}`);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    selectedRegion === r.id
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Cards Grid with interactive drilldown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.map((m) => (
              <TiltCard
                key={m.key}
                maxTilt={10}
                scale={1.03}
                className="p-6 rounded-2xl bg-[#080f1a] border border-emerald-950 hover:border-emerald-400 shadow-xl group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold font-aurora font-glow font-mono">
                    {m.value}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                    {m.regionSpeed[selectedRegion]}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {m.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {m.description}
                </p>
                <div className="pt-3 border-t border-emerald-950 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>p99: <strong className="text-emerald-300">{m.benchmarks.p99}</strong></span>
                  <span>p50: <strong className="text-slate-200">{m.benchmarks.p50}</strong></span>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* SECTION 2: Deep Dive into 6 Architecture Modules */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Network className="w-5 h-5 text-emerald-400" />
              <span className="font-shimmer">Core Architecture Systems</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Select any platform component below to inspect specifications, capabilities, and live code samples.</p>
          </div>

          {/* System Selection Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {systems.map((sys) => {
              const Icon = sys.icon;
              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveTab(sys.id)}
                  className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    activeTab === sys.id
                      ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                      : 'bg-[#09121d] border-emerald-950 text-slate-400 hover:text-white hover:border-emerald-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-5 h-5 ${activeTab === sys.id ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span className="text-[10px] font-mono uppercase text-emerald-400">{sys.badge}</span>
                  </div>
                  <span className="text-xs font-bold leading-snug">{sys.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active System Inspection Bento Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl bg-[#08101c] border border-emerald-950 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{currentSystem.badge} Specifications</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentSystem.name}
                </h3>
                <p className="text-sm text-emerald-300 font-mono mb-4">
                  {currentSystem.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentSystem.summary}
                </p>
              </div>

              {/* Key Capabilities Bullet Points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Engineered Capabilities:
                </h4>
                {currentSystem.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSimulating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
                  <span>{isSimulating ? 'Simulating...' : 'Run Live Architecture Test'}</span>
                </button>
                <button
                  onClick={() => onOpenAuthModal(`Sandbox for ${currentSystem.name}`)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#0e1c2d] hover:bg-[#14283f] transition-colors border border-emerald-950 cursor-pointer"
                >
                  <span>Launch In Dedicated Enclave</span>
                </button>
              </div>
            </div>

            {/* Right Column: Code Snippet & Interactive Log */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              {/* Code Box */}
              <div className="rounded-2xl bg-[#04080e] border border-emerald-950 overflow-hidden shadow-inner">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#070e17] border-b border-emerald-950 text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>architecture_spec.{currentSystem.lang}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(currentSystem.codeSample)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-emerald-200/90 overflow-x-auto leading-relaxed">
                  <code>{currentSystem.codeSample}</code>
                </pre>
              </div>

              {/* Live Simulated Output Terminal */}
              <div className="rounded-2xl bg-[#04080e] border border-emerald-950/80 p-4 font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-emerald-950/80 text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Verification Sandbox</span>
                  </span>
                  <span className="text-slate-500 text-[10px]">{selectedRegion}</span>
                </div>
                <div className="space-y-1 text-slate-400 max-h-28 overflow-y-auto">
                  {simLog.map((log, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">❯</span>
                      <span className={index === simLog.length - 1 ? 'text-white' : ''}>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 4: Subpage Call to Action */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#071322] via-[#091a2d] to-[#071322] border border-emerald-500/40 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Deploy Autonomous Workflows in Your Stack?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Start your 14-day free trial with full access to confidential enclaves, multi-agent meshes, and 200+ native connectors.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenAuthModal('Start Free Trial Now')}
                className="shimmer-trigger px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-lg shadow-emerald-500/25"
              >
                Start 14-Day Free Trial
              </button>
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-[#0e1e32] hover:bg-[#132842] border border-emerald-950 transition-colors cursor-pointer"
              >
                Watch Video Demo Walkthrough
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Subpage Footer */}
      <footer className="bg-[#03060a] border-t border-emerald-950/80 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AetherFlow Technologies, Inc. Confidential Architecture Specifications v2.5</p>
      </footer>
    </div>
  );
};
