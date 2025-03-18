import React from 'react';

export default function MonsterDetails({ selectedMonster, getMonsterIcon, getWeaknessIcon, status }) {
  if (!selectedMonster) {
    return <h2 className="text-gray-700">Select a monster</h2>;
  }

  return (
    <>
      <p className="mt-12 -mb-7 pt-2 text-[#54361E] text-center min-w-1/2 border-t-2">{selectedMonster.species}</p>
      <h2 className="mt-8 text-4xl text-[#54361E] text-center font-serif min-w-1/2 border-b-2 border-[#54361E] pb-2">{selectedMonster.name}</h2>
      <img className="w-60 mt-4" src={getMonsterIcon(selectedMonster.name)} alt={selectedMonster.name} loading='lazy'/>
      <div className="mt-4 w-2/3 border border-[#7B4F2D] rounded-md">
        <p className="text-2xl text-yellow-300 font-serif text-center text-outline bg-[#534a4a67]">Characteristics</p>
        <p className=" px-4 py-2 text-[#54361E]">
          {selectedMonster.description}
        </p>
      </div>
      <div className="mt-4 border ml-5 mr-5 w-1/1 border-[#7B4F2D] rounded-md">
        <p className="text-2xl text-yellow-300 font-serif text-center text-outline bg-[#534a4a67]">Weaknesses</p>
        <ul className="px-3 py-3 grid grid-cols-3 gap-5 justify-between justify-items-center text-[#54361E]">
          {selectedMonster.weaknesses.map((weakness, index) => (
            <li key={index} className="flex items-center">
              <p className="flex items-center">{weakness.element} (<img className="w-10 h-10" src={getWeaknessIcon(weakness.element)} alt={weakness.element} loading='lazy'/> ) :</p>
              <div className="flex brightness-150">
                {[...Array(weakness.stars)].map((_, i) => (
                  <img key={i} className="w-6 h-6" src={status["../assets/status/Star.svg"]} alt="star" loading='lazy'/>
                ))}
                {weakness.condition && <p>&nbsp;({weakness.condition})</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 border border-[#7B4F2D] rounded-md">
        <p className="text-2xl text-yellow-300 font-serif text-center text-outline bg-[#534a4a67]">Locations</p>
        <ul className="px-4 py-2 text-[#54361E]">
          {selectedMonster.locations.map((locations, index) => (
            <li key={index}>{locations.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}