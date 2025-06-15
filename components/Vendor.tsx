'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, Coins, Package, Star, Filter, RefreshCw } from 'lucide-react';

interface VendorItem {
  id: string;
  name: string;
  icon: string;
  price: number;
  category: 'weapon' | 'armor' | 'consumable' | 'material' | 'misc';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  level?: number;
  description: string;
  stats?: string[];
  inStock: boolean;
}

const vendorItems: VendorItem[] = [
  {
    id: '1',
    name: 'Iron Sword',
    icon: '⚔️',
    price: 150,
    category: 'weapon',
    rarity: 'common',
    level: 5,
    description: 'A sturdy iron sword perfect for beginning adventurers.',
    stats: ['+10 Attack Power', '+2 Strength'],
    inStock: true
  },
  {
    id: '2',
    name: 'Leather Armor',
    icon: '🛡️',
    price: 120,
    category: 'armor',
    rarity: 'common',
    level: 3,
    description: 'Basic leather armor that provides decent protection.',
    stats: ['+8 Defense', '+1 Agility'],
    inStock: true
  },
  {
    id: '3',
    name: 'Health Potion',
    icon: '🧪',
    price: 25,
    category: 'consumable',
    rarity: 'common',
    description: 'Restores 50 HP when consumed.',
    stats: ['Restores 50 HP'],
    inStock: true
  },
  {
    id: '4',
    name: 'Mana Potion',
    icon: '💙',
    price: 30,
    category: 'consumable',
    rarity: 'common',
    description: 'Restores 40 MP when consumed.',
    stats: ['Restores 40 MP'],
    inStock: true
  },
  {
    id: '5',
    name: 'Steel Dagger',
    icon: '🗡️',
    price: 200,
    category: 'weapon',
    rarity: 'uncommon',
    level: 8,
    description: 'A sharp steel dagger with increased critical hit chance.',
    stats: ['+12 Attack Power', '+5 Critical Rate', '+3 Agility'],
    inStock: true
  },
  {
    id: '6',
    name: 'Magic Ring',
    icon: '💍',
    price: 350,
    category: 'misc',
    rarity: 'rare',
    level: 10,
    description: 'A mystical ring that enhances magical abilities.',
    stats: ['+15 Magic Power', '+10 MP', '+2 Intelligence'],
    inStock: true
  },
  {
    id: '7',
    name: 'Dragon Scale',
    icon: '🐲',
    price: 500,
    category: 'material',
    rarity: 'epic',
    description: 'A rare crafting material from ancient dragons.',
    stats: ['Crafting Material', 'Very Rare'],
    inStock: false
  },
  {
    id: '8',
    name: 'Enchanted Bow',
    icon: '🏹',
    price: 450,
    category: 'weapon',
    rarity: 'rare',
    level: 12,
    description: 'A bow imbued with wind magic for increased range.',
    stats: ['+18 Attack Power', '+8 Range', '+4 Dexterity'],
    inStock: true
  },
  {
    id: '9',
    name: 'Plate Armor',
    icon: '🛡️',
    price: 600,
    category: 'armor',
    rarity: 'rare',
    level: 15,
    description: 'Heavy plate armor offering superior protection.',
    stats: ['+25 Defense', '+5 Strength', '-2 Agility'],
    inStock: true
  },
  {
    id: '10',
    name: 'Phoenix Feather',
    icon: '🪶',
    price: 1000,
    category: 'material',
    rarity: 'legendary',
    description: 'An extremely rare feather with resurrection properties.',
    stats: ['Legendary Material', 'Auto-Revive Effect'],
    inStock: false
  }
];

