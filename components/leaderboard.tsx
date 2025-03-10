'use client'

import { useState, useEffect } from 'react';
import { Trophy, X } from 'lucide-react';

// Add a type for the leaderboard data
type LeaderboardEntry = {
  name: string;
  points: number;
  completedChallenges: number;
};

export function Leaderboard() {
  // Specify the type for the state
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  useEffect(() => {
    // In a real implementation, this would fetch from a backend
    // For demo purposes, we'll use mock data
    const mockData = [
      { name: "Marjotte", points: 850, completedChallenges: 12 },
      { name: "Jolan", points: 720, completedChallenges: 10 },
      { name: "Nona", points: 680, completedChallenges: 9 },
      { name: "Rosie", points: 650, completedChallenges: 8 },
      { name: "Sebbe", points: 620, completedChallenges: 8 },
      { name: "Enes", points: 590, completedChallenges: 7 },
      { name: "Moya", points: 540, completedChallenges: 7 },
      { name: "Daniel", points: 510, completedChallenges: 6 },
      { name: "Hafsa", points: 480, completedChallenges: 6 },
      { name: "Yassin", points: 450, completedChallenges: 5 },
    ];
    
    setLeaderboardData(mockData);
  }, []);
  
  return (
    <>
      <button
        onClick={() => setShowLeaderboard(!showLeaderboard)}
        className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
      >
        <Trophy className="w-5 h-5" />
        <span>Leaderboard</span>
      </button>
      
      {showLeaderboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Leaderboard
              </h2>
              <button 
                onClick={() => setShowLeaderboard(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 text-left">#</th>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-right">Points</th>
                    <th className="py-2 px-4 text-right">Challenges</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-200 dark:border-gray-700 ${
                        index < 3 ? 'font-semibold' : ''
                      }`}
                    >
                      <td className="py-3 px-4">
                        {index === 0 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-500 text-white rounded-full">1</span>
                        ) : index === 1 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-400 text-white rounded-full">2</span>
                        ) : index === 2 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-700 text-white rounded-full">3</span>
                        ) : (
                          index + 1
                        )}
                      </td>
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4 text-right">{user.points}</td>
                      <td className="py-3 px-4 text-right">{user.completedChallenges}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 