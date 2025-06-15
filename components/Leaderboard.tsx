'use client'

import { useState } from 'react'
import { Trophy, Crown, Medal, Star, Users, Target, Sword, Shield, Zap } from 'lucide-react'

interface Player {
  id: string
  rank: number
  name: string
  level: number
  class: string
  avatar: string
  totalLevel: number
  isOnline: boolean
  guild?: string
}

interface LeaderboardCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

export default function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState('combat')
  const [contextFilter, setContextFilter] = useState('your_position')
  const [whoFilter, setWhoFilter] = useState('friends')
  const [categoryFilter, setCategoryFilter] = useState('combat_level')
  const [classFilter, setClassFilter] = useState('all_classes')

  const categories: LeaderboardCategory[] = [
    {
      id: 'combat',
      name: 'Combat Level',
      description: 'Measure of a character\'s prowess in battle',
      icon: <Sword className="w-4 h-4" />
    },
    {
      id: 'total',
      name: 'Total Level',
      description: 'Characters with the highest combined skill levels',
      icon: <Star className="w-4 h-4" />
    },
    {
      id: 'strength',
      name: 'Strength',
      description: 'Ranking based on characters\' brute force',
      icon: <Sword className="w-4 h-4" />
    },
    {
      id: 'defence',
      name: 'Defence',
      description: 'List of characters who excel in protection',
      icon: <Shield className="w-4 h-4" />
    },
    {
      id: 'speed',
      name: 'Speed',
      description: 'Who are the swiftest characters in the realm?',
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: 'dexterity',
      name: 'Dexterity',
      description: 'Skill in precision',
      icon: <Target className="w-4 h-4" />
    },
    {
      id: 'woodcutting',
      name: 'Woodcutting',
      description: 'Masters of timber gathering',
      icon: '🪓'
    },
    {
      id: 'mining',
      name: 'Mining',
      description: 'Top miners with the most lucrative hauls',
      icon: '⛏️'
    },
    {
      id: 'fishing',
      name: 'Fishing',
      description: 'Premier anglers with the biggest catches',
      icon: '🎣'
    },
    {
      id: 'alchemy',
      name: 'Alchemy',
      description: 'Wizards of potion-making',
      icon: '⚗️'
    },
    {
      id: 'smelting',
      name: 'Smelting',
      description: 'The finest metallurgists',
      icon: '🔥'
    },
    {
      id: 'cooking',
      name: 'Cooking',
      description: 'Culinary experts with the best recipes',
      icon: '🍳'
    },
    {
      id: 'forge',
      name: 'Forge',
      description: 'Craftsmen renowned for their smithing skills',
      icon: '🔨'
    },
    {
      id: 'meditation',
      name: 'Meditation',
      description: 'The wisest practitioners of inner peace and focus',
      icon: '🧘'
    },
    {
      id: 'bartering',
      name: 'Bartering',
      description: 'Expert merchants',
      icon: '💰'
    },
    {
      id: 'hunting',
      name: 'Hunting Mastery',
      description: 'The most expert of hunters',
      icon: '🏹'
    },
    {
      id: 'pet',
      name: 'Pet Mastery',
      description: 'Trainers with proficiency in training their companions',
      icon: '🐾'
    },
    {
      id: 'guild_mastery',
      name: 'Guild Mastery',
      description: 'A strong bond between the clan',
      icon: <Crown className="w-4 h-4" />
    },
    {
      id: 'yule',
      name: 'Yule Mastery',
      description: 'Virtual snowball throwers and snowman builders',
      icon: '❄️'
    },
    {
      id: 'springtide',
      name: 'Springtide Mastery',
      description: 'The most capable egg hunters',
      icon: '🥚'
    },
    {
      id: 'lunar',
      name: 'Lunar Mastery',
      description: 'Finest crafters of celestial scrolls',
      icon: '🌙'
    },
    {
      id: 'shadow',
      name: 'Shadow Mastery',
      description: 'Elite pumpkin collectors and Trick-or-Treaters',
      icon: '🎃'
    },
    {
      id: 'pets',
      name: 'Pets',
      description: 'Trainers with the most formidable companions',
      icon: '🐉'
    },
    {
      id: 'guilds',
      name: 'Guilds',
      description: 'The groups that dominate Solaris Isle',
      icon: <Users className="w-4 h-4" />
    },
    {
      id: 'shrine_gold',
      name: 'Shrine (Gold)',
      description: 'Altruists who donated the most golden coins',
      icon: '🏛️'
    },
    {
      id: 'shrine_tokens',
      name: 'Shrine (Tokens)',
      description: 'The most generous altruists by token donations',
      icon: '🪙'
    }
  ]

  const players: Player[] = [
    {
      id: '1',
      rank: 1,
      name: 'Alexffb',
      level: 404,
      class: 'Warrior',
      avatar: '⚔️',
      totalLevel: 2847,
      isOnline: true,
      guild: 'Dragon Slayers'
    },
    {
      id: '2',
      rank: 2,
      name: 'Guttojss',
      level: 348,
      class: 'Ranger',
      avatar: '🏹',
      totalLevel: 2456,
      isOnline: false,
      guild: 'Forest Guardians'
    },
    {
      id: '3',
      rank: 3,
      name: 'MysticMage',
      level: 342,
      class: 'Mage',
      avatar: '🔮',
      totalLevel: 2398,
      isOnline: true,
      guild: 'Arcane Order'
    },
    {
      id: '4',
      rank: 4,
      name: 'ShadowNinja',
      level: 335,
      class: 'Assassin',
      avatar: '🗡️',
      totalLevel: 2287,
      isOnline: true,
      guild: 'Silent Blades'
    },
    {
      id: '5',
      rank: 5,
      name: 'HolyPaladin',
      level: 329,
      class: 'Paladin',
      avatar: '🛡️',
      totalLevel: 2198,
      isOnline: false,
      guild: 'Light Bearers'
    },
    {
      id: '6',
      rank: 6,
      name: 'DragonSlayer99',
      level: 324,
      class: 'Warrior',
      avatar: '⚔️',
      totalLevel: 2156,
      isOnline: true,
      guild: 'Dragon Slayers'
    },
    {
      id: '7',
      rank: 7,
      name: 'ElementalMaster',
      level: 318,
      class: 'Mage',
      avatar: '🔥',
      totalLevel: 2089,
      isOnline: false,
      guild: 'Elemental Circle'
    },
    {
      id: '8',
      rank: 8,
      name: 'BeastTamer',
      level: 312,
      class: 'Ranger',
      avatar: '🐺',
      totalLevel: 2034,
      isOnline: true,
      guild: 'Wild Hunt'
    }
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-400" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />
      default:
        return <span className="text-discord-muted font-bold">#{rank}</span>
    }
  }

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border-yellow-500/30'
      case 2:
        return 'bg-gradient-to-r from-gray-800/30 to-gray-700/30 border-gray-400/30'
      case 3:
        return 'bg-gradient-to-r from-amber-900/30 to-amber-800/30 border-amber-600/30'
      default:
        return 'bg-discord-dark border-gray-600/30'
    }
  }

  const getClassIcon = (className: string) => {
    switch (className.toLowerCase()) {
      case 'warrior': return <Sword className="w-4 h-4" />
      case 'mage': return <Zap className="w-4 h-4" />
      case 'ranger': return '🏹'
      case 'assassin': return '🗡️'
      case 'paladin': return <Shield className="w-4 h-4" />
      default: return <Star className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-bold text-discord-text">Leaderboard</h1>
            <p className="text-discord-muted">Compete with players and climb the rankings</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-discord-blurple text-white'
                  : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <h3 className="text-lg font-bold text-discord-text mb-4">Leaderboard</h3>
        <p className="text-discord-muted text-sm mb-4">
          This leaderboard is updated every 15 hours.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-discord-text mb-2">Context</label>
            <select 
              value={contextFilter}
              onChange={(e) => setContextFilter(e.target.value)}
              className="w-full bg-discord-dark border border-gray-600/50 rounded-lg px-3 py-2 text-discord-text focus:outline-none focus:border-discord-blurple"
            >
              <option value="your_position">Your Position</option>
              <option value="top_players">Top Players</option>
              <option value="nearby">Nearby Players</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-discord-text mb-2">Who</label>
            <select 
              value={whoFilter}
              onChange={(e) => setWhoFilter(e.target.value)}
              className="w-full bg-discord-dark border border-gray-600/50 rounded-lg px-3 py-2 text-discord-text focus:outline-none focus:border-discord-blurple"
            >
              <option value="friends">Friends</option>
              <option value="guild">Guild Members</option>
              <option value="all">All Players</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-discord-text mb-2">Category</label>
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full bg-discord-dark border border-gray-600/50 rounded-lg px-3 py-2 text-discord-text focus:outline-none focus:border-discord-blurple"
            >
              <option value="combat_level">Combat Level</option>
              <option value="total_level">Total Level</option>
              <option value="strength">Strength</option>
              <option value="defence">Defence</option>
              <option value="speed">Speed</option>
              <option value="dexterity">Dexterity</option>
              <option value="woodcutting">Woodcutting</option>
              <option value="mining">Mining</option>
              <option value="fishing">Fishing</option>
              <option value="alchemy">Alchemy</option>
              <option value="smelting">Smelting</option>
              <option value="cooking">Cooking</option>
              <option value="forge">Forge</option>
              <option value="meditation">Meditation</option>
              <option value="bartering">Bartering</option>
              <option value="hunting">Hunting Mastery</option>
              <option value="pet">Pet Mastery</option>
              <option value="guild_mastery">Guild Mastery</option>
              <option value="yule">Yule Mastery</option>
              <option value="springtide">Springtide Mastery</option>
              <option value="lunar">Lunar Mastery</option>
              <option value="shadow">Shadow Mastery</option>
              <option value="pets">Pets</option>
              <option value="guilds">Guilds</option>
              <option value="shrine_gold">Shrine (Gold)</option>
              <option value="shrine_tokens">Shrine (Tokens)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-discord-text mb-2">Class</label>
            <select 
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="w-full bg-discord-dark border border-gray-600/50 rounded-lg px-3 py-2 text-discord-text focus:outline-none focus:border-discord-blurple"
            >
              <option value="all_classes">All Classes</option>
              <option value="warrior">Warrior</option>
              <option value="mage">Mage</option>
              <option value="ranger">Ranger</option>
              <option value="assassin">Assassin</option>
              <option value="paladin">Paladin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-discord-text">Rankings</h3>
            <div className="flex items-center gap-2 text-sm text-discord-muted">
              <Users className="w-4 h-4" />
              <span>{players.length} players</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-3">
            {players.map((player, index) => (
              <div
                key={player.id}
                className={`rounded-lg p-4 border transition-all hover:bg-gray-600/20 ${
                  getRankBg(player.rank)
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8">
                      {getRankIcon(player.rank)}
                    </div>
                    
                    <div className="relative">
                      <div className="w-12 h-12 bg-discord-dark rounded-full flex items-center justify-center text-2xl">
                        {player.avatar}
                      </div>
                      {player.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-discord-light"></div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-discord-text">{player.name}</h4>
                        {player.rank <= 3 && (
                          <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full font-medium">
                            TOP {player.rank}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-discord-muted">
                        <div className="flex items-center gap-1">
                          {getClassIcon(player.class)}
                          <span>{player.class}</span>
                        </div>
                        {player.guild && (
                          <div className="flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            <span>{player.guild}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-discord-text">
                      Level {player.level}
                    </div>
                    <div className="text-sm text-discord-muted">
                      Total: {player.totalLevel.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Rank */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-discord-text mb-1">Your Rank</h3>
            <p className="text-discord-muted text-sm">Your current position in the leaderboard</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-discord-blurple">#42</div>
            <div className="text-sm text-discord-muted">Level 404</div>
          </div>
        </div>
      </div>
    </div>
  )
}