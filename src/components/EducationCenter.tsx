import { BookOpen, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const resources = [
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/MSP-Signals-Concept-Explainable.png?fit=300%2C300&ssl=1',
    title: 'MSP Signals Concept Explained',
    description: 'Understand the foundational theory behind how MSP buying signals are detected, categorized, and measured across the ecosystem.',
    icon: Lightbulb,
  },
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/MSP-Signals-Behavior-Correctors.png?fit=300%2C300&ssl=1',
    title: 'MSP Signals Behavior Correctors',
    description: 'Learn how to diagnose signal quality and apply corrective strategies when engagement patterns indicate friction or misalignment.',
    icon: TrendingUp,
  },
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/Persona-Behavior.png?fit=300%2C300&ssl=1',
    title: 'Persona Behavior Guide',
    description: 'Decode the Cautious Cat and other MSP buyer personas — their decision patterns, hesitations, and what moves them toward commitment.',
    icon: BookOpen,
  },
];

export default function EducationCenter() {
  return (
    <section id="education-center" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <BookOpen size={14} />
            MSP Signals Education Center
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Learn. Apply. Grow.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Deep-dive resources to help you understand MSP buying behavior, optimize your sponsorship, and convert signals into real pipeline opportunities.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map(({ imgSrc, title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-card-hover hover:border-navy-200 transition-all duration-200 group flex flex-col"
            >
              {/* Image */}
              <div className="bg-white p-6 flex items-center justify-center border-b border-gray-100">
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-52 h-52 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy-700 text-base leading-tight">{title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle CTA strip */}
        <div className="mt-12 bg-navy-600 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Ready to put education into action?</h3>
            <p className="text-white/70 text-sm">Your Playbooks section translates these concepts into step-by-step guidance.</p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#playbooks');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-navy-700 font-semibold px-6 py-3 rounded-lg hover:bg-navy-50 transition-colors whitespace-nowrap"
          >
            View Playbooks
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
