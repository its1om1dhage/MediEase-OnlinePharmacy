import React, { useState } from 'react';
import CategoryFilter from '../../components/product/CategoryFilter';
import ProductCard from '../../components/product/ProductCard';
import { products } from '../../data/products';

/**
 * Shop Page Component
 * Product listing page with filters and search
 */
const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shop All Products</h1>
      
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedCategory}
          <span className="text-sm font-normal text-gray-500 ml-3">
            ({filteredProducts.length} products)
          </span>
        </h2>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
