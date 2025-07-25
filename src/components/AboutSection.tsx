
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The Future of <span className="text-green-400">Creation</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI VERSE revolutionizes music and visual creation through artificial intelligence. 
                We push the boundaries of digital art to create unique and immersive experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Developed by <span className="text-green-400 font-semibold">Skynet 3D</span>, 
                our platform uses the most advanced technologies to generate original compositions 
                and stunning visuals that challenge traditional artistic conventions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                <p className="text-gray-400">Compositions created</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5M+</div>
                <p className="text-gray-400">Total plays</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <p className="text-gray-400">Music genres</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-gray-400">Continuous creation</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl border border-green-500/30"></div>
                <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl border border-emerald-500/30"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-48 bg-gradient-to-br from-green-600/20 to-green-400/20 rounded-xl border border-green-400/30"></div>
                <div className="h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-xl border border-green-500/30"></div>
              </div>
            </div>
            
            {/* Floating AI icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-black font-bold text-xl">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
