import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProjectEstimator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    features: [],
    complexity: '',
    industry: ''
  });
  const [estimatedCost, setEstimatedCost] = useState(null);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development', description: 'Custom websites and web applications' },
    { value: 'mobile-app', label: 'Mobile App Development', description: 'iOS and Android applications' },
    { value: 'ui-ux-design', label: 'UI/UX Design', description: 'User interface and experience design' },
    { value: 'ai-automation', label: 'AI & Automation', description: 'Intelligent automation solutions' },
    { value: 'data-dashboard', label: 'Data Dashboards', description: 'Analytics and reporting platforms' },
    { value: 'video-editing', label: 'Video Production', description: 'Professional video editing services' }
  ];

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000', description: 'Small to medium projects' },
    { value: '15k-50k', label: '$15,000 - $50,000', description: 'Medium to large projects' },
    { value: '50k-100k', label: '$50,000 - $100,000', description: 'Large enterprise projects' },
    { value: '100k+', label: '$100,000+', description: 'Complex enterprise solutions' }
  ];

  const timelineOptions = [
    { value: '1-3months', label: '1-3 Months', description: 'Quick turnaround projects' },
    { value: '3-6months', label: '3-6 Months', description: 'Standard development timeline' },
    { value: '6-12months', label: '6-12 Months', description: 'Complex, feature-rich projects' },
    { value: '12months+', label: '12+ Months', description: 'Enterprise-scale implementations' }
  ];

  const featureOptions = [
    { id: 'responsive-design', label: 'Responsive Design', description: 'Mobile-first, cross-device compatibility' },
    { id: 'user-authentication', label: 'User Authentication', description: 'Login, registration, user management' },
    { id: 'payment-integration', label: 'Payment Integration', description: 'Stripe, PayPal, custom payment gateways' },
    { id: 'cms-integration', label: 'CMS Integration', description: 'Content management system' },
    { id: 'api-development', label: 'API Development', description: 'RESTful APIs and integrations' },
    { id: 'real-time-features', label: 'Real-time Features', description: 'Live chat, notifications, updates' },
    { id: 'analytics-tracking', label: 'Analytics & Tracking', description: 'Google Analytics, custom tracking' },
    { id: 'seo-optimization', label: 'SEO Optimization', description: 'Search engine optimization' }
  ];

  const complexityLevels = [
    { value: 'simple', label: 'Simple', description: 'Basic functionality, standard features' },
    { value: 'moderate', label: 'Moderate', description: 'Custom features, integrations' },
    { value: 'complex', label: 'Complex', description: 'Advanced functionality, multiple integrations' },
    { value: 'enterprise', label: 'Enterprise', description: 'Highly complex, scalable solutions' }
  ];

  const industries = [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'education', label: 'Education' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'other', label: 'Other' }
  ];

  const handleFeatureChange = (featureId, checked) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev?.features, featureId]
        : prev?.features?.filter(f => f !== featureId)
    }));
  };

  const calculateEstimate = () => {
    let baseCost = 0;
    let multiplier = 1;

    // Base cost by project type
    const projectCosts = {
      'web-development': 8000,
      'mobile-app': 15000,
      'ui-ux-design': 5000,
      'ai-automation': 20000,
      'data-dashboard': 12000,
      'video-editing': 3000
    };

    baseCost = projectCosts?.[formData?.projectType] || 8000;

    // Complexity multiplier
    const complexityMultipliers = {
      'simple': 1,
      'moderate': 1.5,
      'complex': 2.2,
      'enterprise': 3.5
    };

    multiplier = complexityMultipliers?.[formData?.complexity] || 1;

    // Feature additions
    const featureCosts = {
      'responsive-design': 1000,
      'user-authentication': 2000,
      'payment-integration': 3000,
      'cms-integration': 2500,
      'api-development': 4000,
      'real-time-features': 3500,
      'analytics-tracking': 1500,
      'seo-optimization': 2000
    };

    const featuresCost = formData?.features?.reduce((total, feature) => {
      return total + (featureCosts?.[feature] || 0);
    }, 0);

    const totalEstimate = (baseCost * multiplier) + featuresCost;
    
    setEstimatedCost({
      min: Math.round(totalEstimate * 0.8),
      max: Math.round(totalEstimate * 1.2),
      timeline: formData?.timeline
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEstimate();
      setCurrentStep(5);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetEstimator = () => {
    setCurrentStep(1);
    setFormData({
      projectType: '',
      budget: '',
      timeline: '',
      features: [],
      complexity: '',
      industry: ''
    });
    setEstimatedCost(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What type of project do you need?</h3>
              <p className="text-gray-600">Select the primary service you're looking for</p>
            </div>
            <Select
              label="Project Type"
              options={projectTypes}
              value={formData?.projectType}
              onChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
              placeholder="Choose your project type"
              className="mb-6"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's your budget range?</h3>
              <p className="text-gray-600">This helps us recommend the best approach for your project</p>
            </div>
            <Select
              label="Budget Range"
              options={budgetRanges}
              value={formData?.budget}
              onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
              placeholder="Select your budget range"
              className="mb-6"
            />
            <Select
              label="Preferred Timeline"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
              placeholder="When do you need this completed?"
              className="mb-6"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What features do you need?</h3>
              <p className="text-gray-600">Select all features that apply to your project</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureOptions?.map((feature) => (
                <div key={feature?.id} className="bg-gray-50 rounded-lg p-4">
                  <Checkbox
                    label={feature?.label}
                    description={feature?.description}
                    checked={formData?.features?.includes(feature?.id)}
                    onChange={(e) => handleFeatureChange(feature?.id, e?.target?.checked)}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project complexity & industry</h3>
              <p className="text-gray-600">Help us understand your specific requirements</p>
            </div>
            <Select
              label="Project Complexity"
              options={complexityLevels}
              value={formData?.complexity}
              onChange={(value) => setFormData(prev => ({ ...prev, complexity: value }))}
              placeholder="How complex is your project?"
              className="mb-6"
            />
            <Select
              label="Industry"
              options={industries}
              value={formData?.industry}
              onChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
              placeholder="What industry are you in?"
              className="mb-6"
            />
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-8">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Icon name="CheckCircle" size={40} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Project Estimate</h3>
              <p className="text-gray-600">Based on your requirements, here's our estimated cost range</p>
            </div>
            {estimatedCost && (
              <div className="bg-gradient-primary text-white rounded-xl p-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-4">
                    ${estimatedCost?.min?.toLocaleString()} - ${estimatedCost?.max?.toLocaleString()}
                  </div>
                  <p className="text-xl text-white/90 mb-6">Estimated Project Cost</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Icon name="Clock" size={24} className="text-accent mx-auto mb-2" />
                      <div className="text-sm text-white/80">Timeline</div>
                      <div className="font-semibold">{formData?.timeline?.replace('-', ' - ')}</div>
                    </div>
                    <div>
                      <Icon name="Users" size={24} className="text-accent mx-auto mb-2" />
                      <div className="text-sm text-white/80">Team Size</div>
                      <div className="font-semibold">3-5 Experts</div>
                    </div>
                    <div>
                      <Icon name="Shield" size={24} className="text-accent mx-auto mb-2" />
                      <div className="text-sm text-white/80">Warranty</div>
                      <div className="font-semibold">6 Months</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-yellow-600 mt-1" />
                <div className="text-left">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    This is a preliminary estimate based on the information provided. 
                    Final pricing will be determined after a detailed consultation and requirement analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={resetEstimator}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Start Over
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Calculator" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Free Project Estimator</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Get Your Project
              <span className="block text-primary">Cost Estimate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answer a few quick questions to receive a personalized project estimate. 
              No commitment required - just honest, transparent pricing.
            </p>
          </div>

          {/* Progress Bar */}
          {currentStep <= 4 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Step {currentStep} of 4</span>
                <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Estimator Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 lg:p-12">
            {renderStep()}

            {/* Navigation Buttons */}
            {currentStep <= 4 && (
              <div className="flex justify-between mt-12">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Previous
                </Button>
                <Button
                  variant="default"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData?.projectType) ||
                    (currentStep === 2 && (!formData?.budget || !formData?.timeline)) ||
                    (currentStep === 4 && (!formData?.complexity || !formData?.industry))
                  }
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {currentStep === 4 ? 'Get Estimate' : 'Next'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;