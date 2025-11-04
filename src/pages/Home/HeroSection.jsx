import React from 'react';

/**
 * Hero Section Component
 * Main banner showcasing the pharmacy's value proposition
 */
const HeroSection = () => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-8 mb-6">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">Welcome to MediEase</h2>
        <p className="text-xl mb-6">Your trusted online pharmacy for quality medicines and healthcare products</p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Licensed Pharmacy</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
            </svg>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
