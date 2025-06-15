'use client'

import { useState, useEffect } from 'react'
import { Sword, Shield, Heart, Zap, Target, Clock, Trophy, Star, AlertTriangle, Search, Play, Pause } from 'lucide-react'

interface Enemy {
  id: string
  name: string
  level: number
  health: number
  maxHealth: number
  image: string
  location: string
  exp: number
  successChance: number
  timeRemaining: string
  expPerSecond: number
  loot: string[]
  problem?: {
    title: string
    description: string
  }
}

interface BattleStats {
  totalEnemiesFound: number
  enemiesRemaining: number
  bonusEnemies: number
  expPerSecond: number
}

interface HuntingSession {
  isActive: boolean
  startTime: number
  duration: number // in minutes
  location: string
  huntingMastery: number
}

interface Location {
  id: string
  name: string
  description: string
  requiredLevel: number
  huntingDuration: number // in minutes
  enemyTypes: string[]
}

export default function Battle() {
  const [activeTab, setActiveTab] = useState<'battle' | 'stats'>('battle')
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null)
  const [isBattling, setIsBattling] = useState(false)
  const [huntingSession, setHuntingSession] = useState<HuntingSession | null>(null)
  const [availableEnemies, setAvailableEnemies] = useState<Enemy[]>([])
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [showLocationSelect, setShowLocationSelect] = useState(false)

  const locations: Location[] = [
    {
      id: 'eldoria',
      name: 'Eldoria Plains',
      description: 'Peaceful grasslands with basic creatures',
      requiredLevel: 1,
      huntingDuration: 5, // 5 minutes
      enemyTypes: ['Buffalo', 'Wild Boar', 'Forest Wolf']
    },
    {
      id: 'mountains',
      name: 'Mountain Peaks',
      description: 'Rocky terrain with stronger monsters',
      requiredLevel: 15,
      huntingDuration: 8, // 8 minutes
      enemyTypes: ['Stone Golem', 'Mountain Bear', 'Ice Troll']
    },
    {
      id: 'dragon_lair',
      name: 'Dragon\'s Lair',
      description: 'Dangerous territory with powerful creatures',
      requiredLevel: 40,
      huntingDuration: 15, // 15 minutes
      enemyTypes: ['Obsidianus', 'Fire Drake', 'Ancient Dragon']
    }
  ];

  const battleStats: BattleStats = {
    totalEnemiesFound: 74,
    enemiesRemaining: 378,
    bonusEnemies: 0,
    expPerSecond: 0.54
  }

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const allEnemies: Enemy[] = [
    {
      id: '1',
      name: 'Buffalo',
      level: 20,
      health: 450,
      maxHealth: 450,
      image: '🐃',
      location: 'Eldoria',
      exp: 450,
      successChance: 70,
      timeRemaining: '01:33',
      expPerSecond: 0.54,
      loot: ['Buffalo Hide', 'Raw Meat']
    },
    {
      id: '2',
      name: 'Obsidianus',
      level: 20,
      health: 450,
      maxHealth: 450,
      image: '🐉',
      location: 'Eldoria',
      exp: 450,
      successChance: 70,
      timeRemaining: '21m 15s',
      expPerSecond: 4.71,
      loot: ['Dragon Scale', 'Fire Crystal'],
      problem: {
        title: 'There is a problem',
        description: 'You are not a high enough level to do this.'
      }
    },
    {
      id: '3',
      name: 'Cursed Asylum',
      level: 62,
      health: 6000,
      maxHealth: 6000,
      image: '🏚️',
      location: 'Eldoria',
      exp: 6000,
      successChance: 70,
      timeRemaining: '21m 15s',
      expPerSecond: 4.71,
      loot: ['Cursed Artifact', 'Ancient Tome'],
      problem: {
        title: 'There is a problem',
        description: 'You are not a high enough level to do this.'
      }
    }
  ]

  const handleEnemyClick = (enemy: Enemy) => {
    setSelectedEnemy(enemy)
  }

  const startHunt = (location: Location) => {
    const session: HuntingSession = {
      isActive: true,
      startTime: Date.now(),
      duration: location.huntingDuration,
      location: location.name,
      huntingMastery: 25 // This would come from character stats
    };
    setHuntingSession(session);
    setSelectedLocation(location);
    setShowLocationSelect(false);
    setAvailableEnemies([]);
    setSelectedEnemy(null);
  };

  const completeHunt = () => {
    if (!huntingSession || !selectedLocation) return;
    
    // Generate enemies based on location and hunting mastery
    const locationEnemies = allEnemies.filter(enemy => 
      selectedLocation.enemyTypes.includes(enemy.name)
    );
    
    // Add some randomization based on hunting mastery
    const numEnemies = Math.min(Math.floor(huntingSession.huntingMastery / 10) + 2, locationEnemies.length);
    const foundEnemies = locationEnemies.slice(0, numEnemies);
    
    setAvailableEnemies(foundEnemies);
    setHuntingSession(null);
  };

  const getHuntProgress = () => {
    if (!huntingSession) return 100;
    const timeElapsed = (currentTime - huntingSession.startTime) / (1000 * 60); // in minutes
    const progress = Math.min((timeElapsed / huntingSession.duration) * 100, 100);
    if (progress >= 100 && huntingSession.isActive) {
      completeHunt();
    }
    return progress;
  };

  const getHuntTimeRemaining = () => {
    if (!huntingSession) return '';
    const timeElapsed = (currentTime - huntingSession.startTime) / (1000 * 60); // in minutes
    const remaining = Math.max(huntingSession.duration - timeElapsed, 0);
    const minutes = Math.floor(remaining);
    const seconds = Math.floor((remaining % 1) * 60);
    return `${minutes}m ${seconds}s`;
  };

  const handleBattle = () => {
    if (selectedEnemy && !selectedEnemy.problem) {
      setIsBattling(true)
      // Simulate battle logic here
      setTimeout(() => {
        setIsBattling(false)
      }, 2000)
    }
  }

  const handleRunAway = () => {
    setIsBattling(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-discord-text flex items-center gap-2">
            <Sword className="w-6 h-6 text-red-400" />
            Battle Arena
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('battle')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'battle'
                  ? 'bg-discord-blurple text-white'
                  : 'bg-discord-dark text-discord-muted hover:text-discord-text'
              }`}
            >
              Battle
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'stats'
                  ? 'bg-discord-blurple text-white'
                  : 'bg-discord-dark text-discord-muted hover:text-discord-text'
              }`}
            >
              Stats
            </button>
          </div>
        </div>

        {/* Battle Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-discord-dark rounded-lg p-3">
            <div className="text-sm text-discord-muted">Total Enemies Found</div>
            <div className="text-xl font-bold text-discord-text">{battleStats.totalEnemiesFound}</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-3">
            <div className="text-sm text-discord-muted">Enemies Remaining</div>
            <div className="text-xl font-bold text-discord-text">{battleStats.enemiesRemaining}</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-3">
            <div className="text-sm text-discord-muted">Bonus Enemies</div>
            <div className="text-xl font-bold text-discord-text">{battleStats.bonusEnemies}</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-3">
            <div className="text-sm text-discord-muted">EXP Per Second</div>
            <div className="text-xl font-bold text-green-400">{battleStats.expPerSecond}</div>
          </div>
        </div>
      </div>

      {activeTab === 'battle' && (
        <div className="space-y-6">
          {/* Hunting Interface */}
          {!huntingSession && availableEnemies.length === 0 && (
            <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50 text-center">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-discord-text mb-2">Start Hunt</h3>
              <p className="text-discord-muted mb-6">
                Begin hunting to find enemies in your area. Choose a location to start your hunt.
              </p>
              <button
                onClick={() => setShowLocationSelect(true)}
                className="bg-discord-blurple hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <Search className="w-5 h-5" />
                Start Hunt
              </button>
            </div>
          )}

          {/* Active Hunt Progress */}
          {huntingSession && (
            <div className="bg-discord-light rounded-lg p-6 border border-blue-500/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-discord-text">Hunting in Progress</h3>
                <div className="text-sm text-discord-muted">
                  {huntingSession.location}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-blue-400 animate-pulse" />
                  <div>
                    <div className="font-medium text-discord-text">Searching for enemies...</div>
                    <div className="text-sm text-discord-muted">
                      Hunting Mastery: Level {huntingSession.huntingMastery}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-discord-muted">Progress:</span>
                    <span className="text-white">{getHuntProgress().toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-blue-400 h-3 rounded-full transition-all"
                      style={{ width: `${getHuntProgress()}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-discord-muted">Time Remaining:</span>
                    <span className="text-white">{getHuntTimeRemaining()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enemy List */}
          {availableEnemies.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-discord-text">Found Enemies</h3>
                  <div className="text-sm text-discord-muted">
                    {availableEnemies.length} enemies found
                  </div>
                </div>
                <div className="space-y-4">
                  {availableEnemies.map((enemy) => (
                <div
                  key={enemy.id}
                  onClick={() => handleEnemyClick(enemy)}
                  className={`bg-discord-dark rounded-lg p-4 cursor-pointer transition-all hover:bg-gray-600/50 ${
                    selectedEnemy?.id === enemy.id ? 'ring-2 ring-discord-blurple' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{enemy.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-discord-text">{enemy.name}</h4>
                        <span className="text-sm text-discord-muted">Lv. {enemy.level}</span>
                      </div>
                      <div className="text-sm text-discord-muted">{enemy.location}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Heart className="w-4 h-4 text-red-400" />
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-red-400 h-2 rounded-full"
                            style={{ width: `${(enemy.health / enemy.maxHealth) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-discord-muted">
                          {enemy.health}/{enemy.maxHealth}
                        </span>
                      </div>
                    </div>
                  </div>
                  {enemy.problem && (
                    <div className="mt-3 flex items-center gap-2 text-red-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-sm">{enemy.problem.title}</span>
                    </div>
                  )}
                </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-600">
                  <button
                    onClick={() => {
                      setAvailableEnemies([]);
                      setSelectedEnemy(null);
                    }}
                    className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition-colors"
                  >
                    Start New Hunt
                  </button>
                </div>
              </div>

              {/* Battle Interface */}
              <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            {selectedEnemy ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-2">{selectedEnemy.image}</div>
                  <h3 className="text-xl font-bold text-discord-text">{selectedEnemy.name}</h3>
                  <div className="text-sm text-discord-muted mb-4">
                    {selectedEnemy.exp} EXP • Level {selectedEnemy.level} • Costs 💰 {selectedEnemy.level * 100}
                  </div>
                  <div className="text-sm text-discord-muted mb-4">
                    {selectedEnemy.successChance}% Chance of Success • {selectedEnemy.timeRemaining} • {selectedEnemy.expPerSecond} EXP/s
                  </div>
                  <div className="text-sm text-discord-muted mb-6">{selectedEnemy.location}</div>
                </div>

                {/* Health Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-discord-muted">Health</span>
                    <span className="text-discord-text">
                      {selectedEnemy.health}/{selectedEnemy.maxHealth}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-red-400 h-3 rounded-full transition-all"
                      style={{ width: `${(selectedEnemy.health / selectedEnemy.maxHealth) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Loot Preview */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-discord-text mb-2">LOOT</h4>
                  <div className="text-sm text-discord-muted">
                    {selectedEnemy.loot.join(', ')}
                  </div>
                </div>

                {/* Problem Alert */}
                {selectedEnemy.problem && (
                  <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-semibold">{selectedEnemy.problem.title}</span>
                    </div>
                    <p className="text-sm text-red-300">{selectedEnemy.problem.description}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-2">
                  {!selectedEnemy.problem ? (
                    <>
                      <button
                        onClick={handleBattle}
                        disabled={isBattling}
                        className="w-full bg-discord-blurple hover:bg-blue-600 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        {isBattling ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Battling...
                          </>
                        ) : (
                          <>
                            <Sword className="w-4 h-4" />
                            Power Hunt
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleRunAway}
                        className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Target className="w-4 h-4" />
                        Run Away
                      </button>
                    </>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-600 text-gray-400 font-semibold py-3 px-4 rounded-lg cursor-not-allowed"
                    >
                      Cannot Battle
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Sword className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-discord-text mb-2">Select an Enemy</h3>
                <p className="text-discord-muted">Choose an enemy from the list to start battling</p>
              </div>
            )}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
          <h3 className="text-xl font-bold text-discord-text mb-6">Battle Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h4 className="font-semibold text-discord-text">Victories</h4>
              </div>
              <div className="text-2xl font-bold text-discord-text">1,247</div>
              <div className="text-sm text-green-400">+23 today</div>
            </div>
            <div className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-blue-400" />
                <h4 className="font-semibold text-discord-text">Total EXP</h4>
              </div>
              <div className="text-2xl font-bold text-discord-text">45,892</div>
              <div className="text-sm text-green-400">+1,234 today</div>
            </div>
            <div className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="font-semibold text-discord-text">Time Spent</h4>
              </div>
              <div className="text-2xl font-bold text-discord-text">127h</div>
              <div className="text-sm text-green-400">+2h 15m today</div>
            </div>
          </div>
        </div>
      )}
      {/* Location Selection Modal */}
      {showLocationSelect && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-discord-dark rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-discord-text">Select Hunting Location</h2>
              <button
                onClick={() => setShowLocationSelect(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              {locations.map((location) => {
                const canHunt = location.requiredLevel <= 45; // This would come from character level
                return (
                  <div
                    key={location.id}
                    className={`border rounded-lg p-4 transition-all ${
                      canHunt
                        ? 'border-gray-600 hover:border-blue-500 cursor-pointer'
                        : 'border-gray-700 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-discord-text">{location.name}</h3>
                      <div className="text-sm text-discord-muted">
                        Level {location.requiredLevel}+
                      </div>
                    </div>
                    
                    <p className="text-sm text-discord-muted mb-3">{location.description}</p>
                    
                    <div className="flex justify-between items-center text-sm mb-4">
                      <span className="text-discord-muted">Hunt Duration:</span>
                      <span className="text-discord-text">{location.huntingDuration} minutes</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-discord-muted mb-2">Possible Enemies:</div>
                      <div className="flex flex-wrap gap-2">
                        {location.enemyTypes.map((enemyType) => (
                          <span
                            key={enemyType}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                          >
                            {enemyType}
                          </span>
                        ))}
                      </div>
                    </div>

                    {canHunt ? (
                      <button
                        onClick={() => startHunt(location)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                      >
                        <Search className="w-4 h-4" />
                        Start Hunt Here
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-gray-600 text-gray-400 py-2 px-4 rounded cursor-not-allowed"
                      >
                        Level Too Low
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}