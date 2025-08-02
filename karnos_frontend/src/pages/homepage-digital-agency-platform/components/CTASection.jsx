import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const quickActions = [
    {
      title: "Free Consultation",
      description: "Get expert advice on your digital transformation journey",
      icon: "MessageCircle",
      link: "/contact-consultation-center",
      variant: "default"
    },
    {
      title: "View Portfolio",
      description: "Explore our latest projects and success stories",
      icon: "Grid3X3",
      link: "/portfolio-universe-multi-dimensional-showcase",
      variant: "outline"
    },
    {
      title: "Innovation Lab",
      description: "Discover cutting-edge technologies and beta features",
      icon: "Rocket",
      link: "/innovation-lab-technology-leadership-hub",
      variant: "secondary"
    }
  ];

  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: "Mail",
      title: "Email Us",
      value: "hello@karnos.dev",
      description: "We respond within 2 hours"
    },
    {
      icon: "MessageSquare",
      title: "Live Chat",
      value: "Start Conversation",
      description: "Available 24/7"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Digital Future?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join 500+ successful businesses that have transformed their digital presence with KarnOS. 
            Let's build something extraordinary together.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link to="/contact-consultation-center">
              <Button
                variant="default"
                size="xl"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={24}
                className="bg-white text-indigo-900 hover:bg-white/90 hover-lift animate-pulse-subtle"
              >
                Start Your Project Today
              </Button>
            </Link>
            
            <Link to="/portfolio-universe-multi-dimensional-showcase">
              <Button
                variant="outline"
                size="xl"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10 hover-lift"
              >
                Watch Success Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickActions?.map((action, index) => (
            <Link key={index} to={action?.link} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={action?.icon} size={32} color="white" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {action?.title}
                </h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {action?.description}
                </p>

                <div className="flex items-center justify-center space-x-2 text-cyan-300 group-hover:text-white transition-colors duration-300">
                  <span className="font-medium">Learn More</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Multiple Ways to <span className="text-cyan-300">Connect</span>
            </h3>
            <p className="text-white/70 text-lg">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods?.map((method, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <Icon name={method?.icon} size={36} color="white" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {method?.title}
                </h4>
                
                <div className="text-lg font-medium text-cyan-300 mb-2">
                  {method?.value}
                </div>
                
                <p className="text-white/60 text-sm">
                  {method?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} />
              <span>Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;