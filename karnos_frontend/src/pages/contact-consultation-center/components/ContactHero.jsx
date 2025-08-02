import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onScrollToForm }) => {
  return (
    <section className="relative bg-gradient-primary text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="MessageCircle" size={16} className="text-accent" />
            <span className="text-sm font-medium">24/7 Consultation Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build Your
            <span className="block text-accent">Digital Future</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your ideas into reality with KarnOS. From initial consultation to project delivery, 
            we're your dedicated technology partner every step of the way.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">2 Hours</div>
              <div className="text-white/80">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={onScrollToForm}
              iconName="ArrowDown"
              iconPosition="right"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;