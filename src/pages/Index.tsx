
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentShowcase from '@/components/ContentShowcase';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ContentShowcase />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
