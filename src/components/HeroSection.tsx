
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-green-400 text-sm uppercase tracking-wider font-medium">
                Intelligence artificielle, musique, créativité
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Activez
                <br />
                votre
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  univers
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Nous créons l'avenir de la musique et des vidéos avec l'intelligence artificielle, 
                offrant des expériences sonores et visuelles révolutionnaires.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Plateforme de création AI</p>
                  <p className="text-white">100% créative : musique,</p>
                  <p className="text-white">vidéos, expériences immersives.</p>
                </div>
                <div>
                  <p className="text-gray-400">Contenu innovant</p>
                  <p className="text-white">Compositions originales générées</p>
                  <p className="text-white">par intelligence artificielle.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 text-lg">
                Découvrir nos créations
              </Button>
              <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 text-lg">
                Écouter maintenant
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* 3D-like shape inspired by your reference */}
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[60px] transform rotate-12 shadow-2xl"></div>
                <div className="absolute inset-0 w-80 h-80 bg-black rounded-full flex items-center justify-center transform -translate-x-8 translate-y-8">
                  <div className="w-16 h-16 border-2 border-green-400 flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-green-400 transform rotate-45"></div>
                    <div className="w-0.5 h-8 bg-green-400 transform -rotate-45 -ml-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-emerald-500/30 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
