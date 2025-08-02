import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import InteractiveDemo from './components/InteractiveDemo';
import ServiceStats from './components/ServiceStats';
import TechnologyShowcase from './components/TechnologyShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import ServiceFAQ from './components/ServiceFAQ';

const ServicesEcosystemOverview = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      category: 'Frontend',
      description: 'Modern, responsive web applications built with React 19, Next.js, and cutting-edge technologies for optimal performance and user experience.',
      icon: 'Monitor',
      gradient: 'from-blue-500 to-cyan-500',
      stats: [
        { value: '150+', label: 'Websites Built' },
        { value: '99.9%', label: 'Uptime' },
        { value: '< 2s', label: 'Load Time' }
      ],
      demoComponent: <InteractiveDemo type="web" />,
      technologies: ['React 19', 'Next.js 14', 'Vite', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      caseStudy: {
        client: 'TechStart Inc.',
        result: 'Increased user engagement by 340% with modern React architecture',
        improvement: '340% engagement',
        timeline: '6 weeks'
      },
      pricing: {
        starting: '$2,500',
        note: 'Basic website package'
      },
      timeline: {
        typical: '4-8 weeks',
        note: 'Depends on complexity'
      }
    },
    {
      id: 'app-development',
      title: 'App Development',
      category: 'Mobile',
      description: 'Cross-platform mobile applications using React Native and Flutter, delivering native performance with shared codebase efficiency.',
      icon: 'Smartphone',
      gradient: 'from-purple-500 to-pink-500',
      stats: [
        { value: '80+', label: 'Apps Launched' },
        { value: '4.8★', label: 'Avg Rating' },
        { value: '2M+', label: 'Downloads' }
      ],
      demoComponent: <InteractiveDemo type="app" />,
      technologies: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin', 'Firebase'],
      caseStudy: {
        client: 'HealthCare Plus',
        result: 'Streamlined patient management with 95% user satisfaction',
        improvement: '95% satisfaction',
        timeline: '10 weeks'
      },
      pricing: {
        starting: '$8,000',
        note: 'Cross-platform app'
      },
      timeline: {
        typical: '8-16 weeks',
        note: 'Feature dependent'
      }
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      category: 'Creative',
      description: 'Professional video editing and motion graphics services for marketing campaigns, product demos, and brand storytelling.',
      icon: 'Video',
      gradient: 'from-red-500 to-orange-500',
      stats: [
        { value: '500+', label: 'Videos Edited' },
        { value: '4K', label: 'Max Resolution' },
        { value: '24h', label: 'Turnaround' }
      ],
      demoComponent: <InteractiveDemo type="video" />,
      technologies: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Cinema 4D', 'Blender', 'Figma'],
      caseStudy: {
        client: 'Brand Dynamics',
        result: 'Boosted social media engagement by 280% with compelling video content',
        improvement: '280% engagement',
        timeline: '2 weeks'
      },
      pricing: {
        starting: '$500',
        note: 'Per minute of content'
      },
      timeline: {
        typical: '1-3 weeks',
        note: 'Based on length'
      }
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      category: 'Design',
      description: 'User-centered design solutions that combine aesthetic excellence with intuitive functionality for exceptional digital experiences.',
      icon: 'Palette',
      gradient: 'from-green-500 to-emerald-500',
      stats: [
        { value: '200+', label: 'Designs Created' },
        { value: '98%', label: 'User Satisfaction' },
        { value: '50+', label: 'Design Awards' }
      ],
      demoComponent: <InteractiveDemo type="uiux" />,
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Miro'],
      caseStudy: {
        client: 'E-commerce Pro',
        result: 'Reduced bounce rate by 45% through improved user experience design',
        improvement: '45% less bounce',
        timeline: '4 weeks'
      },
      pricing: {
        starting: '$1,500',
        note: 'Complete design system'
      },
      timeline: {
        typical: '3-6 weeks',
        note: 'Scope dependent'
      }
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      category: 'Technology',
      description: 'Intelligent automation solutions powered by AI, including chatbots, workflow optimization, and machine learning integrations.',
      icon: 'Zap',
      gradient: 'from-indigo-500 to-purple-500',
      stats: [
        { value: '60+', label: 'AI Solutions' },
        { value: '75%', label: 'Efficiency Gain' },
        { value: '24/7', label: 'Automation' }
      ],
      demoComponent: <InteractiveDemo type="ai" />,
      technologies: ['OpenAI GPT', 'Langchain', 'TensorFlow', 'Pinecone', 'Zapier', 'Python'],
      caseStudy: {
        client: 'AutoFlow Systems',
        result: 'Automated 80% of repetitive tasks, saving 40 hours per week',
        improvement: '80% automation',
        timeline: '8 weeks'
      },
      pricing: {
        starting: '$3,000',
        note: 'Basic automation setup'
      },
      timeline: {
        typical: '6-12 weeks',
        note: 'Complexity varies'
      }
    },
    {
      id: 'data-dashboards',
      title: 'Data Dashboards',
      category: 'Analytics',
      description: 'Interactive data visualization dashboards that transform complex data into actionable insights for informed decision-making.',
      icon: 'BarChart3',
      gradient: 'from-teal-500 to-blue-500',
      stats: [
        { value: '100+', label: 'Dashboards Built' },
        { value: '1M+', label: 'Data Points' },
        { value: 'Real-time', label: 'Updates' }
      ],
      demoComponent: <InteractiveDemo type="data" />,
      technologies: ['D3.js', 'Recharts', 'Tableau', 'Power BI', 'Python', 'PostgreSQL'],
      caseStudy: {
        client: 'DataDriven Corp',
        result: 'Improved decision-making speed by 60% with real-time analytics',
        improvement: '60% faster decisions',
        timeline: '5 weeks'
      },
      pricing: {
        starting: '$2,000',
        note: 'Custom dashboard'
      },
      timeline: {
        typical: '4-8 weeks',
        note: 'Data complexity based'
      }
    }
  ];

  const handleServiceExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 mb-6">
              <Icon name="Layers" size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">Complete Service Ecosystem</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Services That
              <span className="text-gradient block">Transform Ideas</span>
              Into Reality
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive suite of digital services designed to elevate your business. 
              From cutting-edge web development to AI-powered automation, we deliver solutions that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="animate-pulse-subtle"
              >
                Explore Services
              </Button>
              <Link to="/contact-consultation-center">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Service Stats */}
          <ServiceStats />
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is crafted with precision, powered by the latest technologies, 
              and delivered with a focus on your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <ServiceCard
                key={service?.id}
                service={service}
                index={index}
                onExpand={handleServiceExpand}
                isExpanded={expandedService === service?.id}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Technology Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced tools and frameworks to deliver exceptional results
            </p>
          </motion.div>

          <TechnologyShowcase />
        </div>
      </section>
      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProcessTimeline />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServiceFAQ />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your goals. 
              Get a free consultation and project estimate today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact-consultation-center">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-gray-50"
                >
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio-universe-multi-dimensional-showcase">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" />
                </div>
                <div>
                  <span className="text-xl font-bold">KarnOS</span>
                  <div className="text-sm text-gray-400">Digital Agency</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Transforming ideas into exceptional digital experiences through innovative technology and creative excellence.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Linkedin', 'Github', 'Instagram']?.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Icon name={social} size={18} className="text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'App Development', 'UI/UX Design', 'AI Automation']?.map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Mail" size={16} />
                  <span>hello@karnos.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Phone" size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Icon name="MapPin" size={16} />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date()?.getFullYear()} KarnOS Digital Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesEcosystemOverview;