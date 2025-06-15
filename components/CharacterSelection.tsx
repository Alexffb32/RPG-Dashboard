'use client'

import { useState } from 'react'
import { Plus, Crown, Star, Sword, Shield, Lock, Zap, Hammer, Wand2, Heart, Target, AlertTriangle } from 'lucide-react'

interface Character {
  id: string
  name: string
  level: number
  class: string
  avatar: string
  isActive?: boolean
  stats: {
    health: number
    attack: number
    defense: number
  }
  location: string
  lastPlayed: string
  hasMarketAccess: boolean
  lastClassChange?: number // timestamp
  canChangeClass: boolean
}

interface Effect {
  type: 'exp_boost' | 'efficiency' | 'damage' | 'protection' | 'other'
  skill?: string
  value: number
  description: string
}

interface CharacterClass {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme'
  hasMarketAccess: boolean
  isLocked: boolean
  permanentEffects: Effect[]
  bonuses: {
    permanentEffects?: string[]
    [key: string]: any
  }
  talents: {
    level: number
    name: string
    description: string
    bonus: string
  }[]
}

const characterClasses: CharacterClass[] = [
  {
    id: 'warrior',
    name: 'Warrior',
    description: 'A mighty fighter skilled in close combat and heavy armor. Masters of strength and battle prowess.',
    icon: <Sword className="w-5 h-5" />,
    difficulty: 'Easy',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'exp_boost', skill: 'Strength', value: 10, description: '+10% Strength EXP' },
      { type: 'exp_boost', skill: 'Battle', value: 5, description: '+5% Battle EXP' },
      { type: 'efficiency', skill: 'Hunting', value: 5, description: '+5% Hunting Efficiency' }
    ],
    bonuses: {
      permanentEffects: ['+10% Strength EXP', '+5% Battle EXP', '+5% Hunting Efficiency']
    },
    talents: [
      { level: 10, name: 'Mighty Strike', description: 'Increases damage by 2', bonus: '+2 Damage' },
      { level: 35, name: 'Rampage', description: 'Increases critical attack by 10', bonus: '+10 Critical Attack' },
      { level: 70, name: 'Shield Wall', description: 'Increases protection by 40', bonus: '+40 Protection' }
    ]
  },
  {
    id: 'miner',
    name: 'Miner',
    description: 'A stalwart adventurer delving deep into the earth\'s bowels, equipped with pickaxes and torches. They brave dark caverns and perilous mineshafts, extracting precious ores and gems to fuel the realm\'s economy and empower craftsmen.',
    icon: <Hammer className="w-5 h-5" />,
    difficulty: 'Easy',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'efficiency', skill: 'Mining', value: 10, description: '+10% Mining Efficiency' },
      { type: 'exp_boost', skill: 'Mining', value: 10, description: '+10% Mining Experience' }
    ],
    bonuses: {
      permanentEffects: ['+10% Mining Efficiency', '+10% Mining Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'angler',
    name: 'Angler',
    description: 'A patient master of the waters, skilled in the art of fishing. Armed with rods and lures, they navigate tranquil lakes and treacherous rivers to reel in exotic catches. Their expertise not only provides sustenance but also uncovers hidden treasures beneath the waves.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Easy',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'efficiency', skill: 'Fishing', value: 10, description: '+10% Fishing Efficiency' },
      { type: 'exp_boost', skill: 'Fishing', value: 10, description: '+10% Fishing Experience' }
    ],
    bonuses: {
      permanentEffects: ['+10% Fishing Efficiency', '+10% Fishing Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'chef',
    name: 'Chef',
    description: 'A culinary master, wielding spatulas and spices as their tools of choice. Whether crafting hearty stews or delicate pastries, their creations provide sustenance and buffs to fellow adventurers, enhancing their abilities for the challenges ahead.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Easy',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'efficiency', skill: 'Cooking', value: 10, description: '+10% Cooking Efficiency' },
      { type: 'exp_boost', skill: 'Cooking', value: 10, description: '+10% Cooking Experience' }
    ],
    bonuses: {
      permanentEffects: ['+10% Cooking Efficiency', '+10% Cooking Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'lumberjack',
    name: 'Lumberjack',
    description: 'A formidable force of nature, wielding a mighty axe to harvest timber from ancient forests. With unmatched strength and skill, they provide essential resources for crafting and construction, while also defending against woodland threats lurking within the shadows.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Easy',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'efficiency', skill: 'Woodcutting', value: 10, description: '+10% Woodcutting Efficiency' },
      { type: 'exp_boost', skill: 'Woodcutting', value: 10, description: '+10% Woodcutting Experience' }
    ],
    bonuses: {
      permanentEffects: ['+10% Woodcutting Efficiency', '+10% Woodcutting Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'smelter',
    name: 'Smelter',
    description: 'The Smelter is a class specialized in turning raw ores into valuable metals. They help players by providing essential materials to forge equipment and guild hall components.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Easy',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'efficiency', skill: 'Smelting', value: 10, description: '+10% Smelting Efficiency' },
      { type: 'exp_boost', skill: 'Smelting', value: 10, description: '+10% Smelting Experience' }
    ],
    bonuses: {
      permanentEffects: ['+10% Smelting Efficiency', '+10% Smelting Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'shadowblade',
    name: 'Shadowblade',
    description: 'A cunning and agile class that excels in stealth, precision, and quickness. Masters of subterfuge and deception, shadowblades rely on their exceptional speed and dexterity.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Medium',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'exp_boost', skill: 'Speed', value: 5, description: '+5% Speed EXP' },
      { type: 'efficiency', skill: 'Hunting', value: 10, description: '+10% Hunting Efficiency' },
      { type: 'exp_boost', skill: 'Battle', value: 5, description: '+5% Battle EXP' }
    ],
    bonuses: {
      permanentEffects: ['+5% Speed EXP', '+10% Hunting Efficiency', '+5% Battle EXP']
    },
    talents: [
      { level: 10, name: 'Backstab', description: 'Increases critical chance by 2%', bonus: '+2% Critical Chance' },
      { level: 35, name: 'Shadow Piercer', description: 'Increases critical damage by 10%', bonus: '+10% Critical Damage' },
      { level: 70, name: 'Shadow\'s Veil', description: 'Increases agility by 40', bonus: '+40 Agility' }
    ]
  },
  {
    id: 'ranger',
    name: 'Ranger',
    description: 'A master of archery, an agile and precise class that commands the bow with unrivalled expertise. Whether hidden among the foliage or perched on high vantage points, rangers rain down arrows with deadly accuracy.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Medium',
    hasMarketAccess: true,
    isLocked: false,
    permanentEffects: [
      { type: 'exp_boost', skill: 'Dexterity', value: 7, description: '+7% Dexterity Experience' },
      { type: 'efficiency', skill: 'Hunting', value: 8, description: '+8% Hunting Efficiency' },
      { type: 'exp_boost', skill: 'Battle', value: 5, description: '+5% Battle EXP' }
    ],
    bonuses: {
      permanentEffects: ['+7% Dexterity Experience', '+8% Hunting Efficiency', '+5% Battle EXP']
    },
    talents: [
      { level: 10, name: 'Piercing Shot', description: 'Increases base damage by 2', bonus: '+2 Base Damage' },
      { level: 35, name: 'Eagles Eye', description: 'Increases critical chance by 3%', bonus: '+3% Critical Chance' },
      { level: 70, name: 'Nature\'s Aid', description: 'Increases critical damage by 10%', bonus: '+10% Critical Damage' }
    ]
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: 'Masters of stealth and precision. High speed and critical hit chance.',
    icon: <Target className="w-5 h-5" />,
    difficulty: 'Medium',
    hasMarketAccess: true,
    isLocked: false,
    bonuses: {
      speed: 18,
      dexterity: 12,
      criticalChance: 8
    },
    talents: [
      { level: 7, name: 'Stealth', description: 'Avoid enemy detection', bonus: '+10% Dodge Chance' },
      { level: 17, name: 'Backstab', description: 'Critical hits from behind', bonus: '+15% Critical Damage' },
      { level: 27, name: 'Shadow Step', description: 'Teleport behind enemies', bonus: 'Shadow Step Ability' }
    ]
  },
  {
    id: 'cleric',
    name: 'Cleric',
    description: 'Divine healers and supporters. High wisdom and healing abilities.',
    icon: <Heart className="w-5 h-5" />,
    difficulty: 'Medium',
    hasMarketAccess: true,
    isLocked: false,
    bonuses: {
      wisdom: 15,
      healing: 20,
      mana: 15
    },
    talents: [
      { level: 6, name: 'Divine Blessing', description: 'Passive health regeneration', bonus: '+2 HP/sec' },
      { level: 16, name: 'Greater Heal', description: 'More powerful healing spells', bonus: '+25% Healing Power' },
      { level: 26, name: 'Divine Protection', description: 'Damage reduction from all sources', bonus: '+10% Damage Reduction' }
    ]
  },
  {
    id: 'forsaken',
    name: 'Forsaken',
    description: 'Burdened by a dark and ominous fate, the forsaken are destined to walk a path shrouded in despair. Plagued by misfortune and forsaken by fate, they must rely on sheer determination and cunning to navigate a world that offers them no advantages, embodying the essence of a true underdog.',
    icon: <AlertTriangle className="w-5 h-5" />,
    difficulty: 'Extreme',
    hasMarketAccess: true,
    isLocked: true,
    bonuses: {
      permanentEffects: ['-50% Skill Experience (when obtaining skill items)', '-50% Battle Experience', '-50% Dungeon Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'cursed',
    name: 'Cursed',
    description: 'Doomed by a dark fate, the Cursed suffer severe setbacks in their journey. Shunned from all trade and earning only half the experience from battles, they are forced to endure with fewer resources and slower growth.',
    icon: <Lock className="w-5 h-5" />,
    difficulty: 'Hard',
    hasMarketAccess: false,
    isLocked: true,
    bonuses: {
      permanentEffects: ['-50% Skill Experience (when obtaining skill items)', '-50% Battle Experience', '-50% Dungeon Experience']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  },
  {
    id: 'banished',
    name: 'Banished',
    description: 'The Banished are outcasts from all civilized trade. Unable to access the market or barter, they must rely on their cunning, scavenging skills, and raw combat prowess to survive. With no allies in commerce, they find strength in self-reliance and adaptability.',
    icon: <Lock className="w-5 h-5" />,
    difficulty: 'Hard',
    hasMarketAccess: false,
    isLocked: true,
    bonuses: {
      permanentEffects: ['This class has no permanent effects']
    },
    talents: [
      { level: 999, name: 'No Battle Talents', description: 'This class has no battle talents', bonus: 'N/A' }
    ]
  }
];

const characters: Character[] = [
  {
    id: '1',
    name: 'Alexffb',
    level: 0,
    class: 'Warrior',
    avatar: '🛡️',
    isActive: true,
    stats: { health: 0, attack: 0, defense: 0 },
    location: 'Starting Area',
    lastPlayed: 'Now',
    hasMarketAccess: true,
    canChangeClass: true
  },
  {
    id: '2',
    name: 'Shadowbane',
    level: 0,
    class: 'Rogue',
    avatar: '🗡️',
    stats: { health: 0, attack: 0, defense: 0 },
    location: 'Starting Area',
    lastPlayed: '2 hours ago',
    hasMarketAccess: true,
    canChangeClass: true
  },
  {
    id: '3',
    name: 'Mysticfire',
    level: 0,
    class: 'Mage',
    avatar: '🔮',
    stats: { health: 0, attack: 0, defense: 0 },
    location: 'Starting Area',
    lastPlayed: '1 day ago',
    hasMarketAccess: true,
    canChangeClass: true
  },
  {
    id: '4',
    name: 'Healinglight',
    level: 0,
    class: 'Cleric',
    avatar: '✨',
    stats: { health: 0, attack: 0, defense: 0 },
    location: 'Starting Area',
    lastPlayed: '3 days ago',
    hasMarketAccess: true,
    canChangeClass: true
  },
  {
    id: '5',
    name: 'CursedSoul',
    level: 0,
    class: 'Cursed',
    avatar: '💀',
    stats: { health: 0, attack: 0, defense: 0 },
    location: 'Starting Area',
    lastPlayed: '1 week ago',
    hasMarketAccess: false,
    canChangeClass: false
  },
  {
    id: '6',
    name: 'ExiledOne',
    level: 0,
    class: 'Banished',
    avatar: '⚔️',
    stats: { health: 0, attack: 0, defense: 0 },
    location: 'Starting Area',
    lastPlayed: '2 weeks ago',
    hasMarketAccess: false,
    canChangeClass: false
  }
]

interface CharacterCardProps {
  character: Character
  onSelect: (character: Character) => void
  isSelected: boolean
}

function CharacterCard({ character, onSelect, isSelected }: CharacterCardProps) {
  
  return (
    <div 
      className={`bg-discord-light rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
        isSelected ? 'border-discord-blurple shadow-lg shadow-discord-blurple/25' : 'border-gray-600/50 hover:border-gray-500'
      } ${character.isActive ? 'ring-2 ring-green-400/50' : ''}`}
      onClick={() => onSelect(character)}
    >
      <div className="p-6">
        {/* Avatar and Status */}
        <div className="text-center mb-4">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-discord-dark rounded-full flex items-center justify-center text-4xl mb-2">
              {character.avatar}
            </div>
            {character.isActive && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-discord-light flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>
          <h3 className="text-discord-text font-bold text-lg">{character.name}</h3>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-discord-muted text-sm">Level {character.level}</span>
            <span className="text-discord-muted">•</span>
            <span className={`text-sm font-medium ${getClassInfo(character.class).color}`}>{character.class}</span>
          </div>
          
          {/* Class Info */}
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-xs text-discord-muted">{getClassInfo(character.class).difficulty}</span>
            {!character.hasMarketAccess && (
              <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">No Market</span>
            )}
            {!character.canChangeClass && (
              <span className="text-xs bg-gray-600/20 text-gray-400 px-2 py-1 rounded flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Locked
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-discord-muted">Health</span>
            </div>
            <span className="text-discord-text font-medium">{character.stats.health}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Sword className="w-3 h-3 text-orange-400" />
              <span className="text-discord-muted">Attack</span>
            </div>
            <span className="text-discord-text font-medium">{character.stats.attack}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-blue-400" />
              <span className="text-discord-muted">Defense</span>
            </div>
            <span className="text-discord-text font-medium">{character.stats.defense}</span>
          </div>
        </div>

        {/* Location and Last Played */}
        <div className="space-y-1 text-xs text-discord-muted">
          <div>📍 {character.location}</div>
          <div>🕒 {character.lastPlayed}</div>
        </div>
      </div>
    </div>
  )
}

function CreateCharacterCard({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-discord-light rounded-lg border-2 border-dashed border-gray-600/50 cursor-pointer transition-all hover:scale-105 hover:border-discord-blurple/50 flex items-center justify-center min-h-[300px]"
      onClick={onClick}
    >
      <div className="text-center">
        <div className="w-20 h-20 bg-discord-dark rounded-full flex items-center justify-center mx-auto mb-4">
          <Plus className="w-8 h-8 text-discord-muted" />
        </div>
        <h3 className="text-discord-text font-medium mb-2">Create New Character</h3>
        <p className="text-discord-muted text-sm">Start your adventure</p>
      </div>
    </div>
  )
}

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(characters[0])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)
  const [showClassChange, setShowClassChange] = useState(false)
  
  // Character Creation Form State
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    classId: '',
    appearance: {
      avatar: '👤',
      skinColor: '#F4C2A1',
      hairColor: '#8B4513',
      eyeColor: '#4169E1'
    },
    stats: {
      health: 100,
      attack: 10,
      defense: 10
    },
    availablePoints: 20
  })
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})

  const getClassInfo = (className: string) => {
    const classData = characterClasses.find(c => c.name.toLowerCase() === className.toLowerCase());
    if (!classData) return { color: 'text-gray-400', difficulty: 'Easy' };
    
    const colorMap = {
      'Easy': 'text-green-400',
      'Medium': 'text-yellow-400', 
      'Hard': 'text-orange-400',
      'Extreme': 'text-red-400'
    };
    
    return {
      color: colorMap[classData.difficulty],
      difficulty: classData.difficulty,
      hasMarketAccess: classData.hasMarketAccess
    };
  };

  const getActiveCharacterCount = () => {
    return characters.filter(char => char.hasMarketAccess && char.isActive).length;
  };

  // Character Creation Helper Functions
  const validateCharacterForm = () => {
    const errors: {[key: string]: string} = {}
    
    if (!newCharacter.name.trim()) {
      errors.name = 'Character name is required'
    } else if (newCharacter.name.length < 3) {
      errors.name = 'Name must be at least 3 characters'
    } else if (newCharacter.name.length > 20) {
      errors.name = 'Name must be less than 20 characters'
    } else if (characters.some(char => char.name.toLowerCase() === newCharacter.name.toLowerCase())) {
      errors.name = 'Character name already exists'
    }
    
    if (!newCharacter.classId) {
      errors.classId = 'Please select a class'
    }
    
    if (newCharacter.availablePoints > 0) {
      errors.stats = 'Please allocate all available stat points'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const adjustStat = (stat: 'health' | 'attack' | 'defense', change: number) => {
    const newValue = newCharacter.stats[stat] + change
    const minValue = stat === 'health' ? 50 : 5
    const maxValue = stat === 'health' ? 200 : 50
    
    if (newValue >= minValue && newValue <= maxValue) {
      const pointsChange = change > 0 ? -Math.abs(change) : Math.abs(change)
      if (newCharacter.availablePoints - pointsChange >= 0) {
        setNewCharacter(prev => ({
          ...prev,
          stats: {
            ...prev.stats,
            [stat]: newValue
          },
          availablePoints: prev.availablePoints + pointsChange
        }))
      }
    }
  }

  const resetCharacterForm = () => {
    setNewCharacter({
      name: '',
      classId: '',
      appearance: {
        avatar: '👤',
        skinColor: '#F4C2A1',
        hairColor: '#8B4513',
        eyeColor: '#4169E1'
      },
      stats: {
        health: 100,
        attack: 10,
        defense: 10
      },
      availablePoints: 20
    })
    setFormErrors({})
  }

  const createCharacter = () => {
    if (validateCharacterForm()) {
      const selectedClass = characterClasses.find(cls => cls.id === newCharacter.classId)
      if (selectedClass) {
        const newChar: Character = {
          id: `char_${Date.now()}`,
          name: newCharacter.name,
          level: 1,
          class: selectedClass.name,
          avatar: newCharacter.appearance.avatar,
          isActive: true,
          stats: newCharacter.stats,
          location: 'Tutorial Island',
          lastPlayed: 'Just now',
          hasMarketAccess: selectedClass.hasMarketAccess,
          canChangeClass: false
        }
        
        // In a real app, this would be sent to the backend
        console.log('Creating character:', newChar)
        
        // Reset form and close modal
        resetCharacterForm()
        setShowCreateForm(false)
        
        // Show success message or redirect
        alert(`Character "${newChar.name}" created successfully!`)
      }
    }
  }

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character)
  }

  const handleCreateCharacter = () => {
    setShowCreateForm(true)
  }

  const handlePlayCharacter = () => {
    if (selectedCharacter) {
      // Navigate to game with selected character
      console.log('Playing as:', selectedCharacter.name)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-discord-text mb-2">Select Your Character</h1>
        <p className="text-discord-muted">Choose a character to continue your adventure</p>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            onSelect={handleCharacterSelect}
            isSelected={selectedCharacter?.id === character.id}
          />
        ))}
        <CreateCharacterCard onClick={handleCreateCharacter} />
      </div>

      {/* Action Buttons */}
      {selectedCharacter && (
        <div className="flex justify-center gap-4">
          <button 
            onClick={handlePlayCharacter}
            className="px-8 py-3 bg-discord-blurple text-white rounded-lg font-medium hover:bg-discord-blurple/80 transition-colors flex items-center gap-2"
          >
            <Star className="w-5 h-5" />
            Play as {selectedCharacter.name}
          </button>
          <button 
            onClick={() => setShowCharacterDetails(true)}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-600/80 transition-colors"
          >
            Character Details
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-600/80 transition-colors">
            Delete Character
          </button>
        </div>
      )}

      {/* Character Limit Warning */}
      {getActiveCharacterCount() >= 3 && (
        <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 text-yellow-400">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Character Limit Reached</span>
          </div>
          <p className="text-sm text-yellow-300 mt-1">
            You can only have 3 characters with market access active at once. 
            Characters without market access (Cursed, Banished) don't count towards this limit.
          </p>
        </div>
      )}

      {/* Character Details Modal */}
      {showCharacterDetails && selectedCharacter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-discord-light rounded-lg p-6 max-w-2xl w-full mx-4 border border-gray-600/50 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-discord-text">{selectedCharacter.name}</h2>
              <button
                onClick={() => setShowCharacterDetails(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {(() => {
              const classData = characterClasses.find(c => c.name.toLowerCase() === selectedCharacter.class.toLowerCase());
              if (!classData) return null;
              
              return (
                <div className="space-y-6">
                  {/* Class Info */}
                  <div className="bg-discord-dark rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      {classData.icon}
                      <div>
                        <h3 className="text-lg font-bold text-discord-text">{classData.name}</h3>
                        <p className="text-sm text-discord-muted">{classData.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-discord-muted">Difficulty:</span>
                        <span className={`ml-2 font-medium ${getClassInfo(classData.name).color}`}>
                          {classData.difficulty}
                        </span>
                      </div>
                      <div>
                        <span className="text-discord-muted">Market Access:</span>
                        <span className={`ml-2 font-medium ${classData.hasMarketAccess ? 'text-green-400' : 'text-red-400'}`}>
                          {classData.hasMarketAccess ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Class Bonuses */}
                  <div className="bg-discord-dark rounded-lg p-4">
                    <h4 className="font-bold text-discord-text mb-3">Permanent Effects</h4>
                    <div className="space-y-2 text-sm">
                      {classData.bonuses.permanentEffects ? (
                        classData.bonuses.permanentEffects.map((effect, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">•</span>
                            <span className="text-discord-text">{effect}</span>
                          </div>
                        ))
                      ) : (
                        Object.entries(classData.bonuses).filter(([key]) => key !== 'permanentEffects').map(([stat, value]) => (
                          <div key={stat} className="flex justify-between">
                            <span className="text-discord-muted capitalize">{stat}:</span>
                            <span className={`font-medium ${value > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {value > 0 ? '+' : ''}{value}{stat === 'experience' ? '% EXP' : ''}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  
                  {/* Class Talents */}
                  <div className="bg-discord-dark rounded-lg p-4">
                    <h4 className="font-bold text-discord-text mb-3">Class Talents</h4>
                    <div className="space-y-3">
                      {classData.talents.map((talent, index) => {
                        const isUnlocked = selectedCharacter.level >= talent.level;
                        return (
                          <div key={index} className={`p-3 rounded border ${
                            isUnlocked ? 'border-green-600/50 bg-green-600/10' : 'border-gray-600/50 bg-gray-600/10'
                          }`}>
                            <div className="flex items-center justify-between mb-1">
                              <span className={`font-medium ${
                                isUnlocked ? 'text-green-400' : 'text-gray-400'
                              }`}>
                                {talent.name}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded ${
                                isUnlocked ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                              }`}>
                                Level {talent.level}
                              </span>
                            </div>
                            <p className="text-sm text-discord-muted mb-1">{talent.description}</p>
                            <p className={`text-xs font-medium ${
                              isUnlocked ? 'text-green-300' : 'text-gray-400'
                            }`}>
                              {talent.bonus}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Class Change Option */}
                  {selectedCharacter.canChangeClass && (
                    <div className="bg-discord-dark rounded-lg p-4">
                      <h4 className="font-bold text-discord-text mb-3">Class Change</h4>
                      <p className="text-sm text-discord-muted mb-3">
                        Use a Metamorphite to change your class. Can only be done once every 14 days.
                      </p>
                      <button
                        onClick={() => {
                          setShowCharacterDetails(false);
                          setShowClassChange(true);
                        }}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
                      >
                        Change Class
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Class Change Modal */}
      {showClassChange && selectedCharacter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-discord-light rounded-lg p-6 max-w-2xl w-full mx-4 border border-gray-600/50 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-discord-text">Change Class</h2>
              <button
                onClick={() => setShowClassChange(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Requirements */}
              <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-lg p-4">
                <h3 className="font-bold text-yellow-400 mb-2">Requirements</h3>
                <ul className="text-sm text-yellow-300 space-y-1">
                  <li>• Requires 1x Metamorphite (consumable)</li>
                  <li>• Can only change class once every 14 days</li>
                  <li>• Cannot change to/from locked classes (Forsaken, Cursed, Banished)</li>
                  <li>• Metamorphite cannot be traded between characters</li>
                </ul>
              </div>
              
              {/* Available Classes */}
              <div className="space-y-3">
                <h3 className="font-bold text-discord-text">Available Classes</h3>
                {characterClasses.filter(cls => !cls.isLocked && cls.name.toLowerCase() !== selectedCharacter.class.toLowerCase()).map(cls => (
                  <div key={cls.id} className="border border-gray-600/50 rounded-lg p-4 hover:border-discord-blurple/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      {cls.icon}
                      <div>
                        <h4 className="font-bold text-discord-text">{cls.name}</h4>
                        <p className="text-sm text-discord-muted">{cls.description}</p>
                      </div>
                      <div className="ml-auto">
                        <span className={`text-xs px-2 py-1 rounded ${getClassInfo(cls.name).color.replace('text-', 'bg-').replace('-400', '-600')} text-white`}>
                          {cls.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-discord-muted">Bonuses:</span>
                        <div className="text-xs text-green-400">
                          {Object.entries(cls.bonuses).map(([stat, value]) => (
                            <div key={stat}>
                              {stat}: {value > 0 ? '+' : ''}{value}{stat === 'experience' ? '% EXP' : ''}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-discord-muted">Market Access:</span>
                        <span className={`ml-2 text-xs ${cls.hasMarketAccess ? 'text-green-400' : 'text-red-400'}`}>
                          {cls.hasMarketAccess ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-discord-blurple hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
                      Change to {cls.name} (Requires Metamorphite)
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Character Creation Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-discord-light rounded-lg p-6 max-w-4xl w-full border border-gray-600/50 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-discord-text">Create New Character</h2>
              <button
                onClick={() => {
                  resetCharacterForm()
                  setShowCreateForm(false)
                }}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Character Info & Appearance */}
              <div className="space-y-6">
                {/* Character Name */}
                <div>
                  <label className="block text-discord-text text-sm font-medium mb-2">Character Name *</label>
                  <input 
                    type="text" 
                    value={newCharacter.name}
                    onChange={(e) => setNewCharacter(prev => ({ ...prev, name: e.target.value }))}
                    className={`w-full bg-discord-dark border rounded px-3 py-2 text-discord-text focus:outline-none transition-colors ${
                      formErrors.name ? 'border-red-500 focus:border-red-400' : 'border-gray-600/50 focus:border-discord-blurple'
                    }`}
                    placeholder="Enter character name (3-20 characters)"
                    maxLength={20}
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Appearance Customization */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h3 className="font-bold text-discord-text mb-4">Appearance</h3>
                  
                  {/* Avatar Preview */}
                  <div className="text-center mb-4">
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center text-4xl border-2 border-gray-600/50"
                      style={{ backgroundColor: newCharacter.appearance.skinColor }}
                    >
                      {newCharacter.appearance.avatar}
                    </div>
                    <p className="text-sm text-discord-muted">Character Preview</p>
                  </div>

                  {/* Avatar Selection */}
                  <div className="mb-4">
                    <label className="block text-discord-text text-sm font-medium mb-2">Avatar</label>
                    <div className="grid grid-cols-6 gap-2">
                      {['👤', '🧑', '👨', '👩', '🧔', '👱', '👨‍🦰', '👩‍🦰', '👨‍🦱', '👩‍🦱', '👨‍🦲', '👩‍🦲'].map(avatar => (
                        <button
                          key={avatar}
                          onClick={() => setNewCharacter(prev => ({
                            ...prev,
                            appearance: { ...prev.appearance, avatar }
                          }))}
                          className={`p-2 rounded text-xl border transition-colors ${
                            newCharacter.appearance.avatar === avatar 
                              ? 'border-discord-blurple bg-discord-blurple/20' 
                              : 'border-gray-600/50 hover:border-gray-400'
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Customization */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-discord-text text-xs font-medium mb-1">Skin</label>
                      <input
                        type="color"
                        value={newCharacter.appearance.skinColor}
                        onChange={(e) => setNewCharacter(prev => ({
                          ...prev,
                          appearance: { ...prev.appearance, skinColor: e.target.value }
                        }))}
                        className="w-full h-8 rounded border border-gray-600/50"
                      />
                    </div>
                    <div>
                      <label className="block text-discord-text text-xs font-medium mb-1">Hair</label>
                      <input
                        type="color"
                        value={newCharacter.appearance.hairColor}
                        onChange={(e) => setNewCharacter(prev => ({
                          ...prev,
                          appearance: { ...prev.appearance, hairColor: e.target.value }
                        }))}
                        className="w-full h-8 rounded border border-gray-600/50"
                      />
                    </div>
                    <div>
                      <label className="block text-discord-text text-xs font-medium mb-1">Eyes</label>
                      <input
                        type="color"
                        value={newCharacter.appearance.eyeColor}
                        onChange={(e) => setNewCharacter(prev => ({
                          ...prev,
                          appearance: { ...prev.appearance, eyeColor: e.target.value }
                        }))}
                        className="w-full h-8 rounded border border-gray-600/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Stat Allocation */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-discord-text">Stat Allocation</h3>
                    <div className="text-sm">
                      <span className="text-discord-muted">Available Points: </span>
                      <span className={`font-bold ${
                        newCharacter.availablePoints > 0 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {newCharacter.availablePoints}
                      </span>
                    </div>
                  </div>
                  
                  {formErrors.stats && (
                    <p className="text-red-400 text-xs mb-3">{formErrors.stats}</p>
                  )}

                  <div className="space-y-4">
                    {/* Health */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-discord-text font-medium">Health</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => adjustStat('health', -5)}
                          disabled={newCharacter.stats.health <= 50}
                          className="w-8 h-8 rounded bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-discord-text font-bold">
                          {newCharacter.stats.health}
                        </span>
                        <button
                          onClick={() => adjustStat('health', 5)}
                          disabled={newCharacter.stats.health >= 200 || newCharacter.availablePoints < 5}
                          className="w-8 h-8 rounded bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Attack */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sword className="w-4 h-4 text-orange-400" />
                        <span className="text-discord-text font-medium">Attack</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => adjustStat('attack', -1)}
                          disabled={newCharacter.stats.attack <= 5}
                          className="w-8 h-8 rounded bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-discord-text font-bold">
                          {newCharacter.stats.attack}
                        </span>
                        <button
                          onClick={() => adjustStat('attack', 1)}
                          disabled={newCharacter.stats.attack >= 50 || newCharacter.availablePoints < 1}
                          className="w-8 h-8 rounded bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Defense */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-discord-text font-medium">Defense</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => adjustStat('defense', -1)}
                          disabled={newCharacter.stats.defense <= 5}
                          className="w-8 h-8 rounded bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-discord-text font-bold">
                          {newCharacter.stats.defense}
                        </span>
                        <button
                          onClick={() => adjustStat('defense', 1)}
                          disabled={newCharacter.stats.defense >= 50 || newCharacter.availablePoints < 1}
                          className="w-8 h-8 rounded bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-xs text-discord-muted">
                    <p>• Health: 50-200 (costs 5 points per 5 HP)</p>
                    <p>• Attack/Defense: 5-50 (costs 1 point each)</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Class Selection */}
              <div className="space-y-6">
                <div>
                  <label className="block text-discord-text text-sm font-medium mb-3">Choose Your Class *</label>
                  {formErrors.classId && (
                    <p className="text-red-400 text-xs mb-3">{formErrors.classId}</p>
                  )}
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {characterClasses.filter(cls => !cls.isLocked).map(cls => {
                      const isSelected = newCharacter.classId === cls.id
                      return (
                        <div 
                          key={cls.id}
                          onClick={() => setNewCharacter(prev => ({ ...prev, classId: cls.id }))}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            isSelected 
                              ? 'border-discord-blurple bg-discord-blurple/10' 
                              : 'border-gray-600/50 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            {cls.icon}
                            <div className="flex-1">
                              <h4 className="font-bold text-discord-text">{cls.name}</h4>
                              <p className="text-sm text-discord-muted">{cls.description}</p>
                            </div>
                            <div className="text-right">
                              <span className={`text-xs px-2 py-1 rounded ${
                                getClassInfo(cls.name).color.replace('text-', 'bg-').replace('-400', '-600')
                              } text-white`}>
                                {cls.difficulty}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-discord-muted">Market Access:</span>
                              <span className={`ml-2 font-medium ${
                                cls.hasMarketAccess ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {cls.hasMarketAccess ? 'Yes' : 'No'}
                              </span>
                            </div>
                            <div>
                              <span className="text-discord-muted">Starting Bonuses:</span>
                              <div className="text-xs text-green-400 mt-1">
                                {Object.entries(cls.bonuses).slice(0, 2).map(([stat, value]) => (
                                  <div key={stat}>
                                    {stat}: {value > 0 ? '+' : ''}{value}{stat === 'experience' ? '% EXP' : ''}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {isSelected && (
                            <div className="mt-3 pt-3 border-t border-gray-600/50">
                              <h5 className="font-medium text-discord-text mb-2">Class Talents Preview:</h5>
                              <div className="space-y-1">
                                {cls.talents.slice(0, 2).map((talent, index) => (
                                  <div key={index} className="text-xs">
                                    <span className="text-yellow-400">Lv{talent.level}:</span>
                                    <span className="text-discord-text ml-1">{talent.name}</span>
                                  </div>
                                ))}
                                {cls.talents.length > 2 && (
                                  <div className="text-xs text-discord-muted">...and {cls.talents.length - 2} more</div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  
                  <p className="text-xs text-discord-muted mt-3">
                    💡 Locked classes (Forsaken, Cursed, Banished) can only be unlocked through special in-game events.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-600/50 mt-6">
              <button 
                onClick={createCharacter}
                disabled={!newCharacter.name || !newCharacter.classId || newCharacter.availablePoints > 0}
                className="flex-1 px-6 py-3 bg-discord-blurple text-white rounded-lg font-medium hover:bg-discord-blurple/80 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                Create Character
              </button>
              <button 
                onClick={() => {
                  resetCharacterForm()
                  setShowCreateForm(false)
                }}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-600/80 transition-colors"
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