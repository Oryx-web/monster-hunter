import React from 'react';

export default function MonsterList({ monsters, selectedMonster, handleMonsterClick, getMonsterIcon }) {
  return (
    <div className="space-y-2 max-h-screen overflow-y-auto bg-no-repeat bg-cover" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background.webp')`}}>
      {monsters.map((monster) => (
        <div
          key={monster.id}
          onClick={() => handleMonsterClick(monster)}
          className={`cursor-pointer grid grid-cols-2 text-white p-4 justify-items-center items-center rounded-lg shadow-md border-b-2 border-b-yellow-900 transition-all duration-300 ${
            selectedMonster?.id === monster.id ? "glow" : ""}`}
        >
          <img className="w-30 h-30" src={getMonsterIcon(monster.name)} alt={monster.name} loading='lazy'/>
          <p className="text-2xl font-semibold text-white text-outline">{monster.name}</p>
        </div>
      ))}
    </div>
  );
}