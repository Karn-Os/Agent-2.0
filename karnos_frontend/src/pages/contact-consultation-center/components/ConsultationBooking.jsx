import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedExpert, setSelectedExpert] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const experts = [
    {
      value: 'sarah-chen',
      label: 'Sarah Chen',
      description: 'Lead Full-Stack Developer',
      expertise: ['Web Development', 'React', 'Node.js', 'AI Integration'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 4.9,
      projects: 150
    },
    {
      value: 'marcus-rodriguez',
      label: 'Marcus Rodriguez',
      description: 'Mobile App Specialist',
      expertise: ['iOS Development', 'Android', 'React Native', 'Flutter'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      projects: 120
    },
    {
      value: 'emily-watson',
      label: 'Emily Watson',
      description: 'UI/UX Design Director',
      expertise: ['User Experience', 'Interface Design', 'Prototyping', 'Design Systems'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 4.9,
      projects: 200
    },
    {
      value: 'david-kim',
      label: 'David Kim',
      description: 'AI & Automation Expert',
      expertise: ['Machine Learning', 'Process Automation', 'Data Analytics', 'Python'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.9,
      projects: 85
    }
  ];

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'ai-automation', label: 'AI & Automation' },
    { value: 'data-dashboard', label: 'Data Dashboards' },
    { value: 'video-editing', label: 'Video Production' },
    { value: 'consultation', label: 'General Consultation' }
  ];

  // Generate available dates (next 14 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate?.setDate(currentDate?.getDate() + 1); // Start from tomorrow

    while (dates?.length < 10) {
      const dayOfWeek = currentDate?.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        dates?.push({
          value: currentDate?.toISOString()?.split('T')?.[0],
          label: currentDate?.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
      currentDate?.setDate(currentDate?.getDate() + 1);
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const timeSlots = [
    { value: '09:00', label: '9:00 AM EST' },
    { value: '10:00', label: '10:00 AM EST' },
    { value: '11:00', label: '11:00 AM EST' },
    { value: '14:00', label: '2:00 PM EST' },
    { value: '15:00', label: '3:00 PM EST' },
    { value: '16:00', label: '4:00 PM EST' },
    { value: '17:00', label: '5:00 PM EST' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Consultation booking:', {
      expert: selectedExpert,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Consultation booked successfully! You will receive a confirmation email shortly.');
  };

  const selectedExpertData = experts?.find(expert => expert?.value === selectedExpert);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Calendar" size={16} className="text-secondary" />
              <span className="text-sm font-medium text-secondary">Schedule Your Meeting</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Book a Free
              <span className="block text-primary">Consultation Call</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet with our experts to discuss your project requirements, timeline, and budget. 
              Get personalized recommendations and a detailed project roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Expert Selection */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Expert</h3>
                <div className="space-y-4">
                  {experts?.map((expert) => (
                    <div
                      key={expert?.value}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedExpert === expert?.value
                          ? 'border-primary bg-primary/5 shadow-lg'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                      }`}
                      onClick={() => setSelectedExpert(expert?.value)}
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={expert?.avatar}
                          alt={expert?.label}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{expert?.label}</h4>
                            {selectedExpert === expert?.value && (
                              <Icon name="CheckCircle" size={20} className="text-primary" />
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{expert?.description}</p>
                          
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="flex items-center space-x-1">
                              <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-700">{expert?.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Briefcase" size={16} className="text-gray-500" />
                              <span className="text-sm text-gray-600">{expert?.projects} projects</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {expert?.expertise?.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Expert Details */}
              {selectedExpertData && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Meeting with {selectedExpertData?.label}
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-gray-500" />
                      <span>30-minute consultation call</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Video" size={16} className="text-gray-500" />
                      <span>Google Meet video conference</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="FileText" size={16} className="text-gray-500" />
                      <span>Project roadmap and recommendations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={16} className="text-gray-500" />
                      <span>Completely free, no obligations</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Call</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Preferred Date"
                    options={availableDates}
                    value={selectedDate}
                    onChange={setSelectedDate}
                    placeholder="Select date"
                    required
                  />
                  <Select
                    label="Preferred Time"
                    options={timeSlots}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    placeholder="Select time"
                    required
                    disabled={!selectedDate}
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    placeholder="Your full name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Company Name"
                    type="text"
                    value={formData?.company}
                    onChange={(e) => handleInputChange('company', e?.target?.value)}
                    placeholder="Your company (optional)"
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData?.phone}
                    onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <Select
                  label="Project Type"
                  options={projectTypes}
                  value={formData?.projectType}
                  onChange={(value) => handleInputChange('projectType', value)}
                  placeholder="What type of project?"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    value={formData?.message}
                    onChange={(e) => handleInputChange('message', e?.target?.value)}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  disabled={!selectedExpert || !selectedDate || !selectedTime || !formData?.name || !formData?.email}
                >
                  Book Free Consultation
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By booking a consultation, you agree to our terms of service and privacy policy. 
                  You'll receive a calendar invite and meeting details via email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;