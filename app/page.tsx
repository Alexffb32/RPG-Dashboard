'use client'

import { useState } from 'react'
import { Users, Settings, User, Package, Trophy, Gamepad2, Map, Sword, Shield, Star, Crown, ShoppingCart, Store, Heart, Award, Target, Zap, ScrollText } from 'lucide-react'
import CharacterStats from '../components/CharacterStats'
import Inventory from '../components/Inventory'
import CharacterSelection from '../components/CharacterSelection'
import Badges from '../components/Badges'
import Skills from '../components/Skills'
import Market from '../components/Market'
import Vendor from '../components/Vendor'
import Battle from '../components/Battle'
import Pets from '../components/Pets'
import Guild from '../components/Guild'
import Campaign from '../components/Campaign'
import Friends from '../components/Friends'
import Leaderboard from '../components/Leaderboard'
import Membership from '../components/Membership'
import MapComponent from '../components/Map'
import SettingsComponent from '../components/Settings'

type ActiveView = 'character' | 'inventory' | 'badges' | 'selection' | 'quests' | 'skills' | 'market' | 'vendor' | 'battle' | 'pets' | 'guild' | 'campaign' | 'friends' | 'leaderboard' | 'membership' | 'map' | 'settings'

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('character')
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [selectedCharacter] = useState({
    name: 'Alexffb',
    level: 42,
    class: 'Warrior',
    avatar: '🛡️',
    location: 'Ironhold Stronghold'
  })

  const navigationItems = [
    { id: 'character', label: 'Character', icon: <User className="w-5 h-5" /> },
    { id: 'inventory', label: 'Inventory', icon: <Package className="w-5 h-5" /> },
    { id: 'badges', label: 'Badges', icon: <Award className="w-5 h-5" /> },
    { id: 'selection', label: 'Selection', icon: <Target className="w-5 h-5" /> },
    { id: 'quests', label: 'Quests', icon: <ScrollText className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Zap className="w-5 h-5" /> },
    { id: 'market', label: 'Market', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'vendor', label: 'Vendor', icon: <Store className="w-5 h-5" /> },
    { id: 'battle', label: 'Battle', icon: <Sword className="w-5 h-5" /> },
    { id: 'pets', label: 'Pets', icon: <Heart className="w-5 h-5" /> },
    { id: 'guild', label: 'Guild', icon: <Crown className="w-5 h-5" /> },
    { id: 'campaign', label: 'Campaign', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'friends', label: 'Friends', icon: <Users className="w-5 h-5" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-5 h-5" /> },
    { id: 'membership', label: 'Membership', icon: <Crown className="w-5 h-5" /> },
  ]

  const handleMapClick = () => {
    setIsMapOpen(true)
  }

  const handleSettingsClick = () => {
    setIsSettingsOpen(true)
  }

  const handleNavigation = (itemId: string) => {
    if (itemId === 'map') {
      handleMapClick()
    } else {
      setActiveView(itemId as ActiveView)
    }
  }

  const renderContent = () => {
    switch (activeView) {
      case 'character':
        return <CharacterStats />
      case 'inventory':
        return <Inventory />
      case 'badges':
        return <Badges />
      case 'selection':
        return <CharacterSelection />
      case 'quests':
        return (
          <div className="space-y-6">
            <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
              <h2 className="text-2xl font-bold text-discord-text mb-4">Active Quests</h2>
              <div className="space-y-4">
                <div className="bg-discord-dark rounded-lg p-4">
                  <h3 className="text-discord-text font-semibold mb-2">🗡️ Defeat the Goblin King</h3>
                  <p className="text-discord-muted text-sm mb-3">Venture into the Goblin Caves and defeat their leader to restore peace to the village.</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-discord-muted">Progress: 3/5 Goblins defeated</div>
                    <div className="text-sm text-green-400">Reward: 500 XP, 200 Gold</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-discord-blurple h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-discord-dark rounded-lg p-4">
                  <h3 className="text-discord-text font-semibold mb-2">📦 Collect Ancient Artifacts</h3>
                  <p className="text-discord-muted text-sm mb-3">Gather 10 ancient artifacts scattered throughout the mystical forest.</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-discord-muted">Progress: 7/10 Artifacts found</div>
                    <div className="text-sm text-green-400">Reward: Mystic Scroll, 300 Gold</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-discord-blurple h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'skills':
        return <Skills />
      case 'market':
        return <Market />
      case 'vendor':
        return <Vendor />
      case 'battle':
        return <Battle />
      case 'pets':
        return <Pets />
      case 'guild':
        return <Guild />
      case 'campaign':
        return <Campaign />
      case 'friends':
        return <Friends />
      case 'leaderboard':
        return <Leaderboard />
      case 'membership':
        return <Membership />
      default:
        return <CharacterStats />
    }
  }

  return (
    <div className="flex h-screen bg-discord-dark text-white">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-discord-light flex flex-col border-r border-gray-600/50">
        {/* Character Header */}
        <div className="p-4 border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-discord-dark rounded-full flex items-center justify-center text-2xl">
              {selectedCharacter.avatar}
            </div>
            <div>
              <h2 className="font-bold text-discord-text">{selectedCharacter.name}</h2>
              <p className="text-sm text-discord-muted">Level {selectedCharacter.level} {selectedCharacter.class}</p>
              <p className="text-xs text-discord-muted">📍 {selectedCharacter.location}</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  activeView === item.id
                    ? 'bg-discord-blurple text-white'
                    : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            {/* Map Button */}
            <button
              onClick={handleMapClick}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-discord-muted hover:text-discord-text hover:bg-discord-dark"
            >
              <Map className="w-5 h-5" />
              <span className="font-medium">Map</span>
            </button>
          </div>
        </nav>

        {/* Quick Stats */}
        <div className="p-4 border-t border-gray-600/50">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-discord-muted">Gold:</span>
              <span className="text-yellow-400 font-medium">18,048</span>
            </div>
            <div className="flex justify-between">
              <span className="text-discord-muted">Tokens:</span>
              <span className="text-blue-400 font-medium">330</span>
            </div>
            <div className="flex justify-between">
              <span className="text-discord-muted">Status:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="p-4 border-t border-gray-600/50">
          <button 
            onClick={handleSettingsClick}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-discord-muted hover:text-discord-text hover:bg-discord-dark transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-discord-light border-b border-gray-600/50 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-discord-text capitalize">
              {activeView === 'selection' ? 'Character Selection' : activeView}
            </h1>
            <p className="text-sm text-discord-muted">
              {activeView === 'character' && 'Manage your character stats and abilities'}
              {activeView === 'inventory' && 'Manage your items and equipment'}
              {activeView === 'badges' && 'View your achievements and progress'}
              {activeView === 'selection' && 'Choose or create a character'}
              {activeView === 'quests' && 'Track your active quests and missions'}
              {activeView === 'skills' && 'View and manage your character skills'}
              {activeView === 'market' && 'Buy and sell items with other players'}
              {activeView === 'vendor' && 'Purchase items from NPCs and merchants'}
              {activeView === 'battle' && 'Fight enemies and gain experience in combat'}
              {activeView === 'pets' && 'Collect, train, and manage your companion pets'}
              {activeView === 'guild' && 'Manage your guild and interact with members'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-discord-muted">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Server: Online</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Map Modal */}
      <MapComponent 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
      />

      {/* Settings Modal */}
      <SettingsComponent 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </div>
  )
}