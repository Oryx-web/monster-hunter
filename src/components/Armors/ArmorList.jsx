import React from 'react';

export default function ArmorList({ armors, selectedArmor, selectedPiece, handleArmorClick, handlePieceClick, getArmorIcon }) {
  
  return (
    <div className="space-y-2 max-h-screen max-w-screen mt-4 sm:mt-0 sm:w-140 overflow-x-auto overflow-y-auto bg-no-repeat bg-cover">
      {armors.map((armor) => (
        <div
          key={armor.id}
          onClick={() => handleArmorClick(armor)}
          className={`cursor-pointer flex text-white p-4 items-center justify-evenly justify-items-stretch rounded-lg mask-image shadow-md transition-all duration-300 ${
            selectedArmor?.id === armor.id ? "glow" : ""}`}
        >
          <p className="text-base sm:text-2xl font-semibold text-white text-outline">{armor.name}</p>
          <div className="w-1/1 flex justify-center gap-2.5">
            {armor.pieces.map((piece) => (
              <a
                key={piece.id}
                className={`${selectedPiece?.id === piece.id ? "glow" : ""}`}
                onClick={(e) => { e.stopPropagation(); handlePieceClick(piece); }}
              >
                <img className="w-10 h-10 p-0.5 sm:w-15 sm:h-15 sm:p-1.5 border border-gray-500 bg-gray-700 hover:scale-105" src={getArmorIcon(piece.type)} alt="" loading='lazy' />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}