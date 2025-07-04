
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">AI</span>
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">AI VERSE</h1>
                <p className="text-xs text-gray-400">by Skynet 3D</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#music" className="text-gray-300 hover:text-green-400 transition-colors">Music</a>
            <a href="#videos" className="text-gray-300 hover:text-green-400 transition-colors">Videos</a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            <a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors">Gallery</a>
          </nav>
          
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
