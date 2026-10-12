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
  ArrowRight, 
  Terminal, 
  Copy, 
  Check, 
  Cpu, 
  Play, 
  RefreshCw
} from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

export const featurePagesData = {
  1: {
    id: 1,
    slug: 'autonomous-agents',
    title: 'Autonomous AI Agents',
    badge: 'Agent Mesh',
    subtitle: 'Self-orchestrating multi-agent AST reasoning engines for high-velocity teams',
    icon: Bot,
    accentColor: 'emerald',
    heroStats: [
      { label: 'Model Precision', value: '98.2%', detail: 'AST verification accuracy' },
      { label: 'Resolution MTTR', value: '<12s', detail: 'From PR open to clean fixes' },
      { label: 'Human Blockers', value: '0', detail: 'Fully autonomous consensus' },
      { label: 'Test Coverage', value: '+45%', detail: 'Auto-synthesized unit tests' },
    ],
    overview: 'The AetherFlow Autonomous Agent Mesh deploys specialized, self-learning agent clusters across your codebase. Unlike basic autocomplete LLMs, these agents operate over the full abstract syntax tree (AST), executing multi-step engineering logic, reviewing pull requests, running regression suites, and resolving merge conflicts without human delays.',
    architectureDetails: [
      {
        title: 'Multi-Agent Debate Consensus',
        description: 'Before any code change is merged, three isolated agent instances (Linter, Security Auditor, and Logic Verifier) debate and reach mathematical consensus on AST boundaries.'
      },
      {
        title: 'Deterministic Sandbox Verification',
        description: 'Every pull request proposal is compiled and executed in an ephemeral, memory-isolated WebAssembly container to verify runtime behavior and zero regressions.'
      },
      {
        title: 'Zero Hallucination Guardrails',
        description: 'Rules are strictly anchored to your language AST schema and custom ESLint / Rust clippy rules, guaranteeing zero hallucinated syntax or ghost dependencies.'
      },
      {
        title: 'Deep Version Control Synchronization',
        description: 'Deep bidirectional webhooks integrate with GitHub, GitLab, and Linear. Agents comment on PR diffs, push remediation commits, and auto-merge green builds.'
      }
    ],
    codeSnippet: `// AetherFlow Autonomous Agent Mesh Definition
import { createAgentMesh, astRule } from '@aetherflow/core';

export const agentMesh = createAgentMesh({
  topology: 'dynamic-consensus',
  modelEnclave: 'isolated-rust-v2',
  rules: [
    astRule('strict-type-boundaries'),
    astRule('zero-unhandled-promise-rejections'),
    astRule('deterministic-error-handling')
  ],
  onPullRequest: async (prContext) => {
    const analysis = await prContext.evaluateAST();
    if (analysis.hasEdgeCases) {
      await prContext.synthesizeUnitTests(analysis.uncoveredBranches);
      await prContext.applySelfHealingCommit();
    }
    return prContext.autoMergeIfGreen();
  }
});`,
    codeLang: 'typescript',
    simulationInitialLogs: [
      'Initialized 3-node agent consensus mesh...',
      'Evaluating PR #1428: refactor(engine): migrate to zero-copy buffer',
      'AST validation complete: 0 syntax boundary regressions detected',
      'Synthesized 14 new edge-case unit tests with 100% assertion pass',
      'Consensus reached: All 3 verifier nodes approved change'
    ],
    simActionText: 'Simulate Agent PR Review'
  },

  2: {
    id: 2,
    slug: 'realtime-streams',
    title: 'Real-Time Data Streams',
    badge: 'Live Telemetry',
    subtitle: 'Sub-millisecond kernel-level eBPF stream processing & proactive anomaly detection',
    icon: BarChart3,
    accentColor: 'teal',
    heroStats: [
      { label: 'Event Latency', value: '1.5ms', detail: 'Sub-2ms deterministic delay' },
      { label: 'Throughput', value: '2.4M/s', detail: 'Events processed per node' },
      { label: 'CPU Overhead', value: '<0.4%', detail: 'Zero-copy kernel eBPF' },
      { label: 'Global Regions', value: '32', detail: 'Edge-distributed ingest' },
    ],
    overview: 'AetherFlow Real-Time Data Streams leverage kernel-level eBPF probes to extract execution telemetry, network latencies, and queue depths directly from the Linux kernel. Telemetry streams are processed in-flight using custom ring buffers, delivering proactive anomaly alerts before system bottlenecks degrade user performance.',
    architectureDetails: [
      {
        title: 'Kernel-Level eBPF Probes',
        description: 'Attaches non-invasive probes to TCP sockets and system calls, streaming packet rates and microsecond latency figures without impacting application runtimes.'
      },
      {
        title: 'Sliding-Window AI Anomaly Engine',
        description: 'Continuous predictive models evaluate latency curves in real time. Anomalies 2 standard deviations above p99 baseline trigger instant automated canary mitigations.'
      },
      {
        title: 'Zero-Copy Ingestion Architecture',
        description: 'Direct memory mapping transfers telemetry buffers straight from network interfaces to memory-safe Rust workers, maintaining sub-1.5ms deterministic throughput.'
      },
      {
        title: 'OpenTelemetry & Prometheus Exporters',
        description: 'Native bidirectional streaming pipelines export live metrics to Datadog, Grafana, OpenTelemetry, and AWS CloudWatch with sub-second dashboard refreshes.'
      }
    ],
    codeSnippet: `# AetherFlow Real-Time Telemetry Pipeline
from aetherflow import TelemetryMesh, StreamFilter, AnomalyAction

pipeline = TelemetryMesh(region="global-edge", protocol="ebpf-direct")

# Subscribe to sub-millisecond cluster stream
stream = pipeline.subscribe(
    filter=StreamFilter(
        service="payment-orchestrator",
        max_latency_ms=1.5,
        error_budget_rate=0.0001
    ),
    on_anomaly=AnomalyAction.trigger_canary_rollback(
        target_service="payment-orchestrator-v2",
        notify_slack="#sre-alerts"
    )
)

pipeline.start_listening()`,
    codeLang: 'python',
    simulationInitialLogs: [
      'Connected to kernel eBPF telemetry ring buffer...',
      'Aggregating 32 edge region metrics (IAD, FRA, SIN, NRT)...',
      'Ingested 1,240,000 telemetry events in 850ms',
      'P99 latency confirmed at 1.48ms across all active connections',
      'Anomaly detection threshold active: 0 latency spikes detected'
    ],
    simActionText: 'Simulate 1M Event Ingest'
  },

  3: {
    id: 3,
    slug: 'secure-enclave',
    title: 'Secure Orchestration Enclave',
    badge: 'SOC2 Type II',
    subtitle: 'Hardware-isolated confidential compute with verifiable zero-retention encryption',
    icon: Lock,
    accentColor: 'emerald',
    heroStats: [
      { label: 'Data Retention', value: '0 bytes', detail: '100% ephemeral memory' },
      { label: 'Encryption', value: 'AES-256', detail: 'Authenticated GCM mode' },
      { label: 'Certifications', value: 'SOC2 / HIPAA', detail: 'Type II verified & audited' },
      { label: 'Enclave TTL', value: '50ms', detail: 'Instant memory purge' },
    ],
    overview: 'Security is embedded at the silicon level. Every AetherFlow execution runs in hardware-isolated confidential compute enclaves (AWS Nitro / AMD SEV). Your codebase, intellectual property, and internal secrets never train third-party foundation models and are cryptographically scrubbed from RAM immediately after AST computation.',
    architectureDetails: [
      {
        title: 'Hardware Cryptographic Attestation',
        description: 'Before executing any workload, the enclave verifies its cryptographic signature with hardware chips, preventing unauthorized tampering or memory snooping.'
      },
      {
        title: 'Ephemeral RAM Lifecycles (50ms TTL)',
        description: 'Memory pages allocated for evaluating code syntax or token streams are overwritten with random entropy within 50 milliseconds of completion.'
      },
      {
        title: 'SOC2 Type II, HIPAA & GDPR Verified',
        description: 'Independently audited and certified by third-party security assessors. Complete audit logs and compliance artifacts are accessible in your trust portal.'
      },
      {
        title: 'Scoped Cryptographic Key Management',
        description: 'Integrates natively with AWS KMS, HashiCorp Vault, and Google Cloud KMS. Keys never leave your control and are only decrypted inside the confidential enclave.'
      }
    ],
    codeSnippet: `# AetherFlow Confidential Enclave Policy
enclave_policy:
  version: "2.5"
  attestation_mode: strict-hardware-nitro
  encryption:
    cipher: aes-256-gcm-authenticated
    kms_provider: aws-kms-customer-managed
    key_arn: "arn:aws:kms:us-east-1:123456789:key/aetherflow-enclave"
  memory_protection:
    ephemeral_ttl_ms: 50
    zero_retention_guarantee: true
    prevent_swap_to_disk: true
  compliance:
    audit_logging: tamper-evident-chain
    soc2_type_ii: enforced`,
    codeLang: 'yaml',
    simulationInitialLogs: [
      'Requesting hardware cryptographic attestation certificate...',
      'AWS Nitro Enclave identity verified: SHA-256 matches secure baseline',
      'Allocated ephemeral memory arena (AES-256-GCM encrypted in RAM)',
      'Executed confidential AST parsing in 3.2ms',
      'Zero-retention purge completed: Memory wiped with random entropy'
    ],
    simActionText: 'Simulate Enclave Attestation'
  },

  4: {
    id: 4,
    slug: 'cross-platform-integrations',
    title: 'Cross-Platform Integrations',
    badge: '200+ Connectors',
    subtitle: 'Zero-lag bidirectional synchronization across your entire engineering ecosystem',
    icon: GitMerge,
    accentColor: 'teal',
    heroStats: [
      { label: 'Connectors', value: '200+', detail: 'Native pre-built integrations' },
      { label: 'Setup Time', value: '<60s', detail: '1-click OAuth authentication' },
      { label: 'Delivery SLA', value: '99.99%', detail: 'Exponential retry queues' },
      { label: 'Sync Latency', value: '<250ms', detail: 'Bidirectional webhooks' },
    ],
    overview: 'Connect your fragmented developer stack into a coherent nervous system. AetherFlow provides over 200 high-performance bidirectional connectors for GitHub, Linear, Jira, Slack, AWS, Snowflake, Datadog, and PagerDuty. Events synchronize in real time with automatic retry queues and dead-letter fault tolerance.',
    architectureDetails: [
      {
        title: '1-Click OAuth Lifecycle Management',
        description: 'Zero manual API key copy-pasting. Automated OAuth token rotation, refresh cycles, and fine-grained permission scopes handled out of the box.'
      },
      {
        title: 'Dead-Letter Queue & Exponential Backoff',
        description: 'If third-party endpoints experience rate limits or downtime, AetherFlow buffers payloads in durable event queues and replays them smoothly.'
      },
      {
        title: 'Visual Schema Mapping & Transformations',
        description: 'Transform webhook payloads between systems (e.g., Jira issue to Linear ticket to GitHub PR) with declarative visual drag-and-drop transformations.'
      },
      {
        title: 'High-Concurrency gRPC Mesh',
        description: 'Synchronizations execute over persistent bidirectional gRPC streams, eliminating HTTP handshake latency and keeping all tools in lockstep.'
      }
    ],
    codeSnippet: `// AetherFlow Stack Connector Mesh
import { StackRegistry, WebhookDispatcher } from '@aetherflow/connectors';

const stack = new StackRegistry({
  orgId: 'enterprise-aether-cluster',
  retryPolicy: 'exponential-backoff-jitter'
});

// Link tools with bidirectional state sync
stack.link(['github', 'linear', 'slack', 'aws-cloudwatch']);

stack.onEvent('deployment.failure', async (event) => {
  const incident = await stack.tools.linear.createIncident({
    title: \`Deployment anomaly in \${event.service}\`,
    severity: 'P1-CRITICAL'
  });
  await stack.tools.slack.sendAlert('#eng-war-room', incident.summary);
});`,
    codeLang: 'javascript',
    simulationInitialLogs: [
      'Synchronizing 200+ connector mesh status...',
      'OAuth tokens validated for GitHub, Linear, Jira, Slack, AWS',
      'Simulating deployment anomaly event webhook dispatch...',
      'Dispatched Linear incident ticket #INC-892 in 42ms',
      'Broadcasted SRE alert to Slack #eng-war-room in 68ms [Delivered]'
    ],
    simActionText: 'Simulate Webhook Sync'
  },

  5: {
    id: 5,
    slug: 'dynamic-process-mapping',
    title: 'Dynamic Process Mapping',
    badge: 'Visual DAG Builder',
    subtitle: 'Declarative DAG workflow compilation with self-healing nodes and safe rollbacks',
    icon: Network,
    accentColor: 'emerald',
    heroStats: [
      { label: 'Concurrent DAGs', value: '450+', detail: 'Per single cluster node' },
      { label: 'Self-Healing', value: '<8s', detail: 'Automated canary rollback' },
      { label: 'Topological Check', value: '0 cycles', detail: 'Strict loop prevention' },
      { label: 'Execution Mode', value: 'Parallel', detail: 'Fan-out / fan-in barriers' },
    ],
    overview: 'Design, compile, and execute complex engineering operations using our declarative directed acyclic graph (DAG) engine. Workflow nodes execute in parallel with automatic topological cycle prevention. If a downstream node encounters a regression, the engine automatically rolls back to the last known stable state in under 8 seconds.',
    architectureDetails: [
      {
        title: 'Declarative Topology Sorting',
        description: 'Workflows are modeled as immutable mathematical DAGs. Graph compilers eliminate cyclic deadlocks before execution commences.'
      },
      {
        title: 'Automated Canary Rollbacks (<8s)',
        description: 'Detects runtime latency anomalies or HTTP 5xx spikes during deployments and executes immediate canary rollbacks to the prior git tag.'
      },
      {
        title: 'Interactive In-Browser Visualizer',
        description: 'Inspect running DAG nodes in real time. Visual execution states glow in green, amber, or blue as tasks transition through the mesh.'
      },
      {
        title: 'State Replay & Deterministic Debugging',
        description: 'Every node execution produces an immutable cryptographic state hash, allowing engineers to time-travel and replay past pipeline runs step-by-step.'
      }
    ],
    codeSnippet: `# AetherFlow Declarative Workflow DAG
workflow "Production-Zero-Downtime-Release" {
  concurrency_limit = 450
  
  node "ast-lint" {
    action = "aetherflow.ast.verify"
    next   = "run-unit-tests"
  }
  
  node "run-unit-tests" {
    action = "aetherflow.sandbox.test"
    next   = "build-canary-container"
  }
  
  node "build-canary-container" {
    action = "aetherflow.deploy.canary"
    rollout_percentage = 10
    on_anomaly = "trigger-rollback"
  }
  
  strategy "safe-rollback" {
    time_limit_seconds = 8
    target_tag = "stable-v2.4.9"
  }
}`,
    codeLang: 'hcl',
    simulationInitialLogs: [
      'Compiling declarative DAG workflow...',
      'Topological sort verified: 0 cyclic dependencies detected',
      'Step 1/3: ast-lint executed in 1.2s [PASSED]',
      'Step 2/3: run-unit-tests executed in 2.8s (142 tests passed)',
      'Step 3/3: canary rollout 10% active • Health check: 100% nominal'
    ],
    simActionText: 'Simulate DAG Execution'
  },

  6: {
    id: 6,
    slug: 'scalable-edge',
    title: 'Scalable Edge Infrastructure',
    badge: '32 Edge Regions',
    subtitle: 'Global Anycast edge network with 99.98% financial SLA & active-active failover',
    icon: Layers,
    accentColor: 'teal',
    heroStats: [
      { label: 'Edge Locations', value: '32', detail: 'Worldwide Tier-1 PoPs' },
      { label: 'Uptime SLA', value: '99.98%', detail: 'Financially backed guarantee' },
      { label: 'Failover Time', value: '<150ms', detail: 'BGP Anycast rerouting' },
      { label: 'Routing', value: 'BGP Anycast', detail: 'Lowest latency hops' },
    ],
    overview: 'Engineered for planetary scale. AetherFlow distributes orchestrator nodes across 32 geo-distributed edge data centers connected by a private fiber backbone. Traffic routes via BGP Anycast to ensure users and webhooks connect to the geographically closest server with sub-150ms cross-continental failover.',
    architectureDetails: [
      {
        title: 'BGP Anycast Intelligent Routing',
        description: 'Single IP address automatically routes client traffic to the nearest healthy edge node, minimizing round-trip times globally.'
      },
      {
        title: 'Active-Active Continental Redundancy',
        description: 'If a regional data center suffers a major network partition, Anycast routes instantly shift traffic to adjacent regions in <150ms.'
      },
      {
        title: 'Memory-Isolated Tenant Compute',
        description: 'Each customer workspace runs on isolated Rust micro-threads, ensuring high-traffic bursts from one team never degrade neighbors.'
      },
      {
        title: '99.98% Financially Backed SLA',
        description: 'Enterprise contracts include continuous automated health probing and automatic credits if availability falls below 99.98%.'
      }
    ],
    codeSnippet: `// Global Edge Mesh Configuration
{
  "edgeMeshTopology": {
    "version": "2.5",
    "bgpAnycast": true,
    "activeRegions": [
      { "id": "iad1", "name": "US-East (Virginia)", "status": "NOMINAL", "latencyMs": 1.2 },
      { "id": "fra1", "name": "EU-Central (Frankfurt)", "status": "NOMINAL", "latencyMs": 1.4 },
      { "id": "sin1", "name": "AP-South (Singapore)", "status": "NOMINAL", "latencyMs": 2.1 },
      { "id": "nrt1", "name": "AP-North (Tokyo)", "status": "NOMINAL", "latencyMs": 2.4 },
      { "id": "syd1", "name": "Oceania (Sydney)", "status": "NOMINAL", "latencyMs": 2.8 }
    ],
    "healthCheckFrequencyMs": 250,
    "automaticFailoverSLA": 0.9998
  }
}`,
    codeLang: 'json',
    simulationInitialLogs: [
      'Probing 32 global edge data centers...',
      'Region US-East (IAD1): 1.2ms latency [HEALTHY]',
      'Region EU-Central (FRA1): 1.4ms latency [HEALTHY]',
      'Region AP-South (SIN1): 2.1ms latency [HEALTHY]',
      'Simulating synthetic regional partition in IAD1...',
      'BGP Anycast rerouted traffic to ORD1 in 84ms • SLA Maintained'
    ],
    simActionText: 'Simulate Anycast Failover'
  }
};

export const FeatureDetailSubpage = ({ 
  featureId = 1,
  onNavigateHome,
  onNavigateToFeature,
  onOpenAuthModal,
  onOpenDemoModal,
  onShowToast
}) => {
  const currentFeature = featurePagesData[featureId] || featurePagesData[1];
  const [copiedCode, setCopiedCode] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState(currentFeature.simulationInitialLogs);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSimulationLogs(currentFeature.simulationInitialLogs);
  }, [featureId]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentFeature.codeSnippet);
    setCopiedCode(true);
    onShowToast('Code Copied', `${currentFeature.title} configuration copied to clipboard!`, 'info');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    const bonusLog = `[SUCCESS] Live simulation verified for ${currentFeature.title} at ${new Date().toLocaleTimeString()} with 0 anomalies.`;
    setTimeout(() => {
      setSimulationLogs((prev) => [...prev, bonusLog]);
      setIsSimulating(false);
      onShowToast('Verification Complete', `${currentFeature.title} nominal performance confirmed!`, 'success');
    }, 800);
  };

  const FeatureIcon = currentFeature.icon;

  return (
    <div className="min-h-screen bg-[#05090f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 relative">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-40 bg-[#060b11]/90 backdrop-blur-xl border-b border-emerald-950/80 shadow-2xl py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
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
              <span className="text-slate-400">Capabilities</span>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">{currentFeature.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#09121d] border border-emerald-950 hover:border-emerald-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Watch Demo</span>
            </button>
            <button
              onClick={() => onOpenAuthModal(`Start Trial - ${currentFeature.title}`)}
              className="shimmer-trigger px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-md shadow-emerald-500/20"
            >
              <span>Provision Sandbox</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Feature Subpage Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Feature Hero Header */}
        <section className="text-center max-w-4xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-6 animate-pulse">
            <FeatureIcon className="w-4 h-4" />
            <span className="font-aurora font-float uppercase tracking-wider">{currentFeature.badge} • TECHNICAL SPECIFICATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="font-shimmer font-hover-expand inline-block">{currentFeature.title}</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-300 font-mono max-w-2xl mx-auto">
            {currentFeature.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {currentFeature.overview}
          </p>
        </section>

        {/* 4 Feature Key Metric Benchmark Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentFeature.heroStats.map((st, idx) => (
            <TiltCard
              key={idx}
              maxTilt={10}
              scale={1.03}
              className="p-5 sm:p-6 rounded-2xl bg-[#080f1a] border border-emerald-950 hover:border-emerald-400 shadow-xl group transition-all"
            >
              <div className="text-2xl sm:text-4xl font-extrabold font-aurora font-glow font-mono mb-1">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {st.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {st.detail}
              </div>
            </TiltCard>
          ))}
        </section>

        {/* Technical Architecture Blueprint & Live Interactive Sandbox */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Architecture Pillar Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-emerald-950 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span className="font-shimmer">Engineered Architecture &amp; Mechanics</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">Deep system principles powering {currentFeature.title} in production.</p>
            </div>

            <div className="space-y-4">
              {currentFeature.architectureDetails.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-[#08111d] border border-emerald-950/80 hover:border-emerald-500/50 hover:bg-[#0a1626] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="shimmer-trigger px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20 disabled:opacity-50"
              >
                {isSimulating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
                <span>{isSimulating ? 'Executing Verification...' : currentFeature.simActionText}</span>
              </button>

              <button
                onClick={() => onOpenAuthModal(`Explore API - ${currentFeature.title}`)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#0a1523] hover:bg-[#102035] border border-emerald-950 transition-colors cursor-pointer"
              >
                Launch Sandbox API
              </button>
            </div>
          </div>

          {/* Right Column: Code Specification & Live Log Console */}
          <div className="lg:col-span-6 space-y-4">
            {/* Code Box */}
            <div className="rounded-2xl bg-[#04080e] border border-emerald-950 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#070e17] border-b border-emerald-950 text-xs">
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentFeature.slug}_spec.{currentFeature.codeLang}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Spec'}</span>
                </button>
              </div>
              <pre className="p-4 sm:p-5 text-xs font-mono text-emerald-200/90 overflow-x-auto leading-relaxed max-h-96">
                <code>{currentFeature.codeSnippet}</code>
              </pre>
            </div>

            {/* Live Interactive Verification Output Console */}
            <div className="rounded-2xl bg-[#04080e] border border-emerald-950/80 p-4 font-mono text-[11px] text-slate-300 shadow-xl">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-emerald-950/80 text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real-Time Engine Verification Stream</span>
                </span>
                <span className="text-slate-500 text-[10px] uppercase font-bold">{currentFeature.badge}</span>
              </div>
              <div className="space-y-1.5 text-slate-400 max-h-36 overflow-y-auto">
                {simulationLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">❯</span>
                    <span className={index === simulationLogs.length - 1 ? 'text-white' : ''}>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Switch Between All 6 Feature Subpages */}
        <section className="pt-8 border-t border-emerald-950/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Explore All Capabilities</h2>
              <p className="text-xs text-slate-400 mt-0.5">Switch directly to inspect any of the other 5 architectural systems.</p>
            </div>
            <button
              onClick={onNavigateHome}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>View Landing Page Grid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.values(featurePagesData).map((f) => {
              const Icon = f.icon;
              const isCurrent = f.id === currentFeature.id;
              return (
                <button
                  key={f.id}
                  onClick={() => onNavigateToFeature(f.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-500/10 scale-102'
                      : 'bg-[#080f1a] border-emerald-950 text-slate-400 hover:text-white hover:border-emerald-700 hover:bg-[#0a1524]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span className="text-[9px] font-mono uppercase text-emerald-400">{f.badge}</span>
                  </div>
                  <span className="text-xs font-bold leading-tight truncate">{f.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#071322] via-[#091a2d] to-[#071322] border border-emerald-500/40 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Test {currentFeature.title}?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Start your 14-day free trial with full access to this feature, confidential enclaves, and 200+ native stack connectors.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenAuthModal(`Start Free Trial - ${currentFeature.title}`)}
                className="shimmer-trigger px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-lg shadow-emerald-500/25"
              >
                Start 14-Day Free Trial
              </button>
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-[#0e1e32] hover:bg-[#132842] border border-emerald-950 transition-colors cursor-pointer"
              >
                Watch Interactive Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Subpage Footer */}
      <footer className="bg-[#03060a] border-t border-emerald-950/80 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AetherFlow Technologies, Inc. {currentFeature.title} Specifications v2.5</p>
      </footer>
    </div>
  );
};
