import { Target, FileText, Calendar, BarChart2, User } from 'lucide-react';

const partnershipData = [
  {
    icon: Target,
    label: 'Success Goal',
    value: 'Brand Awareness',
    detail: 'Primary program objective',
  },
  {
    icon: FileText,
    label: 'Agreement',
    value: 'Level 0 + Level 1 & 2',
    detail: 'Visibility + Engagement + Declared Interest',
  },
  {
    icon: Calendar,
    label: 'Sponsor Since',
    value: 'Jan 2026',
    detail: 'Active sponsorship start date',
  },
  {
    icon: BarChart2,
    label: 'Signals Per Month',
    value: '500',
    detail: 'Contracted monthly signal volume',
  },
  {
    icon: User,
    label: 'Persona',
    value: 'Cautious Cat',
    detail: 'Continue full engagement strategy',
  },
];

export default function YourPartnership() {
  return (
    <section id="your-partnership" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <FileText size={14} />
            Program Overview
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Your Partnership
          </h2>
          <p className="text-gray-500 text-lg">
            Your Program. Your Goals. Our Partnership.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {partnershipData.map(({ icon: Icon, label, value, detail }) => (
            <div
              key={label}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-card-hover hover:border-navy-200 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-navy-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors duration-200">
                <Icon size={22} className="text-white" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                {label}
              </div>
              <div className="text-lg font-bold text-navy-700 leading-tight mb-1">
                {value}
              </div>
              <div className="text-xs text-gray-400 leading-snug">{detail}</div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-10 p-5 bg-navy-50 rounded-xl border border-navy-100 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <p className="text-navy-700 text-sm leading-relaxed">
            Your sponsorship is delivering across all three signal tiers — Visibility, Engagement, and Declared Interest —
            which represents the full buyer journey from awareness to purchase intent. This multi-level coverage is the
            foundation of a high-performing MSP sponsorship.
          </p>
        </div>
      </div>
    </section>
  );
}
