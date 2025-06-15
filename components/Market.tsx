'use client';

import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Eye, Clock, Star, TrendingUp, TrendingDown, Package, Coins } from 'lucide-react';

interface MarketItem {
  id: string;
  name: string;
  icon: string;
  price: number;
  quantity: number;
  seller: string;
  timeLeft: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  type: 'weapon' | 'armor' | 'consumable' | 'material' | 'misc';
  level?: number;
  stats?: string[];
}

interface MarketListing {
  id: string;
  item: MarketItem;
  listingType: 'buy' | 'sell';
  status: 'active' | 'fulfilled' | 'expired';
}

const marketItems: MarketItem[] = [
  {
    id: '1',
    name: 'Coal Ore',
    icon: '⚫',
    price: 300,
    quantity: 71,
    seller: 'MinerPro',
    timeLeft: '2d 14h',
    rarity: 'common',
    type: 'material'
  },
  {
    id: '2',
    name: 'Cooked Crab',
    icon: '🦀',
    price: 100,
    quantity: 411,
    seller: 'ChefMaster',
    timeLeft: '1d 8h',
    rarity: 'common',
    type: 'consumable'
  },
  {
    id: '3',
    name: 'Weapon Upgrade Stone',
    icon: '💎',
    price: 55555,
    quantity: 1248,
    seller: 'CraftLord',
    timeLeft: '3d 2h',
    rarity: 'rare',
    type: 'material'
  },
  {
    id: '4',
    name: 'Air Elemental Essence',
    icon: '💨',
    price: 435643,
    quantity: 260,
    seller: 'ElementMage',
    timeLeft: '5d 12h',
    rarity: 'epic',
    type: 'material'
  },
  {
    id: '5',
    name: 'Siren\'s Scales',
    icon: '🐟',
    price: 700,
    quantity: 20,
    seller: 'SeaHunter',
    timeLeft: '1d 4h',
    rarity: 'uncommon',
    type: 'material'
  },
  {
    id: '6',
    name: 'Cursed Blade Fragment',
    icon: '⚔️',
    price: 1298,
    quantity: 57,
    seller: 'DarkSmith',
    timeLeft: '2d 18h',
    rarity: 'rare',
    type: 'material'
  },
  {
    id: '7',
    name: 'Golem Core Fragment',
    icon: '🔮',
    price: 1000,
    quantity: 25,
    seller: 'CoreCollector',
    timeLeft: '4d 6h',
    rarity: 'rare',
    type: 'material'
  },
  {
    id: '8',
    name: 'Mercenary Sword',
    icon: '🗡️',
    price: 5000,
    quantity: 50,
    seller: 'WeaponDealer',
    timeLeft: '3d 15h',
    rarity: 'epic',
    type: 'weapon',
    level: 45,
    stats: ['+7 Agility', '+9 Accuracy', '+30 Attack Power']
  },
  {
    id: '9',
    name: 'Ruined Robes',
    icon: '👘',
    price: 3235,
    quantity: 40,
    seller: 'RobeTrader',
    timeLeft: '1d 22h',
    rarity: 'uncommon',
    type: 'armor'
  },
  {
    id: '10',
    name: 'Cursed Talisman',
    icon: '🔱',
    price: 1000,
    quantity: 95,
    seller: 'CursedDealer',
    timeLeft: '6d 8h',
    rarity: 'rare',
    type: 'misc'
  }
];

const userListings: MarketListing[] = [
  {
    id: 'u1',
    item: {
      id: 'u1',
      name: 'Lion Tooth',
      icon: '🦷',
      price: 185,
      quantity: 50,
      seller: 'You',
      timeLeft: '1h 30m',
      rarity: 'common',
      type: 'material'
    },
    listingType: 'sell',
    status: 'active'
  },
  {
    id: 'u2',
    item: {
      id: 'u2',
      name: 'Long Forgotten Necklace',
      icon: '📿',
      price: 22,
      quantity: 100,
      seller: 'You',
      timeLeft: '2h 15m',
      rarity: 'uncommon',
      type: 'misc'
    },
    listingType: 'sell',
    status: 'active'
  }
];

