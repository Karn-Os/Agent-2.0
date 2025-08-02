import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

// Import components
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import FeaturedProject from './components/FeaturedProject';
import StatsOverview from './components/StatsOverview';
import SimilarProjects from './components/SimilarProjects';

const PortfolioUniverse = () => {
  // State management
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [activeTechnology, setActiveTechnology] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard Revolution",
      description: "A comprehensive financial analytics platform that transforms complex data into actionable insights for investment professionals.",
      fullDescription: `This revolutionary FinTech dashboard represents a paradigm shift in financial data visualization and analysis. Built for a leading investment firm, the platform processes millions of data points in real-time, providing traders and analysts with unprecedented insights into market trends, portfolio performance, and risk assessment.\n\nThe challenge was to create an intuitive interface that could handle massive datasets while maintaining lightning-fast performance. Our solution leverages advanced React 19 features, including concurrent rendering and automatic batching, to deliver a seamless user experience even with complex financial calculations running in the background.`,
      client: "InvestPro Capital",
      industry: "fintech",
      category: "dashboards",
      status: "Live",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
      ],
      technologies: ["React 19", "Next.js 14", "TypeScript", "D3.js", "WebSocket", "Redis"],
      completedDate: "Dec 2024",
      liveUrl: "https://demo.investpro.com",
      githubUrl: "https://github.com/karnos/fintech-dashboard",
      metrics: {
        improvement: "85% faster",
        timeline: "3 months"
      },
      keyMetrics: [
        { value: "85%", label: "Performance Boost" },
        { value: "50M+", label: "Data Points" },
        { value: "99.9%", label: "Uptime" }
      ],
      features: [
        {
          title: "Real-time Analytics",
          description: "Live market data processing with sub-second latency"
        },
        {
          title: "Advanced Charting",
          description: "Interactive D3.js visualizations with custom indicators"
        },
        {
          title: "Risk Assessment",
          description: "AI-powered risk analysis and portfolio optimization"
        },
        {
          title: "Multi-asset Support",
          description: "Comprehensive coverage of stocks, bonds, crypto, and derivatives"
        }
      ],
      architecture: "The platform utilizes a microservices architecture with React 19 on the frontend, Node.js APIs, and real-time WebSocket connections for live data streaming. Redis caching ensures optimal performance for frequently accessed data.",
      technicalHighlights: [
        "Implemented React 19\'s concurrent features for smooth UI updates",
        "Custom WebSocket manager for real-time data synchronization",
        "Advanced caching strategy reducing API calls by 70%",
        "Responsive design optimized for trading desk monitors"
      ],
      developmentProcess: [
        {
          title: "Discovery & Planning",
          description: "Comprehensive analysis of trading workflows and user requirements",
          duration: "2 weeks",
          team: "3 developers, 1 designer"
        },
        {
          title: "Architecture Design",
          description: "System architecture planning and technology stack selection",
          duration: "1 week",
          team: "2 senior developers"
        },
        {
          title: "Development Sprint",
          description: "Agile development with weekly client reviews and feedback",
          duration: "8 weeks",
          team: "4 developers, 1 QA"
        },
        {
          title: "Testing & Deployment",
          description: "Comprehensive testing and production deployment",
          duration: "2 weeks",
          team: "Full team"
        }
      ],
      results: {
        metrics: [
          { value: "85%", label: "Performance Improvement", description: "Faster data processing" },
          { value: "40%", label: "User Efficiency", description: "Reduced analysis time" },
          { value: "99.9%", label: "System Uptime", description: "Reliable performance" }
        ]
      },
      testimonial: {
        quote: "KarnOS transformed our trading operations with this incredible dashboard. The real-time analytics and intuitive interface have significantly improved our decision-making speed and accuracy.",
        author: "Sarah Chen",
        position: "Head of Trading, InvestPro Capital"
      },
      hasDemo: true
    },
    {
      id: 2,
      title: "E-commerce Mobile Revolution",
      description: "Next-generation mobile shopping experience with AI-powered recommendations and seamless checkout flow.",
      fullDescription: `This mobile e-commerce application redefines online shopping through intelligent personalization and frictionless user experience. Built for a rapidly growing retail startup, the app combines cutting-edge React Native technology with advanced AI algorithms to create a shopping experience that feels truly personal.\n\nThe project addressed the challenge of high cart abandonment rates and low user engagement in mobile commerce. Our solution implements sophisticated recommendation engines, one-click purchasing, and social shopping features that increased conversion rates by 120% within the first quarter of launch.`,
      client: "ShopSmart Inc",
      industry: "ecommerce",
      category: "mobile-apps",
      status: "Live",
      featured: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML", "Stripe", "Firebase"],
      completedDate: "Nov 2024",
      liveUrl: "https://app.shopsmart.com",
      metrics: {
        improvement: "120% conversion",
        timeline: "4 months"
      },
      keyMetrics: [
        { value: "120%", label: "Conversion Boost" },
        { value: "4.8★", label: "App Rating" },
        { value: "50K+", label: "Downloads" }
      ],
      features: [
        {
          title: "AI Recommendations",
          description: "Machine learning-powered product suggestions"
        },
        {
          title: "Social Shopping",
          description: "Share and discover products with friends"
        },
        {
          title: "One-Click Checkout",
          description: "Streamlined purchase process with saved preferences"
        },
        {
          title: "AR Try-On",
          description: "Augmented reality product visualization"
        }
      ],
      architecture: "Cross-platform React Native app with Node.js backend, MongoDB for data storage, and integrated AI services for personalization and recommendations.",
      technicalHighlights: [
        "Cross-platform development with 95% code reuse",
        "AI-powered recommendation engine with 85% accuracy",
        "Offline-first architecture for seamless shopping",
        "Advanced analytics and user behavior tracking"
      ],
      developmentProcess: [
        {
          title: "Market Research",
          description: "User behavior analysis and competitive research",
          duration: "2 weeks",
          team: "2 researchers, 1 designer"
        },
        {
          title: "UX/UI Design",
          description: "User experience design and interface prototyping",
          duration: "3 weeks",
          team: "2 designers, 1 UX researcher"
        },
        {
          title: "Development",
          description: "Cross-platform mobile app development",
          duration: "12 weeks",
          team: "3 developers, 1 QA"
        },
        {
          title: "Launch & Optimization",
          description: "App store deployment and performance optimization",
          duration: "2 weeks",
          team: "Full team"
        }
      ],
      results: {
        metrics: [
          { value: "120%", label: "Conversion Rate", description: "Increase in purchases" },
          { value: "65%", label: "User Retention", description: "30-day retention rate" },
          { value: "4.8", label: "App Store Rating", description: "User satisfaction" }
        ]
      },
      testimonial: {
        quote: "The mobile app KarnOS built for us exceeded all expectations. Our conversion rates doubled, and customer satisfaction is at an all-time high.",
        author: "Mike Johnson",
        position: "CEO, ShopSmart Inc"
      },
      hasDemo: false
    },
    {
      id: 3,
      title: "Healthcare AI Assistant",
      description: "Intelligent healthcare management system with AI-powered diagnostics and patient care optimization.",
      fullDescription: `This revolutionary healthcare AI assistant represents the future of medical technology, combining advanced artificial intelligence with intuitive user interfaces to support healthcare professionals in delivering superior patient care. Developed for a leading medical center, the system processes vast amounts of medical data to provide real-time insights, diagnostic support, and treatment recommendations.\n\nThe challenge was to create a system that could handle sensitive medical data while providing actionable insights to busy healthcare professionals. Our solution implements state-of-the-art AI algorithms, secure data handling, and an intuitive interface that integrates seamlessly into existing medical workflows.`,
      client: "MedCenter Plus",
      industry: "healthcare",
      category: "ai-solutions",
      status: "Live",
      featured: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
      ],
      technologies: ["React 19", "Python", "TensorFlow", "PostgreSQL", "Docker", "AWS"],
      completedDate: "Oct 2024",
      metrics: {
        improvement: "60% efficiency",
        timeline: "6 months"
      },
      keyMetrics: [
        { value: "60%", label: "Efficiency Gain" },
        { value: "95%", label: "Accuracy Rate" },
        { value: "1000+", label: "Patients Served" }
      ],
      features: [
        {
          title: "AI Diagnostics",
          description: "Machine learning-powered diagnostic assistance"
        },
        {
          title: "Patient Monitoring",
          description: "Real-time patient health tracking and alerts"
        },
        {
          title: "Treatment Planning",
          description: "Evidence-based treatment recommendations"
        },
        {
          title: "Data Analytics",
          description: "Comprehensive health analytics and reporting"
        }
      ],
      architecture: "React-based frontend with Python/TensorFlow AI backend, PostgreSQL database, and AWS cloud infrastructure for scalability and security.",
      technicalHighlights: [
        "HIPAA-compliant data handling and security",
        "Real-time AI processing with sub-second response times",
        "Integration with existing hospital management systems",
        "Advanced data visualization for medical insights"
      ],
      developmentProcess: [
        {
          title: "Requirements Analysis",
          description: "Medical workflow analysis and compliance requirements",
          duration: "3 weeks",
          team: "2 developers, 1 medical consultant"
        },
        {
          title: "AI Model Development",
          description: "Machine learning model training and validation",
          duration: "8 weeks",
          team: "2 AI engineers, 1 data scientist"
        },
        {
          title: "System Integration",
          description: "Integration with hospital systems and testing",
          duration: "12 weeks",
          team: "4 developers, 2 QA"
        },
        {
          title: "Deployment & Training",
          description: "Production deployment and staff training",
          duration: "3 weeks",
          team: "Full team"
        }
      ],
      results: {
        metrics: [
          { value: "60%", label: "Efficiency Improvement", description: "Faster diagnosis" },
          { value: "95%", label: "Diagnostic Accuracy", description: "AI-assisted accuracy" },
          { value: "40%", label: "Cost Reduction", description: "Operational savings" }
        ]
      },
      testimonial: {
        quote: "This AI assistant has revolutionized our diagnostic process. The accuracy and speed improvements have directly translated to better patient outcomes.",
        author: "Dr. Emily Rodriguez",
        position: "Chief Medical Officer, MedCenter Plus"
      },
      hasDemo: false
    },
    {
      id: 4,
      title: "Startup Growth Platform",
      description: "Comprehensive business intelligence platform for startups with growth tracking and investor relations.",
      fullDescription: `This comprehensive startup growth platform serves as a command center for emerging businesses, providing real-time insights into key performance indicators, growth metrics, and investor relations. Built for a venture capital firm to support their portfolio companies, the platform aggregates data from multiple sources to provide a unified view of business performance.\n\nThe challenge was to create a flexible system that could adapt to different business models while providing standardized metrics for comparison and analysis. Our solution implements advanced data visualization, automated reporting, and collaborative features that have helped over 50 startups optimize their growth strategies.`,
      client: "VentureGrow VC",
      industry: "startups",
      category: "web-apps",
      status: "Live",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      technologies: ["React 19", "Next.js", "GraphQL", "PostgreSQL", "Redis", "Vercel"],
      completedDate: "Sep 2024",
      liveUrl: "https://platform.venturegrow.com",
      metrics: {
        improvement: "200% insights",
        timeline: "5 months"
      },
      keyMetrics: [
        { value: "200%", label: "Insight Generation" },
        { value: "50+", label: "Startups Served" },
        { value: "98%", label: "User Satisfaction" }
      ],
      features: [
        {
          title: "Growth Analytics",
          description: "Comprehensive startup metrics and KPI tracking"
        },
        {
          title: "Investor Dashboard",
          description: "Real-time portfolio performance for investors"
        },
        {
          title: "Automated Reporting",
          description: "Scheduled reports and performance summaries"
        },
        {
          title: "Collaboration Tools",
          description: "Team communication and document sharing"
        }
      ],
      architecture: "Next.js application with GraphQL API, PostgreSQL database, Redis caching, and deployed on Vercel for optimal performance and scalability.",
      technicalHighlights: [
        "GraphQL API for efficient data fetching",
        "Real-time updates using WebSocket connections",
        "Advanced data visualization with custom charts",
        "Multi-tenant architecture supporting various business models"
      ],
      developmentProcess: [
        {
          title: "Stakeholder Interviews",
          description: "Requirements gathering from VCs and startups",
          duration: "2 weeks",
          team: "2 developers, 1 business analyst"
        },
        {
          title: "Platform Architecture",
          description: "System design and technology selection",
          duration: "2 weeks",
          team: "3 senior developers"
        },
        {
          title: "Development & Testing",
          description: "Agile development with continuous testing",
          duration: "16 weeks",
          team: "4 developers, 2 QA"
        },
        {
          title: "Rollout & Support",
          description: "Gradual rollout to portfolio companies",
          duration: "4 weeks",
          team: "Full team"
        }
      ],
      results: {
        metrics: [
          { value: "200%", label: "Data Insights", description: "More actionable insights" },
          { value: "75%", label: "Time Savings", description: "Reduced reporting time" },
          { value: "50+", label: "Active Users", description: "Portfolio companies" }
        ]
      },
      testimonial: {
        quote: "This platform has become indispensable for managing our portfolio. The insights and analytics have helped our startups make better data-driven decisions.",
        author: "David Park",
        position: "Managing Partner, VentureGrow VC"
      },
      hasDemo: true
    },
    {
      id: 5,
      title: "Design System Framework",
      description: "Comprehensive design system and component library for enterprise-scale applications.",
      fullDescription: `This comprehensive design system framework represents a new standard in enterprise UI consistency and developer productivity. Created for a Fortune 500 company with multiple product teams, the system provides a unified design language, reusable components, and development tools that ensure consistency across all digital touchpoints.\n\nThe challenge was to create a flexible system that could accommodate diverse product requirements while maintaining strict design consistency. Our solution includes over 200 components, comprehensive documentation, automated testing, and integration tools that have reduced development time by 50% across all product teams.`,
      client: "TechCorp Enterprise",
      industry: "enterprise",
      category: "design-systems",
      status: "Live",
      featured: false,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ],
      technologies: ["React 19", "Storybook", "TypeScript", "Figma", "Jest", "Chromatic"],
      completedDate: "Aug 2024",
      liveUrl: "https://design.techcorp.com",
      githubUrl: "https://github.com/techcorp/design-system",
      metrics: {
        improvement: "50% dev time",
        timeline: "8 months"
      },
      keyMetrics: [
        { value: "50%", label: "Dev Time Saved" },
        { value: "200+", label: "Components" },
        { value: "15", label: "Product Teams" }
      ],
      features: [
        {
          title: "Component Library",
          description: "200+ production-ready React components"
        },
        {
          title: "Design Tokens",
          description: "Centralized design variables and theming"
        },
        {
          title: "Documentation",
          description: "Comprehensive guides and API documentation"
        },
        {
          title: "Testing Suite",
          description: "Automated visual regression testing"
        }
      ],
      architecture: "React component library with TypeScript, Storybook for documentation, Jest for testing, and Chromatic for visual regression testing.",
      technicalHighlights: [
        "Automated component generation and documentation",
        "Advanced theming system with CSS custom properties",
        "Comprehensive accessibility compliance (WCAG 2.1 AA)",
        "Integration with popular design tools and frameworks"
      ],
      developmentProcess: [
        {
          title: "Design Audit",
          description: "Analysis of existing designs and inconsistencies",
          duration: "4 weeks",
          team: "3 designers, 2 developers"
        },
        {
          title: "System Architecture",
          description: "Component hierarchy and token system design",
          duration: "3 weeks",
          team: "2 senior developers, 1 designer"
        },
        {
          title: "Component Development",
          description: "Building and testing component library",
          duration: "20 weeks",
          team: "5 developers, 2 designers"
        },
        {
          title: "Adoption & Training",
          description: "Team training and gradual system adoption",
          duration: "8 weeks",
          team: "Full team"
        }
      ],
      results: {
        metrics: [
          { value: "50%", label: "Development Speed", description: "Faster feature delivery" },
          { value: "90%", label: "Design Consistency", description: "Across all products" },
          { value: "15", label: "Teams Adopted", description: "Organization-wide usage" }
        ]
      },
      testimonial: {
        quote: "This design system has transformed how we build products. The consistency and speed improvements have been remarkable across all our teams.",
        author: "Lisa Wang",
        position: "Head of Design, TechCorp Enterprise"
      },
      hasDemo: true
    },
    {
      id: 6,
      title: "Smart Manufacturing Dashboard",
      description: "IoT-powered manufacturing analytics platform with predictive maintenance and quality control.",
      fullDescription: `This smart manufacturing dashboard revolutionizes industrial operations through IoT integration and predictive analytics. Built for a leading manufacturing company, the platform connects hundreds of sensors and machines to provide real-time insights into production efficiency, quality metrics, and predictive maintenance needs.\n\nThe challenge was to create a system that could handle massive amounts of sensor data while providing actionable insights to plant managers and technicians. Our solution implements advanced data processing, machine learning algorithms, and intuitive visualizations that have reduced downtime by 40% and improved quality scores by 25%.`,
      client: "Industrial Solutions Ltd",
      industry: "enterprise",
      category: "dashboards",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
      ],
      technologies: ["React 19", "Node.js", "InfluxDB", "MQTT", "TensorFlow", "Docker"],
      completedDate: "Jan 2025",
      metrics: {
        improvement: "40% downtime",
        timeline: "7 months"
      },
      keyMetrics: [
        { value: "40%", label: "Downtime Reduction" },
        { value: "25%", label: "Quality Improvement" },
        { value: "500+", label: "Connected Sensors" }
      ],
      features: [
        {
          title: "Real-time Monitoring",
          description: "Live production line monitoring and alerts"
        },
        {
          title: "Predictive Maintenance",
          description: "AI-powered equipment failure prediction"
        },
        {
          title: "Quality Analytics",
          description: "Statistical process control and quality tracking"
        },
        {
          title: "Energy Management",
          description: "Power consumption optimization and reporting"
        }
      ],
      architecture: "React dashboard with Node.js backend, InfluxDB for time-series data, MQTT for IoT communication, and TensorFlow for predictive analytics.",
      technicalHighlights: [
        "High-throughput data processing (10K+ messages/second)",
        "Real-time anomaly detection and alerting",
        "Advanced time-series data visualization",
        "Integration with existing manufacturing systems"
      ],
      developmentProcess: [
        {
          title: "Industrial Assessment",
          description: "Manufacturing process analysis and sensor mapping",
          duration: "3 weeks",
          team: "2 developers, 1 industrial engineer"
        },
        {
          title: "IoT Integration",
          description: "Sensor connectivity and data pipeline setup",
          duration: "6 weeks",
          team: "3 developers, 1 IoT specialist"
        },
        {
          title: "Analytics Development",
          description: "Dashboard creation and ML model implementation",
          duration: "16 weeks",
          team: "4 developers, 1 data scientist"
        },
        {
          title: "Testing & Deployment",
          description: "Production testing and system deployment",
          duration: "4 weeks",
          team: "Full team"
        }
      ],
      results: {
        metrics: [
          { value: "40%", label: "Downtime Reduction", description: "Preventive maintenance" },
          { value: "25%", label: "Quality Improvement", description: "Defect reduction" },
          { value: "30%", label: "Energy Savings", description: "Optimized consumption" }
        ]
      },
      testimonial: {
        quote: "The predictive capabilities of this system have transformed our maintenance strategy. We're preventing issues before they occur and saving significant costs.",
        author: "Robert Chen",
        position: "Plant Manager, Industrial Solutions Ltd"
      },
      hasDemo: false
    }
  ];

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    let filtered = projects?.filter(project => {
      const matchesCategory = activeCategory === 'all' || project?.category === activeCategory;
      const matchesIndustry = activeIndustry === 'all' || project?.industry === activeIndustry;
      const matchesTechnology = activeTechnology === 'all' || 
        project?.technologies?.some(tech => 
          tech?.toLowerCase()?.includes(activeTechnology === 'react' ? 'react' : 
                                      activeTechnology === 'nextjs' ? 'next' :
                                      activeTechnology === 'ai' ? 'ai' :
                                      activeTechnology === 'mobile' ? 'native' :
                                      activeTechnology === 'node' ? 'node' : activeTechnology)
        );
      const matchesSearch = searchQuery === '' || 
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.client?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      return matchesCategory && matchesIndustry && matchesTechnology && matchesSearch;
    });

    // Sort projects
    switch (sortBy) {
      case 'featured':
        filtered?.sort((a, b) => (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0));
        break;
      case 'alphabetical':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      case 'industry':
        filtered?.sort((a, b) => a?.industry?.localeCompare(b?.industry));
        break;
      default: // recent
        filtered?.sort((a, b) => new Date(b.completedDate) - new Date(a.completedDate));
    }

    return filtered;
  }, [projects, activeCategory, activeIndustry, activeTechnology, searchQuery, sortBy]);

  // Featured project (first featured project or first project)
  const featuredProject = projects?.find(p => p?.featured) || projects?.[0];

  // Handle project selection
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Icon name="Grid3X3" size={24} color="white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
                Portfolio Universe
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our multi-dimensional showcase of transformative digital solutions. 
              Each project represents a unique journey of innovation, technical excellence, 
              and measurable business impact.
            </p>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{projects?.length}+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{new Set(projects.map(p => p.industry))?.size}+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StatsOverview projects={projects} />
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FilterBar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeIndustry={activeIndustry}
              setActiveIndustry={setActiveIndustry}
              activeTechnology={activeTechnology}
              setActiveTechnology={setActiveTechnology}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              viewMode={viewMode}
              setViewMode={setViewMode}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </motion.div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredProjects?.length} Project{filteredProjects?.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-muted-foreground">
                {activeCategory !== 'all' && `${activeCategory?.replace('-', ' ')} • `}
                {activeIndustry !== 'all' && `${activeIndustry} • `}
                {activeTechnology !== 'all' && `${activeTechnology} • `}
                Sorted by {sortBy?.replace('-', ' ')}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
              >
                Export Portfolio
              </Button>
              <Link to="/contact-consultation-center">
                <Button
                  variant="default"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="right"
                >
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>

          {/* Projects Grid/List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {filteredProjects?.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
              }`}>
                {filteredProjects?.map((project, index) => (
                  <motion.div
                    key={project?.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search terms to find relevant projects.
                </p>
                <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveIndustry('all');
                    setActiveTechnology('all');
                    setSearchQuery('');
                    setSortBy('recent');
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can create a custom solution that drives your business forward. 
              Every great project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-consultation-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="right"
                  className="animate-pulse-subtle"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services-ecosystem-overview">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Layers"
                  iconPosition="right"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Similar Projects in Modal */}
      {selectedProject && (
        <SimilarProjects
          currentProject={selectedProject}
          allProjects={projects}
          onViewProject={handleViewDetails}
        />
      )}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <div>
                  <div className="text-xl font-bold">KarnOS</div>
                  <div className="text-sm text-gray-400">Digital Agency</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming businesses through innovative technology solutions. 
                Every project is a journey of digital excellence.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Github" />
                <Button variant="ghost" size="sm" iconName="Linkedin" />
                <Button variant="ghost" size="sm" iconName="Twitter" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/homepage-digital-agency-platform" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/services-ecosystem-overview" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link to="/innovation-lab-technology-leadership-hub" className="block text-gray-400 hover:text-white transition-colors">
                  Innovation Lab
                </Link>
                <Link to="/contact-consultation-center" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>AI Solutions</div>
                <div>Design Systems</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date()?.getFullYear()} KarnOS Digital Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioUniverse;