import { Star } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
  {
    quote:
      "This tool has completely changed how we approach account management. We've identified over £200K in missed opportunities in just 3 months.",
    initials: 'GB',
    name: 'Graeme Bennison',
    title: 'Operations Director',
    company: 'Gardner & Scardifield',
  },
  {
    quote:
      'Understands data and its powers to an incredible level, but more crucially understands ways to unlock the potential of data to drive business strategy.',
    initials: 'JM',
    name: 'Julie McLean',
    title: 'UK Marketing Director',
    company: 'Hansgrohe',
  },
];

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  const testimonial = TESTIMONIALS[active];

  return (
    <section className="w-full bg-white py-[100px]">
      <div className="max-w-[900px] mx-auto px-8">
        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg p-12">
          {/* 5-star rating */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, idx) => (
              <Star
                key={idx}
                className="w-6 h-6 fill-[#f59e0b] text-[#f59e0b]"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className="text-center mb-10"
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#111827',
              lineHeight: '1.6'
            }}
          >
            "{testimonial.quote}"
          </blockquote>

          {/* Customer Profile */}
          <div className="flex items-center justify-center gap-4">
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] flex items-center justify-center"
            >
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#ffffff'
                }}
              >
                {testimonial.initials}
              </span>
            </div>

            {/* Info */}
            <div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                {testimonial.name}
              </div>
              <div style={{ fontSize: '14px', color: '#4b5563' }}>
                {testimonial.title}
              </div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                {testimonial.company}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === active
                    ? 'w-8 h-2 bg-[#1e3a8a]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 cursor-pointer'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
