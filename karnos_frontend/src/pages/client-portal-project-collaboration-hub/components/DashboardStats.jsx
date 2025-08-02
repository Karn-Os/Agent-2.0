import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardStats = ({ stats }) => {
  const getStatIcon = (type) => {
    switch (type) {
      case 'projects':
        return 'FolderOpen';
      case 'tasks':
        return 'CheckSquare';
      case 'messages':
        return 'MessageCircle';
      case 'files':
        return 'FileText';
      case 'hours':
        return 'Clock';
      case 'team':
        return 'Users';
      default:
        return 'BarChart3';
    }
  };

  const getStatColor = (type) => {
    switch (type) {
      case 'projects':
        return 'bg-primary/10 text-primary';
      case 'tasks':
        return 'bg-success/10 text-success';
      case 'messages':
        return 'bg-accent/10 text-accent';
      case 'files':
        return 'bg-secondary/10 text-secondary';
      case 'hours':
        return 'bg-warning/10 text-warning';
      case 'team':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const formatValue = (value, type) => {
    if (type === 'hours') {
      return `${value}h`;
    }
    if (typeof value === 'number' && value >= 1000) {
      return `${(value / 1000)?.toFixed(1)}k`;
    }
    return value?.toString();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {stats?.map((stat) => (
        <div key={stat?.id} className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-all duration-300 card-hover">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatColor(stat?.type)}`}>
              <Icon name={getStatIcon(stat?.type)} size={20} />
            </div>
            {stat?.trend && (
              <div className={`flex items-center space-x-1 ${
                stat?.trend > 0 ? 'text-success' : stat?.trend < 0 ? 'text-error' : 'text-muted-foreground'
              }`}>
                <Icon 
                  name={stat?.trend > 0 ? 'TrendingUp' : stat?.trend < 0 ? 'TrendingDown' : 'Minus'} 
                  size={14} 
                />
                <span className="text-xs font-medium">
                  {stat?.trend > 0 ? '+' : ''}{stat?.trend}%
                </span>
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-foreground">
              {formatValue(stat?.value, stat?.type)}
            </h3>
            <p className="text-sm text-muted-foreground">{stat?.label}</p>
            {stat?.subtitle && (
              <p className="text-xs text-muted-foreground">{stat?.subtitle}</p>
            )}
          </div>

          {stat?.progress !== undefined && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs font-medium text-foreground">{stat?.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    stat?.progress >= 80 ? 'bg-success' : 
                    stat?.progress >= 50 ? 'bg-primary' : 
                    stat?.progress >= 25 ? 'bg-warning' : 'bg-error'
                  }`}
                  style={{ width: `${stat?.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;