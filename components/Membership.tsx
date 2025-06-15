'use client'

import { useState } from 'react'
import { Crown, Star, Zap, Gift, Shield, Coins, Clock, CheckCircle, X } from 'lucide-react'

interface MembershipTier {
  id: string
  name: string
  price: number
  duration: string
  color: string
  bgColor: string
  features: string[]
  popular?: boolean
}

interface Benefit {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  tier: 'basic' | 'premium' | 'elite'
}

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState<string>('premium')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const membershipTiers: MembershipTier[] = [
    {
      id: 'free',
      name: 'Free Player',
      price: 0,
      duration: 'month',
      color: 'text-gray-400',
      bgColor: 'bg-gray-900/20 border-gray-500/30',
      features: [
        'Base Idle Time: 120 minutes',
        'Main Character Idle Time: 240 minutes',
        'Standard inventory slots',
        'Basic friends list (50 friends)',
        'Standard market listings (10)',
        'Regular daily rewards'
      ]
    },
    {
      id: 'member',
      name: 'Member',
      price: 4.99,
      duration: 'month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20 border-blue-500/30',
      features: [
        'Extended Base Idle Time: 180 minutes (+60 min)',
        'Extended Main Character Idle Time: 300 minutes (+60 min)',
        'Monthly Tokens: 200 initial + 100 monthly',
        '+15% EXP Boost (all activities)',
        '+10% Skill Efficiency',
        '+7 Extra Inventory Slots',
        'Doubled Friends List (100 friends)',
        'Improved Daily Rewards',
        'Longer Order Duration',
        '+7 Pet Management Slots',
        'Reduced Market Tax',
        'Exclusive Member Badge',
        'Name Flair Customization',
        'Increased Listing Limits (25 instead of 10)'
      ],
      popular: true
    }
  ]

  const benefits: Benefit[] = [
    {
      id: 'idle_time',
      name: 'Extended Idle Time',
      description: 'Base: 180 min (+60), Main Character: 300 min (+60)',
      icon: <Clock className="w-6 h-6" />,
      tier: 'basic'
    },
    {
      id: 'exp_boost',
      name: 'Experience & Efficiency Boost',
      description: '+15% EXP Boost and +10% Skill Efficiency for all activities',
      icon: <Zap className="w-6 h-6" />,
      tier: 'basic'
    },
    {
      id: 'monthly_tokens',
      name: 'Monthly Tokens',
      description: '200 tokens initially, then 100 tokens every month',
      icon: <Coins className="w-6 h-6" />,
      tier: 'basic'
    },
    {
      id: 'expanded_storage',
      name: 'Expanded Storage',
      description: '+7 inventory slots and +7 pet management slots',
      icon: <Gift className="w-6 h-6" />,
      tier: 'premium'
    },
    {
      id: 'social_features',
      name: 'Enhanced Social Features',
      description: 'Doubled friends list capacity and name flair customization',
      icon: <Star className="w-6 h-6" />,
      tier: 'premium'
    },
    {
      id: 'market_benefits',
      name: 'Market Benefits',
      description: 'Reduced market tax, increased listing limits (25), longer order duration',
      icon: <Shield className="w-6 h-6" />,
      tier: 'premium'
    },
    {
      id: 'exclusive_rewards',
      name: 'Exclusive Rewards',
      description: 'Improved daily rewards, exclusive member badge, and special perks',
      icon: <Crown className="w-6 h-6" />,
      tier: 'elite'
    }
  ]

  const currentMembership = {
    tier: 'premium',
    expiresAt: '2024-02-15',
    autoRenew: true
  }

  const getDiscountedPrice = (price: number) => {
    return billingCycle === 'yearly' ? price * 10 : price // 2 months free on yearly
  }

  const getSavings = (price: number) => {
    return billingCycle === 'yearly' ? price * 2 : 0
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-3xl font-bold text-discord-text mb-2">Membership</h1>
          <p className="text-discord-muted max-w-2xl mx-auto">
            Level up your IdleMMO experience with our membership subscription. Gain access to exclusive benefits, 
            discover new locations, and embark on thrilling adventures like never before.
          </p>
        </div>

        {/* Current Membership Status */}
        {currentMembership && (
          <div className="bg-discord-dark rounded-lg p-4 border border-purple-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Crown className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="font-bold text-discord-text">Premium Member</h3>
                  <p className="text-sm text-discord-muted">
                    Expires on {new Date(currentMembership.expiresAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                  Active
                </span>
                {currentMembership.autoRenew && (
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    Auto-Renew
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Billing Cycle Toggle */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="flex justify-center mb-6">
          <div className="bg-discord-dark rounded-lg p-1 flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-discord-blurple text-white'
                  : 'text-discord-muted hover:text-discord-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors relative ${
                billingCycle === 'yearly'
                  ? 'bg-discord-blurple text-white'
                  : 'text-discord-muted hover:text-discord-text'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-lg p-6 border-2 transition-all cursor-pointer relative ${
                selectedTier === tier.id
                  ? tier.bgColor + ' ring-2 ring-offset-2 ring-offset-discord-light'
                  : 'bg-discord-dark border-gray-600/50 hover:border-gray-500/50'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-discord-blurple text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${tier.color}`}>{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-discord-text">
                    ${billingCycle === 'yearly' ? getDiscountedPrice(tier.price).toFixed(2) : tier.price.toFixed(2)}
                  </span>
                  <span className="text-discord-muted">/{billingCycle === 'yearly' ? 'year' : tier.duration}</span>
                </div>
                {billingCycle === 'yearly' && getSavings(tier.price) > 0 && (
                  <div className="text-green-400 text-sm font-medium">
                    Save ${getSavings(tier.price).toFixed(2)}/year
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-discord-text text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  selectedTier === tier.id
                    ? 'bg-discord-blurple hover:bg-blue-600 text-white'
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                {currentMembership?.tier === tier.id ? 'Current Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Overview */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <h2 className="text-xl font-bold text-discord-text mb-6 text-center">Membership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-discord-dark rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-discord-blurple">{benefit.icon}</div>
                <h3 className="font-bold text-discord-text">{benefit.name}</h3>
              </div>
              <p className="text-discord-muted text-sm mb-3">{benefit.description}</p>
              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                benefit.tier === 'basic' ? 'bg-blue-900/30 text-blue-400' :
                benefit.tier === 'premium' ? 'bg-purple-900/30 text-purple-400' :
                'bg-yellow-900/30 text-yellow-400'
              }`}>
                {benefit.tier.charAt(0).toUpperCase() + benefit.tier.slice(1)}+
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <h2 className="text-xl font-bold text-discord-text mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-discord-dark rounded-lg p-4">
            <h3 className="font-bold text-discord-text mb-2">Can I cancel my membership anytime?</h3>
            <p className="text-discord-muted text-sm">
              Yes, you can cancel your membership at any time. You'll continue to have access to membership benefits 
              until your current billing period ends.
            </p>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <h3 className="font-bold text-discord-text mb-2">What happens to my progress if I cancel?</h3>
            <p className="text-discord-muted text-sm">
              Your character progress, items, and achievements are permanently saved. You'll only lose access to 
              membership-exclusive features and areas.
            </p>
          </div>
          <div className="bg-discord-dark rounded-lg p-4">
            <h3 className="font-bold text-discord-text mb-2">Can I upgrade or downgrade my plan?</h3>
            <p className="text-discord-muted text-sm">
              Yes, you can change your membership tier at any time. Changes will take effect at your next billing cycle.
            </p>
          </div>
        </div>
      </div>

      {/* Beta Notice */}
      <div className="bg-discord-light rounded-lg p-6 border border-gray-600/50">
        <div className="text-center text-discord-muted">
          <Clock className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">
            IdleMMO is currently in beta and is subject to change.
          </p>
        </div>
      </div>
    </div>
  )
}