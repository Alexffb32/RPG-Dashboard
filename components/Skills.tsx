'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Star, Trophy, Target, Zap, Shield, Sword, Fish, TreePine, Flame, Beaker, Hammer, Gem, Sparkles, ShoppingCart, Store, Swords, Heart, Users, Play, Pause, Clock, MapPin, Crown, Snowflake, Egg, Ghost, Brain, TrendingUp, Activity, Moon, Flower } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  currentExp: number;
  expToNext: number;
  totalExp: number;
  ascensionLevel?: number;
  ascensionPoints?: number;
  maxAscensionPoints?: number;
  icon: React.ReactNode;
  category: string;
  description: string;
  coreStats: string[];
  unlocked: boolean;
  isActive?: boolean;
  timeRemaining?: number;
  hasAscension?: boolean;
  // Meditation-specific properties
  baseExpRate?: number;
  guidanceScrolls?: {
    unlockLevel: number;
    expRate: number;
    duration: number;
    effectDuration: number;
    minEffect: number;
    maxEffect: number;
    exponent: number;
  };
  enlightenment?: {
    level: number;
    cosmetic: string;
  };
  soundEffects?: string[];
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
  expanded: boolean;
}

interface AscensionPerk {
  id: string;
  name: string;
  description: string;
  cost: number;
  duration: number; // in hours
  effect: string;
  unlocked: boolean;
}

interface ActiveSkillSession {
  skillId: string;
  startTime: number;
  duration: number; // in minutes
  expGained: number;
  isActive: boolean;
  location?: string;
  resource?: string;
}

const ascensionPerks: AscensionPerk[] = [
  {
    id: 'exp_boost',
    name: 'Experience Boost',
    description: '+25% Experience gain for this skill',
    cost: 2,
    duration: 4,
    effect: '+25% EXP',
    unlocked: true
  },
  {
    id: 'efficiency_boost',
    name: 'Efficiency Boost',
    description: '+20% Skill efficiency for faster resource gathering',
    cost: 3,
    duration: 6,
    effect: '+20% Efficiency',
    unlocked: true
  },
  {
    id: 'magic_find',
    name: 'Magic Find',
    description: '+15% Magic Find for better loot quality',
    cost: 4,
    duration: 8,
    effect: '+15% Magic Find',
    unlocked: true
  },
  {
    id: 'double_resources',
    name: 'Double Resources',
    description: '50% chance to get double resources',
    cost: 5,
    duration: 2,
    effect: '50% Double Drop',
    unlocked: false
  }
];

