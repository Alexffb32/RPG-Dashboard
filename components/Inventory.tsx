'use client'

import React, { useState, useEffect } from 'react'
import { Package, Sword, Shield, Shirt, Crown, Gem, Potion, Star, User, AlertTriangle, CheckCircle } from 'lucide-react'

interface InventoryItem {
  id: string
  name: string
  type: 'weapon' | 'armor' | 'accessory' | 'consumable' | 'material'
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  icon: React.ReactNode
  quantity?: number
  equipped?: boolean
  stats?: { [key: string]: number }
  description?: string
}

const rarityColors = {
  common: 'border-gray-400 bg-gray-400/10',
  uncommon: 'border-green-400 bg-green-400/10',
  rare: 'border-blue-400 bg-blue-400/10',
  epic: 'border-purple-400 bg-purple-400/10',
  legendary: 'border-orange-400 bg-orange-400/10'
}

const inventoryItems: InventoryItem[] = [
  // Weapons
  {
    id: '1',
    name: 'Wooden Sword',
    type: 'weapon',
    rarity: 'common',
    icon: <span className="text-amber-600">🗡️</span>,
    stats: { attack: 12 },
    description: 'A basic wooden training sword.'
  },
  {
    id: '2',
    name: 'Iron Axe',
    type: 'weapon',
    rarity: 'uncommon',
    icon: <span className="text-gray-400">🪓</span>,
    stats: { attack: 25, strength: 3 },
    description: 'A heavy iron axe for chopping wood and enemies.'
  },
  {
    id: '3',
    name: 'Steel Dagger',
    type: 'weapon',
    rarity: 'uncommon',
    icon: <span className="text-blue-400">🗡️</span>,
    equipped: true,
    stats: { attack: 18, speed: 5 },
    description: 'A quick steel dagger for swift strikes.'
  },
  {
    id: '4',
    name: 'Magic Staff',
    type: 'weapon',
    rarity: 'rare',
    icon: <span className="text-purple-400">🪄</span>,
    stats: { magic: 30, intelligence: 8 },
    description: 'A staff imbued with magical energy.'
  },
  // Armor
  {
    id: '5',
    name: 'Leather Helmet',
    type: 'armor',
    rarity: 'common',
    icon: <span className="text-amber-700">🪖</span>,
    equipped: true,
    stats: { defense: 8 },
    description: 'Basic leather head protection.'
  },
  {
    id: '6',
    name: 'Chain Mail',
    type: 'armor',
    rarity: 'uncommon',
    icon: <span className="text-gray-400">🛡️</span>,
    equipped: true,
    stats: { defense: 22, protection: 5 },
    description: 'Interlocked metal rings for protection.'
  },
  {
    id: '7',
    name: 'Iron Boots',
    type: 'armor',
    rarity: 'uncommon',
    icon: <span className="text-gray-500">🥾</span>,
    equipped: true,
    stats: { defense: 12, speed: 2 },
    description: 'Heavy iron boots for protection.'
  },
  // Consumables
  {
    id: '8',
    name: 'Metamorphite',
    type: 'consumable',
    rarity: 'epic',
    icon: <span className="text-purple-400">🔮</span>,
    quantity: 1,
    description: 'A rare crystal that allows class changing. Can only be used once every 14 days. Cannot be traded.'
  },
  {
    id: '9',
    name: 'Health Potion',
    type: 'consumable',
    rarity: 'common',
    icon: <span className="text-red-400">🧪</span>,
    quantity: 15,
    description: 'Restores 100 HP when consumed.'
  },
  {
    id: '9',
    name: 'Mana Potion',
    type: 'consumable',
    rarity: 'common',
    icon: <span className="text-blue-400">🧪</span>,
    quantity: 8,
    description: 'Restores 50 MP when consumed.'
  },
  {
    id: '10',
    name: 'Bread',
    type: 'consumable',
    rarity: 'common',
    icon: <span className="text-yellow-600">🍞</span>,
    quantity: 23,
    description: 'Simple bread that restores a small amount of health.'
  },
  {
    id: '11',
    name: 'Apple',
    type: 'consumable',
    rarity: 'common',
    icon: <span className="text-red-500">🍎</span>,
    quantity: 12,
    description: 'Fresh apple that provides minor health regeneration.'
  },
  // Materials
  {
    id: '12',
    name: 'Iron Ore',
    type: 'material',
    rarity: 'common',
    icon: <span className="text-gray-600">⛏️</span>,
    quantity: 45,
    description: 'Raw iron ore used for crafting.'
  },
  {
    id: '13',
    name: 'Wood Log',
    type: 'material',
    rarity: 'common',
    icon: <span className="text-amber-700">🪵</span>,
    quantity: 67,
    description: 'Sturdy wood log for construction and crafting.'
  },
  {
    id: '14',
    name: 'Ruby Gem',
    type: 'material',
    rarity: 'rare',
    icon: <span className="text-red-500">💎</span>,
    quantity: 3,
    description: 'A precious ruby used in crafting powerful items.'
  },
  {
    id: '15',
    name: 'Emerald',
    type: 'material',
    rarity: 'rare',
    icon: <span className="text-green-500">💚</span>,
    quantity: 2,
    description: 'A rare emerald with magical properties.'
  },
  {
    id: '16',
    name: 'Dragon Scale',
    type: 'material',
    rarity: 'legendary',
    icon: <span className="text-orange-500">🐲</span>,
    quantity: 1,
    description: 'An extremely rare dragon scale.'
  },
  // Tools
  {
    id: '17',
    name: 'Pickaxe',
    type: 'weapon',
    rarity: 'common',
    icon: <span className="text-gray-600">⛏️</span>,
    stats: { mining: 15 },
    description: 'A tool for mining ore and stones.'
  },
  {
    id: '18',
    name: 'Fishing Rod',
    type: 'weapon',
    rarity: 'common',
    icon: <span className="text-brown-600">🎣</span>,
    stats: { fishing: 20 },
    description: 'A rod for catching fish.'
  },
  {
    id: '19',
    name: 'Hammer',
    type: 'weapon',
    rarity: 'uncommon',
    icon: <span className="text-gray-500">🔨</span>,
    stats: { crafting: 25, attack: 15 },
    description: 'A heavy hammer for crafting and combat.'
  }
]



