import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

/**
 * Navbar Component
 * Main navigation bar with logo, location, search, cart, and login
 */
const Navbar = ({ onCartClick }) => {
  const { getCartItemsCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation] = useState('New York, 10001');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${searchTerm}`);
    }
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold leading-tight">MediEase</h1>
              <p className="text-xs text-blue-100">Online Pharmacy</p>
            </div>
          </Link>

          {/* Location Selector */}
          <div className="hidden md:flex items-center gap-2 bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-800 cursor-pointer transition shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-blue-200">Deliver to</p>
              <p className="text-sm font-semibold">{selectedLocation}</p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for medicines, vitamins, health products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Cart */}
          <button 
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition shrink-0"
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

          {/* Login */}
          <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-semibold shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden lg:block">Login</span>
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="border-t border-blue-500">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-6 py-2 text-sm">
            <Link to="/shop" className="hover:text-blue-200 transition font-medium">Shop All</Link>
            <Link to="/shop" className="hover:text-blue-200 transition">Categories</Link>
            <Link to="/shop" className="hover:text-blue-200 transition">🔥 Deals</Link>
            <Link to="/shop" className="hover:text-blue-200 transition">New Arrivals</Link>
            <a href="#" className="hover:text-blue-200 transition">Track Order</a>
            <a href="#" className="hover:text-blue-200 transition">Prescription Upload</a>
            <a href="#" className="hover:text-blue-200 transition">Help</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
