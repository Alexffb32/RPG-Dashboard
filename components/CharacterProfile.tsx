'use client'

import Image from 'next/image'

export default function CharacterProfile() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="h-64 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Character Avatar */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="w-32 h-32 bg-discord-dark rounded-full border-4 border-gray-700 overflow-hidden flex items-center justify-center">
            <span className="text-6xl">🦅</span>
          </div>
        </div>

        {/* Character Info */}
        <div className="absolute left-48 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-4xl font-bold mb-2">Alexffb</h1>
          <div className="flex gap-6 text-sm">
            <div>
              <span className="text-gray-300">Combat Level</span>
              <div className="text-2xl font-bold">27</div>
            </div>
            <div>
              <span className="text-gray-300">Total Level</span>
              <div className="text-2xl font-bold">403</div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center border-2 border-yellow-300">
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    </div>
  )
}