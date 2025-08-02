import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BetaToolsSection = () => {
  const [activeTab, setActiveTab] = useState('ai-tools');

  const betaTools = {
    'ai-tools': [
      {
        id: 1,
        name: "AI Design Assistant",
        description: "Generate UI components and layouts using natural language prompts with React 19 integration.",
        status: "Beta",
        users: 234,
        icon: "Palette",
        features: ["Natural Language UI", "React 19 Components", "Tailwind Integration", "Real-time Preview"],
        demoUrl: "#",
        waitlist: false
      },
      {
        id: 2,
        name: "Smart Code Reviewer",
        description: "AI-powered code analysis with performance optimization suggestions and security scanning.",
        status: "Alpha",
        users: 89,
        icon: "Search",
        features: ["Performance Analysis", "Security Scanning", "Best Practices", "Auto-fix Suggestions"],
        demoUrl: "#",
        waitlist: true
      },
      {
        id: 3,
        name: "Workflow Automator",
        description: "Visual workflow builder with AI-powered task automation and integration capabilities.",
        status: "Beta",
        users: 156,
        icon: "Workflow",
        features: ["Visual Builder", "API Integrations", "Conditional Logic", "Real-time Monitoring"],
        demoUrl: "#",
        waitlist: false
      }
    ],
    'dev-tools': [
      {
        id: 4,
        name: "React 19 Playground",
        description: "Interactive environment for testing React 19 concurrent features and server components.",
        status: "Stable",
        users: 567,
        icon: "Code",
        features: ["Concurrent Rendering", "Server Components", "Suspense Boundaries", "Performance Metrics"],
        demoUrl: "#",
        waitlist: false
      },
      {
        id: 5,
        name: "Component Generator",
        description: "Generate production-ready React components with TypeScript, tests, and documentation.",
        status: "Beta",
        users: 345,
        icon: "Package",
        features: ["TypeScript Support", "Auto Tests", "Documentation", "Storybook Integration"],
        demoUrl: "#",
        waitlist: false
      },
      {
        id: 6,
        name: "Performance Profiler",
        description: "Advanced React performance monitoring with real-time metrics and optimization insights.",
        status: "Alpha",
        users: 123,
        icon: "Activity",
        features: ["Real-time Metrics", "Bundle Analysis", "Memory Profiling", "Optimization Tips"],
        demoUrl: "#",
        waitlist: true
      }
    ],
    'automation': [
      {
        id: 7,
        name: "Deploy Bot",
        description: "Intelligent deployment automation with rollback capabilities and environment management.",
        status: "Beta",
        users: 278,
        icon: "Rocket",
        features: ["Auto Deployment", "Rollback System", "Environment Sync", "Health Monitoring"],
        demoUrl: "#",
        waitlist: false
      },
      {
        id: 8,
        name: "Test Generator",
        description: "AI-powered test case generation with coverage analysis and automated test maintenance.",
        status: "Alpha",
        users: 91,
        icon: "TestTube",
        features: ["Auto Test Cases", "Coverage Analysis", "Test Maintenance", "CI/CD Integration"],
        demoUrl: "#",
        waitlist: true
      },
      {
        id: 9,
        name: "Documentation AI",
        description: "Automatically generate and maintain technical documentation from code and comments.",
        status: "Beta",
        users: 189,
        icon: "FileText",
        features: ["Auto Documentation", "Code Analysis", "API Docs", "Version Control"],
        demoUrl: "#",
        waitlist: false
      }
    ]
  };

  const tabs = [
    { id: 'ai-tools', name: 'AI Tools', icon: 'Brain' },
    { id: 'dev-tools', name: 'Dev Tools', icon: 'Code' },
    { id: 'automation', name: 'Automation', icon: 'Zap' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Alpha': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Beta': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Stable': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
            className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 mb-6"
          >
            <Icon name="Beaker" size={16} className="text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Beta Access</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Experimental <span className="text-gradient">Beta Tools</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get early access to cutting-edge development tools and AI-powered solutions before they become mainstream.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {betaTools?.[activeTab]?.map((tool, index) => (
            <motion.div
              key={tool?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Tool Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={tool?.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tool?.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(tool?.status)}`}>
                        {tool?.status}
                      </span>
                      <span className="text-xs text-gray-500">{tool?.users} users</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {tool?.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {tool?.features?.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                {tool?.waitlist ? (
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Clock"
                    iconPosition="left"
                  >
                    Join Waitlist
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Play"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Try Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Access
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to contribute to our innovation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our developer community and help shape the future of web development tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                iconName="Github"
                iconPosition="left"
              >
                View on GitHub
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Join Discord
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaToolsSection;