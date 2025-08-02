import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InnovationTeaser = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const innovations = [
    {
      id: "react-19",
      title: "React 19 Early Adoption",
      icon: "Zap",
      description: "Leveraging the latest React features including concurrent rendering and server components for unparalleled performance.",
      features: ["Concurrent Rendering", "Server Components", "Automatic Batching", "Suspense Boundaries"],
      status: "Production Ready",
      impact: "40% faster load times"
    },
    {
      id: "ai-integration",
      title: "AI-Powered Development",
      icon: "Bot",
      description: "Integrating machine learning and AI capabilities directly into web applications for intelligent user experiences.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Automated Testing"],
      status: "Beta Testing",
      impact: "60% development efficiency"
    },
    {
      id: "edge-computing",
      title: "Edge Computing Solutions",
      icon: "Globe",
      description: "Deploying applications at the edge for lightning-fast global performance and reduced latency.",
      features: ["CDN Integration", "Edge Functions", "Global Distribution", "Real-time Sync"],
      status: "Research Phase",
      impact: "90% latency reduction"
    },
    {
      id: "web3-integration",
      title: "Web3 & Blockchain",
      icon: "Link",
      description: "Building decentralized applications and integrating blockchain technology for next-generation web experiences.",
      features: ["Smart Contracts", "DeFi Integration", "NFT Marketplaces", "Crypto Payments"],
      status: "Pilot Projects",
      impact: "New revenue streams"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % innovations?.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [innovations?.length]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production Ready':
        return 'bg-success/20 text-success';
      case 'Beta Testing':
        return 'bg-warning/20 text-warning';
      case 'Research Phase':
        return 'bg-primary/20 text-primary';
      case 'Pilot Projects':
        return 'bg-secondary/20 text-secondary';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Innovation Lab</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leading the <span className="text-gradient">Future</span> of Web
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just follow trends—we create them. Our Innovation Lab explores cutting-edge technologies to deliver tomorrow's solutions today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Innovation Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              {/* Active Innovation */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center`}>
                    <Icon name={innovations?.[activeFeature]?.icon} size={32} color="white" strokeWidth={2} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(innovations?.[activeFeature]?.status)}`}>
                    {innovations?.[activeFeature]?.status}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {innovations?.[activeFeature]?.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {innovations?.[activeFeature]?.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {innovations?.[activeFeature]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Metric */}
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    <span className="font-semibold text-foreground">Impact:</span>
                    <span className="text-primary font-bold">{innovations?.[activeFeature]?.impact}</span>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex space-x-2">
                {innovations?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeFeature ? 'bg-primary w-8' : 'bg-primary/20 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Innovation List */}
          <div className="space-y-4">
            {innovations?.map((innovation, index) => (
              <div
                key={innovation?.id}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  index === activeFeature
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/20 hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index === activeFeature ? 'bg-gradient-primary' : 'bg-muted'
                  }`}>
                    <Icon 
                      name={innovation?.icon} 
                      size={24} 
                      color={index === activeFeature ? 'white' : 'currentColor'}
                      className={index === activeFeature ? '' : 'text-muted-foreground'}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-semibold ${
                        index === activeFeature ? 'text-primary' : 'text-foreground'
                      }`}>
                        {innovation?.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(innovation?.status)}`}>
                        {innovation?.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {innovation?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our Innovation Lab and get early access to cutting-edge features, 
              beta tools, and exclusive insights into emerging technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/innovation-lab-technology-leadership-hub">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Rocket"
                  iconPosition="right"
                  iconSize={20}
                  className="hover-lift"
                >
                  Explore Innovation Lab
                </Button>
              </Link>
              
              <Link to="/contact-consultation-center">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="right"
                  iconSize={20}
                  className="hover-lift"
                >
                  Schedule Innovation Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationTeaser;