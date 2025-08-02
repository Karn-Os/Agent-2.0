import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: "Frontend Excellence",
      icon: "Monitor",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React 19", level: 95, description: "Latest features & concurrent rendering" },
        { name: "Next.js 14", level: 92, description: "App Router & Server Components" },
        { name: "Vite", level: 88, description: "Lightning-fast development" },
        { name: "Tailwind CSS", level: 94, description: "Utility-first styling" },
        { name: "Framer Motion", level: 85, description: "Smooth animations" }
      ]
    },
    backend: {
      title: "Backend Power",
      icon: "Server",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", level: 90, description: "Scalable server solutions" },
        { name: "Python", level: 88, description: "AI & data processing" },
        { name: "PostgreSQL", level: 85, description: "Robust data management" },
        { name: "Redis", level: 82, description: "High-performance caching" },
        { name: "Docker", level: 87, description: "Containerized deployments" }
      ]
    },
    mobile: {
      title: "Mobile Innovation",
      icon: "Smartphone",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "React Native", level: 89, description: "Cross-platform apps" },
        { name: "Flutter", level: 85, description: "Beautiful native interfaces" },
        { name: "Swift", level: 82, description: "iOS native development" },
        { name: "Kotlin", level: 80, description: "Android excellence" },
        { name: "Expo", level: 87, description: "Rapid prototyping" }
      ]
    },
    ai: {
      title: "AI & Automation",
      icon: "Zap",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "OpenAI GPT", level: 92, description: "Advanced language models" },
        { name: "TensorFlow", level: 85, description: "Machine learning frameworks" },
        { name: "Langchain", level: 88, description: "LLM application development" },
        { name: "Pinecone", level: 83, description: "Vector database solutions" },
        { name: "Zapier", level: 90, description: "Workflow automation" }
      ]
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      {/* Category Tabs */}
      <div className="border-b border-gray-200/50">
        <div className="flex overflow-x-auto">
          {Object.entries(techCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === key
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Technology Content */}
      <div className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${techCategories?.[activeCategory]?.color} shadow-lg`}>
                <Icon name={techCategories?.[activeCategory]?.icon} size={24} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{techCategories?.[activeCategory]?.title}</h3>
                <p className="text-gray-600">Our expertise in cutting-edge technologies</p>
              </div>
            </div>

            {/* Technology List */}
            <div className="space-y-4">
              {techCategories?.[activeCategory]?.technologies?.map((tech, index) => (
                <motion.div
                  key={tech?.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{tech?.name}</h4>
                      <p className="text-sm text-gray-600">{tech?.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{tech?.level}%</div>
                      <div className="text-xs text-gray-500">Proficiency</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${techCategories?.[activeCategory]?.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech?.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ready to leverage these technologies?</h4>
                  <p className="text-sm text-gray-600">Let's discuss how we can apply them to your project</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechnologyShowcase;