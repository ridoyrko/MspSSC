import { useState } from 'react';
import { Mail, Send, ExternalLink } from 'lucide-react';
import logo from '../assets/SCC-Logo.png';

const footerLinks = [
  { label: 'Lifetime Momentum', href: '#lifetime-momentum' },
  { label: 'Your Partnership', href: '#your-partnership' },
  { label: 'Reports', href: '#reports' },
  { label: 'Education Center', href: '#education-center' },
  { label: 'Playbooks', href: '#playbooks' },
  { label: 'Campaign Assets', href: '#campaign-assets' },
  { label: 'Podcast Network', href: '#podcast-network' },
];

const externalLinks = [
  { label: 'MSPInfluencer.com', href: 'https://mspinfluencer.com' },
  { label: 'Joey Pinz Podcast', href: 'https://joeypinzconversations.com' },
  { label: 'Podcast Network Assessment', href: 'https://joeypinzconversations.com/network/' },
  { label: 'View Latest Report', href: 'https://mspinfluencer.com/ssc/xxx2-report-6-1-26/' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-800 text-white">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={18} className="text-brand-green-light" />
                <span className="text-brand-green-light font-semibold text-sm uppercase tracking-wide">Newsletter</span>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">
                Stay on Top of MSP News, Trends, and Insights.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Don't miss the information you need to keep your business successful.
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="bg-brand-green/20 border border-brand-green/40 rounded-xl p-5 text-center">
                  <div className="text-brand-green-light font-semibold mb-1">You're subscribed!</div>
                  <div className="text-white/60 text-sm">Thanks for joining. You'll receive MSP news and insights directly to your inbox.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm whitespace-nowrap"
                  >
                    <Send size={14} />
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="MSP Influencer Sponsor Success Center" className="h-10 w-auto mb-4 opacity-90" />
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              Your dedicated sponsor intelligence platform — tracking every signal, every step, across the full MSP buyer journey.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              Live data updated bi-monthly
            </div>
          </div>

          {/* Page Navigation */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-widest">Page Sections</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-sm transition-colors"
                  >
                    <ExternalLink size={11} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © 2026 MSPInfluencer · Sponsor Success Center. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            Powered by Cogent Growth · Joey Pinz Conversations
          </p>
        </div>
      </div>
    </footer>
  );
}
