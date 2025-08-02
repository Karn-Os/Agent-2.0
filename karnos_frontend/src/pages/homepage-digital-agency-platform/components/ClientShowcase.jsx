import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClientShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientStories = [
    {
      id: 1,
      type: "startup",
      company: "TechFlow Solutions",
      industry: "SaaS Platform",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      challenge: "Needed a scalable web platform to handle 10,000+ users",
      solution: "Built with React 19 and microservices architecture",
      results: {
        metric1: { value: "300%", label: "User Growth" },
        metric2: { value: "50%", label: "Load Time Reduction" },
        metric3: { value: "$2M", label: "Series A Funding" }
      },
      testimonial: "KarnOS transformed our vision into a scalable reality. Their technical expertise and innovative approach helped us secure Series A funding.",
      author: "Sarah Chen",
      position: "CEO & Founder",
      duration: "3 months"
    },
    {
      id: 2,
      type: "enterprise",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      challenge: "Manual processes causing 40% efficiency loss across operations",
      solution: "AI-powered automation dashboard with real-time analytics",
      results: {
        metric1: { value: "65%", label: "Efficiency Increase" },
        metric2: { value: "$5M", label: "Annual Savings" },
        metric3: { value: "99.9%", label: "System Uptime" }
      },
      testimonial: "The automation solutions delivered by KarnOS exceeded our expectations. We\'ve seen unprecedented efficiency gains across all departments.",
      author: "Michael Rodriguez",
      position: "CTO",
      duration: "6 months"
    },
    {
      id: 3,
      type: "startup",
      company: "CreativeSpace Studio",
      industry: "Digital Marketing",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=100&fit=crop",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      challenge: "Needed professional video content to compete with larger agencies",
      solution: "Complete video production pipeline with AI-enhanced editing",
      results: {
        metric1: { value: "500%", label: "Content Output" },
        metric2: { value: "85%", label: "Client Retention" },
        metric3: { value: "200%", label: "Revenue Growth" }
      },
      testimonial: "KarnOS didn\'t just deliver video services—they revolutionized our entire content strategy. Our clients love the quality and consistency.",
      author: "Emma Thompson",
      position: "Creative Director",
      duration: "4 months"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clientStories?.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [clientStories?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clientStories?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clientStories?.length) % clientStories?.length);
  };

  const currentStory = clientStories?.[currentSlide];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations, measurable results. See how we've helped businesses 
            across industries achieve their digital transformation goals.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <Image
                src={currentStory?.image}
                alt={`${currentStory?.company} project showcase`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Company Logo */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <Image
                  src={currentStory?.logo}
                  alt={`${currentStory?.company} logo`}
                  className="h-8 w-auto"
                />
              </div>

              {/* Type Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentStory?.type === 'startup' ?'bg-success/20 text-success' :'bg-primary/20 text-primary'
                }`}>
                  {currentStory?.type === 'startup' ? 'Startup Success' : 'Enterprise Solution'}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {currentStory?.company}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {currentStory?.industry} • {currentStory?.duration} project
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="AlertCircle" size={20} className="text-warning mr-2" />
                    Challenge
                  </h4>
                  <p className="text-muted-foreground">{currentStory?.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="Lightbulb" size={20} className="text-primary mr-2" />
                    Solution
                  </h4>
                  <p className="text-muted-foreground">{currentStory?.solution}</p>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {currentStory?.results?.metric1?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentStory?.results?.metric1?.label}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {currentStory?.results?.metric2?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentStory?.results?.metric2?.label}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {currentStory?.results?.metric3?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentStory?.results?.metric3?.label}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="border-l-4 border-primary pl-6 mb-6">
                <p className="text-lg text-muted-foreground italic mb-4">
                  "{currentStory?.testimonial}"
                </p>
                <footer>
                  <div className="font-semibold text-foreground">{currentStory?.author}</div>
                  <div className="text-sm text-muted-foreground">{currentStory?.position}</div>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 right-6 flex space-x-2">
            {clientStories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View Portfolio CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio-universe-multi-dimensional-showcase">
            <Button
              variant="outline"
              size="lg"
              iconName="Grid3X3"
              iconPosition="right"
              iconSize={20}
              className="hover-lift"
            >
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;