import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InteractiveDemo = ({ type, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && type === 'video') {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % 3);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, type]);

  const renderWebDevDemo = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-xs">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {'<Component />'}
        </motion.div>
      </div>
    </div>
  );

  const renderAppDevDemo = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-28 bg-gray-900 rounded-lg border-2 border-gray-700 relative overflow-hidden">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full"></div>
        <motion.div
          className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center justify-center h-full">
            <Icon name="Smartphone" size={16} color="white" />
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderVideoDemo = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-12 bg-gray-800 rounded flex items-center justify-center">
          <motion.div
            animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
          >
            <Icon 
              name={isPlaying ? "Pause" : "Play"} 
              size={16} 
              color="white"
              className="cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            />
          </motion.div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-300 rounded">
          <motion.div
            className="h-full bg-red-500 rounded"
            animate={{ width: isPlaying ? '100%' : '0%' }}
            transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
          />
        </div>
      </div>
    </div>
  );

  const renderUIUXDemo = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="space-y-2">
        {[0, 1, 2]?.map((index) => (
          <motion.div
            key={index}
            className="w-16 h-2 bg-gray-300 rounded"
            animate={{ 
              backgroundColor: activeIndex === index ? '#4F46E5' : '#E5E7EB',
              width: activeIndex === index ? '20px' : '16px'
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );

  const renderAIDemo = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-8 h-8 border-2 border-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="Zap" size={12} className="text-purple-500" />
        </div>
      </div>
    </div>
  );

  const renderDataDemo = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-end space-x-1">
        {[40, 60, 80, 45, 70]?.map((height, index) => (
          <motion.div
            key={index}
            className="w-2 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
            style={{ height: `${height}%` }}
            animate={{ height: [`${height * 0.5}%`, `${height}%`] }}
            transition={{ duration: 1, delay: index * 0.1, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </div>
    </div>
  );

  const demoComponents = {
    web: renderWebDevDemo,
    app: renderAppDevDemo,
    video: renderVideoDemo,
    uiux: renderUIUXDemo,
    ai: renderAIDemo,
    data: renderDataDemo
  };

  return demoComponents?.[type]?.() || <div className="w-full h-full bg-gray-100 rounded" />;
};

export default InteractiveDemo;