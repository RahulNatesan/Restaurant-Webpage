import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { OfferSection } from './components/OfferSection';
import { MenuSection } from './components/MenuSection';
import { ServicesSection } from './components/ServicesSection';
import { DealSection } from './components/DealSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WelcomeSection />
        <OfferSection />
        <MenuSection />
        <DealSection />
        <ServicesSection />
        <GallerySection />
        <ReviewsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
