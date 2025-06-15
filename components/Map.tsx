'use client';

import React, { useState } from 'react';
import { X, MapPin, Compass, Mountain, Trees, Waves, Castle, Gem, Sword, Shield } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  level: number;
  type: 'forest' | 'mountain' | 'water' | 'dungeon' | 'city' | 'cave';
  x: number;
  y: number;
  unlocked: boolean;
  description: string;
}

interface MapProps {
  isOpen: boolean;
  onClose: () => void;
}

const locations: Location[] = [
  {
    id: '1',
    name: 'Bluebell Hollow',
    level: 1,
    type: 'forest',
    x: 20,
    y: 15,
    unlocked: true,
    description: 'A peaceful starting area with gentle creatures'
  },
  {
    id: '2',
    name: 'Whispering Woods',
    level: 10,
    type: 'forest',
    x: 35,
    y: 25,
    unlocked: true,
    description: 'Dense forest filled with mysterious sounds'
  },
  {
    id: '3',
    name: 'The Citadel',
    level: 15,
    type: 'city',
    x: 75,
    y: 20,
    unlocked: true,
    description: 'A grand fortress city'
  },
  {
    id: '4',
    name: 'Floating Gardens of Aetheria',
    level: 25,
    type: 'forest',
    x: 15,
    y: 35,
    unlocked: true,
    description: 'Magical floating islands with exotic plants'
  },
  {
    id: '5',
    name: 'Eldoria',
    level: 30,
    type: 'city',
    x: 45,
    y: 45,
    unlocked: true,
    description: 'Ancient elven city'
  },
  {
    id: '6',
    name: 'Crystal Caverns',
    level: 35,
    type: 'cave',
    x: 65,
    y: 50,
    unlocked: true,
    description: 'Glittering caves filled with precious gems'
  },
  {
    id: '7',
    name: 'Skyreach Peak',
    level: 40,
    type: 'mountain',
    x: 75,
    y: 55,
    unlocked: true,
    description: 'The highest mountain peak'
  },
  {
    id: '8',
    name: 'Isle of Whispers',
    level: 20,
    type: 'water',
    x: 25,
    y: 60,
    unlocked: true,
    description: 'A mysterious island surrounded by mist'
  },
  {
    id: '9',
    name: 'Celestial Observatory',
    level: 45,
    type: 'mountain',
    x: 55,
    y: 70,
    unlocked: true,
    description: 'Ancient observatory for studying the stars'
  },
  {
    id: '10',
    name: 'Enchanted Oasis',
    level: 25,
    type: 'water',
    x: 35,
    y: 75,
    unlocked: true,
    description: 'A magical oasis in the desert'
  }
];

const getLocationIcon = (type: string) => {
  switch (type) {
    case 'forest': return <Trees className="w-4 h-4" />;
    case 'mountain': return <Mountain className="w-4 h-4" />;
    case 'water': return <Waves className="w-4 h-4" />;
    case 'city': return <Castle className="w-4 h-4" />;
    case 'cave': return <Gem className="w-4 h-4" />;
    case 'dungeon': return <Sword className="w-4 h-4" />;
    default: return <MapPin className="w-4 h-4" />;
  }
};

const getLocationColor = (type: string) => {
  switch (type) {
    case 'forest': return 'text-green-400';
    case 'mountain': return 'text-gray-400';
    case 'water': return 'text-blue-400';
    case 'city': return 'text-yellow-400';
    case 'cave': return 'text-purple-400';
    case 'dungeon': return 'text-red-400';
    default: return 'text-white';
  }
};

export default function Map({ isOpen, onClose }: MapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-[90vw] h-[80vh] max-w-6xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">World Map</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex h-full">
          {/* Map Area */}
          <div className="flex-1 relative overflow-hidden">
            {/* Map Background */}
            <div 
              className="w-full h-full bg-gradient-to-br from-blue-900 via-green-800 to-yellow-700 relative"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)
                `
              }}
            >
              {/* Locations */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${
                    location.unlocked ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  {/* Location Pin */}
                  <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-gray-900 ${getLocationColor(location.type)} group-hover:scale-110 transition-transform`}>
                    {getLocationIcon(location.type)}
                  </div>
                  
                  {/* Location Label */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-gray-400">Level {location.level}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-80 text-white text-sm px-3 py-2 rounded flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>Press and hold to drag</span>
            </div>
          </div>

          {/* Location Details Panel */}
          {selectedLocation && (
            <div className="w-80 bg-gray-900 border-l border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-gray-800 ${getLocationColor(selectedLocation.type)}`}>
                  {getLocationIcon(selectedLocation.type)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedLocation.name}</h3>
                  <p className="text-gray-400">Level {selectedLocation.level}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Description</h4>
                  <p className="text-gray-400 text-sm">{selectedLocation.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Location Type</h4>
                  <div className="flex items-center gap-2">
                    <span className={getLocationColor(selectedLocation.type)}>
                      {getLocationIcon(selectedLocation.type)}
                    </span>
                    <span className="text-gray-400 capitalize">{selectedLocation.type}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    Travel Here
                  </button>
                  <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}