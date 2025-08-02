import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServiceStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "500+",
      label: "Happy Clients",
      description: "Successful projects delivered",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Code",
      value: "1M+",
      label: "Lines of Code",
      description: "Written with precision",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "Clock",
      value: "99.9%",
      label: "Uptime",
      description: "Reliable performance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "Award",
      value: "50+",
      label: "Awards Won",
      description: "Industry recognition",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
            
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat?.color} shadow-lg mb-4`}>
              <Icon name={stat?.icon} size={24} color="white" strokeWidth={2} />
            </div>
            
            {/* Content */}
            <div className="relative">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat?.value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{stat?.label}</div>
              <div className="text-xs text-gray-500">{stat?.description}</div>
            </div>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent"
              whileHover={{ borderColor: "rgba(79, 70, 229, 0.3)" }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceStats;