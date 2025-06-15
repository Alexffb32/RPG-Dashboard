import React, { useState } from 'react'
import { Crown, Users, Trophy, Settings, Plus, Search, Shield, Sword, Star, Calendar, Gift, MessageSquare, Coins, Package, Ban, RefreshCw, Zap, Home, Swords, Building, Wrench, MapPin, Clock, Hammer, Target } from 'lucide-react'

type GuildRank = 'Soldier' | 'Officer' | 'Deputy' | 'Leader'

interface GuildMember {
  id: string
  name: string
  level: number
  class: string
  rank: GuildRank
  lastActive: string
  contribution: number
  avatar: string
  isTradeLocked?: boolean
}

interface GuildPermissions {
  depositToStockpile: boolean
  disbandGuild: boolean
  updateDescription: boolean
  manageApplications: boolean
  changeRank: boolean
  changeBackgroundIcon: boolean
  kickMembers: boolean
  updateSettings: boolean
  scheduleRaid: boolean
  generateChallenges: boolean
  refreshChallenge: boolean
  createAnnouncements: boolean
  deleteAnnouncements: boolean
  createGuildHall: boolean
  addHallComponent: boolean
  removeHallComponent: boolean
  repairHallComponent: boolean
  activateEnergizingPool: boolean
  startConquests: boolean
  updateGuildTag: boolean
  banishGuild: boolean
}

interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  marksReward: number
  timeLimit: string
  completed: boolean
  participants: number
  maxParticipants: number
}

interface Raid {
  id: string
  name: string
  difficulty: 'Normal' | 'Hard' | 'Nightmare'
  marksCost: number
  participants: number
  maxParticipants: number
  rewards: string[]
  scheduledTime?: string
  status: 'Scheduled' | 'Active' | 'Completed'
}

interface GuildActivity {
  id: string
  type: 'join' | 'promotion' | 'achievement' | 'donation' | 'quest'
  member: string
  description: string
  timestamp: string
  icon: string
}

interface GuildHallComponent {
  id: string
  name: string
  description: string
  type: 'foundation' | 'slot' | 'teleportation_beacon' | 'mission_table' | 'raid_planner' | 'unity_seal' | 'energizing_pool' | 'conquest_banner'
  guildLevelRequired: number
  markCost: number
  resources: {
    [key: string]: number
  }
  condition: number // 0-100, represents decay percentage
  isActive: boolean
  lastRepaired?: string
  repairTimeRemaining?: string
  needsMaintenance: boolean
  canRepair: boolean
}

interface GuildHall {
  isBuilt: boolean
  foundationBuilt: boolean
  totalSlots: number
  usedSlots: number
  components: GuildHallComponent[]
  energizingPoolActive: boolean
  energizingPoolTimeRemaining?: string
}

const Guild: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'activities' | 'settings' | 'challenges' | 'raids' | 'stockpile' | 'guildhall'>('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMember, setSelectedMember] = useState<GuildMember | null>(null)

  // Helper functions
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Easy': case 'Normal': return 'text-green-400'
      case 'Medium': case 'Hard': return 'text-yellow-400'
      case 'Nightmare': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getMaxChallenges = (guildLevel: number): number => {
    if (guildLevel >= 100) return 10
    if (guildLevel >= 85) return 9
    if (guildLevel >= 60) return 8
    if (guildLevel >= 40) return 7
    if (guildLevel >= 25) return 6
    return 5
  }

  const getMaxRefreshes = (guildLevel: number): number => {
    if (guildLevel >= 100) return 4
    if (guildLevel >= 75) return 3
    if (guildLevel >= 50) return 2
    return 1
  }

  const guildInfo = {
    name: 'Straw Hats',
    description: 'A crew of dreamers, fighters, and misfits sailing toward freedom! We value loyalty, adventure, and having a good time. Join us if you have the heart of a pirate and the spirit of a king!',
    level: 19,
    experience: 687,
    expNeeded: 113,
    members: 4,
    maxMembers: 20, // Based on level 19 (between 1-35)
    ranking: 317,
    marks: 10,
    totalContribution: 125000,
    founded: '2023-08-15',
    leader: 'Alexffb',
    banished: false,
    stockpile: {
      wood: 1250,
      stone: 890,
      iron: 340,
      gold: 15600
    },
    seasonPosition: 317,
    seasonStats: {
      raidsCompleted: 12,
      challengesCompleted: 28,
      seasonExperience: 4250,
      daysRemaining: 23
    },
    challengeLimits: {
      maxChallenges: getMaxChallenges(19),
      maxRefreshes: getMaxRefreshes(19),
      refreshesUsed: 1
    },
    guildHall: {
      isBuilt: true,
      foundationBuilt: true,
      totalSlots: 3,
      usedSlots: 2,
      components: [
        {
          id: 'foundation',
          name: 'Foundation',
          description: 'The foundation is needed to build the guild hall.',
          type: 'foundation',
          guildLevelRequired: 10,
          markCost: 25,
          resources: {
            'Oak Logs': 25000,
            'Willow Logs': 20000,
            'Mystical Logs': 10000,
            'Copper Bars': 10000,
            'Mercury Bars': 10000,
            'Uranium Bars': 5000,
            'Mystic Bars': 5000
          },
          condition: 100,
          isActive: true,
          needsMaintenance: false,
          canRepair: false
        },
        {
          id: 'mission_table',
          name: 'Mission Table',
          description: 'Automatically generates guild challenges without manual setup.',
          type: 'mission_table',
          guildLevelRequired: 25,
          markCost: 20,
          resources: {
            'Oak Logs': 15000,
            'Birch Logs': 15000,
            'Banyan Logs': 15000,
            'Willow Logs': 20000,
            'Mahogany Logs': 15000,
            'Lead Bars': 15000,
            'Steel Bars': 15000
          },
          condition: 65,
          isActive: true,
          needsMaintenance: true,
          canRepair: true
        },
        {
          id: 'unity_seal',
          name: 'Unity Seal',
          description: 'Allows guilds to create a custom 3-letter guild tag displayed next to member usernames.',
          type: 'unity_seal',
          guildLevelRequired: 15,
          markCost: 15,
          resources: {
            'Oak Logs': 15000,
            'Birch Logs': 15000,
            'Mahogany Logs': 15000,
            'Copper Bars': 15000,
            'Steel Bars': 15000,
            'Chromite Bars': 15000
          },
          condition: 45,
          isActive: true,
          needsMaintenance: true,
          canRepair: true
        }
      ],
      energizingPoolActive: false,
      energizingPoolTimeRemaining: undefined
    }
  }

  const guildMembers: GuildMember[] = [
    {
      id: '1',
      name: 'Alexffb',
      level: 1048,
      class: 'Strategist',
      rank: 'Leader',
      lastActive: '2 minutes ago',
      contribution: 15420,
      avatar: '🛡️'
    },
    {
      id: '2',
      name: 'Strawhat',
      level: 283,
      class: 'Rogue',
      rank: 'Deputy',
      lastActive: '1 hour ago',
      contribution: 12850,
      avatar: '🗡️'
    },
    {
      id: '3',
      name: 'Kelling',
      level: 598,
      class: 'Mage',
      rank: 'Officer',
      lastActive: '3 hours ago',
      contribution: 11200,
      avatar: '✨'
    },
    {
      id: '4',
      name: 'Eddieward',
      level: 385,
      class: 'Warrior',
      rank: 'Soldier',
      lastActive: '5 hours ago',
      contribution: 9800,
      avatar: '🔥'
    }
  ]

  const mockChallenges: Challenge[] = [
    {
      id: '1',
      name: 'Resource Collection',
      description: 'Contribute 500 Wood to the guild stockpile',
      difficulty: 'Easy',
      reward: 1,
      requirement: 500,
      progress: 320,
      timeRemaining: '18h 32m',
      participants: [
        { name: 'Alexffb', contributed: 150 },
        { name: 'Strawhat', contributed: 100 },
        { name: 'Kelling', contributed: 70 }
      ],
      guildExpReward: 50,
      individualExpPerItem: 2
    },
    {
      id: '2',
      name: 'Monster Hunt',
      description: 'Defeat 25 Elite Monsters as a guild',
      difficulty: 'Medium',
      reward: 1,
      requirement: 25,
      progress: 25,
      timeRemaining: 'Completed',
      participants: [
        { name: 'Alexffb', contributed: 8 },
        { name: 'Strawhat', contributed: 7 },
        { name: 'Kelling', contributed: 6 },
        { name: 'Eddieward', contributed: 4 }
      ],
      guildExpReward: 100,
      individualExpPerItem: 2
    },
    {
      id: '3',
      name: 'Dungeon Mastery',
      description: 'Complete 15 Dungeon runs collectively',
      difficulty: 'Hard',
      reward: 1,
      requirement: 15,
      progress: 8,
      timeRemaining: '12h 45m',
      participants: [
        { name: 'Alexffb', contributed: 3 },
        { name: 'Kelling', contributed: 3 },
        { name: 'Eddieward', contributed: 2 }
      ],
      guildExpReward: 150,
      individualExpPerItem: 2
    }
  ]

  const mockRaids: Raid[] = [
    {
      id: '1',
      name: 'Dragon\'s Lair Assault',
      description: 'A dangerous raid against the ancient dragon. Higher tier raid with maximum rewards.',
      difficulty: 'Extreme',
      cost: 15,
      duration: '2 hours',
      participants: 3,
      maxParticipants: 8,
      status: 'Scheduled',
      scheduledTime: '2024-01-15 20:00',
      timeRemaining: '1h 23m',
      rewards: {
        guildExp: 500,
        combatExpPerParticipant: 150,
        guildMasteryExpPerParticipant: 75,
        expPerSecond: 0.42
      },
      organizer: 'Alexffb',
      joinedMembers: ['Alexffb', 'Strawhat', 'Kelling']
    },
    {
      id: '2',
      name: 'Goblin Camp Raid',
      description: 'Clear out the goblin encampment. Quick raid with decent rewards.',
      difficulty: 'Easy',
      cost: 5,
      duration: '30 minutes',
      participants: 4,
      maxParticipants: 6,
      status: 'Active',
      scheduledTime: '2024-01-15 18:30',
      timeRemaining: 'In Progress (12m left)',
      rewards: {
        guildExp: 100,
        combatExpPerParticipant: 50,
        guildMasteryExpPerParticipant: 25,
        expPerSecond: 0.11
      },
      organizer: 'Strawhat',
      joinedMembers: ['Strawhat', 'Kelling', 'Eddieward', 'Alexffb']
    },
    {
      id: '3',
      name: 'Undead Fortress',
      description: 'Assault the fortress of the undead lord. Medium tier raid with balanced rewards.',
      difficulty: 'Hard',
      cost: 12,
      duration: '90 minutes',
      participants: 0,
      maxParticipants: 10,
      status: 'Available',
      scheduledTime: null,
      timeRemaining: null,
      rewards: {
        guildExp: 300,
        combatExpPerParticipant: 100,
        guildMasteryExpPerParticipant: 50,
        expPerSecond: 0.28
      },
      organizer: null,
      joinedMembers: []
    }
  ]

  const guildActivities: GuildActivity[] = [
    {
      id: '1',
      type: 'achievement',
      member: 'Alexffb',
      description: 'completed the Dragon Slayer quest',
      timestamp: '2 hours ago',
      icon: '🐉'
    },
    {
      id: '2',
      type: 'join',
      member: 'NewWarrior',
      description: 'joined the guild',
      timestamp: '4 hours ago',
      icon: '👋'
    },
    {
      id: '3',
      type: 'donation',
      member: 'ShadowBlade',
      description: 'donated 5000 gold to guild treasury',
      timestamp: '6 hours ago',
      icon: '💰'
    },
    {
      id: '4',
      type: 'promotion',
      member: 'MysticHealer',
      description: 'was promoted to Officer',
      timestamp: '1 day ago',
      icon: '⭐'
    }
  ]

  const getRankColor = (rank: GuildRank) => {
    switch (rank) {
      case 'Leader': return 'text-yellow-400'
      case 'Deputy': return 'text-purple-400'
      case 'Officer': return 'text-blue-400'
      case 'Soldier': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  const getRankIcon = (rank: GuildRank) => {
    switch (rank) {
      case 'Leader': return <Crown className="w-4 h-4" />
      case 'Deputy': return <Star className="w-4 h-4" />
      case 'Officer': return <Shield className="w-4 h-4" />
      case 'Soldier': return <Users className="w-4 h-4" />
      default: return <Users className="w-4 h-4" />
    }
  }

  const getPermissions = (rank: GuildRank): GuildPermissions => {
    const permissions: Record<GuildRank, GuildPermissions> = {
      'Soldier': {
        depositToStockpile: true,
        disbandGuild: false,
        updateDescription: false,
        manageApplications: false,
        changeRank: false,
        changeBackgroundIcon: false,
        kickMembers: false,
        updateSettings: false,
        scheduleRaid: false,
        generateChallenges: false,
        refreshChallenge: false,
        createAnnouncements: false,
        deleteAnnouncements: false,
        createGuildHall: false,
        addHallComponent: false,
        removeHallComponent: false,
        repairHallComponent: false,
        activateEnergizingPool: false,
        startConquests: false,
        updateGuildTag: false,
        banishGuild: false
      },
      'Officer': {
        depositToStockpile: true,
        disbandGuild: false,
        updateDescription: false,
        manageApplications: true,
        changeRank: false,
        changeBackgroundIcon: false,
        kickMembers: true,
        updateSettings: false,
        scheduleRaid: true,
        generateChallenges: true,
        refreshChallenge: true,
        createAnnouncements: false,
        deleteAnnouncements: false,
        createGuildHall: false,
        addHallComponent: false,
        removeHallComponent: false,
        repairHallComponent: false,
        activateEnergizingPool: false,
        startConquests: false,
        updateGuildTag: false,
        banishGuild: false
      },
      'Deputy': {
        depositToStockpile: true,
        disbandGuild: false,
        updateDescription: true,
        manageApplications: true,
        changeRank: true,
        changeBackgroundIcon: true,
        kickMembers: true,
        updateSettings: true,
        scheduleRaid: true,
        generateChallenges: true,
        refreshChallenge: true,
        createAnnouncements: true,
        deleteAnnouncements: true,
        createGuildHall: true,
        addHallComponent: true,
        removeHallComponent: true,
        repairHallComponent: true,
        activateEnergizingPool: true,
        startConquests: true,
        updateGuildTag: true,
        banishGuild: false
      },
      'Leader': {
        depositToStockpile: true,
        disbandGuild: true,
        updateDescription: true,
        manageApplications: true,
        changeRank: true,
        changeBackgroundIcon: true,
        kickMembers: true,
        updateSettings: true,
        scheduleRaid: true,
        generateChallenges: true,
        refreshChallenge: true,
        createAnnouncements: true,
        deleteAnnouncements: true,
        createGuildHall: true,
        addHallComponent: true,
        removeHallComponent: true,
        repairHallComponent: true,
        activateEnergizingPool: true,
        startConquests: true,
        updateGuildTag: true,
        banishGuild: true
      }
    }
    return permissions[rank]
  }

  const getMemberLimit = (guildLevel: number): number => {
    if (guildLevel >= 100) return 25
    if (guildLevel >= 85) return 24
    if (guildLevel >= 70) return 23
    if (guildLevel >= 60) return 22
    if (guildLevel >= 35) return 21
    return 20
  }

  // Functions moved to top of component

  const getRaidExpMultiplier = (participants: number): number => {
    return Math.max(1, participants * 0.2) // More participants = more exp
  }

  const getSeasonReward = (position: number): number => {
    return position <= 25 ? 20 : 0
  }

  // Helper function to get component condition color
  const getConditionColor = (condition: number): string => {
    if (condition >= 80) return 'text-green-400'
    if (condition >= 50) return 'text-yellow-400'
    if (condition >= 20) return 'text-orange-400'
    return 'text-red-400'
  }

  // Helper function to get component status
  const getComponentStatus = (component: GuildHallComponent): string => {
    if (!component.isActive) return 'Inactive'
    if (component.repairTimeRemaining) return 'Under Repair'
    if (component.condition === 0) return 'Broken'
    if (component.needsMaintenance) return 'Needs Maintenance'
    return 'Active'
  }

  // Helper function to calculate repair time based on condition
  const getRepairTime = (condition: number): string => {
    const baseHours = 24
    const repairHours = Math.ceil(baseHours * (1 - condition / 100))
    if (repairHours < 1) return '30 minutes'
    if (repairHours === 1) return '1 hour'
    return `${repairHours} hours`
  }

  // Helper function to get available components for building
  const getAvailableComponents = (): GuildHallComponent[] => {
    const availableTypes = [
      {
        type: 'slot' as const,
        name: 'Additional Slot',
        description: 'Adds an additional slot for guild components.',
        guildLevelRequired: 1,
        markCost: 20,
        resources: {
          'Mahogany Logs': 30000,
          'Mystical Logs': 40000,
          'Chromite Bars': 40000,
          'Mystic Bars': 30000
        }
      },
      {
        type: 'teleportation_beacon' as const,
        name: 'Teleportation Beacon',
        description: 'Allows guild members to teleport to the Guild Hall at reduced cost.',
        guildLevelRequired: 60,
        markCost: 20,
        resources: {
          'Yew Logs': 30000,
          'Banyan Logs': 30000,
          'Tin Bars': 40000,
          'Lead Bars': 30000,
          'Chromite Bars': 20000,
          'Mystic Bars': 20000
        }
      },
      {
        type: 'raid_planner' as const,
        name: 'Raid Planner',
        description: 'Allows scheduling up to 10 raids in advance, up to a month ahead.',
        guildLevelRequired: 40,
        markCost: 20,
        resources: {
          'Oak Logs': 10000,
          'Spruce Logs': 10000,
          'Maple Logs': 20000,
          'Mystical Logs': 25000,
          'Iron Bars': 25000,
          'Chromite Bars': 20000
        }
      },
      {
        type: 'energizing_pool' as const,
        name: 'Energizing Pool',
        description: 'Provides temporary boosts to all guild members for 3 hours when activated.',
        guildLevelRequired: 70,
        markCost: 20,
        resources: {
          'Spruce Logs': 50000,
          'Maple Logs': 50000,
          'Mystical Logs': 30000,
          'Iron Bars': 30000,
          'Mercury Bars': 30000,
          'Uranium Bars': 20000
        }
      },
      {
        type: 'conquest_banner' as const,
        name: 'Conquest Banner',
        description: 'Required for the guild to undertake Conquests.',
        guildLevelRequired: 50,
        markCost: 35,
        resources: {
          'Yew Logs': 20000,
          'Maple Logs': 15000,
          'Mystical Logs': 25000,
          'Copper Bars': 20000,
          'Steel Bars': 20000,
          'Uranium Bars': 20000,
          'Mystic Bars': 15000
        }
      }
    ]

    return availableTypes
      .filter(comp => guildInfo.level >= comp.guildLevelRequired)
      .filter(comp => !guildInfo.guildHall.components.some(existing => existing.type === comp.type))
      .map(comp => ({
        id: comp.type,
        name: comp.name,
        description: comp.description,
        type: comp.type,
        guildLevelRequired: comp.guildLevelRequired,
        markCost: comp.markCost,
        resources: comp.resources,
        condition: 100,
        isActive: false,
        needsMaintenance: false,
        canRepair: false
      }))
  }

  // Current user rank for permission checking
  const currentUserRank: GuildRank = 'Leader' // This would come from user context
  const currentPermissions = getPermissions(currentUserRank)

  const filteredMembers = guildMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.class.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Guild Header */}
      <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-discord-blurple rounded-full flex items-center justify-center text-3xl">
            👑
          </div>
          <div>
            <h2 className="text-2xl font-bold text-discord-text">{guildInfo.name}</h2>
            <p className="text-discord-muted">{guildInfo.description}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-discord-muted">
              <span>Founded: {new Date(guildInfo.founded).toLocaleDateString()}</span>
              <span>Leader: {guildInfo.leader}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-discord-light rounded-lg p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-discord-blurple" />
            <div className="text-sm text-discord-muted">Members</div>
            <div className="text-xl font-bold text-discord-text">{guildInfo.members}/{guildInfo.maxMembers}</div>
          </div>
          <div className="bg-discord-light rounded-lg p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-sm text-discord-muted">Guild Level</div>
            <div className="text-xl font-bold text-discord-text">Lv. {guildInfo.level}</div>
          </div>
          <div className="bg-discord-light rounded-lg p-4 text-center">
            <Coins className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <div className="text-sm text-discord-muted">Marks</div>
            <div className="text-xl font-bold text-discord-text">{guildInfo.marks}</div>
          </div>
          <div className="bg-discord-light rounded-lg p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <div className="text-sm text-discord-muted">Season Position</div>
            <div className="text-xl font-bold text-discord-text">{guildInfo.seasonPosition}</div>
          </div>
          <div className="bg-discord-light rounded-lg p-4 text-center">
            <Gift className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="text-sm text-discord-muted">Treasury</div>
            <div className="text-xl font-bold text-discord-text">{guildInfo.totalContribution.toLocaleString()}</div>
          </div>
        </div>
        
        {/* Guild Experience Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-discord-muted mb-2">
            <span>Guild Experience</span>
            <span>{guildInfo.experience} / {guildInfo.experience + guildInfo.expNeeded} EXP</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(guildInfo.experience / (guildInfo.experience + guildInfo.expNeeded)) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-discord-muted mt-1">
            {guildInfo.expNeeded} EXP needed for level {guildInfo.level + 1}
          </p>
        </div>
        
        {/* Season & Challenge Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50">
            <h4 className="font-semibold text-discord-text mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-orange-400" />
              Season Progress
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-discord-muted">Season EXP:</span>
                <span className="text-discord-text font-semibold">{guildInfo.seasonStats.seasonExperience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-discord-muted">Raids Completed:</span>
                <span className="text-discord-text">{guildInfo.seasonStats.raidsCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-discord-muted">Challenges Done:</span>
                <span className="text-discord-text">{guildInfo.seasonStats.challengesCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-discord-muted">Days Remaining:</span>
                <span className="text-yellow-400 font-semibold">{guildInfo.seasonStats.daysRemaining}</span>
              </div>
              <div className="mt-2 p-2 bg-orange-900/20 border border-orange-500/50 rounded">
                <div className="text-xs text-orange-200">
                  Season Reward: <span className="font-semibold">{getSeasonReward(guildInfo.seasonPosition)} Marks</span>
                  {guildInfo.seasonPosition > 25 && <span className="text-red-300"> (Top 25 required)</span>}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50">
            <h4 className="font-semibold text-discord-text mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-green-400" />
              Challenge Limits
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-discord-muted">Max Challenges:</span>
                <span className="text-discord-text font-semibold">{guildInfo.challengeLimits.maxChallenges}/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-discord-muted">Max Refreshes:</span>
                <span className="text-discord-text">{guildInfo.challengeLimits.maxRefreshes}/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-discord-muted">Refreshes Used:</span>
                <span className={`font-semibold ${
                  guildInfo.challengeLimits.refreshesUsed >= guildInfo.challengeLimits.maxRefreshes 
                    ? 'text-red-400' : 'text-green-400'
                }`}>
                  {guildInfo.challengeLimits.refreshesUsed}/{guildInfo.challengeLimits.maxRefreshes}
                </span>
              </div>
              <div className="mt-2 p-2 bg-blue-900/20 border border-blue-500/50 rounded">
                <div className="text-xs text-blue-200">
                  Active Challenges: <span className="font-semibold">{mockChallenges.filter(c => c.timeRemaining !== 'Completed').length}/{guildInfo.challengeLimits.maxChallenges}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guild Benefits */}
      <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
        <h3 className="text-xl font-bold text-discord-text mb-4">Guild Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-discord-light rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Sword className="w-5 h-5 text-red-400" />
              <span className="font-semibold text-discord-text">Combat Bonus</span>
            </div>
            <p className="text-sm text-discord-muted">+15% damage in guild raids</p>
          </div>
          <div className="bg-discord-light rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-discord-text">XP Boost</span>
            </div>
            <p className="text-sm text-discord-muted">+10% experience gain</p>
          </div>
          <div className="bg-discord-light rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Gift className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-discord-text">Daily Rewards</span>
            </div>
            <p className="text-sm text-discord-muted">Bonus gold and items</p>
          </div>
          <div className="bg-discord-light rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-discord-text">Guild Chat</span>
            </div>
            <p className="text-sm text-discord-muted">Private communication channel</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMembers = () => (
    <div className="space-y-6">
      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-discord-muted" />
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-discord-dark border border-gray-600 rounded-lg text-discord-text placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-discord-blurple text-white rounded-lg hover:bg-discord-blurple/80 transition-colors">
          <Plus className="w-4 h-4" />
          Invite Member
        </button>
      </div>

      {/* Members List */}
      <div className="bg-discord-dark rounded-lg border border-gray-600/50 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-discord-light border-b border-gray-600/50 text-sm font-semibold text-discord-muted">
          <div className="col-span-4">Member</div>
          <div className="col-span-2">Level</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Contribution</div>
          <div className="col-span-2">Last Active</div>
        </div>
        
        {filteredMembers.map((member) => (
          <div key={member.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-600/50 hover:bg-discord-light/50 transition-colors">
            <div className="col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-discord-blurple rounded-full flex items-center justify-center text-lg">
                {member.avatar}
              </div>
              <div>
                <div className="font-semibold text-discord-text">{member.name}</div>
                <div className="text-sm text-discord-muted">{member.class}</div>
              </div>
            </div>
            <div className="col-span-2 flex items-center text-discord-text font-semibold">
              {member.level}
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <span className={getRankColor(member.rank)}>
                {getRankIcon(member.rank)}
              </span>
              <span className={`font-semibold ${getRankColor(member.rank)}`}>
                {member.rank}
              </span>
            </div>
            <div className="col-span-2 flex items-center text-discord-text font-semibold">
              {member.contribution.toLocaleString()}
            </div>
            <div className="col-span-2 flex items-center text-discord-muted">
              {member.lastActive}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderChallenges = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-discord-text">Guild Challenges</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-purple-400">
            <Coins className="w-4 h-4" />
            <span className="font-semibold">{guildInfo.marks} Marks</span>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Generate Challenge (Free)
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         {mockChallenges.map((challenge) => (
           <div key={challenge.id} className="bg-discord-dark rounded-lg p-4 border border-gray-600/50">
             <div className="flex items-center justify-between mb-3">
               <h4 className="font-semibold text-discord-text">{challenge.name}</h4>
               <div className="flex items-center gap-2">
                 <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                   {challenge.difficulty}
                 </span>
                 {challenge.timeRemaining === 'Completed' && (
                   <span className="px-2 py-1 rounded text-xs font-semibold bg-green-600 text-green-100">
                     Completed
                   </span>
                 )}
               </div>
             </div>
             <p className="text-sm text-discord-muted mb-3">{challenge.description}</p>
             
             <div className="space-y-3 text-sm">
               <div className="flex justify-between">
                 <span className="text-discord-muted">Time Remaining:</span>
                 <span className={`font-semibold ${
                   challenge.timeRemaining === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                 }`}>
                   {challenge.timeRemaining}
                 </span>
               </div>
               
               <div className="flex justify-between">
                 <span className="text-discord-muted">Progress:</span>
                 <span className="text-discord-text font-semibold">{challenge.progress}/{challenge.requirement}</span>
               </div>
               
               <div className="w-full bg-gray-700 rounded-full h-3">
                 <div 
                   className={`h-3 rounded-full transition-all duration-300 ${
                     challenge.progress >= challenge.requirement ? 'bg-green-400' : 'bg-blue-400'
                   }`}
                   style={{ width: `${Math.min((challenge.progress / challenge.requirement) * 100, 100)}%` }}
                 ></div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-600/50">
                 <div>
                   <span className="text-discord-muted">Guild EXP Reward:</span>
                   <div className="text-yellow-400 font-semibold">{challenge.guildExpReward} EXP</div>
                 </div>
                 <div>
                   <span className="text-discord-muted">Individual EXP:</span>
                   <div className="text-blue-400 font-semibold">{challenge.individualExpPerItem} per item</div>
                 </div>
               </div>
               
               {challenge.participants.length > 0 && (
                 <div className="pt-2 border-t border-gray-600/50">
                   <span className="text-discord-muted text-xs">Top Contributors:</span>
                   <div className="mt-1 space-y-1">
                     {challenge.participants.slice(0, 3).map((participant, index) => (
                       <div key={index} className="flex justify-between text-xs">
                         <span className="text-discord-text">{participant.name}</span>
                         <span className="text-green-400">{participant.contributed} items</span>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
             </div>
             
             <div className="flex gap-2 mt-4">
               {challenge.progress >= challenge.requirement ? (
                 <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                   Claim {challenge.reward} Mark{challenge.reward !== 1 ? 's' : ''}
                 </button>
               ) : (
                 <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                   Contribute
                 </button>
               )}
               
               {getPermissions(currentUserRank).canRefreshChallenges && 
                challenge.timeRemaining !== 'Completed' && 
                guildInfo.challengeLimits.refreshesUsed < guildInfo.challengeLimits.maxRefreshes && (
                 <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                   Refresh
                 </button>
               )}
             </div>
           </div>
         ))}
       </div>
      
      <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50">
        <h4 className="font-semibold text-discord-text mb-2">Challenge Actions</h4>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
            Refresh Challenge (4 Marks)
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Completed
          </button>
        </div>
      </div>
    </div>
  )

  const renderRaids = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-discord-text">Guild Raids</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-purple-400">
            <Coins className="w-4 h-4" />
            <span className="font-semibold">{guildInfo.marks} Marks</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mockRaids.map((raid) => (
          <div key={raid.id} className="bg-discord-dark rounded-lg p-4 border border-gray-600/50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-discord-text">{raid.name}</h4>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  raid.status === 'Active' ? 'bg-green-600 text-green-100' :
                  raid.status === 'Scheduled' ? 'bg-yellow-600 text-yellow-100' :
                  raid.status === 'Completed' ? 'bg-blue-600 text-blue-100' :
                  'bg-gray-600 text-gray-100'
                }`}>
                  {raid.status}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                   raid.tier === 'High' ? 'bg-red-600 text-red-100' :
                   raid.tier === 'Medium' ? 'bg-orange-600 text-orange-100' :
                   'bg-green-600 text-green-100'
                 }`}>
                   {raid.tier} Tier
                 </span>
              </div>
            </div>
            <p className="text-sm text-discord-muted mb-3">{raid.description}</p>
            
            <div className="space-y-3 text-sm">
              {raid.status === 'Scheduled' && raid.timeRemaining && (
                <div className="flex justify-between">
                  <span className="text-discord-muted">Starts In:</span>
                  <span className="text-yellow-400 font-semibold">{raid.timeRemaining}</span>
                </div>
              )}
              
              {raid.status === 'Active' && raid.timeRemaining && (
                <div className="flex justify-between">
                  <span className="text-discord-muted">Time Remaining:</span>
                  <span className="text-green-400 font-semibold">{raid.timeRemaining}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-discord-muted">Duration:</span>
                <span className="text-discord-text">{raid.duration}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-discord-muted">Cost:</span>
                <span className="text-red-400 font-semibold">{raid.cost} Marks</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-discord-muted">Organizer:</span>
                <span className="text-discord-text">{raid.organizer}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-600/50">
                <div>
                  <span className="text-discord-muted">Guild EXP:</span>
                  <div className="text-yellow-400 font-semibold">{raid.rewards.guildExp} EXP</div>
                </div>
                <div>
                  <span className="text-discord-muted">Combat EXP:</span>
                  <div className="text-red-400 font-semibold">{raid.rewards.combatExpPerParticipant} EXP</div>
                </div>
                <div>
                  <span className="text-discord-muted">Mastery EXP:</span>
                  <div className="text-blue-400 font-semibold">{raid.rewards.guildMasteryExpPerParticipant} EXP</div>
                </div>
                <div>
                  <span className="text-discord-muted">EXP/Second:</span>
                  <div className="text-green-400 font-semibold">{raid.rewards.expPerSecond}</div>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-600/50">
                <div className="flex justify-between mb-2">
                  <span className="text-discord-muted">Participants:</span>
                  <span className="text-discord-text font-semibold">{raid.joinedMembers.length}/{raid.maxParticipants}</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(raid.joinedMembers.length / raid.maxParticipants) * 100}%` }}
                  ></div>
                </div>
                
                {raid.joinedMembers.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-discord-muted text-xs">Joined Members:</span>
                    <div className="flex flex-wrap gap-1">
                      {raid.joinedMembers.slice(0, 6).map((member, index) => (
                        <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded">
                          {member}
                        </span>
                      ))}
                      {raid.joinedMembers.length > 6 && (
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded text-discord-muted">
                          +{raid.joinedMembers.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              {raid.status === 'Scheduled' && (
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Join Raid
                </button>
              )}
              
              {raid.status === 'Active' && (
                <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Leave Raid
                </button>
              )}
              
              {raid.status === 'Completed' && (
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50" disabled>
                  Completed
                </button>
              )}
              
              {getPermissions(currentUserRank).canOrganizeRaids && raid.status !== 'Completed' && (
                 <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                   Manage
                 </button>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderStockpile = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-discord-text">Guild Stockpile</h3>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Contribute Resources
        </button>
      </div>
      
      <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          <h4 className="font-semibold text-yellow-400">Important Notice</h4>
        </div>
        <p className="text-yellow-200 text-sm">
          Resources contributed to the stockpile cannot be withdrawn. They are used exclusively for guild hall construction and maintenance.
          {guildInfo.banished && " This guild is banished - only trade-locked characters can contribute."}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50 text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-amber-600 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm text-discord-muted">Wood</div>
          <div className="text-xl font-bold text-discord-text">{guildInfo.stockpile.wood.toLocaleString()}</div>
        </div>
        <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50 text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm text-discord-muted">Stone</div>
          <div className="text-xl font-bold text-discord-text">{guildInfo.stockpile.stone.toLocaleString()}</div>
        </div>
        <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50 text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-slate-600 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm text-discord-muted">Iron</div>
          <div className="text-xl font-bold text-discord-text">{guildInfo.stockpile.iron.toLocaleString()}</div>
        </div>
        <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50 text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-yellow-600 rounded-lg flex items-center justify-center">
            <Coins className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm text-discord-muted">Gold</div>
          <div className="text-xl font-bold text-discord-text">{guildInfo.stockpile.gold.toLocaleString()}</div>
        </div>
      </div>
      
      <div className="bg-discord-dark rounded-lg p-4 border border-gray-600/50">
        <h4 className="font-semibold text-discord-text mb-3">Recent Contributions</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-discord-text">DragonSlayer contributed 500 Wood</span>
            <span className="text-discord-muted">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-discord-text">MysticMage contributed 200 Stone</span>
            <span className="text-discord-muted">4 hours ago</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-discord-text">ShadowRogue contributed 100 Iron</span>
            <span className="text-discord-muted">6 hours ago</span>
          </div>
        </div>
      </div>
      
      {guildInfo.banished && (
        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-red-400" />
            <h4 className="font-semibold text-red-400">Banished Guild</h4>
          </div>
          <p className="text-red-200 text-sm">
            This guild has been banished. Only trade-locked characters (Banished, Cursed) can join and contribute to the stockpile.
          </p>
        </div>
      )}
    </div>
  )

  const renderActivities = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-discord-text">Recent Activities</h3>
      <div className="bg-discord-dark rounded-lg border border-gray-600/50">
        {guildActivities.map((activity) => (
          <div key={activity.id} className="p-4 border-b border-gray-600/50 last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-discord-light rounded-full flex items-center justify-center text-lg">
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="text-discord-text">
                  <span className="font-semibold">{activity.member}</span>
                  <span className="text-discord-muted"> {activity.description}</span>
                </div>
                <div className="text-sm text-discord-muted flex items-center gap-2 mt-1">
                  <Calendar className="w-3 h-3" />
                  {activity.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderGuildHall = () => {
    if (!guildInfo.guildHall.isBuilt) {
      return (
        <div className="space-y-6">
          <div className="text-center py-12">
            <Building className="w-16 h-16 mx-auto text-discord-muted mb-4" />
            <h3 className="text-xl font-bold text-discord-text mb-2">No Guild Hall</h3>
            <p className="text-discord-muted mb-6">Your guild needs to be at least level 10 to construct a Guild Hall.</p>
            {guildInfo.level >= 10 && currentPermissions.createGuildHall && (
              <button className="px-6 py-3 bg-discord-blurple text-white rounded-lg hover:bg-blue-600 transition-colors">
                Build Guild Hall (25 Marks)
              </button>
            )}
            {guildInfo.level < 10 && (
              <p className="text-yellow-400">Guild must reach level 10 first (Current: Level {guildInfo.level})</p>
            )}
          </div>
        </div>
      )
    }

    const availableComponents = getAvailableComponents()

    return (
      <div className="space-y-6">
        {/* Guild Hall Header */}
        <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Building className="w-8 h-8 text-discord-blurple" />
              <div>
                <h3 className="text-xl font-bold text-discord-text">Guild Hall</h3>
                <p className="text-discord-muted">Manage your guild's modular components and facilities</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-discord-muted">Slots Used</div>
              <div className="text-lg font-bold text-discord-text">
                {guildInfo.guildHall.usedSlots} / {guildInfo.guildHall.totalSlots}
              </div>
            </div>
          </div>

          {/* Energizing Pool Status */}
          {guildInfo.guildHall.components.some(c => c.type === 'energizing_pool') && (
            <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Energizing Pool</h4>
                    <p className="text-sm text-blue-200">
                      {guildInfo.guildHall.energizingPoolActive 
                        ? `Active - ${guildInfo.guildHall.energizingPoolTimeRemaining} remaining`
                        : 'Inactive - Ready to activate'}
                    </p>
                  </div>
                </div>
                {currentPermissions.activateEnergizingPool && !guildInfo.guildHall.energizingPoolActive && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Activate (5 Marks)
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Current Components */}
        <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
          <h4 className="text-lg font-semibold text-discord-text mb-4">Installed Components</h4>
          <div className="grid gap-4">
            {guildInfo.guildHall.components.map((component) => (
              <div key={component.id} className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-discord-blurple rounded-lg flex items-center justify-center">
                        {component.type === 'foundation' && <Building className="w-5 h-5 text-white" />}
                        {component.type === 'mission_table' && <Target className="w-5 h-5 text-white" />}
                        {component.type === 'unity_seal' && <Shield className="w-5 h-5 text-white" />}
                        {component.type === 'teleportation_beacon' && <MapPin className="w-5 h-5 text-white" />}
                        {component.type === 'raid_planner' && <Calendar className="w-5 h-5 text-white" />}
                        {component.type === 'energizing_pool' && <Clock className="w-5 h-5 text-white" />}
                        {component.type === 'conquest_banner' && <Swords className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <h5 className="font-semibold text-discord-text">{component.name}</h5>
                        <p className="text-sm text-discord-muted">{component.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-discord-muted">Condition:</span>
                        <span className={getConditionColor(component.condition)}>
                          {component.condition}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-discord-muted">Status:</span>
                        <span className={component.isActive ? 'text-green-400' : 'text-red-400'}>
                          {getComponentStatus(component)}
                        </span>
                      </div>
                    </div>

                    {component.condition <= 80 && component.condition > 0 && (
                      <div className="mt-2 text-sm text-yellow-400">
                        ⚠️ Repair available - Estimated time: {getRepairTime(component.condition)}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {component.canRepair && currentPermissions.repairHallComponent && (
                      <button className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm">
                        <Wrench className="w-4 h-4" />
                      </button>
                    )}
                    {component.type !== 'foundation' && currentPermissions.removeHallComponent && (
                      <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Components */}
        {availableComponents.length > 0 && (
          <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-discord-text">Available Components</h4>
              <div className="text-sm text-discord-muted">
                {guildInfo.guildHall.totalSlots - guildInfo.guildHall.usedSlots} slots available
              </div>
            </div>
            
            {guildInfo.guildHall.usedSlots >= guildInfo.guildHall.totalSlots && (
              <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">No Available Slots</span>
                </div>
                <p className="text-yellow-200 text-sm mt-1">
                  You need to build additional slots or remove existing components to add new ones.
                </p>
              </div>
            )}

            <div className="grid gap-4">
              {availableComponents.map((component) => (
                <div key={component.id} className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                          {component.type === 'slot' && <Building className="w-5 h-5 text-white" />}
                          {component.type === 'teleportation_beacon' && <MapPin className="w-5 h-5 text-white" />}
                          {component.type === 'raid_planner' && <Calendar className="w-5 h-5 text-white" />}
                          {component.type === 'energizing_pool' && <Clock className="w-5 h-5 text-white" />}
                          {component.type === 'conquest_banner' && <Swords className="w-5 h-5 text-white" />}
                        </div>
                        <div>
                          <h5 className="font-semibold text-discord-text">{component.name}</h5>
                          <p className="text-sm text-discord-muted">{component.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-discord-muted">
                        <span>Cost: {component.markCost} Marks</span>
                        <span>Level Required: {component.guildLevelRequired}</span>
                      </div>

                      <div className="mt-2">
                        <details className="text-sm">
                          <summary className="text-discord-muted cursor-pointer hover:text-discord-text">
                            View Resources Required
                          </summary>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                            {Object.entries(component.resources).map(([resource, amount]) => (
                              <div key={resource} className="flex justify-between">
                                <span className="text-discord-muted">{resource}:</span>
                                <span className="text-discord-text">{amount.toLocaleString()}</span>
                              </div>
                            ))}
                          </div>
                        </details>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {currentPermissions.addHallComponent && guildInfo.guildHall.usedSlots < guildInfo.guildHall.totalSlots && (
                        <button className="px-4 py-2 bg-discord-blurple text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                          Build
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decay Information */}
        <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
          <h4 className="text-lg font-semibold text-discord-text mb-4">Component Maintenance</h4>
          <div className="space-y-3 text-sm text-discord-muted">
            <p>• Guild components decay from 100% to 0% over 80 days</p>
            <p>• Components can be repaired when condition drops to 80% or below</p>
            <p>• Components become unavailable when condition reaches 0%</p>
            <p>• Repair time depends on current condition (lower condition = longer repair)</p>
            <p>• Foundation and Slots do not require maintenance</p>
          </div>
        </div>
      </div>
    )
  }

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-discord-text">Guild Settings</h3>
      
      <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
        <h4 className="text-lg font-semibold text-discord-text mb-4">Guild Information</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-discord-muted mb-2">Guild Name</label>
            <input
              type="text"
              value={guildInfo.name}
              className="w-full px-3 py-2 bg-discord-light border border-gray-600 rounded-lg text-discord-text focus:outline-none focus:border-discord-blurple"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-discord-muted mb-2">Description</label>
            <textarea
              value={guildInfo.description}
              rows={3}
              className="w-full px-3 py-2 bg-discord-light border border-gray-600 rounded-lg text-discord-text focus:outline-none focus:border-discord-blurple"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="bg-discord-dark rounded-lg p-6 border border-gray-600/50">
        <h4 className="text-lg font-semibold text-discord-text mb-4">Guild Permissions</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-discord-text">Allow member invitations</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-discord-text">Public guild profile</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-discord-text">Auto-accept applications</span>
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-red-400 mb-2">Danger Zone</h4>
        <p className="text-discord-muted mb-4">These actions cannot be undone.</p>
        <div className="space-y-3">
          {!guildInfo.banished && (
            <div>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors mr-2">
                Banish Guild
              </button>
              <span className="text-sm text-discord-muted">
                Restricts guild to trade-locked characters only. Cannot be undone.
              </span>
            </div>
          )}
          <div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mr-2">
              Disband Guild
            </button>
            <span className="text-sm text-discord-muted">
              Permanently deletes the guild and all its data.
            </span>
          </div>
          <div>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors mr-2">
              Leave Guild
            </button>
            <span className="text-sm text-discord-muted">
              You can only join another guild after 24 hours.
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-discord-text">Guild Management</h1>
          <Settings className="w-6 h-6 text-discord-muted" />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-discord-dark rounded-lg p-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: <Crown className="w-4 h-4" /> },
            { id: 'members', label: 'Members', icon: <Users className="w-4 h-4" /> },
            { id: 'challenges', label: 'Challenges', icon: <Target className="w-4 h-4" /> },
            { id: 'raids', label: 'Raids', icon: <Swords className="w-4 h-4" /> },
            { id: 'guildhall', label: 'Guild Hall', icon: <Building className="w-4 h-4" /> },
            { id: 'stockpile', label: 'Stockpile', icon: <Package className="w-4 h-4" /> },
            { id: 'activities', label: 'Activities', icon: <Calendar className="w-4 h-4" /> },
            { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-discord-blurple text-white'
                  : 'text-discord-muted hover:text-discord-text hover:bg-discord-light'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'members' && renderMembers()}
        {activeTab === 'challenges' && renderChallenges()}
        {activeTab === 'raids' && renderRaids()}
        {activeTab === 'guildhall' && renderGuildHall()}
        {activeTab === 'stockpile' && renderStockpile()}
        {activeTab === 'activities' && renderActivities()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  )
}

export default Guild;