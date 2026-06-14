import { Layers, Download, ImageIcon, Mic, ExternalLink } from 'lucide-react';

const listicles = [
  {
    status: 'active',
    title: '7 Ways Autonomous Operations Intelligence Is Transforming MSP Service Delivery',
    type: 'Active Campaign',
    href: '#',
  },
  {
    status: 'archived',
    title: '8 Reasons Why MSPs Should Buy Your Stuff',
    type: 'Archived',
    href: '#',
  },
];

const bannerSets = [
  {
    name: 'Cogent Mergers — Set A',
    banners: [
      { size: '728×90', src: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2025/07/cogentmergers.com-728x90-1.gif?resize=728%2C90&ssl=1', alt: 'Cogent Mergers 728x90 Banner' },
      { size: '300×250', src: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2025/07/cogentmergers.com-300x250-1.gif?resize=300%2C250&ssl=1', alt: 'Cogent Mergers 300x250 Banner' },
      { size: '300×600', src: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2025/07/cogentmergers.com-300x600-1.gif?resize=300%2C600&ssl=1', alt: 'Cogent Mergers 300x600 Banner' },
    ],
  },
  {
    name: 'Cogent Mergers — Set B',
    banners: [
      { size: '728×90', src: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/02/728x90-1.gif?resize=728%2C90&ssl=1', alt: 'Cogent 728x90 Banner' },
      { size: '300×250', src: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/02/300x250-1.gif?resize=300%2C250&ssl=1', alt: 'Cogent 300x250 Banner' },
      { size: '300×600', src: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/02/300x600-1.gif?resize=300%2C600&ssl=1', alt: 'Cogent 300x600 Banner' },
    ],
  },
];

const podcasts = [
  {
    title: "Jason Kemsley's Advice for MSPs Looking to Grow",
    href: 'https://mspinfluencer.com/podcasts/jason-kemsleys-advice-for-msps-looking-to-grow/',
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/Thumbnail-1280-x-720-834.png?fit=1280%2C720&ssl=1',
  },
  {
    title: 'JD Miller Shares Leadership Lessons Every MSP Can Apply',
    href: 'https://mspinfluencer.com/podcasts/jd-miller-leadership-lessons-for-msps/',
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/06/Thumbnail-1280-x-720-832.png?fit=1280%2C720&ssl=1',
  },
  {
    title: 'Linton Harris on Building a Security-First MSP',
    href: 'https://mspinfluencer.com/podcasts/linton-harris-security-first-msp/',
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2026/05/Thumbnail-1280-x-720-831.png?fit=1280%2C720&ssl=1',
  },
];

const blogPosts = [
  {
    title: 'What Every IT Vendor Needs to Know about MSPs in 2021',
    href: 'https://mspinfluencer.com/forzadash/what-every-it-vendor-needs-to-know-about-msps-in-2021/',
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2021/05/What-Every-IT-Vendor-Needs-.jpg?fit=300%2C210&ssl=1',
  },
  {
    title: 'Distribution Channels – Strategies, Steps, and Tips for IT Vendors',
    href: 'https://mspinfluencer.com/forzadash/distribution-channels-strategies-steps-and-tips-for-it-vendors/',
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2021/04/Distribution-Channels.jpg?fit=300%2C109&ssl=1',
  },
  {
    title: 'Channel Management – Top Management Secrets IT Sponsors Must Know',
    href: 'https://mspinfluencer.com/forzadash/channel-management-top-management-secrets-it-sponsors-must-know/',
    imgSrc: 'https://i0.wp.com/mspinfluencer.com/wp-content/uploads/2021/03/Channel-Management-e1618751642860.jpg?fit=300%2C200&ssl=1',
  },
];

export default function CampaignAssets() {
  return (
    <section id="campaign-assets" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-badge">
            <Layers size={14} />
            Campaign Assets
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-3">
            Your Active Content Library
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            All the content assets running on your behalf — listicles, banners, podcasts, and blog posts generating visibility and engagement across the MSP ecosystem.
          </p>
        </div>

        {/* ── Listicles ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-brand-green/10 rounded-lg flex items-center justify-center">
              <Download size={18} className="text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-navy-700">Listicles</h3>
          </div>

          <div className="space-y-3">
            {listicles.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-start justify-between gap-4 hover:border-navy-200 hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                    item.status === 'active'
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-navy-700 font-medium text-sm leading-snug">{item.title}</span>
                </div>
                <a
                  href={item.href}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-navy-600 hover:text-brand-green font-semibold text-xs transition-colors"
                >
                  <Download size={13} />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Active Banners ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center">
              <ImageIcon size={18} className="text-navy-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-700">Active Banners</h3>
          </div>
          <p className="text-gray-500 text-sm mb-6 ml-12">
            These are the banner assets currently generating Level 0 Visibility Signals across the MSPInfluencer ecosystem.
          </p>

          <div className="space-y-8">
            {bannerSets.map((set) => (
              <div key={set.name}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{set.name}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {set.banners.map((banner) => (
                    <div
                      key={banner.size}
                      className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                      <span className="flex-shrink-0 text-xs font-mono font-bold text-gray-400 bg-gray-200 px-2 py-1 rounded">
                        {banner.size}
                      </span>
                      <div className="overflow-hidden rounded-lg max-w-full">
                        <img
                          src={banner.src}
                          alt={banner.alt}
                          className="max-w-full h-auto object-contain"
                          style={{ maxHeight: banner.size.includes('600') ? '120px' : undefined }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Podcasts ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center">
              <Mic size={18} className="text-navy-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-700">Podcasts</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {podcasts.map((pod) => (
              <a
                key={pod.title}
                href={pod.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-card-hover hover:border-navy-200 transition-all duration-200 group flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={pod.imgSrc}
                    alt={pod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h4 className="text-sm font-bold text-navy-700 leading-snug group-hover:text-navy-900 transition-colors">
                    {pod.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1 text-brand-green text-xs font-semibold">
                    <ExternalLink size={11} />
                    Listen Now
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Blog Posts ── */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center">
              <Layers size={18} className="text-navy-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-700">Blogs</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-card-hover hover:border-navy-200 transition-all duration-200 group flex flex-col"
              >
                <div className="overflow-hidden h-40">
                  <img
                    src={post.imgSrc}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h4 className="text-sm font-bold text-navy-700 leading-snug group-hover:text-navy-900 transition-colors">
                    {post.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1 text-brand-green text-xs font-semibold">
                    <ExternalLink size={11} />
                    Read Article
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
