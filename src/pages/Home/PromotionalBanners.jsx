import React from 'react';

/**
 * Promotional Banners Section
 * Displays special offers and deals
 */
const PromotionalBanners = () => {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-linear-to-r from-green-500 to-green-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-2">🎉 Special Offer</h3>
          <p className="text-lg mb-4">Get 20% OFF on all vitamins</p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
            Shop Now
          </button>
        </div>
        
        <div className="bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-2">🚚 Free Delivery</h3>
          <p className="text-lg mb-4">On orders over $50</p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
