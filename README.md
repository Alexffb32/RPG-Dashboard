# RPG Dashboard

A comprehensive Discord-themed RPG dashboard built with Next.js, React, and TypeScript. This project features a complete character management system, guild mechanics, battle system, and much more.

## 🎮 Features

### Character System
- **Character Creation**: Fully configurable character creation with appearance customization, stat allocation, and class selection
- **Character Classes**: 12 unique classes including Warrior, Mage, Archer, Rogue, Paladin, Necromancer, and more
- **Character Profiles**: Detailed character information with stats, equipment, and progression tracking
- **Character Selection**: Multi-character support with easy switching between characters

### Game Mechanics
- **Battle System**: Turn-based combat with skills, items, and strategic gameplay
- **Guild System**: Join guilds, participate in challenges, and compete with other players
- **Campaign Mode**: Story-driven adventures with multiple difficulty levels
- **Skills & Talents**: Character progression through skill trees and talent systems
- **Inventory Management**: Equipment, items, and resource management

### Social Features
- **Friends System**: Add friends, view their progress, and interact
- **Leaderboards**: Compete for top rankings in various categories
- **Badges & Achievements**: Unlock achievements and display badges

### Economy & Trading
- **Market System**: Buy and sell items with other players
- **Vendor System**: NPC merchants with rotating stock
- **Membership System**: Premium features and benefits

### Additional Features
- **Map Exploration**: Interactive world map with locations to discover
- **Pets System**: Collect and manage companion pets
- **Shrine System**: Worship deities for bonuses and blessings
- **Lore System**: Rich backstory and world-building content
- **Settings**: Customizable user preferences and configurations

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with Discord-themed design
- **Icons**: Lucide React for consistent iconography
- **State Management**: React Hooks and Context API
- **Build Tool**: Next.js with TypeScript support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Alexffb32/RPG-Dashboard.git
cd RPG-Dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
RPG-Dashboard/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Badges.tsx         # Achievement badges system
│   ├── Battle.tsx         # Combat system
│   ├── Campaign.tsx       # Story mode
│   ├── CharacterProfile.tsx # Character details
│   ├── CharacterSelection.tsx # Character creation & selection
│   ├── CharacterStats.tsx # Character statistics
│   ├── Friends.tsx        # Social features
│   ├── Guild.tsx          # Guild management
│   ├── Inventory.tsx      # Item management
│   ├── Leaderboard.tsx    # Rankings
│   ├── Map.tsx            # World exploration
│   ├── Market.tsx         # Trading system
│   ├── Pets.tsx           # Pet companions
│   ├── Settings.tsx       # User preferences
│   ├── Shrine.tsx         # Deity worship
│   ├── Skills.tsx         # Character progression
│   └── ...               # Additional components
├── public/                # Static assets
├── styles/                # Additional stylesheets
└── package.json           # Project dependencies
```

## 🎨 Design System

The application uses a Discord-inspired design system with:
- **Dark Theme**: Primary dark background with accent colors
- **Color Palette**: Discord blue (#5865F2) as primary, with semantic colors for different game elements
- **Typography**: Clean, readable fonts optimized for gaming interfaces
- **Components**: Reusable UI components following Discord's design patterns

## 🎯 Character Classes

### Available Classes
1. **Warrior** - Melee combat specialist with high defense
2. **Mage** - Magical damage dealer with powerful spells
3. **Archer** - Ranged combat expert with precision attacks
4. **Rogue** - Stealth-based assassin with critical strikes
5. **Paladin** - Holy warrior with healing and protection
6. **Necromancer** - Dark magic user with undead minions
7. **Berserker** - Fury-driven fighter with devastating attacks
8. **Druid** - Nature magic wielder with shapeshifting
9. **Monk** - Martial arts master with inner power

### Locked Classes (Special Unlock Required)
- **Forsaken** - Fallen hero with unique abilities
- **Cursed** - Afflicted warrior with dark powers
- **Banished** - Exiled champion with forbidden magic

## 🏆 Game Features

### Character Progression
- **Level System**: Gain experience to increase character level
- **Stat Allocation**: Distribute points across Health, Attack, and Defense
- **Skill Trees**: Unlock new abilities as you progress
- **Equipment**: Enhance your character with weapons and armor

### Combat System
- **Turn-Based**: Strategic combat with action planning
- **Skills**: Class-specific abilities with cooldowns
- **Items**: Consumables for healing and buffs
- **Difficulty Scaling**: Adaptive challenge based on character level

### Social Features
- **Guild Membership**: Join communities for group activities
- **Friend Lists**: Connect with other players
- **Leaderboards**: Compete for top rankings
- **Achievements**: Unlock badges for accomplishments

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Discord for design inspiration
- Lucide React for beautiful icons
- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling

## 🤖 AI Collaboration

This project was co-developed with AI assistance, leveraging artificial intelligence to enhance development efficiency, code quality, and feature implementation. The collaboration between human creativity and AI capabilities helped accelerate the development process while maintaining high standards of code architecture and user experience design.

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/Alexffb32/RPG-Dashboard/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

---

**Version**: Pre-Alpha  
**Last Updated**: June 2025  
**Status**: Active Development

Enjoy your RPG adventure! 🎮⚔️🏰
