'use client'

import { useState } from 'react'
import { Users, UserPlus, MessageCircle, MoreHorizontal, Search, UserMinus, Crown, Shield } from 'lucide-react'

interface Friend {
  id: string
  name: string
  level: number
  class: string
  avatar: string
  isOnline: boolean
  lastSeen?: string
  location?: string
  status: 'friend' | 'pending' | 'received'
}

export default function Friends() {
  const [activeTab, setActiveTab] = useState<'friends' | 'received' | 'sent'>('friends')
  const [searchQuery, setSearchQuery] = useState('')

  const friends: Friend[] = [
    {
      id: '1',
      name: 'Guttojss',
      level: 346,
      class: 'Ranger',
      avatar: '🏹',
      isOnline: false,
      lastSeen: '2 hours ago',
      location: 'Mystic Forest',
      status: 'friend'
    },
    {
      id: '2',
      name: 'DragonSlayer99',
      level: 412,
      class: 'Warrior',
      avatar: '⚔️',
      isOnline: true,
      location: 'Dragon\'s Lair',
      status: 'friend'
    },
    {
      id: '3',
      name: 'MysticMage',
      level: 298,
      class: 'Mage',
      avatar: '🔮',
      isOnline: true,
      location: 'Crystal Tower',
      status: 'friend'
    },
    {
      id: '4',
      name: 'ShadowNinja',
      level: 367,
      class: 'Assassin',
      avatar: '🗡️',
      isOnline: false,
      lastSeen: '1 day ago',
      status: 'friend'
    }
  ]

  const pendingRequests: Friend[] = [
    {
      id: '5',
      name: 'NewPlayer123',
      level: 45,
      class: 'Warrior',
      avatar: '🛡️',
      isOnline: true,
      status: 'received'
    },
    {
      id: '6',
      name: 'ElfArcher',
      level: 156,
      class: 'Ranger',
      avatar: '🏹',
      isOnline: false,
      lastSeen: '30 minutes ago',
      status: 'received'
    }
  ]

  const sentRequests: Friend[] = [
    {
      id: '7',
      name: 'FireMage',
      level: 234,
      class: 'Mage',
      avatar: '🔥',
      isOnline: true,
      status: 'pending'
    }
  ]

  const getStatusColor = (isOnline: boolean) => {
    return isOnline ? 'bg-green-400' : 'bg-gray-500'
  }

  const getClassIcon = (className: string) => {
    switch (className.toLowerCase()) {
      case 'warrior': return <Shield className="w-4 h-4" />
      case 'mage': return '🔮'
      case 'ranger': return '🏹'
      case 'assassin': return '🗡️'
      default: return <Crown className="w-4 h-4" />
    }
  }

  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAcceptRequest = (friendId: string) => {
    console.log('Accepting friend request:', friendId)
  }

  const handleDeclineRequest = (friendId: string) => {
    console.log('Declining friend request:', friendId)
  }

  const handleRemoveFriend = (friendId: string) => {
    console.log('Removing friend:', friendId)
  }

  const handleSendMessage = (friendId: string) => {
    console.log('Sending message to:', friendId)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-discord-blurple" />
            <div>
              <h1 className="text-2xl font-bold text-discord-text">Friends</h1>
              <p className="text-discord-muted">Manage your friends and social connections</p>
            </div>
          </div>
          <button className="bg-discord-blurple hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Add Friend
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-discord-muted w-4 h-4" />
          <input
            type="text"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-discord-dark border border-gray-600/50 rounded-lg pl-10 pr-4 py-2 text-discord-text placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-discord-light rounded-lg border border-gray-600/50">
        <div className="flex border-b border-gray-600/50">
          <button
            onClick={() => setActiveTab('friends')}
            className={`flex-1 px-6 py-3 font-medium transition-colors ${
              activeTab === 'friends'
                ? 'text-discord-text border-b-2 border-discord-blurple bg-discord-dark/30'
                : 'text-discord-muted hover:text-discord-text'
            }`}
          >
            Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('received')}
            className={`flex-1 px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'received'
                ? 'text-discord-text border-b-2 border-discord-blurple bg-discord-dark/30'
                : 'text-discord-muted hover:text-discord-text'
            }`}
          >
            Received ({pendingRequests.length})
            {pendingRequests.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {pendingRequests.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('sent')}
            className={`flex-1 px-6 py-3 font-medium transition-colors ${
              activeTab === 'sent'
                ? 'text-discord-text border-b-2 border-discord-blurple bg-discord-dark/30'
                : 'text-discord-muted hover:text-discord-text'
            }`}
          >
            Sent ({sentRequests.length})
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'friends' && (
            <div className="space-y-4">
              {filteredFriends.length === 0 ? (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-discord-muted mx-auto mb-4" />
                  <p className="text-discord-muted">No friends found</p>
                </div>
              ) : (
                filteredFriends.map((friend) => (
                  <div
                    key={friend.id}
                    className="bg-discord-dark rounded-lg p-4 flex items-center justify-between hover:bg-gray-600/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-discord-light rounded-full flex items-center justify-center text-2xl">
                          {friend.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(friend.isOnline)} rounded-full border-2 border-discord-dark`}></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-discord-text">{friend.name}</h3>
                          <span className="text-discord-muted text-sm">Lv. {friend.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-discord-muted">
                          {getClassIcon(friend.class)}
                          <span>{friend.class}</span>
                          {friend.isOnline ? (
                            <span className="text-green-400">• Online</span>
                          ) : (
                            <span>• {friend.lastSeen}</span>
                          )}
                        </div>
                        {friend.location && (
                          <p className="text-xs text-discord-muted">📍 {friend.location}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSendMessage(friend.id)}
                        className="p-2 text-discord-muted hover:text-discord-text hover:bg-discord-light rounded-lg transition-colors"
                        title="Send Message"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRemoveFriend(friend.id)}
                        className="p-2 text-discord-muted hover:text-red-400 hover:bg-discord-light rounded-lg transition-colors"
                        title="Remove Friend"
                      >
                        <UserMinus className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-discord-muted hover:text-discord-text hover:bg-discord-light rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'received' && (
            <div className="space-y-4">
              <p className="text-discord-muted text-sm mb-4">
                {pendingRequests.length} out of 50 slots used
              </p>
              {pendingRequests.length === 0 ? (
                <div className="text-center py-8">
                  <UserPlus className="w-12 h-12 text-discord-muted mx-auto mb-4" />
                  <p className="text-discord-muted">No pending friend requests</p>
                </div>
              ) : (
                pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-discord-dark rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-discord-light rounded-full flex items-center justify-center text-2xl">
                          {request.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(request.isOnline)} rounded-full border-2 border-discord-dark`}></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-discord-text">{request.name}</h3>
                          <span className="text-discord-muted text-sm">Lv. {request.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-discord-muted">
                          {getClassIcon(request.class)}
                          <span>{request.class}</span>
                          {request.isOnline ? (
                            <span className="text-green-400">• Online</span>
                          ) : (
                            <span>• {request.lastSeen}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAcceptRequest(request.id)}
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-3 rounded transition-colors"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDeclineRequest(request.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded transition-colors"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'sent' && (
            <div className="space-y-4">
              {sentRequests.length === 0 ? (
                <div className="text-center py-8">
                  <MessageCircle className="w-12 h-12 text-discord-muted mx-auto mb-4" />
                  <p className="text-discord-muted">No sent friend requests</p>
                </div>
              ) : (
                sentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-discord-dark rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-discord-light rounded-full flex items-center justify-center text-2xl">
                          {request.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(request.isOnline)} rounded-full border-2 border-discord-dark`}></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-discord-text">{request.name}</h3>
                          <span className="text-discord-muted text-sm">Lv. {request.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-discord-muted">
                          {getClassIcon(request.class)}
                          <span>{request.class}</span>
                          {request.isOnline ? (
                            <span className="text-green-400">• Online</span>
                          ) : (
                            <span>• {request.lastSeen}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-sm font-medium">Pending</span>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}