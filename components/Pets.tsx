'use client'

import { useState } from 'react'
import { Heart, Star, Trophy, Clock, Zap, Shield, Sword, Plus, Settings, Info, X, Target, Activity } from 'lucide-react'

interface Pet {
  id: string
  name: string
  type: string
  level: number
  health: number
  maxHealth: number
  experience: number
  maxExperience: number
  image: string
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  skills: {
    attack: number
    defense: number
    speed: number
    magic: number
  }
  isActive: boolean
  lastFed: string
  happiness: number
  abilities: string[]
}

interface PetMastery {
  level: number
  experience: number
  maxExperience: number
  percentage: number
}

export default function Pets() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [activeTab, setActiveTab] = useState<'collection' | 'mastery'>('collection')
  const [showDetailedView, setShowDetailedView] = useState(false)

  const petMastery: PetMastery = {
    level: 0,
    experience: 0,
    maxExperience: 100,
    percentage: 0
  }

  const pets: Pet[] = [
    {
      id: '1',
      name: 'Flame Dragon',
      type: 'Dragon',
      level: 0,
      health: 0,
      maxHealth: 100,
      experience: 0,
      maxExperience: 100,
      image: '🐉',
      rarity: 'legendary',
      skills: {
        attack: 0,
        defense: 0,
        speed: 0,
        magic: 0
      },
      isActive: true,
      lastFed: 'Never',
      happiness: 0,
      abilities: ['Fire Breath', 'Wing Strike', 'Dragon Roar']
    },
    {
      id: '2',
      name: 'Forest Wolf',
      type: 'Beast',
      level: 0,
      health: 0,
      maxHealth: 100,
      experience: 0,
      maxExperience: 100,
      image: '🐺',
      rarity: 'rare',
      skills: {
        attack: 0,
        defense: 0,
        speed: 0,
        magic: 0
      },
      isActive: false,
      lastFed: 'Never',
      happiness: 0,
      abilities: ['Pack Hunt', 'Howl', 'Swift Strike']
    },
    {
      id: '3',
      name: 'Crystal Golem',
      type: 'Elemental',
      level: 0,
      health: 0,
      maxHealth: 100,
      experience: 0,
      maxExperience: 100,
      image: '🗿',
      rarity: 'epic',
      skills: {
        attack: 0,
        defense: 0,
        speed: 0,
        magic: 0
      },
      isActive: false,
      lastFed: 'Never',
      happiness: 0,
      abilities: ['Crystal Shield', 'Earth Slam', 'Regeneration']
    },
    {
      id: '4',
      name: 'Shadow Cat',
      type: 'Spirit',
      level: 0,
      health: 0,
      maxHealth: 100,
      experience: 0,
      maxExperience: 100,
      image: '🐱',
      rarity: 'uncommon',
      skills: {
        attack: 0,
        defense: 0,
        speed: 0,
        magic: 0
      },
      isActive: false,
      lastFed: '3 hours ago',
      happiness: 60,
      abilities: ['Shadow Step', 'Stealth', 'Night Vision']
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 border-gray-400'
      case 'uncommon': return 'text-green-400 border-green-400'
      case 'rare': return 'text-blue-400 border-blue-400'
      case 'epic': return 'text-purple-400 border-purple-400'
      case 'legendary': return 'text-yellow-400 border-yellow-400'
      default: return 'text-gray-400 border-gray-400'
    }
  }

  const getHappinessColor = (happiness: number) => {
    if (happiness >= 80) return 'text-green-400'
    if (happiness >= 60) return 'text-yellow-400'
    if (happiness >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  const handlePetSelect = (pet: Pet) => {
    setSelectedPet(pet)
  }

  const handleShowDetails = (pet: Pet) => {
    setSelectedPet(pet)
    setShowDetailedView(true)
  }

  const handleCloseDetails = () => {
    setShowDetailedView(false)
  }

  const handleSetActive = (petId: string) => {
    // Logic to set pet as active
    console.log('Setting pet as active:', petId)
  }

  const handleFeedPet = (petId: string) => {
    // Logic to feed pet
    console.log('Feeding pet:', petId)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-discord-text flex items-center gap-2">
            🐾 Pet Collection
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('collection')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'collection'
                  ? 'bg-discord-blurple text-white'
                  : 'bg-discord-dark text-discord-muted hover:text-discord-text'
              }`}
            >
              Collection
            </button>
            <button
              onClick={() => setActiveTab('mastery')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'mastery'
                  ? 'bg-discord-blurple text-white'
                  : 'bg-discord-dark text-discord-muted hover:text-discord-text'
              }`}
            >
              Mastery
            </button>
          </div>
        </div>

        {/* Pet Mastery Info */}
        <div className="bg-discord-dark rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-discord-text font-semibold">Pet Mastery</h3>
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-discord-muted" />
              <span className="text-sm text-discord-muted">Lv {petMastery.level}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-discord-muted">{petMastery.experience} EXP Needed</span>
                <span className="text-discord-text">{petMastery.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-discord-blurple h-2 rounded-full transition-all"
                  style={{ width: `${(petMastery.experience / petMastery.maxExperience) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeTab === 'collection' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pet Grid */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-discord-text">Your Pets</h3>
              <button className="bg-discord-blurple hover:bg-blue-600 text-white p-2 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {pets.map((pet) => (
                <div
                  key={pet.id}
                  onClick={() => handlePetSelect(pet)}
                  onDoubleClick={() => handleShowDetails(pet)}
                  className={`bg-discord-dark rounded-lg p-4 cursor-pointer transition-all hover:bg-gray-600/50 border-2 ${
                    selectedPet?.id === pet.id ? 'ring-2 ring-discord-blurple' : ''
                  } ${getRarityColor(pet.rarity)}`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2 relative">
                      {pet.image}
                      {pet.isActive && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-discord-dark"></div>
                      )}
                    </div>
                    <h4 className="font-semibold text-discord-text text-sm mb-1">{pet.name}</h4>
                    <div className="text-xs text-discord-muted mb-2">Lv. {pet.level} {pet.type}</div>
                    
                    {/* Health Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-red-400 h-1.5 rounded-full"
                        style={{ width: `${(pet.health / pet.maxHealth) * 100}%` }}
                      ></div>
                    </div>
                    
                    {/* Happiness */}
                    <div className={`text-xs ${getHappinessColor(pet.happiness)}`}>
                      ❤️ {pet.happiness}%
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Empty Slots */}
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`empty-${i}`} className="bg-discord-dark rounded-lg p-4 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <div className="text-center text-discord-muted">
                    <div className="text-2xl mb-2">➕</div>
                    <div className="text-xs">Empty</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pet Details */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            {selectedPet ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-2 relative inline-block">
                    {selectedPet.image}
                    {selectedPet.isActive && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-discord-dark"></div>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${getRarityColor(selectedPet.rarity).split(' ')[0]}`}>
                    {selectedPet.name}
                  </h3>
                  <div className="text-sm text-discord-muted mb-2">
                    Level {selectedPet.level} {selectedPet.type}
                  </div>
                  <div className={`text-sm capitalize ${getRarityColor(selectedPet.rarity).split(' ')[0]}`}>
                    {selectedPet.rarity}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-discord-muted flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-400" /> Health
                      </span>
                      <span className="text-discord-text">
                        {selectedPet.health}/{selectedPet.maxHealth}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-red-400 h-2 rounded-full"
                        style={{ width: `${(selectedPet.health / selectedPet.maxHealth) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-discord-muted flex items-center gap-1">
                        <Star className="w-4 h-4 text-blue-400" /> Experience
                      </span>
                      <span className="text-discord-text">
                        {selectedPet.experience}/{selectedPet.maxExperience}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: `${(selectedPet.experience / selectedPet.maxExperience) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={`flex items-center gap-1 ${getHappinessColor(selectedPet.happiness)}`}>
                        ❤️ Happiness
                      </span>
                      <span className={getHappinessColor(selectedPet.happiness)}>
                        {selectedPet.happiness}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          selectedPet.happiness >= 80 ? 'bg-green-400' :
                          selectedPet.happiness >= 60 ? 'bg-yellow-400' :
                          selectedPet.happiness >= 40 ? 'bg-orange-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${selectedPet.happiness}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-discord-text mb-3">Skills</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-discord-muted flex items-center gap-1">
                        <Sword className="w-3 h-3 text-red-400" /> Attack
                      </span>
                      <span className="text-xs text-discord-text font-medium">{selectedPet.skills.attack}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-discord-muted flex items-center gap-1">
                        <Shield className="w-3 h-3 text-blue-400" /> Defense
                      </span>
                      <span className="text-xs text-discord-text font-medium">{selectedPet.skills.defense}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-discord-muted flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-400" /> Speed
                      </span>
                      <span className="text-xs text-discord-text font-medium">{selectedPet.skills.speed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-discord-muted flex items-center gap-1">
                        <Star className="w-3 h-3 text-purple-400" /> Magic
                      </span>
                      <span className="text-xs text-discord-text font-medium">{selectedPet.skills.magic}</span>
                    </div>
                  </div>
                </div>

                {/* Abilities */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-discord-text mb-3">Abilities</h4>
                  <div className="space-y-2">
                    {selectedPet.abilities.map((ability, index) => (
                      <div key={index} className="text-xs text-discord-muted bg-gray-700 rounded px-2 py-1">
                        {ability}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pet Info */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="text-xs text-discord-muted space-y-1">
                    <div>Last Fed: {selectedPet.lastFed}</div>
                    <div>Status: {selectedPet.isActive ? 'Active' : 'Resting'}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {!selectedPet.isActive && (
                    <button
                      onClick={() => handleSetActive(selectedPet.id)}
                      className="w-full bg-discord-blurple hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      Set as Active
                    </button>
                  )}
                  <button
                    onClick={() => handleFeedPet(selectedPet.id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Feed Pet
                  </button>
                  <button 
                    onClick={() => handleShowDetails(selectedPet)}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Info className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Settings className="w-4 h-4" />
                    Pet Settings
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🐾</div>
                <h3 className="text-xl font-semibold text-discord-text mb-2">Select a Pet</h3>
                <p className="text-discord-muted">Choose a pet from your collection to view details</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'mastery' && (
        <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
          <h3 className="text-xl font-bold text-discord-text mb-6">Pet Mastery Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h4 className="font-semibold text-discord-text">Pets Collected</h4>
              </div>
              <div className="text-2xl font-bold text-discord-text">{pets.length}/20</div>
              <div className="text-sm text-green-400">+1 this week</div>
            </div>
            <div className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-blue-400" />
                <h4 className="font-semibold text-discord-text">Total Pet Levels</h4>
              </div>
              <div className="text-2xl font-bold text-discord-text">{pets.reduce((sum, pet) => sum + pet.level, 0)}</div>
              <div className="text-sm text-green-400">+5 this week</div>
            </div>
            <div className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="font-semibold text-discord-text">Time with Pets</h4>
              </div>
              <div className="text-2xl font-bold text-discord-text">47h</div>
              <div className="text-sm text-green-400">+3h today</div>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Pet View Modal */}
      {showDetailedView && selectedPet && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-discord-light rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-600/50">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-discord-text">{selectedPet.name}</h2>
              <button 
                onClick={handleCloseDetails}
                className="text-discord-muted hover:text-discord-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pet Image and Basic Info */}
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 relative inline-block">
                {selectedPet.image}
                {selectedPet.isActive && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-discord-dark flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${getRarityColor(selectedPet.rarity).split(' ')[0]}`}>
                {selectedPet.name}
              </h3>
              <div className="text-discord-muted mb-2">Level {selectedPet.level}</div>
              
              {/* Status Badges */}
              <div className="flex justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Equipped
                </span>
                <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full flex items-center gap-1">
                  <Heart className="w-3 h-3" /> Unhappy
                </span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Ready For Battle
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-center mb-6">
                <button className="px-4 py-2 bg-discord-dark text-discord-text rounded-lg hover:bg-gray-600 transition-colors">
                  Unequip
                </button>
                <button className="px-4 py-2 bg-discord-dark text-discord-text rounded-lg hover:bg-gray-600 transition-colors">
                  Feed
                </button>
              </div>
            </div>

            {/* Level Progress */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-discord-blurple rounded flex items-center justify-center text-sm font-bold">
                  {selectedPet.level}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-discord-muted">Lv. {selectedPet.level}</span>
                    <span className="text-discord-text">{selectedPet.experience} EXP Needed</span>
                    <span className="text-discord-muted">{Math.round((selectedPet.experience / selectedPet.maxExperience) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all"
                      style={{ width: `${(selectedPet.experience / selectedPet.maxExperience) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-6">
              <h4 className="text-discord-text font-semibold mb-3 text-center">STATS</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-discord-text font-bold">{selectedPet.skills.attack}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Sword className="w-3 h-3" /> Agility
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-discord-text font-bold">{selectedPet.skills.speed}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3" /> Accuracy
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-discord-text font-bold">{selectedPet.skills.defense}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" /> Protection
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-discord-text font-bold">{selectedPet.skills.magic}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Star className="w-3 h-3" /> Attack Power
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-discord-text font-bold">{Math.round(selectedPet.skills.attack * 0.8)}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Target className="w-3 h-3" /> Critical Chance
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-discord-text font-bold">{Math.round(selectedPet.skills.speed * 1.2)}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Activity className="w-3 h-3" /> Movement Speed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-discord-text font-bold">{Math.round(selectedPet.skills.defense * 0.9)}</div>
                  <div className="text-discord-muted text-sm flex items-center justify-center gap-1">
                    <Sword className="w-3 h-3" /> Critical Damage
                  </div>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="mb-6">
              <h4 className="text-discord-text font-semibold mb-3 text-center">STATUS</h4>
              <div className="space-y-4">
                {/* Happiness */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl">😊</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-discord-text font-medium">Happiness</span>
                      <span className="text-discord-muted">{selectedPet.happiness} of 200</span>
                      <span className="text-discord-muted">{Math.round((selectedPet.happiness / 200) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all"
                        style={{ width: `${(selectedPet.happiness / 200) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Hunger */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🥩</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-discord-text font-medium">Hunger</span>
                      <span className="text-discord-muted">204 of 210</span>
                      <span className="text-discord-muted">97%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all"
                        style={{ width: '97%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Health */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl">❤️</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-discord-text font-medium">Health</span>
                      <span className="text-discord-muted">{selectedPet.health} of {selectedPet.maxHealth}</span>
                      <span className="text-discord-muted">{Math.round((selectedPet.health / selectedPet.maxHealth) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all"
                        style={{ width: `${(selectedPet.health / selectedPet.maxHealth) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}