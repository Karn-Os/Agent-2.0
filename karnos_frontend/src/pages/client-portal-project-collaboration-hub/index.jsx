import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ActivityFeed from './components/ActivityFeed';
import FileManager from './components/FileManager';
import TeamCommunication from './components/TeamCommunication';
import ProjectTimeline from './components/ProjectTimeline';
import DashboardStats from './components/DashboardStats';

const ClientPortalProjectCollaborationHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);
  const [user, setUser] = useState(null);

  // Mock authentication check
  useEffect(() => {
    const mockUser = {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@techstartup.com",
      company: "TechStartup Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      role: "Project Manager",
      lastLogin: "2025-08-01T14:30:00Z"
    };
    setUser(mockUser);
  }, []);

  // Mock data
  const dashboardStats = [
    {
      id: 1,
      type: 'projects',
      value: 3,
      label: 'Active Projects',
      subtitle: '2 in development',
      trend: 15,
      progress: 68
    },
    {
      id: 2,
      type: 'tasks',
      value: 24,
      label: 'Completed Tasks',
      subtitle: '8 this week',
      trend: 12,
      progress: 85
    },
    {
      id: 3,
      type: 'messages',
      value: 156,
      label: 'Team Messages',
      subtitle: '12 unread',
      trend: -5,
      progress: 92
    },
    {
      id: 4,
      type: 'files',
      value: 89,
      label: 'Project Files',
      subtitle: '2.4 GB total',
      trend: 8,
      progress: 76
    },
    {
      id: 5,
      type: 'hours',
      value: 142,
      label: 'Hours Logged',
      subtitle: 'This month',
      trend: 22,
      progress: 64
    },
    {
      id: 6,
      type: 'team',
      value: 8,
      label: 'Team Members',
      subtitle: '3 online now',
      trend: 0,
      progress: 100
    }
  ];

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform Redesign",
      type: "Web Development",
      description: "Complete redesign and development of the company\'s e-commerce platform with modern UI/UX and enhanced functionality.",
      status: "in-progress",
      progress: 68,
      dueDate: "Aug 15, 2025",
      teamSize: 5,
      icon: "ShoppingCart",
      teamMembers: [
        { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
        { name: "Maria Garcia", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
        { name: "David Kim", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
        { name: "Lisa Wang", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
        { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 2,
      name: "Mobile App Development",
      type: "App Development",
      description: "Native iOS and Android app development with real-time synchronization and offline capabilities.",
      status: "planning",
      progress: 15,
      dueDate: "Sep 30, 2025",
      teamSize: 4,
      icon: "Smartphone",
      teamMembers: [
        { name: "Emma Thompson", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
        { name: "Ryan Martinez", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" },
        { name: "Sophie Chen", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
        { name: "Michael Brown", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 3,
      name: "Brand Identity Package",
      type: "UI/UX Design",
      description: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines.",
      status: "completed",
      progress: 100,
      dueDate: "Jul 20, 2025",
      teamSize: 3,
      icon: "Palette",
      teamMembers: [
        { name: "Isabella Rodriguez", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
        { name: "Oliver Johnson", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" },
        { name: "Ava Davis", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" }
      ]
    }
  ];

  const activities = [
    {
      id: 1,
      type: 'milestone',
      user: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      message: "Completed the user authentication module for the e-commerce platform",
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      attachment: null
    },
    {
      id: 2,
      type: 'comment',
      user: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      message: "The new design mockups look fantastic! I\'ve added some feedback in the design review section.",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      attachment: null
    },
    {
      id: 3,
      type: 'file',
      user: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      message: "Uploaded the latest wireframes for the mobile app project",
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      attachment: {
        name: "mobile_wireframes_v2.pdf",
        size: "2.4 MB"
      }
    },
    {
      id: 4,
      type: 'meeting',
      user: {
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      message: "Scheduled a design review meeting for tomorrow at 2:00 PM",
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      attachment: null
    },
    {
      id: 5,
      type: 'update',
      user: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      message: "Updated project timeline - we\'re ahead of schedule on the backend development",
      timestamp: new Date(Date.now() - 14400000), // 4 hours ago
      attachment: null
    }
  ];

  const projectFiles = [
    {
      id: 1,
      name: "Project_Requirements_v3.pdf",
      type: "pdf",
      size: 2456789,
      uploadedAt: "Jul 28, 2025",
      uploadedBy: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      name: "Homepage_Design_Final.fig",
      type: "image",
      size: 15678234,
      uploadedAt: "Jul 30, 2025",
      uploadedBy: {
        name: "Isabella Rodriguez",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      name: "Demo_Video_v1.mp4",
      type: "video",
      size: 45678901,
      uploadedAt: "Aug 01, 2025",
      uploadedBy: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 4,
      name: "Technical_Specifications.docx",
      type: "document",
      size: 1234567,
      uploadedAt: "Jul 25, 2025",
      uploadedBy: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 5,
      name: "Assets_Package.zip",
      type: "zip",
      size: 23456789,
      uploadedAt: "Jul 29, 2025",
      uploadedBy: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      }
    }
  ];

  const chatMessages = [
    {
      id: 1,
      sender: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      content: "Good morning everyone! I\'ve just pushed the latest updates to the authentication system. Please test it when you get a chance.",
      timestamp: new Date(Date.now() - 900000),
      isOwn: false,
      status: 'read'
    },
    {
      id: 2,
      sender: {
        name: "You",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      content: "Thanks Alex! I\'ll test it this afternoon and provide feedback. The login flow looks much smoother now.",
      timestamp: new Date(Date.now() - 600000),
      isOwn: true,
      status: 'read'
    },
    {
      id: 3,
      sender: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      content: "I\'ve uploaded the new design assets to the files section. The color scheme has been updated based on yesterday\'s feedback.",
      timestamp: new Date(Date.now() - 300000),
      isOwn: false,
      status: 'delivered'
    },
    {
      id: 4,
      sender: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      content: "Perfect timing! I was just about to start implementing the new styles. This will save me a lot of time.",
      timestamp: new Date(Date.now() - 120000),
      isOwn: false,
      attachment: {
        name: "style_guide_v2.pdf"
      }
    }
  ];

  const projectMilestones = [
    {
      id: 1,
      title: "Project Kickoff & Planning",
      description: "Initial project setup, requirements gathering, and team onboarding completed successfully.",
      date: "Jul 15, 2025",
      status: "completed",
      deliverables: [
        "Project charter document",
        "Technical requirements specification",
        "Team roles and responsibilities",
        "Communication protocols"
      ],
      team: [
        { name: "Sarah Johnson" },
        { name: "Alex Chen" },
        { name: "Maria Garcia" }
      ]
    },
    {
      id: 2,
      title: "Design & Architecture Phase",
      description: "UI/UX design creation, system architecture planning, and database schema design.",
      date: "Jul 30, 2025",
      status: "completed",
      deliverables: [
        "Complete UI/UX mockups",
        "System architecture diagram",
        "Database schema design",
        "API documentation"
      ],
      team: [
        { name: "Isabella Rodriguez" },
        { name: "David Kim" },
        { name: "Oliver Johnson" }
      ]
    },
    {
      id: 3,
      title: "Development Sprint 1",
      description: "Core functionality development including user authentication, basic CRUD operations, and API integration.",
      date: "Aug 15, 2025",
      status: "in-progress",
      progress: 68,
      deliverables: [
        "User authentication system",
        "Core API endpoints",
        "Database implementation",
        "Basic frontend components"
      ],
      team: [
        { name: "Alex Chen" },
        { name: "David Kim" },
        { name: "Lisa Wang" },
        { name: "James Wilson" }
      ]
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing phase including unit tests, integration tests, and user acceptance testing.",
      date: "Aug 30, 2025",
      status: "upcoming",
      deliverables: [
        "Test suite implementation",
        "Bug fixes and optimizations",
        "Performance testing results",
        "Security audit report"
      ],
      team: [
        { name: "Emma Thompson" },
        { name: "Ryan Martinez" }
      ]
    },
    {
      id: 5,
      title: "Deployment & Launch",
      description: "Production deployment, final testing, and project handover to the client team.",
      date: "Sep 15, 2025",
      status: "upcoming",
      deliverables: [
        "Production deployment",
        "User training materials",
        "Maintenance documentation",
        "Project handover"
      ],
      team: [
        { name: "Alex Chen" },
        { name: "Sarah Johnson" }
      ]
    }
  ];

  const handleSendMessage = (message) => {
    // Mock message sending
    console.log('Sending message:', message);
  };

  const handleViewProjectDetails = (project) => {
    setSelectedProject(project);
    setActiveTab('timeline');
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'LayoutDashboard' },
    { id: 'projects', name: 'Projects', icon: 'FolderOpen' },
    { id: 'timeline', name: 'Timeline', icon: 'Calendar' },
    { id: 'files', name: 'Files', icon: 'FileText' },
    { id: 'communication', name: 'Team Chat', icon: 'MessageCircle' },
    { id: 'activity', name: 'Activity', icon: 'Activity' }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Portal - Project Collaboration Hub | KarnOS</title>
        <meta name="description" content="Secure client portal for project management, team collaboration, and real-time progress tracking. Stay connected with your KarnOS development team." />
        <meta name="keywords" content="client portal, project management, team collaboration, KarnOS, development tracking" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Welcome Header */}
        <section className="bg-gradient-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-16 h-16 rounded-full border-4 border-white/20"
                />
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
                  <p className="text-white/80">
                    {user?.company} • {user?.role} • Last login: {new Date(user.lastLogin)?.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  iconName="Settings"
                  iconPosition="left"
                  iconSize={16}
                >
                  Account Settings
                </Button>
                <Button
                  variant="secondary"
                  iconName="HelpCircle"
                  iconPosition="left"
                  iconSize={16}
                >
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-card border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span className="font-medium">{tab?.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <DashboardStats stats={dashboardStats} />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Active Projects</h2>
                    <div className="space-y-4">
                      {projects?.filter(p => p?.status !== 'completed')?.slice(0, 2)?.map((project) => (
                        <ProjectCard
                          key={project?.id}
                          project={project}
                          onViewDetails={handleViewProjectDetails}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <ActivityFeed activities={activities?.slice(0, 5)} />
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">All Projects</h2>
                  <Button
                    variant="default"
                    iconName="Plus"
                    iconPosition="left"
                    iconSize={16}
                  >
                    New Project
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {projects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onViewDetails={handleViewProjectDetails}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedProject ? `${selectedProject?.name} Timeline` : 'Project Timeline'}
                  </h2>
                  {selectedProject && (
                    <Button
                      variant="outline"
                      onClick={() => setSelectedProject(null)}
                      iconName="ArrowLeft"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Back to Overview
                    </Button>
                  )}
                </div>
                
                <ProjectTimeline milestones={projectMilestones} />
              </div>
            )}

            {activeTab === 'files' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Project Files</h2>
                <FileManager files={projectFiles} />
              </div>
            )}

            {activeTab === 'communication' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Team Communication</h2>
                <TeamCommunication
                  messages={chatMessages}
                  onSendMessage={handleSendMessage}
                />
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
                <ActivityFeed activities={activities} />
              </div>
            )}
          </div>
        </section>

        {/* Quick Actions Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative group">
            <Button
              variant="default"
              size="icon"
              className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              iconName="Plus"
              iconSize={24}
            />
            
            <div className="absolute bottom-16 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-card border border-border rounded-lg shadow-xl p-2 space-y-1 min-w-48">
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors duration-200">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                  <span>Send Message</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors duration-200">
                  <Icon name="Upload" size={16} className="text-secondary" />
                  <span>Upload File</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors duration-200">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span>Schedule Meeting</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors duration-200">
                  <Icon name="HelpCircle" size={16} className="text-warning" />
                  <span>Get Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={16} color="white" />
              </div>
              <span className="text-lg font-bold text-gradient">KarnOS</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-foreground transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-foreground transition-colors duration-200">Support</button>
              <span>&copy; {new Date()?.getFullYear()} KarnOS. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientPortalProjectCollaborationHub;