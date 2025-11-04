import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.prescription) {
      alert('This product requires a prescription. Please consult with a healthcare professional.');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-semibold">
            Out of Stock
          </div>
        )}
        {product.prescription && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-sm font-semibold">
            Rx Required
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
