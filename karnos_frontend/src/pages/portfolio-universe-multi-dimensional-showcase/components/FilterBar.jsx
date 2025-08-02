import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  activeCategory, 
  setActiveCategory, 
  activeIndustry, 
  setActiveIndustry, 
  activeTechnology, 
  setActiveTechnology,
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy
}) => {
  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid3X3' },
    { id: 'web-apps', name: 'Web Apps', icon: 'Globe' },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: 'Smartphone' },
    { id: 'ai-solutions', name: 'AI Solutions', icon: 'Brain' },
    { id: 'design-systems', name: 'Design Systems', icon: 'Palette' },
    { id: 'dashboards', name: 'Dashboards', icon: 'BarChart3' }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'startups', name: 'Startups' },
    { id: 'smb', name: 'SMB' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const technologies = [
    { id: 'all', name: 'All Tech' },
    { id: 'react', name: 'React 19' },
    { id: 'nextjs', name: 'Next.js' },
    { id: 'ai', name: 'AI Integration' },
    { id: 'mobile', name: 'React Native' },
    { id: 'node', name: 'Node.js' }
  ];

  const sortOptions = [
    { id: 'recent', name: 'Most Recent' },
    { id: 'featured', name: 'Featured First' },
    { id: 'alphabetical', name: 'A-Z' },
    { id: 'industry', name: 'By Industry' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Search projects by name, technology, or client..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      {/* Category Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Project Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category?.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Secondary Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select
            value={activeIndustry}
            onChange={(e) => setActiveIndustry(e?.target?.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {industries?.map((industry) => (
              <option key={industry?.id} value={industry?.id}>
                {industry?.name}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
          <select
            value={activeTechnology}
            onChange={(e) => setActiveTechnology(e?.target?.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {technologies?.map((tech) => (
              <option key={tech?.id} value={tech?.id}>
                {tech?.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e?.target?.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {sortOptions?.map((option) => (
              <option key={option?.id} value={option?.id}>
                {option?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* View Mode & Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">View:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ?'bg-white text-primary shadow-sm' :'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ?'bg-white text-primary shadow-sm' :'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => {
            setActiveCategory('all');
            setActiveIndustry('all');
            setActiveTechnology('all');
            setSearchQuery('');
            setSortBy('recent');
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;