export default function Inventory() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')
  const [showClassChangeModal, setShowClassChangeModal] = useState(false)
  const [useItemMessage, setUseItemMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  // Mock character data - in real app this would come from context/props
  const currentCharacter = {
    name: 'Warrior Hero',
    class: 'Warrior',
    lastClassChange: new Date('2024-01-01'), // Mock last change date
    canChangeClass: true
  }

  const characterClasses = [
    { id: 'warrior', name: 'Warrior', description: 'Masters of combat and physical strength', locked: false },
    { id: 'mage', name: 'Mage', description: 'Wielders of arcane magic and elemental power', locked: false },
    { id: 'archer', name: 'Archer', description: 'Expert marksmen with bow and arrow', locked: false },
    { id: 'rogue', name: 'Rogue', description: 'Stealthy assassins and master thieves', locked: false },
    { id: 'paladin', name: 'Paladin', description: 'Holy warriors blessed with divine power', locked: false },
    { id: 'miner', name: 'Miner', description: 'Specialists in extracting valuable resources', locked: false },
    { id: 'forsaken', name: 'Forsaken', description: 'Cursed beings with dark powers', locked: true },
    { id: 'cursed', name: 'Cursed', description: 'Afflicted souls without market access', locked: true },
    { id: 'banished', name: 'Banished', description: 'Exiled characters cut off from trade', locked: true }
  ]

  const canUseMetamorphite = () => {
    const daysSinceLastChange = Math.floor((Date.now() - currentCharacter.lastClassChange.getTime()) / (1000 * 60 * 60 * 24))
    return daysSinceLastChange >= 14 && currentCharacter.canChangeClass
  }

  const handleUseItem = (item: InventoryItem) => {
    if (item.name === 'Metamorphite') {
      if (!canUseMetamorphite()) {
        const daysSinceLastChange = Math.floor((Date.now() - currentCharacter.lastClassChange.getTime()) / (1000 * 60 * 60 * 24))
        const daysRemaining = 14 - daysSinceLastChange
        setUseItemMessage({
          type: 'error',
          message: `Cannot change class yet. ${daysRemaining} days remaining until next class change.`
        })
        return
      }
      setShowClassChangeModal(true)
    } else {
      // Handle other consumable items
      setUseItemMessage({
        type: 'success',
        message: `Used ${item.name}!`
      })
    }
  }

  const handleClassChange = (newClass: string) => {
    // In real app, this would update the character's class
    setUseItemMessage({
      type: 'success',
      message: `Successfully changed class to ${newClass}! Metamorphite consumed.`
    })
    setShowClassChangeModal(false)
    setSelectedItem(null)
  }

  // Auto-hide messages after 5 seconds
  useEffect(() => {
    if (useItemMessage) {
      const timer = setTimeout(() => {
        setUseItemMessage(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [useItemMessage])

  const filteredItems = inventoryItems.filter(item => {
    if (filter === 'all') return true
    return item.type === filter
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'rarity':
        const rarityOrder = { common: 1, uncommon: 2, rare: 3, epic: 4, legendary: 5 }
        return (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0)
      case 'type':
        return a.type.localeCompare(b.type)
      default:
        return 0
    }
  })

  const equippedItems = inventoryItems.filter(item => item.equipped)
  const totalItems = inventoryItems.length
  const maxSlots = 50

  return (
    <div className="space-y-6">
      {/* Inventory Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Package className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Inventory</h2>
          <span className="text-gray-400">({totalItems}/{maxSlots})</span>
        </div>
        
        {/* Sort Dropdown */}
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
          >
            <option value="name">Sort by Name</option>
            <option value="rarity">Sort by Rarity</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
        {['all', 'weapon', 'armor', 'consumable', 'material'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex-1 ${
              filter === type
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {type === 'all' ? 'All Items' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      {/* Equipment Slots */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <h3 className="text-discord-text font-semibold mb-4 uppercase text-sm tracking-wider">Equipment</h3>
        <div className="grid grid-cols-4 gap-4">
          {equippedItems.map((item) => (
            <div key={item.id} className="bg-gray-700/50 rounded-lg p-3 border border-gray-600 hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-2xl">{item.icon}</div>
                <div className="text-center">
                  <div className="text-sm font-medium text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 capitalize">
                    {item.type}
                  </div>
                  {item.stats && (
                    <div className="text-xs text-gray-300 mt-1">
                      {Object.entries(item.stats).map(([stat, value]) => (
                        <div key={stat}>
                          {stat}: +{value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Empty slots */}
          {Array.from({ length: Math.max(0, 8 - equippedItems.length) }).map((_, index) => (
            <div key={`empty-${index}`} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 border-dashed">
              <div className="flex flex-col items-center justify-center h-20">
                <div className="text-gray-600 text-2xl">+</div>
                <div className="text-xs text-gray-500">Empty Slot</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Items</h3>
          <div className="text-sm text-gray-400">
            {filteredItems.length} items
          </div>
        </div>
        
        <div className="grid grid-cols-8 gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-gray-700/50 rounded-lg p-3 border border-gray-600 hover:border-blue-500/50 transition-all cursor-pointer group relative"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-center">
                  <div className={`text-xs font-medium text-white truncate max-w-full`}>
                    {item.name}
                  </div>
                  {item.quantity && (
                    <div className="text-xs text-gray-300 mt-1">
                      x{item.quantity}
                    </div>
                  )}
                  {item.equipped && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Empty slots */}
          {Array.from({ length: Math.max(0, 40 - filteredItems.length) }).map((_, index) => (
            <div key={`empty-${index}`} className="bg-gray-800/30 rounded-lg p-3 border border-gray-700 border-dashed">
              <div className="flex flex-col items-center justify-center h-16">
                <div className="text-gray-600 text-lg">•</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Details */}
      {selectedItem && (
        <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 border-2 rounded-lg flex items-center justify-center ${rarityColors[selectedItem.rarity]}`}>
              {selectedItem.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-discord-text font-semibold text-lg">{selectedItem.name}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                  selectedItem.rarity === 'legendary' ? 'bg-orange-400/20 text-orange-400' :
                  selectedItem.rarity === 'epic' ? 'bg-purple-400/20 text-purple-400' :
                  selectedItem.rarity === 'rare' ? 'bg-blue-400/20 text-blue-400' :
                  selectedItem.rarity === 'uncommon' ? 'bg-green-400/20 text-green-400' :
                  'bg-gray-400/20 text-gray-400'
                }`}>
                  {selectedItem.rarity}
                </span>
              </div>
              <p className="text-discord-muted text-sm mb-3">{selectedItem.description}</p>
              
              {selectedItem.stats && (
                <div className="space-y-1">
                  <h5 className="text-discord-text font-medium text-sm">Stats:</h5>
                  {Object.entries(selectedItem.stats).map(([stat, value]) => (
                    <div key={stat} className="flex justify-between text-sm">
                      <span className="text-discord-muted capitalize">{stat}:</span>
                      <span className="text-green-400">+{value}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex gap-2 mt-4">
                {!selectedItem.equipped && selectedItem.type !== 'consumable' && selectedItem.type !== 'material' && (
                  <button className="px-4 py-2 bg-discord-blurple text-white rounded hover:bg-discord-blurple/80 transition-colors text-sm">
                    Equip
                  </button>
                )}
                {selectedItem.equipped && (
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-500/80 transition-colors text-sm">
                    Unequip
                  </button>
                )}
                {selectedItem.type === 'consumable' && (
                  <button 
                    onClick={() => handleUseItem(selectedItem)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-500/80 transition-colors text-sm"
                  >
                    Use
                  </button>
                )}
                <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-600/80 transition-colors text-sm">
                  Drop
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Use Item Message */}
      {useItemMessage && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg border z-50 ${
          useItemMessage.type === 'success' 
            ? 'bg-green-900/90 border-green-500 text-green-100' 
            : 'bg-red-900/90 border-red-500 text-red-100'
        }`}>
          <div className="flex items-center space-x-2">
            {useItemMessage.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertTriangle className="w-5 h-5" />
            )}
            <span>{useItemMessage.message}</span>
            <button 
              onClick={() => setUseItemMessage(null)}
              className="ml-2 text-lg font-bold hover:opacity-70"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Class Change Modal */}
      {showClassChangeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-discord-dark rounded-lg p-6 max-w-2xl w-full mx-4 border border-gray-600">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Change Class</h3>
              <button 
                onClick={() => setShowClassChangeModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4 p-4 bg-yellow-900/20 border border-yellow-500/50 rounded-lg">
              <div className="flex items-center space-x-2 text-yellow-400">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium">Warning</span>
              </div>
              <p className="text-yellow-200 text-sm mt-2">
                Using Metamorphite will permanently change your class. This action cannot be undone and you'll need to wait 14 days before changing again.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-300 text-sm">
                Current Class: <span className="font-medium text-white">{currentCharacter.class}</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {characterClasses.filter(cls => cls.id !== currentCharacter.class.toLowerCase() && !cls.locked).map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => handleClassChange(cls.name)}
                  className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-colors text-left"
                >
                  <div className="font-medium text-white mb-1">{cls.name}</div>
                  <div className="text-sm text-gray-400">{cls.description}</div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setShowClassChangeModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-600/80 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}