import React, { useState } from 'react'
import { Book, MapPin, Sword, Star, Mountain, Eye, Sparkles, Castle, Cloud, Telescope, Users, Crown, Shield, Axe, TreePine, Skull, Package, Heart, Zap, Hammer, Clock, Target, ShoppingCart, Search, Calculator, X, Coins, Store, Palette, Image, User, FileText, ArrowRightLeft, Info, AlertTriangle, Vault } from 'lucide-react'

interface Location {
  id: string
  name: string
  description: string
  recommendedLevel: number
  biome: string
  icon: React.ReactNode
}

interface LoreSection {
  id: string
  title: string
  content: string
  icon: React.ReactNode
}

export default function Lore() {
  const [activeSection, setActiveSection] = useState('world')
  const [activeTab, setActiveTab] = useState('activities')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedCivilization, setSelectedCivilization] = useState<string | null>(null)

  const loreSections: LoreSection[] = [
    {
      id: 'world',
      title: 'The World',
      content: `In the years before the dawn of recorded time, Valaron was a colossal land, a supercontinent that cradled all creation. It was a time of splendor when the Old Gods — Zimos, Balthazar and, Mortem among others — ruled the hearts of all beings. Their shrines spread across Valaron, each a monument to the peoples' unwavering devotion.

The first civilisation of people endured an endless journey. They made their humble homes within the earth. Known to the annals of time as "plebeians," they roamed the expanse of Valaron, their lives a tapestry of travel and simplicity, and their reverence for the gods manifest in scattered temples.

As eons passed, the forces of nature carved Valaron into fragments, each drifting apart on the cosmic sea, fostering new lands and new beginnings. Yet, as the landmasses diverged, so too did the hearts of the people. The once-unified worship of the Old Gods dwindled, surviving only within secluded enclaves, where the ancient ways still whispered in the winds.

Valaron now stands divided, not just by sea and land, but by belief. Some adhere to the legend of a colossal serpent, considering Valaron to be a mere reflection in its divine eye. Others have forsaken the deities of old, while there are those who gaze into the abyss, performing sacred rites with pink water lilies to honour a cosmic entity believed to dwell beneath the waves.`,
      icon: <Book className="w-5 h-5" />
    },
    {
      id: 'solaris',
      title: 'Solaris Isle',
      content: `In the heart of Valaron lies Solaris Isle. This continent is a reflection of the worlds rich diversity, a bastion of unity where diverse biomes flourish side by side. Here, a lasting peace has been a constant presence in the lives of its people.

Despite the countless years of peace, whispers of unease stir the air; Astaroth, the underworld's dark wizard, is spinning a sinister web, threatening to unravel the serenity that has long blanketed the world. His nefarious schemes, if left unchecked, could usher in an era of chaos and darkness.

In the twilight of Valaron's storied past, there are whispers abound of a singular, enigmatic presence. Sightings of this timeless figure are unclaimed, yet the name endures. Passed down through centuries, this unending legacy creates a blend of wonder and speculation in everyone who hears the legend, leading to the whispered reverence of one name: Mahol the Endless.`,
      icon: <MapPin className="w-5 h-5" />
    }
  ]

  const locations: Location[] = [
    {
      id: 'bluebell_hollow',
      name: 'Bluebell Hollow',
      description: 'A humble and peaceful countryside farm. It is filled with green fields, a cozy farmhouse, and friendly farm animals.',
      recommendedLevel: 1,
      biome: 'Enchanted Oasis',
      icon: '🌾'
    },
    {
      id: 'whispering_woods',
      name: 'Whispering Woods',
      description: 'A dense and enchanted forest shrouded in mystery. The trees seem to whisper secrets, and magical creatures dwell within. The atmosphere is ethereal and filled with wonders.',
      recommendedLevel: 10,
      biome: 'Enchanted Oasis',
      icon: '🌲'
    },
    {
      id: 'eldoria',
      name: 'Eldoria',
      description: 'A bustling and opulent metropolis filled with towering spires, grand architecture, and vibrant markets. The city is a hub of culture, commerce, and diverse inhabitants.',
      recommendedLevel: 20,
      biome: 'Enchanted Oasis',
      icon: '🏛️'
    },
    {
      id: 'crystal_caverns',
      name: 'Crystal Caverns',
      description: 'A subterranean wonderland adorned with glittering crystals of various colors. The caves are home to luminescent creatures and rare minerals, creating a breathtaking sight.',
      recommendedLevel: 33,
      biome: 'Enchanted Oasis',
      icon: '💎'
    },
    {
      id: 'skyreach_peak',
      name: 'Skyreach Peak',
      description: 'A towering mountain peak that scrapes the heavens. Climbing it is a challenge, but reaching the summit rewards the player with breathtaking views of the world below.',
      recommendedLevel: 50,
      biome: 'Skyreach Peak',
      icon: <Mountain className="w-5 h-5" />
    },
    {
      id: 'enchanted_oasis',
      name: 'Enchanted Oasis',
      description: 'A hidden sanctuary nestled deep within a mystical desert, where a shimmering pool reflects the moonlight, granting eternal life and bestowing visitors with rejuvenating magic.',
      recommendedLevel: 60,
      biome: 'Enchanted Oasis',
      icon: '🏜️'
    },
    {
      id: 'floating_gardens',
      name: 'Floating Gardens of Aetheria',
      description: 'An ethereal realm suspended in the sky, where lush, vibrant gardens hover amidst wisps of mist, their radiant flora nourished by the mystical energy of the floating islands.',
      recommendedLevel: 72,
      biome: 'Floating Gardens of Aetheria',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      id: 'celestial_observatory',
      name: 'Celestial Observatory',
      description: 'A remote mountaintop observatory where the player can gaze into the cosmos. It offers a mesmerizing view of the stars, planets, and other celestial phenomena.',
      recommendedLevel: 80,
      biome: 'Celestial Observatory',
      icon: <Telescope className="w-5 h-5" />
    },
    {
      id: 'isle_of_whispers',
      name: 'Isle of Whispers',
      description: 'A mystical island enveloped in perpetual fog. Eerie whispers and strange apparitions can be encountered here, hinting at ancient secrets and hidden treasures.',
      recommendedLevel: 92,
      biome: 'Isle of Whispers',
      icon: '👻'
    },
    {
      id: 'the_citadel',
      name: 'The Citadel',
      description: 'An immense fortress floating high above the clouds, accessible only by airships or powerful magic. It serves as a seat of power for the realm\'s rulers and houses a repository of arcane knowledge.',
      recommendedLevel: 93,
      biome: 'The Citadel',
      icon: <Castle className="w-5 h-5" />
    }
  ]

  const getLevelColor = (level: number) => {
    if (level <= 10) return 'text-green-400'
    if (level <= 30) return 'text-blue-400'
    if (level <= 50) return 'text-yellow-400'
    if (level <= 70) return 'text-orange-400'
    if (level <= 90) return 'text-red-400'
    return 'text-purple-400'
  }

  const getLevelBg = (level: number) => {
    if (level <= 10) return 'bg-green-900/20 border-green-500/30'
    if (level <= 30) return 'bg-blue-900/20 border-blue-500/30'
    if (level <= 50) return 'bg-yellow-900/20 border-yellow-500/30'
    if (level <= 70) return 'bg-orange-900/20 border-orange-500/30'
    if (level <= 90) return 'bg-red-900/20 border-red-500/30'
    return 'bg-purple-900/20 border-purple-500/30'
  }

  const groupedLocations = locations.reduce((acc, location) => {
    if (!acc[location.biome]) {
      acc[location.biome] = []
    }
    acc[location.biome].push(location)
    return acc
  }, {} as Record<string, Location[]>)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center gap-3 mb-4">
          <Book className="w-8 h-8 text-amber-400" />
          <div>
            <h1 className="text-2xl font-bold text-discord-text">Lore & World</h1>
            <p className="text-discord-muted">Discover the rich history and mystical locations of Valaron</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveSection('world')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'world'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Book className="w-4 h-4" />
            <span>The World</span>
          </button>
          <button
            onClick={() => setActiveSection('locations')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'locations'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Locations</span>
          </button>
          <button
            onClick={() => setActiveSection('civilizations')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'civilizations'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Civilizations</span>
          </button>
          <button
            onClick={() => setActiveSection('characters')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'characters'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Notable Characters</span>
          </button>
          <button
            onClick={() => setActiveSection('combat')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'combat'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Sword className="w-4 h-4" />
            <span>Combat</span>
          </button>
          <button
            onClick={() => setActiveSection('activities')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'activities'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Activities</span>
          </button>
          <button
            onClick={() => setActiveSection('items')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'items'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Items & Pets</span>
          </button>
          <button
            onClick={() => setActiveSection('gameinfo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeSection === 'gameinfo'
                ? 'bg-discord-blurple text-white'
                : 'text-discord-muted hover:text-discord-text hover:bg-discord-dark'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Game Info</span>
          </button>
        </div>
      </div>

      {/* World Lore Section */}
      {activeSection === 'world' && (
        <div className="space-y-6">
          {loreSections.map((section) => (
            <div key={section.id} className="bg-discord-light rounded-lg border border-gray-600/50">
              <div className="p-6 border-b border-gray-600/50">
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h3 className="text-lg font-bold text-discord-text">{section.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-discord-muted leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Locations Section */}
      {activeSection === 'locations' && (
        <div className="space-y-6">
          {Object.entries(groupedLocations).map(([biome, biomeLocations]) => (
            <div key={biome} className="bg-discord-light rounded-lg border border-gray-600/50">
              <div className="p-6 border-b border-gray-600/50">
                <h3 className="text-lg font-bold text-discord-text">{biome}</h3>
                <p className="text-discord-muted text-sm mt-1">
                  {biomeLocations.length} location{biomeLocations.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <div className="p-6">
                <div className="grid gap-4">
                  {biomeLocations
                    .sort((a, b) => a.recommendedLevel - b.recommendedLevel)
                    .map((location) => (
                    <div
                      key={location.id}
                      className={`rounded-lg p-4 border transition-all cursor-pointer hover:bg-gray-600/20 ${
                        selectedLocation === location.id
                          ? 'border-discord-blurple bg-discord-blurple/10'
                          : 'border-gray-600/50'
                      }`}
                      onClick={() => setSelectedLocation(
                        selectedLocation === location.id ? null : location.id
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl">
                            {typeof location.icon === 'string' ? location.icon : location.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-discord-text">{location.name}</h4>
                            <p className="text-discord-muted text-sm">{location.biome}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-sm font-medium ${
                            getLevelBg(location.recommendedLevel)
                          }`}>
                            <Sword className="w-3 h-3" />
                            <span className={getLevelColor(location.recommendedLevel)}>
                              Level {location.recommendedLevel}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {selectedLocation === location.id && (
                        <div className="mt-4 pt-4 border-t border-gray-600/30">
                          <p className="text-discord-muted leading-relaxed">
                            {location.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Civilizations Section */}
      {activeSection === 'civilizations' && (
        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-discord-text">Civilizations of Valaron</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-discord-muted leading-relaxed mb-4">
                  Valaron is a world full of diversity, home to many races and civilizations that have risen over countless ages. Humans were the first to walk its lands, but as time passed, other civilizations appeared - orcish clans with their strong traditions, the Oakenra, wise tree-like beings, and many others. How these races first came to Valaron is a mystery, one even the most learned scholars cannot fully explain.
                </p>
                <p className="text-discord-muted leading-relaxed mb-4">
                  Legends tell of a time when the skies split open with a brilliant flash of light. Old writings say this event marked the arrival of these new civilizations. According to the story, with that single flash lighting up the night, these races suddenly appeared. However, the truth of these ancient texts is uncertain, clouded by contradictions.
                </p>
                <p className="text-discord-muted leading-relaxed">
                  One popular belief ties this event to the myth of the great serpent - a being so vast that Valaron is said to lie within its watchful eye. Some say the flash of light was simply the serpent blinking, and that this brief moment brought new life and worlds into existence, like reflections in its gaze.
                </p>
              </div>
            </div>
          </div>

          {/* Major Civilizations */}
          <div className="grid gap-4">
            {/* Eldoria */}
            <div
              className={`rounded-lg p-4 border transition-all cursor-pointer hover:bg-gray-600/20 ${
                selectedCivilization === 'eldoria'
                  ? 'border-discord-blurple bg-discord-blurple/10'
                  : 'border-gray-600/50 bg-discord-light'
              }`}
              onClick={() => setSelectedCivilization(
                selectedCivilization === 'eldoria' ? null : 'eldoria'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Crown className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h4 className="font-bold text-discord-text text-lg">Eldoria</h4>
                    <p className="text-discord-muted text-sm">The Ambitious Empire</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-2xl">🏛️</div>
              </div>
              
              {selectedCivilization === 'eldoria' && (
                <div className="mt-4 pt-4 border-t border-gray-600/30">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-discord-muted leading-relaxed mb-4">
                      The Eldorians of Solaris Isle have a bold dream to spread their rule across all of Valaron. Their capital city, Eldoria, is more than just a home - it is the heart of their people and a symbol of their ambition to build a powerful empire. In Eldorian society, old ideas about class and gender do not matter. Everyone is treated equally and given the same chance to succeed. Progress is not just valued here; it is a way of life.
                    </p>
                    <p className="text-discord-muted leading-relaxed">
                      Yet, the Eldorians also carry the burden of a dark past. Long ago, one of their emperors tried to wipe out an entire people. Much of the truth about this time was lost in the Great Fire of Eldoria, which destroyed many important records. Some believe the fire was set on purpose to erase the shame of history. Even so, Eldoria rose from the ashes. Today, they have built a strong friendship with their neighbors in Arvandor. They trade goods and have promised to defend each other, proving that even a nation with a troubled history can work toward peace and cooperation.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Arvendor */}
            <div
              className={`rounded-lg p-4 border transition-all cursor-pointer hover:bg-gray-600/20 ${
                selectedCivilization === 'arvendor'
                  ? 'border-discord-blurple bg-discord-blurple/10'
                  : 'border-gray-600/50 bg-discord-light'
              }`}
              onClick={() => setSelectedCivilization(
                selectedCivilization === 'arvendor' ? null : 'arvendor'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Castle className="w-8 h-8 text-blue-400" />
                  <div>
                    <h4 className="font-bold text-discord-text text-lg">Arvendor</h4>
                    <p className="text-discord-muted text-sm">Descendants of the Gods</p>
                  </div>
                </div>
                <div className="text-blue-400 text-2xl">🏰</div>
              </div>
              
              {selectedCivilization === 'arvendor' && (
                <div className="mt-4 pt-4 border-t border-gray-600/30">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-discord-muted leading-relaxed mb-4">
                      The Arvendor are a powerful civilization that lives in a grand place called The Citadel. They are believed to be direct descendants of the gods, and this divine heritage has earned the respect of the land dwellers. Their entire history and culture are deeply tied to the heavens, shaping how they see themselves and their role in the world.
                    </p>
                    <p className="text-discord-muted leading-relaxed mb-4">
                      But in today's age, where the gods are no longer seen and are remembered only in old stories, many people across Valaron have grown doubtful. Some question if the Arvendor are truly linked to the gods at all - some even question if the gods ever existed. Aware of these doubts, the Arvendor mostly keep to themselves, rarely involving themselves in the affairs of the outside world. They guard their secrets carefully behind the walls of The Citadel.
                    </p>
                    <p className="text-discord-muted leading-relaxed">
                      More than 50,000 years ago, the Arvendor played a key role in a legendary war against a dark enemy known as the Ombric. This great conflict ended with the Ombric being banished to the underworld. Today, that war is little more than a faded memory, even among the Arvendor themselves. Still, rumors speak of a man who survived from that ancient time - a living witness to the battle. Whether true or not, his story only deepens the mystery surrounding the Arvendor and their place in the world.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Mokthar */}
            <div
              className={`rounded-lg p-4 border transition-all cursor-pointer hover:bg-gray-600/20 ${
                selectedCivilization === 'mokthar'
                  ? 'border-discord-blurple bg-discord-blurple/10'
                  : 'border-gray-600/50 bg-discord-light'
              }`}
              onClick={() => setSelectedCivilization(
                selectedCivilization === 'mokthar' ? null : 'mokthar'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Axe className="w-8 h-8 text-red-400" />
                  <div>
                    <h4 className="font-bold text-discord-text text-lg">Mokthar</h4>
                    <p className="text-discord-muted text-sm">The Warrior Orcs</p>
                  </div>
                </div>
                <div className="text-red-400 text-2xl">⚔️</div>
              </div>
              
              {selectedCivilization === 'mokthar' && (
                <div className="mt-4 pt-4 border-t border-gray-600/30">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-discord-muted leading-relaxed mb-4">
                      The Mokthar are a civilization of orcs known for their strength and love of battle. For generations, they have taken pride in small raids and skirmishes, enjoying the thrill of combat without seeking the destruction that full-scale wars bring. But under their tough exterior, a struggle is growing.
                    </p>
                    <p className="text-discord-muted leading-relaxed mb-4">
                      Recently, a rebellion within their ranks has shown that many Mokthar are tired of constant fighting. They are looking for change - wanting a future built on progress instead of endless war. At the same time, the outside world often judges them unfairly, seeing only savage warriors and ignoring the real depth and variety within their people.
                    </p>
                    <p className="text-discord-muted leading-relaxed">
                      In search of a new life, some Mokthar have begun to move to Solaris Isle. They carry with them the spirit of their homeland - its hardships, its history - and the hope of starting fresh, far from the old ways they are trying to leave behind.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Oakenra */}
            <div
              className={`rounded-lg p-4 border transition-all cursor-pointer hover:bg-gray-600/20 ${
                selectedCivilization === 'oakenra'
                  ? 'border-discord-blurple bg-discord-blurple/10'
                  : 'border-gray-600/50 bg-discord-light'
              }`}
              onClick={() => setSelectedCivilization(
                selectedCivilization === 'oakenra' ? null : 'oakenra'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <TreePine className="w-8 h-8 text-green-400" />
                  <div>
                    <h4 className="font-bold text-discord-text text-lg">Oakenra</h4>
                    <p className="text-discord-muted text-sm">The Ancient Tree Guardians</p>
                  </div>
                </div>
                <div className="text-green-400 text-2xl">🌳</div>
              </div>
              
              {selectedCivilization === 'oakenra' && (
                <div className="mt-4 pt-4 border-t border-gray-600/30">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-discord-muted leading-relaxed mb-4">
                      The Oakenra are an ancient civilization of wise, tree-like beings who have acted as silent guardians of their realm for thousands of years. Their long lifespans give them a deep knowledge and understanding that few others can match.
                    </p>
                    <p className="text-discord-muted leading-relaxed mb-4">
                      For most of their history, the Oakenra have stayed neutral, avoiding the conflicts and politics of the outside world. But now, change is stirring among them. Oilegeist, a newly appointed member of their respected elder council, believes that staying neutral for so long has caused the Oakenra to grow stagnant.
                    </p>
                    <p className="text-discord-muted leading-relaxed">
                      In secret, Oilegeist has begun making hidden agreements with Astaroth, a powerful and dangerous wizard from the underworld. This break from centuries of tradition remains unknown to the rest of the council. If discovered, Oilegeist's bold and risky actions could change the future of the Oakenra forever.
                    </p>
                  </div>
                </div>
              )}
            </div>

             {/* Ombric */}
             <div
               className={`rounded-lg p-4 border transition-all cursor-pointer hover:bg-gray-600/20 ${
                 selectedCivilization === 'ombric'
                   ? 'border-discord-blurple bg-discord-blurple/10'
                   : 'border-gray-600/50 bg-discord-light'
               }`}
               onClick={() => setSelectedCivilization(
                 selectedCivilization === 'ombric' ? null : 'ombric'
               )}
             >
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                   <Skull className="w-8 h-8 text-purple-400" />
                   <div>
                     <h4 className="font-bold text-discord-text text-lg">Ombric</h4>
                     <p className="text-discord-muted text-sm">The Exiled Underworld</p>
                   </div>
                 </div>
                 <div className="text-purple-400 text-2xl">💀</div>
               </div>
               
               {selectedCivilization === 'ombric' && (
                 <div className="mt-4 pt-4 border-t border-gray-600/30">
                   <div className="prose prose-invert max-w-none">
                     <p className="text-discord-muted leading-relaxed mb-4">
                       Deep in the dark underworld live the Ombric, a civilization made up of many monstrous races, each representing pure evil. It is said that only the most corrupted souls - those far beyond redemption - end up among the Ombric. Their home is a hidden realm beneath the surface, a world of darkness completely unlike the lands above. In the underworld, evil is not just present - it grows and thrives.
                     </p>
                     <p className="text-discord-muted leading-relaxed mb-4">
                       The Ombric did not choose this exile. Long ago, their chaos and violence spread across the surface world, leading to a great war against the Arvendor, the self-proclaimed divine descendants of the gods. After a fierce battle, the Arvendor defeated the Ombric and sealed them away deep underground, where they have remained, forgotten by most.
                     </p>
                     <p className="text-discord-muted leading-relaxed mb-4">
                       Centuries have passed, and the details of that ancient war have faded, even in the minds of the Arvendor. But the Ombric have never forgotten. Their memory of defeat burns bright, feeding a deep hatred and a thirst for revenge.
                     </p>
                     <p className="text-discord-muted leading-relaxed">
                       Now, the ruler of the underworld is dying, and a struggle for power has begun. Astaroth, a master of manipulation, sees his chance to rise. Most Ombric cannot leave the underworld because of the powerful enchantments left by the Arvendor, but a few of the strongest can break free for a short time. Meanwhile, Astaroth works in secret, spreading chaos across the world above. Few realize the danger he poses. His influence has even reached the Oakenra, as he has made a secret pact with one of their powerful leaders. This hidden alliance could soon tear apart the world above, piece by piece.
                     </p>
                   </div>
                 </div>
               )}
             </div>
           </div>
         </div>
       )}

      {/* Notable Characters Section */}
      {activeSection === 'characters' && (
        <div className="bg-discord-light rounded-lg border border-gray-600/50">
          <div className="p-6 border-b border-gray-600/50">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-discord-text">Notable Characters</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Old Gods */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  The Old Gods
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-medium text-discord-text">Zimos</div>
                    <div className="text-sm text-discord-muted">God of Thunder</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-medium text-discord-text">Balthazar</div>
                    <div className="text-sm text-discord-muted">God of Justice</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">💀</div>
                    <div className="font-medium text-discord-text">Mortem</div>
                    <div className="text-sm text-discord-muted">God of Death</div>
                  </div>
                </div>
              </div>

              {/* Main Characters */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-red-400" />
                  Dark Forces
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🧙‍♂️</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Astaroth</div>
                      <div className="text-sm text-discord-muted mb-3">The Royal Wizard of the Underworld</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Astaroth, the royal wizard of the underworld, is a master of dark magic, known for his ruthless skill and cold ambition. His presence is powerful and intimidating, and his knowledge of the arcane arts is vast and dangerous. Many fear him, not just for his magic, but for his ability to manipulate and scheme from the shadows.
                        </p>
                        <p>
                          Astaroth's past is surrounded by mystery. Long ago, he was said to be a noble scholar, a man of wisdom and learning. Some stories even claim that he once accompanied Mahol the Endless on a pilgrimage to Skyridge Peak. However, Astaroth refuses to speak about his former life.
                        </p>
                        <p>
                          Rumors and whispers about who he truly was are common, but none can be proven. Astaroth never confirms - or denies - anything about his past, leaving the truth hidden in darkness, just like the man himself.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💀</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Ravenna</div>
                      <div className="text-sm text-discord-muted mb-3">The Devil's Bargain</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Ravenna, having made a dark bargain with the devil, has become a fearsome embodiment of death itself. Her presence is chilling, and her gaze seems to pierce straight into the soul, leaving only dread behind. She wields her newfound powers with a cold, malevolent grace, fully embodying the essence of demise and despair.
                        </p>
                        <p>
                          Ravenna often finds herself in a quiet power struggle with Astaroth. While Astaroth weaves his dark web across the world, Ravenna focuses on controlling the one who spins it. Her philosophy is simple: if you can make someone else do the work, why do it yourself?
                        </p>
                        <p>
                          Among the Eldorians, Ravenna inspires even greater fear than Astaroth. They see her as the true threat to humanity. Astaroth is ruthless, unstoppable, and willing to destroy anything that stands in his way. But Ravenna is something worse. She is cold, calculating, and terrifyingly patient. At times, she can even be unusually pleasant - charming, seductive, and disarmingly kind when it suits her goals.
                        </p>
                        <p>
                          Ravenna is a walking contradiction. She once killed her own parents in a terrifying fit of rage, yet in other moments shows an almost inhuman level of restraint under extreme pressure. One thing remains certain: while Astaroth openly spreads his chaos, Ravenna remains disturbingly silent. And it is that silence that truly terrifies the Arvendorians.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚔️</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Thorgarr</div>
                      <div className="text-sm text-discord-muted mb-3">The Faceless Enforcer</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Thorgarr, a typical grunt in the service of darkness, is the very image of brute strength. His name is closely tied to violence and brutality, and he follows orders without question. With his massive physique and lack of individuality, Thorgarr acts as a faceless enforcer of malevolence.
                        </p>
                        <p>
                          What he lacks in intelligence, he makes up for in sheer power. Thorgarr is dangerous - not because he is cruel by choice, but because violence is simply part of who he is. He does not truly understand the consequences of his actions. To him, every enemy he kills is nothing more than another fly to swat.
                        </p>
                        <p>
                          The Oakenra philosophers often study Thorgarr's existence, using him as the center of a major debate: Is true evil based only on a person's actions, or must they also understand the wrong they are doing? Thorgarr challenges this idea. Can a man be truly evil if he acts without awareness, much like a lion hunting its prey? After all, a lion is not evil - it is simply acting according to its nature.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🛡️</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Vandellian</div>
                      <div className="text-sm text-discord-muted mb-3">Commander of the Royal Guards</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Vandellian, the commander of the royal guards of the underworld, stands as the formidable successor to Svernom, who was exiled for disobedience. His nature is steeped in evil, a stark contrast to his predecessor. Adorned in remarkable armor of black and red, Vandellian embodies the fearsome authority and dark elegance of his position.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
               
               {/* Exiled and Disgraced */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Shield className="w-4 h-4 text-gray-400" />
                   The Exiled
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🛡️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Svernom</div>
                       <div className="text-sm text-discord-muted mb-3">The Disgraced Warrior</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Svernom, a disgraced warrior with horrific facial injuries, possesses a stoic demeanor and a perspective that sees the world in its truest form. Beneath his hardened exterior lies a good heart, rarely revealed. Once a member of the royal guards of the underworld, his defiance against the king led to his exile.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Divine Beings */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Crown className="w-4 h-4 text-gold-400" />
                   Divine Beings
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">👼</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Katiyara</div>
                       <div className="text-sm text-discord-muted mb-3">The Divine Healer</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Katiyara, a demi-god of ethereal beauty, possesses blonde hair and captivating blue eyes. Celebrated as the world's most powerful healer, her kindness resonates deeply in her every action. As a direct descendant of a god, she embodies both celestial allure and unparalleled healing gifts, embodying grace and compassion.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Knights and Warriors */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Sword className="w-4 h-4 text-silver-400" />
                   Knights & Warriors
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🛡️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Divinus</div>
                       <div className="text-sm text-discord-muted mb-3">The Loyal Knight</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Divinus, a knight clad in heavy armor, epitomizes loyalty. His towering presence, accentuated by the robust armor, is a testament to his steadfast nature. His unwavering dedication is as solid as the steel he wears, making him a paragon of honor and fidelity.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">⚔️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Elfirma</div>
                       <div className="text-sm text-discord-muted mb-3">The Unyielding Warrior</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Elfirma, a strong warrior with blonde hair, is a paragon of strength and valor. Adorned in heavy armor, she stands unyielding in the face of adversity. Her warrior spirit is as formidable as her armor, symbolizing her unbreakable resolve and exemplary courage.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">⛪</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Mircus</div>
                       <div className="text-sm text-discord-muted mb-3">The Templar Knight</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Mircus, a templar knight and valiant warrior, stands as a bastion of unwavering devotion to the church and the worship of Odith. His life is dedicated to protecting the innocent, embodying the virtues of courage and righteousness. His presence is a symbol of hope and steadfast faith.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Shadow Dwellers */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Moon className="w-4 h-4 text-purple-400" />
                   Shadow Dwellers
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🗡️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Lucian</div>
                       <div className="text-sm text-discord-muted mb-3">The Masked Guardian</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Lucian, a figure shrouded in mystery, is always masked, embracing the shadows as his ally. His sneaky and cunning nature is honed by his devotion to the shadowblades' secretive arts. Lucian's presence is barely felt, yet his influence is profound, a silent guardian of the night.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">😈</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Feron</div>
                       <div className="text-sm text-discord-muted mb-3">The Devil's Warrior</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           A embodiment of darkness, marked by evil and a haunting past of making a deal with the devil. This untrustworthy warrior of the night roams with a lost soul, a shadow amongst shadows. His resolve is chilling, stopping at nothing to achieve his sinister goals, a testament to his ominous pact.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">💔</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Gerrin</div>
                       <div className="text-sm text-discord-muted mb-3">The Fallen Brother</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Gerrin, a warrior of the night, grapples with his innate goodness and the evil he's come to embody. As Feron's brother, his naivety led him astray, born into circumstances that darkened his path. Yet, beneath his hardened exterior lies a heart yearning for redemption, hinting at a future where he might right his wrongs.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🗡️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Freya</div>
                       <div className="text-sm text-discord-muted mb-3">The Cat-Loving Assassin</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Freya, a sneaky blonde baby-faced assassin with a swift demeanor and an obsession for cats. Her movements are quick and graceful, mirroring the felines she adores. Her light-footedness and agility make her a cunning presence.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">👑</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Shiera</div>
                       <div className="text-sm text-discord-muted mb-3">The Dark Prince</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Sheira, the dark haired prince, harbors a grand ambition to conquer the world. Driven by a deep-seated desire to impress his father, the king of the underworld, his path is marked by ruthless decisions and the tragic cost of many innocent lives.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Elven Folk */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <TreePine className="w-4 h-4 text-green-400" />
                   Elven Folk
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🧝‍♀️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Elfina</div>
                       <div className="text-sm text-discord-muted mb-3">The Cautious Ally</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Elfina, a cunning yet loyal elf, boasts striking blonde hair and vivid green eyes. Her trust is hard-won, reflecting her cautious nature. Once committed, she's unwaveringly reliable. Her elven heritage adds grace to her astute mannerisms, making her a dependable ally with a depth of wisdom.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Oakenra Council */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Users className="w-4 h-4 text-brown-400" />
                   Oakenra Council
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🌳</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Oakrum</div>
                       <div className="text-sm text-discord-muted mb-3">The Wise Elder</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Oakrum, an Oakenra, ancient and wise, possesses a heart overflowing with kindness. Esteemed as a member of the revered elder council, he stands apart with a vision of unity. While the council remains divided, he champions the cause of fostering communication with other civilizations, driven by a profound wisdom and an unwavering belief in harmony.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🌿</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Oilegeist</div>
                       <div className="text-sm text-discord-muted mb-3">The Ambitious Councilor</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Oilegeist, a newly elected member of the Oakenra council, fueled by ambition to dominate the world. Relentlessly sparring with Oakrum, their visions clash. They fervently view the Oakenra civilization as superior, destined to reign above all others.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🔥</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Thornrend</div>
                       <div className="text-sm text-discord-muted mb-3">The Fire-Loving Paradox</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Thornrend, a young and enigmatic figure, embodies the essence of a wild card. Their unpredictable nature keeps others guessing. Remarkably, despite their wooden form, they possess an unusual fondness for fire, a paradox within their very being.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Common Folk */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Home className="w-4 h-4 text-amber-400" />
                   Common Folk
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">👨‍🌾</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Roclus</div>
                       <div className="text-sm text-discord-muted mb-3">The Pragmatic Farmer</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Roclus, a simple farmer with an air of wisdom, leads a plain and unremarkable life. His neutral stance in a world of contrasting forces is pragmatic; he interacts with both good and evil creatures, motivated by the gold they bring.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">🌹</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Isolde</div>
                       <div className="text-sm text-discord-muted mb-3">The Shy Maiden</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Isolde exudes shyness. Her eyes, often downcast, hide untold stories. The red fabric of her dress flows gracefully, symbolizing a quiet strength. Isolde's unobtrusive presence belies a deep, thoughtful personality, inviting curiosity and intrigue.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Enigmatic Figures */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Eye className="w-4 h-4 text-purple-400" />
                   Enigmatic Figures
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">✨</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Leilatha</div>
                       <div className="text-sm text-discord-muted mb-3">The Silver-Haired Optimist</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Leilatha, with her striking silver hair, exudes energy and humor. Her ever-positive attitude enables her to overcome adversity with grace. Known for her exceptional friendliness and welcoming nature, she radiates warmth and resilience, making her a cherished presence in any circle.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">💎</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Melriel</div>
                       <div className="text-sm text-discord-muted mb-3">The Beautiful Enigma</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Melriel, with her luminous blonde hair and captivating blue eyes, presents an enigmatic blend of stunning beauty and intricate character. Stubborn and often cold, her actions teeter on the edge of moral ambiguity. Despite her allure, Melriel's untrustworthy nature weaves a complex web around her true intentions.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Orc Warriors */}
               <div className="bg-discord-dark rounded-lg p-4">
                 <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                   <Axe className="w-4 h-4 text-red-400" />
                   Orc Warriors
                 </h4>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="text-3xl">⚔️</div>
                     <div>
                       <div className="font-bold text-discord-text text-lg">Orcenzum</div>
                       <div className="text-sm text-discord-muted mb-3">The Simple Commander</div>
                       <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                         <p>
                           Orcenzum, an orc warrior, embodies the raw essence of evil yet remains a simple and loyal follower. As a commander of a small group, he grapples with the nuances of leadership, often finding himself at odds with the complexities of command. His straightforward nature contrasts with the responsibilities of his role.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Heroes and Travelers */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-400" />
                  Heroes & Travelers
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⛵</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Bronn</div>
                      <div className="text-sm text-discord-muted mb-3">The Lost Sailor</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Bronn, a traveler known for his incredible versatility and skill in sailing, was once a trader of exotic goods from distant lands. His life changed forever when he set out on a quest to defeat the witch Isodora.
                        </p>
                        <p>
                          Since then, no one has seen or heard from him. Whispers in the wind speak of dark rituals performed by Isodora atop Anglo Hill, deep into the night. These chilling rumors suggest that Bronn may have failed in his mission - and met a grim fate.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Celestria</div>
                      <div className="text-sm text-discord-muted mb-3">The Starlight Guardian</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Celestria, an Arvendorian cloaked in starlight, wields ancient magic with a grace that seems to stand outside of time. Her deep well of wisdom lights the way for those lost in darkness. As a guardian of peace, her presence calms troubled souls, and her healing touch can mend even the deepest wounds.
                        </p>
                        <p>
                          To most, Celestria appears to embody pure kindness and compassion. But beneath this shining surface lies a different story - a story of broken trust and a heart that has been deeply wounded.
                        </p>
                        <p>
                          Yet, you would never know it. Celestria hides her pain, choosing instead to put the needs of others before her own. Her strength is not just in magic, but in her endless commitment to helping others, even at the cost of her own well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚒️</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Fendral</div>
                      <div className="text-sm text-discord-muted mb-3">The Ambitious Blacksmith</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Fendral, a young and ambitious Eldorian, carries a bright spark in his eyes, showing his eagerness to make a difference. Quick-thinking and always willing to learn, he faces challenges with youthful energy and a strong sense of right and wrong. He is deeply driven to improve the world around him.
                        </p>
                        <p>
                          Fendral was born to a blacksmith, but rumors claim he is the illegitimate son of a king from a distant land. The truth of his origins is hidden in the Eldorian archives, but Fendral does not care. To him, the man who raised him - whether by blood or by choice - is his true father. His loyalty lies with the family that loved and shaped him, not with any hidden royal bloodline.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legendary Figures */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Legendary Figures
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🧙‍♂️</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Mahol the Endless</div>
                      <div className="text-sm text-discord-muted mb-3">The Eternal Sage</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Mahol the Endless. Mahol the Wise. Mahol the Unforgiving. Just a few of the many names whispered through the generations.
                        </p>
                        <p>
                          The Arvendor Archives describe him as an old man - a quiet loner. Short and stubby, with a long white beard and an innocent look.
                        </p>
                        <p>
                          Yet don't let his looks fool you. Simply being near him, as he sits motionless at the center of his hut, makes you feel his power. Ancient, quiet, and overwhelming.
                        </p>
                        <p>
                          He rarely speaks... but when he does, every word feels like it's wrapped in thousands of years of wisdom... maybe even more.
                        </p>
                        <p>
                          He's always been here. And chances are, he always will be. Some believe he's a god. Others think he's a demon. And a few say he's something even greater — the living embodiment of nature itself.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tricksters and Spies */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  Tricksters & Spies
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🕷️</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Onroth</div>
                      <div className="text-sm text-discord-muted mb-3">The Web Weaver</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Onroth, an Oakenra, akin to a cunning trickster, possesses a sly demeanor reminiscent of mischievous deities. Skillful in the art of deception, they expertly weave intricate webs of lies, cultivating an expansive network of spies to further their enigmatic agenda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desert Sages */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-400" />
                  Desert Sages
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏺</div>
                    <div>
                      <div className="font-bold text-discord-text text-lg">Ankhotep</div>
                      <div className="text-sm text-discord-muted mb-3">The Wise Advisor</div>
                      <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                        <p>
                          Ankhotep, a name steeped in wisdom and intellect, was once an esteemed advisor to an emperor. However, his unwavering commitment to family led him to choose a humble life in the desert. A paragon of familial devotion, he embodies both the brilliance of the mind and the warmth of the heart.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ancient Civilizations */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Book className="w-4 h-4 text-amber-400" />
                  Ancient Peoples
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🏛️</div>
                    <div>
                      <div className="font-medium text-discord-text">The Plebeians</div>
                      <div className="text-sm text-discord-muted mb-2">First Civilization of Valaron</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        The first civilization to roam the expanse of Valaron, living humble lives within the earth. Their existence was a tapestry of travel and simplicity, with unwavering reverence for the Old Gods manifest in scattered temples across the supercontinent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Items and Pets Section */}
      {activeSection === 'items' && (
        <div className="space-y-6">
          {/* Equipment Overview */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-discord-text">Equipment System</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-discord-muted leading-relaxed mb-4">
                  In Valaron, equipment is the cornerstone of character progression. Unlike many realms where gear is found through chance encounters, Valaron's artisans craft items using ancient recipes discovered in the depths of dungeons and forgotten ruins.
                </p>
                <p className="text-discord-muted leading-relaxed mb-4">
                  Each piece of equipment carries the essence of its creator and the materials from which it was forged. The quality of an item determines not only its power but also its potential for enhancement through mystical upgrade stones.
                </p>
              </div>
            </div>
          </div>

          {/* Item Types */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Sword className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-discord-text">Weapon Categories</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⚔️</div>
                    <div>
                      <div className="font-bold text-discord-text">Swords</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Balanced weapons that enhance Attack Power, Agility, Accuracy, and Critical Damage. Favored by knights and warriors for their versatility in combat.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🗡️</div>
                    <div>
                      <div className="font-bold text-discord-text">Daggers</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Swift blades that boost Attack Power, Agility, Accuracy, and Critical Damage. Perfect for rogues and assassins who rely on speed and precision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏹</div>
                    <div>
                      <div className="font-bold text-discord-text">Bows</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Ranged weapons that increase Attack Power, Agility, Accuracy, Critical Damage, and Hunting Efficiency. Essential for hunters and rangers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⛏️</div>
                    <div>
                      <div className="font-bold text-discord-text">Pickaxes</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Specialized tools for mining precious ores from the depths of Valaron's mountains and caverns.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🪓</div>
                    <div>
                      <div className="font-bold text-discord-text">Felling Axes</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Woodcutting implements used to harvest timber from the enchanted forests of the realm.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎣</div>
                    <div>
                      <div className="font-bold text-discord-text">Fishing Rods</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Angling equipment for catching fish from Valaron's pristine waters and mystical pools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Armor Types */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-discord-text">Armor & Protection</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⛑️</div>
                    <div>
                      <div className="font-bold text-discord-text">Helmets</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Head protection that increases Protection, Agility, and Accuracy. Essential for surviving the perils of combat.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <div className="font-bold text-discord-text">Chestplates</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Body armor that enhances Protection, Agility, Accuracy, and Critical Chance. The cornerstone of any warrior's defense.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧤</div>
                    <div>
                      <div className="font-bold text-discord-text">Gauntlets</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Hand protection that boosts Protection, Agility, and Accuracy. Crucial for maintaining weapon grip in battle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <div className="font-bold text-discord-text">Shields</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Defensive equipment that increases Protection, Agility, and Accuracy. A stalwart companion for any frontline fighter.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🦵</div>
                    <div>
                      <div className="font-bold text-discord-text">Greaves</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Leg armor that enhances Protection, Agility, and Accuracy. Protects the lower body from enemy attacks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">👢</div>
                    <div>
                      <div className="font-bold text-discord-text">Boots</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Footwear that increases Protection, Agility, and Movement Speed. Essential for traversing Valaron's diverse terrains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Tiers */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-discord-text">Quality Tiers</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-discord-muted leading-relaxed mb-6">
                  The quality of an item determines its power and rarity. Higher quality items possess greater stat bonuses and can be upgraded more extensively.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-600/20 rounded-lg">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <div>
                      <div className="font-bold text-gray-300">Standard</div>
                      <div className="text-sm text-discord-muted">Basic quality • Up to 5 upgrades</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-600/20 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <div>
                      <div className="font-bold text-green-300">Refined</div>
                      <div className="text-sm text-discord-muted">Improved quality • Up to 5 upgrades</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div>
                    <div>
                      <div className="font-bold text-blue-300">Premium</div>
                      <div className="text-sm text-discord-muted">High quality • Up to 10 upgrades</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-600/20 rounded-lg">
                    <div className="w-4 h-4 bg-purple-400 rounded"></div>
                    <div>
                      <div className="font-bold text-purple-300">Epic</div>
                      <div className="text-sm text-discord-muted">Rare quality • Up to 10 upgrades</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-600/20 rounded-lg">
                    <div className="w-4 h-4 bg-orange-400 rounded"></div>
                    <div>
                      <div className="font-bold text-orange-300">Legendary</div>
                      <div className="text-sm text-discord-muted">Legendary quality • 12-16 upgrades</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-600/20 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <div>
                      <div className="font-bold text-red-300">Mythic</div>
                      <div className="text-sm text-discord-muted">Mythic quality • 17-35 upgrades</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Upgrade System */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-discord-text">Equipment Upgrade System</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-discord-muted leading-relaxed mb-4">
                    Equipment can be enhanced through the application of Upgrade Stones, significantly boosting their effectiveness in combat and skill activities. The upgrade process becomes progressively more challenging and time-consuming as items reach higher tiers.
                  </p>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Hammer className="w-4 h-4 text-orange-400" />
                    Upgrade Requirements
                  </h4>
                  <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                    <p>
                      The number of Upgrade Stones required depends on both the equipment's quality and type. Higher quality items demand more resources but offer greater potential improvements.
                    </p>
                    <p>
                      <span className="text-red-300 font-semibold">Mythic Equipment:</span> Requires one Dragon Soulstone in addition to standard upgrade stones for each enhancement level, making them the most challenging to improve.
                    </p>
                  </div>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    Upgrade Duration
                  </h4>
                  <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                    <p>
                      The time required to complete an upgrade increases exponentially with each tier. Early upgrades may complete within minutes, while high-tier enhancements can take hours or even days to finish.
                    </p>
                  </div>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    Upgrade Limits by Quality
                  </h4>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex justify-between items-center p-2 bg-gray-600/20 rounded">
                        <span className="text-gray-300 font-medium">Standard</span>
                        <span className="text-discord-muted text-sm">5 Tiers</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-green-600/20 rounded">
                        <span className="text-green-300 font-medium">Refined</span>
                        <span className="text-discord-muted text-sm">5 Tiers</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-600/20 rounded">
                        <span className="text-blue-300 font-medium">Premium</span>
                        <span className="text-discord-muted text-sm">10 Tiers</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-purple-600/20 rounded">
                        <span className="text-purple-300 font-medium">Epic</span>
                        <span className="text-discord-muted text-sm">10 Tiers</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-600/20 rounded">
                        <span className="text-orange-300 font-medium">Legendary</span>
                        <span className="text-discord-muted text-sm">12-16 Tiers</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-600/20 rounded">
                        <span className="text-red-300 font-medium">Mythic</span>
                        <span className="text-discord-muted text-sm">17-35 Tiers</span>
                      </div>
                    </div>
                    <p className="text-discord-muted text-sm leading-relaxed mt-4">
                      <span className="text-orange-300 font-semibold">Note:</span> For Legendary and Mythic equipment, the upgrade limit is tied to the specific item rather than just its quality tier. This means that a more powerful legendary helmet might allow for more upgrades than a weaker one of the same quality.
                    </p>
                  </div>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-purple-400" />
                    Obtaining Equipment
                  </h4>
                  <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                    <p>
                      Unlike traditional loot systems, equipment in Valaron is primarily obtained through crafting. Recipes are earned by completing dungeon runs, where brave adventurers face challenging encounters.
                    </p>
                    <p>
                      Alternatively, both recipes and finished equipment can be purchased from the market, though crafting remains the most reliable method for obtaining specific gear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pets System */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-400" />
                <h3 className="text-lg font-bold text-discord-text">Companion Creatures</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-discord-muted leading-relaxed mb-4">
                    In Valaron, pets aren't just loyal companions - they're a key part of your adventure, offering unique advantages and stat bonuses. With a wide variety of pets to choose from, each one excels in specific roles thanks to their differing abilities.
                  </p>
                  <p className="text-discord-muted leading-relaxed mb-6">
                    These mystical creatures are born from enchanted eggs discovered in the lairs of powerful World Bosses, requiring careful incubation and nurturing to reach their full potential.
                  </p>
                </div>
                
                {/* Pet Stats */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    Pet Stats & Bonuses
                  </h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">🏃</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Movement Speed</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Larger pets tend to boast higher Movement Speed stats. This is the primary way to boost your character's movement speed.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-lg">⚡</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Agility</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Agility varies between pets, with some naturally outperforming others in speed and reflexes.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">📈</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Stat Addition</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              When equipped, all pet stats are added to your character's. Only one pet can be equipped at a time.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-lg">🎯</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Pet Mastery Bonus</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Pet Mastery skill increases pet stats from 0% to 20% bonus at level 100.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pet Care */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    Pet Care & Status
                  </h4>
                  <div className="space-y-4">
                    <p className="text-discord-muted text-sm leading-relaxed">
                      Keep your pet content and fed to maintain its stat bonuses. Neglected pets become unhappy and hungry, leading to decreased stat bonuses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">🍖</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Feeding</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Feed your pet to improve hunger levels. Cooked fish and prepared meats work best.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-lg">🤗</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Patting</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Pat your pet by clicking on it to boost happiness. Higher Pet Mastery increases happiness gained (15-150 points).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">⏰</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Time Decay</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Happiness and hunger levels deplete over time, requiring regular care and attention.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-lg">💯</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Mastery Benefits</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              At level 100 Pet Mastery, one pat can completely fill your pet's happiness bar (150 points).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pet Battles */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Sword className="w-4 h-4 text-red-400" />
                    Pet Battles & Experience
                  </h4>
                  <div className="space-y-4">
                    <p className="text-discord-muted text-sm leading-relaxed">
                      Engage your pets in battles against enemies to gain experience and enhance their stats over time. Equipped pets also gain experience from your battles.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">⚔️</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Battle Duration</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Battle duration depends on pet health and stats. Pets return when health reaches 0.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-lg">📍</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Location Return</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Pets automatically return to their battle location. You must travel there to interact with them.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">📊</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Experience Rates</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Stronger enemy locations provide higher experience per second for battling pets.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-lg">⏱️</div>
                          <div>
                            <div className="font-semibold text-discord-text text-sm">Battle Length</div>
                            <p className="text-discord-muted text-xs leading-relaxed">
                              Pet battles last much longer than character battles since pets aren't as strong.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pet Acquisition */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    Pet Eggs & Acquisition
                  </h4>
                  <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                    <p>
                      Pet eggs are obtained exclusively from World Bosses and start incubation immediately when added to your pet inventory.
                    </p>
                    <p>
                      The most powerful World Bosses guard the rarest legendary pet eggs. These extraordinary creatures possess unique abilities and form unbreakable bonds with their companions.
                    </p>
                    <p>
                      The incubation period varies by egg rarity, with legendary eggs requiring the most patience but yielding the most powerful companions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crafting Materials */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <TreePine className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-discord-text">Resources & Materials</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🪵</div>
                    <div>
                      <div className="font-bold text-discord-text">Logs & Timber</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Harvested from the ancient forests using specialized felling axes. Essential for crafting wooden weapons and tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🐟</div>
                    <div>
                      <div className="font-bold text-discord-text">Fish</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Caught from rivers and lakes using fishing rods. Can be cooked into nourishing food for both adventurers and their pets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⛏️</div>
                    <div>
                      <div className="font-bold text-discord-text">Ores & Metal Bars</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Mined from deep caverns and smelted into bars. The foundation for crafting metal weapons and armor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧪</div>
                    <div>
                      <div className="font-bold text-discord-text">Potions & Elixirs</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Alchemical brews that provide temporary enhancements to skills and abilities. Effects last for specific durations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💎</div>
                    <div>
                      <div className="font-bold text-discord-text">Essence Crystals</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Mystical gems that provide skill bonuses based on usage rather than time. Perfect for extended activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📜</div>
                    <div>
                      <div className="font-bold text-discord-text">Recipes</div>
                      <p className="text-discord-muted text-sm leading-relaxed">
                        Ancient blueprints discovered in dungeons. Unlock the ability to craft powerful equipment and items.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item Types & Categories */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-discord-text">Item Types & Categories</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <p className="text-discord-muted leading-relaxed mb-6">
                  Valaron features a diverse array of items, each serving specific purposes in your adventures. From combat equipment to crafting materials, understanding item types is crucial for effective gameplay.
                </p>

                {/* Combat Equipment */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Sword className="w-4 h-4 text-red-400" />
                    Combat Equipment
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">⚔️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Swords</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Attack Power, Agility, Accuracy, Critical Damage
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🗡️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Daggers</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Attack Power, Agility, Accuracy, Critical Damage
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🏹</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Bows</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Attack Power, Agility, Accuracy, Critical Damage, Hunting Efficiency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">⛑️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Helmets</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Protection, Agility, Accuracy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🛡️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Chestplates</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Protection, Agility, Accuracy, Critical Chance
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🧤</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Gauntlets</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Protection, Agility, Accuracy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🛡️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Shields</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Protection, Agility, Accuracy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🦵</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Greaves</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Protection, Agility, Accuracy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">👢</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Boots</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Increases Protection, Agility, Movement Speed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gathering Tools */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-400" />
                    Gathering Tools
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="text-lg">🎣</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">Fishing Rods</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          Used to catch fish via the Fishing skill
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-lg">⛏️</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">Pickaxes</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          Used to mine ore via the Mining skill
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-lg">🪓</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">Felling Axes</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          Used to cut wood via the Woodcutting skill
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources & Raw Materials */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-amber-400" />
                    Resources & Raw Materials
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🪵</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Logs</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained when cutting logs using the Woodcutting skill. Used when forging items
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🐟</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Fish</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained when catching fish using the Fishing skill. Fish can then be cooked into food
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">⛏️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Ore</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained when mining ore veins with the Mining skill. Ore can be smelted into iron bars
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🔩</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Metal Bars</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained via the Smelting skill by smelting ores into bars. Used for crafting armor and metal weapons
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🍖</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Food</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained when cooking fish or meat. Can increase character's health and be fed to pets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🧱</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Crafting Materials</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained via loot from enemies when battling. Used when crafting items using the forge
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">💰</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Collectables</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Scrap from defeated enemies. Can be sold to the vendor in exchange for gold coins
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhancement Items */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Enhancement Items
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🧪</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Potions</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Give your character a time-limited boost in certain actions or skills. Effects last 30 minutes in real time
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">💎</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Essence Crystals</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Limited by uses instead of time. Boost applies for the entire duration of performing an action
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">⬆️</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Upgrade Stones</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Used to upgrade Equipment, enhancing their stats and effectiveness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">📜</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Recipes</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Consuming a recipe unlocks that recipe within the forge. Some have limited uses
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🎂</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Cake</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Celebrates IdleMMO Birthday. Increases Battle EXP, Hunt Efficiency, Skill EXP
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Items */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Special Items
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🥚</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Pet Eggs</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained via World Bosses. Start incubation immediately when added to pet inventory
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">📦</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Chests</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Contain a variety of different items. Obtained via campaigns, world bosses and dungeons
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🎨</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Skins</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Used for applying specific skins to the character's skin collection or backgrounds
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🏆</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Campaign Items</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Exclusive to seasonal campaigns. Can be exchanged for campaign points during active periods
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">⭐</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Special Items</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Obtained exclusively from seasonal campaigns. Typically increase experience or efficiency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-lg">🪙</div>
                        <div>
                          <div className="font-semibold text-discord-text text-sm">Tokens</div>
                          <p className="text-discord-muted text-xs leading-relaxed">
                            Used to buy skins, backgrounds, slots and items from Vendor or make donations to the Shrine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Membership */}
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    Membership Benefits
                  </h4>
                  <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                    <p>
                      Membership is an optional subscription offering modest benefits that provide a slight edge against other users. These benefits enhance the overall gameplay experience without creating unfair advantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Combat Section */}
      {activeSection === 'combat' && (
        <div className="space-y-6">
          {/* Combat Overview */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Sword className="w-6 h-6 text-red-400" />
                <h3 className="text-lg font-bold text-discord-text">Combat & Battle System</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-discord-muted leading-relaxed mb-4">
                  Combat in IdleMMO is an engaging system where you battle through stacks of enemies to gain experience and valuable loot. Master the mechanics of battling, hunting, and strategic combat to become a legendary warrior.
                </p>
              </div>
            </div>
          </div>

          {/* Battle Mechanics */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-bold text-discord-text">Battle Mechanics</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* How Battles Work */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Sword className="w-4 h-4 text-red-400" />
                  How Battles Work
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Once you've located a mob, you can start a battle by selecting an enemy and clicking Battle. You may only select one enemy at a time to battle.
                  </p>
                  <p>
                    After selecting an enemy to battle, your character will keep fighting through the entire stack of enemies until one of three things happens:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Your character gets defeated (meaning they've run out of effective health)</li>
                    <li>Your character defeats all the enemies in the stack</li>
                    <li>Your character reaches its maximum idle time, determined by Main Character status and membership subscription</li>
                  </ul>
                </div>
              </div>

              {/* Battle Information */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  Battle Information Display
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Your character's hit chance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Damage your character deals per hit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Damage your character receives per hit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Hits needed to defeat the enemy</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Enemy's hit chance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Enemies defeated over time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-discord-muted text-sm">Enemies remaining to defeat</span>
                    </div>
                  </div>
                </div>
                <p className="text-discord-muted text-xs mt-3">
                  All values depend on your stats, equipment, enemy stats, and the food you brought with you.
                </p>
              </div>

              {/* Battle Limits */}
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  Battle Limits & Rules
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-lg">⏱️</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">Time Limit</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          There is a limit of 8 seconds per enemy. It's not possible to defeat enemies quicker than 8 seconds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-lg">💔</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">Minimum Damage</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          There is a minimum of 1 damage taken per battle. It's impossible to encounter a battle and leave unharmed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Food System */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-discord-text">Food & Effective Health</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-400" />
                  Food Mechanics
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Before starting a battle, you can choose various food items to take with you. These items increase your overall effective health, allowing you to fight for longer.
                  </p>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                    <div className="font-semibold text-green-400 text-sm mb-2">Example Calculation:</div>
                    <p className="text-xs">
                      If your character has 100 HP and you bring 20 food items, each adding 10 HP, your total effective health becomes 300 HP (100 + (20 × 10) = 300).
                    </p>
                  </div>
                  <p>
                    With more effective health, you can take on more enemies without being defeated. If you bring enough food, you might even be able to fight all the way up to your character's maximum idle time.
                  </p>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-400" />
                  Food Usage & Return
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    If you end a battle early, any unused food will be returned to your inventory. The system will attempt to prioritize using the weakest food items first.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="font-semibold text-blue-400 text-sm mb-2">Priority System:</div>
                    <p className="text-xs">
                      If you have 1× 500 HP food item and 100× 100 HP food items, it will try to use the 100 HP items before the 500 HP item. However, this may not always happen exactly like this, as it depends on the battle and when you choose to stop it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stance System */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-discord-text">Combat Stances</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  Stance Selection
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Stance lets you choose which stat you want to focus on when earning EXP rewards after defeating an enemy. You can choose your stance when you start a battle, but you can't change it once the battle begins.
                  </p>
                  <p>
                    When you defeat an enemy, both your Combat Level and selected stats will increase. For example, if you earn 20 EXP from defeating an enemy, 20 EXP will be applied to the stats based on your selected stance, and another 20 EXP will be added to your Combat Level.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <h5 className="font-bold text-discord-text text-sm">Balanced</h5>
                  </div>
                  <p className="text-discord-muted text-xs leading-relaxed">
                    Obtains EXP for every primary stat. For instance, if you get 20 EXP, then each stat will get 5 EXP.
                  </p>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <h5 className="font-bold text-discord-text text-sm">Offensive</h5>
                  </div>
                  <p className="text-discord-muted text-xs leading-relaxed">
                    Obtains EXP only for Strength.
                  </p>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <h5 className="font-bold text-discord-text text-sm">Defensive</h5>
                  </div>
                  <p className="text-discord-muted text-xs leading-relaxed">
                    Obtain EXP only for Defence.
                  </p>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <h5 className="font-bold text-discord-text text-sm">Agile</h5>
                  </div>
                  <p className="text-discord-muted text-xs leading-relaxed">
                    Obtains EXP only for Speed.
                  </p>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <h5 className="font-bold text-discord-text text-sm">Dexterous</h5>
                  </div>
                  <p className="text-discord-muted text-xs leading-relaxed">
                    Obtains EXP only for Dexterity.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-yellow-400">⚠️</div>
                  <h5 className="font-bold text-yellow-400 text-sm">Balanced Stance Note</h5>
                </div>
                <p className="text-discord-muted text-xs leading-relaxed">
                  Using the Balanced stance may result in less EXP if it cannot be divided evenly. For instance, if you defeat an enemy and obtain 25 EXP, each stat will get 6 EXP totaling 24 EXP, and the remaining 1 EXP will be lost.
                </p>
              </div>
            </div>
          </div>

          {/* Enemy Scaling */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-discord-text">Enemy Scaling System</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-amber-400">🧪</div>
                  <h5 className="font-bold text-amber-400 text-sm">Experimental Feature</h5>
                </div>
                <p className="text-discord-muted text-xs leading-relaxed">
                  This feature is currently experimental and available only to characters with membership status for a limited time during testing.
                </p>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-400" />
                  Scaling Requirements
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Once a character reaches Combat Level 80, they unlock the option to scale enemies to match their level.
                  </p>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Scaling Benefits
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-lg">💎</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">Improved Loot</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          Loot increases based on how much the enemy is scaled. This boost is applied through a Magic Find bonus to the character's battle session.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-lg">⭐</div>
                      <div>
                        <div className="font-semibold text-discord-text text-sm">More EXP Gains</div>
                        <p className="text-discord-muted text-xs leading-relaxed">
                          Experience points are scaled to the character's level rather than the enemy's base level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-blue-400" />
                  Magic Find Scaling
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    The difference between the enemy's original level and the character's level determines the loot boost amount - the greater the level gap, the larger the loot increase.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="font-semibold text-blue-400 text-sm mb-2">Magic Find Bonus:</div>
                    <p className="text-xs mb-2">
                      Currently, the bonus magic find scales from +0% to +40%, depending on level distance.
                    </p>
                    <p className="text-xs">
                      Example: A Level 100 character scaling a Level 1 enemy receives the full 40% magic find boost.
                    </p>
                  </div>
                  <p>
                    This scaling approach is designed to avoid major imbalances in loot frequency. For instance, if a Level 100 character scales a Level 99 enemy (increasing its level by just one), it would be unbalanced to grant the full 40% magic find boost.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-red-400">ℹ️</div>
                  <h5 className="font-bold text-red-400 text-sm">Important Note</h5>
                </div>
                <p className="text-discord-muted text-xs leading-relaxed">
                  Magic Find only applies to the loot rates for each item, it does not apply to the chance of obtaining a drop. Scaling an enemy will not increase the "Chance of Loot" value.
                </p>
              </div>
            </div>
          </div>

          {/* Combat Tips */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-discord-text">Combat Tips & Strategy</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-400" />
                    Food Strategy
                  </h4>
                  <p className="text-discord-muted text-sm leading-relaxed">
                    Taking a lot of food with you will increase your effective health, allowing you to battle for longer periods and defeat more enemies.
                  </p>
                </div>

                <div className="bg-discord-dark rounded-lg p-4">
                  <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Equipment Optimization
                  </h4>
                  <p className="text-discord-muted text-sm leading-relaxed">
                    Improving your stats with better equipment means you can defeat enemies faster and with less damage taken. This also means you don't need to use as much food - saving additional time and money.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hunting System */}
          <div className="bg-discord-light rounded-lg border border-gray-600/50">
            <div className="p-6 border-b border-gray-600/50">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-discord-text">Hunting & Enemy Discovery</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  Hunt Mechanics
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Before you jump into combat, you'll first need to locate a group of enemies by going on a hunt. How long your hunt lasts depends on two things: your Movement Speed and your Hunting Mastery.
                  </p>
                  <p>
                    The faster you move and the more skilled you are at hunting, the longer you'll be able to keep up the chase. The longest you can hunt is tied to your character's maximum idle time.
                  </p>
                  <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-3">
                    <div className="font-semibold text-emerald-400 text-sm mb-2">Example:</div>
                    <p className="text-xs">
                      If your character is marked as the "main character" and has an active membership, they can stay in action for up to 8 hours.
                    </p>
                  </div>
                  <p>
                    You can increase your Movement Speed with the help of Pets and you can increase your Hunting Mastery by completing hunts.
                  </p>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  Ending Hunts Early
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    If you need to stop a hunt, just click Cancel Hunt. You'll still receive part of the rewards, based on how long you spent hunting.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="font-semibold text-blue-400 text-sm mb-2">Reward Calculation:</div>
                    <p className="text-xs">
                      If you were hunting 200 enemies over 100 minutes and canceled after 50 minutes, you'd get rewards for 100 enemies since you completed 50% of the hunt.
                    </p>
                  </div>
                  <p>
                    You can restart a hunt at any time, and it will continue from where you left off. Any new enemies you hunt will be added to what you've already hunted. So, if you've already hunted 50 Goblins and start again, the new enemies will stack on top of those 50.
                  </p>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  Enemy Decay System
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Enemies will flee over time if you're not fast enough to engage them in battle. The rate at which they run away depends entirely on your hunting level - the higher your hunting mastery, the fewer enemies will escape.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      <div className="font-semibold text-red-400 text-sm mb-2">Hunting Mastery Level 1:</div>
                      <p className="text-xs">10% of discovered enemies will flee every 3 hours</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                      <div className="font-semibold text-green-400 text-sm mb-2">Hunting Mastery Level 100:</div>
                      <p className="text-xs">Only 2.5% will flee in the same timeframe</p>
                    </div>
                  </div>
                  <p>
                    The timer starts when the enemy is first discovered, and you'll see a countdown in the enemy's dialog box to show you exactly when they are expected to flee.
                  </p>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  Power Hunting
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <p>
                    Power hunting is an optional interactive twist to hunting that gives you the ability to hunt for more items by tapping on enemies that appear on the screen.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                      <div className="font-semibold text-purple-400 text-sm mb-1">Duration</div>
                      <p className="text-xs">10-25 minutes depending on hunting mastery level</p>
                    </div>
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                      <div className="font-semibold text-yellow-400 text-sm mb-1">Experience</div>
                      <p className="text-xs">1-18 EXP depending on hunting mastery level</p>
                    </div>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                      <div className="font-semibold text-blue-400 text-sm mb-1">Spawn Rate</div>
                      <p className="text-xs">Enemies spawn between 6-11 seconds apart</p>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      <div className="font-semibold text-red-400 text-sm mb-1">Cooldown</div>
                      <p className="text-xs">1 hour wait before starting another power hunt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-discord-dark rounded-lg p-4">
                <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  Hunting Formulas
                </h4>
                <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
                  <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3">
                    <div className="font-semibold text-cyan-400 text-sm mb-2">Enemies Per Second Calculation:</div>
                    <div className="text-xs space-y-1">
                      <p>• Base Spawn Rate: 0.03</p>
                      <p>• Max Level: 100</p>
                      <p>• Movement Speed Range: 1-50</p>
                      <p>• Normalized Level: (Character Level - 1) / (Max Level - 1)</p>
                      <p>• Normalized Movement Speed: (Movement Speed - 1) / (50 - 1)</p>
                      <p>• Scaling Factor: 1 + Normalized Level + Normalized Movement Speed</p>
                      <p>• <strong>Final Rate: Base Spawn Rate × Scaling Factor</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-yellow-400">📝</div>
                  <h5 className="font-bold text-yellow-400 text-sm">Important Notes</h5>
                </div>
                <div className="space-y-2 text-discord-muted text-xs leading-relaxed">
                  <p>
                    • You can only hunt enemies that match your combat level. For example, if your combat level is 20, the highest level enemies you can hunt are level 20.
                  </p>
                  <p>
                    • Since v0.23.0, pets can no longer hunt for enemies on behalf of your character. Only your characters can hunt.
                  </p>
                  <p>
                    • Since v0.23.5, there are no limits to the number of enemies you can hunt. Instead, they slowly decay over time.
                  </p>
                  <p>
                    • If you try hunting in higher-level areas without the required combat level, you may end up with no enemies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4">
        <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
          <Sword className="w-4 h-4" />
          Combat Level Guide
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-discord-muted">1-10 Beginner</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-discord-muted">11-30 Novice</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span className="text-discord-muted">31-50 Adept</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-discord-muted">51-70 Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-discord-muted">71-90 Master</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span className="text-discord-muted">91+ Legendary</span>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* Activities & Challenges Section */}
  {activeSection === 'activities' && (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('activities')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'activities'
              ? 'bg-blue-600 text-white'
              : 'bg-discord-secondary text-discord-muted hover:bg-discord-light hover:text-discord-text'
          }`}
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>Activities</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('economy')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'economy'
              ? 'bg-yellow-600 text-white'
              : 'bg-discord-secondary text-discord-muted hover:bg-discord-light hover:text-discord-text'
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Economy</span>
          </div>
        </button>
      </div>

{activeTab === 'activities' && (
  <div className="space-y-6">
       {/* Campaigns */}
       <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-discord-text">Campaigns</h3>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              Campaign Overview
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                Campaigns in IdleMMO provide a completely free, no strings attached battle pass experience, letting players earn various rewards like tokens and exclusive skins.
              </p>
              <p>
                There are two main types of campaigns to engage with: Permanent Campaigns and Seasonal Campaigns.
              </p>
            </div>
          </div>

          {/* Permanent Campaigns */}
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              Permanent Campaigns
            </h4>
            <div className="space-y-4 text-discord-muted text-sm leading-relaxed">
              <p className="mb-4">
                These are the main campaigns of IdleMMO, accessible at any time. They do not expire and can be revisited at your leisure.
              </p>
              
              {/* Bluebell Festival */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">🌸</div>
                  <div className="font-semibold text-blue-400 text-sm">Bluebell Festival</div>
                </div>
                <div className="text-xs text-blue-300 mb-2">Started on 6th December 2023</div>
                <p className="text-xs leading-relaxed">
                  At the farm festival, folks gather for good tunes, tasty food, and a bit of dancing between the cornrows. As night falls, everyone chills under the stars, swapping stories and enjoying the simple joys of farm life.
                </p>
              </div>

              {/* Ombric Uprising */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">⚔️</div>
                  <div className="font-semibold text-red-400 text-sm">Ombric Uprising</div>
                </div>
                <div className="text-xs text-red-300 mb-2">Started on 17th May 2024</div>
                <p className="text-xs leading-relaxed">
                  The Ombric, a dark force from the underworld rises to spread chaos across the land. The once-hidden Ombric civilization emerges, unleashing sinister powers and sowing fear.
                </p>
              </div>

              {/* Echoes of the Ascended */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">🔮</div>
                  <div className="font-semibold text-purple-400 text-sm">Echoes of the Ascended</div>
                </div>
                <div className="text-xs text-purple-300 mb-2">Started on 4th February 2025</div>
                <p className="text-xs leading-relaxed">
                  Mysterious echoes ring through The Citadel, calling to the Arvendor. These whispers come from their ancient godly ancestors. As old powers stir, shadows spread, and long-lost secrets emerge.
                </p>
              </div>
            </div>
          </div>

          {/* Seasonal Campaigns */}
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Seasonal Campaigns
            </h4>
            <div className="space-y-4 text-discord-muted text-sm leading-relaxed">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mb-4">
                <div className="font-semibold text-red-400 text-sm mb-2">⚠️ Important:</div>
                <p className="text-xs">These campaigns are tied to seasonal events and are available only for a limited time. Once a seasonal campaign ends, you cannot access it again.</p>
              </div>
              
              {/* Eve of Shadows */}
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">🎃</div>
                  <div className="font-semibold text-orange-400 text-sm">Eve of Shadows</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-orange-300">
                    <div>2023: 1st November - 8th November (Beta only)</div>
                    <div>2024: 21st October - 4th November</div>
                  </div>
                  <p className="text-xs leading-relaxed">
                    During the Eve of Shadows, adventurers and townsfolk wear cloaks and mystical masks, their paths lit by enchanted jack-o'-lanterns. As the moons rise, quests of candy hunts and legendary ghost tales unfold, with hidden treasures for the bravest souls to discover.
                  </p>
                </div>
              </div>

              {/* Yule Fest */}
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">❄️</div>
                  <div className="font-semibold text-cyan-400 text-sm">Yule Fest</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-cyan-300">
                    <div>2023: 13th December - 3rd January 2024</div>
                    <div>2024: 16th December - 4th January 2025</div>
                  </div>
                  <p className="text-xs leading-relaxed">
                    At Yule Fest, a joyful celebration embraces winter's heart. Amidst frosty realms, folks gather to sculpt snowmen and revel in spirited snowball fights. It's a season of warmth in cold, where sharing moments with family kindles the true spirit of togetherness.
                  </p>
                </div>
              </div>

              {/* Valenfair */}
              <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">💕</div>
                  <div className="font-semibold text-pink-400 text-sm">Valenfair</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-pink-300">2024: 9th February - 20th February</div>
                  <p className="text-xs leading-relaxed">
                    An enchanting festival of love held annually in the heart of the kingdom, where joyous melodies fill the air and the streets are adorned with vibrant hues of pink and red. Couples and friends alike gather in the town square, surrounded by fluttering heart-shaped banners and twinkling fairy lights.
                  </p>
                </div>
              </div>

              {/* Springtide Fair */}
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">🐰</div>
                  <div className="font-semibold text-green-400 text-sm">Springtide Fair</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-green-300">
                    <div>2024: 29th March - 12th April</div>
                    <div>2025: 14th April - 28th April</div>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Welcome spring by participating in the Springtide fair. People from nearby and far come to play games, eat lots of food, and go on egg hunts. It's a time when everyone enjoys the warmer weather and longer days together.
                  </p>
                </div>
              </div>

              {/* Moonlit Festival */}
              <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg">🌙</div>
                  <div className="font-semibold text-indigo-400 text-sm">Moonlit Festival</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-indigo-300">2024: 7th July - 5th August</div>
                  <p className="text-xs leading-relaxed">
                    During the peak of summer, when Valaron's largest moon, Celestia, overlooks Solaris Isle, the streets come alive with the glow of lanterns and the hum of excited voices. The smell of sizzling treats mix with music and laughter. Dancers twirl, artisans showcase mystical crafts, and storytellers weave enchanting tales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Seasonal Campaign Features
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-lg">🎃</div>
                    <div>
                      <div className="font-semibold text-discord-text text-sm">Unique Rewards</div>
                      <p className="text-xs leading-relaxed">
                        They offer unique rewards and skills pertinent to the season. For instance, in the Eve of Shadows campaign, you can collect Pumpkins and exchange them for Campaign Points and rewards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-lg">📍</div>
                    <div>
                      <div className="font-semibold text-discord-text text-sm">Event Locations</div>
                      <p className="text-xs leading-relaxed">
                        These collectibles are acquired through skill-based activities, but first, your character must venture to the event-specific location, available only during the campaign.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="font-semibold text-green-400 text-sm mb-2">💡 Pro Tip:</div>
                <p className="text-xs">
                  Maximize your Campaign Points in seasonal events by focusing on tasks that demand more attention. Building a Snowman, for instance, yields higher points compared to simple Snowball trading. Activities requiring greater effort are more rewarding in the campaign!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              Community Goals
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                In every seasonal campaign, there's a community goal that brings everyone together. Players work together to hit a shared target, and when the goal is reached, everyone is eligible for a boost.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-3">
                  <div className="font-semibold text-emerald-400 text-sm mb-2">How It Works:</div>
                  <ul className="text-xs space-y-1">
                    <li>• The boost lasts for the rest of the campaign</li>
                    <li>• Once the campaign ends, the boost expires</li>
                    <li>• Must contribute at least once to receive the boost</li>
                    <li>• Contributions unlock boost for currently active tier only</li>
                  </ul>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                  <div className="font-semibold text-yellow-400 text-sm mb-2">Tier System:</div>
                  <p className="text-xs mb-2">
                    If the community goal advances to a new tier, you'll need to contribute again to receive the new boost.
                  </p>
                  <p className="text-xs">
                    Example: Contribute for tier 1 boost, then contribute again when tier 2 is reached to get the tier 2 boost.
                  </p>
                </div>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                <div className="font-semibold text-red-400 text-sm mb-2">⚠️ Important Note:</div>
                <p className="text-xs">
                  Unlike boosts provided by the shrine, the boosts from the community goal are not stackable. Any new boost from the community goal will replace the previous one, rather than adding to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travelling & Exploration */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-discord-text">Travelling & Exploration</h3>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              Travelling Overview
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                Embark on journeys across Solaris Isle, where each location is brimming with unique items critical for skill development, such as ores for mining and trees for logging. Moreover, new dungeons await to be discovered in these varied locales.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                <div className="font-semibold text-blue-400 text-sm mb-2">Traveling Made Easy:</div>
                <ul className="text-xs space-y-1">
                  <li>• Start your exploration by clicking the Map button</li>
                  <li>• Navigate and select your next destination from there</li>
                  <li>• 💡 <strong>Pro Tip:</strong> Boost your Movement Speed stat to reduce travel times between locations, making your adventures more efficient and allowing you to gather resources faster</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Teleportation Costs
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                The cost of teleportation is based on your character's total level across all skills, except for those that are whitelisted.
              </p>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="font-semibold text-green-400 text-sm mb-2">Whitelisted Skills (No Cost Impact):</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div>• Springtide Mastery</div>
                  <div>• Shadow Mastery</div>
                  <div>• Lunar Mastery</div>
                  <div>• Guild Mastery</div>
                  <div>• Yule Mastery</div>
                  <div>• Meditation</div>
                </div>
                <p className="text-xs mt-2">
                  These skills have minimal impact on the game's economy, so you can level them up without affecting your teleportation costs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Seasonal Campaign Locations
            </h4>
            <div className="space-y-4 text-discord-muted text-sm leading-relaxed">
              <p>
                Some locations are only available when their seasonal campaign is live. You can only teleport or travel to these event locations while the campaign is active.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                  <div className="font-semibold text-purple-400 text-sm mb-2">Access Rules:</div>
                  <ul className="text-xs space-y-1">
                    <li>• Can only access while campaign is active</li>
                    <li>• Must leave location before switching campaigns</li>
                    <li>• May take up to 10 minutes for location to appear after campaign starts</li>
                    <li>• Auto-teleported out when campaign ends</li>
                  </ul>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <div className="font-semibold text-green-400 text-sm mb-2">💰 Free Teleportation:</div>
                  <p className="text-xs">
                    Teleporting to seasonal campaign locations is completely free - no gold is required!
                  </p>
                </div>
              </div>

              <div className="bg-discord-darker rounded-lg p-3">
                <div className="font-semibold text-discord-text text-sm mb-3">📍 Event Location Directory:</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-600/50">
                        <th className="text-left py-2 px-3 font-semibold text-discord-text">Location</th>
                        <th className="text-left py-2 px-3 font-semibold text-discord-text">Campaign</th>
                      </tr>
                    </thead>
                    <tbody className="text-discord-muted">
                      <tr className="border-b border-gray-700/30">
                        <td className="py-2 px-3 flex items-center gap-2">
                          <div className="text-sm">🌲</div>
                          <span>Wraithwood Forest</span>
                        </td>
                        <td className="py-2 px-3">Eve of Shadows</td>
                      </tr>
                      <tr className="border-b border-gray-700/30">
                        <td className="py-2 px-3 flex items-center gap-2">
                          <div className="text-sm">❄️</div>
                          <span>Yulewood Glades</span>
                        </td>
                        <td className="py-2 px-3">Yule Fest</td>
                      </tr>
                      <tr className="border-b border-gray-700/30">
                        <td className="py-2 px-3 flex items-center gap-2">
                          <div className="text-sm">🎪</div>
                          <span>Springtide Fair</span>
                        </td>
                        <td className="py-2 px-3">Springtide Fair</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 flex items-center gap-2">
                          <div className="text-sm">🌙</div>
                          <span>Moonlit Valley</span>
                        </td>
                        <td className="py-2 px-3">Moonlit Festival</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* World Bosses */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <Skull className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-bold text-discord-text">World Bosses</h3>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Skull className="w-4 h-4 text-red-400" />
              World Boss Overview
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                World Bosses represent a key game feature where players collaborate to vanquish a shared adversary, reaping experience and exclusive rewards in return.
              </p>
              <p>
                World Bosses are spread across Solaris Isle, offering varying challenges. Some bosses require more time to defeat, with battle durations generally reflecting their combat difficulty, though not always strictly.
              </p>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="font-semibold text-green-400 text-sm mb-2">🥚 Pet Egg Source:</div>
                <p className="text-xs">
                  Encountering World Bosses is the main way to acquire Pet Eggs, which are essential for obtaining pets once the incubation period is over.
                </p>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                <div className="font-semibold text-blue-400 text-sm mb-2">⏰ Respawn System:</div>
                <p className="text-xs">
                  After a successful defeat, there is a cooldown period before the boss respawns, usually corresponding to its combat level.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-400" />
              Regular World Bosses
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-600/50">
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Boss</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Level</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">EXP</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Battle</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Respawn</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Location</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Notable Loot</th>
                  </tr>
                </thead>
                <tbody className="text-discord-muted">
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Isadora</td>
                    <td className="py-2 px-2">Lv. 1</td>
                    <td className="py-2 px-2">200</td>
                    <td className="py-2 px-2">60s</td>
                    <td className="py-2 px-2">120m</td>
                    <td className="py-2 px-2">Bluebell Hollow</td>
                    <td className="py-2 px-2">Aquarion Egg, Fluffly Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Malgazar</td>
                    <td className="py-2 px-2">Lv. 10</td>
                    <td className="py-2 px-2">300</td>
                    <td className="py-2 px-2">70s</td>
                    <td className="py-2 px-2">150m</td>
                    <td className="py-2 px-2">Whispering Woods</td>
                    <td className="py-2 px-2">Furbella Egg, Shelly Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Obsidianus</td>
                    <td className="py-2 px-2">Lv. 20</td>
                    <td className="py-2 px-2">450</td>
                    <td className="py-2 px-2">80s</td>
                    <td className="py-2 px-2">180m</td>
                    <td className="py-2 px-2">Eldora</td>
                    <td className="py-2 px-2">Leafy Egg, Whiskers Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Shadowmire</td>
                    <td className="py-2 px-2">Lv. 30</td>
                    <td className="py-2 px-2">650</td>
                    <td className="py-2 px-2">90s</td>
                    <td className="py-2 px-2">210m</td>
                    <td className="py-2 px-2">Crystal Caverns</td>
                    <td className="py-2 px-2">Aquastar Egg, Nutwhisker Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Rogoth</td>
                    <td className="py-2 px-2">Lv. 40</td>
                    <td className="py-2 px-2">800</td>
                    <td className="py-2 px-2">100s</td>
                    <td className="py-2 px-2">240m</td>
                    <td className="py-2 px-2">Skyreach Peak</td>
                    <td className="py-2 px-2">Stardust Egg, Blooplord Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Petrok the Guardian</td>
                    <td className="py-2 px-2">Lv. 50</td>
                    <td className="py-2 px-2">1,000</td>
                    <td className="py-2 px-2">110s</td>
                    <td className="py-2 px-2">270m</td>
                    <td className="py-2 px-2">Enchanted Oasis</td>
                    <td className="py-2 px-2">Wrex Egg, Vulpina Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Lurka Stonefist</td>
                    <td className="py-2 px-2">Lv. 60</td>
                    <td className="py-2 px-2">1,200</td>
                    <td className="py-2 px-2">120s</td>
                    <td className="py-2 px-2">300m</td>
                    <td className="py-2 px-2">Floating Gardens</td>
                    <td className="py-2 px-2">Draconis Egg, Fangor Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Nethrax</td>
                    <td className="py-2 px-2">Lv. 70</td>
                    <td className="py-2 px-2">1,400</td>
                    <td className="py-2 px-2">130s</td>
                    <td className="py-2 px-2">330m</td>
                    <td className="py-2 px-2">Celestial Observatory</td>
                    <td className="py-2 px-2">Raptora Egg, Lumi Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Skarn the Dreadwake</td>
                    <td className="py-2 px-2">Lv. 80</td>
                    <td className="py-2 px-2">1,600</td>
                    <td className="py-2 px-2">140s</td>
                    <td className="py-2 px-2">360m</td>
                    <td className="py-2 px-2">Isle of Whispers</td>
                    <td className="py-2 px-2">Vexalia Egg, Zephyrix Egg</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Voragor</td>
                    <td className="py-2 px-2">Lv. 90</td>
                    <td className="py-2 px-2">2,500</td>
                    <td className="py-2 px-2">150s</td>
                    <td className="py-2 px-2">390m</td>
                    <td className="py-2 px-2">The Citadel</td>
                    <td className="py-2 px-2">Solarix Egg, Aerion Egg</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium text-purple-400">Thal'guth</td>
                    <td className="py-2 px-2">Lv. 95</td>
                    <td className="py-2 px-2">3,500</td>
                    <td className="py-2 px-2">170s</td>
                    <td className="py-2 px-2">420m</td>
                    <td className="py-2 px-2">The Citadel</td>
                    <td className="py-2 px-2">Starmane Egg, Dragon Soulstone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Limited Time World Bosses
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                Special event bosses that appear only during seasonal campaigns, offering unique rewards and experiences.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-600/50">
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">Boss</th>
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">Level</th>
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">EXP</th>
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">Battle</th>
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">Respawn</th>
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">Location</th>
                      <th className="text-left py-2 px-2 font-semibold text-discord-text">Event</th>
                    </tr>
                  </thead>
                  <tbody className="text-discord-muted">
                    <tr className="border-b border-gray-700/30">
                      <td className="py-2 px-2 font-medium text-green-400">Voloris</td>
                      <td className="py-2 px-2">Lv. 10</td>
                      <td className="py-2 px-2">500</td>
                      <td className="py-2 px-2">80s</td>
                      <td className="py-2 px-2">150m</td>
                      <td className="py-2 px-2">Yulewood Glades</td>
                      <td className="py-2 px-2">❄️ Yule Fest</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-medium text-green-400">Altair</td>
                      <td className="py-2 px-2">Lv. 10</td>
                      <td className="py-2 px-2">500</td>
                      <td className="py-2 px-2">80s</td>
                      <td className="py-2 px-2">150m</td>
                      <td className="py-2 px-2">Springtide Fair</td>
                      <td className="py-2 px-2">🌸 Springtide Fair</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dungeons */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <Castle className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-discord-text">Dungeons</h3>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Castle className="w-4 h-4 text-purple-400" />
              Dungeon Overview
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                Dungeons in the game allow you to engage in combat for long periods without needing to interact directly, unlike battling enemies. They are also the main way to get recipes, which you need to craft the strongest items.
              </p>
              <p>
                The game has various dungeons, each with different difficulty levels. As a dungeon's level increases, so does its difficulty, making it harder to succeed.
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                <div className="font-semibold text-purple-400 text-sm mb-2">🏗️ Dungeon Mechanics:</div>
                <ul className="text-xs space-y-1">
                  <li>• Each dungeon has multiple floors shown in the action bar</li>
                  <li>• Once all floors are cleared, the dungeon ends automatically</li>
                  <li>• Requires significant investment of both time and currency</li>
                  <li>• Costs in gold and time increase with dungeon levels</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              Success Chance System
            </h4>
            <div className="space-y-3 text-discord-muted text-sm leading-relaxed">
              <p>
                The success chance determines if you are able to receive loot at the end of the dungeon.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                  <div className="font-semibold text-blue-400 text-sm mb-2">📊 Success Factors:</div>
                  <ul className="text-xs space-y-1">
                    <li>• Protection</li>
                    <li>• Attack Power</li>
                    <li>• Agility</li>
                    <li>• Accuracy</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <div className="font-semibold text-green-400 text-sm mb-2">💡 Important Notes:</div>
                  <ul className="text-xs space-y-1">
                    <li>• Failure still rewards experience points</li>
                    <li>• Success chance only affects loot</li>
                    <li>• Boost stats through leveling and equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-3 flex items-center gap-2">
              <Mountain className="w-4 h-4 text-orange-400" />
              Available Dungeons
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-600/50">
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Dungeon</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Level Required</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Location</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Cost (Gold)</th>
                    <th className="text-left py-2 px-2 font-semibold text-discord-text">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-discord-muted">
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Millstone Mines</td>
                    <td className="py-2 px-2">Lv. 3</td>
                    <td className="py-2 px-2">Bluebell Hollow</td>
                    <td className="py-2 px-2">300</td>
                    <td className="py-2 px-2">15m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Vineyard Labyrinth</td>
                    <td className="py-2 px-2">Lv. 10</td>
                    <td className="py-2 px-2">Bluebell Hollow</td>
                    <td className="py-2 px-2">1,200</td>
                    <td className="py-2 px-2">15m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Verdant Veil</td>
                    <td className="py-2 px-2">Lv. 25</td>
                    <td className="py-2 px-2">Whispering Woods</td>
                    <td className="py-2 px-2">2,400</td>
                    <td className="py-2 px-2">15m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Sylvan Sanctum</td>
                    <td className="py-2 px-2">Lv. 40</td>
                    <td className="py-2 px-2">Whispering Woods</td>
                    <td className="py-2 px-2">3,600</td>
                    <td className="py-2 px-2">15m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Whispering Catacombs</td>
                    <td className="py-2 px-2">Lv. 60</td>
                    <td className="py-2 px-2">Whispering Woods</td>
                    <td className="py-2 px-2">4,800</td>
                    <td className="py-2 px-2">15m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Cursed Asylum</td>
                    <td className="py-2 px-2">Lv. 62</td>
                    <td className="py-2 px-2">Eldoria</td>
                    <td className="py-2 px-2">6,000</td>
                    <td className="py-2 px-2">22m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Forgotten Archives</td>
                    <td className="py-2 px-2">Lv. 65</td>
                    <td className="py-2 px-2">Eldoria</td>
                    <td className="py-2 px-2">9,000</td>
                    <td className="py-2 px-2">30m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Crystal Forge</td>
                    <td className="py-2 px-2">Lv. 70</td>
                    <td className="py-2 px-2">Crystal Caverns</td>
                    <td className="py-2 px-2">15,000</td>
                    <td className="py-2 px-2">39m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Frostbite Spire</td>
                    <td className="py-2 px-2">Lv. 74</td>
                    <td className="py-2 px-2">Skyreach Peak</td>
                    <td className="py-2 px-2">18,000</td>
                    <td className="py-2 px-2">48m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Zenith's Sanctum</td>
                    <td className="py-2 px-2">Lv. 76</td>
                    <td className="py-2 px-2">Skyreach Peak</td>
                    <td className="py-2 px-2">21,000</td>
                    <td className="py-2 px-2">59m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Mirage Citadel</td>
                    <td className="py-2 px-2">Lv. 78</td>
                    <td className="py-2 px-2">Enchanted Oasis</td>
                    <td className="py-2 px-2">24,000</td>
                    <td className="py-2 px-2">70m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Eden's Embrace</td>
                    <td className="py-2 px-2">Lv. 82</td>
                    <td className="py-2 px-2">Floating Gardens of Aetheria</td>
                    <td className="py-2 px-2">27,000</td>
                    <td className="py-2 px-2">83m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Arboreal Labyrinth</td>
                    <td className="py-2 px-2">Lv. 84</td>
                    <td className="py-2 px-2">Floating Gardens of Aetheria</td>
                    <td className="py-2 px-2">30,000</td>
                    <td className="py-2 px-2">96m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Bloodmoon Manor</td>
                    <td className="py-2 px-2">Lv. 86</td>
                    <td className="py-2 px-2">Celestial Observatory</td>
                    <td className="py-2 px-2">33,000</td>
                    <td className="py-2 px-2">111m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Ruins of Old Ranhor</td>
                    <td className="py-2 px-2">Lv. 88</td>
                    <td className="py-2 px-2">Isle of Whispers</td>
                    <td className="py-2 px-2">36,000</td>
                    <td className="py-2 px-2">126m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Volcanic Depths</td>
                    <td className="py-2 px-2">Lv. 90</td>
                    <td className="py-2 px-2">Isle of Whispers</td>
                    <td className="py-2 px-2">39,000</td>
                    <td className="py-2 px-2">142m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">Celestial Enclave</td>
                    <td className="py-2 px-2">Lv. 92</td>
                    <td className="py-2 px-2">The Citadel</td>
                    <td className="py-2 px-2">42,000</td>
                    <td className="py-2 px-2">160m</td>
                  </tr>
                  <tr className="border-b border-gray-700/30">
                    <td className="py-2 px-2 font-medium text-blue-400">The Nexus</td>
                    <td className="py-2 px-2">Lv. 95</td>
                    <td className="py-2 px-2">The Citadel</td>
                    <td className="py-2 px-2">45,000</td>
                    <td className="py-2 px-2">179m</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium text-green-400">Winter Wonderland</td>
                    <td className="py-2 px-2">Lv. 25</td>
                    <td className="py-2 px-2">Yulewood Glades</td>
                    <td className="py-2 px-2">960</td>
                    <td className="py-2 px-2">25m</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-discord-muted">
              <span className="text-green-400">Green entries</span> indicate seasonal/event-exclusive content.
            </div>
          </div>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="p-6 border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-discord-text">Daily Challenges</h3>
          </div>
        </div>
        <div className="p-6">
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-emerald-400" />
              <h4 className="font-bold text-discord-text text-sm">Daily Challenge System</h4>
            </div>
            <p className="text-discord-muted text-xs leading-relaxed">
              Complete daily challenges to earn additional rewards and keep your progression steady. These challenges refresh daily and provide consistent opportunities for advancement.
            </p>
          </div>
        </div>
      </div>
    </div>
)}

{activeTab === 'economy' && (
  <div className="space-y-6">
    {/* Economy & Trading Header */}
    <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-lg p-6 border border-yellow-500/30">
      <div className="flex items-center gap-3 mb-4">
        <Coins className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-bold text-discord-text">Economy & Trading</h2>
      </div>
      <p className="text-discord-muted leading-relaxed">
        Master the art of commerce in IdleMMO through the Market, Vendor, and direct Trading systems. Build your wealth, acquire rare items, and engage in player-driven economics.
      </p>
    </div>

    {/* Market Section */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-discord-text">Market</h3>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="bg-discord-dark rounded-lg p-4">
          <p className="text-discord-muted text-sm leading-relaxed mb-4">
            The Market is your go-to platform for trading items with other players through listings and market orders. Engage in a player-driven economy where supply and demand determine prices.
          </p>
        </div>

        {/* Listings */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-4 h-4 text-blue-400" />
            <h4 className="font-bold text-discord-text text-sm">Listings</h4>
          </div>
          <div className="space-y-3">
            <p className="text-discord-muted text-xs leading-relaxed">
              Listings feature items put up for sale by players across the realm of IdleMMO. Prices here follow the laws of supply and demand, set by the free market.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-xs">⚡ Quick Tip</span>
              </div>
              <p className="text-yellow-200 text-xs">
                Act fast if you spot a bargain! Listings can expire or be snapped up by other players at any moment.
              </p>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4 text-green-400" />
            <h4 className="font-bold text-discord-text text-sm">Purchase Orders</h4>
          </div>
          <div className="space-y-3">
            <p className="text-discord-muted text-xs leading-relaxed">
              Purchase Orders are requests by players looking to buy specific items. If you own an item someone else wants, you can sell it directly at the order price listed.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3 h-3 text-green-400" />
                <span className="text-green-400 font-semibold text-xs">💡 Smart Feature</span>
              </div>
              <p className="text-green-200 text-xs">
                When you list an item for sale, the system checks for matching Purchase Orders. Your item could be sold instantly if it meets an existing order's criteria!
              </p>
            </div>
          </div>
        </div>

        {/* Market Limits */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-red-400" />
            <h4 className="font-bold text-discord-text text-sm">Market Limits</h4>
          </div>
          <p className="text-discord-muted text-xs leading-relaxed mb-4">
            To ensure fair and controlled trading, the market is governed by specific limits for placing listings and orders. These limits vary based on membership status and character levels:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-700/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-3 h-3 text-gray-400" />
                <span className="text-gray-300 font-semibold text-xs">Free Members</span>
              </div>
              <p className="text-gray-400 text-xs">Maximum of 10 individual listings and orders on the market.</p>
            </div>
            <div className="bg-purple-500/20 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-3 h-3 text-purple-400" />
                <span className="text-purple-300 font-semibold text-xs">Subscribed Members</span>
              </div>
              <p className="text-purple-200 text-xs">Maximum of 25 individual listings and orders on the market.</p>
            </div>
            <div className="bg-orange-500/20 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 font-semibold text-xs">Alternative Characters (Alts)</span>
              </div>
              <p className="text-orange-200 text-xs">Must reach a total level of 150 to interact with the market.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Vendor Section */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <Store className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-discord-text">Vendor</h3>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="bg-discord-dark rounded-lg p-4">
          <p className="text-discord-muted text-sm leading-relaxed">
            The vendor in IdleMMO is where players can trade tokens and gold for a variety of skins, items, and account enhancements.
          </p>
        </div>

        {/* Skins */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-pink-400" />
            <h4 className="font-bold text-discord-text text-sm">Skins</h4>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-pink-500/10 border border-pink-500/30 rounded p-3">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-3 h-3 text-pink-400" />
                  <span className="text-pink-300 font-semibold text-xs">Character Skins</span>
                </div>
                <p className="text-pink-200 text-xs">Inspired by the game's lore, each skin features a unique personality and backstory.</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Image className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-300 font-semibold text-xs">Background Skins</span>
                </div>
                <p className="text-blue-200 text-xs">Each comes with a detailed description, adding an artistic touch to your gameplay.</p>
              </div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 font-semibold text-xs">⏰ Time Limited Skins</span>
              </div>
              <p className="text-orange-200 text-xs mb-2">
                Time limited skins are only purchasable for a limited time. Once purchased, the skin will remain on your account even after removal from the store.
              </p>
              <p className="text-orange-300 text-xs font-medium">Note: Time-limited skins may return again in the future.</p>
            </div>
            <div className="bg-gray-600/20 border border-gray-500/30 rounded p-3">
              <p className="text-gray-300 text-xs font-medium">💡 Skins are purely cosmetic and do not confer any gameplay advantages.</p>
            </div>
          </div>
        </div>

        {/* Account & Character Slots */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-4 h-4 text-green-400" />
            <h4 className="font-bold text-discord-text text-sm">Account & Character Slots</h4>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-green-500/10 border border-green-500/30 rounded p-2 text-center">
                <Package className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <span className="text-green-300 text-xs font-medium">Inventory Slots</span>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2 text-center">
                <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <span className="text-blue-300 text-xs font-medium">Character Slots</span>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2 text-center">
                <Heart className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                <span className="text-purple-300 text-xs font-medium">Pet Slots</span>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2 text-center">
                <Vault className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                <span className="text-yellow-300 text-xs font-medium">Bank Slots</span>
              </div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-3 h-3 text-blue-400" />
                <span className="text-blue-300 font-semibold text-xs">Account-Wide Upgrade</span>
              </div>
              <p className="text-blue-200 text-xs mb-1">The Character Slots upgrade is the only upgrade that applies to your entire account.</p>
              <p className="text-blue-300 text-xs font-medium">All other slots are character-specific (meaning they only apply to the character that purchased them).</p>
            </div>
          </div>
        </div>

        {/* Items & Guild Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-amber-400" />
              <h4 className="font-bold text-discord-text text-sm">Items</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-discord-muted text-xs">Bait: Necessary for fishing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-discord-muted text-xs">Potion Materials: Used in potion concocting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-discord-muted text-xs">Empty Crystals: For crafting essence crystals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-discord-muted text-xs">Basic Tools: Pickaxes, Felling Axes, Fishing Rods</span>
              </div>
            </div>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-indigo-400" />
              <h4 className="font-bold text-discord-text text-sm">Guild Icons</h4>
            </div>
            <div className="space-y-2">
              <p className="text-discord-muted text-xs leading-relaxed">
                Guild icons are a way for you to customise the icon of a guild that you are a leader of.
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
                <p className="text-red-200 text-xs">
                  ⚠️ Guild icons are exclusive to guilds where you hold the leadership position. If you transfer leadership, both the guild icon and background will reset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trading Section */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <ArrowRightLeft className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-bold text-discord-text">Trading</h3>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="bg-discord-dark rounded-lg p-4">
          <p className="text-discord-muted text-sm leading-relaxed">
            Trading is a way for characters to directly send items and gold between each other without using the market. Engage in secure, direct transactions with other players.
          </p>
        </div>

        {/* How to Trade */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <ArrowRightLeft className="w-4 h-4 text-emerald-400" />
            <h4 className="font-bold text-discord-text text-sm">How to Start a New Trade</h4>
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-discord-muted text-xs">Navigate to the profile of the character you want to trade with</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-discord-muted text-xs">Press "Trades" to open the trade window and view previous trades</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-discord-muted text-xs">Press "New Trade" to start a new trade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <span className="text-discord-muted text-xs">Add items and gold by pressing the respective buttons</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <span className="text-discord-muted text-xs">Press "Accept" when satisfied. Items transfer when both parties accept</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Fees */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Coins className="w-4 h-4 text-yellow-400" />
            <h4 className="font-bold text-discord-text text-sm">Trading Fees</h4>
          </div>
          <div className="space-y-4">
            <p className="text-discord-muted text-xs leading-relaxed">
              When trading with another character, there is a fee associated with every transaction. The fees are calculated based on membership status:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-600/20 border border-gray-500/30 rounded p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-300 font-semibold text-xs">Free Players</span>
                </div>
                <p className="text-gray-400 text-xs">13% on the total value of the trade offer</p>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-3 h-3 text-purple-400" />
                  <span className="text-purple-300 font-semibold text-xs">Membership Players</span>
                </div>
                <p className="text-purple-200 text-xs">10% on the total value of the trade offer</p>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-300 font-semibold text-xs">Base Fee</span>
              </div>
              <p className="text-yellow-200 text-xs">10 gold to any party sending gold or items</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-3 h-3 text-blue-400" />
                <span className="text-blue-300 font-semibold text-xs">Important Note</span>
              </div>
              <p className="text-blue-200 text-xs mb-1">
                The fee is only calculated on the items and gold that you add to the offer. You do not pay a fee on items and gold you receive.
              </p>
              <p className="text-blue-200 text-xs">
                Any recipient that has not added gold or items to the trade offer will not pay a fee.
              </p>
            </div>
          </div>
        </div>

        {/* Trading Example */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <h4 className="font-bold text-discord-text text-sm">Example: Trade between Non-Member and Member</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-600/50">
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Trader</th>
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Status</th>
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Gold Added</th>
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Item Value</th>
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Total Value</th>
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Fee Rate</th>
                  <th className="text-left py-2 px-2 font-semibold text-discord-text">Fee Amount</th>
                </tr>
              </thead>
              <tbody className="text-discord-muted">
                <tr className="border-b border-gray-700/30">
                  <td className="py-2 px-2 font-medium text-blue-400">Character A</td>
                  <td className="py-2 px-2">Non-Member</td>
                  <td className="py-2 px-2">100</td>
                  <td className="py-2 px-2">200</td>
                  <td className="py-2 px-2">300</td>
                  <td className="py-2 px-2 text-red-400">13%</td>
                  <td className="py-2 px-2 text-red-400">39 Gold</td>
                </tr>
                <tr className="border-b border-gray-700/30">
                  <td className="py-2 px-2 font-medium text-purple-400">Character B</td>
                  <td className="py-2 px-2">Member</td>
                  <td className="py-2 px-2">0</td>
                  <td className="py-2 px-2">1,500</td>
                  <td className="py-2 px-2">1,500</td>
                  <td className="py-2 px-2 text-green-400">10%</td>
                  <td className="py-2 px-2 text-green-400">150 Gold</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs text-discord-muted">
            <p className="mb-1"><strong>Breakdown:</strong></p>
            <p className="mb-1">• Character A adds 100 gold + 200 gold worth of items = 300 gold total value</p>
            <p className="mb-1">• Character B adds 0 gold + 1,500 gold worth of items = 1,500 gold total value</p>
            <p>• Members enjoy a lower fee rate (10%) compared to non-members (13%)</p>
          </div>
        </div>

        {/* Trading Rules & Notes */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <h4 className="font-bold text-discord-text text-sm">Important Trading Rules & Notes</h4>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Trades are final and cannot be reversed</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Administration does not reimburse scams or trades gone wrong</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Pending trades are deleted after 5 days if not updated</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Items from trades may exceed inventory limit temporarily</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Incoming trades can be disabled in character settings</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Maximum 10 pending trades per character</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Maximum 10 unique items per trade (not quantity)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Trade changes require re-acceptance from both parties</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Trading between alt characters is allowed (level 150+ required)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5"></div>
                  <span className="text-discord-muted text-xs">Completed trades are accessible for 3 months</span>
                </div>
              </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-3 h-3 text-red-400" />
                <span className="text-red-300 font-semibold text-xs">⚠️ Safety Reminder</span>
              </div>
              <p className="text-red-200 text-xs">
                While administration will punish offenders, it is up to players to ensure they are trading with trusted players. Always verify trade details before accepting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{activeSection === 'gameinfo' && (
  <div className="space-y-6">
    {/* Game Info Header */}
    <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-6 border border-blue-500/30">
      <div className="flex items-center gap-3 mb-4">
        <Info className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-bold text-discord-text">Game Information</h2>
      </div>
      <p className="text-discord-muted leading-relaxed">
        Stay informed about IdleMMO's development, get answers to common questions, and learn about the team behind the game.
      </p>
    </div>

    {/* Patch Notes */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold text-discord-text">Patch Notes</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-discord-dark rounded-lg p-4">
          <p className="text-discord-muted text-sm leading-relaxed">
            Stay up to date with the latest changes, improvements, and new features added to IdleMMO. Patch notes are regularly updated to keep the community informed about game development progress.
          </p>
        </div>
        <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">How to Access</span>
          </div>
          <p className="text-discord-muted text-sm">
            Patch notes are available through the game's official channels and community platforms.
          </p>
        </div>
      </div>
    </div>

    {/* FAQs */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-bold text-discord-text">Frequently Asked Questions</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">Will the game be reset after the game leaves open beta?</h4>
            <p className="text-discord-muted text-sm">No, the game will not be reset.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">I have an idea on how to improve the game. Where can I post it?</h4>
            <p className="text-discord-muted text-sm">We accept any suggestions in our #suggestions channel on our official Discord server.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">How can I cancel my membership subscription?</h4>
            <p className="text-discord-muted text-sm">You can cancel your membership subscription by going to your settings.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">How can I delete my account?</h4>
            <p className="text-discord-muted text-sm">You can request a deletion of your account by going to your settings. Please note that it takes up to 21 days to process your request. You can cancel your deletion request at any time before the 21 days.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">How can I keep up to date on the development of IdleMMO?</h4>
            <p className="text-discord-muted text-sm">You can join our Discord server to stay up to date on the development of the game. You can also follow our development blog.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">Who develops this game?</h4>
            <p className="text-discord-muted text-sm">IdleMMO is developed by Galahad Creative Ltd. A software company based in England, UK.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">How can I contact you?</h4>
            <p className="text-discord-muted text-sm">You can contact us via email at idlemmo@galahadcreative.com.</p>
          </div>
          
          <div className="bg-discord-dark rounded-lg p-4">
            <h4 className="font-bold text-discord-text mb-2">I have more questions. Where can I ask them?</h4>
            <p className="text-discord-muted text-sm">You can ask any questions in our Discord server.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Road Map */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-discord-text">Road Map</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-discord-dark rounded-lg p-4">
          <p className="text-discord-muted text-sm leading-relaxed">
            Explore the future of IdleMMO with our development roadmap. See what features and improvements are planned, what's currently in development, and what has been completed.
          </p>
        </div>
        <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-medium text-sm">Development Transparency</span>
          </div>
          <p className="text-discord-muted text-sm">
            The roadmap provides insight into upcoming features, planned improvements, and the overall direction of the game's development.
          </p>
        </div>
      </div>
    </div>

    {/* Credits */}
    <div className="bg-discord-secondary rounded-lg border border-gray-600/50">
      <div className="p-6 border-b border-gray-600/50">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-discord-text">Credits</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <Crown className="w-5 h-5 text-amber-400" />
            <h4 className="font-bold text-discord-text">Lead Developer</h4>
          </div>
          <p className="text-discord-muted text-sm mb-4">Alexandre Bento</p>
          
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-5 h-5 text-blue-400" />
            <h4 className="font-bold text-discord-text">Development Team</h4>
          </div>
          <p className="text-discord-muted text-sm mb-4">Galahad Creative Ltd - England, UK</p>
          
          <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <p className="text-amber-200 text-sm">
              Special thanks to the IdleMMO community for their continued support, feedback, and contributions to making the game better.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

  </div>
)}