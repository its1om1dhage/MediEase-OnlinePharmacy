import React from 'react';
import { Link } from 'react-router-dom';

const DoctorConsultationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Doctor Consultation</h1>
            <p className="text-xl text-green-100 mb-8">
              Connect with certified doctors online. Get professional medical advice from the comfort of your home.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Consultation Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Doctor</h3>
              <p className="text-gray-600">Select from our network of certified doctors</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video/Audio Call</h3>
              <p className="text-gray-600">Consult via video, audio, or chat</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Prescription</h3>
              <p className="text-gray-600">Receive digital prescription instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Medical Advice?</h2>
          <p className="text-gray-600 mb-8">Certified doctors available for consultation</p>
          <Link to="/" className="text-green-600 hover:underline font-semibold">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DoctorConsultationPage;
