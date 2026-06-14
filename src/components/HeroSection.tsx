import { TrendingUp, Users, Eye, ExternalLink, ChevronDown } from 'lucide-react';

const highlights = [
  { icon: Eye, label: 'Total Visibility Views', value: '17,106+' },
  { icon: TrendingUp, label: 'Engagement Signals', value: '78,795+' },
  { icon: Users, label: 'Decision-Maker Exposure', value: '5,849+' },
];

export default function HeroSection() {
  const handleScrollDown = () => {
    const target = document.querySelector('#lifetime-momentum');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-brand-green to-transparent" />

      <div className="section-container relative">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-green-light rounded-full animate-pulse" />
            Sponsor Success Center — Cogent Growth
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your MSP Sponsorship.<br />
            <span className="text-brand-green-light">Measured. Optimized.</span><br />
            Results-Driven.
          </h1>

          {/* Sub-headline */}
          <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-4 max-w-2xl">
            Since joining MSPInfluencer in January 2026, Cogent Growth has demonstrated consistent momentum across
            Visibility, Engagement, and Declared Interest Signals — proving continued MSP awareness,
            curiosity, and buyer intent progression.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
            Your Sponsor Success Center is the single source of truth for everything your sponsorship is generating
            — from banner impressions to declared purchase intent.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://mspinfluencer.com/ssc/xxx2-report-6-1-26/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              <ExternalLink size={18} />
              View Latest Report
            </a>
            <button
              onClick={handleScrollDown}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-base"
            >
              Explore Your Dashboard
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white/10 border border-white/15 rounded-xl px-6 py-5 flex items-center gap-4 backdrop-blur-sm">
              <div className="flex-shrink-0 w-11 h-11 bg-brand-green/20 rounded-lg flex items-center justify-center">
                <Icon size={22} className="text-brand-green-light" />
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-white leading-none">{value}</div>
                <div className="text-white/60 text-sm mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
