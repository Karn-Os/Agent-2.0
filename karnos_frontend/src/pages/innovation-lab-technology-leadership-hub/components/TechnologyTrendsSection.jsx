import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyTrendsSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(2025);

  const technologyTrends = {
    2025: [
      {
        id: 1,
        title: "React 19 Mainstream Adoption",
        description: "Concurrent rendering and server components become standard in production applications.",
        impact: "High",
        category: "Frontend",
        icon: "Zap",
        progress: 75,
        adoptionRate: "68%",
        keyFeatures: ["Concurrent Rendering", "Server Components", "Improved Suspense", "Better DevTools"]
      },
      {
        id: 2,
        title: "AI-Powered Development Tools",
        description: "Code generation and automated testing tools reach production-ready maturity.",
        impact: "High",
        category: "AI/ML",
        icon: "Brain",
        progress: 60,
        adoptionRate: "45%",
        keyFeatures: ["Code Generation", "Automated Testing", "Bug Detection", "Performance Optimization"]
      },
      {
        id: 3,
        title: "Edge Computing Integration",
        description: "Serverless functions and edge computing become default for web applications.",
        impact: "Medium",
        category: "Infrastructure",
        icon: "Globe",
        progress: 55,
        adoptionRate: "38%",
        keyFeatures: ["Edge Functions", "CDN Integration", "Reduced Latency", "Global Distribution"]
      }
    ],
    2026: [
      {
        id: 4,
        title: "WebAssembly Mainstream",
        description: "WASM becomes standard for high-performance web applications and complex computations.",
        impact: "High",
        category: "Performance",
        icon: "Cpu",
        progress: 40,
        adoptionRate: "25%",
        keyFeatures: ["Near-Native Performance", "Multi-Language Support", "Browser Compatibility", "Security Sandbox"]
      },
      {
        id: 5,
        title: "Quantum-Safe Cryptography",
        description: "Post-quantum cryptographic algorithms become necessary for web security.",
        impact: "Critical",
        category: "Security",
        icon: "Shield",
        progress: 30,
        adoptionRate: "15%",
        keyFeatures: ["Quantum Resistance", "Enhanced Security", "Future-Proof Encryption", "Compliance Ready"]
      },
      {
        id: 6,
        title: "Immersive Web Experiences",
        description: "WebXR and 3D web experiences become common in e-commerce and education.",
        impact: "Medium",
        category: "UX/UI",
        icon: "Eye",
        progress: 35,
        adoptionRate: "20%",
        keyFeatures: ["WebXR Support", "3D Interactions", "AR Integration", "Immersive Commerce"]
      }
    ],
    2027: [
      {
        id: 7,
        title: "Autonomous Web Development",
        description: "AI systems capable of building complete applications from natural language descriptions.",
        impact: "Revolutionary",
        category: "AI/ML",
        icon: "Robot",
        progress: 20,
        adoptionRate: "8%",
        keyFeatures: ["Natural Language Programming", "Auto Architecture", "Self-Healing Code", "Continuous Optimization"]
      },
      {
        id: 8,
        title: "Decentralized Web Infrastructure",
        description: "Blockchain-based hosting and content delivery networks become viable alternatives.",
        impact: "High",
        category: "Infrastructure",
        icon: "Network",
        progress: 25,
        adoptionRate: "12%",
        keyFeatures: ["Decentralized Hosting", "Censorship Resistance", "Token Economics", "Peer-to-Peer CDN"]
      },
      {
        id: 9,
        title: "Neural Interface Integration",
        description: "Brain-computer interfaces enable direct interaction with web applications.",
        impact: "Experimental",
        category: "Interface",
        icon: "Waves",
        progress: 10,
        adoptionRate: "2%",
        keyFeatures: ["Thought Control", "Accessibility Enhancement", "Direct Neural Input", "Cognitive Computing"]
      }
    ]
  };

  const timelineYears = [2025, 2026, 2027];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Revolutionary': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Experimental': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'bg-indigo-50 text-indigo-700',
      'AI/ML': 'bg-purple-50 text-purple-700',
      'Infrastructure': 'bg-green-50 text-green-700',
      'Performance': 'bg-orange-50 text-orange-700',
      'Security': 'bg-red-50 text-red-700',
      'UX/UI': 'bg-pink-50 text-pink-700',
      'Interface': 'bg-cyan-50 text-cyan-700'
    };
    return colors?.[category] || 'bg-gray-50 text-gray-700';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-4 py-2 mb-6"
          >
            <Icon name="TrendingUp" size={16} className="text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Future Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Technology <span className="text-gradient">Trends</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore emerging technologies and their projected impact on web development over the next three years.
          </motion.p>
        </div>

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {timelineYears?.map((year) => (
              <button
                key={year}
                onClick={() => setActiveTimeline(year)}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTimeline === year
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Trends Grid */}
        <motion.div
          key={activeTimeline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {technologyTrends?.[activeTimeline]?.map((trend, index) => (
            <motion.div
              key={trend?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Trend Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={trend?.icon} size={24} color="white" />
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(trend?.category)}`}>
                      {trend?.category}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getImpactColor(trend?.impact)}`}>
                  {trend?.impact}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                {trend?.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {trend?.description}
              </p>

              {/* Progress & Adoption */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Market Readiness</span>
                  <span className="text-sm text-gray-600">{trend?.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${trend?.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">Current Adoption</span>
                  <span className="text-xs font-medium text-indigo-600">{trend?.adoptionRate}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {trend?.keyFeatures?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={12} className="text-green-500" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Planning</h3>
                <p className="text-gray-600 text-sm">
                  Plan your technology roadmap based on emerging trends and market readiness.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  Identify opportunities to leverage cutting-edge technologies for competitive advantage.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Get personalized guidance on technology adoption and implementation strategies.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                className="animate-pulse-subtle"
              >
                Schedule Technology Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyTrendsSection;