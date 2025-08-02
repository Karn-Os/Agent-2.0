import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'technical', name: 'Technical Details', icon: 'Code' },
    { id: 'process', name: 'Development Process', icon: 'GitBranch' },
    { id: 'results', name: 'Results & Impact', icon: 'TrendingUp' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="Folder" size={24} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{project?.title}</h2>
              <p className="text-muted-foreground">{project?.client} • {project?.industry}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
            <nav className="space-y-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span className="font-medium">{tab?.name}</span>
                </button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 space-y-3">
              {project?.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.open(project?.liveUrl, '_blank')}
                >
                  Live Demo
                </Button>
              )}
              {project?.githubUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  iconName="Github"
                  iconPosition="right"
                  onClick={() => window.open(project?.githubUrl, '_blank')}
                >
                  View Code
                </Button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div className="relative h-80 rounded-xl overflow-hidden">
                      <Image
                        src={project?.gallery?.[currentImageIndex]}
                        alt={`${project?.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {project?.gallery?.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <Icon name="ChevronLeft" size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <Icon name="ChevronRight" size={20} />
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Image Indicators */}
                    {project?.gallery?.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {project?.gallery?.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{project?.fullDescription}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project?.features?.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name="Check" size={16} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{feature?.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{feature?.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'technical' && (
                <div className="space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project?.technologies?.map((tech, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                            <Icon name="Code" size={16} color="white" />
                          </div>
                          <span className="font-medium text-gray-900">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technical Architecture</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">{project?.architecture}</p>
                      <div className="space-y-3">
                        {project?.technicalHighlights?.map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">Development Process</h3>
                  <div className="space-y-6">
                    {project?.developmentProcess?.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase?.title}</h4>
                            <p className="text-gray-700 mb-3">{phase?.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Icon name="Clock" size={14} />
                                <span>{phase?.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Icon name="Users" size={14} />
                                <span>{phase?.team}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < project?.developmentProcess?.length - 1 && (
                          <div className="absolute left-5 top-12 w-0.5 h-8 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">Results & Impact</h3>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project?.results?.metrics?.map((metric, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                        <div className="text-3xl font-bold text-primary mb-2">{metric?.value}</div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{metric?.label}</div>
                        <div className="text-xs text-muted-foreground">{metric?.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Client Testimonial */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Quote" size={20} color="white" />
                      </div>
                      <div>
                        <p className="text-gray-700 italic mb-4">"{project?.testimonial?.quote}"</p>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {project?.testimonial?.author?.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{project?.testimonial?.author}</div>
                            <div className="text-sm text-muted-foreground">{project?.testimonial?.position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;