import { ArrowRight, TrendingUp, ExternalLink } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-700 via-navy-600 to-brand-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="section-container relative text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <TrendingUp size={14} className="text-brand-green-light" />
          Maximize Your Sponsorship ROI
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-5 max-w-3xl mx-auto leading-tight">
          Your Signals Are Working.<br />
          <span className="text-brand-green-light">Let's Accelerate the Results.</span>
        </h2>

        <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          With 78,795 engagement signals and 12 declared interest signals already generated, your sponsorship is
          building real pipeline momentum. Now is the time to review performance, optimize your strategy, and
          ensure every signal converts into revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://mspinfluencer.com/ssc/xxx2-report-6-1-26/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
          >
            <ExternalLink size={18} />
            View Latest Report
          </a>
          <a
            href="https://joeypinzconversations.com/network/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base w-full sm:w-auto justify-center"
          >
            Explore Podcast Network
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '17,106+', label: 'Total Visibility Views' },
            { value: '78,795', label: 'Engagement Signals' },
            { value: '12', label: 'Declared Interest Signals' },
            { value: 'Jan 2026', label: 'Active Since' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold font-heading text-white mb-1">{value}</div>
              <div className="text-white/50 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
