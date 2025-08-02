import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import ClientShowcase from './components/ClientShowcase';
import InnovationTeaser from './components/InnovationTeaser';
import SocialProofSection from './components/SocialProofSection';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>KarnOS - Where AI Meets Creativity | Digital Agency Platform</title>
        <meta 
          name="description" 
          content="Transform your digital presence with KarnOS. We craft cutting-edge web applications, mobile apps, and AI-powered solutions that drive real business results. 500+ successful projects delivered." 
        />
        <meta name="keywords" content="digital agency, web development, app development, AI automation, UI/UX design, video editing, data dashboards, React development" />
        <meta property="og:title" content="KarnOS - Where AI Meets Creativity | Digital Agency Platform" />
        <meta property="og:description" content="Transform your digital presence with intelligent automation and elegant design. Join 500+ successful businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karnos.dev/homepage-digital-agency-platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KarnOS - Where AI Meets Creativity" />
        <meta name="twitter:description" content="Digital transformation through intelligent automation and elegant design." />
        <link rel="canonical" href="https://karnos.dev/homepage-digital-agency-platform" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Services Preview */}
          <ServicesPreview />

          {/* Client Success Stories */}
          <ClientShowcase />

          {/* Innovation Lab Teaser */}
          <InnovationTeaser />

          {/* Social Proof & Metrics */}
          <SocialProofSection />

          {/* Call to Action */}
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">KarnOS</div>
                    <div className="text-sm text-gray-400">Digital Agency</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Transforming businesses through intelligent automation and elegant design. 
                  Where AI meets creativity to build the future of digital experiences.
                </p>
                <div className="text-sm text-gray-400">
                  © {new Date()?.getFullYear()} KarnOS. All rights reserved.
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/services-ecosystem-overview" className="hover:text-white transition-colors">Web Development</a></li>
                  <li><a href="/services-ecosystem-overview" className="hover:text-white transition-colors">App Development</a></li>
                  <li><a href="/services-ecosystem-overview" className="hover:text-white transition-colors">AI/Automation</a></li>
                  <li><a href="/services-ecosystem-overview" className="hover:text-white transition-colors">UI/UX Design</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>hello@karnos.dev</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                  <li>Available 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;