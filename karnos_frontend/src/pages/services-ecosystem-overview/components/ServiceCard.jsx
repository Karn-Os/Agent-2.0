import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index, onExpand, isExpanded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isExpanded ? 'col-span-full' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onExpand(service?.id)}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-white border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 ${
        isExpanded ? 'min-h-[600px]' : 'h-[400px]'
      }`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service?.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Header Section */}
        <div className="relative p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${service?.gradient} shadow-lg`}>
              <Icon name={service?.icon} size={24} color="white" strokeWidth={2} />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {service?.category}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="ChevronDown" size={20} className="text-gray-400" />
              </motion.div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service?.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{service?.description}</p>
        </div>

        {/* Quick Stats */}
        <div className="px-6 pb-4">
          <div className="grid grid-cols-3 gap-4">
            {service?.stats?.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-gray-900">{stat?.value}</div>
                <div className="text-xs text-gray-500">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="px-6 pb-6">
          <div className="relative h-32 bg-gray-50 rounded-lg overflow-hidden border border-gray-200/50">
            <div className="absolute inset-0 flex items-center justify-center">
              {service?.demoComponent}
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: isHovered ? ['-100%', '100%'] : '-100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="border-t border-gray-200/50"
            >
              <div className="p-6 space-y-6">
                {/* Technology Stack */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service?.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Preview */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recent Success Story</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{service?.caseStudy?.client?.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{service?.caseStudy?.client}</h5>
                        <p className="text-sm text-gray-600 mt-1">{service?.caseStudy?.result}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs text-green-600 font-medium">
                            +{service?.caseStudy?.improvement}
                          </span>
                          <span className="text-xs text-gray-500">
                            {service?.caseStudy?.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Starting From</h4>
                    <div className="text-2xl font-bold text-primary">{service?.pricing?.starting}</div>
                    <div className="text-sm text-gray-500">{service?.pricing?.note}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                    <div className="text-2xl font-bold text-secondary">{service?.timeline?.typical}</div>
                    <div className="text-sm text-gray-500">{service?.timeline?.note}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Discuss Project
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                    className="flex-1"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;