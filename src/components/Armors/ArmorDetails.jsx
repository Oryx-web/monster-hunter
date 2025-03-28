import React from 'react';

export default function ArmorDetails({ selectedArmor, getArmorIcon }) {
  if (!selectedArmor) return null;

  return (
    <>
      <p className="mt-12 -mb-7 pt-2 text-white text-center min-w-1/2 border-t-2">Rank: {selectedArmor.rank}</p>
      <h2 className="mt-8 text-4xl text-white text-center font-serif min-w-1/2 border-b-2 border-white pb-2">{selectedArmor.name}</h2>

      <div className="flex flex-col sm:flex-row gap-x-10 content-around justify-around">
        <div className="mt-4 w-52 content-center justify-items-center border border-gray-700 rounded-md">
          <p className="text-2xl w-full text-white font-serif text-center text-outline bg-[#534a4a67]">Male</p>
          <div className="py-1.5 items-center justify-center justify-items-center">
            {selectedArmor.pieces.map((piece) => (
              piece.assets !== null ? (
                piece.assets.imageMale !== null ?
                (
                <ul key={piece.id} className="w-20 h-20">
                  <img src={piece.assets.imageMale} alt={`${piece.name}`} loading='lazy' />
                </ul>
                )
                : (<p className="w-40 h-20 text-white text-center">No Armor Piece Available</p>) )
                : ((<p className="w-40 h-20 text-white text-center">No Armor Piece Available</p>)
              )
            ))}
          </div>
        </div>

        <div className="mt-4 w-52 content-center justify-items-center border border-gray-700 rounded-md">
          <p className="text-2xl w-full text-white font-serif text-center text-outline bg-[#534a4a67]">Female</p>
          <div className="py-1.5 items-center justify-center justify-items-center">
            {selectedArmor.pieces.map((piece) => (
              piece.assets !== null ? (
                piece.assets.imageFemale !== null ? (
                <ul key={piece.id} className="w-20 h-20">
                  <img src={piece.assets.imageFemale} alt={`${piece.name}`} loading='lazy' />
                </ul>
                )
              : (<p className="w-40 h-20 text-white text-center">No Armor Piece Available</p>) ) 
              : ((<p className="w-40 h-20 text-white text-center">No Armor Piece Available</p>)
            )
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border ml-5 mr-5 w-1/1 border-gray-700 rounded-md">
        <p className="text-2xl text-white font-serif text-center text-outline bg-[#534a4a67]">Parts</p>
        <ul className="px-3 py-3 grid grid-cols-1 sm:grid-cols-3 gap-5 justify-between justify-items-center text-white">
          {selectedArmor.pieces.map((piece, index) => (
            <li key={index} className="flex items-center">
              <p className="flex items-center"><img className="w-10 h-10" src={getArmorIcon(piece.type)} alt={piece.type} loading='lazy'/> {piece.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}