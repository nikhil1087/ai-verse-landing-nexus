
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">AI</span>
              </div>
              <div>
                <h3 className="text-white font-bold">AI VERSE</h3>
                <p className="text-xs text-gray-400">by Skynet 3D</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creator of music and visual content through artificial intelligence
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">AI Music</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Videos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Playlists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">New Releases</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Spotify</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">SoundCloud</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Skynet 3D</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 AI VERSE - Skynet 3D. All rights reserved.</p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">Powered by artificial intelligence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
