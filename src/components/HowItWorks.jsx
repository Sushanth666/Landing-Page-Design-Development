import React, { useState } from 'react';
import { 
  Plug, 
  SlidersHorizontal, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  ShieldAlert
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
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Setup to Autonomous Delivery in Four Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            No endless configuration scripts or complicated machine learning pipelines. AetherFlow integrates seamlessly into your existing habits.
          </p>
        </div>

        {/* Step Navigation Cards */}
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
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/15 -translate-y-1'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    STEP {s.step}
                  </span>
                  <StepIcon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                </div>
                <h3 className={`text-base font-bold mb-1.5 line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Description & Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30 cursor-pointer"
                >
                  <span>Experience This Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Right Column: Step Visual Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <CurrentIcon className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-bold text-white">{currentStepData.preview.title}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Live System Simulation
                  </span>
                </div>

                {/* Conditional Visuals for each Step */}
                {activeStep === 0 && (
                  <div className="space-y-3">
                    {currentStepData.preview.content.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
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
                      <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ShieldAlert className="w-4 h-4 text-amber-400" />
                          <span className="text-sm font-medium text-slate-200">{item.rule}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-2.5 font-mono text-xs">
                    {currentStepData.preview.log.map((line, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-300">
                        {line}
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentStepData.preview.metrics.map((metric, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                        <span className="text-xs text-slate-400 block mb-1">{metric.label}</span>
                        <span className="text-2xl font-bold text-white block">{metric.value}</span>
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
