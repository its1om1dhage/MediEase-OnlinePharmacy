import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import DoseReminderPage from './pages/Features/DoseReminderPage';
import AIChatbotPage from './pages/Features/AIChatbotPage';
import DoctorConsultationPage from './pages/Features/DoctorConsultationPage';
import SubscriptionPage from './pages/Features/SubscriptionPage';
import TrackOrdersPage from './pages/Features/TrackOrdersPage';

/**
 * Main App Component
 * Sets up routing and global providers
 */
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="dose-reminder" element={<DoseReminderPage />} />
            <Route path="ai-chatbot" element={<AIChatbotPage />} />
            <Route path="doctor-consultation" element={<DoctorConsultationPage />} />
            <Route path="subscription" element={<SubscriptionPage />} />
            <Route path="track-orders" element={<TrackOrdersPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;