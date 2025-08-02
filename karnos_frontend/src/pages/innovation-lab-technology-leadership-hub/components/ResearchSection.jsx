import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResearchSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const researchArticles = [
    {
      id: 1,
      title: "React 19 Concurrent Rendering: Performance Implications and Best Practices",
      excerpt: "Deep dive into React 19's concurrent features, analyzing performance benefits and implementation strategies for production applications.",
      category: "react",
      author: "Sarah Chen",
      readTime: "12 min read",
      publishDate: "2025-07-28",
      tags: ["React 19", "Performance", "Concurrent Rendering"],
      featured: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "AI-Powered Code Generation: The Future of Development Workflows",
      excerpt: "Exploring how AI assistants are transforming code generation, from simple snippets to complex application architectures.",
      category: "ai",
      author: "Michael Rodriguez",
      readTime: "8 min read",
      publishDate: "2025-07-25",
      tags: ["AI", "Code Generation", "Automation"],
      featured: false,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Server Components vs Client Components: Architecture Decisions",
      excerpt: "Comprehensive guide to choosing between server and client components in modern React applications with real-world examples.",
      category: "react",
      author: "David Kim",
      readTime: "15 min read",
      publishDate: "2025-07-22",
      tags: ["React", "Server Components", "Architecture"],
      featured: true,
      image: "https://images.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.jpg?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "WebAssembly Integration Patterns for High-Performance Web Apps",
      excerpt: "Practical approaches to integrating WebAssembly modules in React applications for compute-intensive tasks.",
      category: "performance",
      author: "Elena Vasquez",
      readTime: "10 min read",
      publishDate: "2025-07-20",
      tags: ["WebAssembly", "Performance", "Integration"],
      featured: false,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Machine Learning Model Deployment in Edge Computing Environments",
      excerpt: "Strategies for deploying ML models at the edge, reducing latency and improving user experience in web applications.",
      category: "ai",
      author: "James Thompson",
      readTime: "14 min read",
      publishDate: "2025-07-18",
      tags: ["Machine Learning", "Edge Computing", "Deployment"],
      featured: false,
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Advanced State Management Patterns with React 19",
      excerpt: "Exploring new state management approaches enabled by React 19\'s concurrent features and improved context API.",
      category: "react",
      author: "Lisa Park",
      readTime: "11 min read",
      publishDate: "2025-07-15",
      tags: ["React 19", "State Management", "Context API"],
      featured: false,
      image: "https://images.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg?w=800&h=400&fit=crop"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Research', count: researchArticles?.length },
    { id: 'react', name: 'React & Frontend', count: researchArticles?.filter(a => a?.category === 'react')?.length },
    { id: 'ai', name: 'AI & ML', count: researchArticles?.filter(a => a?.category === 'ai')?.length },
    { id: 'performance', name: 'Performance', count: researchArticles?.filter(a => a?.category === 'performance')?.length }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? researchArticles 
    : researchArticles?.filter(article => article?.category === selectedCategory);

  const featuredArticles = researchArticles?.filter(article => article?.featured);

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
            <Icon name="BookOpen" size={16} className="text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Research & Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Technical <span className="text-gradient">Research</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In-depth technical articles exploring emerging technologies, best practices, and innovative development approaches.
          </motion.p>
        </div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Research</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles?.map((article, index) => (
              <motion.article
                key={article?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article?.image}
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{article?.author}</span>
                    <span>•</span>
                    <span>{article?.readTime}</span>
                    <span>•</span>
                    <span>{new Date(article.publishDate)?.toLocaleDateString()}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {article?.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article?.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article?.tags?.slice(0, 2)?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="bg-white rounded-lg p-1 inline-flex shadow-sm border border-gray-200">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category?.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{category?.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category?.id
                    ? 'bg-indigo-500 text-white' :'bg-gray-200 text-gray-600'
                }`}>
                  {category?.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles?.filter(article => !article?.featured)?.map((article, index) => (
            <motion.article
              key={article?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article?.image}
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span>{article?.author}</span>
                  <span>•</span>
                  <span>{article?.readTime}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                  {article?.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article?.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article?.tags?.slice(0, 2)?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Read
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <Icon name="Mail" size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Latest Research
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Get weekly insights on emerging technologies, development best practices, and innovation trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                variant="secondary"
                iconName="Send"
                iconPosition="right"
                className="bg-white text-indigo-600 hover:bg-gray-100 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;