const skillsData: SkillCategory[] = [
  {
    id: 'gathering',
    name: 'Gathering Skills',
    expanded: true,
    skills: [
      {
        id: 'woodcutting',
        name: 'Woodcutting',
        level: 44,
        currentExp: 5610,
        expToNext: 890,
        totalExp: 65610,
        ascensionLevel: 12,
        ascensionPoints: 6,
        maxAscensionPoints: 8,
        icon: <TreePine className="w-5 h-5" />,
        category: 'gathering',
        description: 'Harvest logs for crafting at the Forge, perfect for wooden items like a Bow.',
        coreStats: ['Strength'],
        unlocked: true,
        hasAscension: true,
        isActive: true,
        timeRemaining: 145
      },
      {
        id: 'mining',
        name: 'Mining',
        level: 41,
        currentExp: 3249,
        expToNext: 2251,
        totalExp: 56249,
        ascensionLevel: 8,
        ascensionPoints: 4,
        maxAscensionPoints: 8,
        icon: <Hammer className="w-5 h-5" />,
        category: 'gathering',
        description: 'Gather ore for smelting into metal bars, essential for creating Equipment. Coal is especially valuable for crafting.',
        coreStats: ['Strength', 'Defence'],
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'fishing',
        name: 'Fishing',
        level: 28,
        currentExp: 2130,
        expToNext: 1870,
        totalExp: 18130,
        ascensionLevel: 3,
        ascensionPoints: 7,
        maxAscensionPoints: 8,
        icon: <Fish className="w-5 h-5" />,
        category: 'gathering',
        description: 'Catch Fish for nourishment. Remember to cook them first to reap the health benefits.',
        coreStats: ['Dexterity'],
        unlocked: true,
        hasAscension: true
      }
    ]
  },
  {
    id: 'gathering',
    name: 'Gathering Skills',
    expanded: true,
    skills: [
      {
        id: 'woodcutting',
        name: 'Woodcutting',
        level: 44,
        currentExp: 5610,
        expToNext: 890,
        totalExp: 65610,
        ascensionLevel: 12,
        ascensionPoints: 6,
        maxAscensionPoints: 8,
        icon: <TreePine className="w-5 h-5" />,
        category: 'gathering',
        description: 'Harvest logs for crafting at the Forge, perfect for wooden items like a Bow.',
        coreStats: ['Strength'],
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'mining',
        name: 'Mining',
        level: 41,
        currentExp: 3249,
        expToNext: 2251,
        totalExp: 56249,
        ascensionLevel: 8,
        ascensionPoints: 4,
        maxAscensionPoints: 8,
        icon: <Hammer className="w-5 h-5" />,
        category: 'gathering',
        description: 'Gather ore for smelting into metal bars, essential for creating Equipment. Coal is especially valuable for crafting.',
        coreStats: ['Strength', 'Defense'],
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'fishing',
        name: 'Fishing',
        level: 28,
        currentExp: 2130,
        expToNext: 1870,
        totalExp: 22130,
        ascensionLevel: 3,
        ascensionPoints: 7,
        maxAscensionPoints: 8,
        icon: <Fish className="w-5 h-5" />,
        category: 'gathering',
        description: 'Catch Fish for nourishment. Remember to cook them first to reap the health benefits.',
        coreStats: ['Dexterity'],
        unlocked: true,
        hasAscension: true
      }
    ]
  },
  {
    id: 'artisan',
    name: 'Artisan Skills',
    expanded: true,
    skills: [
      {
        id: 'alchemy',
        name: 'Alchemy',
        level: 22,
        currentExp: 1523,
        expToNext: 1277,
        totalExp: 15523,
        ascensionLevel: 2,
        ascensionPoints: 5,
        maxAscensionPoints: 8,
        icon: <Beaker className="w-5 h-5" />,
        category: 'artisan',
        description: 'Craft Potions and Essence Crystals.',
        coreStats: ['Speed'],
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'smelting',
        name: 'Smelting',
        level: 38,
        currentExp: 2156,
        expToNext: 2344,
        totalExp: 44156,
        ascensionLevel: 6,
        ascensionPoints: 3,
        maxAscensionPoints: 8,
        icon: <Flame className="w-5 h-5" />,
        category: 'artisan',
        description: 'Convert Ores into Metal Bars for use in the Forge.',
        coreStats: ['Speed'],
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'cooking',
        name: 'Cooking',
        level: 15,
        currentExp: 890,
        expToNext: 1110,
        totalExp: 7890,
        ascensionLevel: 1,
        ascensionPoints: 8,
        maxAscensionPoints: 8,
        icon: <Heart className="w-5 h-5" />,
        category: 'artisan',
        description: 'Prepare your catch into meals that boost health for you and your pets.',
        coreStats: ['Dexterity'],
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'forge',
        name: 'Forge',
        level: 26,
        currentExp: 1847,
        expToNext: 1653,
        totalExp: 18847,
        ascensionLevel: 4,
        ascensionPoints: 2,
        maxAscensionPoints: 8,
        icon: <Hammer className="w-5 h-5" />,
        category: 'artisan',
        description: 'Use resources from various skills to craft equipment.',
        coreStats: ['Strength'],
        unlocked: true,
        hasAscension: true
      }
    ]
  },
  {
    id: 'magic',
    name: 'Magic Skills',
    expanded: false,
    skills: [
      {
        id: 'meditation',
        name: 'Meditation',
        level: 18,
        currentExp: 1245,
        expToNext: 1755,
        totalExp: 12245,
        icon: <Sparkles className="w-5 h-5" />,
        category: 'magic',
        description: 'A unique skill focused on selflessness and helping others. Unlocks Guidance Scrolls at level 35.',
        unlocked: true,
        hasAscension: false,
        baseExpRate: 0.8, // EXP per second
        guidanceScrolls: {
          unlockLevel: 35,
          expRate: 0.1, // EXP per second while writing
          duration: 60, // minutes to write one scroll
          effectDuration: 120, // minutes the effect lasts
          minEffect: 1, // minimum boost percentage
          maxEffect: 15, // maximum boost percentage
          exponent: 3.5 // exponential scaling factor
        },
        enlightenment: {
          level: 100,
          cosmetic: 'floating_aura' // Character floats on profile
        },
        soundEffects: ['rain', 'snowfall', 'fireplace', 'thunderstorm']
      }
    ]
  },
  {
    id: 'social',
    name: 'Social & Trading',
    expanded: false,
    skills: [
      {
        id: 'bartering',
        name: 'Bartering',
        level: 12,
        currentExp: 1456,
        expToNext: 1044,
        totalExp: 6456,
        icon: <ShoppingCart className="w-5 h-5" />,
        category: 'social',
        description: 'This increases the amount of gold you obtain when selling items to a vendor. You can get up to a bonus of 20%. You can increase your bartering level by selling items to the vendor.',
        unlocked: true,
        hasAscension: false
      }
    ]
  },
  {
    id: 'special',
    name: 'Special Skills',
    expanded: false,
    skills: [
      {
        id: 'combat',
        name: 'Combat',
        level: 35,
        currentExp: 4521,
        expToNext: 1979,
        totalExp: 38521,
        ascensionLevel: 7,
        ascensionPoints: 1,
        maxAscensionPoints: 8,
        icon: <Swords className="w-5 h-5" />,
        category: 'special',
        description: 'Increase by defeating enemies, crucial for dungeons and boss fights, but optional for non-combatants.',
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'hunting-mastery',
        name: 'Hunting Mastery',
        level: 24,
        currentExp: 2156,
        expToNext: 1844,
        totalExp: 18156,
        ascensionLevel: 5,
        ascensionPoints: 3,
        maxAscensionPoints: 8,
        icon: <Target className="w-5 h-5" />,
        category: 'special',
        description: 'Enhance by completing hunts. The hunting mastery level affects the number of enemies encountered. The higher the level, the more enemies that appear.',
        unlocked: true,
        hasAscension: true
      },
      {
        id: 'pet-mastery',
        name: 'Pet Mastery',
        level: 13,
        currentExp: 1156,
        expToNext: 1344,
        totalExp: 7156,
        icon: <Heart className="w-5 h-5" />,
        category: 'special',
        description: 'This increases your pets overall stats and the effectiveness of patting your pet. You can increase your pet mastery skill by sending your pets to battle.',
        unlocked: true,
        hasAscension: false
      },
      {
        id: 'guild-mastery',
        name: 'Guild Mastery',
        level: 7,
        currentExp: 723,
        expToNext: 1277,
        totalExp: 2723,
        icon: <Users className="w-5 h-5" />,
        category: 'special',
        description: 'Increase by participating in guild raids and challenges.',
        unlocked: true,
        hasAscension: false
      }
    ]
  },
  {
    id: 'seasonal',
    name: 'Seasonal Skills',
    expanded: false,
    skills: [
      {
        id: 'shadow-mastery',
        name: 'Shadow Mastery',
        level: 8,
        currentExp: 892,
        expToNext: 1108,
        totalExp: 3892,
        icon: <Moon className="w-5 h-5" />,
        category: 'seasonal',
        description: 'Only available during the Eve of Shadows campaign. Shadow mastery allows characters to pick pumpkins, catch ghosts and perform exorcisms.',
        unlocked: false,
        hasAscension: false
      },
      {
        id: 'yule-mastery',
        name: 'Yule Mastery',
        level: 5,
        currentExp: 234,
        expToNext: 766,
        totalExp: 1234,
        icon: <Snowflake className="w-5 h-5" />,
        category: 'seasonal',
        description: 'Only available during the Yule Fest campaign. Yule mastery allows characters to gather snow, create snowballs, and build snowmen.',
        unlocked: false,
        hasAscension: false
      },
      {
        id: 'springtide-mastery',
        name: 'Springtide Mastery',
        level: 3,
        currentExp: 156,
        expToNext: 344,
        totalExp: 656,
        icon: <Flower className="w-5 h-5" />,
        category: 'seasonal',
        description: 'Only available during the Springtide Fair campaign. Springtide Mastery allows characters to collect, decorate and glaze eggs.',
        unlocked: false,
        hasAscension: false
      }
    ]
  }
];

