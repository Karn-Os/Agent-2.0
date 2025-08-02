import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-digital-agency-platform', icon: 'Home' },
    { name: 'Services', path: '/services-ecosystem-overview', icon: 'Layers' },
    { name: 'Portfolio', path: '/portfolio-universe-multi-dimensional-showcase', icon: 'Grid3X3' },
    { name: 'Innovation Lab', path: '/innovation-lab-technology-leadership-hub', icon: 'Zap' },
    { name: 'Contact', path: '/contact-consultation-center', icon: 'MessageCircle' }
  ];

  const secondaryItems = [
    { name: 'Client Portal', path: '/client-portal-project-collaboration-hub', icon: 'Users' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-digital-agency-platform" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-subtle"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient tracking-tight">KarnOS</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">Digital Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    className={`transition-colors duration-200 ${
                      isActivePath(item?.path) ? 'text-primary' : 'text-gray-500 group-hover:text-primary'
                    }`}
                  />
                  <span>{item?.name}</span>
                </div>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} className="text-gray-500 group-hover:text-primary transition-colors duration-200" />
                <span>More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-primary/10' :'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      <Icon 
                        name={item?.icon} 
                        size={16} 
                        className={isActivePath(item?.path) ? 'text-primary' : 'text-gray-500'}
                      />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex animate-pulse-subtle"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              Start Project
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-transform duration-200"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10 shadow-sm'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className={isActivePath(item?.path) ? 'text-primary' : 'text-gray-500'}
                  />
                  <span>{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </Link>
              ))}
              
              <div className="border-t border-gray-200/50 pt-2 mt-2">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-primary/10 shadow-sm'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <Icon 
                      name={item?.icon} 
                      size={18} 
                      className={isActivePath(item?.path) ? 'text-primary' : 'text-gray-500'}
                    />
                    <span>{item?.name}</span>
                    {isActivePath(item?.path) && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <Button
                variant="default"
                size="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
                className="animate-pulse-subtle"
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;