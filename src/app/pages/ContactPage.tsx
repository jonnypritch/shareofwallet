import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { GreenCheckIcon } from '../components/icons/GreenCheckIcon';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h1
              className="mb-6"
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#1e293b',
                lineHeight: '1.1'
              }}
            >
              Get in Touch
            </h1>
            <p
              className="max-w-[700px] mx-auto"
              style={{
                fontSize: '20px',
                color: '#4b5563',
                lineHeight: '1.6'
              }}
            >
              Book a demo or get in touch with our team to learn how Palm AI can help your business grow.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="mb-8"
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#1e293b'
                  }}
                >
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3b82f6] bg-opacity-10 rounded-lg p-3">
                      <MapPin className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280', marginBottom: '4px' }}>
                        Address
                      </div>
                      <div style={{ fontSize: '16px', color: '#1e293b', lineHeight: '1.5' }}>
                        Palm AI Limited<br />
                        71-75 Shelton Street<br />
                        London, WC2H 9JQ
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3b82f6] bg-opacity-10 rounded-lg p-3">
                      <Phone className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280', marginBottom: '4px' }}>
                        Phone
                      </div>
                      <a 
                        href="tel:+442080589295"
                        style={{ fontSize: '16px', color: '#1e293b' }}
                        className="hover:text-[#3b82f6] transition-colors"
                      >
                        +44 (0)208 058 9295
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3b82f6] bg-opacity-10 rounded-lg p-3">
                      <Mail className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280', marginBottom: '4px' }}>
                        Email
                      </div>
                      <a 
                        href="mailto:info@palmai.io"
                        style={{ fontSize: '16px', color: '#1e293b' }}
                        className="hover:text-[#3b82f6] transition-colors"
                      >
                        info@palmai.io
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3b82f6] bg-opacity-10 rounded-lg p-3">
                      <Linkedin className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280', marginBottom: '4px' }}>
                        LinkedIn
                      </div>
                      <a 
                        href="https://www.linkedin.com/company/palm-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '16px', color: '#1e293b' }}
                        className="hover:text-[#3b82f6] transition-colors"
                      >
                        linkedin.com/company/palm-ai
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-8 text-white">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '20px',
                    fontWeight: '700'
                  }}
                >
                  Business Hours
                </h3>
                <div className="space-y-2" style={{ fontSize: '16px', opacity: 0.9 }}>
                  <div>Monday - Friday: 9:00 - 17:30</div>
                  <div>Saturday - Sunday: Closed</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2
                  className="mb-2"
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#1e293b'
                  }}
                >
                  Book a Demo
                </h2>
                <p
                  className="mb-8"
                  style={{
                    fontSize: '16px',
                    color: '#6b7280'
                  }}
                >
                  Fill out the form below and we'll get back to you shortly — or use the booking link in our reply to pick a time yourself.
                </p>

                {submitState === 'success' ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <CheckCircle2 className="w-12 h-12 text-[#10b981] mb-4" />
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                      Message sent
                    </h3>
                    <p style={{ fontSize: '15px', color: '#6b7280', maxWidth: '360px' }}>
                      Check your inbox — we've sent a reply with a link to book a call directly, or we'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.co.uk"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business and what you'd like to learn more about..."
                        rows={5}
                      />
                    </div>

                    {submitState === 'error' && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p style={{ fontSize: '14px', color: '#991b1b' }}>
                          Something went wrong sending your message. Please try again, or email us directly at{' '}
                          <a href="mailto:info@palmai.io" className="underline">info@palmai.io</a>.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className="w-full bg-[#1e3a8a] hover:bg-[#2d4ba6] text-white disabled:opacity-60"
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        padding: '24px'
                      }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {submitState === 'submitting' ? 'Sending...' : 'Send Demo Request'}
                    </Button>

                    <p
                      className="text-center"
                      style={{
                        fontSize: '14px',
                        color: '#6b7280'
                      }}
                    >
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <div className="py-20 bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            Why Choose Palm AI?
          </h2>
          <p
            className="mb-12 max-w-[700px] mx-auto"
            style={{
              fontSize: '18px',
              color: '#6b7280'
            }}
          >
            Join the merchants already transforming their customer relationships with Palm AI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Built by merchants, for merchants. We understand your business inside out.'
              },
              {
                title: 'Rapid Deployment',
                description: 'Get up and running quickly with seamless integration into your existing systems.'
              },
              {
                title: 'Proven Results',
                description: 'Track record of delivering measurable growth in wallet share and customer retention.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
                <h3
                  className="mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1e293b'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {[
              'Identifies cross-selling and upselling opportunities specific to needs of the different trades',
              'Highlights customers at risk of switching before they stop purchasing',
              'Delivers actionable insights directly to branch staff and sales teams in an easy-to-understand format',
              'Links intelligently to your ERP system, where it supports it — no rip-and-replace required'
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <GreenCheckIcon className="w-5 h-5" />
                </div>
                <span style={{ fontSize: '16px', color: '#374151', lineHeight: '1.5' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