export default function Vendor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showCart, setShowCart] = useState(false);

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

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = vendorItems.find(i => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const filteredItems = vendorItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesRarity = selectedRarity === 'all' || item.rarity === selectedRarity;
    
    return matchesSearch && matchesCategory && matchesRarity;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-discord-text">Merchant Shop</h2>
            <p className="text-discord-muted">Welcome, traveler! Browse my wares and find what you need.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-discord-muted">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span>Your Gold: 17,540</span>
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative px-4 py-2 bg-discord-blurple hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Merchant Info */}
        <div className="bg-discord-dark rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-discord-light rounded-full flex items-center justify-center text-3xl">
              🧙‍♂️
            </div>
            <div>
              <h3 className="text-lg font-semibold text-discord-text">Gandor the Merchant</h3>
              <p className="text-sm text-discord-muted">"Quality goods at fair prices! I've been trading for over 30 years."</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-discord-muted">Reputation: Trusted</span>
                </div>
                <div className="flex items-center gap-1">
                  <Package className="w-4 h-4 text-blue-400" />
                  <span className="text-discord-muted">Items Available: {vendorItems.filter(i => i.inStock).length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-4">
          {/* Search */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Search Items</h3>
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

          {/* Category Filter */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Category</h3>
            <div className="space-y-2">
              {['all', 'weapon', 'armor', 'consumable', 'material', 'misc'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedCategory === category
                      ? 'bg-discord-blurple text-white'
                      : 'text-discord-muted hover:text-white hover:bg-discord-dark'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Rarity Filter */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Rarity</h3>
            <div className="space-y-2">
              {['all', 'common', 'uncommon', 'rare', 'epic', 'legendary'].map((rarity) => (
                <button
                  key={rarity}
                  onClick={() => setSelectedRarity(rarity)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedRarity === rarity
                      ? 'bg-discord-blurple text-white'
                      : `${rarity !== 'all' ? getRarityColor(rarity) : 'text-discord-muted'} hover:text-white hover:bg-discord-dark`
                  }`}
                >
                  {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <h3 className="text-lg font-semibold text-discord-text mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh Stock</span>
              </button>
              <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>View Specials</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {/* Cart Panel */}
          {showCart && (
            <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
              <h3 className="text-lg font-semibold text-discord-text mb-4">Shopping Cart</h3>
              {Object.keys(cart).length === 0 ? (
                <p className="text-discord-muted text-center py-4">Your cart is empty</p>
              ) : (
                <div className="space-y-3">
                  {Object.entries(cart).map(([itemId, quantity]) => {
                    const item = vendorItems.find(i => i.id === itemId);
                    if (!item) return null;
                    
                    return (
                      <div key={itemId} className="flex items-center justify-between bg-discord-dark rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded border ${getRarityBorder(item.rarity)} bg-discord-light flex items-center justify-center text-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className={`font-semibold ${getRarityColor(item.rarity)}`}>{item.name}</h4>
                            <div className="text-sm text-discord-muted">Qty: {quantity}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Coins className="w-4 h-4 text-yellow-400" />
                            <span className="font-bold text-white">{formatNumber(item.price * quantity)}</span>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => removeFromCart(itemId)}
                              className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                            >
                              -
                            </button>
                            <button
                              onClick={() => addToCart(itemId)}
                              className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="border-t border-gray-600 pt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold text-discord-text">Total:</span>
                    <div className="flex items-center gap-2">
                      <Coins className="w-5 h-5 text-yellow-400" />
                      <span className="text-xl font-bold text-white">{formatNumber(getTotalPrice())}</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded transition-colors font-semibold">
                    Purchase All Items
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Items Grid */}
          <div className="bg-discord-light rounded-lg p-4 border border-gray-600/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-discord-text">Available Items</h3>
              <div className="text-sm text-discord-muted">
                Showing {filteredItems.length} of {vendorItems.length} items
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-discord-text mb-2">No Items Found</h3>
                <p className="text-discord-muted">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className={`bg-discord-dark rounded-lg p-4 border-2 ${getRarityBorder(item.rarity)} ${!item.inStock ? 'opacity-50' : ''}`}>
                    {/* Item Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-lg border-2 ${getRarityBorder(item.rarity)} bg-discord-light flex items-center justify-center text-2xl`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${getRarityColor(item.rarity)}`}>{item.name}</h4>
                        {item.level && (
                          <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">Lv. {item.level}</span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-discord-muted mb-3">{item.description}</p>

                    {/* Stats */}
                    {item.stats && (
                      <div className="mb-3">
                        <div className="text-xs text-discord-muted mb-1">Stats:</div>
                        <div className="space-y-1">
                          {item.stats.map((stat, index) => (
                            <div key={index} className="text-xs text-green-400">{stat}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4 text-yellow-400" />
                        <span className="text-lg font-bold text-white">{formatNumber(item.price)}</span>
                      </div>
                      <div className="flex gap-2">
                        {item.inStock ? (
                          <button
                            onClick={() => addToCart(item.id)}
                            className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center gap-2 text-sm"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Buy
                          </button>
                        ) : (
                          <span className="px-3 py-2 bg-gray-600 text-gray-300 rounded text-sm">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}