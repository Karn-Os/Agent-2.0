import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('opensource');

  const openSourceProjects = [
    {
      id: 1,
      name: "React DevTools Pro",
      description: "Enhanced React DevTools with performance profiling and component analysis features.",
      language: "TypeScript",
      stars: 2847,
      forks: 234,
      contributors: 18,
      lastUpdate: "2 days ago",
      status: "Active",
      tags: ["React", "DevTools", "Performance"],
      githubUrl: "https://github.com/karnos/react-devtools-pro"
    },
    {
      id: 2,
      name: "AI Code Assistant",
      description: "VS Code extension for AI-powered code completion and refactoring suggestions.",
      language: "JavaScript",
      stars: 1923,
      forks: 156,
      contributors: 12,
      lastUpdate: "1 week ago",
      status: "Active",
      tags: ["AI", "VS Code", "Productivity"],
      githubUrl: "https://github.com/karnos/ai-code-assistant"
    },
    {
      id: 3,
      name: "Component Library Builder",
      description: "CLI tool for generating production-ready React component libraries with TypeScript and Storybook.",
      language: "Node.js",
      stars: 1456,
      forks: 89,
      contributors: 8,
      lastUpdate: "3 days ago",
      status: "Active",
      tags: ["CLI", "Components", "TypeScript"],
      githubUrl: "https://github.com/karnos/component-library-builder"
    },
    {
      id: 4,
      name: "Performance Monitor",
      description: "Lightweight performance monitoring library for React applications with real-time metrics.",
      language: "TypeScript",
      stars: 892,
      forks: 67,
      contributors: 6,
      lastUpdate: "5 days ago",
      status: "Beta",
      tags: ["Performance", "Monitoring", "Analytics"],
      githubUrl: "https://github.com/karnos/performance-monitor"
    }
  ];

  const communityEvents = [
    {
      id: 1,
      title: "React 19 Workshop Series",
      type: "Workshop",
      date: "2025-08-15",
      time: "2:00 PM EST",
      duration: "3 hours",
      attendees: 156,
      maxAttendees: 200,
      description: "Hands-on workshop covering React 19\'s concurrent features and server components.",
      speaker: "Sarah Chen",
      speakerRole: "Senior React Engineer",
      format: "Online",
      registrationOpen: true
    },
    {
      id: 2,
      title: "AI in Web Development Panel",
      type: "Panel Discussion",
      date: "2025-08-22",
      time: "4:00 PM EST",
      duration: "90 minutes",
      attendees: 89,
      maxAttendees: 150,
      description: "Industry experts discuss the impact of AI on modern web development practices.",
      speaker: "Multiple Speakers",
      speakerRole: "Industry Experts",
      format: "Hybrid",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Open Source Contribution Day",
      type: "Hackathon",
      date: "2025-08-29",
      time: "10:00 AM EST",
      duration: "8 hours",
      attendees: 234,
      maxAttendees: 300,
      description: "Collaborative coding session focused on contributing to open source React projects.",
      speaker: "KarnOS Team",
      speakerRole: "Development Team",
      format: "In-person",
      registrationOpen: true
    },
    {
      id: 4,
      title: "Performance Optimization Masterclass",
      type: "Masterclass",
      date: "2025-09-05",
      time: "1:00 PM EST",
      duration: "4 hours",
      attendees: 67,
      maxAttendees: 100,
      description: "Deep dive into advanced React performance optimization techniques and tools.",
      speaker: "Michael Rodriguez",
      speakerRole: "Performance Engineer",
      format: "Online",
      registrationOpen: true
    }
  ];

  const communityStats = [
    { label: "Active Contributors", value: "2,500+", icon: "Users" },
    { label: "Open Source Projects", value: "24", icon: "GitBranch" },
    { label: "Community Events", value: "48", icon: "Calendar" },
    { label: "Code Contributions", value: "15,000+", icon: "Code" }
  ];

  const tabs = [
    { id: 'opensource', name: 'Open Source', icon: 'GitBranch' },
    { id: 'events', name: 'Events', icon: 'Calendar' },
    { id: 'resources', name: 'Resources', icon: 'BookOpen' }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      'TypeScript': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Node.js': 'bg-green-100 text-green-800',
      'Python': 'bg-indigo-100 text-indigo-800'
    };
    return colors?.[language] || 'bg-gray-100 text-gray-800';
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'Workshop': 'bg-indigo-100 text-indigo-800',
      'Panel Discussion': 'bg-purple-100 text-purple-800',
      'Hackathon': 'bg-green-100 text-green-800',
      'Masterclass': 'bg-orange-100 text-orange-800'
    };
    return colors?.[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6"
          >
            <Icon name="Users" size={16} className="text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Developer Community</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Community & <span className="text-gradient">Collaboration</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our vibrant developer community contributing to open source projects, sharing knowledge, and shaping the future of web development.
          </motion.p>
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {communityStats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat?.value}</div>
              <div className="text-sm text-gray-600">{stat?.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg p-1 inline-flex shadow-sm border border-gray-200">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'opensource' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openSourceProjects?.map((project, index) => (
                <motion.div
                  key={project?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project?.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {project?.description}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLanguageColor(project?.language)}`}>
                      {project?.language}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} />
                        <span>{project?.stars?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="GitFork" size={14} />
                        <span>{project?.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} />
                        <span>{project?.contributors}</span>
                      </div>
                    </div>
                    <span className="text-xs">Updated {project?.lastUpdate}</span>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Github"
                      iconPosition="left"
                      className="flex-1"
                    >
                      View on GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Clone
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {communityEvents?.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEventTypeColor(event.type)} mb-2 inline-block`}>
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} />
                      <span>{new Date(event.date)?.toLocaleDateString()} at {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={14} />
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>{event.format}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={14} />
                      <span>{event.speaker} - {event.speakerRole}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{event.attendees}</span> / {event.maxAttendees} registered
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button
                    variant={event.registrationOpen ? "default" : "outline"}
                    size="sm"
                    fullWidth
                    iconName={event.registrationOpen ? "Calendar" : "Clock"}
                    iconPosition="left"
                    disabled={!event.registrationOpen}
                  >
                    {event.registrationOpen ? "Register Now" : "Registration Closed"}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Developer Guides",
                  description: "Comprehensive guides covering React 19, TypeScript, and modern development practices.",
                  icon: "BookOpen",
                  count: "25+ guides",
                  color: "bg-indigo-50 text-indigo-600"
                },
                {
                  title: "Code Examples",
                  description: "Production-ready code examples and templates for common development scenarios.",
                  icon: "Code",
                  count: "100+ examples",
                  color: "bg-green-50 text-green-600"
                },
                {
                  title: "Video Tutorials",
                  description: "Step-by-step video tutorials covering advanced React concepts and best practices.",
                  icon: "Play",
                  count: "50+ videos",
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "API Documentation",
                  description: "Detailed API documentation for all our open source libraries and tools.",
                  icon: "FileText",
                  count: "Complete docs",
                  color: "bg-orange-50 text-orange-600"
                },
                {
                  title: "Community Forum",
                  description: "Active community forum for discussions, questions, and knowledge sharing.",
                  icon: "MessageSquare",
                  count: "5,000+ posts",
                  color: "bg-cyan-50 text-cyan-600"
                },
                {
                  title: "Newsletter Archive",
                  description: "Access to all previous newsletters with insights, tips, and industry updates.",
                  icon: "Mail",
                  count: "100+ issues",
                  color: "bg-pink-50 text-pink-600"
                }
              ]?.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${resource?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={resource?.icon} size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource?.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource?.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-4">{resource?.count}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Explore
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Join Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <Icon name="Heart" size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">
              Join Our Developer Community
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Connect with like-minded developers, contribute to open source projects, and stay at the forefront of web development innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                iconName="Github"
                iconPosition="left"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Join on GitHub
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Join Discord
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;