export default function Skills() {
  const [categories, setCategories] = useState<SkillCategory[]>(skillsData);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSession, setActiveSession] = useState<ActiveSkillSession | null>(null);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Update current time every second for active sessions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCategory = (categoryId: string) => {
    setCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, expanded: !cat.expanded }
          : cat
      )
    );
  };

  const startSkillSession = (skillId: string, mode?: string) => {
    let expRate = 10; // Default exp per minute
    let sessionName = skillId;
    
    // Meditation-specific rates
    if (skillId === 'meditation') {
      if (mode === 'guidance_scrolls') {
        expRate = 0.1 * 60; // 0.1 EXP/sec = 6 EXP/min
        sessionName = 'Writing Guidance Scrolls';
      } else {
        expRate = 0.8 * 60; // 0.8 EXP/sec = 48 EXP/min
        sessionName = 'Meditating';
      }
    }
    
    const session: ActiveSkillSession = {
      skillId: skillId,
      startTime: Date.now(),
      duration: 60, // Default 60 minutes
      expGained: 0,
      isActive: true,
      location: sessionName,
      resource: mode || 'training'
    };
    setActiveSession(session);
  };

  const stopSession = () => {
    if (activeSession) {
      const timeElapsed = (Date.now() - activeSession.startTime) / (1000 * 60); // in minutes
      const expGained = Math.floor(timeElapsed * 10); // Base 10 exp per minute
      // Here you would update the skill experience
      console.log(`Session completed! Gained ${expGained} EXP`);
    }
    setActiveSession(null);
  };

  const activateAscensionPerk = (perkId: string) => {
    const perk = ascensionPerks.find(p => p.id === perkId);
    if (perk) {
      console.log(`Activated perk: ${perk.name}`);
      // Here you would implement perk activation logic
    }
  };

  const getSessionProgress = () => {
    if (!activeSession) return 0;
    const timeElapsed = (currentTime - activeSession.startTime) / (1000 * 60); // in minutes
    const progress = Math.min((timeElapsed / activeSession.duration) * 100, 100);
    return progress;
  };

  const getTimeRemaining = () => {
    if (!activeSession) return '';
    const timeElapsed = (currentTime - activeSession.startTime) / (1000 * 60); // in minutes
    const remaining = Math.max(activeSession.duration - timeElapsed, 0);
    const hours = Math.floor(remaining / 60);
    const minutes = Math.floor(remaining % 60);
    return `${hours}h ${minutes}m`;
  };

  const handleSkillAction = (skill: Skill) => {
    if (activeSession) {
      console.log('Already training a skill');
      return;
    }
    
    // Meditation-specific logic
    if (skill.id === 'meditation') {
      const canWriteScrolls = skill.level >= (skill.guidanceScrolls?.unlockLevel || 35);
      
      if (canWriteScrolls) {
        // Show modal to choose between meditation or writing guidance scrolls
        const choice = confirm('Choose training mode:\nOK = Write Guidance Scrolls (0.1 EXP/sec)\nCancel = Meditate (0.8 EXP/sec)');
        
        if (choice) {
          // Writing guidance scrolls
          startSkillSession(skill.id, 'guidance_scrolls');
          console.log('Started writing guidance scrolls');
        } else {
          // Regular meditation
          startSkillSession(skill.id, 'meditation');
          console.log('Started meditating');
        }
      } else {
        // Only meditation available
        startSkillSession(skill.id, 'meditation');
        console.log('Started meditating');
      }
    } else {
      // Regular skill training
      startSkillSession(skill.id);
      console.log(`Started training ${skill.name}`);
    }
  };

  const getExpPercentage = (skill: Skill) => {
    return (skill.currentExp / (skill.currentExp + skill.expToNext)) * 100;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const getSkillColor = (level: number) => {
    if (level >= 40) return 'text-purple-400';
    if (level >= 30) return 'text-blue-400';
    if (level >= 20) return 'text-green-400';
    if (level >= 10) return 'text-yellow-400';
    return 'text-gray-400';
  };

  const getSkillBorderColor = (level: number) => {
    if (level >= 40) return 'border-purple-400/50';
    if (level >= 30) return 'border-blue-400/50';
    if (level >= 20) return 'border-green-400/50';
    if (level >= 10) return 'border-yellow-400/50';
    return 'border-gray-600/50';
  };

  const getProgressBarColor = (level: number) => {
    if (level >= 40) return 'bg-purple-500';
    if (level >= 30) return 'bg-blue-500';
    if (level >= 20) return 'bg-green-500';
    if (level >= 10) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-discord-text">Skills</h2>
          <div className="flex items-center gap-4 text-sm text-discord-muted">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Total Level: 343</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-blue-400" />
              <span>Combat Level: 42</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="text-2xl mb-2">⚔️</div>
            <div className="text-sm text-discord-muted">Combat Skills</div>
            <div className="text-xl font-bold text-discord-text">Avg: 42</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="text-2xl mb-2">🛠️</div>
            <div className="text-sm text-discord-muted">Gathering Skills</div>
            <div className="text-xl font-bold text-discord-text">Avg: 29</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="text-2xl mb-2">✨</div>
            <div className="text-sm text-discord-muted">Artisan Skills</div>
            <div className="text-xl font-bold text-discord-text">Avg: 14</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="text-2xl mb-2">🤝</div>
            <div className="text-sm text-discord-muted">Social Skills</div>
            <div className="text-xl font-bold text-discord-text">Avg: 10</div>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm text-discord-muted">Special Skills</div>
            <div className="text-xl font-bold text-discord-text">Avg: 15</div>
          </div>
        </div>
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills Categories */}
        <div className="lg:col-span-2 space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-discord-light rounded-lg border border-gray-600/50 overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-discord-dark transition-colors"
              >
                <h3 className="text-lg font-semibold text-discord-text">{category.name}</h3>
                {category.expanded ? (
                  <ChevronDown className="w-5 h-5 text-discord-muted" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-discord-muted" />
                )}
              </button>

              {/* Skills List */}
              {category.expanded && (
                <div className="border-t border-gray-600/50">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-4 border-b border-gray-600/30 last:border-b-0 hover:bg-discord-dark transition-colors cursor-pointer ${
                        selectedSkill?.id === skill.id ? 'bg-discord-dark' : ''
                      } ${!skill.unlocked ? 'opacity-50' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Skill Icon */}
                        <div className={`w-12 h-12 rounded-lg border-2 ${getSkillBorderColor(skill.level)} bg-discord-dark flex items-center justify-center ${getSkillColor(skill.level)}`}>
                          {skill.icon}
                        </div>

                        {/* Skill Info */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-discord-text">{skill.name}</h4>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-bold ${getSkillColor(skill.level)}`}>
                                Lv. {skill.level}
                              </span>
                              {!skill.unlocked && (
                                <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">Locked</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Experience Bar */}
                          <div className="mb-2">
                            <div className="flex justify-between text-xs text-discord-muted mb-1">
                              <span>{formatNumber(skill.currentExp)} EXP</span>
                              <span>{formatNumber(skill.expToNext)} EXP needed</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(skill.level)}`}
                                style={{ width: `${getExpPercentage(skill)}%` }}
                              ></div>
                            </div>
                          </div>

                          <p className="text-xs text-discord-muted">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skill Details Panel */}
        <div className="space-y-4">
          {selectedSkill ? (
            <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-lg border-2 ${getSkillBorderColor(selectedSkill.level)} bg-discord-dark flex items-center justify-center ${getSkillColor(selectedSkill.level)}`}>
                  {selectedSkill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-discord-text">{selectedSkill.name}</h3>
                  <p className={`text-lg font-semibold ${getSkillColor(selectedSkill.level)}`}>
                    Level {selectedSkill.level}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Description</h4>
                  <p className="text-gray-400 text-sm">{selectedSkill.description}</p>
                </div>

                {selectedSkill.coreStats && selectedSkill.coreStats.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Core Stats</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.coreStats.map((stat) => (
                        <span key={stat} className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded border border-blue-600/30">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSkill.hasAscension && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Ascension Progress</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Ascension Level:</span>
                        <span className="text-purple-400">{selectedSkill.ascensionLevel || 0}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Ascension Points:</span>
                        <span className="text-purple-400">{selectedSkill.ascensionPoints || 0}/{selectedSkill.maxAscensionPoints || 8}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Meditation-specific features */}
                {selectedSkill.id === 'meditation' && (
                  <div className="space-y-4">
                    {/* Base Training Rate */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Training Rate</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Base EXP Rate:</span>
                        <span className="text-green-400">{selectedSkill.baseExpRate} EXP/sec</span>
                      </div>
                    </div>

                    {/* Guidance Scrolls */}
                    {selectedSkill.guidanceScrolls && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Guidance Scrolls</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Unlock Level:</span>
                            <span className={selectedSkill.level >= selectedSkill.guidanceScrolls.unlockLevel ? 'text-green-400' : 'text-red-400'}>
                              {selectedSkill.guidanceScrolls.unlockLevel}
                            </span>
                          </div>
                          {selectedSkill.level >= selectedSkill.guidanceScrolls.unlockLevel && (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Writing EXP Rate:</span>
                                <span className="text-blue-400">{selectedSkill.guidanceScrolls.expRate} EXP/sec</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Writing Duration:</span>
                                <span className="text-yellow-400">{selectedSkill.guidanceScrolls.duration} min</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Effect Duration:</span>
                                <span className="text-purple-400">{selectedSkill.guidanceScrolls.effectDuration} min</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Current Boost:</span>
                                <span className="text-orange-400">
                                  {(() => {
                                    const normalizedLevel = (selectedSkill.level - 1) / 99;
                                    const adjustedValue = Math.pow(normalizedLevel, selectedSkill.guidanceScrolls.exponent);
                                    const effectValue = selectedSkill.guidanceScrolls.minEffect + 
                                      (selectedSkill.guidanceScrolls.maxEffect - selectedSkill.guidanceScrolls.minEffect) * adjustedValue;
                                    return effectValue.toFixed(1);
                                  })()}%
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Enlightenment */}
                    {selectedSkill.enlightenment && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Enlightenment</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Enlightenment Level:</span>
                            <span className={selectedSkill.level >= selectedSkill.enlightenment.level ? 'text-yellow-400' : 'text-gray-400'}>
                               {selectedSkill.enlightenment.level}
                             </span>
                           </div>
                           {selectedSkill.level >= selectedSkill.enlightenment.level && (
                             <div className="flex items-center gap-2">
                               <Crown className="w-4 h-4 text-yellow-400" />
                               <span className="text-yellow-400 text-sm font-semibold">Enlightened - Floating Aura Active</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Sound Effects */}
                    {selectedSkill.soundEffects && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Meditation Sounds</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedSkill.soundEffects.map((sound) => (
                            <button
                              key={sound}
                              className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded transition-colors capitalize"
                              onClick={() => console.log(`Playing ${sound} sound`)}
                            >
                              {sound}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Sound effects must be manually enabled due to browser limitations.</p>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Experience</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Current EXP:</span>
                      <span className="text-white">{formatNumber(selectedSkill.currentExp)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">EXP to Next:</span>
                      <span className="text-white">{formatNumber(selectedSkill.expToNext)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Total EXP:</span>
                      <span className="text-white">{formatNumber(selectedSkill.totalExp)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Progress</h4>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full transition-all duration-300 ${getProgressBarColor(selectedSkill.level)}`}
                      style={{ width: `${getExpPercentage(selectedSkill)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 text-center">
                    {getExpPercentage(selectedSkill).toFixed(1)}% to next level
                  </p>
                </div>

                {selectedSkill.unlocked ? (
                  <button 
                    onClick={() => handleSkillAction(selectedSkill)}
                    disabled={!!activeSession}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:text-gray-400 text-white px-4 py-2 rounded transition-colors"
                  >
                    {activeSession ? 'Already Training' : 'Train Skill'}
                  </button>
                ) : (
                  <button className="w-full bg-gray-600 text-gray-400 px-4 py-2 rounded cursor-not-allowed" disabled>
                    Skill Locked
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50 text-center">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-discord-text mb-2">Select a Skill</h3>
              <p className="text-discord-muted text-sm">Click on any skill to view detailed information and training options.</p>
            </div>
          )}

          {/* Active Session */}
          {activeSession && (
            <div className="bg-discord-light rounded-lg p-6 border border-green-500/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-discord-text">Active Session</h3>
                <button
                  onClick={stopSession}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                >
                  Stop
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="font-medium text-discord-text">
                      Training {activeSession.skillId}
                    </div>
                    <div className="text-sm text-discord-muted">
                      Active skill session
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-discord-muted">Progress:</span>
                    <span className="text-white">{getSessionProgress().toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-green-400 h-3 rounded-full transition-all"
                      style={{ width: `${getSessionProgress()}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-discord-muted">Time Remaining:</span>
                    <span className="text-white">{getTimeRemaining()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Stats */}
          <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-discord-muted">Highest Skill:</span>
                <span className="text-white font-medium">Attack (45)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-discord-muted">Skills at 40+:</span>
                <span className="text-white font-medium">3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-discord-muted">Total EXP:</span>
                <span className="text-white font-medium">{formatNumber(398847)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-discord-muted">Unlocked Skills:</span>
                <span className="text-white font-medium">16/17</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ascension Perks Panel */}
      {selectedSkill?.hasAscension && (
        <div className="bg-discord-light rounded-lg p-6 border border-purple-500/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-discord-text">Ascension Perks</h3>
            <div className="flex items-center gap-2 text-sm">
              <Crown className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Level {selectedSkill.ascensionLevel || 0}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-discord-muted">Ascension Points:</span>
              <span className="text-white">{selectedSkill.ascensionPoints || 0}/{selectedSkill.maxAscensionPoints || 8}</span>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {ascensionPerks.slice(0, 3).map((perk) => (
                <button
                  key={perk.id}
                  onClick={() => activateAscensionPerk(perk.id)}
                  disabled={(selectedSkill.ascensionPoints || 0) < perk.cost}
                  className="p-3 bg-discord-dark rounded border border-gray-600 hover:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-left transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-discord-text text-sm">{perk.name}</span>
                    <span className="text-xs text-purple-400">{perk.cost} pts</span>
                  </div>
                  <p className="text-xs text-discord-muted">{perk.description}</p>
                  <div className="text-xs text-green-400 mt-1">{perk.effect}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}