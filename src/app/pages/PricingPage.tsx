import { Check, X, ChevronDown, Calculator, Shield, Lock, Award } from 'lucide-react';
import { useState } from 'react';

export function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is pricing calculated?',
      answer: 'Pricing is based on your turnover and the number of active customers in your system. An active customer is one who has made at least one purchase in the last 24 months.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What counts as an active customer?',
      answer: 'An active customer is defined as any customer account that has completed at least one transaction in the past 24 months.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees. We include onboarding and implementation support with all plans at no additional cost.'
    },
    {
      question: 'Do you offer discounts for multiple locations?',
      answer: 'Yes, we offer volume discounts for multi-location distributors. Contact our sales team to discuss enterprise pricing.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, direct debit, and bank transfers for annual subscriptions.'
    }
  ];

  const featureComparison = [
    {
      category: 'Customer Management',
      features: [
        { name: 'Active customers', starter: '500', growth: '2,500', enterprise: 'Unlimited' },
        { name: 'User seats included', starter: '3', growth: '7', enterprise: 'Unlimited' },
        { name: 'Additional user seats', starter: '£49/mo', growth: '£39/mo', enterprise: 'Included' }
      ]
    },
    {
      category: 'Analytics & Insights',
      features: [
        { name: 'Share of wallet calculations', starter: true, growth: true, enterprise: true },
        { name: 'Category breakdowns', starter: true, growth: true, enterprise: true },
        { name: 'Historical trend tracking', starter: true, growth: true, enterprise: true },
        { name: 'Multi-branch analytics', starter: false, growth: true, enterprise: true },
        { name: 'Advanced reporting', starter: false, growth: true, enterprise: true },
        { name: 'Custom dashboards', starter: false, growth: false, enterprise: true }
      ]
    },
    {
      category: 'Recommendations',
      features: [
        { name: 'Next-best offers', starter: true, growth: true, enterprise: true },
        { name: 'Customer prioritization', starter: true, growth: true, enterprise: true },
        { name: 'Project intelligence', starter: false, growth: true, enterprise: true }
      ]
    },
    {
      category: 'Content & Marketing',
      features: [
        { name: 'AI email generation', starter: false, growth: true, enterprise: true },
        { name: 'AI image generation', starter: false, growth: true, enterprise: true },
        { name: 'AI video generation', starter: false, growth: false, enterprise: true },
        { name: 'Social media content', starter: false, growth: true, enterprise: true }
      ]
    },
    {
      category: 'Support & Services',
      features: [
        { name: 'Email support', starter: true, growth: true, enterprise: true },
        { name: 'Priority support', starter: false, growth: true, enterprise: true },
        { name: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
        { name: 'Custom onboarding', starter: false, growth: false, enterprise: true },
        { name: 'SLA guarantee', starter: false, growth: false, enterprise: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto text-center">
            <h1
              className="mb-6"
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#1e293b',
                lineHeight: '1.1'
              }}
            >
              Plans that grow with your business
            </h1>
            <p
              className="mb-10"
              style={{
                fontSize: '20px',
                color: '#4b5563',
                lineHeight: '1.6'
              }}
            >
              Transparent pricing based on your turnover and customer base. No hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full p-2 shadow-md">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className="rounded-full transition-all"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: billingPeriod === 'monthly' ? '#ffffff' : '#374151',
                  backgroundColor: billingPeriod === 'monthly' ? '#1e3a8a' : 'transparent',
                  padding: '10px 24px'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className="rounded-full transition-all flex items-center gap-2"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: billingPeriod === 'annual' ? '#ffffff' : '#374151',
                  backgroundColor: billingPeriod === 'annual' ? '#1e3a8a' : 'transparent',
                  padding: '10px 24px'
                }}
              >
                Annual
                <span
                  className="px-2 py-0.5 rounded-full"
                  style={{
                    fontSize: '12px',
                    backgroundColor: '#10b981',
                    color: '#ffffff'
                  }}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16 -mt-8">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 px-8 py-6">
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a', marginBottom: '12px' }}>
                  Starter
                </div>
                <div className="flex items-baseline gap-2">
                  <span style={{ fontSize: '56px', fontWeight: '700', color: '#1e3a8a' }}>
                    £{billingPeriod === 'annual' ? '1799' : '1999'}
                  </span>
                  <span style={{ fontSize: '20px', color: '#6b7280' }}>/month</span>
                </div>
                {billingPeriod === 'annual' && (
                  <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>
                    or £1749 monthly by Direct Debit
                  </div>
                )}
              </div>

              <div className="p-8">
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px', minHeight: '60px' }}>
                  Perfect for single-location merchants getting started with customer analytics
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Up to 500 active customers',
                    'Share of wallet calculations',
                    'Customer prioritisation',
                    'Next-best offer recommendations',
                    'Email support',
                  
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: '14px', color: '#374151' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-colors"
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '14px 32px'
                  }}
                >
                  Start Free Trial
                </button>

                <p style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', marginTop: '12px' }}>
                  14-day free trial, no credit card required
                </p>
              </div>
            </div>

            {/* Growth Plan (Popular) */}
            <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-[#1e3a8a] overflow-hidden">
              {/* Popular Badge */}
              <div
                className="absolute top-6 right-6 px-3 py-1 rounded-full"
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  letterSpacing: '0.5px'
                }}
              >
                MOST POPULAR
              </div>

              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] px-8 py-6">
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
                  Growth
                </div>
                <div className="flex items-baseline gap-2">
                  <span style={{ fontSize: '56px', fontWeight: '700', color: '#ffffff' }}>
                    £{billingPeriod === 'annual' ? '2399' : '2949'}
                  </span>
                  <span style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.8)' }}>/month</span>
                </div>
                {billingPeriod === 'annual' && (
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '8px' }}>
                    or £2950 monthly by Direct Debit
                  </div>
                )}
              </div>

              <div className="p-8">
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px', minHeight: '60px' }}>
                  For growing merchants ready to maximize customer revenue
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Up to 4,500 active customers',
                    'All Starter features, plus:',
                    'Content generation (text & images)',
                    'Project intelligence tracking',
                    'Multi-branch analytics',
                    'Advanced reporting',
                    'Priority support',,
                    'Custom integrations'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: '14px', color: '#374151', fontWeight: idx === 1 ? '600' : '400' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors shadow-md hover:shadow-lg"
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '14px 32px'
                  }}
                >
                  Start Free Trial
                </button>

                <p style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', marginTop: '12px' }}>
                  14-day free trial, no credit card required
                </p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 px-8 py-6">
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a', marginBottom: '12px' }}>
                  Enterprise
                </div>
                <div className="flex items-baseline gap-2">
                  <span style={{ fontSize: '56px', fontWeight: '700', color: '#1e3a8a' }}>
                    Custom
                  </span>
                  <span style={{ fontSize: '20px', color: '#6b7280' }}>Pricing</span>
                </div>
              </div>

              <div className="p-8">
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px', minHeight: '60px' }}>
                  For multi-location distributors with advanced needs
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Unlimited customers',
                    'All Growth features, plus:',
                    'Video content generation',
                    'White-label options',
                    'API access',
                    'Dedicated account manager',
                    'Custom onboarding & training',
                    'Unlimited user seats',
                    'SLA guarantee',
                    'Advanced security & compliance'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: '14px', color: '#374151', fontWeight: idx === 1 ? '600' : '400' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-colors"
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '14px 32px'
                  }}
                >
                  Contact Sales
                </button>

                <p style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', marginTop: '12px' }}>
                  Custom contract and implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Callout */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
            <Calculator className="w-12 h-12 text-[#3b82f6] mx-auto mb-6" />
            <h2
              className="mb-4"
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1e293b'
              }}
            >
              Not sure which plan is right?
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: '18px',
                color: '#6b7280'
              }}
            >
              Use our ROI calculator to see your potential return
            </p>

            <div className="bg-gradient-to-br from-[#f9fafb] to-white rounded-xl p-8 mb-8">
              <p
                style={{
                  fontSize: '16px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                With <span style={{ fontWeight: '700', color: '#1e3a8a' }}>1,200 customers</span> at{' '}
                <span style={{ fontWeight: '700', color: '#1e3a8a' }}>£15K</span> average annual spend,
                your potential opportunity is{' '}
                <span style={{ fontSize: '24px', fontWeight: '700', color: '#10b981' }}>£2.1M</span>
              </p>
            </div>

            <button
              className="bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors shadow-md hover:shadow-lg"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Calculate Your ROI
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6b7280] transition-transform ${
                      expandedFAQ === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-5">
                    <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <p
              className="mb-8"
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1e3a8a',
                fontStyle: 'italic'
              }}
            >
              "The ROI paid for itself in the first month"
            </p>
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Shield, label: 'GDPR Compliant' },
              { icon: Lock, label: 'SOC 2 Certified' },
              { icon: Award, label: 'ISO 27001' }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-[#10b981]" />
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#374151' }}>
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#ffffff'
            }}
          >
            Ready to start growing?
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Join 200+ distributors using share of wallet to grow revenue
          </p>

          <button
            className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all mb-6"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            Start Your Free 14-Day Trial
          </button>

          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            No credit card required • Cancel anytime • Setup in minutes
          </p>
        </div>
      </div>
    </div>
  );
}