const purchaseOrders: MarketListing[] = [
  {
    id: 'p1',
    item: {
      id: 'p1',
      name: 'Elven Soulstone',
      icon: '💎',
      price: 100,
      quantity: 177,
      seller: 'You',
      timeLeft: '1w 2d',
      rarity: 'rare',
      type: 'material'
    },
    listingType: 'buy',
    status: 'active'
  },
  {
    id: 'p2',
    item: {
      id: 'p2',
      name: 'Umbral Claw',
      icon: '🗡️',
      price: 115,
      quantity: 100,
      seller: 'You',
      timeLeft: '5d 12h',
      rarity: 'epic',
      type: 'weapon'
    },
    listingType: 'buy',
    status: 'active'
  }
];

export default function Market() {
  const [activeTab, setActiveTab] = useState<'listings' | 'yours'>('listings');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedQuality, setSelectedQuality] = useState<string>('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'time' | 'quantity'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400/50';
      case 'uncommon': return 'border-green-400/50';
      case 'rare': return 'border-blue-400/50';
      case 'epic': return 'border-purple-400/50';
      case 'legendary': return 'border-yellow-400/50';
      default: return 'border-gray-400/50';
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const filteredItems = marketItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesQuality = selectedQuality === 'all' || item.rarity === selectedQuality;
    const matchesMinPrice = !minPrice || item.price >= parseInt(minPrice);
    const matchesMaxPrice = !maxPrice || item.price <= parseInt(maxPrice);
    
    return matchesSearch && matchesType && matchesQuality && matchesMinPrice && matchesMaxPrice;
  }).sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'quantity':
        comparison = a.quantity - b.quantity;
        break;
      case 'time':
        comparison = a.timeLeft.localeCompare(b.timeLeft);
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-discord-text">Market</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-discord-muted">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span>Your Gold: 17,540</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-discord-muted">
              <Package className="w-4 h-4 text-blue-400" />
              <span>Active Listings: 2</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('listings')}
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === 'listings'
                ? 'bg-discord-blurple text-white'
                : 'bg-discord-dark text-discord-muted hover:text-white'
            }`}
          >
            Listings
          </button>
          <button
            onClick={() => setActiveTab('yours')}
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === 'yours'
                ? 'bg-discord-blurple text-white'
                : 'bg-discord-dark text-discord-muted hover:text-white'
            }`}
          >
            Yours
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-4">
          {/* Search */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-discord-muted" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-discord-dark border border-gray-600 rounded text-white placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
              />
            </div>
          </div>

          {/* Item Type Filter */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Item Type</h3>
            <div className="space-y-2">
              {['all', 'sword', 'dagger', 'bow', 'special', 'chestplate', 'gauntlets'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedType === type
                      ? 'bg-discord-blurple text-white'
                      : 'text-discord-muted hover:text-white hover:bg-discord-dark'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Quality Filter */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Quality</h3>
            <div className="space-y-2">
              {['all', 'standard', 'refined', 'premium'].map((quality) => (
                <button
                  key={quality}
                  onClick={() => setSelectedQuality(quality)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedQuality === quality
                      ? 'bg-discord-blurple text-white'
                      : 'text-discord-muted hover:text-white hover:bg-discord-dark'
                  }`}
                >
                  {quality.charAt(0).toUpperCase() + quality.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Price Range</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-discord-muted mb-1">Minimum Tier</label>
                <input
                  type="text"
                  placeholder="Type here..."
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-discord-dark border border-gray-600 rounded text-white placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
                />
              </div>
              <div>
                <label className="block text-sm text-discord-muted mb-1">Maximum Tier</label>
                <input
                  type="text"
                  placeholder="Type here..."
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-discord-dark border border-gray-600 rounded text-white placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
                />
              </div>
            </div>
          </div>

          {/* Price Filter */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Price Filter</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-discord-muted mb-1">Minimum Price</label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full px-3 py-2 bg-discord-dark border border-gray-600 rounded text-white placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
                />
              </div>
              <div>
                <label className="block text-sm text-discord-muted mb-1">Maximum Price</label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full px-3 py-2 bg-discord-dark border border-gray-600 rounded text-white placeholder-discord-muted focus:outline-none focus:border-discord-blurple"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {activeTab === 'listings' ? (
            <>
              {/* Sort Controls */}
              <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-discord-text">Market Listings</h3>
                  <div className="flex items-center gap-4">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'price' | 'time' | 'quantity')}
                      className="px-3 py-2 bg-discord-dark border border-gray-600 rounded text-white focus:outline-none focus:border-discord-blurple"
                    >
                      <option value="price">Sort by Price</option>
                      <option value="quantity">Sort by Quantity</option>
                      <option value="time">Sort by Time</option>
                    </select>
                    <button
                      onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                      className="p-2 bg-discord-dark border border-gray-600 rounded text-white hover:bg-gray-600 transition-colors"
                    >
                      {sortOrder === 'asc' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                {filteredItems.length === 0 ? (
                  <div className="bg-discord-light rounded-lg p-8 border border-gray-600/50 text-center">
                    <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-discord-text mb-2">No Items</h3>
                    <p className="text-discord-muted">It looks like no items have been placed on the market.</p>
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <div key={item.id} className="bg-discord-light rounded-lg p-4 border border-gray-600/50 hover:bg-discord-dark transition-colors">
                      <div className="flex items-center gap-4">
                        {/* Item Icon */}
                        <div className={`w-12 h-12 rounded-lg border-2 ${getRarityBorder(item.rarity)} bg-discord-dark flex items-center justify-center text-2xl`}>
                          {item.icon}
                        </div>

                        {/* Item Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-semibold ${getRarityColor(item.rarity)}`}>{item.name}</h4>
                            {item.level && (
                              <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">Lv. {item.level}</span>
                            )}
                          </div>
                          {item.stats && (
                            <div className="text-xs text-discord-muted mb-1">
                              {item.stats.join(' • ')}
                            </div>
                          )}
                          <div className="text-sm text-discord-muted">
                            Seller: {item.seller} • Expires in {item.timeLeft}
                          </div>
                        </div>

                        {/* Price and Quantity */}
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Coins className="w-4 h-4 text-yellow-400" />
                            <span className="text-lg font-bold text-white">{formatNumber(item.price)}</span>
                          </div>
                          <div className="text-sm text-discord-muted">
                            Qty: {formatNumber(item.quantity)}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2">
                          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Buy
                          </button>
                          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          ) : (
            <>
              {/* Your Listings */}
              <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-discord-text">Your Active Listings</h3>
                  <button className="px-4 py-2 bg-discord-blurple hover:bg-blue-700 text-white rounded transition-colors">
                    Create Listing
                  </button>
                </div>

                <div className="space-y-2">
                  {userListings.map((listing) => (
                    <div key={listing.id} className="bg-discord-dark rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg border-2 ${getRarityBorder(listing.item.rarity)} bg-discord-light flex items-center justify-center text-xl`}>
                          {listing.item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${getRarityColor(listing.item.rarity)}`}>{listing.item.name}</h4>
                          <div className="text-sm text-discord-muted">Expires in {listing.item.timeLeft}</div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Coins className="w-4 h-4 text-yellow-400" />
                            <span className="font-bold text-white">{formatNumber(listing.item.price)}</span>
                          </div>
                          <div className="text-sm text-discord-muted">Qty: {listing.item.quantity}</div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-colors text-sm">
                            Cancel
                          </button>
                          <button className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors text-sm">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Orders */}
              <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-discord-text">Purchase Orders</h3>
                  <button className="px-4 py-2 bg-discord-blurple hover:bg-blue-700 text-white rounded transition-colors">
                    Create Order
                  </button>
                </div>

                <div className="space-y-2">
                  {purchaseOrders.map((order) => (
                    <div key={order.id} className="bg-discord-dark rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg border-2 ${getRarityBorder(order.item.rarity)} bg-discord-light flex items-center justify-center text-xl`}>
                          {order.item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${getRarityColor(order.item.rarity)}`}>{order.item.name}</h4>
                          <div className="text-sm text-discord-muted">Expires in {order.item.timeLeft}</div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Coins className="w-4 h-4 text-yellow-400" />
                            <span className="font-bold text-white">{formatNumber(order.item.price)}</span>
                          </div>
                          <div className="text-sm text-discord-muted">Qty: {order.item.quantity}</div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-colors text-sm">
                            Cancel
                          </button>
                          <button className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors text-sm">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}