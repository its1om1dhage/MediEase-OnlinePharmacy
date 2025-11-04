import React from 'react';
import ProductCard from '../../components/product/ProductCard';

/**
 * Featured Products Section
 * Displays highlighted products on homepage
 */
const FeaturedProducts = ({ products }) => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <a href="/shop" className="text-blue-600 hover:text-blue-700 font-semibold">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
