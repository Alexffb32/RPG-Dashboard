'use client'

import { useState } from 'react'
import { Trophy, Star, Crown, Shield, Sword, Target, Zap, Heart, Award, Medal, Gem, Flame } from 'lucide-react'

interface Badge {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  category: 'combat' | 'exploration' | 'social' | 'achievement' | 'special'
  unlocked: boolean
  unlockedDate?: string
  progress?: {
    current: number
    total: number
  }
  reward?: string
}

const badges: Badge[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'Complete your first quest and begin your journey.',
    icon: <Star className="w-6 h-6" />,
    rarity: 'common',
    category: 'achievement',
    unlocked: true,
    unlockedDate: '19th August 2024',
    reward: '+10 XP'
  },
  {
    id: '2',
    name: 'Warrior Spirit',
    description: 'Deal 1000 damage in combat.',
    icon: <Sword className="w-6 h-6" />,
    rarity: 'uncommon',
    category: 'combat',
    unlocked: true,
    unlockedDate: '20th August 2024',
    reward: '+5 Strength'
  },
  {
    id: '3',
    name: 'Guardian',
    description: 'Block 500 damage with your shield.',
    icon: <Shield className="w-6 h-6" />,
    rarity: 'uncommon',
    category: 'combat',
    unlocked: true,
    unlockedDate: '22nd August 2024',
    reward: '+5 Defense'
  },
  {
    id: '4',
    name: 'Explorer',
    description: 'Discover 10 new locations.',
    icon: <Target className="w-6 h-6" />,
    rarity: 'rare',
    category: 'exploration',
    unlocked: true,
    unlockedDate: '25th August 2024',
    reward: '+100 Gold'
  },
  {
    id: '5',
    name: 'Speed Demon',
    description: 'Complete 5 quests in under 10 minutes each.',
    icon: <Zap className="w-6 h-6" />,
    rarity: 'rare',
    category: 'achievement',
    unlocked: true,
    unlockedDate: '28th August 2024',
    reward: '+3 Speed'
  },
  {
    id: '6',
    name: 'Survivor',
    description: 'Survive 100 battles without dying.',
    icon: <Heart className="w-6 h-6" />,
    rarity: 'epic',
    category: 'combat',
    unlocked: true,
    unlockedDate: '2nd September 2024',
    reward: '+50 Max HP'
  },
  {
    id: '7',
    name: 'Champion',
    description: 'Win 50 PvP battles.',
    icon: <Trophy className="w-6 h-6" />,
    rarity: 'epic',
    category: 'combat',
    unlocked: false,
    progress: { current: 23, total: 50 },
    reward: '+10 All Stats'
  },
  {
    id: '8',
    name: 'Legend',
    description: 'Reach level 50.',
    icon: <Crown className="w-6 h-6" />,
    rarity: 'legendary',
    category: 'achievement',
    unlocked: false,
    progress: { current: 42, total: 50 },
    reward: 'Legendary Title'
  },
  {
    id: '9',
    name: 'Master Crafter',
    description: 'Craft 100 items.',
    icon: <Award className="w-6 h-6" />,
    rarity: 'rare',
    category: 'achievement',
    unlocked: false,
    progress: { current: 67, total: 100 },
    reward: '+5 Crafting Skill'
  },
  {
    id: '10',
    name: 'Social Butterfly',
    description: 'Make 20 friends.',
    icon: <Medal className="w-6 h-6" />,
    rarity: 'uncommon',
    category: 'social',
    unlocked: false,
    progress: { current: 8, total: 20 },
    reward: '+2 Charisma'
  },
  {
    id: '11',
    name: 'Treasure Hunter',
    description: 'Find 50 rare items.',
    icon: <Gem className="w-6 h-6" />,
    rarity: 'rare',
    category: 'exploration',
    unlocked: false,
    progress: { current: 31, total: 50 },
    reward: '+10% Rare Drop Rate'
  },
  {
    id: '12',
    name: 'Dragon Slayer',
    description: 'Defeat the Ancient Dragon.',
    icon: <Flame className="w-6 h-6" />,
    rarity: 'legendary',
    category: 'combat',
    unlocked: false,
    reward: 'Dragon Scale Armor'
  },
  {
    id: '13',
    name: 'Perfectionist',
    description: 'Complete all available quests.',
    icon: <Star className="w-6 h-6" />,
    rarity: 'epic',
    category: 'achievement',
    unlocked: false,
    progress: { current: 156, total: 200 },
    reward: 'Perfect Title'
  },
  {
    id: '14',
    name: 'Wealthy',
    description: 'Accumulate 100,000 gold.',
    icon: <Trophy className="w-6 h-6" />,
    rarity: 'rare',
    category: 'achievement',
    unlocked: false,
    progress: { current: 18048, total: 100000 },
    reward: 'Golden Crown'
  },
  {
    id: '15',
    name: 'Veteran',
    description: 'Play for 100 days.',
    icon: <Medal className="w-6 h-6" />,
    rarity: 'epic',
    category: 'special',
    unlocked: false,
    progress: { current: 45, total: 100 },
    reward: 'Veteran Badge'
  }
]

