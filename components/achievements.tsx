'use client'

import { useState, useEffect } from 'react';
import { Award, Check, Star, BookOpen, Code, Brain, X } from 'lucide-react';

export function Achievements({ currentCourse }: { currentCourse: string }) {
  const [achievements, setAchievements] = useState<string[]>([]);
  const [showAchievements, setShowAchievements] = useState(false);
  
  const achievementsList = [
    { id: 'first_chapter', title: 'First Steps', description: 'Complete your first chapter', icon: BookOpen },
    { id: 'five_chapters', title: 'Getting Started', description: 'Complete 5 chapters', icon: Check },
    { id: 'all_basics', title: 'Python Basics Master', description: 'Complete all basic Python chapters', icon: Star },
    { id: 'first_challenge', title: 'Challenger', description: 'Complete your first code challenge', icon: Code },
    { id: 'five_challenges', title: 'Code Warrior', description: 'Complete 5 code challenges', icon: Brain },
    { id: 'perfect_quiz', title: 'Perfect Score', description: 'Get 100% on a quiz', icon: Award },
  ];
  
  useEffect(() => {
    // Load achievements from localStorage
    const savedAchievements = localStorage.getItem(`achievements_${currentCourse}`);
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    }
  }, [currentCourse]);
  
  return (
    <>
      <button
        onClick={() => setShowAchievements(!showAchievements)}
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        <Award className="w-5 h-5" />
        <span>Achievements ({achievements.length}/{achievementsList.length})</span>
      </button>
      
      {showAchievements && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <button 
                onClick={() => setShowAchievements(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievementsList.map((achievement) => {
                const isUnlocked = achievements.includes(achievement.id);
                const Icon = achievement.icon;
                
                return (
                  <div 
                    key={achievement.id}
                    className={`p-4 rounded-lg border-2 ${
                      isUnlocked 
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' 
                        : 'border-gray-300 bg-gray-50 dark:bg-gray-900/20 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        isUnlocked ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 