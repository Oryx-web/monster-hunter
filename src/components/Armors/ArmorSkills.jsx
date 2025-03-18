import React from 'react';

export default function ArmorSkills({ selectedPiece, getArmorIcon, getWeaknessIcon, status }) {
    if (!selectedPiece) return null;
    
    return (
    <>
    <div className="flex w-full">
        <div className="h-max bg-[#2c2b2b93] flex flex-col justify-start bg-cover bg-no-repeat rounded-lg shadow-md border-[10px] border-gray-700 p-6 relative grow">
          <div className="bg-[#5353534f] h-14 flex justify-items-center items-center p-5 rounded-md">
            <img src={getArmorIcon(selectedPiece.type)} alt={selectedPiece.name} loading='lazy'/>
            <h2 className="text-white text-2xl font-serif">{selectedPiece.name}</h2>
          </div>
          <ul>
            <li className="pl-5 gap-3 bg-[#00000079] flex items-center justify-items-center justify-center rounded-md mask-image">
              <div className="w-1/1 flex justify-end border-b-2 border-dashed border-[#d0d85f57]">
                <p className="h-10 flex items-center text-white text-outline-armor pr-5">Rarity: {selectedPiece.rarity}</p>
              </div>
            </li>
            <li className="pl-5 gap-3 bg-[#00000079] flex items-center rounded-md mask-image">
              <div className="w-1/1 flex border-b-2 border-dashed border-[#d0d85f57]">
                <img className="w-9 h-9" src={`${status("defense_Icon.svg")}`} alt="Defense_Icon" loading='lazy'/>
                <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor">Defense</p>    
              </div>
              <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor pr-5">{selectedPiece.defense.base}</p>                
            </li>
            
            {Object.entries(selectedPiece.resistances).map(([type, value], index) => (
              <li key={index} className="pl-5 gap-3 bg-[#00000079] flex items-center rounded-md mask-image">
                <div className="w-1/1 flex justify-between border-b-2 border-dashed border-[#d0d85f57]">
                  <div className="flex">
                    <img className="w-10 h-10" src={getWeaknessIcon(type)} alt={type} loading='lazy'/>
                    <p className="flex items-center justify-evenly content-evenly text-white text-outline-armor">
                      Vs. {type}
                    </p>
                  </div>
                  <p className="flex items-center justify-evenly content-evenly text-white text-outline-armor pr-5">
                    {value}
                  </p>
                </div>
              </li>
            ))}
            </ul>
            <div className="ml-4 flex flex-col rounded-md">
              {selectedPiece.skills.length > 0 && 
                <p className="my-2.5 text-lg text-blue-400 font-serif text-center text-outline-armor">Skills</p>
              }
                <ul className="flex flex-col justify-between justify-items-center gap-1 text-white">
                    {selectedPiece.skills?.map((skill, index) => (
                        <div key={index}>
                        <li className="py-2.5 pl-5 gap-3 flex items-center rounded-md mask-image">
                            <p className="bg-black w-10 h-10"></p>
                            <div className="w-1/1">
                                <p className="py-0.5 pl-2.5 bg-[#534d4d79] flex items-center border-b-2 border-dashed border-[#d0d85f57] text-white text-outline-armor rounded-md">{skill.skillName}</p>
                                <div className='flex justify-between'>
                                    <p className='py-0.5 pl-2.5 flex'>
                                        {[...Array(skill.level)].map((_, i) => (
                                            <img key={i} className="w-5 h-5" src={status("/Star.svg")} alt="star" loading='lazy'/>
                                        ))}
                                    </p>
                                    <p className="flex items-center pr-5 text-white text-outline-armor">Level {skill.level}</p>
                                </div>
                            </div>
                        </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}