'use client'

import { useState } from 'react'
import { Trophy, Star, Clock, Gift, Lock, CheckCircle, Zap } from 'lucide-react'

interface CampaignTier {
  id: string
  tier: number
  name: string
  description: string
  points: number
  type: 'tokens' | 'item' | 'skin'
  image: string
  unlocked: boolean
  collected: boolean
  requirement?: string
}

interface Task {
  id: string
  name: string
  description: string
  progress: number
  maxProgress: number
  points: number
  coins: number
  frequency: 'daily' | 'weekly' | 'monthly'
  icon: string
  completed: boolean
}

export default function Campaign() {
  const [activeTab, setActiveTab] = useState<'campaign' | 'tasks'>('campaign')

  const campaignTiers: CampaignTier[] = [
    {
      id: 'tier1',
      tier: 1,
      name: '5x Tokens',
      description: 'Collect valuable tokens to enhance your journey',
      points: 25,
      type: 'tokens',
      image: '🔷',
      unlocked: true,
      collected: true
    },
    {
      id: 'tier2',
      tier: 2,
      name: 'Chest of Upgrade Stones',
      description: 'Powerful stones to upgrade your equipment',
      points: 25,
      type: 'item',
      image: '📦',
      unlocked: true,
      collected: false
    },
    {
      id: 'tier3',
      tier: 3,
      name: 'Dungeon Potion',
      description: 'Mystical potion for dungeon exploration',
      points: 25,
      type: 'item',
      image: '🧪',
      unlocked: true,
      collected: false
    },
    {
      id: 'tier4',
      tier: 4,
      name: 'Teleportation Stone',
      description: 'Instantly travel to any discovered location',
      points: 30,
      type: 'item',
      image: '🔮',
      unlocked: false,
      collected: false,
      requirement: 'Unlock Previous Tier'
    },
    {
      id: 'tier5',
      tier: 5,
      name: 'Sylith',
      description: 'Legendary companion with mystical powers',
      points: 30,
      type: 'skin',
      image: '🧙‍♂️',
      unlocked: false,
      collected: false,
      requirement: 'Unlock Previous Tier'
    },
    {
      id: 'tier6',
      tier: 6,
      name: '5x Tokens',
      description: 'Additional tokens for your collection',
      points: 30,
      type: 'tokens',
      image: '🔷',
      unlocked: false,
      collected: false,
      requirement: 'Unlock Previous Tier'
    }
  ]

  const tasks: Task[] = [
    {
      id: 'defeat_enemies',
      name: 'Defeat 30 enemies',
      description: 'Eliminate hostile creatures in combat',
      progress: 10,
      maxProgress: 30,
      points: 15,
      coins: 50,
      frequency: 'daily',
      icon: '⚔️',
      completed: false
    },
    {
      id: 'defeat_ogre',
      name: 'Defeat 22x Ogre',
      description: 'Hunt down powerful ogre creatures',
      progress: 0,
      maxProgress: 22,
      points: 15,
      coins: 50,
      frequency: 'daily',
      icon: '👹',
      completed: false
    },
    {
      id: 'defeat_pirate',
      name: 'Defeat 18x Pirate',
      description: 'Battle against seafaring pirates',
      progress: 0,
      maxProgress: 18,
      points: 15,
      coins: 50,
      frequency: 'daily',
      icon: '🏴‍☠️',
      completed: false
    },
    {
      id: 'fishing_skill',
      name: 'Use the Fishing skill 299 times',
      description: 'Master the art of fishing',
      progress: 0,
      maxProgress: 299,
      points: 15,
      coins: 50,
      frequency: 'daily',
      icon: '🎣',
      completed: false
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'tokens': return 'text-blue-400'
      case 'item': return 'text-purple-400'
      case 'skin': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'daily': return 'bg-blue-600'
      case 'weekly': return 'bg-green-600'
      case 'monthly': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-3xl font-bold text-discord-text mb-2">Echoes of the Ascended</h1>
          <p className="text-discord-muted max-w-2xl mx-auto">
            Mysterious echoes ring through The Citadel, calling to the Arvendor. These whispers come from their ancient godly 
            ancestors. As old powers stir, shadows spread, and long-lost secrets emerge.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-discord-dark rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('campaign')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'campaign'
                  ? 'bg-discord-blurple text-white'
                  : 'text-discord-muted hover:text-discord-text'
              }`}
            >
              Campaign
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'tasks'
                  ? 'bg-discord-blurple text-white'
                  : 'text-discord-muted hover:text-discord-text'
              }`}
            >
              Tasks
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'campaign' && (
        <div className="space-y-6">
          {/* Tiers Section */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            <h2 className="text-xl font-bold text-discord-text mb-4 text-center">TIERS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campaignTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`bg-discord-dark rounded-lg p-4 border-2 transition-all ${
                    tier.collected
                      ? 'border-green-500/50 bg-green-900/20'
                      : tier.unlocked
                      ? 'border-discord-blurple/50 hover:border-discord-blurple'
                      : 'border-gray-600/50 opacity-60'
                  }`}
                >
                  <div className="text-center mb-3">
                    <div className="text-4xl mb-2">{tier.image}</div>
                    <h3 className="text-sm font-medium text-discord-muted mb-1">Tier {tier.tier}</h3>
                    <h4 className={`font-bold ${getTypeColor(tier.type)}`}>{tier.name}</h4>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-discord-muted">{tier.points} Points</span>
                      <span className={`capitalize ${getTypeColor(tier.type)}`}>{tier.type}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    {tier.collected ? (
                      <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Collected</span>
                      </div>
                    ) : tier.unlocked ? (
                      <button className="w-full bg-discord-blurple hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Collect
                      </button>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                        <Lock className="w-4 h-4" />
                        <span>{tier.requirement}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-discord-text mb-1">Quick Actions</h3>
                <p className="text-discord-muted text-sm">Collect all available rewards</p>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                <Gift className="w-4 h-4" />
                Collect All
              </button>
            </div>
          </div>

          {/* Points Progress */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-discord-text">Points</h3>
              <div className="text-2xl font-bold text-discord-text">0</div>
            </div>
            <div className="text-center text-discord-muted">
              Complete tasks to earn points and unlock campaign rewards
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="space-y-6">
          {/* Task Frequency Tabs */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            <div className="flex justify-center mb-6">
              <div className="bg-discord-dark rounded-lg p-1 flex">
                <button className="px-4 py-2 rounded-md font-medium bg-yellow-600 text-white">
                  Daily
                </button>
                <button className="px-4 py-2 rounded-md font-medium text-discord-muted hover:text-discord-text">
                  Weekly
                </button>
                <button className="px-4 py-2 rounded-md font-medium text-discord-muted hover:text-discord-text">
                  Monthly
                </button>
              </div>
            </div>

            {/* Daily Tasks */}
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-discord-dark rounded-lg p-4 border border-gray-600/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{task.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-discord-text">{task.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getFrequencyColor(task.frequency)}`}>
                          {task.frequency.charAt(0).toUpperCase() + task.frequency.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-discord-muted text-sm">{task.progress} of {task.maxProgress}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-blue-400">{task.points} Points</span>
                          <span className="text-yellow-400 flex items-center gap-1">
                            <span>🪙</span> {task.coins}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all"
                          style={{ width: `${(task.progress / task.maxProgress) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="p-2 text-discord-muted hover:text-discord-text transition-colors">
                      <Zap className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}