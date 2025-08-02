import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ milestones }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'in-progress':
        return 'Clock';
      case 'upcoming':
        return 'Circle';
      case 'delayed':
        return 'AlertCircle';
      default:
        return 'Circle';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10 border-success/20';
      case 'in-progress':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'upcoming':
        return 'text-muted-foreground bg-muted border-border';
      case 'delayed':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getConnectorColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success';
      case 'in-progress':
        return 'bg-primary';
      default:
        return 'bg-border';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Project Timeline</h3>
        <button className="text-primary hover:text-primary/80 transition-colors duration-200">
          <Icon name="Calendar" size={20} />
        </button>
      </div>
      <div className="relative">
        {milestones?.map((milestone, index) => (
          <div key={milestone?.id} className="relative flex items-start pb-8 last:pb-0">
            {/* Connector Line */}
            {index < milestones?.length - 1 && (
              <div 
                className={`absolute left-6 top-12 w-0.5 h-16 ${getConnectorColor(milestone?.status)}`}
              ></div>
            )}
            
            {/* Status Icon */}
            <div className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(milestone?.status)}`}>
              <Icon name={getStatusIcon(milestone?.status)} size={20} />
            </div>

            {/* Content */}
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-semibold text-foreground">{milestone?.title}</h4>
                <span className="text-sm text-muted-foreground">{milestone?.date}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{milestone?.description}</p>
              
              {milestone?.deliverables && milestone?.deliverables?.length > 0 && (
                <div className="mb-3">
                  <h5 className="text-sm font-medium text-foreground mb-2">Deliverables:</h5>
                  <ul className="space-y-1">
                    {milestone?.deliverables?.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" size={14} className="text-success" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {milestone?.status === 'in-progress' && milestone?.progress && (
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Progress</span>
                    <span className="text-sm font-semibold text-foreground">{milestone?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${milestone?.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {milestone?.team && milestone?.team?.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Team:</span>
                  <div className="flex -space-x-1">
                    {milestone?.team?.slice(0, 3)?.map((member, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-card flex items-center justify-center"
                        title={member?.name}
                      >
                        <span className="text-xs font-medium text-white">
                          {member?.name?.charAt(0)}
                        </span>
                      </div>
                    ))}
                    {milestone?.team?.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                        <span className="text-xs font-medium text-muted-foreground">
                          +{milestone?.team?.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">
          View Full Timeline
        </button>
      </div>
    </div>
  );
};

export default ProjectTimeline;