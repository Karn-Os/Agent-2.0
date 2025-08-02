import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqCategories = [
    {
      category: "Consultation Process",
      faqs: [
        {
          question: "How does the free consultation work?",
          answer: `Our free consultation is a 30-minute video call where we discuss your project requirements, goals, and challenges. We'll ask detailed questions about your business, target audience, and technical needs. By the end of the call, you'll have a clear understanding of the project scope, timeline, and next steps. There's no obligation to proceed, and you'll receive valuable insights regardless.`
        },
        {
          question: "What should I prepare for the consultation?",
          answer: `Come prepared with a clear idea of your project goals, target audience, and any specific features you need. If you have existing branding materials, competitor examples, or technical requirements, please share them. We'll also discuss your budget range and timeline expectations. The more information you provide, the more accurate our recommendations will be.`
        },
        {
          question: "How quickly can we schedule a consultation?",
          answer: `We typically have availability within 24-48 hours for consultation calls. Our calendar shows real-time availability, and you can book a slot that works for your schedule. For urgent projects, we offer same-day consultations when possible. We accommodate different time zones and can schedule calls outside standard business hours if needed.`
        }
      ]
    },
    {
      category: "Project & Pricing",
      faqs: [
        {
          question: "How do you determine project pricing?",
          answer: `Our pricing is based on project complexity, required features, timeline, and the level of customization needed. We consider factors like design complexity, integrations, scalability requirements, and ongoing maintenance needs. After the consultation, we provide a detailed proposal with transparent pricing, milestone breakdowns, and payment schedules. We never have hidden fees.`
        },
        {
          question: "Do you offer payment plans?",
          answer: `Yes, we offer flexible payment plans for projects over $10,000. Typically, we structure payments around project milestones: 30% to start, 40% at mid-point, and 30% upon completion. For larger projects, we can create custom payment schedules that align with your cash flow needs. We accept various payment methods including wire transfers, ACH, and major credit cards.`
        },
        {
          question: "What\'s included in your project estimates?",
          answer: `Our estimates include all development work, design, testing, deployment, and initial training. We also include project management, regular progress updates, and basic SEO optimization. Post-launch support for the first 30 days is included, along with documentation and source code. Additional services like ongoing maintenance, hosting, or extended support are quoted separately.`
        }
      ]
    },
    {
      category: "Communication & Support",
      faqs: [
        {
          question: "How do you communicate during projects?",
          answer: `We use a combination of tools for seamless communication. You'll have access to our client portal for project updates, file sharing, and milestone tracking. We schedule regular video calls (weekly or bi-weekly) and provide daily progress updates via email or Slack. Our team is available via email during business hours with typical response times under 2 hours.`
        },
        {
          question: "What if I need changes during development?",
          answer: `We understand that requirements can evolve during development. Minor changes and refinements are typically included in our scope. For significant changes, we'll provide a change order with transparent pricing and timeline impact. We use an agile development approach that allows for flexibility while keeping projects on track and within budget.`
        },
        {
          question: "Do you provide ongoing support after launch?",
          answer: `Yes, we offer various support packages ranging from basic maintenance to comprehensive ongoing development. Our support includes security updates, bug fixes, performance monitoring, and feature enhancements. We also provide training for your team and documentation to help you manage the system independently if preferred.`
        }
      ]
    },
    {
      category: "Technical & Security",
      faqs: [
        {
          question: "What technologies do you specialize in?",
          answer: `We specialize in modern web technologies including React, Next.js, Node.js, and Python. For mobile development, we use React Native and Flutter. Our AI/automation expertise includes machine learning, natural language processing, and workflow automation. We're also experienced with cloud platforms like AWS, Google Cloud, and Azure, plus various databases and third-party integrations.`
        },
        {
          question: "How do you ensure project security?",
          answer: `Security is built into every project from day one. We follow industry best practices including secure coding standards, regular security audits, and compliance with regulations like GDPR and CCPA. All data is encrypted in transit and at rest, we implement proper authentication and authorization, and conduct thorough security testing before launch. We can also help with SOC 2 compliance if needed.`
        },
        {
          question: "Do you sign NDAs and confidentiality agreements?",
          answer: `Absolutely. We understand the sensitive nature of business information and intellectual property. We're happy to sign NDAs, confidentiality agreements, and other legal documents before discussing your project details. We have standard agreements ready, or we can work with your legal team on custom agreements that meet your specific requirements.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const globalIndex = faqCategories?.slice(0, categoryIndex)?.reduce((sum, cat) => sum + cat?.faqs?.length, 0) + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? -1 : globalIndex);
  };

  const getGlobalIndex = (categoryIndex, faqIndex) => {
    return faqCategories?.slice(0, categoryIndex)?.reduce((sum, cat) => sum + cat?.faqs?.length, 0) + faqIndex;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-warning/10 rounded-full px-4 py-2 mb-6">
              <Icon name="HelpCircle" size={16} className="text-warning" />
              <span className="text-sm font-medium text-warning">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Got Questions?
              <span className="block text-primary">We've Got Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the most common questions we receive about our consultation process, 
              project approach, and working relationship. Can't find what you're looking for? 
              Just ask us directly!
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories?.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category?.category}
                </h3>
                
                <div className="space-y-4">
                  {category?.faqs?.map((faq, faqIndex) => {
                    const globalIndex = getGlobalIndex(categoryIndex, faqIndex);
                    const isOpen = openFAQ === globalIndex;
                    
                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq?.question}
                          </span>
                          <Icon
                            name={isOpen ? "ChevronUp" : "ChevronDown"}
                            size={20}
                            className={`text-gray-500 transition-transform duration-200 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          } overflow-hidden`}
                        >
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">
                                {faq?.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-gradient-primary text-white rounded-xl p-8 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Can't find the answer you're looking for? Our team is here to help. 
                Get in touch and we'll respond within 2 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Send Us a Message
                </a>
                <a
                  href="mailto:hello@karnos.digital"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;