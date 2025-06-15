'use client'

import { BarChart3, ArrowRightLeft, Store, ChevronRight, ExternalLink } from 'lucide-react'

export default function BottomPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Update Panel */}
      <div className="panel">
        <div className="panel-content">
          <h4 className="font-semibold text-discord-text mb-2">New Update</h4>
          <p className="text-sm text-discord-muted mb-3">
            The game has been updated since you last visited.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-1 text-sm text-discord-blurple hover:text-discord-blurple/80 transition-colors"
          >
            New Update
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Metrics Panel */}
      <div className="panel cursor-pointer hover:bg-discord-light/50 transition-colors">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-discord-blurple" />
            <h3 className="font-semibold text-discord-text">Metrics</h3>
          </div>
          <ChevronRight className="w-4 h-4 text-discord-muted" />
        </div>
      </div>

      {/* Trades Panel */}
      <div className="panel cursor-pointer hover:bg-discord-light/50 transition-colors">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-discord-green" />
            <h3 className="font-semibold text-discord-text">Trades</h3>
          </div>
          <ChevronRight className="w-4 h-4 text-discord-muted" />
        </div>
      </div>

      {/* Market Panel */}
      <div className="panel cursor-pointer hover:bg-discord-light/50 transition-colors">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-discord-yellow" />
            <h3 className="font-semibold text-discord-text">Market</h3>
          </div>
          <ChevronRight className="w-4 h-4 text-discord-muted" />
        </div>
      </div>
    </div>
  )
}