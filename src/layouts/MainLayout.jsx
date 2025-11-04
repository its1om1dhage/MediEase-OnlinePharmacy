import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CartDrawer from '../components/cart/CartDrawer';

const MainLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onCartClick={handleCartOpen} />
      
      <main className="flex-1">
        <Outlet context={{ handleCartOpen }} />
      </main>
      
      <Footer />
      
      <CartDrawer isOpen={isCartOpen} onClose={handleCartClose} />
    </div>
  );
};

export default MainLayout;
