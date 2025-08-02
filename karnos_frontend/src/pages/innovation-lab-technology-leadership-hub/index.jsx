import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BetaToolsSection from './components/BetaToolsSection';
import ResearchSection from './components/ResearchSection';
import TechnologyTrendsSection from './components/TechnologyTrendsSection';
import CommunitySection from './components/CommunitySection';

const InnovationLabPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Innovation Lab - Technology Leadership Hub | KarnOS Digital Agency</title>
        <meta 
          name="description" 
          content="Explore cutting-edge technologies, experimental features, and emerging trends at KarnOS Innovation Lab. Access beta tools, research insights, and join our developer community shaping the future of web development." 
        />
        <meta name="keywords" content="innovation lab, technology trends, beta tools, React 19, AI development, web development research, open source, developer community" />
        <meta property="og:title" content="Innovation Lab - Technology Leadership Hub | KarnOS" />
        <meta property="og:description" content="Discover experimental features, beta tools, and emerging technology previews. Join our innovation community." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovation Lab - Technology Leadership Hub | KarnOS" />
        <meta name="twitter:description" content="Explore cutting-edge technologies and experimental features at KarnOS Innovation Lab." />
        <link rel="canonical" href="/innovation-lab-technology-leadership-hub" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <HeroSection />
          <BetaToolsSection />
          <ResearchSection />
          <TechnologyTrendsSection />
          <CommunitySection />
        </main>
      </div>
    </>
  );
};

export default InnovationLabPage;