import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "CEO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `KarnOS transformed our entire digital presence. Their consultation process was incredibly thorough, and they took the time to understand our unique challenges. The team's expertise in AI automation saved us 40 hours per week in manual processes. The communication throughout the project was exceptional - we always knew exactly where things stood.`,
      project: "AI-Powered Customer Service Platform",
      result: "40 hours/week saved, 300% increase in customer satisfaction",
      timeline: "4 months",
      budget: "$75,000"
    },
    {
      id: 2,
      name: "Marcus Chen",
      position: "Founder",
      company: "GreenTech Innovations",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `From the initial consultation to project delivery, KarnOS exceeded every expectation. They didn't just build what we asked for - they provided strategic insights that made our platform 10x better. The mobile app they developed has been downloaded over 100,000 times and maintains a 4.8-star rating. Their ongoing support has been invaluable.`,
      project: "Sustainability Tracking Mobile App",
      result: "100K+ downloads, 4.8-star rating, $2M in funding raised",
      timeline: "6 months",
      budget: "$120,000"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Creative Minds Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `The consultation call with KarnOS was a game-changer. They immediately understood our vision and provided solutions we hadn't even considered. The data dashboard they built gives us real-time insights that have improved our campaign performance by 250%. Their response time is incredible - any question gets answered within hours.`,
      project: "Real-time Marketing Analytics Dashboard",
      result: "250% improvement in campaign performance, 60% time savings",
      timeline: "3 months",
      budget: "$45,000"
    },
    {
      id: 4,
      name: "David Park",
      position: "CTO",
      company: "FinanceForward",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `KarnOS delivered a complex financial platform that handles millions in transactions daily. Their attention to security and scalability was impressive. The consultation process helped us identify potential issues before they became problems. Six months post-launch, we've had zero downtime and processed over $50M in transactions securely.`,
      project: "Enterprise Financial Management Platform",
      result: "$50M+ in transactions processed, zero downtime, SOC 2 compliant",
      timeline: "8 months",
      budget: "$200,000"
    }
  ];

  const responseMetrics = [
    {
      metric: "2 Hours",
      label: "Average Response Time",
      description: "We respond to all inquiries within 2 hours during business hours",
      icon: "Clock"
    },
    {
      metric: "24 Hours",
      label: "Proposal Delivery",
      description: "Detailed project proposals delivered within one business day",
      icon: "FileText"
    },
    {
      metric: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys and ongoing relationships",
      icon: "Heart"
    },
    {
      metric: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries",
      icon: "Award"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-6">
              <Icon name="MessageSquare" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">Client Success Stories</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say About
              <span className="block text-primary">Our Consultation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with KarnOS, 
              from initial consultation to project completion and beyond.
            </p>
          </div>

          {/* Response Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {responseMetrics?.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon name={metric?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric?.metric}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{metric?.label}</div>
                <p className="text-sm text-gray-600">{metric?.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Client Info */}
              <div className="lg:col-span-1">
                <div className="text-center lg:text-left">
                  <img
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-24 h-24 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{currentTestimonial?.name}</h3>
                  <p className="text-gray-600 mb-2">{currentTestimonial?.position}</p>
                  <p className="text-primary font-semibold mb-4">{currentTestimonial?.company}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mb-6">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="bg-gray-50 rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Project:</span>
                        <p className="text-gray-600">{currentTestimonial?.project}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Timeline:</span>
                        <p className="text-gray-600">{currentTestimonial?.timeline}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Investment:</span>
                        <p className="text-gray-600">{currentTestimonial?.budget}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Icon name="Quote" size={48} className="text-primary/20 absolute -top-4 -left-2" />
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 relative z-10">
                    "{currentTestimonial?.content}"
                  </blockquote>
                  
                  {/* Results */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <Icon name="TrendingUp" size={20} className="text-green-600 mr-2" />
                      Results Achieved
                    </h4>
                    <p className="text-green-700">{currentTestimonial?.result}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials?.map((testimonial, index) => (
              <div
                key={testimonial?.id}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  index === activeTestimonial ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial?.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial?.position}, {testimonial?.company}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm line-clamp-3">
                  "{testimonial?.content?.substring(0, 150)}..."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-primary font-medium">{testimonial?.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;