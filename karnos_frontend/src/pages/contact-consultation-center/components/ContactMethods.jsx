import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('email');

  const contactMethods = [
    {
      id: 'email',
      name: 'Email Support',
      icon: 'Mail',
      description: 'Get detailed responses within 2 hours',
      contact: 'hello@karnos.digital',
      availability: '24/7 Available',
      responseTime: '2 hours',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      id: 'phone',
      name: 'Phone Consultation',
      icon: 'Phone',
      description: 'Direct conversation with our experts',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    {
      id: 'video',
      name: 'Video Meeting',
      icon: 'Video',
      description: 'Face-to-face project discussion',
      contact: 'Schedule via Calendar',
      availability: 'Flexible Scheduling',
      responseTime: 'Same Day',
      color: 'bg-purple-50 border-purple-200 text-purple-700'
    },
    {
      id: 'chat',
      name: 'Live Chat',
      icon: 'MessageSquare',
      description: 'Real-time support and quick answers',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: '5 minutes',
      color: 'bg-orange-50 border-orange-200 text-orange-700'
    }
  ];

  const emergencyContact = {
    title: 'Emergency Support',
    description: 'For existing clients with urgent issues',
    phone: '+1 (555) 999-HELP',
    email: 'emergency@karnos.digital',
    availability: '24/7 for critical issues'
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Multiple Ways to Connect</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Preferred
              <span className="block text-primary">Communication Method</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that every project is unique, and so are communication preferences. 
              Choose the method that works best for you and your timeline.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods?.map((method) => (
              <div
                key={method?.id}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeMethod === method?.id
                    ? method?.color
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveMethod(method?.id)}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    activeMethod === method?.id ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <Icon 
                      name={method?.icon} 
                      size={24} 
                      className={activeMethod === method?.id ? 'text-current' : 'text-gray-600'}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method?.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{method?.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Clock" size={14} className="text-gray-500" />
                      <span className="text-gray-600">{method?.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-gray-500" />
                      <span className="text-gray-600">{method?.availability}</span>
                    </div>
                  </div>
                </div>

                {activeMethod === method?.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Method Details */}
          {activeMethod && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {contactMethods?.find(m => m?.id === activeMethod)?.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {contactMethods?.find(m => m?.id === activeMethod)?.description}
                </p>
                
                <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-lg px-6 py-4 mb-6">
                  <Icon name="Info" size={20} className="text-primary" />
                  <span className="text-lg font-medium text-gray-900">
                    {contactMethods?.find(m => m?.id === activeMethod)?.contact}
                  </span>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Connect Now
                </Button>
              </div>
            </div>
          )}

          {/* Emergency Contact */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Icon name="AlertTriangle" size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">{emergencyContact?.title}</h3>
              <p className="text-lg text-red-700 mb-6">{emergencyContact?.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-red-700">
                    <Icon name="Phone" size={16} />
                    <span className="font-medium">{emergencyContact?.phone}</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-red-700">
                    <Icon name="Mail" size={16} />
                    <span className="font-medium">{emergencyContact?.email}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-red-600 mt-4">{emergencyContact?.availability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;