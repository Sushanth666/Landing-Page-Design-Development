import React, { useState } from 'react';
import { 
  Plug, 
  SlidersHorizontal, 
  Cpu, 
  Rocket, 
  ArrowRight,
  ShieldAlert,
  Network
} from 'lucide-react';

export const HowItWorks = ({ onShowToast, onOpenAuthModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Connect Your Stack in 60 Seconds',
      description: 'Plug in GitHub, GitLab, Jira, Linear, Slack, and cloud providers with native 1-click OAuth authentication. No complex YAML boilerplate.',
      icon: Plug,
      badge: 'Zero Configuration',
      preview: {
        title: 'Unified Stack Authentication',
        subtitle: 'Secure OAuth v2.0 handshake verified across 6 services',
        content: [
          { name: 'GitHub Enterprise', status: 'Connected', ping: '12ms' },
          { name: 'Linear Workspace', status: 'Connected', ping: '18ms' },
          { name: 'Slack Channels', status: 'Connected', ping: '9ms' },
          { name: 'AWS CloudWatch', status: 'Connected', ping: '24ms' },
        ],
      },
    },
    {
      step: '02',
      title: 'Define Guardrails & Operational Goals',
      description: 'Establish team guidelines, code quality gates, and data privacy boundaries using plain natural language or ready-to-use blueprints.',
      icon: SlidersHorizontal,
      badge: 'Policy Engine',
      preview: {
        title: 'Active Governance Policies',
        subtitle: 'Auto-enforced at every commit and trigger event',
        content: [
          { rule: 'Zero PII leak policy', status: 'Active (Strict)' },
          { rule: 'Mandatory Unit Test Coverage > 85%', status: 'Enforced' },
          { rule: 'Auto-rollback on 5xx spike > 0.05%', status: 'Armed' },
        ],
      },
    },
    {
      step: '03',
      title: 'Autonomous Agents Coordinate & Execute',
      description: 'Your autonomous agent swarm runs 24/7—reviewing code changes, diagnosing runtime issues, summarizing incidents, and automating Jira updates.',
      icon: Cpu,
      badge: 'Agent Mesh',
      preview: {
        title: 'Autonomous Execution Log',
        subtitle: 'PR #418 triage & AST static analysis completed',
        log: [
          '⚡ [Agent-1] Analyzing 14 modified TypeScript files...',
          '✓ [Agent-2] Generated 6 automated edge-case unit tests',
          '✓ [Agent-3] Synced progress to Linear ticket #ENG-904',
          '✓ [Agent-4] Ready for 1-click merge approval',
        ],
      },
    },
    {
      step: '04',
      title: 'Analyze Velocity & Scale Confidently',
      description: 'Review actionable sprint insights, track team velocity gains, and watch engineering lead times drop dramatically sprint over sprint.',
      icon: Rocket,
      badge: 'Continuous ROI',
      preview: {
        title: 'Sprint Telemetry Summary',
        subtitle: 'Cycle time reduction across Sprint 42',
        metrics: [
          { label: 'PR Turnaround', value: '1.4 hours', change: '-74%' },
          { label: 'Incident MTTR', value: '4.2 minutes', change: '-88%' },
          { label: 'Saved Dev Hours', value: '186 hrs / mo', change: '+320%' },
        ],
      },
    },
  ];

  const currentStepData = steps[activeStep];
  const CurrentIcon = currentStepData.icon;

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#05090f]/75 border-t border-emerald-950/60">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none animate-aurora-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4 animate-pulse">
            <Network className="w-3.5 h-3.5 animate-spin-slow" />
            <span className="font-aurora font-float">HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="font-shimmer font-hover-expand inline-block">From Setup to Autonomous Delivery in</span>{' '}
            <span className="font-aurora font-hover-expand inline-block">Four Simple Steps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            No endless configuration scripts or complicated machine learning pipelines. AetherFlow integrates seamlessly into your existing habits.
          </p>
        </div>

        {/* Step Navigation Cards with Spring animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((s, idx) => {
            const StepIcon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => {
                  setActiveStep(idx);
                  onShowToast(`Step ${s.step}`, s.title);
                }}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer group ${
                  isActive
                    ? 'bg-[#0f1d2b] border-emerald-400 shadow-xl shadow-emerald-500/20 -translate-y-2'
                    : 'bg-[#09121d] border-emerald-950 hover:border-emerald-800 hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md transition-all ${
                    isActive ? 'bg-emerald-500 text-slate-950 font-bold scale-105' : 'bg-[#0d1a29] text-slate-400'
                  }`}>
                    STEP {s.step}
                  </span>
                  <StepIcon className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'text-emerald-400 scale-110 rotate-6' : 'text-slate-400 group-hover:text-emerald-300'
                  }`} />
                </div>
                <h3 className={`text-base font-bold mb-1.5 line-clamp-1 transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {s.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Showcase for Active Step */}
        <div className="rounded-3xl border border-emerald-950 bg-[#080f1a]/95 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Description & Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-400 border border-emerald-500/20 animate-pulse">
                <span>{currentStepData.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentStepData.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {currentStepData.description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onOpenAuthModal(`Start Step ${currentStepData.step}`)}
                  className="shimmer-trigger inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  <span>Experience This Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-[#0d1a29] hover:bg-[#122438] hover:border-emerald-700 transition-all cursor-pointer border border-emerald-950 active:scale-95"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Right Column: Step Visual Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-emerald-950 bg-[#060b13] p-5 sm:p-6 shadow-inner animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-emerald-950 mb-5">
                  <div className="flex items-center gap-2">
                    <CurrentIcon className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-sm font-bold text-white">{currentStepData.preview.title}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Live Simulation
                  </span>
                </div>

                {/* Conditional Visuals for each Step with animated components */}
                {activeStep === 0 && (
                  <div className="space-y-3">
                    {currentStepData.preview.content.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#09121d] border border-emerald-950 hover:border-emerald-600 transition-all hover:translate-x-1">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                          <span className="text-sm font-medium text-slate-200">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-slate-400">{item.ping}</span>
                          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-3">
                    {currentStepData.preview.content.map((item, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#09121d] border border-emerald-950 flex items-center justify-between hover:border-emerald-600 transition-all hover:translate-x-1">
                        <div className="flex items-center gap-3">
                          <ShieldAlert className="w-4 h-4 text-amber-400" />
                          <span className="text-sm font-medium text-slate-200">{item.rule}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-2.5 font-mono text-xs">
                    {currentStepData.preview.log.map((line, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-[#09121d] border border-emerald-950 text-slate-300 hover:text-emerald-300 transition-colors">
                        {line}
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentStepData.preview.metrics.map((metric, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[#09121d] border border-emerald-950 text-center hover:border-emerald-500/50 hover:scale-105 transition-all">
                        <span className="text-xs text-slate-400 block mb-1">{metric.label}</span>
                        <span className="text-2xl font-bold text-white block font-mono">{metric.value}</span>
                        <span className="text-xs font-semibold text-emerald-400 block mt-1">{metric.change}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
