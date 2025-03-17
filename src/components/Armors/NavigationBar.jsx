import React from 'react';

export default function NavigationBar({ selectedRank, setSelectedRank }) {
  return (
    <div className="w-full h-17 flex items-center justify-around rounded-lg border-b-2 border-b-blue-300 shadow-md">
      <a
        className={`flex flex-col items-center text-center p-5 bg-blue-500 rounded-lg hover:scale-105 transition-transform ${selectedRank === 'low' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedRank('low')}
      >
        <p className="text-white text-outline-armor">Low Rank</p>
      </a>

      <a
        className={`flex flex-col items-center text-center p-5 bg-red-500 rounded-lg hover:scale-105 transition-transform ${selectedRank === 'high' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedRank('high')}
      >
        <p className="text-white text-outline-armor">High Rank</p>
      </a>

      <a
        className={`flex flex-col items-center text-center p-5 bg-amber-400 rounded-lg hover:scale-105 transition-transform ${selectedRank === 'master' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedRank('master')}
      >
        <p className="text-white text-outline-armor">Master Rank</p>
      </a>
    </div>
  );
}