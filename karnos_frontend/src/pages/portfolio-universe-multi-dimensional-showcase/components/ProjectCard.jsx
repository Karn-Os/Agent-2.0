import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay with Quick Actions */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project?.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-white/90 hover:bg-white text-gray-900 border-white/20"
              onClick={() => window.open(project?.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
          <Button
            variant="default"
            size="sm"
            iconName="Eye"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              project?.status === 'Live' ?'bg-success text-white' 
                : project?.status === 'In Progress' ?'bg-warning text-white' :'bg-gray-500 text-white'
            }`}>
              {project?.status}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-3 left-3">
            <div className="bg-gradient-primary text-white px-2 py-1 text-xs font-medium rounded-full flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Category & Industry */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {project?.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {project?.industry}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
          {project?.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{project?.technologies?.length - 3} more
            </span>
          )}
        </div>

        {/* Metrics */}
        {project?.metrics && (
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Icon name="TrendingUp" size={12} />
              <span>{project?.metrics?.improvement}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{project?.metrics?.timeline}</span>
            </div>
          </div>
        )}

        {/* Client Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-white">
                {project?.client?.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {project?.client}
            </span>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Icon name="Calendar" size={12} />
            <span>{project?.completedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;