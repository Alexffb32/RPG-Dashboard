import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Star, Sword, Fish, TreePine, Gem, Hammer, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';
import { useGame } from './GameState';

interface SkillCardProps {
  skill: {
    id: string;
    name: string;
    level: number;
    experience: number;
    experienceToNext: number;
    unlocked: boolean;
  };
  isTraining: boolean;
  onStartTraining: () => void;
  onStopTraining: () => void;
}

function SkillCard({ skill, isTraining, onStartTraining, onStopTraining }: SkillCardProps) {
  const getSkillIcon = (skillId: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      combat: <Sword className="w-5 h-5 text-red-400" />,
      mining: <Gem className="w-5 h-5 text-gray-400" />,
      woodcutting: <TreePine className="w-5 h-5 text-green-400" />,
      fishing: <Fish className="w-5 h-5 text-blue-400" />,
      crafting: <Hammer className="w-5 h-5 text-orange-400" />,
      magic: <Sparkles className="w-5 h-5 text-purple-400" />
    };
    return icons[skillId] || <Star className="w-5 h-5 text-yellow-400" />;
  };

  const getSkillDescription = (skillId: string) => {
    const descriptions: { [key: string]: string } = {
      combat: 'Train combat to increase your fighting abilities and unlock new weapons.',
      mining: 'Mine ores and gems to craft equipment and earn gold.',
      woodcutting: 'Cut trees to gather wood for crafting and construction.',
      fishing: 'Catch fish for food and rare materials.',
      crafting: 'Create weapons, armor, and tools from gathered materials.',
      magic: 'Study the arcane arts to cast powerful spells.'
    };
    return descriptions[skillId] || 'Train this skill to unlock new abilities.';
  };

  const progressPercentage = skill.experienceToNext > 0 
    ? ((skill.experience / (skill.experience + skill.experienceToNext)) * 100)
    : 100;

  if (!skill.unlocked) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 opacity-50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
            {getSkillIcon(skill.id)}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">{skill.name}</h3>
            <p className="text-gray-400 text-sm">Locked</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{getSkillDescription(skill.id)}</p>
      </div>
    );
  }

  return (
    <div className={`bg-gray-800 rounded-lg p-4 border transition-all duration-200 ${
      isTraining ? 'border-green-500 bg-green-900/20' : 'border-gray-600 hover:border-gray-500'
    }`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
          {getSkillIcon(skill.id)}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold">{skill.name}</h3>
          <p className="text-gray-400 text-sm">Level {skill.level}</p>
        </div>
        <button
          onClick={isTraining ? onStopTraining : onStartTraining}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            isTraining
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isTraining ? (
            <><Pause className="w-4 h-4 inline mr-1" />Stop</>
          ) : (
            <><Play className="w-4 h-4 inline mr-1" />Train</>
          )}
        </button>
      </div>
      
      <p className="text-gray-300 text-sm mb-3">{getSkillDescription(skill.id)}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Experience</span>
          <span className="text-white">{skill.experience.toLocaleString()}</span>
        </div>
        
        {skill.experienceToNext > 0 && (
          <>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>{skill.experience} XP</span>
              <span>{skill.experienceToNext} to next level</span>
            </div>
          </>
        )}
        
        {isTraining && (
          <div className="mt-2 p-2 bg-green-900/30 rounded border border-green-700">
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Training in progress... Gaining experience every 2 seconds!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const { gameState, startTraining, stopTraining, resetGame } = useGame();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleStartTraining = (skillId: string) => {
    if (gameState.isTraining) {
      alert('You are already training a skill! Stop the current training first.');
      return;
    }
    startTraining(skillId);
  };

  const handleStopTraining = () => {
    stopTraining();
  };

  const handleResetGame = () => {
    if (showResetConfirm) {
      resetGame();
      setShowResetConfirm(false);
    } else {
      setShowResetConfirm(true);
      setTimeout(() => setShowResetConfirm(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Skills</h2>
          <p className="text-gray-400">
            Train your skills to gain experience and unlock new abilities. Start at level 0 and work your way up!
          </p>
        </div>
        <button
          onClick={handleResetGame}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            showResetConfirm
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          }`}
        >
          <RotateCcw className="w-4 h-4 inline mr-1" />
          {showResetConfirm ? 'Confirm Reset' : 'Reset Game'}
        </button>
      </div>

      {/* Character Level Display */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-semibold">Character Level</h3>
          <span className="text-2xl font-bold text-yellow-400">Level {gameState.stats.level}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-yellow-500 h-3 rounded-full transition-all duration-300" 
            style={{ 
              width: `${gameState.stats.experienceToNext > 0 
                ? ((gameState.stats.experience / (gameState.stats.experience + gameState.stats.experienceToNext)) * 100)
                : 100}%` 
            }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>{gameState.stats.experience} XP</span>
          <span>{gameState.stats.experienceToNext} to next level</span>
        </div>
      </div>

      {/* Current Activity */}
      {gameState.isTraining && gameState.currentActivity && (
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-400 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Currently Training</span>
          </div>
          <p className="text-white">
            Training {gameState.skills.find(s => s.id === gameState.currentActivity)?.name || 'Unknown Skill'}
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Gaining experience every 2 seconds. You may also receive random items while training!
          </p>
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gameState.skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            isTraining={gameState.isTraining && gameState.currentActivity === skill.id}
            onStartTraining={() => handleStartTraining(skill.id)}
            onStopTraining={handleStopTraining}
          />
        ))}
      </div>

      {/* Gold Display */}
      <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-yellow-400 font-semibold">Gold</span>
          <span className="text-2xl font-bold text-yellow-400">{gameState.gold.toLocaleString()}</span>
        </div>
        <p className="text-gray-300 text-sm mt-1">
          Earn gold by training skills and selling items you find!
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
        <h3 className="text-blue-400 font-semibold mb-2">How to Play</h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Start by training Combat (the only unlocked skill)</li>
          <li>• Reach Combat level 5 to unlock Mining</li>
          <li>• Reach Mining level 3 to unlock Woodcutting</li>
          <li>• Train skills to gain character experience and level up</li>
          <li>• Find random items while training</li>
          <li>• Higher levels unlock better equipment and abilities</li>
        </ul>
      </div>
    </div>
  );
}