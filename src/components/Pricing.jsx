import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight, HelpCircle } from 'lucide-react';

export const Pricing = ({ onOpenAuthModal, onShowToast }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Developer',
      badge: 'Free Forever',
      description: 'Ideal for independent engineers and hobbyists exploring AI-driven workflows.',
      priceMonthly: 0,
      priceAnnual: 0,
      popular: false,
      features: [
        'Up to 3 Autonomous Agents',
        '1,000 workflow executions / mo',
        'Standard GitHub & Slack integrations',
        'Community Discord support',
        'Single workspace seat',
        '7-day execution audit log',
      ],
      ctaText: 'Get Started Free',
      ctaStyle: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    },
    {
      id: 'pro',
      name: 'Pro Team',
      badge: 'Most Popular',
      description: 'Engineered for fast-shipping product and DevOps teams scaling velocity.',
      priceMonthly: 29,
      priceAnnual: 23,
      popular: true,
      features: [
        'Unlimited Autonomous Agents',
        '50,000 workflow executions / mo',
        '200+ native connectors (Linear, Jira, AWS)',
        'Self-healing runbooks & auto-rollback',
        'Predictive bottleneck telemetry',
        'Up to 10 team workspace seats',
        '90-day execution log & analytics',
        'Priority 24/7 Slack & email support',
      ],
      ctaText: 'Start 14-Day Pro Trial',
      ctaStyle: 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/30',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Scale',
      badge: 'Custom Governance',
      description: 'For mature organizations requiring dedicated isolation, SSO, and strict SLAs.',
      priceMonthly: 99,
      priceAnnual: 79,
      popular: false,
      features: [
        'Dedicated private agent clusters',
        'Unlimited workflow executions',
        'Custom private LLM endpoints (Bring Your Own Key)',
        'SOC2 Type II, HIPAA & GDPR compliance vault',
        'SAML SSO & fine-grained RBAC permissions',
        'Unlimited team seats & audit archiving',
        '99.99% guaranteed uptime SLA',
        'Dedicated solutions engineer & private Slack channel',
      ],
      ctaText: 'Contact Enterprise Sales',
      ctaStyle: 'bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 hover:border-slate-600',
    },
  ];

  const faqs = [
    {
      q: 'Can I cancel or change plans at any time?',
      a: 'Yes, absolutely. You can upgrade, downgrade, or cancel your subscription at any moment without penalty. Changes take effect on your next billing cycle.',
    },
    {
      q: 'Do you offer a free trial for the Pro plan?',
      a: 'Yes! We provide a 14-day fully featured free trial with zero credit card required upfront. You can test all capabilities with your actual team stack.',
    },
    {
      q: 'How does PulseAI handle codebase privacy and security?',
      a: 'PulseAI operates on zero-retention principles. Your source code and internal data are never used to train public models and are processed inside isolated encrypted enclaves.',
    },
    {
      q: 'What happens if we exceed our monthly executions?',
      a: 'We never hard-stop critical production workflows. You will receive an alert at 80% usage, and can easily top up or enable auto-scaling overage at pennies per 1,000 jobs.',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Plans for Every Stage of Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Start for free, scale as your team velocity compounds. No surprise invoices, hidden charges, or vendor lock-in.
          </p>

          {/* Billing Switch Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-900 border border-slate-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                !isAnnual ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isAnnual ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-400">
                      {price === 0 ? '/ forever' : `/ user / month`}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-6 border-t border-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Everything included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-8 pt-6">
                  <button
                    onClick={() => {
                      onShowToast('Selected Plan', `You chose the ${plan.name} (${isAnnual ? 'Annual' : 'Monthly'}) plan.`);
                      onOpenAuthModal(`Subscribe to ${plan.name}`);
                    }}
                    className={`w-full py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${plan.ctaStyle}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    {plan.priceMonthly === 0 ? 'Instant setup • No card required' : '14-day free trial • Cancel anytime'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded FAQ Accordion for Conversion Readiness */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1.5">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
