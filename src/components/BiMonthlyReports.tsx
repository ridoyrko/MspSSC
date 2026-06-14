import { FileBarChart, ExternalLink, Calendar, ChevronRight } from 'lucide-react';

const reports = [
  {
    title: 'XXX2 Report',
    date: 'June 1, 2026',
    href: 'https://mspinfluencer.com/ssc/xxx2-report-6-1-26/',
    badge: 'Latest',
    description: 'Full bi-monthly performance snapshot including all three signal tiers.',
  },
  {
    title: 'XXX1 Report',
    date: 'June 1, 2026',
    href: 'https://mspinfluencer.com/ssc/xxx1-report-6-1-26/',
    badge: null,
    description: 'Mid-cycle analysis of visibility reach and engagement behavior patterns.',
  },
  {
    title: 'XXX Report',
    date: 'June 1, 2026',
    href: 'https://mspinfluencer.com/ssc/xxx-report-6-1-26/',
    badge: null,
    description: 'Baseline program report covering initial sponsorship period performance.',
  },
];

export default function BiMonthlyReports() {
  return (
    <section id="reports" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <FileBarChart size={14} />
            Performance Reporting
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Bi-Monthly Reports
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tracking Visibility, Engagement, and Declared Interest Over Time
          </p>
        </div>

        {/* Reports List */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {reports.map((report) => (
            <a
              key={report.href}
              href={report.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-card-hover hover:border-navy-200 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-navy-50 rounded-lg flex items-center justify-center group-hover:bg-navy-600 transition-colors duration-200">
                    <FileBarChart size={20} className="text-navy-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-navy-700 group-hover:text-navy-900 transition-colors">
                        {report.title}
                      </span>
                      {report.badge && (
                        <span className="bg-brand-green text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          {report.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                      <Calendar size={12} />
                      {report.date}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{report.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 text-navy-400 group-hover:text-navy-600 group-hover:translate-x-1 transition-all duration-200">
                  <ChevronRight size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://mspinfluencer.com/ssc/xxx2-report-6-1-26/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <ExternalLink size={16} />
            View Latest Report
          </a>
        </div>
      </div>
    </section>
  );
}
