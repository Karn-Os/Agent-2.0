import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ projects }) => {
  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: projects?.length,
      description: 'Successfully delivered',
      color: 'primary'
    },
    {
      icon: 'Users',
      label: 'Happy Clients',
      value: new Set(projects.map(p => p.client))?.size,
      description: 'Across industries',
      color: 'secondary'
    },
    {
      icon: 'Code',
      label: 'Technologies',
      value: new Set(projects.flatMap(p => p.technologies))?.size,
      description: 'Modern tech stack',
      color: 'accent'
    },
    {
      icon: 'Award',
      label: 'Success Rate',
      value: '100%',
      description: 'Project completion',
      color: 'success'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-secondary/10 text-secondary',
      accent: 'bg-accent/10 text-accent',
      success: 'bg-success/10 text-success'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat?.color)}`}>
              <Icon name={stat?.icon} size={24} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stat?.value}</div>
              <div className="text-sm font-medium text-gray-700">{stat?.label}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{stat?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;