'use client'

import { Crosshair, X, BarChart3, AlertTriangle, Clock } from 'lucide-react'

export default function DashboardPanels() {
  const equipmentItems = [
    { icon: '⚔️', rarity: 'blue' },
    { icon: '🛡️', rarity: 'blue' },
    { icon: '⚔️', rarity: 'blue' },
    { icon: '🎯', rarity: 'green' },
    { icon: '✏️', rarity: 'blue' },
    { icon: '👕', rarity: 'blue' },
    { icon: '👤', rarity: 'blue' },
    { icon: '🌿', rarity: 'green' },
    { icon: '⚔️', rarity: 'green' },
    { icon: '⚙️', rarity: 'blue' },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Hunting Panel */}
      <div className="panel">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-discord-green" />
            <h3 className="font-semibold text-discord-text">Hunting</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-discord-muted">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-mono">01:16:37</span>
            </div>
            <button className="text-discord-muted hover:text-discord-text">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="panel-content">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-discord-yellow/20 rounded-lg flex items-center justify-center">
              <span className="text-discord-yellow">⚔️</span>
            </div>
            <div className="flex-1">
              <div className="text-discord-text font-semibold">+29</div>
              <div className="text-sm text-discord-muted">Next enemy in 0m2s</div>
            </div>
          </div>
          <div className="w-full bg-discord-dark rounded-full h-2 mb-2">
            <div className="bg-discord-green h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="text-xs text-discord-muted">0.53 EXP/h</div>
        </div>
      </div>

      {/* Activity Panel */}
      <div className="panel">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-discord-blurple" />
            <h3 className="font-semibold text-discord-text">Activity</h3>
          </div>
          <select className="bg-discord-dark text-discord-text text-sm rounded px-2 py-1 border border-gray-600">
            <option>7 Days</option>
            <option>30 Days</option>
            <option>90 Days</option>
          </select>
        </div>
        <div className="panel-content">
          <div className="flex flex-col items-center justify-center h-32 text-center">
            <AlertTriangle className="w-8 h-8 text-discord-yellow mb-2" />
            <h4 className="font-semibold text-discord-text mb-1">No Data</h4>
            <p className="text-sm text-discord-muted">
              This character has not played enough for their data to be tracked.
            </p>
          </div>
        </div>
      </div>

      {/* Equipment Panel */}
      <div className="panel">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <span className="text-lg">🛡️</span>
            <h3 className="font-semibold text-discord-text">Equipment</h3>
          </div>
        </div>
        <div className="panel-content">
          <div className="grid grid-cols-5 gap-2">
            {equipmentItems.map((item, index) => (
              <div
                key={index}
                className={`equipment-slot ${
                  item.rarity === 'green' 
                    ? 'border-discord-green/50 bg-discord-green/10' 
                    : 'border-discord-blurple/50 bg-discord-blurple/10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}