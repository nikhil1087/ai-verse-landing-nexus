
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ContentShowcase = () => {
  const musicTracks = [
    { title: "Synthetic Dreams", genre: "Ambient AI", duration: "3:42" },
    { title: "Neural Rhythms", genre: "Electronic AI", duration: "4:18" },
    { title: "Digital Harmony", genre: "Classical AI", duration: "5:23" },
    { title: "Quantum Beats", genre: "Hip-Hop AI", duration: "3:55" }
  ];

  const videoContent = [
    { title: "AI Music Visualization", type: "Music Video", views: "1.2M" },
    { title: "Behind the Algorithm", type: "Documentary", views: "850K" },
    { title: "Future Sounds", type: "Performance", views: "2.1M" },
    { title: "AI Composition Process", type: "Tutorial", views: "650K" }
  ];

  return (
    <section className="py-20 bg-gray-900" id="music">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Notre <span className="text-green-400">Univers</span> Créatif
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez nos dernières créations musicales et visuelles générées par intelligence artificielle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Music Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black text-sm font-bold">♪</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Musique IA</h3>
            </div>
            
            <div className="space-y-4">
              {musicTracks.map((track, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-lg">{track.title}</h4>
                        <p className="text-green-400 text-sm">{track.genre}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300 text-sm">{track.duration}</p>
                        <button className="text-green-400 hover:text-green-300 text-sm mt-1">
                          ▶ Écouter
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="space-y-6" id="videos">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black text-sm font-bold">▶</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Vidéos IA</h3>
            </div>
            
            <div className="space-y-4">
              {videoContent.map((video, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-lg">{video.title}</h4>
                        <p className="text-green-400 text-sm">{video.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300 text-sm">{video.views} vues</p>
                        <button className="text-green-400 hover:text-green-300 text-sm mt-1">
                          ▶ Regarder
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
