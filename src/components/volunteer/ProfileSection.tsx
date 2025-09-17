'use client';

import { useState } from 'react';

interface Peer {
  id: number;
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
}

export default function ProfileSection() {
  const [showAllPeers, setShowAllPeers] = useState(false);

  const currentUser = {
    name: 'Krish',
    subtitle: 'Continue Your Journey & Achieve Your Target',
    avatar: '👨‍💼',
    greeting: 'Good Morning Krish'
  };

  const peers: Peer[] = [
    {
      id: 1,
      name: 'Ravi Prakash',
      role: 'Peer',
      avatar: '👤',
      isOnline: true
    },
    {
      id: 2,
      name: 'Akshat Sinha',
      role: 'Peer',
      avatar: '👤',
      isOnline: true
    },
    {
      id: 3,
      name: 'Khushi Upadhyaya',
      role: 'Peer',
      avatar: '👤',
      isOnline: false
    },
    {
      id: 4,
      name: 'Pranshi Chaubey',
      role: 'Peer',
      avatar: '👤',
      isOnline: true
    },
    {
      id: 5,
      name: 'John Doe',
      role: 'Peer',
      avatar: '👤',
      isOnline: false
    },
    {
      id: 6,
      name: 'Jane Smith',
      role: 'Peer',
      avatar: '👤',
      isOnline: true
    }
  ];

  const displayedPeers = showAllPeers ? peers : peers.slice(0, 4);

  return (
    <div className="w-80 bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col">
      {/* Welcome Section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          Welcome To FreeMind Oasis
        </h2>
        <p className="text-sm text-gray-300">
          Hope you are healthy and happy today!
        </p>
      </div>

      {/* User Profile */}
      <div className="px-6 py-4">
        <div className="bg-slate-700 rounded-xl p-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">{currentUser.avatar}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {currentUser.greeting}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {currentUser.subtitle}
          </p>
        </div>
      </div>

      {/* Your Peers Section */}
      <div className="flex-1 px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Your Peers</h3>
          <button className="text-orange-400 hover:text-orange-300 transition-colors">
            <span className="text-lg">➕</span>
          </button>
        </div>

        {/* Peers List */}
        <div className="space-y-3 mb-6">
          {displayedPeers.map((peer) => (
            <div key={peer.id} className="flex items-center space-x-3 p-3 bg-slate-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">{peer.avatar}</span>
                </div>
                {peer.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white">{peer.name}</h4>
                <p className="text-xs text-gray-400">{peer.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <button 
          onClick={() => setShowAllPeers(!showAllPeers)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
        >
          {showAllPeers ? 'Show Less' : 'See All'}
        </button>
      </div>

      {/* Quick Actions */}
      <div className="p-6 border-t border-slate-700">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors">
            📝 Notes
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors">
            📊 Stats
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors">
            🎯 Goals
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors">
            ⭐ Rewards
          </button>
        </div>
      </div>
    </div>
  );
}