import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = {
    general: {
      title: "General Questions",
      icon: "HelpCircle",
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "What makes KarnOS different from other agencies?",
          answer: "We combine cutting-edge technology with human-centered design, focusing on AI integration, modern frameworks like React 19, and transparent development processes. Our team stays ahead of industry trends to deliver future-proof solutions."
        },
        {
          question: "How do you ensure project quality?",
          answer: "We follow rigorous testing protocols, code reviews, and quality assurance processes. Every project undergoes comprehensive testing including performance optimization, security audits, and cross-platform compatibility checks."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during the consultation phase and maintain transparent progress tracking."
        },
        {
          question: "Do you provide ongoing support after launch?",
          answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, performance monitoring, and feature enhancements. Our support packages are tailored to your specific needs and budget."
        }
      ]
    },
    technical: {
      title: "Technical Details",
      icon: "Code",
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          question: "Which technologies do you specialize in?",
          answer: "We specialize in React 19, Next.js 14, Node.js, Python, React Native, and AI integration tools like OpenAI GPT and Langchain. We stay current with the latest frameworks and best practices."
        },
        {
          question: "How do you handle data security and privacy?",
          answer: "We implement industry-standard security measures including SSL encryption, secure authentication, data encryption at rest and in transit, and compliance with GDPR and other privacy regulations."
        },
        {
          question: "Can you integrate with existing systems?",
          answer: "Absolutely. We have extensive experience integrating with various APIs, databases, CRM systems, payment gateways, and third-party services. We ensure seamless data flow and system compatibility."
        },
        {
          question: "Do you provide source code and documentation?",
          answer: "Yes, you receive complete source code ownership, comprehensive documentation, deployment guides, and technical specifications. We believe in full transparency and knowledge transfer."
        }
      ]
    },
    pricing: {
      title: "Pricing & Process",
      icon: "DollarSign",
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "How do you structure your pricing?",
          answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. We provide detailed quotes after initial consultation."
        },
        {
          question: "What\'s included in your project estimates?",
          answer: "Our estimates include design, development, testing, deployment, documentation, and initial support. We're transparent about what's included and any potential additional costs upfront."
        },
        {
          question: "Do you require payment upfront?",
          answer: "We typically work with milestone-based payments. Usually 30% upfront, 40% at mid-project milestone, and 30% upon completion. This ensures mutual commitment and project progress alignment."
        },
        {
          question: "What if the project scope changes?",
          answer: "We handle scope changes through a formal change request process. We'll assess the impact on timeline and budget, get your approval, and update the project plan accordingly. Communication is key to managing changes effectively."
        }
      ]
    }
  };

  const toggleFAQ = (categoryKey, faqIndex) => {
    const faqId = `${categoryKey}-${faqIndex}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and approach
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {Object.entries(faqCategories)?.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              {faqCategories?.[activeCategory]?.faqs?.map((faq, index) => {
                const faqId = `${activeCategory}-${index}`;
                const isOpen = openFAQ === faqId;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border border-gray-200/50 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(activeCategory, index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq?.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon name="ChevronDown" size={20} className="text-gray-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-t border-gray-200/50 bg-gray-50">
                            <p className="text-gray-600 leading-relaxed pt-4">
                              {faq?.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Contact CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
            <p className="text-gray-600 mb-4">
              Our team is here to help you understand how we can bring your vision to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Contact Our Team</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;