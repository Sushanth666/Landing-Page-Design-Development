import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Play, 
  RotateCcw, 
  Boxes, 
  CheckCircle2, 
  Copy, 
  Check, 
  Network, 
  ShieldCheck, 
  Bot, 
  GitMerge, 
  Layers, 
  Database, 
  Activity, 
  Terminal, 
  FileCode
} from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';

/**
 * PlaygroundSubpage (Workflow Studio Sandbox)
 * An interactive, in-browser visual DAG builder and pipeline simulation sandbox:
 * - Interactive preset templates (Autonomous PR, Canary Deployment, Real-Time Ingestion)
 * - Draggable/selectable workflow nodes with live input/output telemetry
 * - Step-through live pipeline runner with animated node progression
 * - Real-time JSON payload & latency inspector
 * - Compiled multi-language code export (YAML, JSON, TypeScript)
 */
export const PlaygroundSubpage = ({ 
  onNavigateHome, 
  onOpenAuthModal, 
  onShowToast 
}) => {
  const [activePreset, setActivePreset] = useState('pr-canary');
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(null);
  const [completedNodes, setCompletedNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeCodeTab, setActiveCodeTab] = useState('yaml');
  const [copiedCode, setCopiedCode] = useState(false);

  const presets = {
    'pr-canary': {
      id: 'pr-canary',
      name: 'Autonomous PR & Canary Deploy',
      badge: 'DevOps & CI/CD',
      description: 'Reviews pull request diffs, executes AST security audit, and provisions progressive 10% canary traffic.',
      nodes: [
        {
          id: 'node-1',
          name: 'GitHub Webhook Ingestion',
          type: 'Trigger Node',
          icon: GitMerge,
          status: 'Ready',
          latency: '0.4ms',
          payload: { event: 'pull_request.opened', repo: 'aetherflow/core', pr: 429, branch: 'feat/mesh-opt' },
          output: { commitSha: '8f4c21b', diffLines: 142, modifiedFiles: ['mesh.go', 'agent.rs'] }
        },
        {
          id: 'node-2',
          name: 'AI Agent AST Verification',
          type: 'Reasoning Mesh',
          icon: Bot,
          status: 'Ready',
          latency: '1.2ms',
          payload: { astTreeValidation: true, ruleEngine: 'strict-ast-v2', linterConsensus: '3/3 agents' },
          output: { syntaxValid: true, vulnerabilityScore: 0, autoTestsSynthesized: 18 }
        },
        {
          id: 'node-3',
          name: 'Nitro Enclave SAST Sandbox',
          type: 'Security Enclave',
          icon: ShieldCheck,
          status: 'Ready',
          latency: '0.8ms',
          payload: { enclaveMode: 'aws-nitro', ephemeralMemory: '256MB', zeroRetention: true },
          output: { attestationVerified: true, memoryPurged: true, sealHash: 'sha256:d894b1...' }
        },
        {
          id: 'node-4',
          name: 'Progressive Canary Rollout',
          type: 'Edge Runtime',
          icon: Layers,
          status: 'Ready',
          latency: '1.5ms',
          payload: { targetRegions: 32, canaryTrafficPct: 10, maxP99LatencyMs: 15 },
          output: { deployedReplicas: 64, edgeLatencyP50: '1.4ms', errorRatePct: 0.00 }
        }
      ],
      yamlSpec: `# AetherFlow Workflow Spec: Autonomous PR & Canary
name: pr-canary-orchestration
version: "2.5"
trigger:
  type: webhook.github
  events: [pull_request.opened, pull_request.synchronize]

pipeline:
  - id: ast-verification
    agent: ai-logic-mesh
    rules: [zero-regressions, ast-boundaries]
    timeout_ms: 1500
    
  - id: enclave-sandbox
    depends_on: [ast-verification]
    enclave: nitro-confidential
    zero_retention: true

  - id: edge-canary
    depends_on: [enclave-sandbox]
    strategy: progressive-traffic
    initial_pct: 10
    auto_rollback_on_error: true`
    },

    'telemetry-healing': {
      id: 'telemetry-healing',
      name: 'Real-Time Telemetry & Self-Healing',
      badge: 'SRE & Reliability',
      description: 'Stream continuous Kafka telemetry, detect anomaly threshold breaches, and trigger sub-8s canary rollbacks.',
      nodes: [
        {
          id: 'node-1',
          name: 'Kafka CDC Ingest Stream',
          type: 'Stream Pipeline',
          icon: Database,
          status: 'Ready',
          latency: '0.5ms',
          payload: { topic: 'telemetry-ingress', partitions: 16, batchSize: 2048 },
          output: { throughputReqSec: 24500, queueBacklog: 0, bufferLagMs: 0.2 }
        },
        {
          id: 'node-2',
          name: 'Bayesian Anomaly Detector',
          type: 'Insight Engine',
          icon: Activity,
          status: 'Ready',
          latency: '0.9ms',
          payload: { baselineP99: 4.2, anomalyThreshold: 0.02, movingWindowSec: 30 },
          output: { confidenceScore: 0.9998, anomalyDetected: false, healthScore: 100 }
        },
        {
          id: 'node-3',
          name: 'Self-Healing Controller',
          type: 'Auto-Triage',
          icon: RotateCcw,
          status: 'Ready',
          latency: '0.3ms',
          payload: { maxRollbackSec: 8, targetHash: 'stable-v2.4.9', prewarmedReplicas: 32 },
          output: { actionTaken: 'standby-monitoring', rollbackReadiness: '100%' }
        }
      ],
      yamlSpec: `# AetherFlow Workflow Spec: Telemetry & Self-Healing
name: telemetry-self-healing
version: "2.5"
stream:
  connector: kafka-cdc-stream
  throughput_target: 25000_req_sec

anomaly_engine:
  model: bayesian-metric-filter
  eval_window_seconds: 30
  
remediation:
  on_anomaly_trigger:
    action: auto_canary_rollback
    time_limit_seconds: 8
    post_mortem: true`
    }
  };

  const currentWorkflow = presets[activePreset] || presets['pr-canary'];

  // Initialize selected node on preset switch
  useEffect(() => {
    setSelectedNode(currentWorkflow.nodes[0]);
    setCompletedNodes([]);
    setActiveNodeIndex(null);
    setIsRunning(false);
  }, [activePreset]);

  const handleRunPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedNodes([]);
    setActiveNodeIndex(0);
    setSelectedNode(currentWorkflow.nodes[0]);
    onShowToast?.('Pipeline Initiated', `Executing ${currentWorkflow.name}...`, 'info');

    currentWorkflow.nodes.forEach((node, index) => {
      setTimeout(() => {
        setActiveNodeIndex(index);
        setSelectedNode(currentWorkflow.nodes[index]);
        setCompletedNodes((prev) => [...prev, node.id]);

        if (index === currentWorkflow.nodes.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setActiveNodeIndex(null);
            onShowToast?.(
              'Pipeline Completed!',
              `All ${currentWorkflow.nodes.length} nodes resolved in ~${currentWorkflow.nodes.reduce((acc, n) => acc + parseFloat(n.latency), 0).toFixed(1)}ms.`,
              'success'
            );
          }, 600);
        }
      }, (index + 1) * 750);
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentWorkflow.yamlSpec);
    setCopiedCode(true);
    onShowToast?.('Copied to Clipboard', 'Workflow specification ready to deploy.', 'success');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#05090f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#060b13]/90 backdrop-blur-xl border-b border-emerald-950/80 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#09121d] hover:bg-[#0f1f33] border border-emerald-500/30 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>

            <div className="h-4 w-px bg-emerald-950" />

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">AetherFlow</span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Boxes className="w-3.5 h-3.5 text-emerald-400" />
                Workflow Studio Sandbox
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hidden sm:inline-block">
                Runtime v2.5
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09121d] hover:bg-[#0f1f33] border border-emerald-950 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Export YAML'}</span>
            </button>

            <button
              onClick={() => onOpenAuthModal('Deploy from Sandbox')}
              className="shimmer-trigger btn-magnetic px-3.5 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              Launch Live Workspace →
            </button>
          </div>
        </div>
      </header>

      {/* Main Studio Sandbox Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Studio Subheader / Preset Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#070e17] border border-emerald-950/80 relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                Interactive <span className="font-aurora font-hover-expand">DAG Pipeline Sandbox</span>
              </h1>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Design, test, and step-through distributed agent workflows directly in the browser with sub-millisecond execution simulations.
            </p>
          </div>

          {/* Preset Buttons & Runner */}
          <div className="flex items-center flex-wrap gap-2.5 relative z-10">
            <div className="flex items-center bg-[#05090f] p-1 rounded-xl border border-emerald-950">
              <button
                onClick={() => setActivePreset('pr-canary')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePreset === 'pr-canary'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PR & Canary
              </button>
              <button
                onClick={() => setActivePreset('telemetry-healing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePreset === 'telemetry-healing'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Telemetry & Healing
              </button>
            </div>

            <button
              onClick={handleRunPipeline}
              disabled={isRunning}
              className={`shimmer-trigger btn-magnetic inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-lg ${
                isRunning
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400'
                  : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-emerald-500/25'
              }`}
            >
              {isRunning ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                  <span>Executing Step {activeNodeIndex + 1}/{currentWorkflow.nodes.length}...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Live Simulation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Visual DAG Interactive Flow Nodes */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#060c14] border border-emerald-950/80 shadow-2xl relative overflow-hidden">
          {/* Subtle Grid Lattice Background */}
          <div className="absolute inset-0 bg-matrix-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between border-b border-emerald-950/60 pb-3">
              <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-2">
                <Network className="w-4 h-4 animate-spin-slow" />
                Workflow Pipeline Topology ({currentWorkflow.nodes.length} Stages)
              </span>
              <span className="text-[11px] text-slate-400">
                Click any node to inspect payload & runtime schema
              </span>
            </div>

            {/* Horizontal Flow Line with Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {currentWorkflow.nodes.map((node, index) => {
                const NodeIcon = node.icon;
                const isNodeActive = activeNodeIndex === index;
                const isNodeDone = completedNodes.includes(node.id);
                const isNodeSelected = selectedNode?.id === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none group ${
                      isNodeSelected
                        ? 'bg-[#0b1726] border-emerald-400 shadow-xl shadow-emerald-500/20 scale-[1.02]'
                        : isNodeActive
                        ? 'bg-[#0a1824] border-emerald-400 animate-pulse'
                        : isNodeDone
                        ? 'bg-[#08121d] border-emerald-600/70 hover:border-emerald-400'
                        : 'bg-[#070e17] border-emerald-950 hover:border-emerald-700/60'
                    }`}
                  >
                    {/* Stage number pill */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        Step 0{index + 1}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {isNodeDone ? (
                          <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Passed
                          </span>
                        ) : isNodeActive ? (
                          <span className="text-[10px] font-semibold text-amber-300 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                            Running
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-mono">
                            {node.latency}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isNodeSelected || isNodeDone
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-[#05090f] text-slate-400 group-hover:text-emerald-400'
                      }`}>
                        <NodeIcon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-xs font-bold text-white block truncate group-hover:text-emerald-300 transition-colors">
                          {node.name}
                        </span>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {node.type}
                        </span>
                      </div>
                    </div>

                    {/* Progress indicator bar on active */}
                    <div className="w-full h-1 bg-[#05090f] rounded-full overflow-hidden mt-3">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          isNodeDone 
                            ? 'w-full bg-emerald-400' 
                            : isNodeActive 
                            ? 'w-2/3 bg-amber-400 animate-pulse' 
                            : 'w-0'
                        }`} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Inspector Split-Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Node Payload & Output JSON Inspector */}
          <div className="p-5 rounded-2xl bg-[#060b13] border border-emerald-950/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-950 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Node Telemetry Inspector: {selectedNode?.name || 'Select a Node'}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  Latency: {selectedNode?.latency}
                </span>
              </div>

              <div className="space-y-4">
                {/* Input Payload */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1.5">
                    Input Parameters & Configuration
                  </span>
                  <pre className="p-3.5 rounded-xl bg-[#04070d] border border-emerald-950/60 font-mono text-[11px] text-emerald-300/90 overflow-x-auto">
                    {JSON.stringify(selectedNode?.payload, null, 2)}
                  </pre>
                </div>

                {/* Output Telemetry */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1.5">
                    Step Execution Output & Artifacts
                  </span>
                  <pre className="p-3.5 rounded-xl bg-[#04070d] border border-emerald-950/60 font-mono text-[11px] text-teal-300/90 overflow-x-auto">
                    {JSON.stringify(selectedNode?.output, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-950 flex items-center justify-between text-xs text-slate-400">
              <span>Status: <strong className="text-emerald-400">AST Schema Enforced</strong></span>
              <span>Memory Footprint: <strong className="text-white">2.4 MB Ephemeral</strong></span>
            </div>
          </div>

          {/* Right: Compiled Workflow Spec View */}
          <div className="p-5 rounded-2xl bg-[#060b13] border border-emerald-950/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-950 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Compiled DAG Definition (Production Schema)
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy YAML</span>
                </button>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-[#04070d] border border-emerald-950/60 font-mono text-xs text-emerald-300/90 overflow-x-auto max-h-[340px] leading-relaxed">
                  {currentWorkflow.yamlSpec}
                </pre>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-950 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                1-click export to GitHub Actions, Argo, or Kubernetes
              </span>
              <button
                onClick={() => onOpenAuthModal('Deploy Studio Pipeline')}
                className="shimmer-trigger btn-magnetic px-3.5 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold cursor-pointer transition-all shadow-md"
              >
                Provision Pipeline →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
