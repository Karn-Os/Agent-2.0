import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SimilarProjects = ({ currentProject, allProjects, onViewProject }) => {
  // Find similar projects based on category, industry, or technologies
  const similarProjects = allProjects?.filter(project => 
      project?.id !== currentProject?.id && (
        project?.category === currentProject?.category ||
        project?.industry === currentProject?.industry ||
        project?.technologies?.some(tech => currentProject?.technologies?.includes(tech))
      )
    )?.slice(0, 3);

  if (similarProjects?.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Similar Projects</h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProjects?.map((project) => (
          <div
            key={project?.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            onClick={() => onViewProject(project)}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Eye" size={16} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {project?.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project?.industry}
                </span>
              </div>

              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                {project?.title}
              </h4>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {project?.description}
              </p>

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
        ))}
      </div>
    </div>
  );
};

export default SimilarProjects;