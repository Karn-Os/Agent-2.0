import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-primary text-primary-foreground';
      case 'on-hold':
        return 'bg-warning text-warning-foreground';
      case 'planning':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-primary';
    if (progress >= 25) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Icon name={project?.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{project?.name}</h3>
            <p className="text-sm text-muted-foreground">{project?.type}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
          {project?.status?.replace('-', ' ')?.toUpperCase()}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project?.description}</p>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm font-semibold text-foreground">{project?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project?.progress)}`}
            style={{ width: `${project?.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Due: {project?.dueDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{project?.teamSize} members</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project?.teamMembers?.slice(0, 3)?.map((member, index) => (
            <Image
              key={index}
              src={member?.avatar}
              alt={member?.name}
              className="w-8 h-8 rounded-full border-2 border-card"
            />
          ))}
          {project?.teamMembers?.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">
                +{project?.teamMembers?.length - 3}
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => onViewDetails(project)}
          className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <span className="text-sm font-medium">View Details</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;