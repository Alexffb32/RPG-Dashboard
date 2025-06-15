import { useState, useEffect } from 'react'
import { Church, Coins, Zap, Users, Clock, Star, TrendingUp, Gift } from 'lucide-react'

interface ShrineBoost {
  id: string
  tier: number
  name: string
  description: string
  expBoost: number
  goldRequired: number
  isUnlocked: boolean
  isActive: boolean
  icon: React.ReactNode
}

interface ContributionStats {
  totalGold: number
  totalTokens: number
  yourContribution: number
  topContributors: Array<{
    name: string
    amount: number
    type: 'gold' | 'tokens'
  }>
}

export default function Shrine() {
  const [activeBoosts, setActiveBoosts] = useState<string[]>([])
  const [timeUntilReset, setTimeUntilReset] = useState<string>('')
  const [contributionAmount, setContributionAmount] = useState<number>(0)
  const [contributionType, setContributionType] = useState<'gold' | 'tokens'>('gold')
  const [playerLevel, setPlayerLevel] = useState<number>(650) // Example level

  const shrineBoosts: ShrineBoost[] = [
    {
      id: 'tier1',
      tier: 1,
      name: 'Basic Blessing',
      description: 'Increases EXP gain for all activities',
      expBoost: 15,
      goldRequired: 50000,
      isUnlocked: true,
      isActive: activeBoosts.includes('tier1'),
      icon: <Star className="w-5 h-5" />
    },
    {
      id: 'tier2',
      tier: 2,
      name: 'Enhanced Blessing',
      description: 'Greater EXP boost for dedicated adventurers',
      expBoost: 20,
      goldRequired: 150000,
      isUnlocked: true,
      isActive: activeBoosts.includes('tier2'),
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 'tier3',
      tier: 3,
      name: 'Divine Blessing',
      description: 'Powerful blessing for the most devoted',
      expBoost: 25,
      goldRequired: 300000,
      isUnlocked: false,
      isActive: activeBoosts.includes('tier3'),
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'tier4',
      tier: 4,
      name: 'Legendary Blessing',
      description: 'Ultimate blessing for true champions',
      expBoost: 35,
      goldRequired: 500000,
      isUnlocked: false,
      isActive: activeBoosts.includes('tier4'),
      icon: <Gift className="w-5 h-5" />
    }
  ]

  const contributionStats: ContributionStats = {
    totalGold: 287500,
    totalTokens: 125,
    yourContribution: 15000,
    topContributors: [
      { name: 'Alexffb', amount: 45000, type: 'gold' },
      { name: 'MysticMage', amount: 38000, type: 'gold' },
      { name: 'DragonSlayer99', amount: 25, type: 'tokens' },
      { name: 'ShadowNinja', amount: 22000, type: 'gold' },
      { name: 'HolyPaladin', amount: 18, type: 'tokens' }
    ]
  }

  // Calculate time until reset (12:00 PM UTC)
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000))
      const resetTime = new Date(utcNow)
      resetTime.setUTCHours(12, 0, 0, 0)
      
      if (utcNow > resetTime) {
        resetTime.setUTCDate(resetTime.getUTCDate() + 1)
      }
      
      const timeDiff = resetTime.getTime() - utcNow.getTime()
      const hours = Math.floor(timeDiff / (1000 * 60 * 60))
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      
      setTimeUntilReset(`${hours}h ${minutes}m`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  const toggleBoost = (boostId: string) => {
    const boost = shrineBoosts.find(b => b.id === boostId)
    if (!boost || !boost.isUnlocked) return

    setActiveBoosts(prev => 
      prev.includes(boostId) 
        ? prev.filter(id => id !== boostId)
        : [...prev, boostId]
    )
  }

  const handleContribution = () => {
    if (contributionAmount <= 0) return
    if (contributionType === 'tokens' && playerLevel < 600) {
      alert('You must be level 600 or above to contribute tokens!')
      return
    }
    
    // Handle contribution logic here
    console.log(`Contributing ${contributionAmount} ${contributionType}`)
    setContributionAmount(0)
  }

  const getTotalActiveBoost = () => {
    return activeBoosts.reduce((total, boostId) => {
      const boost = shrineBoosts.find(b => b.id === boostId)
      return total + (boost?.expBoost || 0)
    }, 0)
  }

  const getProgressPercentage = (goldRequired: number) => {
    const totalContributed = contributionStats.totalGold + (contributionStats.totalTokens * 800)
    return Math.min((totalContributed / goldRequired) * 100, 100)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center gap-3 mb-4">
          <Church className="w-8 h-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-bold text-discord-text">Shrine</h1>
            <p className="text-discord-muted">Community-driven boosts through collective contributions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-discord-text">Reset Timer</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">{timeUntilReset}</div>
            <div className="text-sm text-discord-muted">Until daily reset (12:00 PM UTC)</div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="font-medium text-discord-text">Active Boost</span>
            </div>
            <div className="text-2xl font-bold text-green-400">+{getTotalActiveBoost()}%</div>
            <div className="text-sm text-discord-muted">Total EXP bonus</div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="font-medium text-discord-text">Community</span>
            </div>
            <div className="text-2xl font-bold text-purple-400">{contributionStats.topContributors.length}</div>
            <div className="text-sm text-discord-muted">Active contributors</div>
          </div>
        </div>
      </div>

      {/* Shrine Tiers */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <h3 className="text-lg font-bold text-discord-text">Shrine Tiers</h3>
          <p className="text-discord-muted text-sm mt-1">
            Activate unlocked tiers to gain their benefits. Effects stack when multiple tiers are active.
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid gap-4">
            {shrineBoosts.map((boost) => {
              const progress = getProgressPercentage(boost.goldRequired)
              
              return (
                <div
                  key={boost.id}
                  className={`rounded-lg p-4 border transition-all ${
                    boost.isUnlocked
                      ? boost.isActive
                        ? 'bg-green-900/20 border-green-500/50'
                        : 'bg-discord-dark border-gray-600/50 hover:border-gray-500/50 cursor-pointer'
                      : 'bg-gray-800/50 border-gray-700/50 opacity-60'
                  }`}
                  onClick={() => toggleBoost(boost.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        boost.isActive ? 'bg-green-600' : 'bg-gray-600'
                      }`}>
                        {boost.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-discord-text">Tier {boost.tier}: {boost.name}</h4>
                          {boost.isActive && (
                            <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <p className="text-discord-muted text-sm">{boost.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">+{boost.expBoost}%</div>
                      <div className="text-sm text-discord-muted">EXP Boost</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-discord-muted">Progress</span>
                      <span className="text-discord-text">
                        {boost.goldRequired.toLocaleString()} Gold Required
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          boost.isUnlocked ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-discord-muted">
                      {progress.toFixed(1)}% complete
                      {boost.isUnlocked && ' - Unlocked!'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Contribution Section */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <h3 className="text-lg font-bold text-discord-text mb-4">Make a Contribution</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-discord-text mb-2">Contribution Type</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setContributionType('gold')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      contributionType === 'gold'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-discord-dark text-discord-muted hover:text-discord-text'
                    }`}
                  >
                    <Coins className="w-4 h-4 inline mr-2" />
                    Gold
                  </button>
                  <button
                    onClick={() => setContributionType('tokens')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      contributionType === 'tokens'
                        ? 'bg-purple-600 text-white'
                        : 'bg-discord-dark text-discord-muted hover:text-discord-text'
                    }`}
                    disabled={playerLevel < 600}
                  >
                    🪙 Tokens
                  </button>
                </div>
                {contributionType === 'tokens' && playerLevel < 600 && (
                  <p className="text-red-400 text-sm mt-2">
                    You must be level 600+ to contribute tokens
                  </p>
                )}
                {contributionType === 'tokens' && (
                  <p className="text-discord-muted text-sm mt-2">
                    1 Token = 800 Gold contribution
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-discord-text mb-2">Amount</label>
                <input
                  type="number"
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(Number(e.target.value))}
                  className="w-full bg-discord-dark border border-gray-600/50 rounded-lg px-3 py-2 text-discord-text focus:outline-none focus:border-discord-blurple"
                  placeholder={`Enter ${contributionType} amount`}
                  min="0"
                />
              </div>
              
              <button
                onClick={handleContribution}
                disabled={contributionAmount <= 0 || (contributionType === 'tokens' && playerLevel < 600)}
                className="w-full bg-discord-blurple hover:bg-discord-blurple/80 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Contribute {contributionAmount > 0 ? contributionAmount.toLocaleString() : ''} {contributionType}
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-discord-text mb-3">Contribution Stats</h4>
            <div className="space-y-3">
              <div className="bg-discord-dark rounded-lg p-3">
                <div className="text-sm text-discord-muted">Total Community Gold</div>
                <div className="text-lg font-bold text-yellow-400">
                  {contributionStats.totalGold.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-discord-dark rounded-lg p-3">
                <div className="text-sm text-discord-muted">Total Community Tokens</div>
                <div className="text-lg font-bold text-purple-400">
                  {contributionStats.totalTokens.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-discord-dark rounded-lg p-3">
                <div className="text-sm text-discord-muted">Your Contribution</div>
                <div className="text-lg font-bold text-green-400">
                  {contributionStats.yourContribution.toLocaleString()} Gold
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <h3 className="text-lg font-bold text-discord-text">Top Contributors</h3>
          <p className="text-discord-muted text-sm mt-1">
            Today's most generous community members
          </p>
        </div>
        
        <div className="p-6">
          <div className="space-y-3">
            {contributionStats.topContributors.map((contributor, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-discord-dark rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center text-white font-bold">
                    #{index + 1}
                  </div>
                  <span className="font-medium text-discord-text">{contributor.name}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {contributor.type === 'gold' ? (
                    <Coins className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <span className="text-purple-400">🪙</span>
                  )}
                  <span className="font-bold text-discord-text">
                    {contributor.amount.toLocaleString()}
                  </span>
                  <span className="text-discord-muted text-sm">
                    {contributor.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
        <h4 className="font-bold text-yellow-400 mb-2">Important Notes</h4>
        <ul className="text-discord-muted text-sm space-y-1">
          <li>• Shrine resets daily at 12:00 PM UTC</li>
          <li>• Multiple tier effects stack when activated together</li>
          <li>• Activating boosts close to reset time will only last until reset</li>
          <li>• Only characters level 600+ can contribute tokens</li>
          <li>• Token contributions are converted at 800 Gold per Token</li>
        </ul>
      </div>
    </div>
  )
}