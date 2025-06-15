'use client'

import { Bell, Users, Map, Coins, DollarSign } from 'lucide-react'
import Image from 'next/image'

interface TopNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TopNavigation({ activeTab, setActiveTab }: TopNavigationProps) {
  const tabs = ['Profile', 'Skins', 'Badges']

  return (
    <nav className="h-16 bg-discord-dark border-b border-gray-700/50 flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-discord-blurple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-discord-text font-semibold">Discord</span>
        </div>
        
        <div className="text-discord-muted text-sm">
          <span className="text-discord-green">●</span> 7,683 Playing
        </div>
      </div>

      {/* Center Section - Tabs */}
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'text-discord-text bg-discord-light'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-light/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Status Indicators */}
        <div className="flex items-center gap-3">
          <div className="status-indicator hunting">
            <div className="w-2 h-2 bg-discord-green rounded-full"></div>
            <span>Hunting</span>
          </div>
          
          <div className="status-indicator nearby">
            <Users className="w-4 h-4" />
            <span>Nearby</span>
          </div>
          
          <div className="status-indicator map">
            <Map className="w-4 h-4" />
            <span>Map</span>
          </div>
        </div>

        {/* Currency */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-discord-text">
            <Coins className="w-4 h-4 text-discord-yellow" />
            <span className="text-sm font-medium">330</span>
          </div>
          
          <div className="flex items-center gap-1 text-discord-text">
            <DollarSign className="w-4 h-4 text-discord-green" />
            <span className="text-sm font-medium">18.05K</span>
          </div>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="w-5 h-5 text-discord-muted hover:text-discord-text cursor-pointer" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-discord-red rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-discord-text font-medium">Alexffb</span>
          </div>
        </div>
      </div>
    </nav>
  )
}