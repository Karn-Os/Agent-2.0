import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary text-white px-3 py-1 text-sm font-medium rounded-full flex items-center space-x-2">
              <Icon name="Star" size={14} />
              <span>Featured Project</span>
            </div>
            <span className="text-sm text-muted-foreground">{project?.category}</span>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {project?.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project?.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {project?.keyMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{metric?.value}</div>
                <div className="text-sm text-muted-foreground">{metric?.label}</div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Built with</h4>
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.slice(0, 6)?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 text-sm rounded-full border border-gray-200/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              iconName="Eye"
              iconPosition="right"
              onClick={() => onViewDetails(project)}
            >
              View Case Study
            </Button>
            {project?.liveUrl && (
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open(project?.liveUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
            <Button
              variant="ghost"
              iconName="MessageCircle"
              iconPosition="right"
            >
              Discuss Similar Project
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay for Demo */}
            {project?.hasDemo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Play" size={24} className="text-primary ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={20} color="white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {project?.metrics?.improvement}
                </div>
                <div className="text-xs text-muted-foreground">Performance Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;