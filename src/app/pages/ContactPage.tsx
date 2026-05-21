import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { GreenCheckIcon } from '../components/icons/GreenCheckIcon';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Demo Request from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:info@palmai.io?subject=${subject}&body=${body}`;
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
              Book a demo or get in touch with our team to learn how ShareofWallet.co.uk can help your business grow.
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
                        Palm AI Limited t/a ShareofWallet.co.uk<br />
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
                  Fill out the form below and we'll get back to you within 24 hours to schedule your personalised demo.
                </p>

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

                  <Button
                    type="submit"
                    className="w-full bg-[#1e3a8a] hover:bg-[#2d4ba6] text-white"
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      padding: '24px'
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Demo Request
                  </Button>

                  <p
                    className="text-center"
                    style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}
                  >
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
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
            Why Choose ShareofWallet.co.uk?
          </h2>
          <p
            className="mb-12 max-w-[700px] mx-auto"
            style={{
              fontSize: '18px',
              color: '#6b7280'
            }}
          >
            Join leading merchants who are already transforming their customer relationships with our ShareofWallet platform.
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
              'Works seamlessly with your existing ERP system—no complex integration required'
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