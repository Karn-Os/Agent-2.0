import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: "Globe",
      description: "Modern, responsive websites built with React 19 and cutting-edge technologies",
      features: ["React 19 & Next.js", "Performance Optimized", "SEO Ready", "Mobile First"],
      gradient: "from-blue-500 to-indigo-600",
      demo: "Interactive UI components with real-time data binding"
    },
    {
      id: "app-dev",
      title: "App Development",
      icon: "Smartphone",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences",
      features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
      gradient: "from-purple-500 to-pink-600",
      demo: "Smooth animations and gesture-based interactions"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      icon: "Video",
      description: "Professional video production and editing services for marketing and brand content",
      features: ["4K Production", "Motion Graphics", "Color Grading", "Audio Enhancement"],
      gradient: "from-red-500 to-orange-600",
      demo: "Cinematic transitions and professional post-production"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: "Palette",
      description: "User-centered design that combines aesthetics with functionality and accessibility",
      features: ["Design Systems", "User Research", "Prototyping", "Accessibility"],
      gradient: "from-green-500 to-teal-600",
      demo: "Interactive prototypes with micro-animations"
    },
    {
      id: "ai-automation",
      title: "AI/Automation",
      icon: "Bot",
      description: "Intelligent automation solutions that streamline workflows and enhance productivity",
      features: ["Machine Learning", "Process Automation", "Chatbots", "Data Analysis"],
      gradient: "from-indigo-500 to-purple-600",
      demo: "Smart algorithms processing real-time data"
    },
    {
      id: "data-dashboards",
      title: "Data Dashboards",
      icon: "BarChart3",
      description: "Interactive dashboards that transform complex data into actionable insights",
      features: ["Real-time Analytics", "Custom Visualizations", "Data Integration", "Mobile Responsive"],
      gradient: "from-cyan-500 to-blue-600",
      demo: "Dynamic charts updating with live data streams"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span> Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge technology and creative excellence. 
            Hover over each service to see our capabilities in action.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`relative group bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-500 hover-lift cursor-pointer ${
                hoveredService === service?.id ? 'ring-2 ring-primary/20 shadow-xl' : 'shadow-md'
              }`}
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service?.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service?.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service?.icon} size={32} color="white" strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service?.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Demo Preview */}
                {hoveredService === service?.id && (
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 animate-fade-in">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Play" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Live Demo</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{service?.demo}</p>
                  </div>
                )}

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link to="/services-ecosystem-overview">
            <Button
              variant="outline"
              size="lg"
              iconName="Layers"
              iconPosition="right"
              iconSize={20}
              className="hover-lift"
            >
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;