'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GameStats {
  level: number;
  experience: number;
  experienceToNext: number;
  strength: number;
  defense: number;
  speed: number;
  dexterity: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
}

interface GameSkill {
  id: string;
  name: string;
  level: number;
  experience: number;
  experienceToNext: number;
  unlocked: boolean;
}

interface GameItem {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'consumable' | 'material';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  quantity: number;
  stats?: { [key: string]: number };
  equipped?: boolean;
}

interface GameState {
  stats: GameStats;
  skills: GameSkill[];
  inventory: GameItem[];
  gold: number;
  isTraining: boolean;
  currentActivity: string | null;
}

interface GameContextType {
  gameState: GameState;
  gainExperience: (amount: number) => void;
  gainSkillExperience: (skillId: string, amount: number) => void;
  addItem: (item: Omit<GameItem, 'id'>) => void;
  removeItem: (itemId: string, quantity?: number) => void;
  equipItem: (itemId: string) => void;
  unequipItem: (itemId: string) => void;
  startTraining: (skillId: string) => void;
  stopTraining: () => void;
  addGold: (amount: number) => void;
  spendGold: (amount: number) => boolean;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialGameState: GameState = {
  stats: {
    level: 0,
    experience: 0,
    experienceToNext: 0,
    strength: 0,
    defense: 0,
    speed: 0,
    dexterity: 0,
    health: 500,
    maxHealth: 500,
    mana: 0,
    maxMana: 0
  },
  skills: [
    { id: 'combat', name: 'Combat', level: 0, experience: 0, experienceToNext: 0, unlocked: false },
    { id: 'mining', name: 'Mining', level: 0, experience: 0, experienceToNext: 0, unlocked: false },
    { id: 'woodcutting', name: 'Woodcutting', level: 0, experience: 0, experienceToNext: 0, unlocked: false },
    { id: 'fishing', name: 'Fishing', level: 0, experience: 0, experienceToNext: 0, unlocked: false },
    { id: 'crafting', name: 'Crafting', level: 0, experience: 0, experienceToNext: 0, unlocked: false },
    { id: 'magic', name: 'Magic', level: 0, experience: 0, experienceToNext: 0, unlocked: false }
  ],
  inventory: [],
  gold: 0,
  isTraining: false,
  currentActivity: null
};

function calculateLevelFromExp(experience: number): number {
  return Math.floor(Math.sqrt(experience / 100));
}

function calculateExpForLevel(level: number): number {
  return Math.pow(level + 1, 2) * 100;
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  // Load from localStorage on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rpg-game-state');
      if (saved) {
        try {
          setGameState(JSON.parse(saved));
        } catch (error) {
          console.error('Failed to parse saved game state:', error);
        }
      }
    }
  }, []);

  // Save to localStorage whenever gameState changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('rpg-game-state', JSON.stringify(gameState));
    }
  }, [gameState]);

  // Training loop
  useEffect(() => {
    if (!gameState.isTraining || !gameState.currentActivity) return;

    const interval = setInterval(() => {
      const baseExpGain = Math.floor(Math.random() * 5) + 1;
      gainSkillExperience(gameState.currentActivity!, baseExpGain);
      
      // Chance to get items while training
      if (Math.random() < 0.1) { // 10% chance
        const randomItems = getRandomTrainingReward(gameState.currentActivity!);
        if (randomItems) {
          addItem(randomItems);
        }
      }
    }, 2000); // Gain exp every 2 seconds

    return () => clearInterval(interval);
  }, [gameState.isTraining, gameState.currentActivity]);

  const gainExperience = (amount: number) => {
    setGameState(prev => {
      const newExp = prev.stats.experience + amount;
      const newLevel = calculateLevelFromExp(newExp);
      const leveledUp = newLevel > prev.stats.level;
      
      return {
        ...prev,
        stats: {
          ...prev.stats,
          experience: newExp,
          level: newLevel,
          experienceToNext: calculateExpForLevel(newLevel) - newExp,
          // Increase stats on level up
          strength: leveledUp ? prev.stats.strength + 1 : prev.stats.strength,
          defense: leveledUp ? prev.stats.defense + 1 : prev.stats.defense,
          speed: leveledUp ? prev.stats.speed + 1 : prev.stats.speed,
          dexterity: leveledUp ? prev.stats.dexterity + 1 : prev.stats.dexterity,
          maxHealth: leveledUp ? prev.stats.maxHealth + 5 : prev.stats.maxHealth,
          maxMana: leveledUp ? prev.stats.maxMana + 2 : prev.stats.maxMana,
          health: leveledUp ? prev.stats.maxHealth + 5 : prev.stats.health,
          mana: leveledUp ? prev.stats.maxMana + 2 : prev.stats.mana
        }
      };
    });
  };

  const gainSkillExperience = (skillId: string, amount: number) => {
    setGameState(prev => {
      const updatedSkills = prev.skills.map(skill => {
        if (skill.id === skillId) {
          const newExp = skill.experience + amount;
          const newLevel = calculateLevelFromExp(newExp);
          const leveledUp = newLevel > skill.level;
          
          // Unlock new skills when reaching certain levels
          if (leveledUp && skillId === 'combat' && newLevel >= 5) {
            unlockSkill('mining');
          }
          if (leveledUp && skillId === 'mining' && newLevel >= 3) {
            unlockSkill('woodcutting');
          }
          
          return {
            ...skill,
            experience: newExp,
            level: newLevel,
            experienceToNext: calculateExpForLevel(newLevel) - newExp
          };
        }
        return skill;
      });
      
      return { ...prev, skills: updatedSkills };
    });
    
    // Also gain character experience
    gainExperience(Math.floor(amount / 2));
  };

  const unlockSkill = (skillId: string) => {
    setGameState(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === skillId ? { ...skill, unlocked: true } : skill
      )
    }));
  };

  const addItem = (item: Omit<GameItem, 'id'>) => {
    setGameState(prev => {
      const existingItem = prev.inventory.find(i => i.name === item.name);
      
      if (existingItem) {
        return {
          ...prev,
          inventory: prev.inventory.map(i => 
            i.id === existingItem.id 
              ? { ...i, quantity: i.quantity + (item.quantity || 1) }
              : i
          )
        };
      } else {
        return {
          ...prev,
          inventory: [...prev.inventory, { ...item, id: Date.now().toString() }]
        };
      }
    });
  };

  const removeItem = (itemId: string, quantity: number = 1) => {
    setGameState(prev => ({
      ...prev,
      inventory: prev.inventory.reduce((acc, item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity - quantity;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as GameItem[])
    }));
  };

  const equipItem = (itemId: string) => {
    setGameState(prev => ({
      ...prev,
      inventory: prev.inventory.map(item => {
        if (item.id === itemId) {
          return { ...item, equipped: true };
        }
        // Unequip other items of the same type
        if (item.type === prev.inventory.find(i => i.id === itemId)?.type) {
          return { ...item, equipped: false };
        }
        return item;
      })
    }));
  };

  const unequipItem = (itemId: string) => {
    setGameState(prev => ({
      ...prev,
      inventory: prev.inventory.map(item => 
        item.id === itemId ? { ...item, equipped: false } : item
      )
    }));
  };

  const startTraining = (skillId: string) => {
    setGameState(prev => ({
      ...prev,
      isTraining: true,
      currentActivity: skillId
    }));
  };

  const stopTraining = () => {
    setGameState(prev => ({
      ...prev,
      isTraining: false,
      currentActivity: null
    }));
  };

  const addGold = (amount: number) => {
    setGameState(prev => ({ ...prev, gold: prev.gold + amount }));
  };

  const spendGold = (amount: number): boolean => {
    if (gameState.gold >= amount) {
      setGameState(prev => ({ ...prev, gold: prev.gold - amount }));
      return true;
    }
    return false;
  };

  const resetGame = () => {
    setGameState(initialGameState);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rpg-game-state');
    }
  };

  const getRandomTrainingReward = (skillId: string): Omit<GameItem, 'id'> | null => {
    const rewards: { [key: string]: Omit<GameItem, 'id'>[] } = {
      combat: [
        { name: 'Rusty Sword', type: 'weapon', rarity: 'common', quantity: 1, stats: { attack: 5 } },
        { name: 'Training Dummy Piece', type: 'material', rarity: 'common', quantity: 1 }
      ],
      mining: [
        { name: 'Copper Ore', type: 'material', rarity: 'common', quantity: 1 },
        { name: 'Stone', type: 'material', rarity: 'common', quantity: 2 }
      ],
      woodcutting: [
        { name: 'Oak Log', type: 'material', rarity: 'common', quantity: 1 },
        { name: 'Pine Log', type: 'material', rarity: 'common', quantity: 1 }
      ]
    };

    const skillRewards = rewards[skillId];
    if (!skillRewards) return null;
    
    return skillRewards[Math.floor(Math.random() * skillRewards.length)];
  };

  return (
    <GameContext.Provider value={{
      gameState,
      gainExperience,
      gainSkillExperience,
      addItem,
      removeItem,
      equipItem,
      unequipItem,
      startTraining,
      stopTraining,
      addGold,
      spendGold,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}