import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Services Section Component
 * Clean grid layout for MediEase services navigation
 */
const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Dose Reminder',
      path: '/dose-reminder',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-blue-600',
      bgHover: 'hover:bg-blue-50'
    },
    {
      id: 2,
      title: 'AI Chatbot',
      path: '/ai-chatbot',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: 'text-purple-600',
      bgHover: 'hover:bg-purple-50'
    },
    {
      id: 3,
      title: 'Doctor Consultation',
      path: '/doctor-consultation',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'text-green-600',
      bgHover: 'hover:bg-green-50'
    },
    {
      id: 4,
      title: 'Subscription',
      path: '/subscription',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'text-orange-600',
      bgHover: 'hover:bg-orange-50'
    },
    {
      id: 5,
      title: 'Track Orders',
      path: '/track-orders',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'text-red-600',
      bgHover: 'hover:bg-red-50'
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Compact Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Services & Features
        </h2>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => navigate(service.path)}
              className={`group p-4 bg-gray-50 border border-gray-200 ${service.bgHover} transition-all duration-200 hover:border-gray-400`}
            >
              <div className={`${service.color} mb-2 flex justify-center group-hover:scale-105 transition-transform duration-200`}>
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center leading-tight">
                {service.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
