import React from 'react';
import { Link } from 'react-router-dom';

const AIChatbotPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">AI Chatbot Assistant</h1>
            <p className="text-xl text-purple-100 mb-8">
              Get instant answers to your health questions 24/7. Our AI-powered assistant is here to help.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              Start Chatting
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What You Can Ask</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Medication Info</h3>
              <p className="text-gray-600">Learn about drug interactions and side effects</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Queries</h3>
              <p className="text-gray-600">Get answers to common health questions</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Assistance</h3>
              <p className="text-gray-600">Help with orders and deliveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">Our AI assistant is ready to help you 24/7</p>
          <Link to="/" className="text-purple-600 hover:underline font-semibold">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIChatbotPage;
