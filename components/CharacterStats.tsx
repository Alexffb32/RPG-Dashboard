'use client'

import { Heart, Shield, Zap, Target, Eye, Footprints, Sword, Star, Crosshair, Activity, TrendingUp } from 'lucide-react'

interface StatItemProps {
  icon: React.ReactNode
  label: string
  value: number
  description?: string
  percentage?: number
  color?: string
  showEfficiency?: boolean
  efficiency?: number
}

function StatItem({ icon, label, value, description, percentage, color = 'discord-blurple', showEfficiency, efficiency }: StatItemProps) {
  const calculateEfficiencyTime = (baseTime: number, efficiencyPercent: number) => {
    return baseTime / ((efficiencyPercent + 100) / 100)
  }

  return (
    <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50 hover:border-gray-500/50 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 bg-${color}/20 rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-discord-text font-semibold">{label}</div>
          <div className="text-discord-muted text-sm">{value}{showEfficiency && efficiency && ` (+${efficiency}% efficiency)`}</div>
          {description && (
            <div className="text-xs text-discord-muted/70 mt-1">{description}</div>
          )}
        </div>
      </div>
      {percentage && (
        <div className="w-full bg-discord-dark rounded-full h-2">
          <div 
            className={`bg-${color} h-2 rounded-full transition-all duration-300`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
      {showEfficiency && efficiency && (
        <div className="mt-2 text-xs text-green-400">
          Example: 100s task → {calculateEfficiencyTime(100, efficiency).toFixed(1)}s
        </div>
      )}
    </div>
  )
}

export default function CharacterStats() {
  // Primary Stats - Core character attributes
  const primaryStats = [
    { 
      icon: <Sword className="w-4 h-4 text-orange-400" />, 
      label: 'Strength', 
      value: 8, 
      color: 'orange-400',
      description: 'Increases Attack Power, affecting damage dealt in combat.'
    },
    { 
      icon: <Shield className="w-4 h-4 text-blue-400" />, 
      label: 'Defence', 
      value: 8, 
      color: 'blue-400',
      description: 'Increases Protection, affecting damage absorbed from hits.'
    },
    { 
      icon: <Zap className="w-4 h-4 text-yellow-400" />, 
      label: 'Speed', 
      value: 6, 
      color: 'yellow-400',
      description: 'Increases Agility, affecting battle speed and enemy hit chance.'
    },
    { 
      icon: <Target className="w-4 h-4 text-purple-400" />, 
      label: 'Dexterity', 
      value: 6, 
      color: 'purple-400',
      description: 'Increases Accuracy, affecting chance to hit without being hit back.'
    },
  ]

  // Secondary Stats - Derived from primary stats and equipment
  const combatStats = [
    { 
      icon: <Star className="w-4 h-4 text-red-400" />,
      label: 'Critical Chance', 
      value: 15, 
      color: 'red-400',
      description: 'Determines the likelihood of landing a critical strike.' 
    },
    { 
      icon: <TrendingUp className="w-4 h-4 text-red-500" />,
      label: 'Critical Damage', 
      value: 8, 
      color: 'red-500',
      description: 'Bonus damage applied during a critical strike.' 
    },
    { 
      icon: <Sword className="w-4 h-4 text-orange-400" />,
      label: 'Attack Power', 
      value: 528, 
      color: 'orange-400',
      description: 'Total damage applied to the opponent in battle.' 
    },
    { 
      icon: <Shield className="w-4 h-4 text-blue-400" />,
      label: 'Protection', 
      value: 347, 
      color: 'blue-400',
      description: 'Total damage absorbed from incoming hits.' 
    },
    { 
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
      label: 'Agility', 
      value: 81, 
      color: 'yellow-400',
      description: 'Affects the enemy\'s chance of hitting your character.' 
    },
    { 
      icon: <Crosshair className="w-4 h-4 text-purple-400" />,
      label: 'Accuracy', 
      value: 92, 
      color: 'purple-400',
      description: 'Affects your character\'s chance of landing a hit.' 
    },
    { 
      icon: <Activity className="w-4 h-4 text-pink-400" />,
      label: 'Damage', 
      value: 25, 
      color: 'pink-400',
      description: 'Fixed amount added to calculated damage in battle.' 
    }
  ]

  // Utility Stats
  const utilityStats = [
    { 
      icon: <Footprints className="w-4 h-4 text-green-400" />,
      label: 'Movement Speed', 
      value: 120, 
      color: 'green-400',
      description: 'Affects travel and hunting speed. Increased by pets.',
      showEfficiency: true,
      efficiency: 20
    },
    { 
      icon: <Star className="w-4 h-4 text-yellow-300" />,
      label: 'Magic Find', 
      value: 45, 
      color: 'yellow-300',
      description: 'Increases chance of finding higher-quality items from enemies.' 
    }
  ]

  // Efficiency Stats
  const efficiencyStats = [
    { 
      icon: <Target className="w-4 h-4 text-cyan-400" />,
      label: 'Mining Efficiency', 
      value: 110, 
      color: 'cyan-400',
      description: 'Speed of mining actions and ore extraction.',
      showEfficiency: true,
      efficiency: 10
    },
    { 
      icon: <Target className="w-4 h-4 text-blue-300" />,
      label: 'Fishing Efficiency', 
      value: 105, 
      color: 'blue-300',
      description: 'Speed of fishing actions and catch rates.',
      showEfficiency: true,
      efficiency: 5
    },
    { 
      icon: <Target className="w-4 h-4 text-green-500" />,
      label: 'Woodcutting Efficiency', 
      value: 115, 
      color: 'green-500',
      description: 'Speed of woodcutting and timber harvesting.',
      showEfficiency: true,
      efficiency: 15
    },
    { 
      icon: <Target className="w-4 h-4 text-orange-500" />,
      label: 'Cooking Efficiency', 
      value: 100, 
      color: 'orange-500',
      description: 'Speed of cooking and food preparation.',
      showEfficiency: true,
      efficiency: 0
    }
  ]

  return (
    <div className="space-y-6">
      {/* Health Bar */}
      <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-discord-text font-semibold">Health</span>
          </div>
          <span className="text-discord-muted text-sm">100%</span>
        </div>
        <div className="w-full bg-discord-dark rounded-full h-3 mb-2">
          <div className="bg-red-500 h-3 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <div className="text-sm text-discord-muted">718 of 718</div>
      </div>

      {/* Character Info */}
      <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50 space-y-3">
        <div className="flex justify-between">
          <span className="text-discord-muted">Status</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-sm">Online</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-discord-muted">Gold</span>
          <span className="text-discord-text font-semibold">18,048</span>
        </div>
        <div className="flex justify-between">
          <span className="text-discord-muted">Tokens</span>
          <span className="text-discord-text font-semibold">330</span>
        </div>
        <div className="flex justify-between">
          <span className="text-discord-muted">Class</span>
          <span className="text-discord-text font-semibold">Warrior</span>
        </div>
        <div className="flex justify-between">
          <span className="text-discord-muted">Birth Date</span>
          <span className="text-discord-text font-semibold">19th August 2024</span>
        </div>
      </div>

      {/* Primary Stats */}
      <div>
        <h3 className="text-discord-text font-semibold mb-3 uppercase text-sm tracking-wider">Primary Stats</h3>
        <div className="grid grid-cols-2 gap-3">
          {primaryStats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Combat Stats */}
      <div>
        <h3 className="text-discord-text font-semibold mb-3 uppercase text-sm tracking-wider">Combat Stats</h3>
        <div className="grid grid-cols-2 gap-3">
          {combatStats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Pet */}
      <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-3 bg-discord-dark rounded-lg flex items-center justify-center">
            <span className="text-3xl">🐺</span>
          </div>
          <h4 className="text-discord-text font-semibold mb-2">Ravenwing</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-discord-muted">Agility</div>
              <div className="text-discord-text font-semibold">52</div>
            </div>
            <div>
              <div className="text-discord-muted">Accuracy</div>
              <div className="text-discord-text font-semibold">35</div>
            </div>
            <div>
              <div className="text-discord-muted">Protection</div>
              <div className="text-discord-text font-semibold">19</div>
            </div>
            <div>
              <div className="text-discord-muted">Attack Power</div>
              <div className="text-discord-text font-semibold">18</div>
            </div>
            <div>
              <div className="text-discord-muted">Movement Speed</div>
              <div className="text-discord-text font-semibold">5.8</div>
            </div>
            <div>
              <div className="text-discord-muted">Critical Chance</div>
              <div className="text-discord-text font-semibold">7</div>
            </div>
            <div>
              <div className="text-discord-muted">Critical Damage</div>
              <div className="text-discord-text font-semibold">7</div>
            </div>
          </div>
          <button className="mt-4 text-discord-blurple text-sm hover:text-discord-blurple/80">All Pets</button>
        </div>
      </div>

      {/* Utility Stats */}
      <div>
        <h3 className="text-discord-text font-semibold mb-3 uppercase text-sm tracking-wider">Utility Stats</h3>
        <div className="grid grid-cols-1 gap-3">
          {utilityStats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Efficiency Stats */}
      <div>
        <h3 className="text-discord-text font-semibold mb-3 uppercase text-sm tracking-wider">Skill Efficiency</h3>
        <div className="grid grid-cols-2 gap-3">
          {efficiencyStats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Active Effects */}
      <div>
        <h3 className="text-discord-text font-semibold mb-3 uppercase text-sm tracking-wider">Active Effects</h3>
        <button className="w-full bg-discord-light rounded-lg p-4 border border-gray-600/50 text-discord-blurple hover:text-discord-blurple/80 transition-colors">
          Show Effects
        </button>
      </div>
    </div>
  )
}