const rarityColors = {
  common: { bg: 'bg-gray-400/10', border: 'border-gray-400', text: 'text-gray-400' },
  uncommon: { bg: 'bg-green-400/10', border: 'border-green-400', text: 'text-green-400' },
  rare: { bg: 'bg-blue-400/10', border: 'border-blue-400', text: 'text-blue-400' },
  epic: { bg: 'bg-purple-400/10', border: 'border-purple-400', text: 'text-purple-400' },
  legendary: { bg: 'bg-orange-400/10', border: 'border-orange-400', text: 'text-orange-400' }
}

const categoryIcons = {
  combat: <Sword className="w-4 h-4" />,
  exploration: <Target className="w-4 h-4" />,
  social: <Heart className="w-4 h-4" />,
  achievement: <Trophy className="w-4 h-4" />,
  special: <Star className="w-4 h-4" />
}

interface BadgeCardProps {
  badge: Badge
  onClick: () => void
}

function BadgeCard({ badge, onClick }: BadgeCardProps) {
  const colors = rarityColors[badge.rarity]
  
  return (
    <div 
      className={`relative bg-discord-light rounded-lg border-2 p-4 cursor-pointer transition-all hover:scale-105 ${
        badge.unlocked ? `${colors.border} ${colors.bg}` : 'border-gray-600/30 bg-gray-600/10'
      } ${!badge.unlocked ? 'opacity-60' : ''}`}
      onClick={onClick}
    >
      {/* Rarity indicator */}
      <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${badge.unlocked ? colors.border.replace('border-', 'bg-') : 'bg-gray-600'}`}></div>
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
        badge.unlocked ? colors.bg : 'bg-gray-600/20'
      }`}>
        <div className={badge.unlocked ? colors.text : 'text-gray-500'}>
          {badge.icon}
        </div>
      </div>
      
      {/* Badge info */}
      <h3 className={`font-semibold text-sm mb-1 ${badge.unlocked ? 'text-discord-text' : 'text-gray-500'}`}>
        {badge.name}
      </h3>
      <p className={`text-xs mb-2 ${badge.unlocked ? 'text-discord-muted' : 'text-gray-600'}`}>
        {badge.description}
      </p>
      
      {/* Progress bar for locked badges */}
      {!badge.unlocked && badge.progress && (
        <div className="mb-2">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{badge.progress.current}/{badge.progress.total}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div 
              className="bg-discord-blurple h-1.5 rounded-full transition-all duration-300" 
              style={{ width: `${(badge.progress.current / badge.progress.total) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Category and date */}
      <div className="flex items-center justify-between text-xs">
        <div className={`flex items-center gap-1 ${badge.unlocked ? 'text-discord-muted' : 'text-gray-600'}`}>
          {categoryIcons[badge.category]}
          <span className="capitalize">{badge.category}</span>
        </div>
        {badge.unlocked && badge.unlockedDate && (
          <span className="text-discord-muted">{badge.unlockedDate}</span>
        )}
      </div>
    </div>
  )
}

export default function Badges() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [showUnlockedOnly, setShowUnlockedOnly] = useState(false)

  const categories = ['all', 'combat', 'exploration', 'social', 'achievement', 'special']
  
  const filteredBadges = badges.filter(badge => {
    const categoryMatch = activeCategory === 'all' || badge.category === activeCategory
    const unlockedMatch = !showUnlockedOnly || badge.unlocked
    return categoryMatch && unlockedMatch
  })

  const unlockedCount = badges.filter(badge => badge.unlocked).length
  const totalCount = badges.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-discord-text">Badges & Achievements</h2>
          <div className="text-right">
            <div className="text-2xl font-bold text-discord-blurple">{unlockedCount}/{totalCount}</div>
            <div className="text-sm text-discord-muted">Unlocked</div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-discord-dark rounded-full h-3 mb-4">
          <div 
            className="bg-discord-blurple h-3 rounded-full transition-all duration-500" 
            style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          ></div>
        </div>
        
        <p className="text-discord-muted">Complete challenges and unlock badges to show off your achievements!</p>
      </div>

      {/* Filters */}
      <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${
                activeCategory === category
                  ? 'bg-discord-blurple text-white'
                  : 'bg-discord-dark text-discord-muted hover:text-discord-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <label className="flex items-center gap-2 text-sm text-discord-muted">
          <input
            type="checkbox"
            checked={showUnlockedOnly}
            onChange={(e) => setShowUnlockedOnly(e.target.checked)}
            className="rounded border-gray-600 bg-discord-dark text-discord-blurple focus:ring-discord-blurple"
          />
          Show unlocked only
        </label>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredBadges.map(badge => (
          <BadgeCard
            key={badge.id}
            badge={badge}
            onClick={() => setSelectedBadge(badge)}
          />
        ))}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-discord-light rounded-lg p-6 max-w-md w-full border border-gray-600/50">
            <div className="text-center mb-6">
              <div className={`w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                selectedBadge.unlocked ? rarityColors[selectedBadge.rarity].bg : 'bg-gray-600/20'
              }`}>
                <div className={`text-4xl ${
                  selectedBadge.unlocked ? rarityColors[selectedBadge.rarity].text : 'text-gray-500'
                }`}>
                  {selectedBadge.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-discord-text mb-2">{selectedBadge.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                selectedBadge.unlocked 
                  ? `${rarityColors[selectedBadge.rarity].bg} ${rarityColors[selectedBadge.rarity].text}` 
                  : 'bg-gray-600/20 text-gray-500'
              }`}>
                {selectedBadge.rarity}
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="text-discord-muted text-center">{selectedBadge.description}</p>
              
              {selectedBadge.reward && (
                <div className="bg-discord-dark rounded-lg p-3">
                  <div className="text-sm text-discord-muted mb-1">Reward:</div>
                  <div className="text-discord-text font-medium">{selectedBadge.reward}</div>
                </div>
              )}
              
              {!selectedBadge.unlocked && selectedBadge.progress && (
                <div className="bg-discord-dark rounded-lg p-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-discord-muted">Progress</span>
                    <span className="text-discord-text">{selectedBadge.progress.current}/{selectedBadge.progress.total}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-discord-blurple h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(selectedBadge.progress.current / selectedBadge.progress.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {selectedBadge.unlocked && selectedBadge.unlockedDate && (
                <div className="bg-discord-dark rounded-lg p-3">
                  <div className="text-sm text-discord-muted mb-1">Unlocked:</div>
                  <div className="text-discord-text font-medium">{selectedBadge.unlockedDate}</div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setSelectedBadge(null)}
              className="w-full mt-6 px-4 py-2 bg-discord-blurple text-white rounded-lg hover:bg-discord-blurple/80 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}