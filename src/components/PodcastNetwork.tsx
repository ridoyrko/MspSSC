import { Mic2, CheckCircle2, ExternalLink, Star } from 'lucide-react';

const benefits = [
  '500+ published podcast episodes across the Joey Pinz ecosystem',
  'Reach an audience of over 500,000+ followers and subscribers',
  'Top 2% globally ranked podcast network — credibility by association',
  'One of the top-performing MSP-focused podcast networks available',
  'Our podcast becomes part of our widespread distribution network across all major platforms',
  'Generate millions of Level 0 Visibility opportunities with MSP owners, operators, and decision-makers',
  'Generate thousands of Level 1 Engagement opportunities with decision-makers who are actively listening',
  'Build authority, trust, and familiarity before teams are ready to engage',
];

export default function PodcastNetwork() {
  return (
    <section id="podcast-network" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <Mic2 size={14} />
            Joey Pinz Podcast Network
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Amplify Your Reach Through Podcast
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Why Consider the Joey Pinz Podcast Network?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Benefits List */}
          <div>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 text-brand-green mt-0.5" />
                  <span className="text-gray-600 text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Stats + CTA card */}
          <div className="space-y-6">
            {/* Network Stats */}
            <div className="bg-navy-600 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Network by the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '700+', label: 'Episodes Published' },
                  { value: '500K+', label: 'Followers' },
                  { value: 'Top 2%', label: 'Global Ranking' },
                  { value: '8+', label: 'Distribution Platforms' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold font-heading text-brand-green-light mb-1">{value}</div>
                    <div className="text-white/60 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial-style quote */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed italic mb-4">
                "The Joey Pinz Podcast Network delivers consistent, high-quality MSP-focused content that positions sponsors in front of exactly the right audience — MSP owners and decision-makers who are actively learning and buying."
              </blockquote>
              <div className="text-sm font-semibold text-navy-700">— MSPInfluencer Editorial Team</div>
            </div>

            {/* CTA */}
            <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6">
              <h4 className="font-bold text-navy-700 mb-2">Ready to Join the Network?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Complete the Podcast Network Assessment to explore how a podcast partnership can amplify your brand across the MSP ecosystem.
              </p>
              <a
                href="https://joeypinzconversations.com/network/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <ExternalLink size={16} />
                Complete the Network Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
