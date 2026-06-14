import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import LifetimeMomentum from './components/LifetimeMomentum';
import YourPartnership from './components/YourPartnership';
import BiMonthlyReports from './components/BiMonthlyReports';
import EducationCenter from './components/EducationCenter';
import Playbooks from './components/Playbooks';
import CampaignAssets from './components/CampaignAssets';
import PodcastNetwork from './components/PodcastNetwork';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <LifetimeMomentum />
        <YourPartnership />
        <BiMonthlyReports />
        <EducationCenter />
        <Playbooks />
        <CampaignAssets />
        <PodcastNetwork />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
