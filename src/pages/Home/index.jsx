import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FeaturedCategories from './FeaturedCategories';
import FeaturedProducts from './FeaturedProducts';
import PromotionalBanners from './PromotionalBanners';
import WhyChooseUs from './WhyChooseUs';
import { products } from '../../data/products';

/**
 * Home Page Component
 * Main landing page with all sections
 */
const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <HeroSection />
      <ServicesSection />
      <PromotionalBanners />
      <FeaturedCategories />
      <FeaturedProducts products={products} />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
