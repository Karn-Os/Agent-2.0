import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const metrics = [
    {
      icon: "Users",
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      icon: "Star",
      value: "98%",
      label: "Client Satisfaction",
      description: "Average satisfaction rating from client feedback surveys"
    },
    {
      icon: "Clock",
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      icon: "Award",
      value: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence in digital innovation"
    }
  ];

  const certifications = [
    {
      name: "React Certified Developer",
      icon: "Shield",
      issuer: "Meta",
      year: "2024"
    },
    {
      name: "AWS Solutions Architect",
      icon: "Cloud",
      issuer: "Amazon",
      year: "2024"
    },
    {
      name: "Google Analytics Certified",
      icon: "BarChart",
      issuer: "Google",
      year: "2024"
    },
    {
      name: "Accessibility Specialist",
      icon: "Eye",
      issuer: "W3C",
      year: "2024"
    }
  ];

  const clientLogos = [
    {
      name: "TechFlow Solutions",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      name: "Global Manufacturing",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop"
    },
    {
      name: "CreativeSpace Studio",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=60&fit=crop"
    },
    {
      name: "InnovateCorp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop"
    },
    {
      name: "DataDriven Inc",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop"
    },
    {
      name: "FutureScale",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "KarnOS delivered beyond our expectations. Their technical expertise and innovative approach transformed our entire digital presence.",
      author: "Sarah Chen",
      position: "CEO, TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "The automation solutions provided by KarnOS saved us millions in operational costs while improving efficiency across all departments.",
      author: "Michael Rodriguez",
      position: "CTO, Global Manufacturing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Working with KarnOS was a game-changer. They don't just build websites—they create digital experiences that drive real business results.",
      author: "Emma Thompson",
      position: "Creative Director, CreativeSpace",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics?.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={metric?.icon} size={32} color="white" strokeWidth={2} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {metric?.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {metric?.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with KarnOS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial?.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial?.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h3>
            <p className="text-muted-foreground">
              We're proud to partner with innovative companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos?.map((client, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-border group-hover:shadow-md transition-shadow duration-300 w-full h-20 flex items-center justify-center">
                  <Image
                    src={client?.logo}
                    alt={`${client?.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Certified</span> Excellence
            </h3>
            <p className="text-muted-foreground">
              Our team maintains the highest industry certifications and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-colors duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert?.icon} size={24} color="white" strokeWidth={2} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert?.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert?.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;