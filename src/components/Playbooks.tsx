import { BookMarked, Download, ArrowRight } from 'lucide-react';

const playbooks = [
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/5-AI-Prompts-We-Can-Use-With-Level-1-Engagement-Signals-1-no-Animla.png?fit=500%2C500&ssl=1',
    title: '5 AI Prompts We Can Use With Level 1 Engagement Signals',
    description: 'Use AI to interpret and act on engagement data in real time.',
  },
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/7-Mistakes-Vendors-Make-After-Receiving-MSP-Signals.png?fit=500%2C500&ssl=1',
    title: '7 Mistakes Vendors Make After Receiving MSP Signals',
    description: 'Avoid the most common errors that waste high-intent signal opportunities.',
  },
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/5-Things-To-Do-Immediately-After-Receiving-a-Declared-Interest-Signal.png?fit=500%2C500&ssl=1',
    title: '5 Things To Do Immediately After Receiving a Declared Interest Signal',
    description: 'A rapid-response checklist to capitalize on Level 2 signals quickly.',
  },
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/7-Ways-to-Increase-Visibility-Signals-Across-the-MSP-Market.png?fit=500%2C500&ssl=1',
    title: '7 Ways to Increase Visibility Signals Across the MSP Market',
    description: 'Expand your Level 0 reach and maximize banner and content exposure.',
  },
  {
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/7-Things-Engagement-Signals-Tell-You-About-MSP-Buying-Behavior.png?fit=500%2C500&ssl=1',
    title: '7 Things Engagement Signals Tell You About MSP Buying Behavior',
    description: 'Decode what Level 1 activity reveals about where MSPs are in their buying journey.',
  },
];

export default function Playbooks() {
  return (
    <section id="playbooks" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <BookMarked size={14} />
            MSP Signals Playbooks
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Actionable Guidance to Turn Signals Into Growth
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Each playbook translates raw signal data into clear next steps — so every notification becomes an opportunity, not a question mark.
          </p>
        </div>

        {/* Playbooks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playbooks.map(({ imgSrc, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-card-hover hover:border-navy-200 transition-all duration-200 group flex flex-col"
            >
              {/* Playbook Cover */}
              <div className="bg-gray-50 p-6 flex items-center justify-center border-b border-gray-100">
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-52 h-52 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-navy-700 text-sm leading-snug mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Playbook</span>
                  <div className="flex items-center gap-1 text-navy-600 text-xs font-semibold group-hover:text-brand-green transition-colors">
                    <Download size={13} />
                    Access
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Trailing CTA card */}
          <div className="bg-navy-600 border border-navy-500 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-navy-700 transition-colors duration-200 group cursor-pointer"
            onClick={() => {
              const el = document.querySelector('#campaign-assets');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <ArrowRight size={26} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Explore Campaign Assets</h3>
            <p className="text-white/60 text-sm">View your active banners, listicles, and podcast content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
