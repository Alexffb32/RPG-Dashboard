'use client';

import React, { useState } from 'react';
import { X, Settings as SettingsIcon, User, Bell, Shield, Trash2, Volume2, Eye, Globe, Smartphone } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

type SettingsTab = 'account' | 'character' | 'notifications' | 'privacy' | 'audio' | 'display';

export default function Settings({ isOpen, onClose }: SettingsProps) {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');
  const [settings, setSettings] = useState({
    // Account settings
    email: 'player@example.com',
    mainCharacter: 'AlexRb',
    
    // Character settings
    displayActiveAction: true,
    appearOffline: false,
    displayTokens: true,
    membershipBoosts: true,
    tradeRequests: true,
    characterInteractions: true,
    globalPowerHunting: false,
    showGuildTag: true,
    
    // Notifications
    emailMarketing: true,
    reminders: true,
    announcements: true,
    pushNotifications: true,
    completedAction: true,
    shrineActivation: true,
    actionPop: true,
    
    // Audio
    masterVolume: 75,
    
    // Display
    showAllCharacters: true,
    showAllDungeons: false,
    automaticExperimental: false,
    
    // Privacy
    twoFactorAuth: false
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (!isOpen) return null;

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'character', label: 'Character', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'audio', label: 'Audio', icon: Volume2 },
    { id: 'display', label: 'Display', icon: Eye }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Main Character</h3>
              <p className="text-gray-400 text-sm mb-3">Select a character which is your main character to obtain an additional 240 minutes in idle time.</p>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Main Character</label>
                <select 
                  value={settings.mainCharacter}
                  onChange={(e) => updateSetting('mainCharacter', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
                  <option value="AlexRb">AlexRb</option>
                  <option value="Character2">Character2</option>
                  <option value="Character3">Character3</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Save
                </button>
                <p className="text-blue-400 text-sm">💡 You can change your main character once every 30 days.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
              <p className="text-gray-400 text-sm mb-3">Update your account's profile information and email address.</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email"
                    value={settings.email}
                    onChange={(e) => updateSetting('email', e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Change
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Update Password</h3>
              <p className="text-gray-400 text-sm mb-3">Ensure your account is using a long, random password to stay secure.</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
                  <input type="password" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
                  <input type="password" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                  <input type="password" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white" />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        );

      case 'character':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-900 border border-yellow-600 rounded p-3 mb-4">
              <p className="text-yellow-200 text-sm flex items-center gap-2">
                <span>⚠️</span>
                Any settings you adjust here only apply to your current character (AlexRb)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Profile</h3>
              <p className="text-gray-400 text-sm mb-3">Adjust your profile settings.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Display Active Action</p>
                    <p className="text-gray-400 text-sm">Show your current action on your profile to other players.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('displayActiveAction', !settings.displayActiveAction)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.displayActiveAction ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.displayActiveAction ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Appear Offline</p>
                    <p className="text-gray-400 text-sm">Have your status display as offline.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('appearOffline', !settings.appearOffline)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.appearOffline ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.appearOffline ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Display Tokens</p>
                    <p className="text-gray-400 text-sm">Display the amount of tokens you have on your profile.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('displayTokens', !settings.displayTokens)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.displayTokens ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.displayTokens ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Other</h3>
              <p className="text-gray-400 text-sm mb-3">Adjust other character settings.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Show Guild Tag</p>
                    <p className="text-gray-400 text-sm">Enable/disable the guild tag on your character name.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('showGuildTag', !settings.showGuildTag)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.showGuildTag ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.showGuildTag ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Email Notifications</h3>
              <p className="text-gray-400 text-sm mb-3">Manage which emails you receive.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Marketing</p>
                    <p className="text-gray-400 text-sm">Receive any emails related to any marketing or promotions.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('emailMarketing', !settings.emailMarketing)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.emailMarketing ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.emailMarketing ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Reminders</p>
                    <p className="text-gray-400 text-sm">Receive any emails related to any account reminders.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('reminders', !settings.reminders)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.reminders ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.reminders ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Announcements</p>
                    <p className="text-gray-400 text-sm">Receive any emails related to important announcements in the game.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('announcements', !settings.announcements)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.announcements ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.announcements ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Push Notifications</h3>
              <p className="text-gray-400 text-sm mb-3">Manage your push notifications here by selecting which types you wish to receive.</p>
              <div className="bg-red-900 border border-red-600 rounded p-3 mb-4">
                <p className="text-red-200 text-sm">⚠️ ATTENTION: Push notifications does not have push notifications enabled. You must enable them to receive push notifications.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-gray-400 text-sm">Enable/disable if you want to receive push notifications.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('pushNotifications', !settings.pushNotifications)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.pushNotifications ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Completed Action</p>
                    <p className="text-gray-400 text-sm">Get notified when an action completes.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('completedAction', !settings.completedAction)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.completedAction ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.completedAction ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Shrine Activation</p>
                    <p className="text-gray-400 text-sm">Get notified when the shrine activates.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('shrineActivation', !settings.shrineActivation)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.shrineActivation ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.shrineActivation ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
              <p className="text-gray-400 text-sm mb-3">Secure your account.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Two Factor Authentication (Email)</p>
                    <p className="text-gray-400 text-sm">Toggle whether to require a two factor authentication code when logging in using a new network.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('twoFactorAuth', !settings.twoFactorAuth)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Delete Account</h3>
              <p className="text-gray-400 text-sm mb-3">Process an account deletion and have all of your data destroyed.</p>
              <div className="bg-red-900 border border-red-600 rounded p-4">
                <h4 className="text-red-200 font-medium mb-2">Delete Account</h4>
                <p className="text-red-300 text-sm mb-3">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors flex items-center gap-2">
                  <Trash2 className="w-4 h-4" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Audio</h3>
              <p className="text-gray-400 text-sm mb-3">Adjust your audio settings.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Master Volume</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={settings.masterVolume}
                      onChange={(e) => updateSetting('masterVolume', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white w-12 text-right">{settings.masterVolume}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'display':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Characters</h3>
              <p className="text-gray-400 text-sm mb-3">Adjust any miscellaneous settings.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Show All Characters</p>
                    <p className="text-gray-400 text-sm">Toggle the visibility of your alternate characters on all your character profiles.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('showAllCharacters', !settings.showAllCharacters)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.showAllCharacters ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.showAllCharacters ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Show All Dungeons</p>
                    <p className="text-gray-400 text-sm">Toggle the visibility of all world bosses regardless of the character's current location.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('showAllDungeons', !settings.showAllDungeons)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.showAllDungeons ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.showAllDungeons ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Automatic (Experimental)</p>
                    <p className="text-gray-400 text-sm">Enable/disable animations. Disabling animations may increase performance but cause unintended side-effects. Disable at your own risk.</p>
                  </div>
                  <button 
                    onClick={() => updateSetting('automaticExperimental', !settings.automaticExperimental)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings.automaticExperimental ? 'bg-blue-600' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.automaticExperimental ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-[90vw] h-[80vh] max-w-6xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <SettingsIcon className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 border-r border-gray-700">
            <div className="p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as SettingsTab)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}