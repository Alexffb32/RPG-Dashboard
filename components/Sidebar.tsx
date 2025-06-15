'use client'

import { 
  Search, 
  User, 
  Package, 
  Wand2, 
  Store, 
  Handshake, 
  Sword, 
  Heart, 
  Hammer, 
  Flag, 
  Users, 
  Trophy, 
  Crown, 
  Globe, 
  ChevronRight,
  ExternalLink
} from 'lucide-react'

interface SidebarProps {
  activeItem: string
  setActiveItem: (item: string) => void
}

export default function Sidebar({ activeItem, setActiveItem }: SidebarProps) {
  const youItems = [
    { id: 'Character', icon: User, label: 'Character' },
    { id: 'Inventory', icon: Package, label: 'Inventory' },
  ]

  const playItems = [
    { id: 'Skills', icon: Wand2, label: 'Skills', hasChevron: true },
    { id: 'Market', icon: Store, label: 'Market' },
    { id: 'Vendor', icon: Handshake, label: 'Vendor' },
    { id: 'Battle', icon: Sword, label: 'Battle' },
    { id: 'Pets', icon: Heart, label: 'Pets' },
    { id: 'Guild', icon: Hammer, label: 'Guild' },
  ]

  const moreItems = [
    { id: 'Campaign', icon: Flag, label: 'Campaign', badge: '5 Remaining' },
    { id: 'Friends', icon: Users, label: 'Friends' },
    { id: 'Leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'Membership', icon: Crown, label: 'Membership' },
    { id: 'Wiki', icon: Globe, label: 'Wiki', hasExternal: true },
  ]

  const renderNavItem = (item: any) => {
    const Icon = item.icon
    return (
      <li
        key={item.id}
        className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
        onClick={() => setActiveItem(item.id)}
      >
        <Icon className="w-5 h-5" />
        <span className="flex-1">{item.label}</span>
        {item.badge && (
          <span className="px-2 py-1 text-xs bg-discord-red text-white rounded-full">
            {item.badge}
          </span>
        )}
        {item.hasChevron && <ChevronRight className="w-4 h-4" />}
        {item.hasExternal && <ExternalLink className="w-4 h-4" />}
      </li>
    )
  }

  return (
    <aside className="w-64 bg-discord-dark border-r border-gray-700/50 flex flex-col">
      {/* Guild Icon */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="w-12 h-12 bg-discord-red rounded-xl flex items-center justify-center">
          <span className="text-2xl">🛡️</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-discord-muted" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-discord-darker text-discord-text placeholder-discord-muted pl-10 pr-16 py-2 rounded-md border border-gray-600/50 focus:border-discord-blurple focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-discord-muted">
            ALT+F
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto sidebar-scrollbar p-4 space-y-6">
        {/* You Section */}
        <div>
          <h3 className="text-xs font-semibold text-discord-muted uppercase tracking-wider mb-2">
            You
          </h3>
          <ul className="space-y-1">
            {youItems.map(renderNavItem)}
          </ul>
        </div>

        {/* Play Section */}
        <div>
          <h3 className="text-xs font-semibold text-discord-muted uppercase tracking-wider mb-2">
            Play
          </h3>
          <ul className="space-y-1">
            {playItems.map(renderNavItem)}
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h3 className="text-xs font-semibold text-discord-muted uppercase tracking-wider mb-2">
            More
          </h3>
          <ul className="space-y-1">
            {moreItems.map(renderNavItem)}
          </ul>
        </div>
      </nav>
    </aside>
  )
}