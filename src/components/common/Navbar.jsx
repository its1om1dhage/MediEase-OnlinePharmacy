import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

/**
 * Navbar Component
 * Responsive navigation bar with hamburger menu on mobile
 */
const Navbar = ({ onCartClick }) => {
  const { getCartItemsCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation] = useState('New York, 10001');
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${searchTerm}`);
      setIsHamburgerOpen(false);
    }
  };

  const services = [
    { name: 'Dose Reminder', path: '/dose-reminder', icon: '⏰' },
    { name: 'AI Chatbot Assistant', path: '/ai-chatbot', icon: '💬' },
    { name: 'Doctor Consultation', path: '/doctor-consultation', icon: '👨‍⚕️' },
    { name: 'Subscription Service', path: '/subscription', icon: '🔄' },
    { name: 'Track Your Orders', path: '/track-orders', icon: '📍' }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add dark mode logic here
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-3 md:px-4 py-2 md:py-3">
        {/* Main Navbar Row */}
        <div className="flex items-center gap-2">
          {/* Logo with Name */}
          <Link to="/" className="flex items-center space-x-1.5 md:space-x-2 shrink-0">
            <svg className="w-7 h-7 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
            </svg>
            <div>
              <h1 className="text-base md:text-2xl font-bold leading-tight">MediEase</h1>
              <p className="text-xs text-blue-100 hidden md:block">Online Pharmacy</p>
            </div>
          </Link>

          {/* Search Bar - Visible on tablet and desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 relative">
            <input
              type="text"
              placeholder="Search for medicines, vitamins, health products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 p-2 rounded-md transition"
              aria-label="Search"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Location - Desktop only */}
          <button className="hidden lg:flex items-center gap-2 bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-800 transition shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-blue-200">Deliver to</p>
              <p className="text-sm font-semibold">{selectedLocation}</p>
            </div>
          </button>

          {/* Desktop - Cart & Login */}
          <button 
            onClick={onCartClick}
            className="hidden md:flex relative items-center gap-2 bg-blue-700 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-800 transition shrink-0"
            aria-label="Shopping cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
            <span className="hidden lg:block font-semibold">Cart</span>
          </button>

          <button className="hidden md:flex items-center gap-2 bg-white text-blue-600 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-50 transition font-semibold shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden lg:block">Login</span>
          </button>

          {/* Spacer to push hamburger to right on mobile */}
          <div className="flex-1 md:hidden"></div>

          {/* Hamburger Menu Button - Mobile Only - More Visible */}
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className="md:hidden p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition shrink-0"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isHamburgerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search Bar - Below main row */}
        <div className="md:hidden mt-2">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10 text-sm"
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 p-1.5 rounded-md transition"
              aria-label="Search"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          
          {/* Mobile Location Button */}
          <button className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-800 transition text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">Deliver to: {selectedLocation}</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        {isHamburgerOpen && (
          <div className="md:hidden mt-4 bg-blue-700 rounded-lg p-4 space-y-3">
            {/* Cart */}
            <button 
              onClick={() => {
                onCartClick();
                setIsHamburgerOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 bg-blue-600 hover:bg-blue-800 rounded-lg transition"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold">Cart</span>
              </div>
              {getCartItemsCount() > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* Login */}
            <button className="w-full flex items-center gap-3 p-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition font-semibold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-between p-3 bg-blue-600 hover:bg-blue-800 rounded-lg transition"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isDarkMode ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  )}
                </svg>
                <span className="font-semibold">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </div>
            </button>

            {/* Divider */}
            <div className="border-t border-blue-500 my-2"></div>

            {/* Services Section */}
            <div className="space-y-2">
              <p className="text-blue-200 text-sm font-semibold px-3">Our Services</p>
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(service.path);
                    setIsHamburgerOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-800 rounded-lg transition text-left"
                >
                  <span className="text-xl">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
