import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'milestone':
        return 'CheckCircle';
      case 'comment':
        return 'MessageCircle';
      case 'file':
        return 'FileText';
      case 'meeting':
        return 'Video';
      case 'update':
        return 'Bell';
      default:
        return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'milestone':
        return 'text-success';
      case 'comment':
        return 'text-primary';
      case 'file':
        return 'text-secondary';
      case 'meeting':
        return 'text-accent';
      case 'update':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <button className="text-primary hover:text-primary/80 transition-colors duration-200">
          <Icon name="MoreHorizontal" size={20} />
        </button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities?.map((activity, index) => (
          <div key={activity?.id} className="flex items-start space-x-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
            <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Image
                  src={activity?.user?.avatar}
                  alt={activity?.user?.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium text-foreground">{activity?.user?.name}</span>
                <span className="text-xs text-muted-foreground">{formatTimeAgo(activity?.timestamp)}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">{activity?.message}</p>
              
              {activity?.attachment && (
                <div className="flex items-center space-x-2 p-2 bg-muted rounded-lg">
                  <Icon name="Paperclip" size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{activity?.attachment?.name}</span>
                  <button className="text-xs text-primary hover:text-primary/80">
                    Download
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;