import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: "MessageCircle",
      title: "Discovery & Consultation",
      duration: "1-2 weeks",
      description: "We dive deep into your requirements, goals, and vision to create a comprehensive project roadmap.",
      deliverables: ["Requirements Document", "Project Roadmap", "Technical Specification", "Timeline & Budget"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Palette",
      title: "Design & Prototyping",
      duration: "2-3 weeks",
      description: "Our design team creates stunning visuals and interactive prototypes that bring your vision to life.",
      deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototype", "Design System"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "Code",
      title: "Development & Integration",
      duration: "4-8 weeks",
      description: "Expert developers build your solution using cutting-edge technologies and best practices.",
      deliverables: ["Clean Code", "API Integration", "Database Setup", "Security Implementation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "TestTube",
      title: "Testing & Quality Assurance",
      duration: "1-2 weeks",
      description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally.",
      deliverables: ["Test Reports", "Performance Optimization", "Security Audit", "Cross-platform Testing"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "Rocket",
      title: "Launch & Deployment",
      duration: "1 week",
      description: "We handle the complete deployment process and ensure a smooth launch of your solution.",
      deliverables: ["Production Deployment", "Domain Setup", "SSL Configuration", "Launch Support"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "HeadphonesIcon",
      title: "Support & Maintenance",
      duration: "Ongoing",
      description: "Continuous support and maintenance to keep your solution running smoothly and up-to-date.",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Feature Enhancements"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch and beyond
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 overflow-x-auto pb-4">
            {processSteps?.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 min-w-[120px] ${
                  activeStep === index
                    ? 'bg-primary/10 border-2 border-primary' :'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${step?.color} shadow-lg`}>
                  <Icon name={step?.icon} size={20} color="white" />
                </div>
                <div className="text-center">
                  <div className={`text-sm font-medium ${activeStep === index ? 'text-primary' : 'text-gray-700'}`}>
                    Step {index + 1}
                  </div>
                  <div className="text-xs text-gray-500">{step?.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-xl p-6"
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${processSteps?.[activeStep]?.color} shadow-lg`}>
              <Icon name={processSteps?.[activeStep]?.icon} size={32} color="white" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {processSteps?.[activeStep]?.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {processSteps?.[activeStep]?.description}
              </p>
              <div className="flex items-center space-x-2 mt-3">
                <Icon name="Clock" size={16} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Duration: {processSteps?.[activeStep]?.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Deliverables</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {processSteps?.[activeStep]?.deliverables?.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200/50"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{deliverable}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Process Progress</span>
            <span className="text-sm text-gray-500">
              {activeStep + 1} of {processSteps?.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              animate={{ width: `${((activeStep + 1) / processSteps?.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;