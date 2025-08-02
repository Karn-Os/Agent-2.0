import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    projectDescription: '',
    services: [],
    hearAboutUs: '',
    newsletter: false,
    updates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'new-project', label: 'New Project Inquiry', description: 'I want to start a new project' },
    { value: 'existing-project', label: 'Existing Project Support', description: 'I need help with an ongoing project' },
    { value: 'consultation', label: 'General Consultation', description: 'I want to discuss possibilities' },
    { value: 'partnership', label: 'Partnership Opportunity', description: 'I\'m interested in partnering' },
    { value: 'other', label: 'Other', description: 'Something else' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'not-sure', label: 'Not sure yet' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3months', label: '1-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6-12months', label: '6-12 Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const serviceOptions = [
    { id: 'web-development', label: 'Web Development', description: 'Custom websites and web applications' },
    { id: 'mobile-app', label: 'Mobile App Development', description: 'iOS and Android applications' },
    { id: 'ui-ux-design', label: 'UI/UX Design', description: 'User interface and experience design' },
    { id: 'ai-automation', label: 'AI & Automation', description: 'Intelligent automation solutions' },
    { id: 'data-dashboard', label: 'Data Dashboards', description: 'Analytics and reporting platforms' },
    { id: 'video-editing', label: 'Video Production', description: 'Professional video editing services' },
    { id: 'consulting', label: 'Technical Consulting', description: 'Expert guidance and strategy' },
    { id: 'maintenance', label: 'Maintenance & Support', description: 'Ongoing technical support' }
  ];

  const hearAboutUsOptions = [
    { value: 'google-search', label: 'Google Search' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'referral', label: 'Referral from friend/colleague' },
    { value: 'existing-client', label: 'I\'m an existing client' },
    { value: 'industry-event', label: 'Industry event/conference' },
    { value: 'online-ad', label: 'Online advertisement' },
    { value: 'blog-article', label: 'Blog article/content' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (serviceId, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev?.services, serviceId]
        : prev?.services?.filter(s => s !== serviceId)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          inquiryType: '',
          name: '',
          email: '',
          company: '',
          phone: '',
          budget: '',
          timeline: '',
          projectDescription: '',
          services: [],
          hearAboutUs: '',
          newsletter: false,
          updates: false
        });
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 lg:py-24 bg-white" id="contact-form">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
              <Icon name="CheckCircle" size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Thank You for Reaching Out!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your inquiry and will get back to you within 2 hours during business hours. 
              Our team is excited to learn more about your project!
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-gray-700">We'll review your requirements within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span className="text-gray-700">Our expert will contact you to discuss details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <span className="text-gray-700">You'll receive a detailed proposal within 24 hours</span>
                </div>
              </div>
            </div>
            <Button
              variant="default"
              size="lg"
              onClick={() => setSubmitStatus(null)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white" id="contact-form">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Send" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tell Us About
              <span className="block text-primary">Your Project</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Fill out our detailed form below and 
              we'll get back to you with a personalized proposal within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Inquiry Type */}
              <div>
                <Select
                  label="What type of inquiry is this?"
                  options={inquiryTypes}
                  value={formData?.inquiryType}
                  onChange={(value) => handleInputChange('inquiryType', value)}
                  placeholder="Select inquiry type"
                  required
                />
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Budget Range"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                  placeholder="Select budget range"
                />
                <Select
                  label="Timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  placeholder="When do you need this?"
                />
              </div>

              {/* Services Needed */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Which services are you interested in? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceOptions?.map((service) => (
                    <div key={service?.id} className="bg-gray-50 rounded-lg p-4">
                      <Checkbox
                        label={service?.label}
                        description={service?.description}
                        checked={formData?.services?.includes(service?.id)}
                        onChange={(e) => handleServiceChange(service?.id, e?.target?.checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  value={formData?.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
                  placeholder="Please describe your project in detail. Include your goals, target audience, key features, and any specific requirements or challenges you're facing..."
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  The more details you provide, the better we can understand your needs and provide accurate recommendations.
                </p>
              </div>

              {/* How did you hear about us */}
              <div>
                <Select
                  label="How did you hear about us?"
                  options={hearAboutUsOptions}
                  value={formData?.hearAboutUs}
                  onChange={(value) => handleInputChange('hearAboutUs', value)}
                  placeholder="Select an option"
                />
              </div>

              {/* Newsletter & Updates */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <Checkbox
                    label="Subscribe to our newsletter"
                    description="Get the latest insights on web development, AI trends, and digital transformation"
                    checked={formData?.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Checkbox
                    label="Receive project updates and tips"
                    description="Get helpful resources and updates related to your project type"
                    checked={formData?.updates}
                    onChange={(e) => handleInputChange('updates', e?.target?.checked)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="min-w-48"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service. 
                  We'll never share your information with third parties.
                </p>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-800">Submission Failed</h4>
                      <p className="text-red-700 text-sm">
                        There was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;