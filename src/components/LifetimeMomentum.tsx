import { Eye, Mic, Clock, Users, TrendingUp, Activity, Bell, Target } from 'lucide-react';
import level0Img from '../assets/Level-0.webp';
import level1Img from '../assets/Level-1.webp';
import level2Img from '../assets/Level-2.webp';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  subLabel?: string;
  accent?: boolean;
}

function StatCard({ icon: Icon, label, value, subLabel, accent }: StatCardProps) {
  return (
    <div className={`stat-card h-full ${accent ? 'border-brand-green/30 bg-brand-green/5' : ''}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
        accent ? 'bg-brand-green/15' : 'bg-navy-50'
      }`}>
        <Icon size={22} className={accent ? 'text-brand-green' : 'text-navy-600'} />
      </div>
      <div className={`text-3xl font-bold font-heading leading-none mb-2 ${
        accent ? 'text-brand-green' : 'text-navy-700'
      }`}>
        {value}
      </div>
      <div className="text-gray-600 text-sm font-medium leading-tight">{label}</div>
      {subLabel && <div className="text-gray-400 text-xs mt-1">{subLabel}</div>}
    </div>
  );
}

interface LevelHeaderProps {
  imgSrc: string;
  alt: string;
  description: string;
}

function LevelHeader({ imgSrc, alt, description }: LevelHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 mb-8">
      <img src={imgSrc} alt={alt} className="h-16 w-auto object-contain" />
      <p className="text-gray-500 text-sm italic text-center sm:text-left">{description}</p>
    </div>
  );
}

export default function LifetimeMomentum() {
  return (
    <section id="lifetime-momentum" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <TrendingUp size={14} />
            Live Sponsor Intelligence
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Lifetime Momentum Snapshot
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A lifetime view of your visibility, engagement, and declared interest signals.
          </p>
        </div>

        {/* Level 0: Visibility Signals */}
        <div className="mb-14">
          <LevelHeader
            imgSrc={level0Img}
            alt="Level 0: Engagement"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={Eye}
              label="Total Views (Banners)"
              value="12,524"
            />
            <StatCard
              icon={Mic}
              label="Total Views (Podcasts/Blogs)"
              value="4,582"
            />
            <StatCard
              icon={Clock}
              label="Visibility Hours"
              value="4,582"
            />
            <StatCard
              icon={Users}
              label="Est. Decision-Maker Exposure"
              value="5,849"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-14" />

        {/* Level 1: Engagement */}
        <div className="mb-14">
          <LevelHeader
            imgSrc={level1Img}
            alt="Level 1: Engagement"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              icon={Activity}
              label="Total Engagement Signals"
              value="78,795"
            />
            <StatCard
              icon={TrendingUp}
              label="Average Daily Engagement Activity"
              value="10.5"
            />
            <StatCard
              icon={Bell}
              label="Signal Frequency"
              value="1 Signal"
              subLabel="every 2.2 hours"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-14" />

        {/* Level 2: Declared Interest */}
        <div className="flex flex-col sm:flex-row sm:align-center gap-4 mb-8">
          <LevelHeader
            imgSrc={level2Img}
            alt="Level 2: Declared Interest Signals"
          />

          <div className="max-w-xs">
            <StatCard
              icon={Target}
              label="Declared Interest Signals"
              value="12"
              accent
            />
          </div>

          <p className="mt-6 text-sm sm:text-center text-gray-500 max-w-lg">
            Declared Interest Signals represent the highest-value buyer intent: an MSP actively expressing interest in your offering. Each signal represents a meaningful step toward pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
