import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e?.currentTarget?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e?.clientX - rect?.left) / rect?.width) * 100,
          y: ((e?.clientY - rect?.top) / rect?.height) * 100,
        });
      }
    };

    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      heroElement?.addEventListener('mousemove', handleMouseMove);
      return () => heroElement?.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50"
      style={{
        background: `radial-gradient(circle at ${mousePosition?.x}% ${mousePosition?.y}%, rgba(79, 70, 229, 0.15) 0%, rgba(124, 58, 237, 0.1) 25%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-accent opacity-5 rounded-full blur-2xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6">
            <span className="text-gradient">Where AI</span>
            <br />
            <span className="text-foreground">Meets</span>
            <br />
            <span className="text-gradient">Creativity</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your digital presence through intelligent automation and elegant design. 
            We craft cutting-edge solutions that empower businesses to thrive in the AI-driven future.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Link to="/services-ecosystem-overview">
            <Button
              variant="default"
              size="lg"
              iconName="Layers"
              iconPosition="right"
              iconSize={20}
              className="hover-lift"
            >
              Explore Services
            </Button>
          </Link>
          
          <Link to="/portfolio-universe-multi-dimensional-showcase">
            <Button
              variant="outline"
              size="lg"
              iconName="Grid3X3"
              iconPosition="right"
              iconSize={20}
              className="hover-lift"
            >
              View Portfolio
            </Button>
          </Link>
          
          <Link to="/contact-consultation-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="right"
              iconSize={20}
              className="hover-lift animate-pulse-subtle"
            >
              Start Consultation
            </Button>
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">5★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;