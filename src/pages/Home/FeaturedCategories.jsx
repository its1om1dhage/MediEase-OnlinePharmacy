import React from 'react';

/**
 * Featured Categories Section
 * Displays popular product categories
 */
const FeaturedCategories = () => {
  const categories = [
    { name: 'Pain Relief', icon: '💊', count: 45 },
    { name: 'Vitamins', icon: '💪', count: 67 },
    { name: 'First Aid', icon: '🩹', count: 32 },
    { name: 'Medical Devices', icon: '🩺', count: 28 },
    { name: 'Cold & Flu', icon: '🤧', count: 41 },
    { name: 'Digestive Health', icon: '🌿', count: 35 },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} products</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
